import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { getPathMapping, stringToSlug } from "../../utils";
import { useEffect, useLayoutEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { NotFound } from "../../components/NotFound";
import { Footer } from "../../components/Footer";
import { Toc } from "../../components/toc";
import { BackToTop } from "../../components/BackToTop";
import { LoadingScreen } from "../../components/LoadingScreen";

const MINIMUM_LOADING_TIME = 600;
const MAXIMUM_LOADING_TIME = 8000;

const App = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const pathMapping = getPathMapping();
  const currentPath =
    location.pathname
      .split(`${stringToSlug(import.meta.env.VITE_TEAM_NAME)}`)
      .pop() || "/";

  // Set Page Title
  const currentPage =
    currentPath in pathMapping ? pathMapping[currentPath] : undefined;
  const navigationTitle = currentPage
    ? currentPage.navigationTitle
    : "Not Found";

  useEffect(() => {
    document.title = `${navigationTitle || ""} | ${import.meta.env.VITE_TEAM_NAME} - iGEM ${import.meta.env.VITE_TEAM_YEAR}`;
  }, [navigationTitle]);

  useEffect(() => {
    document.documentElement.classList.add("scrollbar");
    document.body.classList.add("scrollbar");

    return () => {
      document.documentElement.classList.remove("scrollbar");
      document.body.classList.remove("scrollbar");
    };
  }, []);

  useLayoutEffect(() => {
    let cancelled = false;
    const startedAt = performance.now();
    setIsLoading(true);

    const waitForPageAssets = async () => {
      await new Promise<void>((resolve) =>
        requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
      );

      const contentImages = Array.from(
        document.querySelectorAll<HTMLImageElement>(".content img"),
      ).filter((image) => image.loading !== "lazy");

      const imagePromises = contentImages.map((image) => {
        if (image.complete) return Promise.resolve();
        return new Promise<void>((resolve) => {
          image.addEventListener("load", () => resolve(), { once: true });
          image.addEventListener("error", () => resolve(), { once: true });
        });
      });

      const fontsReady = document.fonts?.ready ?? Promise.resolve();
      const assetsReady = Promise.all([...imagePromises, fontsReady]);
      const timeout = new Promise<void>((resolve) =>
        window.setTimeout(resolve, MAXIMUM_LOADING_TIME),
      );

      await Promise.race([assetsReady, timeout]);
      const remainingTime = Math.max(
        0,
        MINIMUM_LOADING_TIME - (performance.now() - startedAt),
      );
      await new Promise((resolve) => window.setTimeout(resolve, remainingTime));

      if (!cancelled) setIsLoading(false);
    };

    void waitForPageAssets();

    return () => {
      cancelled = true;
    };
  }, [location.key]);

  return (
    <div className="app">
      <LoadingScreen visible={isLoading} />

      {/* Navigation */}
      <Navbar />

      {/* Header and PageContent */}
      <main
        className={`content ${currentPath === "/" ? "content-home" : "content-page"}`}
      >
        <Routes>
          {Object.entries(pathMapping).map(
            ([path, { title, component: Component }]) => (
              <Route
                key={path}
                path={path}
                element={
                  path === "/" ? (
                    <div className="home-container">
                      <Component />
                    </div>
                  ) : (
                    <Toc key={path} title={title || ""}>
                      <Component />
                    </Toc>
                  )
                }
              />
            ),
          )}
          <Route
            path="*"
            element={
              <>
                <Header title="Not Found" />
                <NotFound />
              </>
            }
          />
        </Routes>
      </main>

      <BackToTop />

      {/* Footer */}
      {/* MUST mention license AND have a link to team wiki's repository on gitlab.igem.org */}
      {currentPath !== "/" && <Footer />}
    </div>
  );
};

export default App;
