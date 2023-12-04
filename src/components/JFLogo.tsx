import Image from 'next/image'
import React from 'react'
import jf from '../images/jf.png'

export const JFLogo = () => {
  return (
    <Image
      aria-hidden="true"
      src={jf}
      alt="January Foundation"
      className="w-32 drop-shadow-2xl"
    />
  )
}
