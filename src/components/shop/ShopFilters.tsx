import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';

interface ShopFiltersProps {
    categories: string[];
    selectedCategories: string[];
    priceRange: [number, number];
    onCategoryChange: (category: string) => void;
    onPriceRangeChange: (range: [number, number]) => void;
}

export function ShopFilters({
                                categories,
                                selectedCategories,
                                priceRange,
                                onCategoryChange,
                                onPriceRangeChange,
                            }: ShopFiltersProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full md:w-64 space-y-6"
        >
            <div className="flex items-center gap-2">
                <Filter className="w-5 h-5" />
                <span className="font-semibold">Filters</span>
            </div>

            <div className="space-y-4">
                <h3 className="font-semibold">Categories</h3>
                {categories.map((category) => (
                    <label key={category} className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => onCategoryChange(category)}
                            className="rounded border-gray-300 text-black focus:ring-black"
                        />
                        <span>{category}</span>
                    </label>
                ))}
            </div>

            <div className="space-y-4">
                <h3 className="font-semibold">Price Range</h3>
                <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                </div>
            </div>
        </motion.div>
    );
}