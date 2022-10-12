import { Request, Response } from "express"
import { createMenuObject } from '../helpers/createMenuObject'

export const home = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObject('all'),
    title: 'All animals'
  })
}

export const dogs = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObject('dog'),
    title: 'Dogs'
  })
}

export const cats = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObject('cat'),
    title: 'Cats'
  })
}

export const fishes = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObject('fish'),
    title: 'Fishes'
  })
}
