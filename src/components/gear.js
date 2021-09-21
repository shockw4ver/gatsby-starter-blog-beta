import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const GearWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border-radius: 16px;
`

export function Gear() {
  return (
    <GearWrapper>
      <StaticImage
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/favicon.png"
        width={30}
        height={30}
        quality={95}
        alt="Profile picture"
      />
    </GearWrapper>
  )
}
