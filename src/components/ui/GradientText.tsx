import { ReactNode } from 'react';

interface GradientTextProps {
    children: ReactNode;
    className?: string;
}

export function GradientText({ children, className = '' }: GradientTextProps) {
    return (
        <span className={`bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
    );
}