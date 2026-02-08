import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BlogLayout from "../components/BlogLayout";
import TableOfContents from "../components/TableofContents";

interface PostMeta {
  title: string;
  date: string;
  description?: string;
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
    return <div className="p-20 text-white">Loading...</div>;

  return (
    <BlogLayout>
      <div className="relative">
        <TableOfContents />
        
        <article className="prose dark:prose-invert max-w-none">
          <PostContent />
        </article>
      </div>
    </BlogLayout>
  );
};

export default BlogPost;
