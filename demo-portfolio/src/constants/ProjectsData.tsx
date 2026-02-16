export type Project = {
  title: string;
  src: string;
  href: string;
  description: string;
};

export const projects: Project[] = [
  {
    title: "Macbook Mockup",
    src: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/macbook-scroll.png",
    href: "#",
    description:
      "A mockup of a Mackbook that showcases the product and its features.",
  },
  {
    title: "Instant Feedback",
    src: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/wobble-card.png",
    href: "#",
    description:
      "An interactive feedback system that provides instant responses to user actions.",
  },
  {
    title: "Best Component",
    src: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/wavy-background.png",
    href: "#",
    description:
      "A stunning wavy background component designed to add depth and fluid motion to hero sections.",
  },
  {
    title: "Authentic Steps",
    src: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/pro/shaders.webp",
    href: "#",
    description:
      "A shader-based component that creates authentic visual patterns for modern web experiences.",
  },
];
