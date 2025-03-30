import Image from "next/image"
import { getPosts } from "@/lib/api"
import { SearchBar } from "@/components/search-bar"
import { PostGrid } from "@/components/post-grid"
import { Pagination } from "@/components/pagination"

export default async function Home({
  searchParams: promiseSearchParams,
}: {
  searchParams: Promise<{ page?: string; search?: string }>;
}) {
  const searchParams = await promiseSearchParams;
  const page = Number(searchParams.page) || 1
  const search = searchParams.search || ""
  const { posts, totalPages } = await getPosts({ page, search })

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Young Money Background */}
      <section className="relative h-[50vh] min-h-[400px] w-full">
        <Image
          src="https://cdn.aarp.net/content/dam/aarpe/en/home/entertainment/music/info-2023/celebrating-50-years-of-hip-hop/_jcr_content/root/container_main/container_body_main/container_body1/container_body_cf/container_image/articlecontentfragment/cfimage.coreimg.50.932.jpeg/content/dam/aarp/entertainment/music/2023/07/1140-collage-raphiphop.jpg"
          alt="Young Money background"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight md:text-7xl">
            <span className="text-gold">RAP</span>BLOG
          </h1>
          <p className="max-w-2xl text-xl text-gray-300">
            The ultimate destination for hip-hop culture, music, and lifestyle
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <SearchBar initialSearch={search} />
        </div>

        {posts.length > 0 ? (
          <>
            <PostGrid posts={posts} />
            <div className="mt-12">
              <Pagination currentPage={page} totalPages={totalPages} />
            </div>
          </>
        ) : (
          <div className="flex h-40 flex-col items-center justify-center rounded-lg border border-gray-800 bg-gray-900">
            <p className="text-xl font-medium">No posts found</p>
            <p className="text-gray-400">Try a different search term</p>
          </div>
        )}
      </section>
    </div>
  )
}

