// --- SECTION 1: SUPPLY SIDE (ACQUIRING MEDIA ASSETS) ---
// --- SECTION 2: DEMAND SIDE (SOURCING VENTURES & AUTOMATED BD) ---
// --- SECTION 3: DEAL EXECUTION (EXISTING AGENTS) ---

export const agentsData = {
  "Media Asset Scout": [
    {
      title: "Identify Undervalued Inventory",
      prompt:
        "Scan US regional broadcast networks for 'Distressed' inventory slots (fill rate < 40%) suitable for acquisition.",
      thinking:
        "Scanning 210 DMA (Designated Market Areas) via Strata/Freewheel APIs... \n• Filtering for 'Late Night' and 'Daytime' blocks with <40% sell-through. \n• Identified 'Sinclair Midwest' & 'Hearst Florida' as high-opportunity zones. \n• Arbitrage signal: These slots are currently sold as 'Remnant' at $2 CPM. \n• Strategy: Acquire bulk rights in exchange for Fund LP interest.",
      workflow: [
        { step: 1, text: "Ingest Broadcaster Sell-Through Reports (API)." },
        { step: 2, text: "Isolate high-waste dayparts (2am-5am)." },
        { step: 3, text: "Calculate 'Yield Gap' (Current Revenue vs. Potential Media Capital Value)." },
      ],
      data: [
        { label: "Target Network", value: "Midwest Regional Sports (35 Stations)" },
        { label: "Fill Rate", value: "32% (High Waste)" },
      ],
      reports: [
        { label: "Potential Volume", value: "$15M Annually", status: "success" },
        { label: "Acquisition Cost", value: "$0.05 on the Dollar", status: "success" },
      ],
    },
    {
      title: "Scout Digital OOH Networks",
      prompt:
        "Locate independent Digital Billboard networks in Tier-2 cities with high commuter density but low ad tech integration.",
      thinking:
        "Querying Geospatial Ad Exchanges (Vistar, PlaceExchange)... \n• Target: Networks with < 50 screens (fragmented owners). \n• Location filter: 'High Dwell Time' (Traffic lights, Gas stations). \n• Opportunity: These owners lack programmatic sales teams. MMC can aggregate them into a 'National Commuter Network' for portfolio companies.",
      workflow: [
        { step: 1, text: "Map independent operators via OAAA database." },
        { step: 2, text: "Overlay traffic density heatmaps (Google Maps API)." },
        { step: 3, text: "Flag 'Aggregation Targets' for partnership." },
      ],
      data: [
        { label: "Network Found", value: "Sunbelt Outdoor (Phoenix/Tucson)" },
        { label: "Inventory", value: "45 Digital Faces" },
      ],
      reports: [
        { label: "Est. Impressions", value: "4.2M Weekly", status: "stable" },
        { label: "Tech Readiness", value: "Low (Needs Upgrade)", status: "warning" },
      ],
    },
    {
      title: "Evaluate Podcast Inventory",
      prompt:
        "Analyze the top 100 'Business & Tech' podcasts for unsold mid-roll inventory to create a B2B media bundle.",
      thinking:
        "Crawling RSS feeds and Ad insertion points... \n• Detecting 'House Ads' (indicator of unsold inventory). \n• Found 12 podcasts in the 'Acquired/All-In' demographic with 30% unsold inventory. \n• Value Prop: Offer guaranteed fill rate via MMC Portfolio companies (B2B SaaS) in exchange for exclusive rates.",
      workflow: [
        { step: 1, text: "Transcribe audio to detect ad breaks." },
        { step: 2, text: "Identify 'House Ad' frequency > 20%." },
        { step: 3, text: "Bundle into 'MMC B2B Audio Network'." },
      ],
      data: [
        { label: "Network Reach", value: "1.5M Monthly Downloads" },
        { label: "Audience", value: "High Net Worth / Decision Makers" },
      ],
      reports: [
        { label: "Inventory Health", value: "Distressed (Opportunity)", status: "success" },
        { label: "CPM Arbitrage", value: "Buy $15 / Value $45", status: "success" },
      ],
    },
  ],

  "Asset Valuator": [
    {
      title: "Price Media Liquidity",
      prompt:
        "Calculate the fair market value (FMV) of a $10M 'Gross Media Value' deal with a TV network vs. its 'Cash Equivalent' value.",
      thinking:
        "Running Black-Scholes for Inventory... \n• Input: $10M Rate Card Value. \n• Discount Factors: 'Perishability' (50%), 'Fill Rate Probability' (30%). \n• Calculation: The 'Cash Equivalent' cost to the network is only $1.2M (Operational Cost). \n• Insight: We can offer $2M in Equity Value to acquire $10M in Media Value.",
      workflow: [
        { step: 1, text: "Ingest Network Rate Card (2025)." },
        { step: 2, text: "Apply 'Marginal Cost of Delivery' coefficient." },
        { step: 3, text: "Output 'Asset Transfer Price'." },
      ],
      data: [
        { label: "Gross Value", value: "$10,000,000" },
        { label: "Marginal Cost", value: "$1,200,000" },
      ],
      reports: [
        { label: "Leverage Ratio", value: "8.3x", status: "success" },
        { label: "Deal Viability", value: "High", status: "success" },
      ],
    },
    {
      title: "Structure Publisher Deal",
      prompt:
        "Draft a revenue-share model for a Streamer Partner (e.g., Roku/Tubi) where they get upside in MMC portfolio exits.",
      thinking:
        "Modeling 'Warrant-Based' Media Deal... \n• Proposal: Streamer provides $5M inventory. \n• Comp: Instead of cash, Streamer gets 'LP Interest' in MMC Fund IV (Carry). \n• Alignment: Streamer is incentivized to prioritize our ads to drive portfolio exit value.",
      workflow: [
        { step: 1, text: "Define 'Inventory Contribution' as Capital Call." },
        { step: 2, text: "Calculate LP Equivalent Units." },
        { step: 3, text: "Generate Term Sheet: 'Media-for-Carry'." },
      ],
      data: [
        { label: "Partner", value: "Tier-1 AVOD Streamer" },
        { label: "Deal Structure", value: "2.5% Fund Carry for $50M Inv" },
      ],
      reports: [
        { label: "Partner IRR", value: "22% (Projected)", status: "stable" },
        { label: "Cash Savings", value: "100%", status: "success" },
      ],
    },
    {
      title: "Audit Inventory Quality",
      prompt:
        "Verify the 'Viewability' and 'Fraud Rate' of a potential Digital Publisher partner before acquisition.",
      thinking:
        "Initiating 'DoubleVerify' Simulation... \n• Analyzing historical bidstream data. \n• Flag: Partner 'NewsSite_X' has 15% IVT (Invalid Traffic/Bots). \n• Impact: Reduces 'Real Media Value' by 15%. \n• Action: Adjust acquisition offer price down by 20% to account for fraud risk.",
      workflow: [
        { step: 1, text: "Ping IAS/DoubleVerify API for domain health." },
        { step: 2, text: "Analyze 'Time-in-View' metrics." },
        { step: 3, text: "Re-calculate 'Effective CPM' (eCPM)." },
      ],
      data: [
        { label: "Domain", value: "Publishernetwork.com" },
        { label: "Fraud Score", value: "Medium (15% Bot)" },
      ],
      reports: [
        { label: "Quality Score", value: "C+", status: "warning" },
        { label: "Negotiation Leverage", value: "Strong", status: "success" },
      ],
    },
  ],

  "Partner Integration": [
    {
      title: "API Connector Setup",
      prompt:
        "Generate the API schema to connect MMC's buying engine directly to Sinclair's 'WideOrbit' ad server.",
      thinking:
        "Generating Middleware Spec... \n• Protocol: VAST 4.0 / OpenRTB. \n• Requirement: Real-time 'Avail' lookup. \n• Logic: 'If Inventory = Unsold @ T-minus-4-hours, Push to MMC Queue.' \n• Goal: Automate the injection of portfolio ads into expiring slots.",
      workflow: [
        { step: 1, text: "Map WideOrbit 'Avails' endpoint." },
        { step: 2, text: "Define 'Ingest Frequency' (Every 15 mins)." },
        { step: 3, text: "Write Python 'Connector' script." },
      ],
      data: [
        { label: "Integration", value: "WideOrbit -> MMC Core" },
        { label: "Latency", value: "< 200ms" },
      ],
      reports: [
        { label: "Connectivity", value: "Ready to Test", status: "success" },
        { label: "Automation Level", value: "L4 (High)", status: "success" },
      ],
    },
    {
      title: "Legal Framework Gen",
      prompt:
        "Create a 'Master Service Agreement' (MSA) for a Media Partner that treats 'Airtime' as a 'Capital Contribution'.",
      thinking:
        "Drafting Specialized Legal Clauses... \n• Section 4.2: 'Valuation of Inventory'. Defined as 'Lowest Rate Card' (Most Favored Nation). \n• Section 5.1: 'Liquidity Event'. Publisher gets paid only upon Portfolio Exit (M&A/IPO). \n• Risk: Publisher bankruptcy. \n• Clause: 'Bankruptcy Remote' status for the inventory assets.",
      workflow: [
        { step: 1, text: "Load 'Media-Capital-MSA-Template'." },
        { step: 2, text: "Insert 'Preferred Liquidity' clauses." },
        { step: 3, text: "Export Draft PDF." },
      ],
      data: [
        { label: "Document", value: "MSA_v1_Draft" },
        { label: "Jurisdiction", value: "Delaware / New York" },
      ],
      reports: [
        { label: "Legal Risk", value: "Low", status: "success" },
        { label: "Partner Protection", value: "Standard", status: "stable" },
      ],
    },
    {
      title: "Inventory Whitelisting",
      prompt:
        "Configure brand safety rules for the new inventory source to ensure it's safe for D2C brands.",
      thinking:
        "Applying 'GARM' (Global Alliance for Responsible Media) Standards... \n• Exclusion List: Politics, Adult, Tragic News. \n• Whitelist: Sports, Lifestyle, Tech, Cooking. \n• Filtering: Removing '2am Infomercial' blocks to preserve brand prestige for our portfolio.",
      workflow: [
        { step: 1, text: "Ingest Network Program Guide." },
        { step: 2, text: "Tag Content Categories (NLP)." },
        { step: 3, text: "Set 'Blocklist' parameters." },
      ],
      data: [
        { label: "Content Filter", value: "GARM Brand Safety Floor" },
        { label: "Safe Inventory", value: "85% of Total" },
      ],
      reports: [
        { label: "Safety Score", value: "99/100", status: "success" },
        { label: "Premium Status", value: "Verified", status: "success" },
      ],
    },
  ],

  "Venture Hunter": [
    {
      title: "Identify Media-Fit Ventures",
      prompt:
        "Scan Crunchbase and Pitchbook for Series A D2C brands with >$5M ARR but high CAC, signaling a need for Media Capital.",
      thinking:
        "Executing 'Growth-Constraint' Search Algorithm... \n• Filter 1: Sector = 'Consumer / CPG / Fintech'. \n• Filter 2: Funding = 'Series A' (raised $5M-$15M). \n• Filter 3 (The Signal): Headcount growth in 'Marketing' > 20% (High Spend) BUT Web Traffic flat (CAC Wall). \n• Result: Found 'Hydra-Flow' (Bev) and 'FinSave' (App). Both hitting diminishing returns on Meta Ads.",
      workflow: [
        { step: 1, text: "Query Pitchbook API for recent Series A." },
        { step: 2, text: "Cross-reference with SimilarWeb Traffic Trends." },
        { step: 3, text: "Flag companies with 'CAC Plateau' pattern." },
      ],
      data: [
        { label: "Target Found", value: "Hydra-Flow Inc." },
        { label: "Signal", value: "Meta Ad Spend: $400k/mo (Saturated)" },
      ],
      reports: [
        { label: "Media-Fit Score", value: "92/100", status: "success" },
        { label: "Need Level", value: "Critical", status: "warning" },
      ],
    },
    {
      title: "Competitor Displacement",
      prompt:
        "Find startups competing with 'LiquidIV' who could use TV inventory to steal market share.",
      thinking:
        "Market Map Analysis... \n• LiquidIV dominates via Retail + Digital. \n• Weakness: They are less present on 'Regional Sports Networks' (RSNs). \n• Hunter Logic: Find the #2 or #3 player (e.g., 'SaltFix'). \n• Strategy: Offer 'SaltFix' exclusive category rights on RSNs to block LiquidIV.",
      workflow: [
        { step: 1, text: "Identify 'Challenger Brands' in Electrolyte category." },
        { step: 2, text: "Analyze Competitor 'Share of Voice' (SOV)." },
        { step: 3, text: "Shortlist targets with scalable supply chains." },
      ],
      data: [
        { label: "Challenger", value: "SaltFix Labs" },
        { label: "Differentiation", value: "Sugar-Free (Trend Aligned)" },
      ],
      reports: [
        { label: "Disruption Potential", value: "High", status: "success" },
        { label: "Win Probability", value: "65%", status: "stable" },
      ],
    },
    {
      title: "Monitor Ad Spend Spikes",
      prompt:
        "Alert when a tracked startup increases Facebook Ad spend by 50%, indicating a fresh capital injection ready for diversification.",
      thinking:
        "Monitoring 'Meta Ad Library' & Pathmatics... \n• Alert: 'PetChew' just launched 50 new creatives. Spend est. jumped to $200k/mo. \n• Insight: They just raised money or are aggressively pushing. \n• Action: Perfect time to pitch 'TV' as a diversification channel to lower blended CAC.",
      workflow: [
        { step: 1, text: "Stream Pathmatics Spend Data." },
        { step: 2, text: "Detect 'Spend Velocity' > 50% MoM." },
        { step: 3, text: "Trigger BD Outreach Task." },
      ],
      data: [
        { label: "Company", value: "PetChew DTC" },
        { label: "Spend Delta", value: "+$80k last 30 days" },
      ],
      reports: [
        { label: "Timing", value: "Perfect (Post-Raise)", status: "success" },
        { label: "Lead Warmth", value: "Hot", status: "success" },
      ],
    },
  ],

  "Automated Outreach": [
    {
      title: "Generate Cold Outreach",
      prompt:
        "Draft a hyper-personalized email to the CEO of 'Hydra-Flow' referencing their specific CAC challenges and offering a simulation.",
      thinking:
        "Composing 'Value-First' Email... \n• Hook: 'Saw you scaled to $5M ARR, but SimilarWeb shows traffic flattening.' \n• Value Prop: 'We have $50M of TV inventory. I ran a simulation (attached) showing how TV could drop your blended CAC by 20%.' \n• CTA: 'Want to see the full model?' \n• Tone: Strategic Partner, not Service Provider.",
      workflow: [
        { step: 1, text: "Scrape CEO LinkedIn Bio (Context)." },
        { step: 2, text: "Insert 'Simulation Teaser' (Agent F Output)." },
        { step: 3, text: "Send via SendGrid/Gmail API." },
      ],
      data: [
        { label: "Recipient", value: "Sarah Jenkins (CEO)" },
        { label: "Personalization", value: "Mentioned 'Series A' & 'CPA pressure'" },
      ],
      reports: [
        { label: "Spam Score", value: "0/10 (Clean)", status: "success" },
        { label: "Est. Open Rate", value: "65%", status: "success" },
      ],
    },
    {
      title: "LinkedIn Sequencing",
      prompt:
        "Create a multi-touch LinkedIn connection sequence for the CMO, sharing 'Media-for-Equity' case studies.",
      thinking:
        "Designing 'Social Selling' Workflow... \n• Touch 1 (Connect): 'Admire the rebrand at [Company].' \n• Touch 2 (Value): 'We helped [Competitor] lower CAC by 30% using unsold OOH. Thought this case study might be relevant.' \n• Touch 3 (The Ask): 'Open to a 15-min demo of our Media Simulator?'",
      workflow: [
        { step: 1, text: "Identify Key Decision Maker (CMO/VP Growth)." },
        { step: 2, text: "Schedule 'Smart Sequence' (Delay: 3 days)." },
        { step: 3, text: "Auto-reply detection." },
      ],
      data: [
        { label: "Platform", value: "LinkedIn Sales Nav" },
        { label: "Sequence Length", value: "4 Steps" },
      ],
      reports: [
        { label: "Conversion Est.", value: "12%", status: "stable" },
        { label: "Brand Safe", value: "Yes", status: "success" },
      ],
    },
    {
      title: "Inbound Lead Scoring",
      prompt:
        "Score an inbound application from 'FitTech.io' based on their reported unit economics and media readiness.",
      thinking:
        "Running 'Qualification' Matrix... \n• Revenue: $2M (Pass). \n• Margins: 60% (Pass). \n• Product: Hardware (Caution - Inventory Risk). \n• Media Fit: High (Visual product, good for TV). \n• Score: 78/100. \n• Action: Auto-schedule call with Associate.",
      workflow: [
        { step: 1, text: "Parse Typeform Application." },
        { step: 2, text: "Run against 'Investment Thesis' Rules." },
        { step: 3, text: "Update CRM (HubSpot)." },
      ],
      data: [
        { label: "Applicant", value: "FitTech.io" },
        { label: "Auto-Score", value: "Tier 2 Lead" },
      ],
      reports: [
        { label: "Qualification", value: "Qualified", status: "success" },
        { label: "Response Time", value: "Instant", status: "success" },
      ],
    },
  ],

  "The Convincer": [
    {
      title: "Generate 'Growth Sim' Deck",
      prompt:
        "Create a personalized 5-slide PDF for Hydra-Flow showing exactly what $2M of Media Capital would do to their P&L.",
      thinking:
        "Generating 'The Vision' Artifact... \n• Slide 1: 'Current State' (High CAC). \n• Slide 2: 'The Injection' ($2M TV Inventory). \n• Slide 3: 'The Impact' (Traffic +40%, CAC -15%). \n• Slide 4: 'Valuation Uplift' (Series B at $50M vs $30M). \n• Goal: Visual proof of the Media Multiplier.",
      workflow: [
        { step: 1, text: "Run Agent G (Valuation) Simulation." },
        { step: 2, text: "Map data to 'Pitch_Deck_Template.pptx'." },
        { step: 3, text: "Export customized PDF." },
      ],
      data: [
        { label: "Output", value: "Hydra_Growth_Sim.pdf" },
        { label: "Key Stat", value: "+$8M Enterprise Value" },
      ],
      reports: [
        { label: "Persuasion Score", value: "High", status: "success" },
        { label: "Turnaround", value: "30 seconds", status: "success" },
      ],
    },
    {
      title: "Objection Handling Bot",
      prompt:
        "Draft a response to a Founder asking: 'Why should I give you equity for media? Why not just buy ads myself?'",
      thinking:
        "Retrieving 'Arbitrage' Argument... \n• Core Point 1: Cash Preservation. 'If you buy ads, you burn cash runway. If you use us, you extend runway.' \n• Core Point 2: Efficiency. 'We buy at rates you can't access (80% off).' \n• Core Point 3: Risk. 'We share the downside risk; Google/Meta does not.'",
      workflow: [
        { step: 1, text: "Analyze Sentiment: Skeptical." },
        { step: 2, text: "Retrieve 'FAQ_Cash_Preservation' module." },
        { step: 3, text: "Draft rebuttal email." },
      ],
      data: [
        { label: "Objection", value: "Cash vs. Equity" },
        { label: "Strategy", value: "Runway Extension Argument" },
      ],
      reports: [
        { label: "Argument Strength", value: "Solid", status: "success" },
        { label: "Founder Alignment", value: "Strategic", status: "stable" },
      ],
    },
    {
      title: "Case Study Matcher",
      prompt:
        "Find a relevant past success story to send to a Fintech prospect who is worried about 'Creative Control'.",
      thinking:
        "Searching Portfolio Database... \n• Query: Sector='Fintech' AND Tag='Creative Freedom'. \n• Match: 'CreditKing' (Series B). \n• Story: We let them run their own creatives, we just provided the slot. Resulted in 3x growth. \n• Action: Send 'CreditKing' video testimonial.",
      workflow: [
        { step: 1, text: "Query 'Success Stories' Vector DB." },
        { step: 2, text: "Filter for 'Fintech' + 'Creative Control'." },
        { step: 3, text: "Attach Video Link." },
      ],
      data: [
        { label: "Match", value: "CreditKing Case Study" },
        { label: "Relevance", value: "100%" },
      ],
      reports: [
        { label: "Trust Building", value: "High", status: "success" },
        { label: "Asset Sent", value: "Video_Testimonial.mp4", status: "success" },
      ],
    },
  ],

  "Asset Deployment": [
    {
      title: "GTM Channel Mapping",
      prompt:
        "Determine the optimal first-deployment channel for Hydra-Flow (TV vs. OOH vs. Audio) based on initial audit.",
      thinking:
        "Analyzing 'Product-Channel Fit'... \n• Product: Hydration Powder. Visual? Yes. Impulse Buy? Yes. \n• Channel A (Podcast): Good for education, but low impulse. \n• Channel B (TV): High visual, mass reach. \n• Recommendation: Start with 'Morning TV' (Fitness demographic) for awareness, retarget via Meta.",
      workflow: [
        { step: 1, text: "Ingest Product Attributes." },
        { step: 2, text: "Score against Channel Affordances." },
        { step: 3, text: "Output 'Launch Plan'." },
      ],
      data: [
        { label: "Best Channel", value: "Linear TV (Morning)" },
        { label: "Rationale", value: "Visual Demonstration Required" },
      ],
      reports: [
        { label: "Fit Score", value: "TV: 9/10", status: "success" },
        { label: "Launch Risk", value: "Low", status: "success" },
      ],
    },
    {
      title: "Inventory Allocation Logic",
      prompt:
        "Allocate $500k of 'Expiring' Q3 inventory to Hydra-Flow to maximize utilization before it's lost.",
      thinking:
        "Inventory Arbitrage Execution... \n• Asset: $500k of 'Sinclair Sports' inventory expiring in 14 days. \n• Problem: If unused, value = $0. \n• Solution: Grant 'Bonus Allocation' to Hydra-Flow. \n• Benefit: Hydra-Flow gets free exposure; MMC logs 'Utilization'; Broadcaster fills dead air.",
      workflow: [
        { step: 1, text: "Identify 'Distressed' Blocks." },
        { step: 2, text: "Match to Portfolio Needs." },
        { step: 3, text: "Issue 'Insertion Order' (IO)." },
      ],
      data: [
        { label: "Allocation", value: "450 Spots (Midwest)" },
        { label: "Cost to Fund", value: "$0 (Sunk Cost)" },
      ],
      reports: [
        { label: "Waste Avoided", value: "$500k Value", status: "success" },
        { label: "Client Delight", value: "High", status: "success" },
      ],
    },
    {
      title: "Creative A/B Deployment",
      prompt:
        "Deploy 3 creative variations to the TV network to test which message ('Taste' vs. 'Health') drives better web lift.",
      thinking:
        "Setting up 'Split Test' via Ad Server... \n• Creative A: 'Tastes like Juice' (Taste). \n• Creative B: '3x Electrolytes' (Health). \n• Methodology: Run A in North DMA, Run B in South DMA. Compare 'Direct Traffic' spikes. \n• Optimization: Shift budget to winner after 48 hours.",
      workflow: [
        { step: 1, text: "Tag Creatives with Unique promo codes." },
        { step: 2, text: "Assign DMAs for A/B split." },
        { step: 3, text: "Monitor Real-Time Web Analytics." },
      ],
      data: [
        { label: "Test Size", value: "$50k Media Spend" },
        { label: "KPI", value: "Cost Per Visit (CPV)" },
      ],
      reports: [
        { label: "Test Status", value: "Live", status: "warning" },
        { label: "Data Flow", value: "Real-Time", status: "success" },
      ],
    },
  ],

  "Media-for-Equity Core": [
    {
      title: "Orchestrate M4E pipeline",
      prompt:
        "Match publisher inventory to equity deal flow for Hydra-Flow (Series A), normalize schemas, and route scenarios to all agents.",
      thinking:
        "Initializing DAG (Directed Acyclic Graph) for Deal Flow... \n• Ingesting `Series_A_DataRoom.zip` (P&L, Cap Table, Cohort Analysis). \n• Normalizing financial schemas: Mapping `GAAP_Revenue` to `MMC_Adjusted_Revenue`. \n• Triggering `Inventory_Scout` to query Sinclair/Televisa SSPs for Q4 'Remnant' slots. \n• Calculating initial `Arbitrage_Spread`: (Media_Book_Value - Internal_Cost_Basis) * Est_Utilization. \n• Routing logic: If `Burn_Rate` > $200k/mo -> Priority: `Risk_Agent`.",
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
        "Synthesizing Agent Outputs for IC Review... \n• Compiling `Bear_Case_Valuation` from Agent D (2.4x MOIC). \n• Structuring the 'Media Arbitrage' Thesis: We are buying $1.00 of equity for $0.22 of internal media cost. \n• Risk Factor Analysis: 3PL 'Breakage' probability is 45% (See Agent C). \n• Generating `Go/No-Go` Matrix based on `Risk_Adjusted_Return_on_Capital` (RAROC). \n• Formatting output for Notion/PDF export.",
      workflow: [
        { step: 1, text: "Pull 'Bear Case' valuation from Agent D." },
        { step: 2, text: "Highlight 'Inventory Arbitrage' opportunity (Buying $1 of equity for $0.30 of cost)." },
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
        "Running `Knapsack_Optimization_Algorithm` on Q4 Inventory... \n• Constraint: Inventory expires in 34 days. \n• Variable A (Hydra-Flow): CPA $12.50, Marginal Utility High. \n• Variable B (Groomie): CPA $18.20, Diminishing Returns observed. \n• Re-allocating 4,500 GRPs from Groomie to Hydra-Flow to maximize `Portfolio_Aggregate_LTV`. \n• Simulating impact on Groomie's Series B metrics.",
      workflow: [
        { step: 1, text: "Analyze Q4 expire-by dates on Ad Inventory." },
        { step: 2, text: "Simulate A/B allocation: 60% Hydra-Flow vs 40% Groomie." },
        { step: 3, text: "Update Media Credit ledger." },
      ],
      data: [
        { label: "Inventory Feed", value: "Expiring Slots: 4,500 GRPs" },
        { label: "Performance Data", value: "Hydra-Flow CPA: $12.50 | Groomie CPA: $18.20" },
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
        "Querying SSP (Supply Side Platform) APIs: Sinclair, Univision, Atmosphere... \n• Filtering for `Unsold_Impressions` with `Time_To_Decay` < 7 days. \n• Matching Audience `Nielsen_Index_M18-34` > 110. \n• Found 'Late Night Sports' blocks in Midwest DMA. \n• Calculating `Effective_Yield`: Rate Card ($45 CPM) vs Internal Cost ($5 CPM). \n• Arbitrage Opportunity: 900% Markup on Equity Value.",
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
        "Performing Geospatial Cross-Reference... \n• Ingesting Shopify CSV `Sales_By_Zip`. Heatmap Center: Austin (78701). \n• Overlaying `Lamar_Digital_Inventory` API availability. \n• Identifying 'Commuter Corridor' density along I-35. \n• Calculating `Drive_Time_Impressions` vs `Conversion_Rate_Lift`. \n• Optimization: 40% of available boards coincide with top 10% sales zips.",
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
        "Analyzing `MediaRadar` Competitive Spend... \n• Competitor 'LiquidIV' heavy on `Morning_News` (7am-9am). High CPM. \n• Analyzing Hydra-Flow User Session Logs: Peak traffic at 11pm-2am (Gaming/Esports cohort). \n• Strategy: Counter-Programming. \n• Buying 'Late Night' slots at 20% of Prime Time cost. \n• Modeling `CAC_Arbitrage`: Expected CAC drop of 22% due to lower media cost basis.",
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
        "Running `Queuing_Theory_Simulation` (M/M/1 Model)... \n• Input: Media Injection = 14M Impressions/Week. \n• Est. Traffic Spike: 5k concurrent users. \n• 3PL Constraint (ShipBob API): 2,000 orders/day max throughput. \n• Result: Order Queue > Service Rate = `Explosion`. \n• Backlog Accumulation: 3 days. \n• Risk: Customer Churn spikes to 15% due to shipping delays. \n• Flagging CRITICAL.",
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
        "Running Sensitivity Table (Monte Carlo n=10,000)... \n• Variable: CTR (Click Through Rate). Range: 0.5% - 2.0%. \n• Formula: `Max_CAC = LTV / 3`. \n• Current LTV: $85. Max Allowable CAC: $28. \n• Analysis: If CTR drops below 0.65% (due to ad fatigue), CAC exceeds $28. \n• Result: Deal becomes dilutive to unit economics. \n• Recommendation: Require 3 net-new creative assets before funding.",
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
        "Calculating `Inventory_Turnover_Ratio`... \n• Batch #4492 Expiry: Oct 2026 (18 months). \n• Current Sales Velocity: 1,200 units/mo. \n• DSI (Days Sales of Inventory): 320 days. \n• Risk: If media campaign fails (0% lift), 40% of inventory expires unsold. \n• Financial Impact: $150k write-off. \n• Mitigation: Add 'Liquidation Preference' clause on inventory assets.",
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
        "Adjusting Standard 409a Valuation... \n• Base SaaS Multiple (5x ARR): $21M. \n• `Media_Multiplier` Adjustment: We are injecting $5M GMV (Gross Media Value). \n• Cost Basis Adjustment: Internal cost is $1M. \n• Arbitrage Value Added: $4M. \n• Proposed Pre-Money: $22M. \n• Justification: We are capitalizing the 'Media Lift' into the equity price immediately.",
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
        "Simulating `Cap_Table_Waterfall`... \n• Inputs: $5M Media (MMC), $2M Cash (Bridge). \n• Pre-Money: $20M. Post-Money: $27M. \n• Calculating `Fully_Diluted_Ownership`: \n  • Founders: 60% -> 44.4%. \n  • MMC: 18.5% Stake. \n• Option Pool Refresh: Increasing to 15%. \n• Check: Does Founder ownership drop below 40% (Control Risk)? No. \n• Result: Terms are viable.",
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
        "Running `Liquidation_Stack_Simulation`... \n• Term: 1x Non-Participating Preference. \n• Scenario A ($50M Exit): MMC gets $5M (Pref) + Pro-rata? No, converts to Common. Value: $9.25M. MOIC: 1.85x. \n• Scenario B ($200M Exit): Value: $37M. MOIC: 7.4x. \n• IRR Calculation: Assuming 48-month hold. Base Case IRR: 32%.",
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
        "Drafting `TS_Series_A_Ext_v4`... \n• Inserting `Media_Credit_Definition`: $5M Face Value (Rate Card 2025). \n• Clause: `Utilization_Milestones`. Tranche 1 ($2M) on Signing. Tranche 2 ($3M) on verifying LTV:CAC > 3.0. \n• Clause: `Clawback_Provision`. If utilization < 50% in 18 months, unspent equity reverts to Founders (prevents dead equity). \n• Generating PDF wrapper.",
      workflow: [
        { step: 1, text: "Load 'MMC Standard Media Agreement' template." },
        { step: 2, text: "Insert 'Milestone Tranches' (Tranche 1: $2M TV, Tranche 2: $3M Digital)." },
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
        "Applying `Black-Scholes_Option_Pricing_Model`... \n• Risk Input: Creative_Variance (High). No historical TV data. \n• Implied Volatility (σ): 60%. \n• Risk Premium Required: $250k. \n• Calculating Warrant %: At $20M Valuation, $250k value = ~1.25% additional coverage. \n• Recommendation: Increase Warrant Coverage from 10% -> 12% or 20% flat to mitigate creative risk.",
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
        "Analyzing `Media_Inflation_Index`... \n• Election Year (2026/2028) detected. TV CPM Inflation expected +12%. \n• Risk: If we promise $5M value at *future* rates, we deliver fewer impressions. \n• Strategy: Lock rates to `Q4_2025_Rate_Card`. \n• Term: 'Media Value shall be calculated based on the trailing 12-month average CPM as of Effective Date.' \n• Protects MMC inventory yield.",
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
        "Running `Markov_Chain_Attribution_Model`... \n• Scenario A (Linear Heavy): High Reach, Low Precision. Est ROAS: 1.8x. \n• Scenario B (CTV Heavy): Lower Reach, High Precision (Household Targeting). Est ROAS: 2.9x. \n• Audience Insight: Gen-Z cord-cutting rate > 65%. \n• Optimization: Shift Allocation to 40% Linear / 60% CTV to maximize conversion probability.",
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
        "Calculating `Creative_Decay_Curve`... \n• Spend Velocity: $500k/mo. Target Audience Size: 12M. \n• Frequency Calculation: Avg Frequency = 8.5x in Week 6. \n• Ad Blindness Threshold: Frequency > 6x. \n• Prediction: CPA will increase by 15% starting Week 7 due to fatigue. \n• Action: Need 2 net-new creative variations ready by Day 45.",
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
        "Applying `Synthetic_Control_Method` (Difference-in-Differences)... \n• Treatment Group: Chicago DMA (High Inventory Avail). \n• Control Group: Boston DMA (Similar demographics, No Ad Spend). \n• Variable: `Incremental_Sales_Lift`. \n• Benchmark: Beverage category typically sees 12-18% lift. \n• Forecast: Chicago inventory mix (OOH + Local News) predicts 18% lift. \n• Confidence Interval: 95%.",
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
        "Initiating `OSINT_Crawler`... \n• Checking Federal Court Records (PACER): Zero hits. \n• Analyzing Founder's previous exit ('Hydra-1'): Sold to PE firm. \n• Sentiment Analysis (Reddit/Twitter): 85% Positive. \n• Cross-referencing SEC EDGAR database for `Bad_Actor_Disqualification`. \n• Result: Clean. No reputational risks detected.",
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
        "Calculating `Herfindahl-Hirschman_Index` (HHI) for Electrolyte Category... \n• Market Leaders: LiquidIV (60% share), LMNT, Nuun. \n• HHI Score: 0.38 (Highly Concentrated). \n• Risk: Breaking a duopoly requires 3x media spend. \n• MMC Advantage: We control the inventory channel. \n• Strategy: `Category_Exclusivity`. If we give Hydra-Flow exclusive access to 'Sports' slots, we block LiquidIV from responding.",
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
        "Running `NLP_Compliance_Scanner` against FDA 21 CFR 101.93... \n• Input Phrase: 'Instant Hangover Cure'. \n• Violation: 'Cure' implies drug status. Hydra-Flow is a supplement. \n• Risk: FTC Warning Letter + Sinclair Broadcast Standards rejection. \n• Auto-Correction: Suggest changing to 'Supports Rehydration'. \n• Flagging as CRITICAL blocker for TV flight.",
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
