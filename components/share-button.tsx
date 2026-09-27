"use client"

import { useState } from "react"
import { Share2, Check } from "lucide-react"

export function ShareButton() {
  const [copied, setCopied] = useState(false)

  async function handleShare() {
    const url = window.location.href
    const title = document.title

    // Method 1: Open the native share menu, if available
    if (navigator.share) {
      try {
        await navigator.share({ title, url })
        return
      } catch (error) {
        // The user closed the share menu. Stop the function.
        return
      }
    }

    // Method 2: Copy the link, if the share menu is not available
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error("Copy failed", error)
    }
  }

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black"
    >
      {copied ? (
        <>
          <Check className="h-4 w-4" />
          Copied
        </>
      ) : (
        <>
          <Share2 className="h-4 w-4" />
          Share
        </>
      )}
    </button>
  )
}