import { Badge } from "../ui/badge"

export const sections = [
  { 
    id: 'hero', 
    subtitle: <Badge variant="outline" className="text-foreground border-border">B2B Platform</Badge>,
    title: "Optimal — The OS for AI-enabled teams",
    content: "One platform. Many expert tools. Faster deals. Smarter operations.",
    features: [
      "Tool Aggregate (Optimal OS)",
      "Dendetective — Property Deal Engine",
      "Open Banking + Budgeting"
    ],
    showButton: true,
    buttonText: 'Request a demo'
  },
  { 
    id: 'about', 
    title: 'One platform. Many expert tools.', 
    content: 'Optimal bundles specialist apps and AI into a single, secure web OS so your team can automate workflows, analyze deals, and move from data to decisions — faster.',
    features: [
      "Enterprise authentication (Supabase)",
      "Real-time state management",
      "Composable apps architecture",
      "Production-grade debugging tools"
    ],
    stats: [
      { value: "99.9%", label: "Uptime" },
      { value: "256-bit", label: "Encryption" },
      { value: "<100ms", label: "Response Time" },
      { value: "24/7", label: "Support" }
    ]
  },
  { 
    id: 'features', 
    title: 'Powerful tools, seamlessly integrated', 
    content: 'From property deal analysis to open banking, Experian integration, and frontier LLMs—all working together to turn raw data into clear decisions.',
    features: [
      { 
        title: "Tool Aggregate (Optimal OS)",
        description: "A web-native \"desktop\" for teams: composable apps, enterprise auth (Supabase), real-time state, and a plugin model so your teams can run multiple workflows inside a single secure interface. Built with Next.js, Zustand, Tailwind; production-grade architecture and debugging tools."
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
        description: "Production chatbots and agent flows integrated with n8n and backend services for workflow automation, partner coordination, and report generation. Chat service template built on Next.js / Supabase; streaming responses via n8n."
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
    id: 'testimonials', 
    title: 'Why enterprises choose Optimal', 
    content: 'Fast path from proof-of-concept to production with secure authentication, observability, and modular architecture.',
    testimonials: [
      {
        quote: "Fast path from proof-of-concept to production with secure authentication, observability, and modular architecture.",
        author: "Enterprise Ready",
        role: "Production-Grade Architecture"
      },
      {
        quote: "Built for regulated data: careful auth, auditing, and enterprise debugging.",
        author: "Security First",
        role: "Regulated Data Compliance"
      },
      {
        quote: "Deep domain tooling (property underwriting, budgeting, e-commerce pricing), plus custom consulting to tailor workflows.",
        author: "Domain Expertise",
        role: "Specialist Tools + Consulting"
      }
    ]
  },
  { 
    id: 'pricing',
    title: 'Enterprise solutions',
    content: 'Custom integrations and white-label options tailored to your business needs.',
    pricing: [
      {
        name: "Starter",
        price: "Custom",
        period: "contact us",
        features: ["Core Optimal OS access", "Basic integrations", "Email support", "Standard SLA"]
      },
      {
        name: "Professional",
        price: "Custom",
        period: "contact us",
        popular: true,
        features: ["Full platform access", "Custom integrations", "Priority support", "Dedicated account manager", "SLA guarantee"]
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "contact us",
        features: ["White-label options", "Dedicated support", "Custom consulting", "SLA guarantee", "Training included", "On-premise options"]
      }
    ]
  },
  { 
    id: 'join', 
    title: 'Ready to transform your operations?', 
    content: 'Request a demo to see how Optimal can streamline your workflows, automate deal analysis, and accelerate decision-making.',
    features: [
      "Request a demo",
      "Talk to sales — enterprise integrations & white label",
      "Custom consulting available",
      "Production-ready integrations"
    ],
    showButton: true,
    buttonText: 'Request a demo'
  },
]
