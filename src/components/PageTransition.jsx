"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children, delay = 0 }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathName}>
        {/* The actual page content (children) */}
        <motion.div
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay }}
          me={6}
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
