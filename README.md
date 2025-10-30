# Ceminted is creating a system to make connections online more meaningful.

## Trade & Seek
Our goal is to enable private executions with guided liquidity that scales sustainability, connecting institutions and everyday people to complex markets.

## Overview
Many people are hesitant to jump into crypto because of the risks and lack of privacy. Data monopolies, automated market makers, and order books expose every trade.

## Features 
- Private transactions on Solana
- Anonymous spot and perpetuals trading
- Simpler UX with Privy
- Arcium privacy layer
- Trading engine integration with autonomous order book
- Time locked buys
- Guided liquidity mode with risk management
- Trade summaries and coaching

## Flow
+-------------------+       +---------------------+       +-------------------+
|     User          |       |     Frontend   |       |   Privy Wallet    |
| (Browser)  |       |          (React dApp)    |       |  (Login & Sign)   |
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
                            |  Backend       |<----------------+ Sign Tx if Needed
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
                            | Backend Triggers   |
                            | (Verify Proof)     |
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
                                              | User UI Update   |
                                              | (Real-Time PNL)  |
                                              +-------------------+


## 📁 Project Structure

```
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
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** 16.0 or higher
- **npm** or **yarn**
- **Supabase** account (free tier works great)

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

The `.env.local` file has been created with your Supabase credentials. If you need to change them:

```bash
# Edit .env.local
nano .env.local
```

Required variables:

```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

### 3. Set Up Supabase Database

The database table should already exist from your previous setup. If not, run this SQL in your Supabase dashboard:

```sql
-- Create waitlist emails table
CREATE TABLE IF NOT EXISTS waitlist_emails (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    status VARCHAR(50) DEFAULT 'pending',
    source VARCHAR(100) DEFAULT 'website',
    metadata JSONB DEFAULT '{}'::jsonb
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_waitlist_emails_email ON waitlist_emails(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_emails_created_at ON waitlist_emails(created_at);
CREATE INDEX IF NOT EXISTS idx_waitlist_emails_status ON waitlist_emails(status);
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser! 🎉

## 📊 API Endpoints

### POST `/api/waitlist`

Add email to waitlist

**Request:**

```json
{
  "email": "user@example.com"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Successfully added to waitlist!",
  "data": {
    "id": "uuid",
    "email": "user@example.com",
    "createdAt": "2024-01-01T00:00:00Z"
  }
}
```

**Error Responses:**

- `400` - Invalid email format
- `409` - Email already on waitlist
- `429` - Too many requests (rate limited)
- `500` - Server error

## 🛠️ Built With

| Technology | Version | Purpose         |
| ---------- | ------- | --------------- |
| Next.js    | 15.x    | React framework |
| React      | 18.x    | UI library      |
| TypeScript | 5.x     | Type safety     |
| Supabase   | 2.x     | Database & auth |
| Node.js    | 16+     | Runtime         |

## 🎨 Design Features

- **Pixel art aesthetic** with Press Start 2P font
- **Gradient backgrounds** (blue/pink for trading, yellow for fashion)
- **Grid pattern** background effect
- **Blur effect** on "coming soon" cards
- **Responsive images** with Next.js Image optimization
- **Smooth animations** and loading states

## 🔐 Security Features

- ✅ **Rate limiting** (5 requests/hour per IP)
- ✅ **Email validation** (regex-based)
- ✅ **Input sanitization** to prevent XSS
- ✅ **Environment variables** properly secured
- ✅ **CORS** configured correctly
- ✅ **Duplicate prevention** at database level

## 📦 Scripts

```bash
# Development
npm run dev          # Start dev server (hot reload)

# Production
npm run build        # Build for production
npm start            # Start production server

# Type Checking
npm run type-check   # Check TypeScript types

# Linting
npm run lint         # Run ESLint
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
4. Deploy! 🎉

### Other Platforms

- **Netlify**: Works great with automatic builds
- **Railway**: Easy deployment with GitHub integration
- **Digital Ocean**: App Platform supports Next.js

### Environment Variables for Production

Update these in your deployment platform:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_production_anon_key
NEXT_PUBLIC_APP_URL=https://your-domain.com
NODE_ENV=production
```

## 📈 What's New vs Old Version

### Improvements ✨

| Feature                   | Old (Vanilla JS)        | New (Next.js)       |
| ------------------------- | ----------------------- | ------------------- |
| **Framework**             | None                    | Next.js 15          |
| **Type Safety**           | ❌                      | ✅ TypeScript       |
| **Backend**               | Separate Express server | Built-in API routes |
| **Rate Limiting**         | ❌                      | ✅ In-memory        |
| **Environment Variables** | Manual loading          | Built-in support    |
| **Image Optimization**    | Manual                  | Next.js Image       |
| **SEO**                   | Basic meta tags         | Metadata API        |
| **Hot Reload**            | Python server           | Next.js dev server  |
| **Build Process**         | ❌                      | ✅ Optimized        |
| **Deployment**            | Complex                 | One-click           |

### Breaking Changes

- **Backend URL**: No longer needed! API routes are at `/api/*`
- **Config.js**: Removed - environment variables handled by Next.js
- **Express server**: Replaced with Next.js API routes

## 🧪 Testing

Test the API locally:

```bash
# Health check (doesn't exist in new version - use endpoints directly)

# Test email submission
curl -X POST http://localhost:3000/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

## 🐛 Troubleshooting

### Common Issues

**1. "Missing Supabase environment variables"**

- Make sure `.env.local` exists and has correct values
- Restart dev server after changing env vars

**2. TypeScript errors**

- Run `npm run type-check` to see detailed errors
- Ensure all dependencies are installed

**3. Images not loading**

- Check that images exist in `public/images/`
- Verify file names match exactly (case-sensitive)

**4. API returns 500 error**

- Check Supabase credentials
- Verify database table exists
- Check server logs for detailed error

## 📝 Next Steps

### Potential Enhancements

- [ ] Add email verification flow
- [ ] Integrate with email marketing (Mailchimp, ConvertKit)
- [ ] Add Google Analytics
- [ ] Create admin dashboard
- [ ] Add A/B testing
- [ ] Implement Redis for rate limiting
- [ ] Add unit tests (Jest, React Testing Library)
- [ ] Add E2E tests (Playwright)
- [ ] Set up CI/CD pipeline
- [ ] Add monitoring (Sentry, LogRocket)

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Supabase Documentation](https://supabase.com/docs)
- [React Documentation](https://react.dev)

## 🤝 Contributing

As this is a junior developer learning project, feel free to experiment and make improvements!

## 📄 License

MIT License - feel free to use this for your own projects!

---

**Built with ❤️ by the Ceminted Team**

For questions or issues, check the [documentation](https://nextjs.org/docs) or reach out to the team.
