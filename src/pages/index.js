import * as React from "react"
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styled, { createGlobalStyle } from 'styled-components'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { mediaQueryDivider } from '../utils/device'

import Image_HomeBackground from '../images/home-background.webp'
import Seo from "../components/seo"

const HomeStyle = createGlobalStyle`
  html,
  body {
    width: 100%;
    height: 100%;
  }
`

const Layout = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left bottom;
`

const Main = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 0 20%;

  @media only screen and (max-width: ${mediaQueryDivider.tablet}px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 10%;
  }

  @media only screen and (max-width: ${mediaQueryDivider.mobileL}px) {
    flex-direction: column;
    justify-content: center;
  }
`

const Title = styled.h1`
  color: #dfdfdf;
  opacity: .7;
  font-size: 70px;
  text-align: right;
  margin-bottom: 20px;
  cursor: none;
  user-select: none;
  transition: all 300ms;

  @media only screen and (max-width: ${mediaQueryDivider.mobileL}px) {
    text-align: center;
  }
`

const Nav = styled.div`
  display: flex;
  width: 80%;
  justify-content: flex-end;

  @media only screen and (max-width: ${mediaQueryDivider.tablet}px) {
    flex-direction: column;
    justify-content: center;
  }

  span {
    position: relative;
    display: inline-block;
    height: 60px;
    margin-left: 30px;
    padding: 15px 5px;
    color: #fff;
    opacity: .7;
    font-size: 30px;
    font-family: var(--font-heading);
    line-height: 30px;
    box-sizing: border-box;
    cursor: pointer;

    @media only screen and (max-width: ${mediaQueryDivider.mobileL}px) {
      margin: 0;
      text-align: center;
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      display: block;
      height: 2px;
      width: 100%;
      background-color: #fff;
      opacity: .7;
      transform: scale(0, 1);
      transform-origin: center left;
      transition: all 300ms ease-out;
    }

    :hover::after {
      transform: scale(1, 1);
    }
  }
`

const directions = ['up', 'left', 'down', 'right']

const Home = ({ data }) => {
  const navs = data.markdownRemark?.frontmatter?.navs || []

  const clientWidth = useMediaQuery()
  const maybeMobile = clientWidth < mediaQueryDivider.tablet

  return (
    <>
      <Seo title="Home" />
      <HomeStyle />
      <Layout>
        <Background src={Image_HomeBackground} />
        <Main>
          <Title>Young{maybeMobile ? '\n' : ''}chaos</Title>
          <Nav>
            {navs.map((item, index) => (
              <AniLink
                key={item.name}
                swipe
                direction={directions[index % 4]}
                to={item.link}
              >
                <span>{ item.name }</span>
              </AniLink>
            ))}
          </Nav>
        </Main>
      </Layout>
    </>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    markdownRemark(
      frontmatter: {
        title: { eq: "__Nav__" }
      }
    ) {
      frontmatter {
        navs {
          name
          link
        }
      }
    }
  }
`
