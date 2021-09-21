import React from "react"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styled from "styled-components"
import { useGoBackWithAni } from '../../hooks/useGoBackWithAni'
import { DarkModeToggler } from '../dark_mode_toggler'
import { InjectOverreactedio } from '../overreactedio'
import { themeContext, useTheme } from '../../hooks/useTheme'
import { Gear } from '../gear'

const DarkModeTogglerPin = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
`

const GearPin = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const [theme, switchTheme] = useTheme()
  
  const header = (
    <AniLink
      swipe
      to="/"
      top="entry"
      direction="down"
      className="header-link-home"
    >
      {title}
    </AniLink>
  )

  useGoBackWithAni('.header-link-home')

  return (
    <>
      <InjectOverreactedio />
      <themeContext.Provider value={theme}>
        <div className="global-wrapper" data-is-root-path={isRootPath}>
          {/* <DarkModeTogglerPin>
            <DarkModeToggler onChange={switchTheme} />
          </DarkModeTogglerPin> */}
          <GearPin>
            <Gear />
          </GearPin>
          <header className="global-header">
            {header}
          </header>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
        </div>
      </themeContext.Provider>
    </>
  )
}

export default Layout
