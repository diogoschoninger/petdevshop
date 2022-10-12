import { Request, Response } from "express"

export const home = (req: Request, res: Response) => {
  res.render('pages/page', {
    title: 'All animals'
  })
}

export const dogs = (req: Request, res: Response) => {
  res.render('pages/page', {
    title: 'Dogs'
  })
}

export const cats = (req: Request, res: Response) => {
  res.render('pages/page', {
    title: 'Cats'
  })
}

export const fishes = (req: Request, res: Response) => {
  res.render('pages/page', {
    title: 'Fishes'
  })
}
