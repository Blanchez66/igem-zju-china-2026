import { Inspirations, InspirationLink } from "../components/Inspirations";

export function Model() {
  const links: InspirationLink[] = [
    { year: 2024, teamName: "UToronto", pageName: "model" },
    { year: 2024, teamName: "Heidelberg", pageName: "model" },
    { year: 2024, teamName: "Waseda-Tokyo", pageName: "model" },
    { year: 2024, teamName: "BNUZH-China", pageName: "model" },
    { year: 2024, teamName: "CJUH-JLU-China", pageName: "model" },
    { year: 2024, teamName: "Tsinghua", pageName: "model" },
  ];

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <div className="bd-callout bd-callout-info">
            <h4>Best Model</h4>
            <p>
              Models and computer simulations can help us understand the
              function and operation of BioBrick Parts and Devices. Simulation
              and modeling are critical engineering skills that can contribute
              to project design or provide a better understanding of the modeled
              process. These processes are even more useful and/or informative
              when real-world data are included in the model. This award is for
              teams who build a model of their system and use it to inform
              system design or simulate expected behavior before, or in
              conjunction with, experiments in the wetlab.
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
            Mathematical models and computer simulations provide a great way to
            describe the function and operation of Parts and Devices. Synthetic
            Biology is an engineering discipline, and part of engineering is
            simulation and modeling to determine the behavior of your design
            before you build it. Designing and simulating can be iterated many
            times in a computer before moving to the lab.
          </p>
        </div>
        <Inspirations inspirationLinkList={links} />
      </div>
    </>
  );
}
