import type { Step } from '../const/steps'
import { STEPS } from '../const/steps'
import { preloadNextSteps } from './preloadNextSteps'

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

  const renderAsset = (step: Step) => {
    asset.innerHTML = ''

    if (!step.asset) {
      return
    }

    asset.href = step.asset.content
    asset.dataset.fslightbox = ''

    const image = document.createElement('img')
    image.src = step.asset.type === 'img' ? step.asset.content : step.asset.thumb

    asset.appendChild(image)

    // @ts-ignore
    refreshFsLightbox()
  }

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
