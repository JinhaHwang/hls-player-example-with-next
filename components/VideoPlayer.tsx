import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

export default function VideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    try {
      const video = videoRef.current
      if (!video) return

      video.controls = true
      video.autoplay = true
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // This will run in safari, where HLS is supported natively
        video.src = src
      } else if (Hls.isSupported()) {
        // This will run in all other modern browsers
        const hls = new Hls()
        hls.loadSource(src)
        hls.attachMedia(video)
      } else {
        console.error(
          'This is an old browser that does not support MSE https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API',
        )
      }
    } catch (e) {
      console.error(e)
    }
  }, [src, videoRef])

  return (
    <>
      <video ref={videoRef} className="max-w-full" muted />
    </>
  )
}
