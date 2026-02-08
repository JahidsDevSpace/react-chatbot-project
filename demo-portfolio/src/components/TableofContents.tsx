import { useEffect, useState } from "react";

const TableOfContents = () => {
  const [headings, setHeadings] = useState<
    { id: string; text: string; level: number }[]
  >([]);

  useEffect(() => {
    // Look for h2 and h3 tags inside the article
    const elements = Array.from(
      document.querySelectorAll("article h2, article h3"),
    )
      .map((elem) => ({
        id: elem.id,
        text: elem.textContent || "",
        level: Number(elem.tagName.substring(1)),
      }))
      .filter((item) => item.id); // Only include those with IDs

      setHeadings(elements);
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="fixed top-32 left-[calc(50%+24rem)] hidden w-64 xl:block">
      <h4 className="mb-4 text-xs font-bold tracking-widest text-zinc-500 uppercase">
        On this page
      </h4>
      <ul className="space-y-3 text-sm">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ paddingLeft: `${(heading.level - 2) * 1}rem` }}
          >
            <a
              href={`#${heading.id}`}
              className="text-zinc-400 transition-colors hover:text-blue-400"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
