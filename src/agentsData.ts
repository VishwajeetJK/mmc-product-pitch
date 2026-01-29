export const agentsData = {
  "Media-for-Equity Core": [
    {
      title: "Orchestrate M4E pipeline",
      prompt:
        "Match publisher inventory to equity deal flow for Hydra-Flow (Series A), normalize schemas, and route scenarios to all agents.",
      thinking:
        "Analyzing Hydra-Flow's pitch deck... Sector: CPG/Bev. Target: Gen-Z/Millennial. Initializing parallel processing: Agent B (Scout) to check unsold TV slots, Agent C (Risk) to check Shopify Plus throughput limits.",
      workflow: [
        { step: 1, text: "Ingest Hydra-Flow Data Room (P&L, Cap Table, Cohort Analysis)." },
        { step: 2, text: "Map target demographics (Males 18-35) against Sinclair/Televisa inventory logs." },
        { step: 3, text: "Trigger 'Inventory-Fit' scoring model." },
      ],
      data: [
        { label: "Ad Server Logs", value: "Q3 Unsold Inventory: $12M (TV/OOH)" },
        { label: "Financial Systems", value: "Hydra-Flow ARR: $4.2M | Burn: $150k/mo" },
      ],
      reports: [
        { label: "Media-Fit Score", value: "88/100 (High Match)", status: "stable" },
        { label: "Orchestration Time", value: "1.2s", status: "success" },
      ],
    },
    {
      title: "Synthesize IC Investment Memo",
      prompt:
        "Draft the Executive Summary for the Investment Committee combining input from Valuation, Risk, and Scout agents.",
      thinking:
        "Aggregating sub-agent outputs... Valuation Agent predicts 2.4x MOIC. Risk Agent flags supply chain latency. Structuring argument: Strong brand fit, but requires inventory stocking condition closing.",
      workflow: [
        { step: 1, text: "Pull 'Bear Case' valuation from Agent D." },
        {
          step: 2,
          text: "Highlight 'Inventory Arbitrage' opportunity (Buying $1 of equity for $0.30 of cost).",
        },
        { step: 3, text: "Generate 'Go/No-Go' recommendation matrix." },
      ],
      data: [
        { label: "Agent Inputs", value: "Valuation: Bullish | Ops: Caution | GTM: Strong" },
        { label: "Legal Docs", value: "Term Sheet Draft v3" },
      ],
      reports: [
        { label: "IC Memo Readiness", value: "95% Complete", status: "success" },
        { label: "Key Risk Identified", value: "Q4 Stockout Probability", status: "warning" },
      ],
    },
    {
      title: "Optimize Portfolio Allocation",
      prompt:
        "Re-balance media allocation between Hydra-Flow and existing portfolio co 'Groomie' based on Q4 inventory decay rates.",
      thinking:
        "Inventory is perishable. Detecting $2M in expiring 'Sports' slots on Sinclair. Hydra-Flow converts 20% better on Sports than Groomie. Re-routing allocation to maximize portfolio-wide ROI.",
      workflow: [
        { step: 1, text: "Analyze Q4 expire-by dates on Ad Inventory." },
        { step: 2, text: "Simulate A/B allocation: 60% Hydra-Flow vs 40% Groomie." },
        { step: 3, text: "Update Media Credit ledger." },
      ],
      data: [
        { label: "Inventory Feed", value: "Expiring Slots: 4,500 GRPs" },
        {
          label: "Performance Data",
          value: "Hydra-Flow CPA: $12.50 | Groomie CPA: $18.20",
        },
      ],
      reports: [
        { label: "Inv. Utilization", value: "+14% vs Baseline", status: "success" },
        { label: "Portfolio Lift", value: "$340k Est. Value", status: "success" },
      ],
    },
  ],
  "Inventory Scout": [
    {
      title: "Scan Distressed Inventory",
      prompt:
        "Identify 'Remnant' and 'Distressed' inventory across partner networks that matches Hydra-Flow's customer profile (Males 18-35).",
      thinking:
        "Scanning Sinclair and Atmosphere TV logs for unsold slots in 'Sports' and 'Late Night Comedy' blocks. Filtering for discount rates >60% off rate card.",
      workflow: [
        { step: 1, text: "Query SSP (Supply Side Platform) for unsold impressions." },
        { step: 2, text: "Filter by 'Audience Match > 85%'." },
        { step: 3, text: "Calculate 'Internal Cost' vs 'Media Value'." },
      ],
      data: [
        { label: "SSP Feed", value: "Sinclair Broadcast Group (Midwest)" },
        { label: "Audience Data", value: "Nielsen Ratings: Male 18-34 Index 120" },
      ],
      reports: [
        { label: "Distressed Slots", value: "Found $2.4M Face Value", status: "success" },
        { label: "Cost Efficiency", value: "0.18 cents on the dollar", status: "success" },
      ],
    },
    {
      title: "Evaluate OOH Opportunities",
      prompt:
        "Assess availability of Digital Billboards in Hydra-Flow's top 5 performing cities (Austin, Miami, LA, NYC, Nashville).",
      thinking:
        "Cross-referencing Hydra-Flow's Shopify sales data (geo-hotspots) with MMC's OOH partner availability. Identifying high-commute routes in Austin.",
      workflow: [
        { step: 1, text: "Ingest Shopify 'Sales by Zip Code' CSV." },
        { step: 2, text: "Overlay Partner Billboard Lat/Long coordinates." },
        { step: 3, text: "Identify overlap density." },
      ],
      data: [
        { label: "Geo-Spatial Data", value: "Austin Zip 78701: High Penetration" },
        { label: "OOH Inventory", value: "I-35 Digital Boards: 40% Available" },
      ],
      reports: [
        { label: "Geo-Match", value: "92% Overlap", status: "success" },
        { label: "Est. Impressions", value: "14M Monthly", status: "stable" },
      ],
    },
    {
      title: "Daypart Optimization",
      prompt:
        "Determine optimal TV time slots for Hydra-Flow based on competitor ad spend and historical conversion data.",
      thinking:
        "Competitor 'LiquidIV' dominates 8am-10am slots. Opportunity to arbitrage 'Late Night' (2am-4am) gaming/esports blocks where CAC is lower for this demographic.",
      workflow: [
        { step: 1, text: "Analyze Competitor Ad Spend (MediaRadar API)." },
        { step: 2, text: "Model 'Gamer' demographic viewing habits." },
        { step: 3, text: "Recommend 'Counter-Programming' strategy." },
      ],
      data: [
        { label: "Competitive Intel", value: "LiquidIV Spend: High Morning" },
        { label: "Viewer Behavior", value: "Target Cohort Active: 11pm-3am" },
      ],
      reports: [
        { label: "CAC Reduction", value: "-22% Projected", status: "success" },
        { label: "Slot Availability", value: "High", status: "stable" },
      ],
    },
  ],
  "Deal Risk": [
    {
      title: "Operational Stress Test",
      prompt:
        "Simulate a 'Super Bowl' level traffic spike on Hydra-Flow's website. Can their current 3PL logistics handle a 10x order volume surge?",
      thinking:
        "Ingesting current fulfillment SLAs. Current 3PL: 'ShipBob'. Limit: 2k orders/day. Projecting TV campaign spike: 5k orders/hour. RISK: CRITICAL.",
      workflow: [
        { step: 1, text: "Ping 3PL API for max daily throughput limits." },
        { step: 2, text: "Run Monte Carlo on 'Stockout Probability'." },
        { step: 3, text: "Flag risk in IC Dashboard." },
      ],
      data: [
        { label: "Logistics Data", value: "ShipBob API: Limit 2,000/day" },
        { label: "Inventory Levels", value: "SKU-101: 15,000 Units on hand" },
      ],
      reports: [
        { label: "Breakage Risk", value: "CRITICAL (High)", status: "error" },
        { label: "Est. Revenue Loss", value: "$450k (Due to stockout)", status: "warning" },
      ],
    },
    {
      title: "CAC Sensitivity Analysis",
      prompt:
        "Analyze how a degradation in creative performance (CTR drop) impacts the Unit Economics of the deal.",
      thinking:
        "If CTR drops from 1.5% to 0.8% on TV ads, does the LTV:CAC ratio stay above 3:1? running sensitivity table.",
      workflow: [
        { step: 1, text: "Define Base Case (1.5% CTR)." },
        { step: 2, text: "Run 1,000 simulations degrading CTR by 0.1% increments." },
        { step: 3, text: "Identify 'Breakeven Point'." },
      ],
      data: [
        { label: "Unit Economics", value: "LTV: $85 | Current CAC: $22" },
        { label: "Media Cost", value: "CPM Floor: $15" },
      ],
      reports: [
        { label: "Breakeven CTR", value: "0.65%", status: "stable" },
        { label: "Safety Margin", value: "High", status: "success" },
      ],
    },
    {
      title: "Inventory Obsolescence",
      prompt:
        "Assess risk of Hydra-Flow product expiration if media campaign fails to drive volume.",
      thinking:
        "Product shelf life is 12 months. Current batch mfg date: 3 months ago. If sales remain flat, 40% of inventory expires in 9 months. We need a liquidation clause.",
      workflow: [
        { step: 1, text: "Check Mfg Dates in ERP." },
        { step: 2, text: "Calculate 'Days Sales of Inventory' (DSI)." },
        { step: 3, text: "Draft 'Liquidation Requirement' for Term Sheet." },
      ],
      data: [
        { label: "ERP Data", value: "Batch #4492: Expires Oct 2026" },
        { label: "Sales Velocity", value: "Current: 1,200 units/mo" },
      ],
      reports: [
        { label: "Write-off Risk", value: "Medium", status: "watch" },
        { label: "Rec. Action", value: "Push Q3 Promo", status: "stable" },
      ],
    },
  ],
  "Equity Valuation": [
    {
      title: "Media-Adjusted Valuation",
      prompt:
        "Calculate pre-money valuation for Hydra-Flow, adjusting for the 'Media Multiplier Effect' of $5M in gross media value.",
      thinking:
        "Standard SaaS multiples don't apply. Applying 'Media Capital' discount. We are providing $5M Gross Media Value (GMV), but our cost basis is $1M. Pricing equity at GMV.",
      workflow: [
        { step: 1, text: "Ingest Comparables (LiquidIV, Nuun exits)." },
        { step: 2, text: "Apply MMC Proprietary 'Media-Lift' Coefficient." },
        { step: 3, text: "Output 'Fair Market Value' vs 'MMC Value'." },
      ],
      data: [
        { label: "Market Comps", value: "4x - 6x Revenue Multiples" },
        { label: "Internal Cost", value: "Inventory Cost Basis: 20%" },
      ],
      reports: [
        { label: "Rec. Valuation", value: "$22M Pre-Money", status: "success" },
        { label: "Arbitrage Upside", value: "+40%", status: "success" },
      ],
    },
    {
      title: "Dilution Scenario Modeling",
      prompt:
        "Model cap table impact of a $5M Media-for-Equity round + $2M Cash Bridge round.",
      thinking:
        "Founders own 60%. Series A investors own 20%. MMC taking 15% via Media. simulating post-money pool shuffle.",
      workflow: [
        { step: 1, text: "Ingest current Cap Table (Carta export)." },
        { step: 2, text: "Insert MMC Warrant Coverage parameters." },
        { step: 3, text: "Calculate Founder Dilution." },
      ],
      data: [
        { label: "Cap Table", value: "Series A Option Pool: 10%" },
        { label: "Deal Terms", value: "$5M Media @ $20M Cap" },
      ],
      reports: [
        { label: "Founder Ownership", value: "51% (Control Retained)", status: "stable" },
        { label: "MMC Stake", value: "12.5% Fully Diluted", status: "success" },
      ],
    },
    {
      title: "Exit Waterfall Analysis",
      prompt:
        "Simulate exit scenarios at $50M, $100M, and $200M to determine MMC's ROI based on Liquidation Preferences.",
      thinking:
        "Checking for 1x vs 2x liquidation preferences. Assuming 1x Non-Participating. Running waterfall distribution.",
      workflow: [
        { step: 1, text: "Define Exit Horizons (36mo, 60mo)." },
        { step: 2, text: "Apply Liquidation Pref stack." },
        { step: 3, text: "Calculate MMC IRR." },
      ],
      data: [
        { label: "Term Sheet", value: "1x Non-Participating Pref" },
        { label: "Growth Model", value: "CAGR: 45%" },
      ],
      reports: [
        { label: "Base Case IRR", value: "32%", status: "success" },
        { label: "Cash-on-Cash", value: "4.5x", status: "success" },
      ],
    },
  ],
  "Deal Structurer": [
    {
      title: "Generate Term Sheet",
      prompt:
        "Draft Series A extension term sheet including 'Media Credit' utilization milestones and 'Clawback' provisions.",
      thinking:
        "We need protection. If they don't use the media within 18 months, we lose inventory value. Adding 'Use-it-or-lose-it' clause.",
      workflow: [
        { step: 1, text: "Load 'MMC Standard Media Agreement' template." },
        {
          step: 2,
          text: "Insert 'Milestone Tranches' (Tranche 1: $2M TV, Tranche 2: $3M Digital).",
        },
        { step: 3, text: "Draft 'Clawback' regarding inventory pricing guarantee." },
      ],
      data: [
        { label: "Legal Template", value: "M4E_Standard_v4.docx" },
        { label: "Deal Terms", value: "18-month utilization window" },
      ],
      reports: [
        { label: "Doc Generated", value: "TermSheet_Hydra.pdf", status: "success" },
        { label: "Protections", value: "Strong", status: "success" },
      ],
    },
    {
      title: "Warrant Coverage Negotiation",
      prompt:
        "Calculate optimal warrant coverage to offset high-risk 'Unproven Creative' assets provided by Hydra-Flow.",
      thinking:
        "Their ad creatives are untested. Risk of media waste is high. Increasing Warrant Coverage from 10% to 20% to compensate for creative risk.",
      workflow: [
        { step: 1, text: "Assess Creative Score (Agent F)." },
        { step: 2, text: "Adjust Warrant Formula based on Risk Premium." },
        { step: 3, text: "Output Counter-Offer." },
      ],
      data: [
        { label: "Creative Audit", value: "No historical TV data" },
        { label: "Risk Premium", value: "+5% Warrant Coverage" },
      ],
      reports: [
        { label: "Rec. Warrants", value: "20%", status: "warning" },
        { label: "Justification", value: "Creative Risk Mitigation", status: "stable" },
      ],
    },
    {
      title: "Media Rate Card Locking",
      prompt:
        "Structure the 'Media Value' definition to protect MMC against inflation in ad prices over the next 24 months.",
      thinking:
        "TV ad prices will spike during election year. We must lock the 'Media Value' to 'Current Rate Card' not 'Future Rate Card' to preserve our equity value.",
      workflow: [
        { step: 1, text: "Analyze CPI and Media Inflation trends." },
        { step: 2, text: "Draft 'Fixed Rate' definition clause." },
        { step: 3, text: "Verify with Finance Agent." },
      ],
      data: [
        { label: "Inflation Index", value: "TV CPM Inflation: +8% YoY" },
        { label: "Inventory Book", value: "Spot Rate: $1,200/unit" },
      ],
      reports: [
        { label: "Value Locked", value: "Yes (2025 Rates)", status: "success" },
        { label: "Savings Est.", value: "$400k over 2 yrs", status: "success" },
      ],
    },
  ],
  "GTM Simulations": [
    {
      title: "Channel Mix Simulation",
      prompt:
        "Predict ROI of a $2M spend split: 70% Linear TV vs 30% Connected TV (CTV) for Hydra-Flow.",
      thinking:
        "Hydra-Flow audience is cord-cutting. Linear TV might have high wasted impressions. Simulating shift to 60% CTV / 40% Linear.",
      workflow: [
        { step: 1, text: "Load Audience Viewing Habits (Nielsen)." },
        { step: 2, text: "Run Multi-Touch Attribution (MTA) Model." },
        { step: 3, text: "Compare Scenarios A (70/30) vs B (40/60)." },
      ],
      data: [
        { label: "Audience", value: "Gen-Z Cord Cutting: 65%" },
        { label: "CPM Data", value: "Linear: $15 | CTV: $28" },
      ],
      reports: [
        { label: "Scenario A ROAS", value: "1.8x", status: "warning" },
        { label: "Scenario B ROAS", value: "3.2x (Recommended)", status: "success" },
      ],
    },
    {
      title: "Creative Fatigue Analysis",
      prompt:
        "Estimate how quickly the current 3 ad creatives will saturate the audience before CPA spikes.",
      thinking:
        "Frequency cap analysis. With $5M spend, each target user will see the ad 12 times. Ad Blindness sets in at frequency 8. Need 2 more creative variations.",
      workflow: [
        { step: 1, text: "Calculate 'Reach & Frequency' curve." },
        { step: 2, text: "Identify 'CPA Inflection Point'." },
        { step: 3, text: "Alert Marketing Team." },
      ],
      data: [
        { label: "Creative Assets", value: "3 Videos (15s, 30s, 60s)" },
        { label: "Spend Velocity", value: "$500k/month" },
      ],
      reports: [
        { label: "Fatigue Onset", value: "Week 6", status: "watch" },
        { label: "Action", value: "Produce 2 Net New Ads", status: "warning" },
      ],
    },
    {
      title: "Regional Lift Forecasting",
      prompt:
        "Simulate a 'Test Market' launch in Chicago before national rollout. Predict sales lift impact.",
      thinking:
        "Chicago has high 'Inventory Availability' for MMC. Using it as a proxy for National performance. Predicting 15% lift based on 'Beverage' category benchmarks.",
      workflow: [
        { step: 1, text: "Isolate Chicago DMA (Designated Market Area)." },
        { step: 2, text: "Apply 'Media-Mix Modeling' (MMM)." },
        { step: 3, text: "Extrapolate to National level." },
      ],
      data: [
        { label: "Chicago Inv.", value: "Billboards + Local News" },
        { label: "Benchmark", value: "Bev Category Lift: 12-18%" },
      ],
      reports: [
        { label: "Est. Local Lift", value: "+18%", status: "success" },
        { label: "Confidence", value: "High", status: "stable" },
      ],
    },
  ],
  "Red Flags": [
    {
      title: "Background Intelligence",
      prompt:
        "Conduct deep-dive background check on Hydra-Flow co-founders using open-source intelligence (OSINT).",
      thinking:
        "Scanning legal databases, past ventures, and social sentiment. Checking for 'previous bankruptcies' or 'fraud allegations'.",
      workflow: [
        { step: 1, text: "Crawl PACER (Federal Court Records)." },
        { step: 2, text: "Analyze Founder's previous exit (Sold to PE)." },
        { step: 3, text: "Sentiment Analysis on Twitter/Reddit." },
      ],
      data: [
        { label: "Legal Scan", value: "Clean (No Active Litigation)" },
        { label: "Reputation", value: "High Integrity" },
      ],
      reports: [
        { label: "Founder Risk", value: "Low", status: "success" },
        { label: "Flag Status", value: "Clear", status: "success" },
      ],
    },
    {
      title: "Competitive Saturation",
      prompt:
        "Identify if the 'Electrolyte Mix' market is too saturated for a media-led breakout.",
      thinking:
        "Market is crowded (LiquidIV, LMNT, Nuun). Cost of Media is high. Does the 'Media-for-Equity' advantage give them enough moat? Analysis: Yes, if we block competitors on our specific inventory.",
      workflow: [
        { step: 1, text: "Map Competitive Landscape." },
        { step: 2, text: "Analyze 'Share of Voice' (SOV)." },
        { step: 3, text: "Determine 'Exclusivity' potential." },
      ],
      data: [
        { label: "Competitors", value: "5 Major Players" },
        { label: "SOV", value: "LiquidIV: 60%" },
      ],
      reports: [
        { label: "Market Risk", value: "High", status: "warning" },
        { label: "Mitigation", value: "Category Exclusivity Deal", status: "stable" },
      ],
    },
    {
      title: "Regulatory Compliance",
      prompt:
        "Check Hydra-Flow's health claims against FTC and FDA guidelines before we air TV ads.",
      thinking:
        "They claim 'Cures Hangovers'. This is a high-risk medical claim. FTC will flag this. TV Networks (Sinclair) will reject the ad.",
      workflow: [
        { step: 1, text: "Ingest Ad Copy transcripts." },
        { step: 2, text: "Cross-reference FDA 'Structure/Function' claim rules." },
        { step: 3, text: "Flag 'Cures Hangovers' for removal." },
      ],
      data: [
        { label: "Ad Copy", value: "Phrase: 'Instant Hangover Cure'" },
        { label: "Regulation", value: "FDA 21 CFR 101.93" },
      ],
      reports: [
        { label: "Compliance Risk", value: "CRITICAL", status: "error" },
        { label: "Action", value: "Rewrite Ad Copy", status: "warning" },
      ],
    },
  ],
} as const;

export type AgentName = keyof typeof agentsData;
export type PromptEntry = (typeof agentsData)[AgentName][number];

