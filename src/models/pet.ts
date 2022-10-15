type PetType = 'dog' | 'cat' | 'fish'

interface Pet {
  type: PetType,
  image: string,
  name: string,
  color: string,
  genre: 'Male' | 'Female'
}

const data: Pet[] = [
  {
    type: 'dog',
    image: 'pastor-alemao.jpg',
    name: 'Pastor-alemão',
    color: 'Yellow and black',
    genre: 'Male'
  },
  {
    type: 'dog',
    image: 'labrador.jpg',
    name: 'Labrador-retriever',
    color: 'White',
    genre: 'Male'
  },
  {
    type: 'dog',
    image: 'zwergspitz.jpg',
    name: 'Zwergspitz',
    color: 'Yellow',
    genre: 'Female'
  },
  {
    type: 'dog',
    image: 'husky.jpg',
    name: 'Husky Siberiano',
    color: 'Black and white',
    genre: 'Male'
  },
  {
    type: 'dog',
    image: 'golden.jpg',
    name: 'Golden Retriever',
    color: 'Yellow',
    genre: 'Male'
  },
  {
    type: 'dog',
    image: 'poodle.jpg',
    name: 'Poodle',
    color: 'White',
    genre: 'Female'
  },
  {
    type: 'dog',
    image: 'bulldog.jpg',
    name: 'Bulldog',
    color: 'White and yellow',
    genre: 'Male'
  },
  {
    type: 'cat',
    image: 'persa.jpg',
    name: 'Persa',
    color: 'Yellow',
    genre: 'Male'
  },
  {
    type: 'cat',
    image: 'mainecoon.jpg',
    name: 'Maine Coon',
    color: 'Black and white',
    genre: 'Male'
  },
  {
    type: 'cat',
    image: 'bengal.jpg',
    name: 'Bengal',
    color: 'Black, white and yellow',
    genre: 'Female'
  },
  {
    type: 'cat',
    image: 'siames.jpg',
    name: 'Siamês',
    color: 'Yellow and black',
    genre: 'Male'
  },
  {
    type: 'cat',
    image: 'sphynx.jpg',
    name: 'Sphynx',
    color: 'White',
    genre: 'Male'
  },
  {
    type: 'fish',
    image: 'neon.jpg',
    name: 'Tetra Neon',
    color: 'Red and blue',
    genre: 'Male'
  },
  {
    type: 'fish',
    image: 'matogrosso.jpg',
    name: 'Mato Grosso',
    color: 'Orange',
    genre: 'Male'
  },
  {
    type: 'fish',
    image: 'limpavidro.jpg',
    name: 'Limpa Vidro',
    color: 'Green and white',
    genre: 'Male'
  },
  {
    type: 'fish',
    image: 'tanictis.jpg',
    name: 'Tanictis',
    color: 'Red',
    genre: 'Male'
  },
  {
    type: 'fish',
    image: 'acara.jpg',
    name: 'Acará Bandeira',
    color: 'Black',
    genre: 'Male'
  },
]

export const Pet = {
  getAll: (): Pet[] => {
    return data
  },
  getFromType: (type: PetType): Pet[] => {
    return data.filter((item) => item.type === type)
  },
  getFromName: (name: string): Pet[] => {
    return data.filter((item) => {
      return item.name.toLowerCase().indexOf(name.toLowerCase()) > -1
    })
  }
}
