import { useCallback, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { cn } from '../../lib/utils'

const MAX_VISIBLE = 7
const HALF = 3

const FAN_POSITIONS = [
  { rot: -21, scale: 0.7756, x: -30, y: 7.3, zIndex: 1 },
  { rot: -14, scale: 0.8498, x: -22, y: 4.0, zIndex: 2 },
  { rot: -7, scale: 0.9346, x: -11, y: 1.3, zIndex: 3 },
  { rot: 0, scale: 1, x: 0, y: 0, zIndex: 10 },
  { rot: 7, scale: 0.9346, x: 11, y: 1.3, zIndex: 3 },
  { rot: 14, scale: 0.8498, x: 22, y: 4.0, zIndex: 2 },
  { rot: 21, scale: 0.7756, x: 30, y: 7.3, zIndex: 1 },
]

const THREE_CARD_POSITIONS = [
  { rot: -8, scale: 0.94, x: -8, y: 1.2, zIndex: 3 },
  { rot: 0, scale: 1, x: 0, y: 0, zIndex: 10 },
  { rot: 8, scale: 0.94, x: 8, y: 1.2, zIndex: 3 },
]

function getResponsiveMultiplier(width) {
  if (width < 480) return 0.28
  if (width < 640) return 0.38
  if (width < 768) return 0.5
  if (width < 1024) return 0.75
  return 1
}

function getHeightMultiplier(width) {
  let idealPx
  if (width < 480) idealPx = 352
  else if (width < 640) idealPx = 416
  else if (width < 768) idealPx = 448
  else if (width < 1024) idealPx = 544
  else idealPx = 608

  const available = window.innerHeight * 0.7
  return available >= idealPx ? 1 : available / idealPx
}

function getSlotConfig(totalCards, slot) {
  if (totalCards === 3) return THREE_CARD_POSITIONS[slot]
  if (totalCards >= MAX_VISIBLE) return FAN_POSITIONS[slot]

  const center = totalCards >> 1
  const distance = totalCards > 1 ? (slot - center) / center : 0
  const absDistance = Math.abs(distance)

  return {
    rot: distance * 21,
    scale: 1 - 0.2244 * absDistance * absDistance,
    x: distance * 30,
    y: absDistance * absDistance * 7.3,
    zIndex: 10 - Math.abs(slot - center),
  }
}

const ARROW_CLASSES =
  'relative z-30 flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 shadow-lg backdrop-blur-md outline-none transition-colors duration-300 hover:border-white/25 hover:bg-white/10 hover:text-white/90 active:opacity-70 focus:ring-2 focus:ring-apple-blue/60 md:h-12 md:w-12'

function Chevron({ direction }) {
  return (
    <svg className="relative z-[2] h-4 w-4 md:h-5 md:w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points={direction === 'left' ? '15 18 9 12 15 6' : '9 18 15 12 9 6'} />
    </svg>
  )
}

export default function CardFanCarousel({ cards, children, className, visualClassName }) {
  const containerRef = useRef(null)
  const isAnimating = useRef(false)
  const hasEntered = useRef(false)
  const directionRef = useRef(null)
  const prevVisible = useRef(new Set())
  const totalCards = cards.length
  const needsPagination = totalCards > MAX_VISIBLE
  const [centerIndex, setCenterIndex] = useState(needsPagination ? HALF : totalCards >> 1)

  const getVisibleMap = useCallback(
    (center) => {
      const map = new Map()

      if (!needsPagination) {
        cards.forEach((_, index) => map.set(index, index))
        return map
      }

      for (let slot = 0; slot < MAX_VISIBLE; slot += 1) {
        const cardIndex = (center + slot - HALF + totalCards) % totalCards
        map.set(cardIndex, slot)
      }

      return map
    },
    [cards, needsPagination, totalCards],
  )

  const cycle = useCallback(
    (direction) => {
      if (isAnimating.current || !needsPagination) return

      isAnimating.current = true
      directionRef.current = direction
      setCenterIndex((previous) =>
        direction === 'right'
          ? (previous + 1) % totalCards
          : (previous - 1 + totalCards) % totalCards,
      )
    },
    [needsPagination, totalCards],
  )

  useEffect(() => {
    const container = containerRef.current
    if (!container || !totalCards) return undefined

    const cardElements = Array.from(container.querySelectorAll('.fan-card'))
    if (!cardElements.length) return undefined

    const visibleMap = getVisibleMap(centerIndex)
    const previouslyVisible = prevVisible.current
    const direction = directionRef.current
    const isFirstMount = !hasEntered.current
    const multiplier = getResponsiveMultiplier(window.innerWidth)
    const heightMultiplier = getHeightMultiplier(window.innerWidth)
    const slotCount = needsPagination ? MAX_VISIBLE : totalCards
    const config = (slot) => getSlotConfig(slotCount, slot)

    gsap.killTweensOf(cardElements)

    if (isFirstMount) isAnimating.current = true

    let completedCount = 0
    const visibleCount = visibleMap.size
    const onCardDone = () => {
      completedCount += 1
      if (completedCount >= visibleCount) {
        isAnimating.current = false
        if (isFirstMount) hasEntered.current = true
      }
    }

    cardElements.forEach((card, cardIndex) => {
      const slot = visibleMap.get(cardIndex)
      const wasVisible = previouslyVisible.has(cardIndex)

      if (slot !== undefined) {
        const { x, y, rot, scale, zIndex } = config(slot)
        const target = {
          x: `${x * multiplier}rem`,
          y: `${y * heightMultiplier}rem`,
          rotation: rot,
          scale,
          opacity: 1,
          zIndex,
        }

        if (isFirstMount) {
          gsap.set(card, { x: 0, y: `${12 * heightMultiplier}rem`, rotation: 0, scale: 0.5, opacity: 0 })
          gsap.to(card, {
            ...target,
            duration: 0.85,
            ease: 'power2.inOut',
            delay: 0.08 + slot * 0.04,
            onComplete: onCardDone,
          })
        } else if (!wasVisible) {
          const enterX = direction === 'right' ? 40 : -40
          gsap.set(card, {
            x: `${enterX}rem`,
            y: `${y * heightMultiplier}rem`,
            rotation: direction === 'right' ? 30 : -30,
            scale: 0.5,
            opacity: 0,
          })
          gsap.to(card, { ...target, duration: 0.52, ease: 'power2.inOut', onComplete: onCardDone })
        } else {
          gsap.to(card, { ...target, duration: 0.46, ease: 'power2.inOut', onComplete: onCardDone })
        }
      } else if (wasVisible) {
        const exitX = direction === 'right' ? -40 : 40
        gsap.to(card, {
          x: `${exitX}rem`,
          opacity: 0,
          scale: 0.5,
          rotation: direction === 'right' ? -30 : 30,
          duration: 0.4,
          ease: 'power2.inOut',
          zIndex: 0,
        })
      } else if (isFirstMount) {
        gsap.set(card, { opacity: 0, scale: 0.3, x: 0, y: 0, zIndex: 0 })
      }
    })

    prevVisible.current = new Set(visibleMap.keys())

    const visibleEntries = cardElements
      .map((element, index) => ({ element, slot: visibleMap.get(index) }))
      .filter(({ slot }) => slot !== undefined)
      .sort((a, b) => a.slot - b.slot)

    let activeSlot = null
    let leaveTimer = null
    const centerSlot = visibleEntries.length >> 1

    const updateHoverLayout = (hoveredSlot) => {
      const currentMultiplier = getResponsiveMultiplier(window.innerWidth)
      const currentHeightMultiplier = getHeightMultiplier(window.innerWidth)

      visibleEntries.forEach(({ element, slot }) => {
        const base = config(slot)
        let targetX = base.x * currentMultiplier
        let targetY = base.y * currentHeightMultiplier
        let targetRotation = base.rot
        let targetScale = base.scale
        let delay = 0

        if (hoveredSlot !== null) {
          const distance = Math.abs(slot - hoveredSlot)
          delay = distance * 0.02

          if (slot === hoveredSlot) {
            targetY -= 2.5 * currentHeightMultiplier
            targetScale *= 1.08
          } else {
            const normalized = centerSlot > 0 ? (slot - centerSlot) / centerSlot : 0
            const pushStrength = 8 * (1 - Math.abs(normalized)) * (1 + 0.2 * Math.max(0, 3 - distance))

            if (slot < hoveredSlot) {
              targetX -= pushStrength * currentMultiplier
              targetRotation -= 3 / (distance + 1)
            } else {
              targetX += pushStrength * currentMultiplier
              targetRotation += 3 / (distance + 1)
            }
          }
        } else {
          delay = Math.abs(slot - centerSlot) * 0.02
        }

        gsap.to(element, {
          x: `${targetX}rem`,
          y: `${targetY}rem`,
          rotation: targetRotation,
          scale: targetScale,
          duration: 0.48,
          delay,
          ease: 'power2.inOut',
          overwrite: 'auto',
        })
        gsap.set(element, { zIndex: base.zIndex })
      })
    }

    const enterHandlers = visibleEntries.map(({ element, slot }) => {
      const handler = () => {
        if (isAnimating.current) return
        if (leaveTimer) clearTimeout(leaveTimer)
        if (activeSlot !== slot) {
          activeSlot = slot
          updateHoverLayout(slot)
        }
      }
      element.addEventListener('mouseenter', handler)
      return { element, handler }
    })

    const onMouseLeave = () => {
      if (isAnimating.current) return
      if (leaveTimer) clearTimeout(leaveTimer)
      leaveTimer = setTimeout(() => {
        activeSlot = null
        updateHoverLayout(null)
      }, 50)
    }

    const onResize = () => {
      if (!isAnimating.current) updateHoverLayout(activeSlot)
    }

    container.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('resize', onResize)

    return () => {
      enterHandlers.forEach(({ element, handler }) => element.removeEventListener('mouseenter', handler))
      container.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('resize', onResize)
      if (leaveTimer) clearTimeout(leaveTimer)
      gsap.killTweensOf(cardElements)
    }
  }, [centerIndex, getVisibleMap, needsPagination, totalCards])

  if (!totalCards) return null

  return (
    <div
      className={cn('relative overflow-hidden', className)}
      style={{ backgroundColor: '#000' }}
    >
      <div className={cn('absolute inset-x-0', visualClassName ?? 'inset-y-0')}>
        <div
          ref={containerRef}
          className="fan-layout pointer-events-auto absolute inset-x-0 top-1/2 mx-auto flex h-[min(34rem,82%)] w-full max-w-[72rem] -translate-y-1/2 items-center justify-center overflow-visible"
          style={{ marginTop: 'clamp(-4rem, -6vh, -1.5rem)' }}
        >
          {cards.map((card, index) => {
            const image = (
              <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30 shadow-2xl shadow-black/50">
                <img
                  src={card.imgUrl}
                  loading="eager"
                  alt={card.alt || `Produto ${index + 1}`}
                  className="absolute inset-0 z-10 h-full w-full select-none object-cover"
                  draggable={false}
                />
              </div>
            )

            const cardClassName = 'fan-card pointer-events-auto absolute left-1/2 top-1/2 block aspect-[2/3] w-[clamp(8.75rem,20vw,15.5rem)] -translate-x-1/2 -translate-y-1/2 cursor-pointer overflow-hidden rounded-[1.5rem] outline-none focus:ring-2 focus:ring-apple-blue/70 sm:w-[clamp(9.75rem,19vw,16.5rem)]'

            return card.linkUrl ? (
              <a
                key={index}
                href={card.linkUrl}
                target={card.linkUrl.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className={cardClassName}
              >
                {image}
              </a>
            ) : (
              <div key={index} className={cardClassName}>
                {image}
              </div>
            )
          })}
        </div>
      </div>

      {needsPagination && (
        <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center justify-center gap-4">
          <button type="button" className={ARROW_CLASSES} onClick={() => cycle('left')} aria-label="Imagem anterior">
            <Chevron direction="left" />
          </button>
          <div className="flex items-center gap-2" aria-hidden="true">
            {cards.map((_, index) => (
              <span key={index} className={cn('h-2 w-2 rounded-full bg-white/20 transition-all duration-300', index === centerIndex && 'scale-125 bg-white/80')} />
            ))}
          </div>
          <button type="button" className={ARROW_CLASSES} onClick={() => cycle('right')} aria-label="Próxima imagem">
            <Chevron direction="right" />
          </button>
        </div>
      )}

      {children}
    </div>
  )
}
