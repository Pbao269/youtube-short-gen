'use client'
import { ConvexProvider, ConvexReactClient } from "convex/react";
import React from 'react'
import ThemeProvider from "./theme-provider";

function ConvexClientProvider({children}) {
    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
  return (
    <div>
      <ConvexProvider client={convex}>
        <ThemeProvider>
            {children}
        </ThemeProvider>
      </ConvexProvider>
    </div>
  )
}

export default ConvexClientProvider

