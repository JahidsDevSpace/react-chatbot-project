import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// 1. Define the shape of your MDX Metadata
interface PostMeta {
  title: string;
  date: string;
  description?: string;
}

// 2. Define the shape of the imported MDX module
interface MDXModule {
  default: React.ComponentType;
  meta: PostMeta;
}

// 3. Define the Post object used in state
interface Post {
  slug: string;
  Component: React.ComponentType;
  meta: PostMeta;
}

// This grabs all mdx files in the content folder
const modules = import.meta.glob<MDXModule>("../content/*.mdx");

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const postList = await Promise.all(
        Object.keys(modules).map(async (path) => {
          const content = await modules[path]();
          return {
            slug: path.replace("../content/", "").replace(".mdx", ""),
            Component: content.default,
            // You can add metadata here if you use frontmatter
            meta: content.meta,
          };
        }),
      );
      setPosts(
        postList.sort(
          (a, b) =>
            new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime(),
        ),
      );
    };

    loadPosts();
  }, []);

  return (
    <div className="mx-auto max-w-4xl px-4">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-white">Blogs</h1>
        <p className="mt-2 text-lg text-zinc-400">
          Writing about web dev, design, and life.
        </p>
      </header>

      <div className="space-y-10">
        {posts.map(({ slug, meta }) => (
          <Link
            to={`/blog/${slug}`}
            key={slug}
            className="group block rounded-2xl border border-zinc-800 p-5 transition-all hover:bg-zinc-900/50"
          >
            <h2 className="text-xl font-semibold text-white transition-colors group-hover:text-blue-400">
              {meta.title}
            </h2>
            <p className="mt-2 line-clamp-2 text-sm text-zinc-400">
              {meta.description}
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
              <span>{meta.date}</span>
              <span>•</span>
              <span className="text-blue-400 opacity-0 transition-opacity group-hover:opacity-100">
                Read more →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
