import React from 'react'
import { localeName, locales } from '../brand'
import Link from 'next/link'


export function LanguageBar() {
  const getCurrentUrlFor = (locale: string) => {
    if (!global.window) return '/' + locale
    const path = window.location.pathname.split('/')
    path[1] = locale
    return path.join('/')
  }
  
  return (
    <ul className="mt-2 flex items-center gap-x-2 text-xs">
      <li className="grayscale" aria-label="Available Languages">
        🌐
      </li>
      {locales.map((locale) => (
        <li className="list-none" key={locale}>
          <Link
            href={getCurrentUrlFor(locale)}
            prefetch={false}
            aria-label={localeName(locale)}
          >
            {locale}
          </Link>
        </li>
      ))}
      <li className="grayscale" aria-hidden="true">
        🌐
      </li>
    </ul>
  )
}
