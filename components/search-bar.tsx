"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"

interface SearchBarProps {
  initialSearch?: string
}

export function SearchBar({ initialSearch = "" }: SearchBarProps) {
  const [search, setSearch] = useState(initialSearch)
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    if (search) {
      router.push(`/?search=${encodeURIComponent(search)}`)
    } else {
      router.push("/")
    }
  }

  const clearSearch = () => {
    setSearch("")
    router.push("/")
  }

  return (
    <form onSubmit={handleSearch} className="relative">
      <Input
        type="text"
        placeholder="Search for posts, artists, or topics..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="h-12 bg-gray-900 pl-12 pr-12 text-white placeholder:text-gray-400"
      />
      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

      {search && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-12 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
          onClick={clearSearch}
        >
          <X className="h-5 w-5" />
        </Button>
      )}

      <Button
        type="submit"
        className="absolute right-0 top-0 h-full rounded-l-none bg-gold text-black hover:bg-gold/90"
      >
        Search
      </Button>
    </form>
  )
}

