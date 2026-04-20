import { Step, STEPS } from '../const/steps';

type StartGameParams = {
  text: HTMLParagraphElement,
  button: HTMLButtonElement,
  asset: HTMLAnchorElement
}

export const startGame = (
  {
    text,
    button,
    asset
  }: StartGameParams
) => {
  let counter = 0;
  let currentAsset = asset;

  const renderAsset = (step: Step) => {
    const newAsset = currentAsset.cloneNode(false) as HTMLAnchorElement
    currentAsset.replaceWith(newAsset)
    currentAsset = newAsset

    currentAsset.dataset.fslightbox = ''

    if (!step.asset) return

    currentAsset.href = step.asset.content

    const el = document.createElement(step.asset.type)

    el.src = step.asset.content

    currentAsset.appendChild(el)

    // @ts-ignore
    refreshFsLightbox()
  }

  button.addEventListener('click', () => {
    counter++

    const step = STEPS[counter]
    const stepsLength = Object.keys(STEPS).length;

    if (!step) return

    text.textContent = step.text;
    renderAsset(step);

    if (counter === stepsLength) {
      button.disabled = true;
      button.style.display = 'none';
    }
  })
}
