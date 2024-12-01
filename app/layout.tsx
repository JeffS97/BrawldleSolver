// app/layout.tsx

import './globals.css';  // Import global styles
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Brawldle Solver</title>
      </head>
      <body>{children}<SpeedInsights /></body>
    </html>
  );
}