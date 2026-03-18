import Container from "../Container";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

const Navbar = () => {
  const navItems = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { scrollY } = useScroll();

  // const y = useTransform(scrollY, [0, 100], [0, 10]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <Container className="text-black dark:text-white">
      <motion.nav
        initial={false}
        animate={{
          // Logic: If mobile: 100%. If medium: scrolled ? 60% : 65%
          // width: scrolled ? "60%" : "65%",
          y: scrolled ? 15 : 8,
          boxShadow: scrolled ? "var(--shadow-aceternity)" : "none",
        }}
        transition={{
          duration: 0.3,
          ease: "linear",
        }}
        className="fixed top-0 left-1/2 z-50 flex w-full max-w-155 -translate-x-1/2 flex-col items-center justify-between rounded-3xl bg-[#f2f2f2] px-2 py-2 dark:bg-neutral-900 dark:text-white"
      >
        <div className="flex w-full shrink-0 items-center justify-between">
          <Link to="/" className="shrink-0">
            <img
              src="/me.jpg"
              alt="Avatar"
              className="h-10 w-10 rounded-full"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center min-[720px]:flex">
            {navItems.map((item, index) => (
              <Link
                className="relative px-2 py-1 text-sm"
                to={item.href}
                key={index}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                {hovered === index && (
                  <motion.span className="absolute inset-0 h-full w-full rounded-md bg-neutral-200 dark:bg-neutral-800" />
                )}
                <span className="relative z-10">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Sidebar Overlay */}
        {/* <AnimatePresence>
          {open && (
            <>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
                className="absolute inset-0 h-screen w-screen md:hidden -z-10"
              />

              
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="shadow-aceternity absolute top-0 right-0 -z-50 h-screen w-60 bg-white p-6 md:hidden dark:bg-neutral-900"
              >
                <div className="mt-16 flex flex-col gap-4">
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      className="relative px-2 py-1 text-sm"
                      to={item.href}
                      onClick={() => setOpen(false)}
                      onMouseEnter={() => setHovered(index)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {hovered === index && (
                        <motion.span className="absolute inset-0 h-full w-full rounded-md bg-neutral-200 dark:bg-neutral-800" />
                      )}
                      <span className="relative z-10">{item.title}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence> */}
      </motion.nav>
    </Container>
  );
};

export default Navbar;
