import { capitalize } from '../utils/capitalize'
import categoriesMocked from './categories.json'

export const categories = [
  ...new Set(
    categoriesMocked.map(category => {
      if (category.split('-').length > 1) {
        return category
          .split('-')
          .map(word => capitalize(word))
          .join(' ')
      }
      return capitalize(category)
    })
  )
]
