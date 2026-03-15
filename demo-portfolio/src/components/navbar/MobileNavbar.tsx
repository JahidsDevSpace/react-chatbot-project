import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import Container from "../Container";
import IconMenu from "/menu-2.svg";
import IconX from "/x.svg";

const MobileNavbar = () => {
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
  const [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { scrollY } = useScroll();
  // Detect screen size for Framer Motion logic
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 720);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <Container className="text-black dark:text-white">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 h-screen w-screen backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>
      
      <motion.nav
        initial={false}
        animate={{
          height: isMobile && open ? "auto" : "56px",
          y: isMobile && open ? 20 : 10,
          boxShadow: scrolled || open ? "var(--shadow-aceternity)" : "none",
        }}
        transition={{ duration: 0.3, ease: "linear" }}
        className="fixed top-0 left-1/2 z-50 flex w-[calc(100vw-6rem)] max-w-[calc(100vw-6rem)] -translate-x-1/2 flex-col items-center justify-between rounded-3xl bg-[#f2f2f2] px-2 py-2 md:hidden dark:bg-neutral-900"
      >
        <div className="flex w-full shrink-0 items-center justify-between">
          <Link to="/" className="shrink-0">
            <img
              src="/me.jpg"
              height={100}
              width={100}
              alt="Avatar"
              className="h-10 w-10 rounded-full"
              onClick={() => setOpen(false)}
            />
          </Link>

          {/* Mobile Toggle */}
          <div className="flex items-center justify-center min-[720px]:hidden">
            <button
              className="cursor-pointer p-2"
              onClick={() => setOpen(!open)}
            >
              <motion.img
                animate={{ rotate: open ? 90 : 0 }}
                src={open ? IconX : IconMenu}
                alt="Toggle Menu"
              />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "linear" }}
              className="flex w-full flex-col px-3 pb-3 md:hidden"
            >
              <div className="my-2 h-px w-full bg-neutral-200 dark:bg-neutral-800" />
              <div className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <Link
                    className="relative px-3 py-2 text-sm"
                    key={index}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {hovered === index && (
                      <motion.span className="absolute inset-0 h-full w-full rounded-md bg-neutral-200 dark:bg-neutral-800"></motion.span>
                    )}
                    <span className="relative z-10">{item.title}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </Container>
  );
};

export default MobileNavbar;
