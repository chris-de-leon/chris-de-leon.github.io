import { ProgressTimeline } from "../ui/timeline"

export function Experience() {
  return (
    <div id="experience" className="section text-primary-foreground">
      <div className="container mx-auto">
        <div className="flex flex-col justify-around gap-y-10">
          <div className="flex flex-col gap-y-5 md:w-1/2">
            <span className="text-orange-glow text-center font-bold text-foreground md:text-left">
              Experience
            </span>
            <span className="text-center text-4xl md:text-left">
              I specialize in building full stack Web3 apps
            </span>
            <p className="text-center md:text-left">
              I have spent my entire professional career working at Web3
              companies. Over the years I have built up a solid foundation in
              mastering the best practices and key principles of blockchain
              technology. Here are my most recent work experiences that have
              made me into the developer that I am today.
            </p>
          </div>
          <ProgressTimeline items={experiences} />
        </div>
      </div>
    </div>
  )
}

const experiences = [
  {
    title:
      "UC Berkeley (Alma Mater - ranked #1 in Computer Science by U.S. News Education)",
    subtitle: "2020 - 2023",
    description:
      "Graduated with an M.S. in Electrical Engineering and Computer Science. As a graduate student, I mostly focused on the field of human-computer interaction (HCI). The knowledge that I've gained from university has shown me new ways to make Web3 more accessible to the average user.",
  },
  {
    title: "AnChain.AI (Startup - Blockchain AML Solutions)",
    subtitle: "2021 - 2023",
    description:
      "Started out as a Software Engineer developing NFT (non-fungible token) based applications. I helped launch several NFT marketplaces from the ground up - some of which netted over 1 million USD once released. I was in charge of developing backend APIs, writing smart contracts, scaling deployments, and more. Within a year of joining, I managed to reach the position of tech lead.",
  },
  {
    title: "Chainlink Labs (Big Tech - Blockchain Oracle Solutions)",
    subtitle: "2023 - present",
    description:
      "Helped expand the company's non-EVM integrations division. I led tooling efforts for a number of non-EVM chains including Starknet, Aptos, Solana, Tron, and more. Within my first year I was promoted and became a major figure in the launch of multi-million dollar integrations for Starknet and Aptos.",
  },
]
