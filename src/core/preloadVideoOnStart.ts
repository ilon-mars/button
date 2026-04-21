import { STEPS } from '../const/steps'

function warmUpVideo(src: string) {
  const video = document.createElement('video')

  video.src = src
  video.preload = 'auto'
  video.muted = true
  video.playsInline = true

  video.style.position = 'absolute'
  video.style.width = '1px'
  video.style.height = '1px'
  video.style.opacity = '0'
  video.style.pointerEvents = 'none'

  document.body.appendChild(video)

  video.load()
}

export function preloadVideosOnStart() {
  for (const step of Object.values(STEPS)) {
    if (step.asset?.type === 'video') {
      warmUpVideo(step.asset.content)
    }
  }
}
