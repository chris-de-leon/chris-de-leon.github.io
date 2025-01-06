type ProgressTimelineItem = Readonly<{
  title: string
  subtitle: string
  description: string
}>

export type ProgressTimelineProps = Readonly<{
  items: ProgressTimelineItem[]
}>

// https://cruip.com/3-examples-of-brilliant-vertical-timelines-with-tailwind-css/#example-2
export function ProgressTimeline(props: ProgressTimelineProps) {
  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-foreground before:to-transparent md:before:mx-auto md:before:translate-x-0">
      {props.items.map((item, i) => {
        return (
          <div
            className="is-active group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse"
            key={i}
          >
            <ProgressTimelineIcon />
            <ProgressTimelineCard {...item} />
          </div>
        )
      })}
    </div>
  )
}

function ProgressTimelineIcon() {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-foreground bg-primary text-foreground shadow md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
      <svg
        className="fill-current text-foreground"
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="10"
      >
        <path
          fillRule="nonzero"
          d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
        />
      </svg>
    </div>
  )
}

function ProgressTimelineCard(item: ProgressTimelineItem) {
  return (
    <div className="w-[calc(100%-4rem)] rounded border border-foreground p-4 shadow-xl md:w-[calc(50%-2.5rem)]">
      <div className="flex flex-col gap-y-1 text-primary-foreground">
        <span className="font-bold">{item.title}</span>
        <p>{item.subtitle}</p>
        <p className="opacity-50">{item.description}</p>
      </div>
    </div>
  )
}
