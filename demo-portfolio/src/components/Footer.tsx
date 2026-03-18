import { Link } from "react-router-dom";
import IconBrandX from '/brand-x.svg';
import IconBrandGithub from '/brand-github.svg';
import IconBrandLinkedIn from '/brand-linkedin.svg';
import Container from "./Container";

const Footer = () => {
  const footerItems = [
    {
      href: '#',
      icon: IconBrandX,
      alt: 'X'
    },
    {
      href: 'https://github.com/JahidsDevSpace',
      icon: IconBrandGithub,
      alt: 'Github'
    },
    {
      href: 'https://www.linkedin.com/in/mdjahidhasan24/',
      icon: IconBrandLinkedIn,
      alt: 'LinkedIn'
    }
  ]

  return (
    <Container className="flex justify-between border-t border-neutral-100 py-3 px-10">
      <p className="text-xs text-neutral-500">Built with Jahid Hasan</p>
      <div className="flex items-center justify-center gap-4">
        {footerItems.map((item, index) => {
          return (
            <Link to={item.href} key={index} target="blank">
              <img
                src={item.icon}
                alt={item.alt}
                className="size-4 text-neutral-500 hover:text-neutral-700"
              />
            </Link>
          );
        })}
      </div>
    </Container>
  );
}

export default Footer