import type {
  ReactNode,
} from 'react'

import {
  motion,
  type Variants,
} from 'framer-motion'

interface StaggerContainerProps {
  children: ReactNode

  className?: string
}

const containerVariants: Variants =
  {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

function StaggerContainer({
  children,
  className,
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      variants={
        containerVariants
      }
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  )
}

export default StaggerContainer