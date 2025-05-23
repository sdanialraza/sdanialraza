import Image from "next/image";
import ExternalLink from "@/components/ExternalLink";
import Section, { SubSection } from "@/components/Section";
import SocialLinks from "@/components/SocialLinks";
import StatusPill from "@/components/StatusPill";
import { calculateAge } from "@/util";
import profilePicture from "../../public/logo.png";

export default function Home() {
  return (
    <main className="flex h-full min-h-screen flex-col items-center">
      <div className="flex w-full grow content-stretch p-2 md:p-5">
        <div className="flex grow flex-col items-center justify-center space-y-8 overflow-hidden bg-fixed bg-center p-5 md:p-0">
          <div className="flex max-w-[600px] flex-col gap-y-3 rounded-lg">
            <div className="flex items-center gap-x-1">
              <Image
                alt="Profile Picture"
                className="h-[60px] w-[60px] rounded-full bg-cover md:h-[80px] md:w-[80px] lg:h-[100px] lg:w-[100px]"
                priority
                src={profilePicture}
              />
            </div>

            <section className="w-full">
              <h1 id="name" className="text-4xl font-bold">
                Hi, I'm <span>Danial</span>!
              </h1>
              <StatusPill />
              <SocialLinks />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
