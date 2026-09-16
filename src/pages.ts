import {
  Design,
  ProofOfConcept,
  Implementation,
  FuturePlan,
  Protocol,
  Parts,
  Sponsors,
  Attributions,
  Contribution,
  Description,
  Engineering,
  Experiments,
  Home,
  HumanPractices,
  Notebook,
  Results,
  SafetyAndSecurity,
  Members,
  Education,
  Entrepreneurship,
  Hardware,
  Inclusivity,
  Measurement,
  Model,
  Plant,
  Software,
  Sustainability,
} from "./contents";

interface Base {
  name: string | undefined;
}

class Folder implements Base {
  name: string | undefined;
  folder: Page[] | undefined;
}

class Page implements Base {
  name: string | undefined;
  title: string | undefined;
  path: string | undefined;
  component: React.FC | undefined;
  lead: string | undefined;
}

const Pages: (Page | Folder)[] = [
  {
    name: "Home",
    title: "",
    path: "/",
    component: Home,
    lead: "",
  },
  {
    name: "Project",
    folder: [
      {
      name: "Description",
      title: "Project Description",
      path: "/description",
      component: Description,
      lead: "Describe how and why you chose your iGEM project.",
      },
      {
      name: "Design",
      title: "Design",
      path: "/design",
      component: Design,
      lead: "",
      },
      {
      name: "Proof of Concept",
      title: "Proof of Concept",
      path: "/proof-of-concept",
      component: ProofOfConcept,
      lead: "",
      },
      {
      name: "Implementation",
      title: "Implementation",
      path: "/implementation",
      component: Implementation,
      lead: "",
      },
      {
      name: "Future Plan",
      title: "Future Plan",
      path: "/future-plan",
      component: FuturePlan,
      lead: "",
      },
      {
      name: "Contribution",
      title: "Contribution",
      path: "/contribution",
      component: Contribution,
      lead: "Make a useful contribution for future iGEM teams and document it on this page.",
      },
    ],
  },
  {
  name: "Engineering",
  title: "Engineering Success",
  path: "/engineering",
  component: Engineering,
  lead: "Demonstrate engineering success in a technical aspect of your project by going through at least one iteration of the engineering design cycle.",
  },
  {
    name: "Wet Lab",
    folder: [
      {
      name: "Experiments",
      title: "Experiments",
      path: "/experiments",
      component: Experiments,
      lead: "",
      },
      {
      name: "Result",
      title: "Results",
      path: "/results",
      component: Results,
      lead: "Present the results of your project, along with a detailed analysis and discussion of their significance. Also outline future plans and reflections on the impact of your project.",
      },
      {
      name: "Protocol",
      title: "Protocol",
      path: "/protocol",
      component: Protocol,
      lead: "",
      },
      {
      name: "Parts",
      title: "Parts",
      path: "/parts",
      component: Parts,
      lead: "",
      },
      {
      name: "Safety",
      title: "Safety and Security",
      path: "/safety-and-security",
      component: SafetyAndSecurity,
      lead: "Detail the safety and security considerations of your project, adressing potential risks and outlining the measures taken to mitigate them.",
      },
    ],
  },
  {
    name: "Dry Lab",
    folder: [
      {
      name: "Hardware",
      title: "Hardware",
      path: "/hardware",
      component: Hardware,
      lead: "Hardware in iGEM should make synthetic biology based on standard parts easier, faster, better, or more accessible to our community.",
      },
      {
      name: "Software",
      title: "Software",
      path: "/software",
      component: Software,
      lead: "Software in iGEM should make synthetic biology based on standard parts easier, faster, better or more accessible to our community.",
      },
      {
      name: "Model",
      title: "Model",
      path: "/model",
      component: Model,
      lead: "Explain your model's assumptions, data, parameters, and results in a way that anyone could understand.",
      },
    ],
  },
  {
    name: "Engagement",
    folder: [
      {
      name: "Integrated Human Practices",
      title: "Human Practices",
      path: "/human-practices",
      component: HumanPractices,
      lead: "We ask every team to think deeply and creatively about whether their project is responsible and good for the world. Consider how the world affects your work and how your work affects the world.",
      },
      {
      name: "Entrepreneurship",
      title: "Entrepreneurship",
      path: "/entrepreneurship",
      component: Entrepreneurship,
      lead: "The entrepreneurship prize recognizes exceptional effort to build a business case and commercialize an iGEM project.",
      },
      {
      name: "Education",
      title: "Education",
      path: "/education",
      component: Education,
      lead: "Innovative educational tools and outreach activities have the ability to establish a two-way dialogue with new communities by discussing public values and the science behind synthetic biology.",
      },
    ],
  },
  {
    name: "Team",
    folder: [
      {
      name: "Notebook",
      title: "Notebook",
      path: "/notebook",
      component: Notebook,
      lead: "This serves as a chronological record of your team's progress throughout the season. It documents your daily activities, experiments, discussions, and decisions.",
      },
      {
      name: "Members",
      title: "Meet Our Team",
      path: "/members",
      component: Members,
      lead: "This page is dedicated to introducing the individuals who made our iGEM project possible. Here, you'll find information about our team members, instructors, and advisors.",
      },
      {
      name: "Attributions",
      title: "Attributions",
      path: "/attributions",
      component: Attributions,
      lead: "Accurate attribution is essential in the iGEM Competition. It ensures that the judges can properly assess your team's contributions and recognize the support provided by external collaborators. This page is dedicated to fulfilling the Attributions requirement for judging.",
      },
      {
      name: "Sponsors",
      title: "Sponsors",
      path: "/sponsors",
      component: Sponsors,
      lead: "",
      },
    ],
  },
];

// Keep existing pages accessible without listing them in the navigation.
export const unlistedPages: Page[] = [
  {
  name: "Measurement",
  title: "Measurement",
  path: "/measurement",
  component: Measurement,
  lead: "Synthetic Biology needs great measurement approaches for characterizing parts, and efficient new methods for characterizing many parts at once. Describe your measurement approaches on this page.",
  },
  {
  name: "Plant",
  title: "Plant",
  path: "/plant",
  component: Plant,
  lead: "This award is designed to celebrate exemplary work done in plant synthetic biology.",
  },
  {
  name: "Inclusivity",
  title: "Diversity and Inclusion",
  path: "/inclusivity",
  component: Inclusivity,
  lead: "Every individual, regardless of background or experience, should have an equal opportunity to engage with scientific knowledge and technological development.",
  },
  {
  name: "Sustainability",
  title: "Sustainability",
  path: "/sustainability",
  component: Sustainability,
  lead: "Describe how you have evaluated your project ideas against one or more of the SDGs.",
  },
];

export default Pages;
