import { useEffect } from "react";

export function Attributions() {
  const teamID = import.meta.env.VITE_TEAM_ID;

  useEffect(() => {
    function listenToIframeHeight(e: MessageEvent) {
      if (e.origin === "https://teams.igem.org") {
        const { type, data } = JSON.parse(e.data);
        if (type === "igem-attribution-form") {
          const element = document.getElementById("igem-attribution-form");
          if (element) {
            element.style.height = `${data + 100}px`;
          }
        }
      }
    }
    window.addEventListener("message", listenToIframeHeight);
    return () => {
      window.removeEventListener("message", listenToIframeHeight);
    };
  }, []);

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <div className="bd-callout bd-callout-info">
            <h4>Bronze Medal Criterion #2</h4>
            <p>
              Describe what work your team members did and what other people did
              for your project using the standardized Project Attributions Form.
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
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <h2>What Should this Page Contain?</h2>
          <hr />
          <ul>
            <li>The standard navigation menu of your wiki</li>
            <li>The standard footer of your wiki</li>
            <li>
              The embedded iframe containing your standardized team's Project
              Attribution form.
            </li>
            <li>Nothing else</li>
          </ul>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <h2>Tips for Success</h2>
          <hr />
          <p>
            Teams must use the official Attributions form. This form clearly
            delineates the work conducted by your team members and the support
            received from others. Carefully review the instructions and
            requirements of this deliverable on the{" "}
            <a href="https://competition.igem.org/deliverables/project-attribution">
              Project Attribution page
            </a>
            . Please note:
          </p>
          <ul>
            <li>
              Teams must use the standard form. Do not create your own form.
            </li>
            <li>
              The standard Attributions Form must be filled out completely,
              accurately and honestly.
            </li>
            <li>
              For the best results, we recommend teams start filling out the
              Attributions Form early in the season and updating it often.
            </li>
          </ul>
        </div>
      </div>

      {/*
        ======================================================================
        == VERY IMPORTANT                                                   ==
        ======================================================================
        LEAVE THE IFRAME CODE BELOW AS IT IS, THE ATTRIBUTION FORM OF YOUR TEAM
        WILL BE DISPLAYED ON THIS PAGE. DO NOT REMOVE IT, OTHERWISE YOU RISK OF
        NOT MEETING BRONZE MEDAL CRITERION #2
      */}

      <div className="row mt-4">
        <iframe
          style={{ width: "100%" }}
          id="igem-attribution-form"
          src={`https://teams.igem.org/wiki/${teamID}/attributions`}
        />
      </div>
      {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
    </>
  );
}
