import { Inspirations, InspirationLink } from "../components/Inspirations";

export function Home() {
  const links: InspirationLink[] = [
    { year: 2024, teamName: "JU-Krakow", pageName: "" },
    { year: 2024, teamName: "GEMS-Taiwan", pageName: "" },
    { year: 2024, teamName: "Heidelberg", pageName: "" },
    { year: 2024, teamName: "Marburg", pageName: "" },
    { year: 2024, teamName: "Sydney-Australia", pageName: "" },
    { year: 2024, teamName: "Toulouse-INSA-UPS", pageName: "" },
    { year: 2024, teamName: "BNDS-China", pageName: "" },
    { year: 2024, teamName: "Vilnius-Lithuania", pageName: "" },
    { year: 2024, teamName: "BNUZH-China", pageName: "" },
    { year: 2024, teamName: "XMU-China", pageName: "" },
  ];

  return (
    <>
      <div className="row">
        <div className="col">
          <h2>Essential First Steps</h2>
          <hr />
          <p>
            Familiarize yourself with the official iGEM competition rules,
            policies, and judging criteria:
          </p>
          <ul>
            <li>
              Carefully review the{" "}
              <a
                href="https://competition.igem.org/deliverables/team-wiki"
                target="_blank"
              >
                Wiki Requirements page
              </a>{" "}
              to ensure your wiki meets all necessary standards for judging and
              awards.
            </li>
            <li>
              Understand the criteria and required wiki pages for Gold, Silver,
              and Bronze Medals on the{" "}
              <a
                href="https://competition.igem.org/judging/medals"
                target="_blank"
              >
                Medals page
              </a>
              .
            </li>
            <li>
              Explore the various Project Prizes and their corresponding wiki
              requirements on the{" "}
              <a
                href="https://competition.igem.org/judging/project-prizes"
                target="_blank"
              >
                Project Prizes Page
              </a>
              .
            </li>
            <li>
              Discover the eligibility criteria and wiki requirements for
              Special Prizes on the{" "}
              <a
                href="https://competition.igem.org/judging/special-prizes"
                target="_blank"
              >
                Special Prizes Page
              </a>
              .
            </li>
          </ul>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <h2>Test Image Deployment</h2>
          <hr />
          <p>This is a test to verify that static assets are correctly deployed and accessible.</p>
          <div className="text-center">
            <img 
              src={`${import.meta.env.BASE_URL}images/anyareese.jpg`} 
              alt="Test Deployment" 
              className="img-fluid rounded shadow"
              style={{ maxHeight: '500px' }}
            />
            <p className="text-muted mt-2">
              Image source: <code>{import.meta.env.BASE_URL}images/anyareese.jpg</code>
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <h2>Building Your Wiki</h2>
          <hr />
          <ul>
            <li>
              <b>Content First, Design Second</b>: Focus on clearly documenting
              your project, research, and activities. Design can be refined
              later.
            </li>
            <li>
              <b>Navigation is Key</b>: Structure your wiki with clear and
              intuitive navigation. Visitors should easily find information.
            </li>
            <li>
              <b>Accessibility Matters</b>: Use readable fonts, appropriate
              color contrast, and ensure your wiki is mobile-friendly.
            </li>
            <li>
              <b>Media Optimization</b>: Compress images and videos to reduce
              file sizes and improve loading times.
            </li>
            <li>
              <b>Document Early & Often</b>: Start documenting your project from
              day one. Don't wait until the Wiki Freeze.
            </li>
            <li>
              <b>Prepare for Deadlines</b>: Stay up-to-date with important
              deadlines and events by checking the{" "}
              <a href="https://competition.igem.org/calendar" target="_blank">
                iGEM Competition Calendar
              </a>
              .
            </li>
          </ul>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-8">
          <h2>Tips for Success</h2>
          <hr />
          <ul>
            <li>
              <b>Clearly Define Your Project</b>: Explain your project's goals,
              methodology, and expected outcomes in a clear and concise manner.
            </li>
            <li>
              <b>Show Your Progress</b>: Regularly update your wiki with your
              team's progress, experiments, and results.
            </li>
            <li>
              <b>Engage Your Audience</b>: Consider your global audience and use
              language that is accessible to everyone.
            </li>
            <li>
              <b>Human Practices & Safety</b>: Thoroughly document your team's
              human practices activities and safety considerations.
            </li>
            <li>
              <b>Collaborate & Share</b>: Highlight collaborations with other
              teams and institutions.
            </li>
            <li>
              <b>Have Fun and Learn!</b> iGEM is a unique opportunity to learn,
              grow, and contribute to synthetic biology.
            </li>
          </ul>
        </div>
        <Inspirations inspirationLinkList={links} />
      </div>
    </>
  );
}
