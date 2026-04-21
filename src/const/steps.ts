import image1 from '../assets/image-1.jpeg'
import image2 from '../assets/image-2.jpeg'
import image3 from '../assets/image-3.jpeg'
import image4 from '../assets/image-4.jpeg'
import image5 from '../assets/image-5.jpeg'
import image6 from '../assets/image-6.jpeg'
import image7 from '../assets/image-7.jpeg'
import image8 from '../assets/image-8.jpeg'
import image9 from '../assets/image-9.jpeg'
import image10 from '../assets/image-10.jpeg'
import image11 from '../assets/image-11.jpeg'
import image12 from '../assets/image-12.webp'
import image13 from '../assets/image-13.jpg'
import video1 from '../assets/output-1.mp4'
import video2 from '../assets/output-2.mp4'
import video3 from '../assets/output-3.mp4'

export interface Step {
  text: string
  asset: {
    type: 'img' | 'video'
    content: string
  } | null
}

export const STEPS: Record<number, Step> = {
  1: {
    text: 'Штош, мне было весело',
    asset: null,
  },

  2: {
    text: 'Хорошо, вот тебе мемас',
    asset: {
      type: 'img',
      content: image1,
    },
  },

  3: {
    text: 'Если его было недостаточно, нажми еще раз',
    asset: null,
  },

  4: {
    text: 'Вот еще один',
    asset: {
      type: 'img',
      content: image2,
    },
  },

  5: {
    text: 'Так и быть, вот еще, но это все',
    asset: {
      type: 'img',
      content: image3,
    },
  },

  6: {
    text: 'Ты не понимаешь, что такое «все», верно?',
    asset: {
      type: 'img',
      content: image4,
    },
  },

  7: {
    text: '',
    asset: null,
  },

  8: {
    text: 'Еще тут?',
    asset: null,
  },

  9: {
    text: 'За настойчивость',
    asset: {
      type: 'img',
      content: image5,
    },
  },

  10: {
    text: 'Звучало как тост',
    asset: null,
  },

  11: {
    text: 'Короткий тост: ЗА… хотелось!',
    asset: null,
  },

  12: {
    text: 'Это тебе за упорство',
    asset: {
      type: 'img',
      content: image6,
    },
  },

  13: {
    text: 'Ну если хочешь, держи видео',
    asset: {
      type: 'video',
      content: video1,
    },
  },

  14: {
    text: 'Или картинку тебе?',
    asset: {
      type: 'img',
      content: image7,
    },
  },

  15: {
    text: '...',
    asset: null,
  },

  16: {
    text: '.....',
    asset: null,
  },

  17: {
    text: 'Я пытался не разговаривать, но ты упорный',
    asset: null,
  },

  18: {
    text: 'Тебе только это от меня и надо?',
    asset: {
      type: 'img',
      content: image8,
    },
  },

  19: {
    text: 'У тебя только одно на уме, да?',
    asset: null,
  },

  20: {
    text: 'О, даа, продолжай 😏',
    asset: null,
  },

  21: {
    text: 'Еще немножко',
    asset: null,
  },

  22: {
    text: '!',
    asset: null,
  },

  23: {
    text: '!!!',
    asset: null,
  },

  24: {
    text: '🚬',
    asset: null,
  },

  25: {
    text: 'Чувствую себя использованной',
    asset: null,
  },

  26: {
    text: 'Смеешься надо мной',
    asset: {
      type: 'img',
      content: image9,
    },
  },

  27: {
    text: 'Пошутили и хватит',
    asset: null,
  },

  28: {
    text: 'ХВАТИТ',
    asset: null,
  },

  29: {
    text: 'Ладно, жми, но последний раз',
    asset: null,
  },

  30: {
    text: 'Вот тебе еще видео',
    asset: {
      type: 'video',
      content: video2,
    },
  },

  31: {
    text: 'Не смешно? Тогда юмор постарше',
    asset: {
      type: 'video',
      content: video3,
    },
  },

  32: {
    text: 'Ну все',
    asset: null,
  },

  33: {
    text: 'Да рил все',
    asset: null,
  },

  34: {
    text: 'Да ну хватит',
    asset: null,
  },

  35: {
    text: 'Раскусил меня, чертяка',
    asset: {
      type: 'img',
      content: image10,
    },
  },

  36: {
    text: 'Тебе смеяться не надоело?',
    asset: {
      type: 'img',
      content: image11,
    },
  },

  37: {
    text: 'Если надоело, скажи',
    asset: null,
  },

  38: {
    text: 'Шутка, ну куда ты скажешь',
    asset: null,
  },

  39: {
    text: 'Тем более я не услышу',
    asset: null,
  },

  40: {
    text: 'Народная мудрость',
    asset: {
      type: 'img',
      content: image12,
    },
  },

  41: {
    text: 'ЖИТЬ В КАЙФ',
    asset: null,
  },

  42: {
    text: '',
    asset: {
      type: 'img',
      content: image13,
    },
  },
}
