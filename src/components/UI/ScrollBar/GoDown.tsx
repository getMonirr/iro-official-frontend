"use client";

import { Button } from "antd";
import { motion } from "framer-motion";
import { RxDoubleArrowDown } from "react-icons/rx";

const GoDown = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: 30 }}
      transition={{
        delay: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1,
      }}
      className="absolute bottom-20 left-[50%]"
    >
      <Button
        size="large"
        iconPosition="end"
        icon={<RxDoubleArrowDown />}
        href="#down-page"
        title="Scroll Down"
      />
    </motion.div>
  );
};

export default GoDown;
