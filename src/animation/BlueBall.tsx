import { motion, AnimatePresence } from 'framer-motion';

import MousePosition from '@/interface/MousePosition';

export default function BlueBall({ startPosition }: { startPosition: MousePosition }) {
  return (
    <motion.div
      style={{
        background: "blue",
        borderRadius: "50%",
        width: 20,
        height: 20,
        position: "fixed",
        x: startPosition.x,
        y: startPosition.y,
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1, y: 0, x: "100%" }}
      transition={{ duration: 1 }}
    />
  )
}
