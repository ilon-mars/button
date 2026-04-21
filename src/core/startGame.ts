import type { Step } from '../const/steps'
import { STEPS } from '../const/steps'
import { preloadNextSteps } from './preloadNextSteps'
import { preloadVideosOnStart } from './preloadVideoOnStart'

interface StartGameParams {
  text: HTMLParagraphElement
  button: HTMLButtonElement
  asset: HTMLAnchorElement
}

export function startGame({
  text,
  button,
  asset,
}: StartGameParams) {
  let counter = 0
  let currentAsset = asset

  const renderAsset = (step: Step) => {
    const newAsset = currentAsset.cloneNode(false) as HTMLAnchorElement
    currentAsset.replaceWith(newAsset)
    currentAsset = newAsset

    currentAsset.dataset.fslightbox = ''

    if (!step.asset) {
      return
    }

    currentAsset.href = step.asset.content

    const el = document.createElement(step.asset.type)

    el.src = step.asset.content

    currentAsset.appendChild(el)

    // @ts-ignore
    refreshFsLightbox()
  }

  preloadVideosOnStart()
  preloadNextSteps(counter)

  button.addEventListener('click', () => {
    counter++

    const step = STEPS[counter]
    const stepsLength = Object.keys(STEPS).length

    if (!step) {
      return
    }

    text.textContent = step.text
    renderAsset(step)

    preloadNextSteps(counter)

    if (counter === stepsLength) {
      button.disabled = true
      button.style.display = 'none'
    }
  })
}
