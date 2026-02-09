import { motion } from 'motion/react'
import { useEffect, useRef, useState, useMemo } from 'react'

const buildKeyframes = (from, steps) => {
  const keys = new Set([
    ...Object.keys(from),
    ...steps.flatMap(s => Object.keys(s))
  ])

  const keyframes = {}
  keys.forEach(k => {
    keyframes[k] = [from[k], ...steps.map(s => s[k])]
  })

  return keyframes
}

const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = t => t,
  onAnimationComplete,
  stepDuration = 0.35
}) => {
  // ✅ Split text into array, keeping newlines as separate segments
  const segments = text.split(/(\n)/)

  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(ref.current)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  const defaultFrom = useMemo(
    () =>
      direction === 'top'
        ? { filter: 'blur(10px)', opacity: 0, y: -40 }
        : { filter: 'blur(10px)', opacity: 0, y: 40 },
    [direction]
  )

  const defaultTo = useMemo(
    () => [
      { filter: 'blur(5px)', opacity: 0.5, y: 5 },
      { filter: 'blur(0px)', opacity: 1, y: 0 }
    ],
    []
  )

  const fromSnapshot = animationFrom ?? defaultFrom
  const toSnapshots = animationTo ?? defaultTo

  const stepCount = toSnapshots.length + 1
  const totalDuration = stepDuration * (stepCount - 1)
  const times = Array.from(
    { length: stepCount },
    (_, i) => i / (stepCount - 1)
  )

  let globalIndex = 0

  return (
    <div ref={ref} className={`blur-text ${className}`}>
      {segments.map((segment, sIndex) => {
        // 🔹 If it's a newline, render a <br />
        if (segment === '\n') return <br key={sIndex} />

        // Split segment into words or letters
        const words =
          animateBy === 'words' ? segment.split(' ') : segment.split('')

        return words.map((word, wIndex) => {
          const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots)

          const spanTransition = {
            duration: totalDuration,
            times,
            delay: (globalIndex * delay) / 1000,
            ease: easing
          }

          globalIndex++

          return (
            <motion.span
              key={`${sIndex}-${wIndex}`}
              className="inline-block will-change-[transform,filter,opacity]"
              initial={fromSnapshot}
              animate={inView ? animateKeyframes : fromSnapshot}
              transition={spanTransition}
              onAnimationComplete={
                sIndex === segments.length - 1 &&
                wIndex === words.length - 1
                  ? onAnimationComplete
                  : undefined
              }
            >
              {word}
              {animateBy === 'words' && '\u00A0'}
            </motion.span>
          )
        })
      })}
    </div>
  )
}

export default BlurText
