import { useEffect } from 'react'

export function useGoBackWithAni(selector) {
  if (!selector) {
    throw new Error('Use this hook on a specific `AniLink` component.')
  }

  useEffect(() => {
    window.history.pushState({}, 'hack')

    const hackGoBack = () => {
      document.querySelector(selector).click()
    }

    window.addEventListener('popstate', hackGoBack)

    return () => window.removeEventListener('popstate', hackGoBack)
  }, [selector])
}
