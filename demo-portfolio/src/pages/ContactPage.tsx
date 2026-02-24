import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Container from "../components/Container";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-start">
      <Container className="min-h-screen md:pb-10">
        <Heading>Contact Me</Heading>
        <SubHeading>
          I am open to freelancing offers. Reach out to me to inquire more abut
          my work.
        </SubHeading>
        <ContactForm />
      </Container>
    </div>
  );
};

export default ContactPage;
