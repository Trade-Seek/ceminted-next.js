## Ceminted is creating a system to make connections online more meaningful.

## Trade & Seek
Our goal is to enable private executions with guided liquidity that scales sustainability, connecting institutions and everyday people to complex markets.

## Features 
- Private transactions on Solana
- Anonymous spot and perpetuals trading
- Simpler UX with Privy
- Arcium privacy layer
- Trading engine integration with autonomous order book
- Time locked buys
- Guided liquidity mode with risk management
- Trade summaries and coaching

## Architecture
## ⚙️ Trade & Seek System Architecture


+-------------------+       +---------------------+       +-------------------+
|       User        |       |     Frontend        |       |   Privy Wallet    |
|     (Browser)     |       |     (React dApp)    |       |  (Login & Sign)   |
+-------------------+       +---------------------+       +-------------------+
          |                            |                            |
          | Connect & Trade Input      |                            |
          v                            | Encrypt Order (Client-Side)|
                                       v                            |
                            +---------------------+                 |
                            | Encrypted Payload   |                 |
                            | (AES + Arcium SDK)  |                 |
                            +---------------------+                 |
                                       |                            |
                                       | Send via HTTPS/Websocket   |
                                       v                            |
                            +---------------------+                 |
                            |  Backend            |<----------------+ Sign Tx if Needed
                            | (Rust Coordinator)  |
                            +---------------------+
                                       |
                                       | Validate (Margin, Risk, Oracle Pull)
                                       v
                            +---------------------+
                            | Arcium MPC Layer    |
                            | (Private Matching)  |
                            +---------------------+
                                       |
                                       | Return ZK-Proof / Match
                                       v
                            +---------------------+
                            | Backend Triggers    |
                            | (Verify Proof)      |
                            +---------------------+
          /                    |                    \
         /                     |                     \
        v                      v                      v
+-------------------+ +---------------------+ +-------------------+
| Drift Protocol    | | Titan Router       | | Solana Settlement |
| (Perps: Positions,| | (Spot: Swaps,      | | (Anchor Contracts)|
|  Funding, Liqs)   | |  Collateral Conv.) | | (Vault Updates,   |
+-------------------+ +---------------------+ |  Events Emission) |
                                              +-------------------+
                                                       |
                                                       | Encrypted Payout / Sync
                                                       v
                                              +-------------------+
                                              | User UI Update    |
                                              | (Real-Time PNL)   |
                                              +-------------------+



## Project Structure

ceminted-next.js/
├── app/
│   ├── api/
│   │   └── waitlist/
│   │       └── route.ts          # POST endpoint for email submissions
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/
│   └── WaitlistForm.tsx          # Email form component
├── lib/
│   ├── supabase.ts               # Supabase client & helpers
│   ├── types.ts                  # TypeScript type definitions
│   └── validations.ts            # Input validation utilities
├── public/
│   └── images/                   # SVG/GIF assets
├── .env.local                    # Environment variables (gitignored)
├── .env.example                  # Example env file
├── next.config.js                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies


## Built With

## 🧩 Built With

- **React + Vite + TypeScript** — Frontend app with a smooth, minimal UI  
- **Privy SDK** — Pseudonymous login + wallet abstraction (no seed phrases)  
- **Arcium SDK (MPC + AES)** — Private trade encryption and darkpool matching  
- **Rust (Anchor + Solana SDK)** — Smart contracts and PDA coordination  
- **Drift Protocol SDK** — Perpetuals engine and liquidity management  
- **TailwindCSS + Framer Motion** — Modern animated UI and styling  
- **Vercel + Cloudflare** — Frontend hosting and edge routing  
- **PostgreSQL + Redis** — Off-chain caching and proof validation layer  





