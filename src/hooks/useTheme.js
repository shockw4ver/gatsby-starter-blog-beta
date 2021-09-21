import {
  useState,
  useEffect,
  createContext
} from 'react'

export const themeContext = createContext('light')

export function useTheme() {
  const [theme, setTheme] = useState()

  function switchTheme() {
    window.__setPreferredTheme(window.__theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    window.__onThemeChange = newTheme => setTheme(newTheme)

    setTheme(window.__theme)

    return () => window.__onThemeChange = () => {}
  }, [])

  return [theme, switchTheme]
}
