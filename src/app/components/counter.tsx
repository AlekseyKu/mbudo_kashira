'use client'

import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

interface CounterProps {
  value: number | string
  className?: string
}

export default function Counter({ value, className }: CounterProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1, // когда 100% видно — запускаем
  })

  let numericValue = 0
  let suffix = ''

  if (typeof value === 'string') {
    const match = value.match(/^(\d+)([^\d]*)$/)
    if (match) {
      numericValue = parseInt(match[1])
      suffix = match[2]
    }
  } else {
    numericValue = value
  }

  return (
    <span ref={ref} className={className}>
      {inView ? <CountUp end={numericValue} /> : 0}{suffix}
    </span>
  )
}
