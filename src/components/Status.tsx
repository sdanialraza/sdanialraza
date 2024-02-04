"use client"

import { BsSpotify } from "react-icons/bs"
import { type LanyardData, useLanyard } from "react-use-lanyard"
import type { ReactNode } from "react"

import { DISCORD_USER_ID } from "@/util"
import ExternalLink from "@/components/ExternalLink"

const statusColors = {
  online: "bg-green-500",
  idle: "bg-yellow-500",
  dnd: "bg-red-500",
  offline: "bg-gray-500",
} as const

const statusMappings = {
  online: "Online",
  idle: "Idle",
  dnd: "Do Not Disturb",
  offline: "Offline",
} as const

type SpotifyStatusProps = {
  data: LanyardData["spotify"]
}

function SpotifyStatus({ data }: SpotifyStatusProps) {
  if (!data) return null

  const { artist, song, track_id } = data

  const spotifyUrl = `https://open.spotify.com/track/${track_id}`

  return (
    <>
      &mdash;
      <BsSpotify className="text-green-500" size={20} />
      <ExternalLink href={spotifyUrl} title={`${song} by ${artist}`}>
        {song}
      </ExternalLink>
    </>
  )
}

type Props = {
  children: ReactNode
  initialData: LanyardData
}

export default function Status({ children, initialData }: Props) {
  const { data } = useLanyard({ userId: DISCORD_USER_ID })

  const { discord_status, spotify } = data?.data ?? initialData

  const color = statusColors[discord_status]

  const status = statusMappings[discord_status]

  return (
    <>
      <span className={`h-3 w-3 rounded-full ${color}`} />
      <p className="text-left">{status}</p>
      &mdash;
      {children}
      <SpotifyStatus data={spotify} />
    </>
  )
}
