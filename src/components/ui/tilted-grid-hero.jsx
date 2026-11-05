import CardFanCarousel from './card-fan-carousel'

// Compatibilidade para imports antigos: o Hero agora usa CardFanCarousel diretamente.
export function TiltedGridHero({ images = [], children, ...props }) {
  const cards = images.map((image) => ({
    imgUrl: image.src,
    alt: image.alt,
  }))

  return (
    <CardFanCarousel cards={cards} {...props}>
      {children}
    </CardFanCarousel>
  )
}

export default TiltedGridHero
