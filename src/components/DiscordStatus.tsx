"use client"

import { useLanyard } from "react-use-lanyard"

import { DISCORD_USER_ID } from "@/util"

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

export default function DiscordStatus() {
  const { data, isLoading } = useLanyard({ userId: DISCORD_USER_ID })

  const color = isLoading ? "bg-gray-500" : statusColors[data?.data.discord_status ?? "offline"]

  const status = data?.data.discord_status

  return (
    <aside className="flex items-center gap-2 font-semibold">
      <div className={`h-3 w-3 rounded-full ${color}`} />
      <p className="text-left">{status ? statusMappings[status] : "Loading..."}</p>
    </aside>
  )
}
