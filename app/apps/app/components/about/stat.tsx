import { CountUpProps } from 'react-countup'
import React, { lazy } from 'react'

// https://github.com/glennreyes/react-countup/issues/805#issuecomment-1556706728
const CountUp = lazy(() => import('react-countup'))

interface AboutContentProps {
  readonly counter: CountUpProps
  readonly inView: boolean
  readonly label: string | JSX.Element
  readonly prefix: string
  readonly suffix: string
}

export function AboutStat(props: AboutContentProps) {
  return (
    <div>
      <div className="text-lg font-bold lg:text-2xl text-grad-solid">
        {props.prefix}
        {props.inView ? <CountUp {...props.counter} /> : null}
        {props.suffix}
      </div>
      <p className="text-primary">{props.label}</p>
    </div>
  )
}
