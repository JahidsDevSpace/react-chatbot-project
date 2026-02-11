import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BlogLayout from "../components/BlogLayout";
import TableOfContents from "../components/TableofContents";

interface PostMeta {
  title: string;
  date: string;
  description?: string;
  image: string;
}

interface MDXModule {
  default: React.ComponentType;
  meta: PostMeta;
}

const modules = import.meta.glob<MDXModule>("../content/*.mdx");

const BlogPost = () => {
  const { slug } = useParams();
  const [PostContent, setPostContent] = useState<React.ComponentType | null>(
    null,
  );
  const [meta, setMeta] = useState<PostMeta | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      setPostContent(null);
      setMeta(null);
      if (!slug) return;

      const path = `../content/${slug}.mdx`;
      const importer = modules[path];
      if (importer) {
        const content = await importer();
        setPostContent(() => content.default);
        setMeta(content.meta);
      }
    };
    loadPost();
  }, [slug]);

  if (!PostContent || !meta)
    return <div className="p-20 text-black dark:text-white text-center">Loading...</div>;

  return (
    <BlogLayout>
      <div className="relative">
        <TableOfContents />
        {meta?.image && (
          <img
            src={meta.image}
            className="mx-auto mb-15 aspect-video max-h-105 w-full max-w-2xl rounded-2xl border object-cover shadow-2xl"
            alt={meta.title}
          />
        )}

        <article className="prose dark:prose-invert max-w-none">
          <PostContent />
        </article>
      </div>
    </BlogLayout>
  );
};

export default BlogPost;
