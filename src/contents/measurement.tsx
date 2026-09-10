import { Inspirations, InspirationLink } from "../components/Inspirations";

export function Measurement() {
  const links: InspirationLink[] = [
    { year: 2024, teamName: "Austin-utexas", pageName: "measurement" },
    { year: 2024, teamName: "KULeuven", pageName: "measurement" },
    { year: 2024, teamName: "Freiburg", pageName: "measurement" },
    { year: 2023, teamName: "William-and-Mary", pageName: "measurement" },
    { year: 2023, teamName: "Estonia-TUIT", pageName: "measurement" },
    { year: 2023, teamName: "UNILausanne", pageName: "measurement" },
  ];

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <div className="bd-callout bd-callout-info">
            <h4>Best Measurement</h4>
            <p>
              Measurements are critical to scientific communication and
              advancement. Well-reported measurements are the only way to show
              whether hardware is functioning correctly, whether data are
              reliable and whether a result is actually important. There is high
              value in identifying appropriate targets for measurement,
              collecting precise measurements, and reporting results clearly and
              with appropriate units. Document your careful measurement efforts
              and you could win this award!
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
        <div className="col-lg-8">
          <h2>Overview</h2>
          <hr />
          <p>
            {" "}
            If you've done excellent work in measurement, you should consider
            nominating your team for this special prize. Synthetic Biology needs
            great measurement approaches for characterizing parts, and efficient
            new methods for characterizing many parts at once. If you've done
            something exciting in the area of Measurement, describe it here!
          </p>
        </div>
        <Inspirations inspirationLinkList={links} />
      </div>
    </>
  );
}
