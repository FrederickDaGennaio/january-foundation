import clsx from 'clsx'
import React from 'react'

export const PagesContainer = ({ children, className, dir }: { children: React.ReactNode, dir?: string, className?: string }) => {
  return (
    <div className={clsx(
      "h-[100svh]",
      "snap-y snap-mandatory overflow-x-hidden overflow-y-scroll bg-[#f0d3a2]",
      className,
    )} dir={dir}>
      {children}
    </div>
  )
}
