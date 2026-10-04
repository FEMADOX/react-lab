const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
})

export const formatPrice = (price: number) => priceFormatter.format(price)
