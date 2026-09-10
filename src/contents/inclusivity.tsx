import { Inspirations, InspirationLink } from "../components/Inspirations";

export function Inclusivity() {
  const links: InspirationLink[] = [
    { year: 2024, teamName: "Patras-Med", pageName: "inclusivity" },
    { year: 2024, teamName: "Fudan", pageName: "inclusivity" },
    { year: 2023, teamName: "UniMuenster", pageName: "inclusivity" },
    { year: 2023, teamName: "UGM-Indonesia", pageName: "inclusivity" },
    { year: 2023, teamName: "Vilnius-Lithuania", pageName: "inclusivity" },
    { year: 2023, teamName: "NIS-Kazakhstan", pageName: "inclusivity" },
  ];

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <div className="bd-callout bd-callout-info">
            <h4>Inclusivity Award</h4>
            <p>
              The Inclusivity Award recognizes exceptional efforts to include
              people with diverse identities in scientific research. Who is
              allowed to have a voice in iGEM, synthetic biology and science
              more broadly? How have you developed new opportunities to
              eliminate barriers and allow more people to contribute to,
              participate in and/or be represented by these communities? To
              compete for this prize, activities do not have to be directly
              related to your team’s project. Document your approach, how you
              improved inclusivity and what was learned.
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
            We should all recognize the importance of building an open and
            welcoming scientific community. A more diverse community involved in
            creating knowledge and technology is more likely to produce a more
            equitable and representative system. Every individual, regardless of
            background or experience, should have an equal opportunity to engage
            with scientific knowledge and technological development. Everyone
            should be able to share their opinions on the societal implications
            of research.
          </p>
        </div>
        <Inspirations inspirationLinkList={links} />
      </div>
    </>
  );
}
