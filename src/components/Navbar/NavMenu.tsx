import { motion } from 'framer-motion';
import { NavLink } from './NavLink';

interface NavMenuProps {
    items: Array<{ name: string; href: string }>;
    currentPath: string;
    onItemClick?: () => void;
}

export function NavMenu({ items, currentPath, onItemClick }: NavMenuProps) {
    return (
        <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
        >
            {items.map((item) => (
                <NavLink
                    key={item.name}
                    href={item.href}
                    isActive={currentPath === item.href}
                    onClick={onItemClick}
                >
                    {item.name}
                </NavLink>
            ))}
        </motion.div>
    );
}