"use client"

import { BsSpotify } from "react-icons/bs"
import { HiOutlineClock } from "react-icons/hi"
import { LanyardData, useLanyard } from "react-use-lanyard"
import { useEffect, useState } from "react"

import { DISCORD_USER_ID, TIME_FORMAT_OPTIONS } from "@/util"
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

function displaySpotifyStatus(data: LanyardData | undefined) {
  if (!data?.spotify) return null

  const { artist, song, track_id } = data.spotify

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

export default function Status() {
  const { data, isLoading } = useLanyard({ userId: DISCORD_USER_ID })
  const [time, setTime] = useState("--:-- --")

  useEffect(() => {
    setTime(new Date().toLocaleString("en-US", TIME_FORMAT_OPTIONS))
    const interval = setInterval(() => setTime(new Date().toLocaleString("en-US", TIME_FORMAT_OPTIONS)), 5_000)
    return () => clearInterval(interval)
  }, [])

  const color = isLoading ? "bg-gray-500" : statusColors[data?.data.discord_status ?? "offline"]

  const status = data?.data.discord_status

  return (
    <aside className="flex flex-col gap-2 rounded-xl dark:text-gray-400">
      <aside className="flex items-center gap-2 text-sm font-semibold">
        <div className={`h-3 w-3 rounded-full ${color}`} />
        <p className="text-left">{status ? statusMappings[status] : "Loading..."}</p>
        &mdash;
        <HiOutlineClock size={20} title="My Local Time" />
        <span>{time}</span>
        {displaySpotifyStatus(data?.data)}
      </aside>
    </aside>
  )
}
