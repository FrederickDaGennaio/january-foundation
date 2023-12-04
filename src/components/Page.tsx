import React from 'react'
import clsx from 'clsx'

export const Page = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={clsx(
        'mx-auto flex max-h-[100svh] min-h-[100svh] max-w-[1000px] snap-start flex-col items-center justify-center',
        className,
      )}
    >
      {children}
    </div>
  )
}
