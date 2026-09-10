import { Inspirations, InspirationLink } from "../components/Inspirations";

export function HumanPractices() {
  const links: InspirationLink[] = [
    { year: 2024, teamName: "JU-Krakow", pageName: "human-practices" },
    { year: 2024, teamName: "EPFL", pageName: "human-practices" },
    { year: 2024, teamName: "Freiburg", pageName: "human-practices" },
    { year: 2024, teamName: "Marburg", pageName: "human-practices" },
    { year: 2024, teamName: "CJUH-JLU-China", pageName: "human-practices" },
    { year: 2024, teamName: "Stanford", pageName: "human-practices" },
  ];

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <div className="bd-callout bd-callout-info">
            <h4>Silver Medal Criterion #2</h4>
            <p>
              Explain how you have determined your work is responsible and good
              for the world.
            </p>
            <hr />
            <p>
              Visit the{" "}
              <a href="https://competition.igem.org/judging/medals">
                Medals page
              </a>{" "}
              for more information.
            </p>
          </div>

          <div className="bd-callout bd-callout-info">
            <h4>Best Integrated Human Practices</h4>
            <p>
              How does your project affect society and how does society
              influence the direction of your project? How might ethical
              considerations and stakeholder input guide your project purpose,
              design and the experiments you conduct in the lab? How did this
              feedback enter into the process of your work throughout the iGEM
              Competition? Document a thoughtful and creative approach to
              exploring these questions and how your project evolved in the
              process, to compete for this award.
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
            At iGEM, Human Practices is about more than just outreach. It's
            about actively considering the societal implications of your
            synthetic biology project and demonstrating how those considerations
            have shaped your work. This page documents our team's Human
            Practices activities and their impact on our project.
          </p>
          <div className="bd-callout bd-callout-info">
            <p>
              For more information, visit the{" "}
              <a href="https://responsibility.igem.org/human-practices/what-is-human-practices">
                Human Practices Hub
              </a>
              .
            </p>
          </div>
          <ul>
            <li>
              You should demonstrate how you have thoughtfully and creatively
              addressed the question: "Is our project responsible and good for
              the world?"
            </li>
            <li>
              Clearly identify the ethical, social, safety, security, and
              sustainability issues relevant to your project.
            </li>
            <li>
              Document all interactions with experts, stakeholders, and the
              public.
            </li>
            <li>
              Explain how the insights gained from your Human Practices
              activities influenced your project's purpose, design, and
              execution.
            </li>
            <li>
              Discuss any ethical dilemmas or challenges encountered during your
              project.
            </li>
            <li>
              Assess the potential social impact of your project, both positive
              and negative.
            </li>
            <li>Consider the perspectives of diverse stakeholders.</li>
          </ul>
        </div>
        <Inspirations inspirationLinkList={links} />
      </div>
    </>
  );
}
