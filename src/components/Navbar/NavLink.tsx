import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavLinkProps {
    href: string;
    isActive: boolean;
    children: React.ReactNode;
    onClick?: () => void;
}

export function NavLink({ href, isActive, children, onClick }: NavLinkProps) {
    return (
        <Link
            to={href}
            onClick={onClick}
            className="relative px-3 py-2"
        >
      <span className={`relative z-10 ${isActive ? 'text-black' : 'text-gray-600'}`}>
        {children}
      </span>
            {isActive && (
                <motion.div
                    layoutId="activeNavLink"
                    className="absolute inset-0 bg-gray-100 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
            )}
        </Link>
    );
}