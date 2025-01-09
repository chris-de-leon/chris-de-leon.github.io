import Image from "next/image"

export type InfiniteCarouselProps = {
  items: {
    name: string
    img: {
      src: string
      alt: string
    }
  }[]
}

export function InfiniteCarousel(props: InfiniteCarouselProps) {
  const Items = () => {
    return (
      <div className="flex animate-scroll-l-infinite flex-row space-x-12 px-6">
        {props.items.map((item, i) => {
          return (
            <div className="flex flex-col items-center justify-center" key={i}>
              <div className="relative aspect-square w-12 overflow-clip rounded-full">
                <Image
                  className="left-0 top-0 h-full w-full object-cover"
                  src={item.img.src}
                  alt={item.img.alt}
                  fill
                />
              </div>
              <p className="mt-1">{item.name}</p>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="flex h-full w-full flex-col justify-around gap-y-10 md:h-auto md:w-full">
      <div className="gradient-mask flex flex-row items-center overflow-hidden">
        <Items />
        <Items />
      </div>
    </div>
  )
}
