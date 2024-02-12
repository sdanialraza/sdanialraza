import Image from "next/image"

import { calculateAge } from "@/util"
import ExternalLink from "@/components/ExternalLink"
import profilePicture from "../../public/logo.png"
import Section, { SubSection } from "@/components/Section"
import SocialLinks from "@/components/SocialLinks"
import StatusPill from "@/components/StatusPill"

export default function Home() {
  return (
    <main className="flex min-h-full w-full grow content-stretch p-2 md:p-5">
      <div className="flex grow flex-col items-center justify-center space-y-8 overflow-hidden bg-fixed bg-center p-5 md:p-0">
        <div className="flex w-full max-w-[600px] flex-col gap-y-3 rounded-lg">
          <div className="flex items-center gap-x-1">
            <Image
              alt="Profile Picture"
              className="h-[60px] w-[60px] rounded-full bg-cover md:h-[80px] md:w-[80px] lg:h-[100px] lg:w-[100px]"
              priority
              src={profilePicture}
            />
          </div>

          <section className="w-full">
            <StatusPill />
            <h1 className="text-3xl font-bold">Danial Raza</h1>
            <SocialLinks />
          </section>
        </div>

        <Section title="About Me">
          <SubSection>
            {`Hey there! I'm Danial, a ${calculateAge()}-year-old student and software developer from Pakistan now living
            in Spain. I am always very interested in bleeding-edge technologies that push the boundaries of
            what's possible. Thank you for checking my website!`}
          </SubSection>
        </Section>

        <Section title="Hobbies">
          <SubSection>
            I usually like to watch movies or shows in my free time. A couple of my favorite movies would be{" "}
            <ExternalLink href="https://www.imdb.com/title/tt2194499/">About Time</ExternalLink> and{" "}
            <ExternalLink href="https://www.imdb.com/title/tt0172495/">Gladiator</ExternalLink> and a couple of my
            favorite shows would be{" "}
            <ExternalLink href="https://www.imdb.com/title/tt0460649/">How I Met Your Mother</ExternalLink> and{" "}
            <ExternalLink href="https://www.imdb.com/title/tt0098904/">Seinfeld</ExternalLink>.
          </SubSection>
          <SubSection>
            Not as much as I used to but I also like playing various video games, you can check out what games I&apos;ve
            been playing recently on my{" "}
            <ExternalLink href="https://steamcommunity.com/profiles/76561198981867119/">Steam Profile</ExternalLink>.
          </SubSection>
        </Section>

        <Section title="Frameworks & Technologies">
          <SubSection>
            I mainly work with <ExternalLink href="https://www.typescriptlang.org/">TypeScript</ExternalLink> using{" "}
            <ExternalLink href="https://react.dev/">React</ExternalLink> (
            <ExternalLink href="https://vitejs.dev/">Vite</ExternalLink> or{" "}
            <ExternalLink href="https://nextjs.org/">Next.js</ExternalLink>) for frontend and{" "}
            <ExternalLink href="https://nodejs.org/">Node.js</ExternalLink> using{" "}
            <ExternalLink href="https://expressjs.com/">Express</ExternalLink> for backend development. I&apos;ve also
            experimented with <ExternalLink href="https://www.java.com/en/">Java</ExternalLink> and a bit of{" "}
            <ExternalLink href="https://www.python.org/">Python</ExternalLink>. Currently, I&apos;m learning{" "}
            <ExternalLink href="https://www.rust-lang.org/">Rust</ExternalLink> and its unique concepts.
          </SubSection>
        </Section>
      </div>
    </main>
  )
}
