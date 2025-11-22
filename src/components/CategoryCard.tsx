import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface CategoryItem {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    link: string;
    textColor: string;
    colSpan: string;
    height: string;
}

interface CategoryCardProps {
    item: CategoryItem;
    index: number;
}

const CategoryCard = ({ item, index }: CategoryCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`${item.colSpan} ${item.height} group relative rounded-[2rem] overflow-hidden shadow-sm cursor-pointer`}
        >
            <Link to={item.link} className="block h-full w-full">
                {/* Background Image with Zoom Effect */}
                <div className="absolute inset-0">
                    <motion.img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                </div>

                {/* Content Overlay */}
                <div className={`absolute top-0 left-0 w-full p-10 flex flex-col items-center text-center z-10 ${item.textColor}`}>
                    <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">{item.title}</h2>
                    <p className="text-xl font-light opacity-90 mb-6">{item.subtitle}</p>

                    <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-1 font-medium text-blue-500 bg-white/90 px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
                        Comprar <ChevronRight size={16} />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default CategoryCard;
