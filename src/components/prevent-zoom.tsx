import { useEffect } from 'react'

export default function PreventZoom() {
  useEffect(() => {
    const metaViewport = document.querySelector('meta[name=viewport]')
    if (metaViewport) {
      metaViewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1')
    } else {
      const newMetaViewport = document.createElement('meta')
      newMetaViewport.name = 'viewport'
      newMetaViewport.content = 'width=device-width, initial-scale=1, maximum-scale=1'
      document.head.appendChild(newMetaViewport)
    }

    return () => {
      if (metaViewport) {
        metaViewport.setAttribute('content', 'width=device-width, initial-scale=1')
      }
    }
  }, [])

  return null
}