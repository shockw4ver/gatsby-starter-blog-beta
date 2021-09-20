import * as React from "react"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styled from "styled-components"
import { DarkModeToggler } from '../dark_mode_toggler'
import { InjectOverreactedio } from '../overreactedio'

const DarkModeTogglerPin = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  
  const header = (
    <AniLink swipe direction="down" className="header-link-home" to="/">
      {title}
    </AniLink>
  )

  return (
    <>
      <InjectOverreactedio />
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <DarkModeTogglerPin>
          <DarkModeToggler />
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
    </>
  )
}

export default Layout
