import { BsDiscord, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs"
import { MdEmail } from "react-icons/md"

import { REPOSITORY_LINK, SOCIAL_LINKS } from "@/util"
import ExternalLink from "@/components/ExternalLink"

const { Discord, Email, GitHub, Linkedin, Twitter } = SOCIAL_LINKS

export default function Footer() {
  return (
    <footer className="flex h-[70px] w-full items-center justify-center border-t border-gray-200 px-5 xl:px-0 dark:border-gray-200/5">
      <div className="flex w-full max-w-[850px] items-center justify-between text-sm text-gray-700 dark:text-gray-400">
        <section className="flex">
          <h1 className="text-md font-semibold">
            Danial Raza &mdash; <ExternalLink href={REPOSITORY_LINK}>Source Code</ExternalLink>
          </h1>
        </section>

        <section className="flex space-x-2 text-lg">
          <ExternalLink href={Discord} title="Discord">
            <BsDiscord size={24} />
          </ExternalLink>
          <ExternalLink href={Email} title="Email">
            <MdEmail size={24} />
          </ExternalLink>
          <ExternalLink href={GitHub} title="GitHub">
            <BsGithub size={24} />
          </ExternalLink>
          <ExternalLink href={Linkedin} title="LinkedIn">
            <BsLinkedin size={24} />
          </ExternalLink>
          <ExternalLink href={Twitter} title="Twitter">
            <BsTwitter size={24} />
          </ExternalLink>
        </section>
      </div>
    </footer>
  )
}
