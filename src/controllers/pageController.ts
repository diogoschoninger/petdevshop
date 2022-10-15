import { Request, Response } from "express"
import { Pet } from '../models/pet'
import { createMenuObject } from '../helpers/createMenuObject'

export const home = (req: Request, res: Response) => {
  let list = Pet.getAll();

  res.render('pages/page', {
    menu: createMenuObject('all'),
    banner: {
      background: '/images/allanimals.jpg',
      title: 'All animals'
    },
    list
  })
}

export const dogs = (req: Request, res: Response) => {
  let list = Pet.getFromType('dog')

  res.render('pages/page', {
    menu: createMenuObject('dog'),
    banner: {
      background: '/images/banner_dog.jpg',
      title: 'Dogs'
    },
    list
  })
}

export const cats = (req: Request, res: Response) => {
  let list = Pet.getFromType('cat')

  res.render('pages/page', {
    menu: createMenuObject('cat'),
    banner: {
      background: '/images/banner_cat.jpg',
      title: 'Cats'
    },
    list
  })
}

export const fishes = (req: Request, res: Response) => {
  let list = Pet.getFromType('fish')

  res.render('pages/page', {
    menu: createMenuObject('fish'),
    banner: {
      background: '/images/banner_fish.jpg',
      title: 'Fishes'
    },
    list
  })
}
