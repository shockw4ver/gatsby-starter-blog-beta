/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { themeContext } from '../hooks/useTheme'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const theme = useContext(themeContext)
  
  return (
    <div className="bio">
      {theme === 'light' ? (
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/profile-pic.webp"
          width={50}
          height={50}
          quality={95}
          alt="Profile picture"
        />
      ) : (
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/profile-pic-dark.webp"
          width={50}
          height={50}
          quality={95}
          alt="Profile picture"
        />
      )}
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong><br/> {author?.summary || null}
          {` `}
          <br />
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            · Twitter
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
