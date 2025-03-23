'use client'
import React, { useState, useEffect, useContext } from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/configs/firebaseConfig'
import { AuthContext } from './_context/AuthContext'
import { useMutation } from 'convex/react'
import { api } from '../convex/_generated/api'

function ThemeProvider({ children }) {

    const [user, setUser] = useState();
    const CreateUser = useMutation(api.users.CreateNewUser);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            console.log(user);
            setUser(user);

            const result = await CreateUser({
                name: user?.displayName,
                email: user?.email,
                pictureURL: user?.photoURL
            });
            console.log(result);
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
