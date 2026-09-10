import { Inspirations, InspirationLink } from "../components/Inspirations";

export function Sustainability() {
  const links: InspirationLink[] = [
    { year: 2024, teamName: "Hangzhou-BioX", pageName: "sustainable" },
    { year: 2024, teamName: "UZurich", pageName: "sustainable" },
    { year: 2024, teamName: "Ulink-SZ", pageName: "sustainable" },
    { year: 2024, teamName: "GEC-Beijing", pageName: "sustainable" },
    { year: 2023, teamName: "Thessaloniki", pageName: "sustainable" },
  ];

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <div className="bd-callout bd-callout-info">
            <h4>Best Sustainable Development Impact</h4>
            <p>
              The Sustainable Development Goals (SDGs) are a call to action to
              integrally address global environmental, social, and economic
              challenges. iGEM teams can answer this call with this prize.
              Demonstrate how you have evaluated your project ideas against one
              or more of the SDGs, how you’ve consulted with SDG stakeholders,
              and how you’ve begun to form collaborations with other iGEM teams
              around the SDGs. You’re encouraged to look back at previous iGEM
              projects to evaluate them against the SDGs, and build upon them.
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
