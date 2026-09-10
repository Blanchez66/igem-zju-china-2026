import { Inspirations, InspirationLink } from "../components/Inspirations";

export function Entrepreneurship() {
  const links: InspirationLink[] = [
    { year: 2024, teamName: "UToronto", pageName: "entrepreneurship" },
    { year: 2024, teamName: "Ionis-Paris", pageName: "entrepreneurship" },
    { year: 2023, teamName: "Leiden", pageName: "entrepreneurship" },
  ];

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <div className="bd-callout bd-callout-info">
            <h4>Best Entrepreneurship</h4>
            <p>
              The Best Entrepreneurship Prize recognizes exceptional effort to
              build a business case and commercialize an iGEM project. This
              award can go to a new project, or to a previous project that a
              team has aimed to commercialize. Successful teams will (1)
              construct a business plan based on customer needs and expert
              knowledge on feasibility and (2) create a minimum viable product.
            </p>
            <hr />
            <p>
              Visit the{" "}
              <a href="https://competition.igem.org/judging/special-prizes">
                Special Prizes page
              </a>{" "}
              for more information.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <Inspirations inspirationLinkList={links} />
      </div>
    </>
  );
}
