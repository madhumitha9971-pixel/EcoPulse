# EcoPulse — Community Energy Intelligence

**Team Innovexa | CodeQuest 2026**

EcoPulse is an interactive neighbourhood smart microgrid
demonstration.

## Core features

- 3D energy network visualisation
- Solar generation and demand simulation
- Battery storage modelling
- Animated energy-flow visualisation
- 24-hour energy simulation
- Peer-to-peer energy marketplace
- Simulated transaction ledger
- Explainable energy-routing engine
- Grid outage simulation
- Heavy cloud-cover simulation
- Evening peak-demand simulation
- AI energy advisor
- Optional Groq API integration
- Progressive Web App support
- Mobile-responsive interface

## Vercel deployment

1. Import the GitHub repository into Vercel.
2. Select Framework Preset: Other.
3. Keep the root directory as the repository root.
4. Leave the build command empty.
5. Set the output directory to `.`.
6. Deploy.

## Optional AI configuration

In Vercel:

Project Settings → Environment Variables

Add:

Name: GROQ_API_KEY
Value: Your newly generated Groq API key

Save and redeploy.

Never place the API key inside index.html or any public GitHub file.

## Prototype limitations

All readings, household nodes, prices, matches, savings,
emissions and resilience values are illustrative simulations.

No real smart meters, solar inverters, utility systems,
payments or physical energy transfers are connected.

The dispatch engine is a transparent rule-based demonstration.
The AI advisor provides decision support, not grid control.