'use client'
import React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

function ThemeProvider({ children }) {
  return (
    <div>
        <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
        </NextThemesProvider>
    </div>
  )
}

export default ThemeProvider
