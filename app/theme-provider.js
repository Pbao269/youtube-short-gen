'use client'
import React, { useState, useEffect, useContext } from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/configs/firebaseConfig'
import { AuthContext } from './_context/AuthContext'

function ThemeProvider({ children }) {

    const [user, setUser] = useState();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log(user);
            setUser(user);
        })
        return () => unsubscribe();
    }, [])
    
  return (
    <div>
        <AuthContext.Provider value={{user}}>
            <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                {children}
            </NextThemesProvider>
        </AuthContext.Provider>
    </div>
  )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    return context;
}

export default ThemeProvider
