import { Badge } from "../ui/badge"

export const sections = [
  { 
    id: 'hero', 
    subtitle: <Badge variant="outline" className="border-primary">B2B Platform</Badge>,
    title: "Optimal — The OS for AI-enabled teams",
    content: "One platform. Many expert tools. Faster deals. Smarter operations. Optimal bundles specialist apps and AI into a single, secure web OS so your team can automate workflows, analyze deals, and move from data to decisions — faster.",
    features: [
      "Enterprise-grade security & authentication",
      "Production-ready architecture",
      "Real-time state & workflow automation"
    ],
    showButton: true,
    buttonText: 'Request a demo'
  },
  { 
    id: 'features', 
    title: 'Key features', 
    content: 'Specialist tools and AI orchestration in a single, secure web OS for teams.',
    features: [
      { 
        title: "Tool Aggregate (Optimal OS)",
        description: "A web-native 'desktop' for teams: composable apps, enterprise auth (Supabase), real-time state, and a plugin model so your teams can run multiple workflows inside a single secure interface. (Built with Next.js, Zustand, Tailwind; production-grade architecture and debugging tools.)"
      },
      { 
        title: "Dendetective — Property Deal Engine", 
        description: "Streamlined investment-property analysis and automated deal creation with partner brokers. Run underwriting, compute adjusted ROI/cashflow scenarios, normalize listing feeds, and generate broker-ready offers and summaries."
      },
      { 
        title: "Open Banking + Budgeting", 
        description: "Bank connectivity for continuous budgeting, transaction categorization, automated reconciliations and exportable CSVs. Designed to reduce manual reconciliation and accelerate cashflow decisions for businesses and portfolios."
      },
      { 
        title: "Experian Integration", 
        description: "Plugs credit and bureau data into the budgeting and underwriting flows for richer risk and affordability signals (via the same open banking auth flow)."
      },
      { 
        title: "E-commerce Price Analysis (Coming Soon)", 
        description: "Retail & e-commerce price benchmarking and margin analytics that highlight opportunities, competitive pricing, and automated repricing signals for sellers and resellers."
      },
      { 
        title: "Optimal AI — Frontier LLMs + Orchestration", 
        description: "We run an ensemble of frontier language models and task-specific microservices to power chat assistants, summarization, and decision automation. Built for enterprise data privacy and fine-tuning into your workflows."
      },
      { 
        title: "Chat & Agent Platform (Dendiver / Dendetective)", 
        description: "Production chatbots and agent flows integrated with n8n and backend services for workflow automation, partner coordination, and report generation. (Chat service template built on Next.js / Supabase; streaming responses via n8n.)"
      },
      { 
        title: "CLI Agent Service & Developer Tools", 
        description: "Terminal/CLI tools for power users to run OS services, call finance APIs, and operate agent workflows programmatically. Great for automation and SRE workflows."
      },
      { 
        title: "White-label & Consulting", 
        description: "We're a boutique AI/tech consultancy that ships production integrations: from open banking and Experian to real estate and ecommerce analytics. We build, integrate, and operate the tooling as an extension of your team."
      }
    ]
  },
  { 
    id: 'benefits', 
    title: 'Why enterprises choose Optimal', 
    content: 'Fast path from proof-of-concept to production with secure authentication, observability, and modular architecture.',
    features: [
      "Fast path from proof-of-concept to production with secure authentication, observability, and modular architecture",
      "Built for regulated data: careful auth, auditing, and enterprise debugging",
      "Deep domain tooling (property underwriting, budgeting, e-commerce pricing), plus custom consulting to tailor workflows"
    ]
  },
  { 
    id: 'cta', 
    title: 'Ready to transform your workflows?', 
    content: 'Request a demo to see how Optimal can accelerate your team\'s operations, or talk to our sales team about enterprise integrations and white-label solutions.',
    features: [
      "Enterprise integrations & white-label options",
      "Custom consulting & workflow automation",
      "Production-ready architecture & support"
    ],
    showButton: true,
    buttonText: 'Request a demo'
  },
]
