import type { ProjectFeature, PortofolioItem } from "./portofolio.id";

export type { ProjectFeature, PortofolioItem };

export const arrayPortoEN: PortofolioItem[] = [
  {
    id: 1,
    name: "MockeT",
    image: "/img/produk/MockeT.png",
    description:
      "A school event ticketing platform that integrates ticket ordering, payment, and refund processes in a single responsive and easy-to-use system.",
    role: "Frontend Developer",
    overview:
      "A school event ticketing platform designed to streamline the ticket ordering, payment, and refund process within one integrated system. MockeT provides a responsive and intuitive interface to help students, organizations, and event managers handle the ticketing process more efficiently.",
    tools: ["Laravel", "MySQL", "NextJS", "Tailwind CSS", "Shadcn/UI"],
    repoUrl: "https://github.com/foxx-sigma/moket1",
    features: [
      {
        title: "Ticket Purchase Flow",
        description:
          "4-step purchase flow with a stepper: Choose Ticket → Attendee Data → Payment → Done.",
      },
      {
        title: "QR Ticketing System",
        description:
          "Mobile-first check-in scanner for gate staff: large camera view, instant feedback without page reload, 4 scan result states (Valid / Already Used / Invalid / Wrong Event).",
      },
      {
        title: "Multi-Tenant Role System",
        description:
          "Global roles (User, Talent, Mentor, Super Admin) are separate from contextual per-organization roles (Admin, Committee, Ticketing, Scanner, Finance).",
      },
      {
        title: "Dashboard & Event Management",
        description: "Dedicated dashboard for each role.",
      },
    ],
  },
  {
    id: 2,
    name: "Local Taste Hub",
    image: "/img/produk/Tastehub.png",
    description:
      "A responsive web platform presenting culinary recommendations in the Malang area, featuring interactive restaurant map integration and order management.",
    role: "Backend Developer",
    overview:
      "A local culinary recommendation and ordering platform developed by my team, with a primary focus on the backend side. It is designed to help users find places to eat nearby and place orders directly from the platform without switching apps. The project was built using NestJS as the main framework, paired with Prisma ORM and Supabase (PostgreSQL) as the database, along with a JWT-based authentication system that differentiates access between regular users and admins.",
    tools: [
      "NestJs",
      "Supabase (PostgreSQL)",
      "JWT",
      "PDFKit",
      "Railway",
      "Git/GitHub",
      "Swagger",
      "Postman",
    ],
    repoUrl: "https://github.com/foxx-sigma/kulinerukl_backend",
    features: [
      {
        title: "Authentication & Role Management",
        description:
          "Manages user access across the entire system using JWT-based authentication with two role tiers: admin and user.",
      },
      {
        title: "Culinary & Menu Exploration",
        description:
          "Allows users to browse local culinary spots and the menus available at each location in the Malang area.",
      },
      {
        title: "Order",
        description:
          "When a user places an order, the system saves order item details using Prisma transactions to ensure data consistency even if a failure occurs mid-process, then automatically generates a PDF payment receipt using PDFKit once the transaction is verified.",
      },
      {
        title: "Payment Verification",
        description:
          "Handles the payment confirmation process for incoming orders, ensuring that the transaction status only changes to verified after the appropriate backend checks are completed.",
      },
      {
        title: "Report Export",
        description:
          "Enables admins to monitor all transactions on the platform by providing an option to export order data in CSV or PDF format.",
      },
    ],
  },
  {
    id: 3,
    name: "TEFA Moklet",
    image: "/img/produk/TEFA.png",
    description:
      "An institutional digital portfolio portal (Teaching Factory) designed to showcase student projects to industry partners and companies.",
    role: "Frontend Developer",
    overview:
      "A platform developed to bridge students with industry partners and external stakeholders. Through this platform, students can upload their completed projects, teachers from the relevant department review and approve them before they are published publicly, and industry partners interested in a project can directly contact the responsible teacher as the official point of contact. I built this platform using Next.js 14, with a main focus on the authentication system, user onboarding flow, and UI redesign using shadcn/ui with an institutional color palette tailored to the school's identity.",
    tools: ["NextJS 14", "Shadcn/UI", "Tailwind CSS", "Git/GitHub"],
    repoUrl: "https://github.com/foxx-sigma/dev-frontend-tefa-rev-main",
    features: [
      {
        title: "Role-Based Routing",
        description:
          "Manages all access to the platform using custom hooks useSignIn, useSignUp, and useProfileSetup built separately so the logic is reusable across different pages.",
      },
      {
        title: "2FA Email",
        description:
          "To ensure registered accounts are genuinely valid, the sign-up process includes a two-step email verification flow before the account can be fully used.",
      },
      {
        title: "Project Submission & Approval Flow",
        description:
          "Students can upload their completed projects through the system, which then enters a review queue for teachers from the relevant department. Teachers review project eligibility and grant approval before the project is displayed on the public page.",
      },
    ],
  },
  {
    id: 4,
    name: "PDAM Management System",
    image: "/img/produk/pdam.png",
    description:
      "A management system for PDAM (Water Utility) designed to assist in managing customer data, billing, and payments.",
    role: "Frontend Developer",
    overview:
      "A web-based management system designed to help PDAM manage and integrate customer data, billing, and payments in a structured, unified platform. The system provides features for customer data management, billing recording and monitoring, payment transaction management, and presenting information needed for administrative and operational processes. With this system, data management becomes more organized, reduces reliance on manual record-keeping, and makes it easier for users to monitor billing and payment statuses more efficiently.",
    tools: ["NextJS 14", "Tailwind CSS", "Git/GitHub"],
    repoUrl: "https://github.com/foxx-sigma/pdam-app",
    features: [
      {
        title: "Authentication & Role Management",
        description:
          "Manages user access across the entire system using JWT-based authentication with two role tiers: admin and user.",
      },
      {
        title: "Report Export",
        description:
          "Enables admins to monitor all transactions on the platform by providing an option to export order data in CSV or PDF format.",
      },
      {
        title: "Payment Verification",
        description:
          "Handles the payment confirmation process for incoming orders, ensuring that the transaction status only changes to verified after the appropriate backend checks are completed.",
      },
      {
        title: "User Management Dashboard",
        description: "Dedicated admin dashboard for managing users.",
      },
      {
        title: "Customer Dashboard",
        description:
          "Dedicated customer dashboard for viewing billing and payments.",
      },
    ],
  },
  {
    id: 5,
    name: "Loopera",
    image: "/img/produk/Loopera.png",
    description:
      "A Digital Waste Bank website that digitizes waste deposit recording, reward points, and prize redemption at waste bank units, replacing error-prone manual calculations.",
    role: "Full-Stack Developer",
    overview:
      "Loopera is a full-stack web platform designed to manage waste bank operations digitally. Customers can deposit recyclable waste, monitor their reward points balance, and redeem rewards, while unit admins can manage master data, verify deposits, and view monthly tonnage summaries and estimated payouts — all within a transparent, real-time system.",
    tools: ["NestJs", "TypeScript", "JWT Auth", "Bcrypt", "GSAP", "Next.js", "Tailwind CSS", "Git/GitHub", "Supabase"],
    repoUrl: "https://github.com/foxx-sigma/loopera-app",
    features: [
      {
        title: "Authentication & Registration",
        description:
          "Separate registration and login for Customers and Admins, with role-based route access controls.",
      },
      {
        title: "Waste Catalog Management",
        description:
          "Admins configure waste categories along with price and points per kilogram as standard benchmarks for all deposit transactions.",
      },
      {
        title: "Waste Deposit Submission",
        description:
          "Customers submit multi-item waste deposits with photos, complete with automatic point estimations.",
      },
      {
        title: "Verification & Re-weighing",
        description:
          "Admins inspect and re-weigh customer deposits before points are officially credited to their balance.",
      },
      {
        title: "Automated Points System",
        description:
          "Points are automatically credited upon deposit verification and deducted via atomic transactions during redemptions to ensure data consistency.",
      },
      {
        title: "Transaction History & Receipt Printing",
        description:
          "Customers can view their deposit and redemption history and print transaction receipts.",
      },
      {
        title: "Monthly Summary Dashboard",
        description:
          "Admins can monitor tonnage summaries, estimated payouts, and monthly transaction charts to evaluate unit performance.",
      },
    ],
  },
];
