import { Request, Response } from "express"
import { createMenuObject } from '../helpers/createMenuObject'

export const home = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObject('all'),
    banner: {
      background: '/images/allanimals.jpg',
      title: 'All animals'
    }
  })
}

export const dogs = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObject('dog'),
    banner: {
      background: '/images/banner_dog.jpg',
      title: 'Dogs'
    }
  })
}

export const cats = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObject('cat'),
    banner: {
      background: '/images/banner_cat.jpg',
      title: 'Cats'
    }
  })
}

export const fishes = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObject('fish'),
    banner: {
      background: '/images/banner_fish.jpg',
      title: 'Fishes'
    }
  })
}
