import type { Step } from '../const/steps'
import { STEPS } from '../const/steps'

const PRELOAD_AHEAD = 3

function preloadAsset(step: Step) {
  if (!step.asset) {
    return
  }

  if (step.asset.type === 'img') {
    const img = new Image()
    img.src = step.asset.content
  }

  if (step.asset.type === 'video') {
    const video = document.createElement('video')
    video.src = step.asset.content
    video.preload = 'metadata'

    if (step.asset.thumb) {
      const img = new Image()
      img.src = step.asset.thumb
    }
  }
}

export function preloadNextSteps(current: number) {
  for (let i = 1; i <= PRELOAD_AHEAD; i++) {
    const step = STEPS[current + i]

    if (step) {
      preloadAsset(step)
    }
  }
}
