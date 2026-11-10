EcoPulse — Forecast · Route · Protect ⚡

The neighbourhood grid that keeps the lights on for those who need it most.

An AI-powered smart microgrid and peer-to-peer energy routing platform with Lifeline-First protection.

CODEQUEST 2026 · Team Innovexa · Team ID: madhumitha9971

"GitHub Repository" (https://github.com/madhumitha9971-pixel/EcoPulse)

---

🌍 1. The Problem

Rooftop solar is wasted at noon. The same neighbourhoods overpay at 7 PM.

Urban neighbourhoods are experiencing a growing mismatch between renewable energy generation and electricity consumption.

- Solar energy wastage: Rooftop solar systems often generate more electricity than a household can immediately consume.
- Evening peak demand: Electricity demand rises after sunset, increasing pressure on local distribution networks.
- Limited local energy exchange: Neighbours with surplus solar power lack a simple, coordinated mechanism to share it with nearby consumers.
- Grid vulnerability: Central grid failures can leave households without electricity, including people who depend on powered medical equipment.
- Lack of intelligent coordination: Traditional distribution systems do not provide neighbourhood-level visibility into local supply, demand and energy priorities.

Who benefits?

User group| Problem
Rooftop solar homeowners| Unused surplus generation
Neighbourhood consumers| Higher evening electricity costs
Medical-critical households| Risk of losing essential backup power
EV charging stations| Need for locally available energy
Local utilities| Evening demand and transformer stress

The opportunity: Instead of treating every household as an isolated electricity consumer, EcoPulse connects neighbourhood energy resources into an intelligent, coordinated microgrid.

---

💡 2. Our Solution

EcoPulse forecasts, routes and protects neighbourhood energy.

EcoPulse is a smart microgrid coordination prototype that combines energy forecasting, peer-to-peer energy matching, dynamic pricing and emergency reserve prioritisation.

It transforms individual energy resources into a coordinated neighbourhood network.

Three core capabilities

1. 24-hour Energy Intelligence
   
   Forecasts neighbourhood electricity supply and demand to anticipate surplus generation, consumption peaks and potential shortages.

2. Automated Peer-to-Peer Energy Routing
   
   Matches surplus renewable energy with nearby demand, helping neighbourhoods use locally generated electricity more efficiently.

3. Smart Outage Shield
   
   Simulates a central grid outage and prioritises locally available backup energy for critical neighbourhood needs.

Our unique innovation: Lifeline-First Routing

People before price.

Most energy optimisation systems focus primarily on cost and efficiency. EcoPulse introduces a protected reserve floor for households that voluntarily opt into medical-critical energy prioritisation.

- A minimum energy reserve is protected.
- Critical households receive priority during energy shortages.
- Surplus energy is considered for trading only after the protected reserve requirement is satisfied.
- The optimisation logic treats social priority as a constraint, not merely a pricing preference.

The principle is simple: energy trading must never come before essential human needs.

---

🚀 3. Key Features

3.1 Neighbourhood Energy Command Centre

- Interactive energy dashboard.
- Neighbourhood supply and demand overview.
- Solar generation and consumption indicators.
- Battery and reserve visibility.
- Energy availability and grid status.
- Live-style operational metrics using simulated data.

3.2 3D Neighbourhood Energy Visualisation

- Interactive Three.js energy globe.
- Visual representation of neighbourhood energy nodes.
- Animated connections between energy points.
- Fallback visualisation for devices where 3D rendering is unavailable.

3.3 Energy Flow Intelligence

- Visual energy flow representation.
- 24-hour timeline control.
- Supply and demand changes across simulated time.
- Neighbourhood-level energy distribution insights.
- Identification of surplus and shortage conditions.

3.4 AI Energy Advisor

- Natural-language energy queries.
- AI-generated energy recommendations through the Groq API.
- Context-aware suggestions based on the dashboard's simulated energy conditions.
- Fallback responses when the external AI service is unavailable.

3.5 Peer-to-Peer Energy Marketplace

- Simulated local energy offers and demand.
- Visual matching of surplus energy with neighbourhood demand.
- Illustrative energy trade records.
- Local transaction and settlement interface.

3.6 Lifeline-First Protection

- Critical household reserve concept.
- Protected energy allocation.
- Priority-based energy distribution.
- Emergency reserve visibility.

3.7 Smart Outage Shield

- Simulated central grid outage scenarios.
- Local battery reserve visualisation.
- Neighbourhood islanding concept.
- Critical-load protection demonstration.

3.8 Scenario Simulator

Explore different operating conditions:

Scenario| What it demonstrates
Normal| Standard neighbourhood energy conditions
Cloud Cover| Reduced solar generation
Peak Demand| Increased electricity consumption
Grid Outage| Emergency backup and reserve prioritisation

3.9 Analytics and Impact

- Energy performance indicators.
- Supply and demand visualisation.
- Estimated cost and efficiency impact.
- Operational insights for neighbourhood energy coordination.

3.10 Mobile-Friendly Experience

- Responsive dashboard.
- Mobile-friendly navigation and controls.
- Progressive Web App foundations.
- Installable experience where supported by the browser.

---

🧠 4. How EcoPulse Works

EcoPulse follows a five-stage neighbourhood energy coordination workflow.

flowchart TD
    A["Neighbourhood Energy Inputs"] --> B["Energy Forecasting"]
    B --> C["Supply and Demand Analysis"]
    C --> D["Peer-to-Peer Energy Matching"]
    D --> E["Lifeline-First Reserve Check"]
    E --> F["Energy Routing and Allocation"]
    F --> G["Dashboard and Energy Insights"]
    H["Grid Outage Detection"] --> I["Outage Shield"]
    I --> J["Local Battery Reserve"]
    J --> E

Stage 1 — Energy Data Collection

Energy generation, consumption and battery conditions are represented through simulated neighbourhood meter data.

Stage 2 — Energy Forecasting

The forecasting layer analyses expected energy supply and demand across a 24-hour period.

The proposed full-scale system uses a PyTorch-based LSTM forecasting model.

Stage 3 — Intelligent Matching

Surplus energy is compared with nearby consumer demand to identify potential local energy matches.

The proposed optimisation engine uses Mixed-Integer Linear Programming (MILP).

Stage 4 — Lifeline-First Allocation

Before energy is made available for trading, the system checks the protected reserve requirement for opted-in critical households.

Stage 5 — Monitoring and Protection

The dashboard displays energy conditions, routing information and scenario outcomes. During an outage simulation, the Outage Shield demonstrates the prioritisation of local backup resources.

---

🛡️ 5. What Makes EcoPulse Different?

Capability| Traditional Grid Approach| EcoPulse Approach
Energy distribution| Centralised distribution| Neighbourhood-level P2P coordination concept
Energy forecasting| Historical consumption patterns| Proposed AI-based 24-hour forecasting
Solar utilisation| Conventional grid export| Local surplus matching
Energy optimisation| Cost and demand focused| Supply, demand and social priority
Emergency response| Dependence on grid restoration| Local backup and reserve prioritisation concept
Visibility| Limited neighbourhood-level insights| Interactive energy command centre

Our key differentiator

Social priority becomes a hard constraint in energy allocation.

EcoPulse does not simply ask where electricity can generate the highest return. It also asks where electricity is most essential.

---

🏗️ 6. System Architecture

Current prototype architecture

The current demonstration is designed to run as a lightweight web application.

flowchart TD
    U["User"] --> UI["EcoPulse Web Dashboard"]
    UI --> V["Visualisation and Simulation Layer"]
    V --> T["Three.js Energy Visualisation"]
    V --> S["Scenario and Energy Simulation"]
    UI --> API["Vercel Serverless API"]
    API --> AI["Groq AI API"]
    AI --> API
    API --> UI
    S --> D["Dashboard Metrics and Insights"]

Proposed production architecture

The following architecture represents the planned full-scale implementation.

flowchart TD
    A["Smart Energy Meters"] --> B["MQTT Data Ingestion"]
    B --> C["FastAPI Backend"]
    C --> D["PyTorch LSTM Forecasting"]
    D --> E["Energy Supply and Demand Prediction"]
    E --> F["OR-Tools MILP Optimisation"]
    F --> G["Lifeline-First Reserve Constraint"]
    G --> H["P2P Energy Routing"]
    H --> I["Settlement and Transaction Layer"]
    C --> J["TimescaleDB"]
    H --> K["WebSocket Updates"]
    K --> L["EcoPulse Dashboard"]
    M["Grid Outage Signal"] --> N["Outage Shield"]
    N --> G

Architecture philosophy

- Forecast before allocation: anticipate demand and supply conditions before routing energy.
- Optimise locally: prioritise nearby energy generation and consumption.
- Protect essential loads: enforce the Lifeline reserve before allocating tradable energy.
- Maintain visibility: make energy conditions understandable through an interactive dashboard.
- Design for scalability: replicate the microgrid coordination model across neighbourhood transformer clusters.

---

⚙️ 7. Technology Stack

Current prototype

Layer| Technology
Frontend| HTML5, CSS3, JavaScript
3D Visualisation| Three.js
Dashboard| Custom responsive UI
AI integration| Groq API
Serverless backend| Vercel Functions
API runtime| Node.js
PWA foundation| Web App Manifest, Service Worker
Version control| Git and GitHub
Deployment| Vercel

Proposed production stack

Layer| Planned technology
Frontend| Next.js, Tailwind CSS
Backend| FastAPI, WebSockets
Energy telemetry| MQTT
Forecasting| PyTorch LSTM
Optimisation| Google OR-Tools MILP
Time-series database| TimescaleDB
Deployment| Docker, GitHub Actions

The proposed production stack describes the intended expansion. It should not be interpreted as already integrated into the current prototype.

---

📊 8. Expected Impact

Projected targets

Impact indicator| Target
Monthly electricity cost reduction| 28%
Clean energy utilisation improvement| 18%
Automated blackout resilience| 100% target

These are projected design targets, not measured results or verified performance benchmarks.

Environmental impact

- Better utilisation of locally generated renewable energy.
- Reduced dependence on conventional peak-hour electricity.
- More efficient neighbourhood energy coordination.
- Support for decentralised renewable energy adoption.

Social impact

- Protected energy reserves for opted-in critical households.
- Improved resilience during grid interruptions.
- More inclusive energy allocation.
- Greater neighbourhood energy awareness.

Economic impact

- Potential savings through local energy matching.
- Additional value from surplus rooftop solar.
- Reduced peak demand pressure on local infrastructure.

---

🔐 9. Privacy, Safety and Responsible Design

EcoPulse follows a people-first approach to energy management.

- Opt-in priority: critical households voluntarily enable Lifeline priority.
- Data minimisation: the proposed system stores a priority flag rather than a medical diagnosis.
- Protected reserves: essential energy reserves are considered before tradable surplus.
- Transparent allocation: energy recommendations and allocation decisions should be explainable.
- Human-centred design: real deployments must include appropriate safety controls and utility oversight.
- Simulation transparency: the current prototype uses simulated energy data and does not control real electricity infrastructure.

---

🖥️ 10. Run Locally

Prerequisites

- A modern browser (Chrome, Edge or Firefox).
- Git.
- A code editor, such as VS Code.
- Optional: a Groq API key for the live AI Advisor.

Clone the repository

git clone https://github.com/madhumitha9971-pixel/EcoPulse.git
cd EcoPulse

Run the project

For the static frontend, you can use a local development server.

python -m http.server 8000

Open:

http://localhost:8000

You can also open "index.html" directly for basic frontend inspection, but using a local server is recommended for service-worker and PWA testing.

Configure the AI Advisor

The AI Advisor uses a server-side API endpoint.

Create a Vercel environment variable:

Variable| Description
"GROQ_API_KEY"| Your private Groq API key

Important security rules:

- Never put your API key inside "index.html".
- Never commit secret keys to GitHub.
- Keep the key in Vercel Environment Variables.
- Redeploy after changing environment variables.

The frontend communicates with the serverless endpoint:

/api/ai

If the AI service is unavailable, the application can use its local fallback behaviour.

---

☁️ 11. Deployment

EcoPulse is designed for deployment through Vercel.

Deployment workflow

1. Push the project files to GitHub.
2. Import the EcoPulse repository into Vercel.
3. Configure the project root and deployment settings.
4. Add "GROQ_API_KEY" under Environment Variables if AI functionality is required.
5. Deploy the project.
6. Test the dashboard, scenario controls and AI Advisor.

Deployment configuration

Setting| Value
Framework preset| Other
Root directory| Repository root
Build command| Leave blank
Output directory| "."
AI environment variable| "GROQ_API_KEY"

Deployment settings may need adjustment if the repository structure or Vercel configuration changes.

---

🧪 12. Demo Walkthrough

Explore EcoPulse in a few minutes

1. Open the Energy Command Centre

Explore the neighbourhood dashboard and inspect the simulated energy indicators.

2. Explore the 3D Energy Network

Interact with the visual energy globe and observe the neighbourhood energy representation.

3. Adjust the 24-Hour Timeline

Move through the simulated day to inspect changes in supply and demand.

4. Explore the P2P Marketplace

Inspect the simulated energy offers, demand matching and transaction ledger.

5. Test Lifeline-First Protection

Explore the reserve prioritisation concept and understand how critical household energy needs are considered before trading.

6. Activate Scenario Simulation

Switch between normal, cloud cover, peak demand and grid outage conditions.

7. Try the AI Energy Advisor

Ask an energy-related question and explore the AI-generated recommendations.

8. Explore the Outage Shield

Observe how the system demonstrates neighbourhood backup and critical-load prioritisation during an outage scenario.

---

🤖 13. AI Tools and Development Transparency

EcoPulse uses AI as part of its energy intelligence experience.

Runtime AI

Technology| Purpose
Groq API| AI-powered energy advisory
Local simulation logic| Energy scenario calculations and dashboard behaviour
Three.js| Interactive 3D energy visualisation

Development tools

The project uses web development tools and AI-assisted workflows where applicable. All external libraries and AI services should be acknowledged accurately in the final submission.

The current prototype does not yet contain a trained LSTM forecasting model or a production MILP optimisation engine.

---

⚠️ 14. Limitations and Future Work

Current limitations

- The prototype uses simulated energy data rather than physical smart-meter feeds.
- The energy marketplace demonstrates simulated matching and transactions, not real electricity trading.
- The current dashboard does not control real batteries, inverters or grid infrastructure.
- The AI Advisor provides recommendations, not certified electrical engineering decisions.
- The 28%, 18% and 100% impact values are projected targets, not measured results.
- Real-world islanding requires utility-approved protection equipment and electrical safety systems.
- Actual P2P settlement requires regulatory approval and integration with authorised energy providers.

Future roadmap

Phase 1 — Intelligent Energy Simulation

- Improve the neighbourhood energy simulation.
- Validate supply and demand calculations.
- Strengthen Lifeline reserve allocation.
- Test multiple outage and peak-demand scenarios.

Phase 2 — AI Forecasting and Optimisation

- Integrate a PyTorch LSTM model.
- Implement OR-Tools MILP energy matching.
- Add explainable allocation decisions.
- Evaluate performance using realistic energy datasets.

Phase 3 — Smart Meter Integration

- Integrate MQTT-based meter telemetry.
- Connect battery and inverter data.
- Add real-time energy monitoring.
- Introduce secure household and neighbourhood authentication.

Phase 4 — Real-World Microgrid Deployment

- Partner with authorised utilities.
- Validate local energy-sharing regulations.
- Test controlled microgrid operation.
- Establish safety-certified outage protection.

---

📁 15. Repository Structure

EcoPulse/
│
├── index.html          # Main dashboard and application interface
├── manifest.json       # Progressive Web App configuration
├── sw.js               # Service worker and caching
├── icon.svg            # Application icon
│
├── api/
│   └── ai.js           # Serverless AI Advisor endpoint
│
└── README.md           # Project documentation

This structure describes the current lightweight prototype. Additional backend, forecasting, optimisation and database modules can be added as the project expands.

---

👥 Team

Team: Team Innovexa

Project: EcoPulse

Competition: CODEQUEST 2026

Team ID: madhumitha9971

---

⚡ Our Vision

We believe the future of energy is not only about generating more electricity. It is about distributing available energy intelligently, using renewable resources efficiently and protecting the people who need electricity the most.

EcoPulse transforms neighbourhoods from passive electricity consumers into coordinated energy communities.

Forecast. Route. Protect.

Trade fairly. Protect first. Power every neighbourhood.