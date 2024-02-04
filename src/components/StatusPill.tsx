import type { LanyardResponse } from "react-use-lanyard"

import { LANYARD_API_URL } from "@/util"
import Status from "@/components/Status"
import Time from "@/components/Time"

export default async function StatusPill() {
  const response = await fetch(LANYARD_API_URL, { cache: "no-store" })
  const { data }: LanyardResponse = await response.json()

  return (
    <aside className="flex items-center gap-x-2 rounded-xl text-sm font-semibold dark:text-gray-400">
      <Status initialData={data}>
        <Time />
      </Status>
    </aside>
  )
}
