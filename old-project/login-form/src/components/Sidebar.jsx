import { useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarItems = [
    { id: "home", link: "/", label: "Home", icon: "🏠" },
    { id: "card", link: "/card", label: "UI Components", icon: "🎨" },
    { id: "settings", link: "/settings", label: "Settings", icon: "⚙️" },
    { id: "auth", link: "/login", label: "Authentication", icon: "🔐" },
  ];

  const sidebarVariant = {
    open: { width: "16rem" },
    closed: { width: "4.5rem" },
  };

  const parentVariants = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      }
    },
  }

  const childVariants = {
    open: {opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: -10,
    }
  }

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      exit="closed"
      transition={{ duration: 0.3 }}
      className="sidebar"
    >
      <motion.nav variants={sidebarVariant} className="sidebar-content">
        <div className="sidebar-heading-container">
          <h2 className={!isOpen ? "sidebar-header-sr-only" : "sidebar-header"}>
            {isOpen ? "Menu" : ""}
          </h2>
          <button
            onClick={toggleSidebar}
            className="sidebar-toggle-btn"
            aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
            {isOpen ? <IconChevronLeft /> : <IconChevronRight />}
          </button>
        </div>
        <div className="sidebar-links">
          <nav className="sidebar-nav">
            <motion.ul variants={parentVariants} className="sidebar-list">
              {sidebarItems.map((item) => (
                <motion.li
                  variants={childVariants}
                  key={item.id}
                >
                  <Link to={item.link} className="sidebar-link">
                    {item.icon}
                    {isOpen && item.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        </div>
      </motion.nav>
    </motion.div>
  );
};

export default Sidebar;
