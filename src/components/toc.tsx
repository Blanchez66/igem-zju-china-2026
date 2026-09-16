import { useEffect, useRef, useState, type ReactNode } from "react";
import { Header } from "./Header";
import "./toc.css";

type Heading = { id: string; text: string; level: number };

export function Toc({
  title,
  lead,
  children,
}: {
  title: string;
  lead: string;
  children: ReactNode;
}) {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const tocRef = useRef<HTMLElement>(null);
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [headerColumnClass, setHeaderColumnClass] = useState("col-lg-12");

  useEffect(() => {
    const content = contentRef.current;
    const header = headerRef.current;
    const footer = document.querySelector("footer.footer");
    if (!content || !header) return;

    const elements = Array.from(
      content.querySelectorAll<HTMLElement>("h2, h3"),
    );
    const column = elements[0]?.closest('[class*="col-"]');
    if (column) {
      setHeaderColumnClass(Array.from(column.classList)
        .filter(name => name.startsWith("col-") || name === "mx-auto")
        .join(" "));
    }
    const usedIds = new Set(
      Array.from(document.querySelectorAll("[id]"), (node) => node.id),
    );
    elements.forEach((element, index) => {
      if (element.id) return;
      const slug =
        (element.textContent || "section")
          .trim()
          .toLowerCase()
          .replace(/[^\p{L}\p{N}]+/gu, "-")
          .replace(/^-|-$/g, "") || "section";
      let id = slug;
      let suffix = index + 1;
      while (usedIds.has(id)) id = `${slug}-${suffix++}`;
      element.id = id;
      usedIds.add(id);
    });
    setHeadings(
      elements.map((element) => ({
        id: element.id,
        text: element.textContent || "",
        level: element.tagName === "H2" ? 1 : 2,
      })),
    );

    let frame = 0;
    const update = () => {
      frame = 0;
      const footerRect = footer?.getBoundingClientRect();
      const footerVisible = !!footerRect &&
        footerRect.top < window.innerHeight && footerRect.bottom > 0;
      setVisible(header.getBoundingClientRect().bottom <= 0 && !footerVisible);
      const offset = elements[0]
        ? parseFloat(window.getComputedStyle(elements[0]).scrollMarginTop) || 112
        : 112;
      let current = elements[0]?.id || "";
      for (const element of elements) {
        if (element.getBoundingClientRect().top <= offset + 2) current = element.id;
        else break;
      }
      setActiveId(current);
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(content);
    observer.observe(header);
    if (footer) observer.observe(footer);

    // Support opening a direct link to a section after its generated ID exists.
    if (window.location.hash) {
      let id = window.location.hash.slice(1);
      try {
        id = decodeURIComponent(id);
      } catch {
        /* Ignore malformed URL escapes. */
      }
      elements.find((element) => element.id === id)?.scrollIntoView();
    }
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const nav = tocRef.current;
    const active = nav?.querySelector<HTMLElement>('[aria-current="location"]');
    const list = nav?.querySelector<HTMLElement>(".page-toc-list");
    if (!active || !list || !visible) return;
    const itemRect = active.getBoundingClientRect();
    const listRect = list.getBoundingClientRect();
    if (itemRect.top < listRect.top)
      list.scrollTop -= listRect.top - itemRect.top;
    else if (itemRect.bottom > listRect.bottom)
      list.scrollTop += itemRect.bottom - listRect.bottom;
  }, [activeId, visible]);

  return (
    <>
      <div ref={headerRef} className={headings.length > 1 ? "page-header-with-toc" : ""}>
        <Header title={title} lead={lead} columnClassName={headerColumnClass} />
      </div>
      <div
        className={`page-layout ${headings.length > 1 ? "page-layout-with-toc" : ""}`}
      >
        {headings.length > 1 && (
          <nav
            ref={tocRef}
            aria-label="On this page"
            className={`page-toc ${visible ? "page-toc-visible" : ""}`}
          >
            <h2 className="page-toc-title">On this page</h2>
            <ul id="page-toc-list" className="page-toc-list">
              {headings.map((heading) => (
                <li
                  key={heading.id}
                  className={`page-toc-level-${heading.level}`}
                >
                  <a
                    href={`#${heading.id}`}
                    aria-current={
                      activeId === heading.id ? "location" : undefined
                    }
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <div ref={contentRef} className="container page-article">
          {children}
        </div>
      </div>
    </>
  );
}
