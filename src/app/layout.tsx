import { type Metadata } from 'next'
import clsx from 'clsx'

import '@/styles/global.css'
import '@/styles/tailwind.css'
import { DESCRIPTION, TITLE } from '@/brand'
import React from 'react'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx('h-full scroll-smooth bg-white antialiased')}
    >
      <head></head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
