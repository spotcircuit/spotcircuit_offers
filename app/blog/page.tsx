import { getPosts, GhostPost } from '@/lib/ghost';
import BlogHeader from '@/components/BlogHeader';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 60;

export default async function BlogPage() {
    const posts: GhostPost[] = await getPosts();

    return (
        <div className="min-h-screen bg-black">
            <BlogHeader />
            <main className="pt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h1 className="text-4xl font-bold mb-8 text-white">Latest Posts</h1>
                    {!posts || posts.length === 0 ? (
                        <p className="text-gray-400">
                            No posts found. Check back soon!
                        </p>
                    ) : (
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {posts.map((post) => (
                                <article 
                                    key={post.id} 
                                    className="bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all"
                                >
                                    {post.feature_image && (
                                        <div className="relative h-48 w-full">
                                            <Image 
                                                src={post.feature_image} 
                                                alt={post.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <h2 className="text-xl font-semibold text-white mb-2">{post.title}</h2>
                                        <p className="text-gray-400 mb-4">{post.excerpt}</p>
                                        {post.tags && post.tags.length > 0 && (
                                            <div className="flex flex-wrap mb-4">
                                                {post.tags.map(tag => (
                                                    <Link
                                                        key={tag.id}
                                                        href={tag.url || `/tag/${tag.slug}`}
                                                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors mr-2 mb-2"
                                                        {...(tag.url ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                                    >
                                                        {tag.name}
                                                        {tag.url && (
                                                            <svg
                                                                className="w-4 h-4 ml-1"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                                />
                                                            </svg>
                                                        )}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                        <div className="flex items-center text-sm text-gray-500">
                                            <time dateTime={post.published_at}>
                                                {new Date(post.published_at).toLocaleDateString()}
                                            </time>
                                            {post.reading_time && (
                                                <span className="ml-3">{post.reading_time} min read</span>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
