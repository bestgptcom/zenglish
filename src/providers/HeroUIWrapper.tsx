'use client'

import { HeroUIProvider } from '@heroui/react'

export function HeroUIWrapper({ children }: { children: React.ReactNode }) {
    return (
        <HeroUIProvider>
            {children}
        </HeroUIProvider>
    )
}