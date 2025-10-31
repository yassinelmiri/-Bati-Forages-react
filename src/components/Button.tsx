import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: LucideIcon;
  href?: string;
  className?: string;
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  icon: Icon,
  href,
  className = ''
}: ButtonProps) {
  const baseClasses = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 justify-center";

  const variantClasses = {
    primary: "bg-[#003366] text-white hover:bg-[#004488] shadow-lg hover:shadow-xl",
    secondary: "bg-white text-[#003366] hover:bg-gray-50 shadow-lg hover:shadow-xl",
    outline: "border-2 border-white text-white hover:bg-white hover:text-[#003366]"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {Icon && <Icon size={20} />}
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {Icon && <Icon size={20} />}
      {children}
    </motion.button>
  );
}
