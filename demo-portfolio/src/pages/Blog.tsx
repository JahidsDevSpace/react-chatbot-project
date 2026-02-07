import { useState, useEffect } from "react";

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
      setPosts(postList);
    };

    loadPosts();
  }, []);

  return (
    <div className="mx-auto max-w-4xl px-4">
      <h1 className="mb-10 text-4xl font-bold text-white">Latest Posts</h1>

      <div className="space-y-20">
        {posts.map(({ slug, Component }) => (
          <article
            key={slug}
            className="prose dark:prose-invert max-w-none border-b border-zinc-800 pb-10"
          >
            {/* This renders the actual MDX content */}
            <Component />
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
