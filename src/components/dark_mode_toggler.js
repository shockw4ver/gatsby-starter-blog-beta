import React from 'react'
import styled from 'styled-components'
import ReactToggler from 'react-toggle'
import 'react-toggle/style.css'

import { themeContext } from '../hooks/useTheme'

const RewriteReactTogglerStyle = styled.div`
  .rewrite-react-toggle-style {

    &:hover .react-toggle-track,
    .react-toggle-track {
      background-color: #dfdfdf;
    }

    &.react-toggle--checked {
      &:hover .react-toggle-track,
      .react-toggle-track {
        background-color: #000;
      }
    }

    .react-toggle-thumb {
      border-color: transparent;
    }
    
    &.react-toggle--focus .react-toggle-thumb {
      box-shadow: 0px 0px 2px 3px rgb(255, 167, 196);
    }

    &.react-toggle:active {
      .react-toggle-thumb {
        box-shadow: 0px 0px 5px 5px rgb(255, 167, 196);
      }
    }
  }
`

const IconWrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
  line-height: 10px;
`

export const DarkModeToggler = ({ onChange }) => {
  return (
    <themeContext.Consumer>
      {theme => (
        <RewriteReactTogglerStyle>
          <ReactToggler
            defaultChecked={theme === 'dark'}
            className="rewrite-react-toggle-style"
            onChange={onChange}
            icons={{
              checked: <IconWrapper>夜</IconWrapper>,
              unchecked: <IconWrapper style={{color: '#fff'}}>日</IconWrapper>
            }}
          />
        </RewriteReactTogglerStyle>
      )}
    </themeContext.Consumer>
  )
}
