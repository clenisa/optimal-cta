import { Badge } from "../ui/badge"

export const sections = [
  { 
    id: 'hero', 
    subtitle: <Badge variant="outline" className="text-white border-white">Now live</Badge>,
    title: "We're finally ready for you!",
    showButton: true,
    buttonText: 'Sign in'
  },
  { 
    id: 'about', 
    title: 'Your financial command center', 
    content: 'Optimal Dashboard V2 brings a desktop-style experience to the web so you can analyze, manage, and understand your finances in one place—fast, focused, and built for real work.' 
  },
  { 
    id: 'features', 
    title: 'Powerful tools, seamlessly integrated', 
    content: 'Transaction Manager, Category Trends, Account Balances, Mortgage Calculator, AI Chat, CSV tools, and real-time charts—all working together to turn raw data into clear decisions.' 
  },
  { 
    id: 'testimonials', 
    title: 'Built on trusted technology', 
    content: 'Next.js 14, TypeScript, Tailwind, Supabase, Stripe, Chart.js, and multi-provider AI (OpenAI + Ollama) deliver speed, security, and reliability you can count on.' 
  },
  { 
    id: 'join', 
    title: 'Make better money moves', 
    content: 'Import, validate, visualize, and act. Connect accounts, process CSVs, chat with AI for insights, and manage payments—all inside a focused, windowed workspace.',
    showButton: true,
    buttonText: 'Get started'
  },
]
