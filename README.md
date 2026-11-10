EcoPulse
> The Intelligent Neighbourhood Energy Grid
> Forecast. Route. Protect.
> 
Turning wasted rooftop solar into neighbourhood power — while protecting the people who need electricity most.
Live Demo: ecopulse-neighbourhood-grid.vercel.app
👥 Team & Competition Details
 * Team Name: Team Innovexa
 * Author / Lead Developer: D. Madhumitha
 * AI Core Engine: Groq API (llama3-70b-8192)
 * Competition: CODEQUEST 2026
 * Repository: madhumitha9971-pixel/EcoPulse
We split the codebase into a lightweight PWA setup: Client Dashboard & 3D Visualization (index.html), Serverless AI Gateway (api/ai.js), and Service Worker Offline Cache (sw.js).
🌍 The Vision
What if your neighbourhood could generate, share, and protect its own electricity?
Every afternoon, rooftop solar panels generate more electricity than some households can consume. Every evening, the same neighbourhood experiences peak demand and higher electricity costs. Meanwhile, households that depend on electricity for essential medical equipment face serious risks during unexpected power failures.
EcoPulse introduces a neighbourhood-level intelligent energy coordination platform that forecasts demand, routes surplus renewable energy, and prioritises critical household reserves.
> Our Promise: Trade fairly. Protect first. Power every neighbourhood.
> 
📌 Table of Contents
 * The Problem
 * Our Solution
 * The Innovation — Lifeline-First Routing
 * Key Features
 * How EcoPulse Works
 * System Architecture
 * Technology Stack
 * Innovation Comparison
 * Expected Impact
 * Demo Walkthrough
 * Run Locally
 * Deployment
 * Privacy and Responsible Design
 * Limitations and Future Roadmap
 * Repository Structure
🔴 1. The Problem
Three energy problems. One neighbourhood.
| Problem | What Happens |
|---|---|
| ☀️ Solar Wastage | Excess rooftop solar is not always used locally. |
| ⚡ Peak-Hour Pressure | Evening demand increases grid congestion and electricity costs. |
| 🔌 No Local Energy Exchange | Neighbours lack a coordinated way to share surplus energy. |
| 🏥 Critical Power Vulnerability | Essential household energy needs may be affected by outages. |
Target Users
 * Urban Homeowners with rooftop solar installations.
 * Neighbourhood Consumers who need affordable, clean electricity.
 * Vulnerable Households dependent on essential powered medical equipment.
 * EV Charging Stations seeking localized clean power.
 * Local Utilities managing peak grid demand.
💡 2. Our Solution
EcoPulse is an AI-powered neighbourhood energy intelligence platform combining energy forecasting, peer-to-peer (P2P) coordination, intelligent allocation, and emergency reserve prioritisation.
Core Capabilities
 * 24-Hour AI Energy Forecast: Predicts expected neighbourhood energy supply and demand to identify potential shortages, surplus generation, and consumption peaks.
 * Automated Peer-to-Peer Energy Routing: Coordinates surplus energy with nearby demand, making optimal use of locally generated renewable electricity.
 * Smart Outage Shield: Demonstrates how local battery resources can be dynamically prioritised during a central grid failure.
🛡️ 3. The Innovation — Lifeline-First Routing
> PEOPLE BEFORE PRICE.
> This is EcoPulse's defining innovation.
> 
Conventional energy optimisation primarily focuses on supply, demand, and monetary cost. EcoPulse introduces a protected reserve requirement for households that voluntarily opt into critical energy prioritisation.
How It Works
 * A household voluntarily enables Lifeline Priority.
 * The system identifies its protected energy reserve requirement.
 * The optimiser considers this requirement before allocating energy for local trading.
 * Remaining eligible surplus is matched with neighbourhood demand.
 * During an outage, local backup resources are prioritized for essential loads.
> Our Differentiator: Social priority becomes a hard structural constraint in energy allocation — not just another pricing preference.
> 
🚀 4. Key Features
 * ⚡ Intelligent Energy Command Centre: Live neighbourhood energy dashboard displaying supply/demand indicators, solar generation, consumption visibility, and battery reserves.
 * 🌐 Interactive 3D Energy Network: Three.js-powered visual network featuring neighbourhood energy nodes and animated connections.
 * 📈 24-Hour Energy Intelligence: Interactive daily timeline detailing simulated supply and demand shifts.
 * 🤖 AI Energy Advisor: Natural-language assistant powered by Groq (llama3-70b-8192) for context-aware recommendations.
 * 🔄 Peer-to-Peer Energy Marketplace: Simulated energy offers, local demand matching, and illustrative trade ledgers.
 * 🏥 Lifeline-First Protection: Priority-aware reserve allocation ensuring essential-load protection.
 * 🔋 Smart Outage Shield: Simulated grid blackout triggers with local battery reserve visualisations.
 * 🌦️ Scenario Simulator: Instant testing for Normal, Cloud Cover, Peak Demand, and Grid Outage environments.
 * 📱 Responsive PWA Experience: Mobile-first layout backed by Web App Manifest and Service Worker caching foundations.
🧠 5. How EcoPulse Works
flowchart TD
    A["Smart Energy Inputs"] --> B["24-Hour Forecasting"]
    B --> C["Supply & Demand Analysis"]
    C --> D["P2P Energy Matching"]
    D --> E["Lifeline Reserve Check"]
    E --> F["Energy Allocation"]
    F --> G["Live Dashboard Insights"]
    H["Grid Outage"] --> I["Smart Outage Shield"]
    I --> J["Local Battery Reserve"]
    J --> E

 * Stage 1 — Energy Data Collection: Simulated inputs represent household solar generation, consumption, and battery state.
 * Stage 2 — Forecasting: Production engine concept uses a PyTorch LSTM model to predict supply and demand across a 24-hour window.
 * Stage 3 — Intelligent Matching: Optimisation pipeline utilizes Mixed-Integer Linear Programming (MILP) to match available energy with demand.
 * Stage 4 — Lifeline Protection: Protected reserves are verified before any surplus enters the trading layer.
 * Stage 5 — Monitoring: Live visualisations update energy metrics, marketplace actions, and operational states.
🏗️ 6. System Architecture
Current Prototype Architecture
flowchart TD
    U["User"] --> UI["EcoPulse Web Dashboard"]
    UI --> V["Dashboard & Simulation"]
    V --> T["Three.js Visualisation"]
    V --> S["Energy Scenario Engine"]
    S --> D["Energy Metrics"]
    UI --> API["Vercel Serverless API"]
    API --> G["Groq AI API (Llama3-70B)"]
    G --> API
    API --> UI

🧰 7. Technology Stack
Current Prototype
 * Frontend: HTML5, CSS3, JavaScript (ES6+)
 * 3D Visualisation: Three.js (r160)
 * AI Engine: Groq API (llama3-70b-8192) via Vercel Serverless Functions
 * Application Type: Progressive Web App (PWA)
 * Hosting & Deployment: GitHub, Vercel
⚖️ 8. Why EcoPulse is Different
| Capability | Traditional Grid | EcoPulse |
|---|---|---|
| Distribution | Centralized | Neighbourhood P2P Coordination |
| Prediction | Historical Averages | AI-Driven 24-Hour Forecasting |
| Solar Utilisation | Conventional Grid Export | Local Surplus Matching |
| Allocation Focus | Price & Volume | Cost, Demand, and Social Priority |
| Outage Response | Waiting for Central Repair | Local Lifeline Reserve Protection |
📊 9. Expected Impact
 * 28% Projected Reduction in monthly electricity costs for participating households.
 * 18% Improvement in local renewable energy utilisation.
 * 100% Target for automated blackout protection for critical lifeline households.
🎬 10. Demo Walkthrough
Recommended Sequence
 * Open the Energy Command Centre.
 * Explore the interactive 3D Neighbourhood Network.
 * Adjust the 24-Hour Energy Timeline.
 * Inspect the Peer-to-Peer Energy Marketplace.
 * Test the Lifeline-First Reserve Prioritisation.
 * Switch through Normal, Cloud Cover, Peak Demand, and Grid Outage scenarios.
 * Interact with the AI Energy Advisor.
💻 11. Run Locally
Prerequisites
 * Modern web browser
 * Git
 * Python 3.x (for static server hosting)
Quick Start
# Clone the repository
git clone https://github.com/madhumitha9971-pixel/EcoPulse.git
cd EcoPulse

# Start local server
python -m http.server 8000

Open http://localhost:8000 in your browser.
☁️ 12. Deployment
EcoPulse uses Vercel for hosting.
 * Push your changes to GitHub.
 * Import the repository into Vercel.
 * Add the GROQ_API_KEY environment variable in Vercel settings.
 * Deploy the application.
🔐 13. Privacy and Responsible Design
 * Opt-in Priority: Lifeline-First status is strictly opt-in and controlled by the household.
 * Data Minimisation: System logs priority flags only — no confidential personal or medical data is stored.
 * Transparent Logic: Energy matching algorithms prioritize safety rules over market bidding.
🚧 14. Limitations and Future Roadmap
Limitations
 * Energy inputs are generated via simulation algorithms rather than live smart meters.
 * Machine Learning (LSTM) and MILP solvers are conceptualized frameworks for production transition.
Roadmap
 * Phase 1 — Advanced Simulation: Enhanced dataset precision and multi-node scenarios.
 * Phase 2 — AI Pipeline Integration: Live PyTorch LSTM models and Google OR-Tools integration.
 * Phase 3 — Hardware Integration: Smart meter MQTT telemetry integration.
 * Phase 4 — Pilot Testing: Community microgrid partnerships and certified trial runs.
📁 15. Repository Structure
EcoPulse/
├── index.html        # Main dashboard and application interface
├── manifest.json     # PWA configuration
├── sw.js             # Service worker script and caching rules
├── icon.svg          # Vector application logo
├── api/
│   └── ai.js         # Serverless endpoint for Groq AI Advisor
└── README.md         # Project documentation

<div align="center">
<b>Trade Fairly. Protect First. Power Every Neighbourhood.</b>


<i>Built with innovation by Team Innovexa</i>
</div>
