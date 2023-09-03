"use client"

import { HiOutlineClock } from "react-icons/hi"
import { useEffect, useState } from "react"

import { TIME_FORMAT_OPTIONS } from "@/util"

export default function CurrentTime() {
  const [time, setTime] = useState("--:-- --")

  useEffect(() => {
    setTime(new Date().toLocaleString("en-US", TIME_FORMAT_OPTIONS))
    const interval = setInterval(() => setTime(new Date().toLocaleString("en-US", TIME_FORMAT_OPTIONS)), 5_000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <HiOutlineClock size={20} title="My Local Time" />
      <span className="font-medium">
        <span>{time}</span>
      </span>
    </>
  )
}
