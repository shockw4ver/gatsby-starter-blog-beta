import {
  useState,
  useEffect
} from 'react'
import { mediaQueryDivider } from '../utils/device'
import throttle from 'lodash/throttle'

export const useMediaQuery = () => {
  const [mediaType, setMediaType] = useState(mediaQueryDivider.desktop)

  useEffect(() => {
    const recompute = throttle(() => {
      const clientWidth = document.body.clientWidth

      if (clientWidth >= mediaQueryDivider.desktop) {
        setMediaType(mediaQueryDivider.desktop)
      } else if (clientWidth >= mediaQueryDivider.laptopL) {
        setMediaType(mediaQueryDivider.laptopL)
      } else if (clientWidth >= mediaQueryDivider.laptop) {
        setMediaType(mediaQueryDivider.laptop)
      } else if (clientWidth >= mediaQueryDivider.mobileL) {
        setMediaType(mediaQueryDivider.mobileL)
      } else if (clientWidth >= mediaQueryDivider.mobileM) {
        setMediaType(mediaQueryDivider.mobileM)
      } else {
        setMediaType(mediaQueryDivider.mobileS)
      }
    }, 500)

    window.addEventListener('resize', recompute)
    recompute()

    return () => window.removeEventListener('resize', recompute)
  }, [])

  return mediaType
}
