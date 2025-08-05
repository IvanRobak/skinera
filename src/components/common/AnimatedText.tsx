import { JSX } from 'react/jsx-runtime';
import { motion } from 'framer-motion';

interface Props {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
}

const defaultAnimations = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const AnimatedText = ({ text, className }: Props) => {
  return (
    <div className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
        aria-hidden
      >
        {text.split('').map((char, index) => (
          <motion.span variants={defaultAnimations} key={index}>
            {char}
          </motion.span>
        ))}
      </motion.span>
    </div>
  );
};

export default AnimatedText;
