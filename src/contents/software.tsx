import { Inspirations, InspirationLink } from "../components/Inspirations";

export function Software() {
  const links: InspirationLink[] = [
    { year: 2024, teamName: "Vilnius-Lithuania", pageName: "software" },
    { year: 2023, teamName: "Fudan", pageName: "software" },
  ];

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <div className="bd-callout bd-callout-info">
            <h4>Best Software Tool</h4>
            <p>
              Regardless of what the topic is, iGEM projects often create or
              adapt computational tools to move their overall project forward.
              Because they are born out of a direct practical need, these
              software tools (or new computational methods) can even prove
              surprisingly useful for others. Without necessarily being big or
              complex, they can make the crucial difference to a project's
              success. This award tries to find and honor such "nuggets" of
              computational work. To be eligible, your software has to be
              documented and made available under an OSI-approved open-source
              license.
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
          <h2>What Should this Page Contain?</h2>
          <hr />
          <p>
            This page should aim to make your software accessible and
            understandable to a wide audience, supplementing the detailed
            technical documentation available on the repository.
          </p>
          <ul>
            <li>
              Provide a clear and concise overview of the software's purpose and
              functionality.
            </li>
            <li>
              Use non-technical language to make it accessible to a broad
              audience.
            </li>
            <li>
              Create step-by-step instructions on how to use the software.
            </li>
            <li>Include screenshots and visual aids to guide users.</li>
            <li>
              Explain how to integrate the software with other tools or
              platforms.
            </li>
            <li>
              Explain the key design choices made during the software's
              development.
            </li>
            <li>
              Discuss any trade-offs or compromises made during the design
              process.
            </li>
            <li>
              Provide a high-level overview of the software's architecture.
            </li>
            <li>
              Provide clear instructions on how to deploy and install the
              software.
            </li>
            <li>Provide an overview of the software's API, if applicable.</li>
          </ul>
        </div>
        <Inspirations inspirationLinkList={links} />
      </div>
    </>
  );
}
