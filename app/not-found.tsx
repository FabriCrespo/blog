import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <div className="container flex max-w-md flex-col items-center justify-center px-4 py-16 text-center">
        <h1 className="mb-2 text-7xl font-extrabold tracking-tight">
          <span className="text-gold">404</span>
        </h1>
        <h2 className="mb-8 text-3xl font-bold">Page Not Found</h2>
        <p className="mb-8 text-gray-400">The page you're looking for doesn't exist or has been moved.</p>
        <Button asChild className="bg-gold text-black hover:bg-gold/90">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  )
}

