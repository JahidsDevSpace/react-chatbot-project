import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
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

const Blog = ({ limit }: { limit?: number }) => {
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
    <div className="mx-auto max-w-4xl">
      <header className="mb-12">
        <Heading>Blogs</Heading>
        <SubHeading>Writing about web dev, design, and life.</SubHeading>
      </header>

      <div className="space-y-5">
        {posts.slice(0, limit).map(({ slug, meta }) => (
          <Link
            to={`/blog/${slug}`}
            key={slug}
            className="group block rounded-2xl border border-zinc-800 p-5 transition-all hover:bg-zinc-300/50"
          >
            <h2 className="text-xl font-semibold text-neutral-800 transition-colors group-hover:text-blue-400 dark:text-neutral-200">
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
