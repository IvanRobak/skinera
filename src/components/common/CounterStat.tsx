// CounterStat.tsx
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const CounterStat = ({ number, description, symb, duration = 3 }: { number: number, description: string, symb: string, duration?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
      if (isInView) {
    const controls = animate(count, number, { duration });
    return () => controls.stop();
  }
  }, [isInView, number, duration, count]);

  return (
    <motion.div ref={ref} className="flex flex-col items-center" >
        <div className="flex items-center justify-center gap-3">
            <motion.pre className="text-6xl lg:text-7xl font-medium  text-purple-600">
                {rounded}
            </motion.pre>
            <span className="text-6xl lg:text-7xl font-medium text-purple-600">{symb}</span>
        </div>
      <p className="text-gray-700 text-lg lg:text-xl font-normal">{description}</p>
    </motion.div>
  );
};
