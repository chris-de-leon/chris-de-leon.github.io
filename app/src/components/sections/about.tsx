import { Counter } from "../animated/counter"
import Image from "next/image"

export function About() {
  return (
    <div id="about" className="section bg-muted">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-primary-foreground md:flex-row md:gap-x-10">
          <div className="relative hidden aspect-video w-1/2 justify-center overflow-clip md:flex">
            <Image
              className="left-0 top-0 h-full w-full object-cover"
              src="/coding.jpg"
              alt="coding"
              fill
            />
          </div>
          <div className="flex flex-col justify-evenly gap-y-5 md:w-1/2">
            <div className="flex flex-col gap-y-5">
              <span className="text-orange-glow text-center font-bold text-foreground md:text-left">
                About Me
              </span>
              <span className="text-center text-2xl md:text-left md:text-4xl">
                I am a Full Stack Blockchain Engineer based in Los Angeles
              </span>
              <div className="relative flex aspect-video w-full justify-center overflow-clip md:hidden">
                <Image
                  className="left-0 top-0 h-full w-full object-cover"
                  src="/coding.jpg"
                  alt="coding"
                  fill
                />
              </div>
              <p className="text-center md:text-left">
                Throughout my career, I&apos;ve worked with various blockchain
                technologies such as Ethereum, Solana, and Layer 2 solutions,
                and have a deep understanding of smart contracts, decentralized
                applications (dApps), and tokenization. I am also proficient in
                building responsive, user-friendly interfaces using modern web
                technologies.
              </p>
              <p className="text-center md:text-left">
                I believe in continuous learning and growth, and am always
                excited to tackle new challenges. When I’m not coding, you can
                find me exploring the latest trends in the tech world,
                collaborating with talented teams, or creating my own side
                projects.
              </p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-col items-center justify-center font-bold">
                <Counter
                  className="text-orange-glow text-3xl text-foreground"
                  start={0}
                  final={10}
                  suffix="+"
                  speedConstant={2.1}
                />
                <span className="text-center text-xs md:text-lg">
                  Years of Coding <br className="hidden md:flex" /> Experience
                </span>
              </div>
              <div className="flex flex-col items-center justify-center font-bold">
                <Counter
                  className="text-orange-glow text-3xl text-foreground"
                  start={0}
                  final={15}
                  suffix="+"
                  speedConstant={1.5}
                />
                <span className="text-center text-xs md:text-lg">
                  EVM and Non-EVM <br className="hidden md:flex" /> Chains
                  Mastered
                </span>
              </div>
              <div className="flex flex-col items-center justify-center font-bold">
                <Counter
                  className="text-orange-glow text-3xl text-foreground"
                  start={0}
                  final={100}
                  suffix="M+"
                  speedConstant={1.045}
                />
                <span className="text-center text-xs md:text-lg">
                  USD Earned <br className="hidden md:flex" />
                  for Clients
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
