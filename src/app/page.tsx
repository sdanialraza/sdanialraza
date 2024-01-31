import Image from "next/image"

import { calculateAge } from "@/util"
import ExternalLink from "@/components/ExternalLink"
import profilePicture from "../../public/logo.png"
import Status from "@/components/Status"

export default function Page() {
  return (
    <main className="flex min-h-full w-full grow content-stretch p-2 md:p-5">
      <div className="flex grow flex-col items-center justify-center space-y-10 overflow-hidden bg-fixed bg-center p-5 md:p-0">
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
            <aside className="flex items-center gap-x-1 rounded-xl text-sm dark:text-gray-400">
              <Status />
            </aside>
            <h1 className="text-3xl font-bold">Danial Raza</h1>
          </section>
        </div>

        <section className="flex w-full max-w-[600px] flex-col gap-y-3">
          <h1 className="m-0 flex w-full max-w-[600px] items-center gap-x-3 font-semibold">
            About Me
            <div className="h-[2px] grow rounded-full bg-black/20 dark:bg-white/20" />
          </h1>
          <span className="w-full max-w-[600px] text-justify text-gray-700 dark:text-light-gray">
            {`Hey there! I'm Danial, a ${calculateAge()}-year-old student and software developer from Pakistan now living
            in Spain. I am always very interested in bleeding-edge technologies that push the boundaries of
            what's possible. Thank you for checking my website!`}
          </span>
        </section>

        <section className="flex w-full max-w-[600px] flex-col gap-y-3">
          <h1 className="m-0 flex w-full max-w-[600px] items-center gap-x-3 font-semibold">
            Hobbies
            <div className="h-[2px] grow rounded-full bg-black/20 dark:bg-white/20" />
          </h1>
          <span className="w-full max-w-[600px] text-justify text-gray-700 dark:text-light-gray">
            I usually like to watch movies or shows in my free time. A couple of my favorite movies would be{" "}
            <ExternalLink href="https://www.imdb.com/title/tt2194499/">About Time</ExternalLink> and{" "}
            <ExternalLink href="https://www.imdb.com/title/tt0172495/">Gladiator</ExternalLink> and a couple of my
            favorite shows would be{" "}
            <ExternalLink href="https://www.imdb.com/title/tt3032476/">Better Call Saul</ExternalLink> and{" "}
            <ExternalLink href="https://www.imdb.com/title/tt0460649/">How I Met Your Mother</ExternalLink>.
          </span>
          <span className="w-full max-w-[600px] text-justify text-gray-700 dark:text-light-gray">
            Not as much as I used to but I also like playing various video games, you can check out what games I&apos;ve
            been playing recently on my{" "}
            <ExternalLink href="https://steamcommunity.com/profiles/76561198981867119/">Steam Profile</ExternalLink>.
          </span>
        </section>

        <section className="flex w-full max-w-[600px] flex-col gap-y-3">
          <h1 className="m-0 flex w-full max-w-[600px] items-center gap-x-3 font-semibold">
            Technologies & Frameworks
            <div className="h-[2px] grow rounded-full bg-black/20 dark:bg-white/20" />
          </h1>
          <span className="w-full max-w-[600px] text-justify text-gray-700 dark:text-light-gray">
            I primarily work with <ExternalLink href="https://www.typescriptlang.org/">TypeScript</ExternalLink>,{" "}
            <ExternalLink href="https://reactjs.org/">React</ExternalLink> (with TSX) and I&apos;ve recently started
            learning <ExternalLink href="https://www.java.com/">Java</ExternalLink> and{" "}
            <ExternalLink href="https://reactnative.dev/">React Native</ExternalLink>.
          </span>
        </section>
      </div>
    </main>
  )
}
