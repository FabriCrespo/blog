import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getPostById, getRelatedPosts } from "@/lib/api"
import { formatDate } from "@/lib/utils"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { PostCard } from "@/components/post-card"


export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; 
  const post = await getPostById(id);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(id);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Post Header */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <Image
          src={post.coverImage || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
          <div className="mb-8 flex items-center justify-center space-x-4 text-sm">
            <span className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              {post.author}
            </span>
            <span className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              {formatDate(post.date)}
            </span>
          </div>
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">{post.title}</h1>
        </div>
      </div>

      {/* Post Content */}
      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="mb-8 inline-flex items-center text-gold hover:text-gold/80">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all posts
        </Link>

        <div className="mx-auto max-w-3xl">
          <div className="prose prose-invert prose-lg max-w-none">
            {post.content.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-gray-800 px-3 py-1 text-sm">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-8 text-3xl font-bold">Related Posts</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

