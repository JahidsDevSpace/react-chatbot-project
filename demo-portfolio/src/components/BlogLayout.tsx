import React from "react";
import { Link } from "react-router-dom";
import ArrowLeft from "../../public/arrow-left.png";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-zinc-800">
      <div className="mx-auto max-w-3xl px-6 py-5">
        {/* Navigation Header */}
        <nav className="mb-6">
          <Link
            to="/"
            className="group flex items-center gap-2 text-zinc-400 transition-colors hover:text-white"
          >
            <img
              src={ArrowLeft}
              alt="arrowleft"
              height={18}
              width={18}
              className="bg-white transition-transform group-hover:-translate-x-1"
            />
            <span>Back to Home</span>
          </Link>
        </nav>

        {/* The Blog Content */}
        <article className="prose prose-invert prose-zinc prose-headings:font-bold prose-h1:text-4xl prose-p:text-zinc-300 prose-a:text-blue-400 hover:prose-a:text-blue-300 max-w-none">
          {children}
        </article>
      </div>
    </div>
  );
};

export default BlogLayout;
