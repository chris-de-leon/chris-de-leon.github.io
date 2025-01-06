"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Avatar, AvatarImage } from "../ui/avatar"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"

export function Testimonials() {
  return (
    <div id="testimonials" className="section bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-y-10">
          <div className="flex flex-col items-center gap-y-5 text-primary-foreground">
            <span className="text-orange-glow font-bold text-foreground">
              Testimonials
            </span>
            <span className="text-center text-4xl">
              What are other people saying about me?
            </span>
          </div>
          <Carousel className="w-3/4" plugins={[Autoplay({ delay: 5000 })]}>
            <CarouselContent>
              {testimonials.map((t, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-muted text-primary-foreground">
                    <div className="flex flex-col items-center justify-center md:flex-row">
                      <CardHeader className="w-1/2">
                        <div className="flex flex-col items-center justify-center gap-y-3">
                          <Avatar className="h-[100px] w-[100px]">
                            <AvatarImage src={t.img} />
                          </Avatar>
                          <CardTitle>
                            <div className="flex flex-col gap-y-1">
                              <span className="text-center">{t.name}</span>
                              <span className="text-center">{t.role}</span>
                            </div>
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <blockquote>&quot;{t.description}&quot;</blockquote>
                      </CardContent>
                    </div>
                  </Card>
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

const testimonials = [
  {
    name: "Yong Kang Chia",
    role: "Software Engineer",
    img: "/testimonials/yong-kang-chia.jpeg",
    description:
      "I had the pleasure of working with Chris on tooling for non-EVM chains, where he consistently demonstrated deep technical expertise and a remarkable ability to communicate complex concepts. His skills and insights were invaluable to our team, and I highly recommend him for any technical role.",
  },
  {
    name: "Thanh Ha",
    role: "Software Engineer",
    img: "/testimonials/thanh-ha.jpeg",
    description:
      "I am delighted to write a LinkedIn recommendation for Chris, who has been an exceptional Tech Lead at AnChain. Chris has been my mentor since I joined the company as a Software Engineer, and I cannot emphasize enough the positive impact he has had on my professional growth and overall experience.",
  },
  {
    name: "Adi Patel",
    role: "Software Engineer",
    img: "/testimonials/adi-patel.jpeg",
    description:
      "I am delighted to provide a strong recommendation for Chris in backend development positions. His profound expertise in TypeScript, GraphQL, databases, and API development, combined with his remarkable ability to swiftly learn new technologies, make him an invaluable asset to any team.",
  },
  {
    name: "Matthew Eckelberg",
    role: "Dev Ops Engineer",
    img: "/testimonials/matthew-eckelberg.jpeg",
    description:
      "Working alongside Chris is an absolute pleasure. His exceptional programming skills, profound understanding of the Blockchain ecosystem, and expertise in AWS DevOps practices have played a pivotal role in the execution of numerous projects. I had the privilege of serving as the Project Manager for four external client-facing projects, with Chris as our dedicated Backend Development Tech Lead.",
  },
]
