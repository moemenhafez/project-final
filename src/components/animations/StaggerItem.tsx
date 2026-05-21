import type {
  ReactNode,
} from 'react'

import {
  motion,
  type Variants,
} from 'framer-motion'

interface StaggerItemProps {
  children: ReactNode

  className?: string
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.45,
    },
  },
}

function StaggerItem({
  children,
  className,
}: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={itemVariants}
    >
      {children}
    </motion.div>
  )
}

export default StaggerItem