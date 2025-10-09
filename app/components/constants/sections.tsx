import { Badge } from "../ui/badge"

export const sections = [
  { 
    id: 'hero', 
    subtitle: <Badge variant="outline" className="text-white border-white">Now live</Badge>,
    title: "We're finally ready for you!",
    content: "Transform your financial data into actionable insights with our revolutionary dashboard that puts you in complete control.",
    features: [
      "Real-time account synchronization",
      "AI-powered financial insights",
      "Bank-level security"
    ],
    showButton: true,
    buttonText: 'Start Free Trial'
  },
  { 
    id: 'about', 
    title: 'Your financial command center', 
    content: 'Optimal Dashboard V2 brings a desktop-style experience to the web so you can analyze, manage, and understand your finances in one place—fast, focused, and built for real work.',
    features: [
      "Multi-window workspace for parallel analysis",
      "Instant CSV import and validation",
      "Real-time transaction categorization",
      "Advanced filtering and search capabilities"
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
    content: 'Transaction Manager, Category Trends, Account Balances, Mortgage Calculator, AI Chat, CSV tools, and real-time charts—all working together to turn raw data into clear decisions.',
    features: [
      { 
        title: "Smart Transaction Manager",
        description: "Automatically categorize, tag, and analyze every transaction across all your accounts"
      },
      { 
        title: "AI Financial Assistant", 
        description: "Get instant answers about your spending, savings, and financial patterns"
      },
      { 
        title: "Advanced Analytics", 
        description: "Visualize trends, detect anomalies, and forecast future cash flow"
      },
      { 
        title: "Custom Reports", 
        description: "Generate detailed reports for taxes, budgeting, or financial planning"
      }
    ]
  },
  { 
    id: 'testimonials', 
    title: 'Built on trusted technology', 
    content: 'Next.js 14, TypeScript, Tailwind, Supabase, Stripe, Chart.js, and multi-provider AI (OpenAI + Ollama) deliver speed, security, and reliability you can count on.',
    testimonials: [
      {
        quote: "This dashboard completely changed how I manage my finances. The AI insights alone saved me thousands.",
        author: "Sarah Chen",
        role: "Small Business Owner"
      },
      {
        quote: "Finally, a financial tool that actually understands what I need. The CSV import feature is a game-changer.",
        author: "Marcus Rodriguez",
        role: "Freelance Consultant"
      },
      {
        quote: "The real-time sync and multi-window interface make this feel like a professional trading platform.",
        author: "Emily Watson",
        role: "Investment Analyst"
      }
    ]
  },
  { 
    id: 'pricing',
    title: 'Simple, transparent pricing',
    content: 'Choose the plan that fits your needs. All plans include core features with no hidden fees.',
    pricing: [
      {
        name: "Starter",
        price: "$9",
        period: "per month",
        features: ["3 connected accounts", "Basic analytics", "CSV import/export", "Email support"]
      },
      {
        name: "Professional",
        price: "$29",
        period: "per month",
        popular: true,
        features: ["Unlimited accounts", "Advanced AI insights", "Custom categories", "Priority support", "API access"]
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "contact us",
        features: ["White-label options", "Dedicated support", "Custom integrations", "SLA guarantee", "Training included"]
      }
    ]
  },
  { 
    id: 'join', 
    title: 'Make better money moves', 
    content: 'Import, validate, visualize, and act. Connect accounts, process CSVs, chat with AI for insights, and manage payments—all inside a focused, windowed workspace.',
    features: [
      "30-day free trial",
      "No credit card required",
      "Cancel anytime",
      "Free data migration"
    ],
    showButton: true,
    buttonText: 'Get Started Now'
  },
]
