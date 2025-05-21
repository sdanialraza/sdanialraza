import type { ReactNode } from "react";
import { FaCode, FaDiscord, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ExternalLink from "@/components/ExternalLink";
import { REPOSITORY_LINK, SOCIAL_LINKS } from "@/util";

const { Discord, Email, GitHub, Linkedin, Twitter } = SOCIAL_LINKS;

type Props = {
  readonly iconSize?: number;
};

export default function SocialLinks({ iconSize = 20 }: Props) {
  return (
    <section className="mt-4 flex w-full items-center justify-between">
      <div className="flex justify-center space-x-2 self-start">
        <SocialLinkButton href={Discord} icon={<FaDiscord size={iconSize} />} title="Discord" />
        <SocialLinkButton href={Email} icon={<MdEmail size={iconSize} />} title="Email" />
        <SocialLinkButton href={GitHub} icon={<FaGithub size={iconSize} />} title="GitHub" />
        <SocialLinkButton href={Linkedin} icon={<FaLinkedin size={iconSize} />} title="LinkedIn" />
        <SocialLinkButton href={Twitter} icon={<FaTwitter size={iconSize} />} title="Twitter" />
      </div>

      <div className="flex self-end">
        <SocialLinkButton href={REPOSITORY_LINK} icon={<FaCode size={iconSize} />} title="Source Code" />
      </div>
    </section>
  );
}

type SocialLinkButtonProps = {
  readonly href: string;
  readonly icon: ReactNode;
  readonly title: string;
};

export function SocialLinkButton({ href, icon, title }: SocialLinkButtonProps) {
  return (
    <ExternalLink
      className="flex items-center gap-x-2 rounded-xl bg-gray-200/60 p-2 font-semibold dark:bg-white/10"
      href={href}
      title={title}
    >
      {icon}
    </ExternalLink>
  );
}
