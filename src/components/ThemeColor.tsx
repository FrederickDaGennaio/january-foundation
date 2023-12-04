'use client'

import { useEffect } from 'react'

export const ThemeColor = ({
  color,
  children,
}: {
  color: string
  children: React.ReactNode
}) => {
  useEffect(() => {
    if (document && document.head) {
      let metaThemeColor = document.querySelector('meta[name=theme-color]')
      if (!metaThemeColor) {
        metaThemeColor = document.createElement('meta')
        metaThemeColor.setAttribute('name', 'theme-color')
        metaThemeColor.setAttribute('content', color)
        document.head.appendChild(metaThemeColor)
      }
      metaThemeColor?.setAttribute('content', color)
      document.body.style.backgroundColor = color
    }
  }, [color])
  return <>{children}</>
}
