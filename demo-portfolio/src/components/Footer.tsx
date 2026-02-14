import { Link } from "react-router-dom";
import IconBrandX from '/brand-x.svg';
import IconBrandGithub from '/brand-github.svg';
import IconBrandLinkedIn from '/brand-linkedin.svg';
import Container from "./Container";

const Footer = () => {
  return (
    <Container className="flex justify-between border-t border-neutral-100 p-3">
      <p className="text-xs text-neutral-500">Built with Jahid Hasan</p>
      <div className="flex items-center justify-center gap-4">
        <Link to="#" target="blank">
          <img
            src={IconBrandX}
            alt="X"
            className="size-4 text-neutral-500 hover:text-neutral-700"
          />
        </Link>
        <Link to="https://github.com/JahidsDevSpace" target="blank">
          <img
            src={IconBrandGithub}
            alt="Github"
            className="size-4 text-neutral-500 hover:text-neutral-700"
          />
        </Link>
        <Link to="https://www.linkedin.com/in/mdjahidhasan24/" target='_blank'>
          <img
            src={IconBrandLinkedIn}
            alt="LinkedIn"
            className="size-4 text-neutral-500 hover:text-neutral-700"
          />
        </Link>
      </div>
    </Container>
  );
}

export default Footer