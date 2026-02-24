import Blogs from "../components/Blogs";
import Heading from "../components/Heading";

const BlogPage = ({ limit }: { limit?: number }) => {
  return (
    <div className="mx-auto mb-5 max-w-4xl">
      <header className="mb-2">
        <Heading>Blogs</Heading>
      </header>

      <Blogs limit={limit} />
    </div>
  );
};

export default BlogPage;
