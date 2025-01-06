"use client"

import { Button } from "../ui/button"
import Image from "next/image"
import Link from "next/link"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"

export function Work() {
  return (
    <div id="work" className="section bg-muted">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-y-10 md:flex-row md:justify-between md:gap-y-0">
          <div className="flex flex-col gap-y-5 text-primary-foreground md:w-2/5">
            <span className="text-orange-glow text-center font-bold text-foreground md:text-left">
              Work
            </span>
            <span className="text-center text-4xl md:text-left">
              Here&apos;s a sample of my most recent work
            </span>
            <p className="text-center md:text-left">
              I take pride in creating high-quality, impactful projects that
              solve real problems and leave a lasting impression. Here is a
              selection of my latest work showcasing my skills and creativity.
            </p>
          </div>
          <Carousel className="w-3/4 md:w-1/2">
            <CarouselContent className="flex items-center">
              {works.map((w, i) => (
                <CarouselItem key={i}>
                  <Drawer>
                    <DrawerTrigger asChild>
                      <Button
                        className="h-full w-full border border-secondary"
                        variant="link"
                      >
                        <div className="relative flex aspect-video w-full items-center justify-center overflow-clip">
                          <Image
                            className="left-0 top-0 h-full w-full object-cover"
                            src={w.img.src}
                            alt={w.img.alt}
                            fill
                          />
                        </div>
                      </Button>
                    </DrawerTrigger>
                    <DrawerContent className="border-secondary">
                      <div className="mx-auto w-full max-w-sm">
                        <DrawerHeader className="text-primary-foreground">
                          <DrawerTitle className="text-foreground">
                            {w.title}
                          </DrawerTitle>
                          <DrawerDescription>{w.subtitle}</DrawerDescription>
                        </DrawerHeader>
                        <p className="p-4 text-primary-foreground">
                          {w.description}
                        </p>
                        <DrawerFooter>
                          <Button variant="secondary" asChild>
                            <Link href={w.url} target="_blank">
                              View Project
                            </Link>
                          </Button>
                          <DrawerClose asChild>
                            <Button variant="outline">Close</Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </div>
                    </DrawerContent>
                  </Drawer>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  )
}

const works = [
  {
    title: "Dooverse",
    subtitle: "NFT Marketplace Project",
    description:
      "The NFT Dooverse marketplace is a revolutionary digital asset platform for users to collect, trade, and engage with Korea's booming cultural economy through the blockchain.",
    url: "https://dooverse.io/market",
    img: {
      src: "/works/dooverse.png",
      alt: "dooverse",
    },
  },
  {
    title: "Meta Panda Club",
    subtitle: "NFT Project",
    description:
      "Meta Panda Club is aimed at building the world’s largest basketball community, uniting pro players, basketball teams, leagues, and fans. Starting with a Genesis drop of 10,000 Meta Panda NFTs, they strive to bring fans and players closer than ever in the Web3 era.",
    url: "https://xvsxsports.com/mpc/",
    img: {
      src: "/works/mpc.png",
      alt: "meta-panda-club",
    },
  },
  {
    title: "Crypto Piggos",
    subtitle: "NFT Project",
    description:
      "CryptoPiggos is a quirky and fun collection of 10,000 unique crypto-collectible NFTs. All 10,000 CryptoPiggos will be minted and available on the Flow blockchain, with zero gas fees to pay by the owner when claimed.",
    url: "https://www.flowverse.co/upcoming-drops/cryptopiggos-evolution",
    img: {
      src: "/works/crypto-piggos.png",
      alt: "crypto-piggos",
    },
  },
  {
    title: "Dataspread",
    subtitle: "UC Berkeley HCI Project",
    description:
      "Dataspread combines the intuitiveness and flexibility of spreadsheets and the scalability and power of databases. Due to these features, DataSpread can scale to billions of cells, providing interactive response times.",
    url: "https://dataspread.github.io/",
    img: {
      src: "/works/dataspread.webp",
      alt: "dataspread",
    },
  },
  {
    title: "BTC Predictor",
    subtitle: "Crypto AI/ML Project",
    description:
      "BTC predictor is a dashboard powered by machine learning algorithms that helps Bitcoin investors make more reliable investment decisions. It was designed by the Anchain.ai Bitcoin Price Prediction team from UC Berkeley's Data-X course.",
    url: "https://github.com/Bitcoin-Price-Prediction/btcpredictor",
    img: {
      src: "/works/btc-predictor.jpg",
      alt: "btc-predictor",
    },
  },
]
