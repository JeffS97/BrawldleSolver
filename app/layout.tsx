// app/layout.tsx

import './globals.css';  // Import global styles
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}<SpeedInsights /></body>
    </html>
  );
}