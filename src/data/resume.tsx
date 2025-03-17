import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Gaurav Jain",
  initials: "GJ",
  url: "https://gauravjain.dev",
  location: "Gurugram, India",
  locationLink: "https://maps.app.goo.gl/Gi2VktGa5KRxQCVq5",
  description:
    "Software Engineer with a passion for creating innovative solutions and enhancing experiences.",
  summary:
    "Since 2012, I have been working as a software engineer and have been building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education).",
  avatarUrl: "/me.jpg",
  skills: [
    "Angular",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "AWS"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "gauravdosi124@gmail.com",
    tel: "+91 8800100101",
    social: {
      GitHub: {
        name: "GitHub",
        url: "http://github.com/heygauravjain/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/heygauravjain/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/heygauravjain",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@heygauravjain",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  
    "work": [
      {
        "company": "Nagarro",
        "href": "https://nagarro.com",
        "badges": [],
        "location": "Jaipur, IN",
        "title": "Senior Staff Engineer",
        "logoUrl": "/nagarro.png",
        "start": "March 2019",
        "end": "Present",
        "description": "Responsible for system development, aligning solutions with business needs, and fulfilling both company and client requirements. Engaged in architecture design, development, and documentation to ensure seamless project execution. Adaptable to any role needed to meet project goals and deliver value. Conducted code reviews and managed peer reviews. Worked on large-scale industry and banking projects using Angular, Java, Cloud, and third-party services."
      },
      {
        "company": "HCL",
        "href": "https://www.hcltech.com/",
        "badges": [],
        "location": "Bengaluru, IN",
        "title": "Team Lead",
        "logoUrl": "/hcl.png",
        "start": "January 2018",
        "end": "March 2019",
        "description": "Led a team in an IC role with global leader clients, managing complex deliveries and timelines. Gained experience handling large-scale user bases, high-cost projects, and critical support products while addressing end-user queries and resolutions."
      },
      {
        "company": "Accenture",
        "href": "https://www.accenture.com/",
        "badges": [],
        "location": "Bengaluru, IN",
        "title": "Senior Software Engineer",
        "logoUrl": "/accenture.png",
        "start": "May 2015",
        "end": "December 2017",
        "description": "Managed project deliverables, ensuring on-time execution. Guided and mentored team members to efficiently complete tasks, contributing to high-performance software solutions."
      },
      {
        "company": "VVDN",
        "href": "https://www.vvdntech.com/",
        "badges": [],
        "location": "Gurugram, IN",
        "title": "Software Engineer",
        "logoUrl": "/vvdn.png",
        "start": "February 2014",
        "end": "March 2015",
        "description": "Developed software applications in object-oriented and web-based environments, gaining hands-on experience in software development and implementation."
      },
      {
        "company": "Componence",
        "href": "https://www.componence.com/",
        "badges": [],
        "location": "Jaipur, IN",
        "title": "Associate",
        "logoUrl": "/componence.png",
        "start": "October 2012",
        "end": "February 2014",
        "description": "Started as an intern and worked with EU clients, gaining extensive development exposure and grooming myself according to industry requirements."
      }
    ],
    "education": [
      {
        "school": "Rajasthan Technical University",
        "href": "https://www.rtu.ac.in/",
        "degree": "Bachelor of Technology in Electronics and Communication Engineering",
        "logoUrl": "/rtu.png",
        "start": "2008",
        "end": "2012"
      }
    ],  
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },  ],
} as const;
