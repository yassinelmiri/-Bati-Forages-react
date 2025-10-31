import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
  rating: number;
  index: number;
}

export default function TestimonialCard({ name, location, text, rating, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={20} fill="#FFD700" stroke="#FFD700" />
        ))}
      </div>

      <p className="text-gray-700 mb-6 italic">"{text}"</p>

      <div className="border-t pt-4">
        <p className="font-bold text-[#003366]">{name}</p>
        <p className="text-gray-600 text-sm">{location}</p>
      </div>
    </motion.div>
  );
}
