import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal } from 'lucide-react';
import { ShopFilters } from '../components/shop/ShopFilters';
import { ProductCard } from '../components/shop/ProductCard';
import { Cart } from '../components/shop/Cart';
import { Product } from '../components/shop/types';

const categories = ['All', 'Sneakers', 'Running', 'Casual', 'Formal'];

const products: Product[] = [
    {
        id: 1,
        name: "Zen Runner Pro",
        price: "$129.99",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        category: "Running"
    },
    {
        id: 2,
        name: "Urban Comfort Elite",
        price: "$159.99",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
        category: "Sneakers"
    },
    {
        id: 3,
        name: "Business Classic",
        price: "$189.99",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
        category: "Formal"
    },
    {
        id: 4,
        name: "Daily Stride",
        price: "$99.99",
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
        category: "Casual"
    },
    {
        id: 5,
        name: "Sport Fusion",
        price: "$149.99",
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
        category: "Running"
    },
    {
        id: 6,
        name: "Metro Walker",
        price: "$119.99",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
        category: "Casual"
    },
    {
        id: 7,
        name: "Executive Edge",
        price: "$209.99",
        image: "https://images.unsplash.com/photo-1613987876445-552974627c98",
        category: "Formal"
    },
    {
        id: 8,
        name: "Street Style Pro",
        price: "$139.99",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
        category: "Sneakers"
    }
];

export function Shop() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>(['All']);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
    const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'name'>('name');

    const handleCategoryChange = (category: string) => {
        if (category === 'All') {
            setSelectedCategories(['All']);
        } else {
            const newCategories = selectedCategories.filter(c => c !== 'All');
            if (newCategories.includes(category)) {
                setSelectedCategories(newCategories.filter(c => c !== category));
            } else {
                setSelectedCategories([...newCategories, category]);
            }
        }
    };

    const filteredProducts = useMemo(() => {
        let filtered = products;

        if (!selectedCategories.includes('All')) {
            filtered = filtered.filter(product =>
                selectedCategories.includes(product.category)
            );
        }

        filtered = filtered.filter(product => {
            const price = parseFloat(product.price.replace('$', ''));
            return price >= priceRange[0] && price <= priceRange[1];
        });

        return [...filtered].sort((a, b) => {
            const priceA = parseFloat(a.price.replace('$', ''));
            const priceB = parseFloat(b.price.replace('$', ''));

            switch (sortBy) {
                case 'price-asc':
                    return priceA - priceB;
                case 'price-desc':
                    return priceB - priceA;
                default:
                    return a.name.localeCompare(b.name);
            }
        });
    }, [selectedCategories, priceRange, sortBy]);

    return (
        <div className="pt-20">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative h-64 bg-black overflow-hidden"
            >
                <img
                    src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80"
                    alt="Shop Banner"
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold mb-4 text-white"
                        >
                            Shop Collection
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-200"
                        >
                            Find your perfect pair from our curated collection
                        </motion.p>
                    </div>
                </div>
            </motion.div>

            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row gap-8">
                    <ShopFilters
                        categories={categories}
                        selectedCategories={selectedCategories}
                        priceRange={priceRange}
                        onCategoryChange={handleCategoryChange}
                        onPriceRangeChange={setPriceRange}
                    />

                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-8">
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-gray-600"
                            >
                                {filteredProducts.length} products
                            </motion.span>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                                className="border-gray-300 rounded-lg focus:ring-black focus:border-black"
                            >
                                <option value="name">Sort by Name</option>
                                <option value="price-asc">Price: Low to High</option>
                                <option value="price-desc">Price: High to Low</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProducts.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <ProductCard product={product} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Cart />
        </div>
    );
}