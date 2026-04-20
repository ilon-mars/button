import { startGame } from './startGame'

export const setup = () => {
  const app = document.querySelector('#app')
  const text = app?.querySelector('.text') as HTMLParagraphElement
  const button = app?.querySelector('.button') as HTMLButtonElement
  const asset = app?.querySelector('.asset') as HTMLElement

  if (!text || !button || !asset) {
    return
  }

  startGame({ text, button, asset })
}
