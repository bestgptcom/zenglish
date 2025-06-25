import React from 'react'
import { HeroUIWrapper } from '@/providers/HeroUIWrapper';

export default function MainProvider({ children }: { children: React.ReactNode }) {
    return (
        <HeroUIWrapper>
            {children}
        </HeroUIWrapper>
    );
}
