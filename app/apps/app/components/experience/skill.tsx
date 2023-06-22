/* eslint-disable @next/next/no-img-element */
import Tilt from 'react-parallax-tilt'

interface SkillProps {
  readonly color: 'blue' | 'purple'
  readonly skill: string
}

export function Skill(props: SkillProps) {
  return (
    <Tilt>
      <div className="flex items-center justify-center">
        {props.color === 'blue' ? (
          <img src="blue.png" alt="blue" loading="lazy" />
        ) : (
          <img src="purple.png" alt="purple" loading="lazy" />
        )}
        <span className="absolute text-xs text-primary">{props.skill}</span>
      </div>
    </Tilt>
  )
}
