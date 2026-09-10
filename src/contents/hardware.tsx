import { Inspirations, InspirationLink } from "../components/Inspirations";

export function Hardware() {
  const links: InspirationLink[] = [
    { year: 2024, teamName: "Aachen", pageName: "hardware" },
    { year: 2023, teamName: "Rochester", pageName: "hardware" },
    { year: 2023, teamName: "HUST-China", pageName: "hardware" },
    { year: 2023, teamName: "Kyoto", pageName: "hardware" },
  ];

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <div className="bd-callout bd-callout-info">
            <h4>Best Hardware</h4>
            <p>
              This is a prize for the team that has developed a piece of
              hardware for synthetic biology. Hardware in iGEM should make
              synthetic biology based on standard parts easier, faster, better
              or more accessible to our community. Did your team make a sensor
              to help teams characterize parts? Did you make a robot that can
              help teams perform experiments or do cloning more easily? Strong
              competitors for this prize will demonstrate utility, user testing,
              and easy reproducibility.
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
            In addition to encouraging teams to work with DNA parts and build
            biological devices in the lab, iGEM also encourages other types of
            technical solutions for synthetic biology. This can include physical
            devices (hardware) related to robotic assembly, microfluidics,
            low-cost measurement devices, to name a few examples. There are many
            exciting opportunities for hardware innovation in synthetic biology.
          </p>
        </div>
        <Inspirations inspirationLinkList={links} />
      </div>
    </>
  );
}
