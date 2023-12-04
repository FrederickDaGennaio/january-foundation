import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { JANUARY_FOUNDATION } from '../brand'
import { LanguageBar } from './LanguageBar'
import { Page } from './Page'
import { Gap } from './Gap'

export const ValuesViz = ({
  lang,
  values,
}: {
  lang: 'en' | 'el' | 'jp'
  values: {
    url: StaticImageData
    text: {
      en: string
      es: string
      fr: string
      el: string
      jp: string
      ar: string
      he: string
      hi: string
      ru: string
      tr: string
      zh: string
    }
  }[]
}) => {
  return values.map((image, index) => (
    <Page key={index}>
      <div className="font-unna flex w-full flex-col items-center py-8 font-bold uppercase text-black">
        <h1>{JANUARY_FOUNDATION(lang)}</h1>
        <LanguageBar />
      </div>
      <Gap />
      <h2 className="w-[1000%] bg-white/80 py-8 text-center font-serif text-3xl text-black">
        {image.text[lang]}
      </h2>
      <Image
        aria-hidden="true"
        src={image.url}
        alt={image.text[lang]}
        className="h-auto w-full p-8 md:max-w-[50%]"
        priority
      />
      <p
        aria-hidden="true"
        className="w-[1000%] bg-white/80 py-8 text-center font-serif text-3xl text-black"
      >
        {image.text[lang]}
      </p>
      <Gap />
    </Page>
  ))
}
