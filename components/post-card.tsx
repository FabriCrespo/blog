import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import type { Post } from "@/lib/types"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Calendar, User } from "lucide-react"

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="overflow-hidden border-gray-800 bg-gray-900 transition-all hover:border-gold/50 hover:shadow-lg hover:shadow-gold/10">
      <div className="relative aspect-video">
        <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
      </div>
      <CardContent className="p-4">
        <div className="mb-2 flex items-center justify-between text-xs text-white">
          <span className="flex items-center">
            <User className="mr-1 h-3 w-3" />
            {post.author}
          </span>
          <span className="flex items-center">
            <Calendar className="mr-1 h-3 w-3" />
            {formatDate(post.date)}
          </span>
        </div>
        <Link href={`/posts/${post.id}`}>
          <h3 className="mb-2 text-white line-clamp-2 text-xl font-bold hover:text-gold">{post.title}</h3>
        </Link>
        <p className="line-clamp-3 text-sm text-gray-300">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 border-t border-gray-800 p-4">
        {post.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="rounded-full bg-gold px-2 py-1 text-xs">
            #{tag}
          </span>
        ))}
      </CardFooter>
    </Card>
  )
}

