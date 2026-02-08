export const roadmapData = [
  {
    phase: "Phase 1: The Pilot (MVP)",
    role: "Lead: VC R&D Product Associate (Jeet)",
    cost: "~$850/mo",
    objective:
      "Validate 'Media-Lift' hypothesis using historical portfolio data & R&D Sandbox.",
    stack: "Multi-Model Sandbox (Gemini 1.5, GPT-4o, Claude 3.5)",
    breakdown: [
      { item: "LLM API Spend (OpenAI/Anthropic)", cost: "$500" },
      { item: "Pinecone (Starter Memory)", cost: "$50" },
      { item: "R&D Allocation (Multi-Model Testing)", cost: "$300" },
      { item: "LangSmith (Developer Tier)", cost: "$0" },
      { item: "Infrastructure (GitHub/Vercel Free)", cost: "$0" },
    ],
  },
  {
    phase: "Phase 2: Growth (Integration)",
    role: "Lead: VC R&D Lead + 1 Data Eng",
    cost: "~$3,500/mo",
    objective:
      "Real-time scoring of live incoming deal flow (15+ decks/week).",
    stack: "Enterprise Pipelines + Observability (LangSmith)",
    breakdown: [
      { item: "LLM API Spend (Live Deal Flow)", cost: "$2,500" },
      { item: "Pinecone (Standard)", cost: "$100" },
      { item: "LangSmith Plus (Observability)", cost: "$150" },
      { item: "Infra (Vercel/Supabase Pro)", cost: "$100" },
      { item: "Operational Buffer (20%)", cost: "$650" },
    ],
  },
  {
    phase: "Phase 3: Sovereign IP (Moat)",
    role: "Lead: Head of Data Product + Team",
    cost: "~$10,000+/mo",
    objective:
      "Full data sovereignty. Training proprietary 'Media-Elasticity' models on-prem.",
    stack: "Dedicated GPU Clusters + Enterprise Data Feeds",
    breakdown: [
      { item: "Dedicated GPU Cluster (AWS/GCP)", cost: "$4,000" },
      { item: "Enterprise Data (Pitchbook API)", cost: "$3,000" },
      { item: "Pinecone (Enterprise)", cost: "$500" },
      { item: "Supabase (Team/Enterprise)", cost: "$600" },
      { item: "R&D Buffer (15% Variance)", cost: "$1,900" },
    ],
  },
];
