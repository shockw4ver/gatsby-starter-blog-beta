import React, { useEffect } from "react"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styled from "styled-components"
import { DarkModeToggler } from '../dark_mode_toggler'
import { InjectOverreactedio } from '../overreactedio'
import { themeContext, useTheme } from '../../hooks/useTheme'

const DarkModeTogglerPin = styled.div`
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

  useEffect(() => {
    window.history.pushState({}, 'hack')

    const hackGoBack = () => {
      document.querySelector('.header-link-home').click()
    }

    window.addEventListener('popstate', hackGoBack)

    return () => window.removeEventListener('popstate', hackGoBack)
  }, [])

  return (
    <>
      <InjectOverreactedio />
      <themeContext.Provider value={theme}>
        <div className="global-wrapper" data-is-root-path={isRootPath}>
          <DarkModeTogglerPin>
            <DarkModeToggler onChange={switchTheme} />
          </DarkModeTogglerPin>
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
