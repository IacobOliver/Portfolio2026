export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  techs: string[];
  link: string;
  linkLabel: string;
  github?: string;
  role: string;
  year: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    slug: "campionplus",
    title: "CampionPlus",
    description:
      "Insurance marketplace and digital wallet app for Campion Broker clients. Search, compare, and purchase insurance policies (travel, RCA), manage policy portfolios, and communicate with dedicated consultants.",
    longDescription:
      "CampionPlus is a comprehensive insurance marketplace mobile app built for Campion Broker's clients. The platform enables users to search, compare, and purchase insurance policies including travel and RCA (auto liability) insurance. Users can manage their entire policy portfolio, track renewals, and communicate directly with dedicated insurance consultants through the app.",
    techs: ["Java", "Spring Boot", "Angular", "Ionic", "Capacitor", "PostgreSQL", "TypeScript"],
    link: "https://play.google.com/store/apps/details?id=ro.campion.client",
    linkLabel: "Google Play",
    role: "Full Stack Developer at Devista Consulting",
    year: "2025",
    highlights: [
      "Integrated a new buy-travel-policies flow enabling users to purchase travel insurance directly from the app",
      "Revamped the buy-RCA flow via 24Broker API integration for seamless auto liability insurance purchases",
      "Built with Ionic 8 and Capacitor 7 for cross-platform mobile deployment (Android & iOS)",
      "Implemented Google Analytics events to surface user behavior insights and identify conversion drop-offs",
    ],
  },
  {
    slug: "project-management",
    title: "Project Management Platform",
    description:
      "DDD-based SaaS for teams to manage projects, work packages, and tasks. Features automated contracts, time-tracking with legal compliance, budget optimization, and Quartz-scheduled operations.",
    longDescription:
      "A comprehensive project management SaaS platform architected following Domain-Driven Design principles. The platform helps teams organize projects into work packages and tasks, with advanced features like automated contract generation when team members join projects, time-tracking with built-in legal working hour compliance checks, and intelligent budget planning and optimization tools.",
    techs: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "Docker", "Flyway", "Quartz"],
    link: "https://pm.cleancode.ro",
    linkLabel: "View Live",
    role: "Lead Developer at CleanCodeDevelopment",
    year: "2023 – 2025",
    highlights: [
      "Architected the entire platform following DDD principles with clean separation of bounded contexts",
      "Implemented role-based access control with granular permissions for project managers, developers, and stakeholders",
      "Built automated contract generation system triggered when users are added to projects with tariff setup",
      "Developed time-tracking with legal compliance checks ensuring working hour limits are respected",
      "Created Quartz-scheduled background jobs for automated operations and notifications",
    ],
  },
  {
    slug: "digital-twin-sector2",
    title: "Primaria Sector 2 Digital Twin",
    description:
      "EU-funded urban digital twin with real-time air quality monitoring, CO2 emission calculations, and future pollution scenario modeling. Built with PostGIS for spatial data and Mapbox for visualization.",
    longDescription:
      "An EU-funded digital twin platform for Sector 2 of Bucharest, creating a detailed virtual representation of the urban area. The platform integrates PostGIS spatial data with Mapbox visualizations to show buildings, parks, churches, and landmarks. Its primary focus is environmental monitoring — tracking real-time air quality, calculating CO2 emissions, and generating future pollution scenarios to help city planners make data-driven decisions for a cleaner, healthier district.",
    techs: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "PostGIS", "Mapbox", "Docker", "AWS"],
    link: "https://decarbonare.cleancodeit.com",
    linkLabel: "View Live",
    role: "Lead Developer at CleanCodeDevelopment",
    year: "2023 – 2025",
    highlights: [
      "Led development of the entire platform from architecture design to production deployment",
      "Integrated PostGIS for spatial data storage and complex geospatial queries",
      "Built interactive Mapbox-based map visualizations with real-time data overlays",
      "Developed CO2 emission calculation engine and future scenario modeling system",
      "Implemented real-time air quality monitoring dashboards with historical trend analysis",
    ],
  },
  {
    slug: "cleancode-academy",
    title: "Clean Code Academy",
    description:
      "Full-stack e-learning platform with CodeWars API integration, gamified leaderboards, automated attendance via Java scheduler, and an admin panel for mentors to manage learning modules.",
    longDescription:
      "CleanCodeQuest is a comprehensive e-learning platform built for the CleanCode company to onboard and train new developers. The platform features structured learning modules organized into weeks with lessons that link to GitHub projects. It integrates with the CodeWars API for daily coding challenges (katas) selected by mentors, includes gamified leaderboards to encourage healthy competition, and has an automated attendance system powered by Java schedulers.",
    techs: ["Java", "Spring Boot", "React", "JavaScript", "PostgreSQL", "AWS"],
    link: "https://quest.cleancode.ro",
    linkLabel: "View Live",
    role: "Full Stack Developer at CleanCodeDevelopment",
    year: "2023 – 2024",
    highlights: [
      "Built CodeWars API integration for daily kata challenges with automated scoring",
      "Developed gamified leaderboard system encouraging developer engagement and competition",
      "Implemented automated attendance tracking via Java Quartz scheduler",
      "Created comprehensive admin panel for mentors to manage modules, lessons, and student progress",
      "Designed structured learning paths organized into weeks and progressive modules",
    ],
  },
  {
    slug: "magic-tattoo",
    title: "Magic Tattoo",
    description:
      "Tattoo studio website showcasing artist portfolios and gallery collections. Features an advanced price configurator that calculates costs based on tattoo difficulty and selected options.",
    longDescription:
      "Magic Tattoo is the online presence for a premier tattoo studio in Bucharest. The website showcases a diverse catalog of tattoo styles including neotraditional, portraits, and Polynesian art. Visitors can explore the gallery, learn about the qualified artists, and book tattoos or consultations. The standout feature is an advanced price configurator that calculates tattoo costs based on difficulty level, size, and selected customization options.",
    techs: ["JavaScript", "PHP", "Laravel", "MySQL", "Tailwind CSS"],
    link: "https://magictattoo.ink",
    linkLabel: "View Live",
    role: "Full Stack Developer at Magic Hub Romania",
    year: "2024",
    highlights: [
      "Developed an advanced price configurator calculating costs based on tattoo difficulty and options",
      "Built a comprehensive gallery system showcasing multiple tattoo styles and artist portfolios",
      "Implemented an appointment booking system for tattoos and consultations",
      "Created a fully responsive design optimized for mobile browsing",
    ],
  },
  {
    slug: "bradu-law",
    title: "BraduLaw",
    description:
      "Responsive law firm website with dynamic content, modern design, and cross-browser optimization. Over 10 pages containing comprehensive information about the legal practice.",
    longDescription:
      "A professional presentation website built for a lawyer client, consisting of over 10 pages with comprehensive information about the legal practice. The site features a modern, responsive design with dynamic content management, cross-browser optimization, and is hosted on Firebase for reliable performance and easy deployment.",
    techs: ["JavaScript", "React", "Tailwind CSS", "Firebase"],
    link: "https://bradu-law.ro",
    linkLabel: "View Live",
    github: "https://github.com/CleanCodeRo/bradu-law",
    role: "Freelance Developer",
    year: "2023",
    highlights: [
      "Designed and built a multi-page responsive law firm website from scratch",
      "Implemented modern UI/UX with clean typography and professional aesthetic",
      "Deployed on Firebase with optimized performance and CDN distribution",
      "Ensured cross-browser compatibility across all major browsers",
    ],
  },
];
