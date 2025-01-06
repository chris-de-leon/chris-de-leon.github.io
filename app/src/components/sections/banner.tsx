import { InfiniteCarousel } from "../animated/infinite-carousel"
import { TypeWriter } from "../animated/typewriter"
import Linkedin from "../../../public/linkedin.svg"
import Github from "../../../public/github.svg"
import Fiverr from "../../../public/fiverr.svg"
import Email from "../../../public/email.svg"
import { Button } from "../ui/button"
import Image from "next/image"
import Link from "next/link"

export function Banner() {
  return (
    <div id="home" className="section h-screen text-primary-foreground">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between gap-y-8 md:gap-y-32">
          <div className="flex flex-col items-center md:flex-row">
            <div className="flex flex-col gap-y-5 md:w-1/2">
              <div className="flex flex-col gap-y-3 md:gap-y-5">
                <span className="text-center text-3xl md:text-left md:text-6xl">
                  Hi, my name is Chris
                </span>
                <span className="text-center text-3xl md:text-left md:text-6xl">
                  Software Engineer
                </span>
                <TypeWriter
                  className="text-orange-glow whitespace-nowrap text-center text-2xl font-bold text-foreground md:text-left"
                  words={words}
                  typingDelayMs={100}
                  typingPauseMs={2000}
                />
              </div>
              <div className="flex justify-center md:hidden">
                <div className="w-1/2 overflow-clip rounded-full bg-secondary">
                  <Image src={"/me.png"} alt="me" width={125} height={125} />
                </div>
              </div>
              <p className="text-center text-sm md:w-3/4 md:text-left md:text-lg">
                Software engineer based in L.A. with 10+ years of coding
                experience, actively seeking new opportunities in the fields of
                crypto, Web3, and blockchain. Experienced in building scalable,
                secure applications and passionate about leveraging
                decentralized technologies to create impactful solutions.
              </p>
              <div className="flex flex-row items-center justify-around md:w-1/4 md:gap-x-5">
                <Link href="https://github.com/chris-de-leon" target="_blank">
                  <div className="relative h-[25px] w-[25px] rounded-full bg-secondary object-cover md:h-[40px] md:w-[40px]">
                    <Image src={Github} alt="github" />
                  </div>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/chris-de-leon-96bb361b5/"
                  target="_blank"
                >
                  <div className="relative h-[25px] w-[25px] rounded-full bg-secondary object-cover md:h-[40px] md:w-[40px]">
                    <Image src={Linkedin} alt="linkedin" />
                  </div>
                </Link>
                <Link
                  href="https://www.fiverr.com/chris_de_leon?public_mode=true"
                  target="_blank"
                >
                  <div className="relative h-[25px] w-[25px] rounded-full bg-secondary object-cover md:h-[40px] md:w-[40px]">
                    <Image src={Fiverr} alt="fiverr" />
                  </div>
                </Link>
                <Link
                  href="mailto:chrisdeleon333+jobseek@gmail.com"
                  target="_blank"
                >
                  <div className="relative h-[25px] w-[25px] rounded-full bg-secondary object-cover md:h-[40px] md:w-[40px]">
                    <Image src={Email} alt="email" />
                  </div>
                </Link>
              </div>
              <div className="flex flex-row justify-center gap-x-5 md:justify-start">
                <Button variant="secondary" asChild>
                  <Link href="/#contact">Contact</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/resume.pdf" target="_blank">
                    Résumé
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden w-2/5 overflow-clip rounded-full bg-secondary md:flex">
              <Image src={"/me.png"} alt="me" width={430} height={430} />
            </div>
          </div>
          <InfiniteCarousel items={tools} />
        </div>
      </div>
    </div>
  )
}

const words = [
  "I like coding stuff 💻 ",
  "I use Neovim btw 😎 ",
  "I love coffee ☕ ",
  "I play guitar sometimes 🎸",
]

const tools = [
  {
    name: "Ethereum",
    img: { src: "/tools/ethereum.svg", alt: "ethereum-logo" },
  },
  {
    name: "GraphQL",
    img: { src: "/tools/graphql.svg", alt: "graphql-logo" },
  },
  {
    name: "AWS",
    img: { src: "/tools/aws.svg", alt: "aws-logo" },
  },
  {
    name: "Kubernetes",
    img: { src: "/tools/kubernetes.svg", alt: "kubernetes-logo" },
  },
  {
    name: "Docker",
    img: { src: "/tools/docker.svg", alt: "docker-logo" },
  },
  {
    name: "Golang",
    img: { src: "/tools/golang.svg", alt: "golang-logo" },
  },
  {
    name: "Python",
    img: { src: "/tools/python.svg", alt: "python-logo" },
  },
  {
    name: "Javascript",
    img: { src: "/tools/javascript.svg", alt: "javascript-logo" },
  },
  {
    name: "Typescript",
    img: { src: "/tools/typescript.svg", alt: "typescript-logo" },
  },
  {
    name: "Java",
    img: { src: "/tools/java.svg", alt: "java-logo" },
  },
  {
    name: "CSS",
    img: { src: "/tools/css.svg", alt: "css-logo" },
  },
  {
    name: "HTML",
    img: { src: "/tools/html.svg", alt: "html-logo" },
  },
  {
    name: "React",
    img: { src: "/tools/react.svg", alt: "react-logo" },
  },
  {
    name: "Tailwind",
    img: { src: "/tools/tailwind.svg", alt: "tailwind-logo" },
  },
  {
    name: "Postgres",
    img: { src: "/tools/postgres.svg", alt: "postgres-logo" },
  },
  {
    name: "MySql",
    img: { src: "/tools/mysql.svg", alt: "mysql-logo" },
  },
  {
    name: "Mongo",
    img: { src: "/tools/mongo.svg", alt: "mongo-logo" },
  },
  {
    name: "Redis",
    img: { src: "/tools/redis.svg", alt: "redis-logo" },
  },
]
