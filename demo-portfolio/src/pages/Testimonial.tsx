import Marquee from "react-fast-marquee";
import SectionHeading from "../components/SectionHeading";

const Testimonial = () => {
  const data = [
    {
      quote:
        "Jahid is so great with his work, our production was shut down within the first day itself. Highly recommended.",
      name: "Jeff Bezos",
      avatar: "/man-in-black-button-up-shirt.jpg",
    },
    {
      quote:
        "Working with Jahid was a game-changer for our cloud infrastructure. His attention to detail is unmatched.",
      name: "Satya Nadella",
      avatar: "/christopher-campbell.jpg",
    },
    {
      quote:
        "The speed at which he delivers high-quality code is incredible. He truly understands modern web architecture.",
      name: "Jensen Huang",
      avatar: "/jake-nackos.jpg",
    },
    {
      quote:
        "Jahid's ability to solve complex problems with simple, elegant solutions is what sets him apart from other engineers.",
      name: "Tim Cook",
      avatar: "/nicolas-horn.jpg",
    },
    {
      quote:
        "He didn't just build our app; he helped define our technical roadmap. A true partner in every sense.",
      name: "Michael Dell",
      avatar: "/closeup-photography-of-woman-smiling.jpg",
    },
  ];

  const TestimonialsCard = ({
    quote,
    name,
    avatar,
  }: {
    quote: string;
    name?: string;
    avatar?: string;
  }) => {
    return (
      <div className="shadow-aceternity mx-4 flex h-50 w-full max-w-60 flex-col justify-between rounded-xl p-4 transition duration-300 hover:shadow-md">
        <p className="text-sm text-neutral-700">{quote}</p>
        <div className="flex items-center gap-4">
          <img
            src={avatar}
            alt={name}
            className="size-6 rounded-full object-cover"
          />
          <p className="text-sm text-neutral-500">{name}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="shadow-section-inset my-4 border-y border-neutral-100 py-4 dark:border-neutral-800">
      <SectionHeading delay={0.5} className="mb-4">
        People love my work.
      </SectionHeading>
      <div className="flex mask-r-from-80% mask-l-from-90% px-4">
        <Marquee speed={30} pauseOnHover={true} className="py-4">
          {data.map((item, index) => (
            <TestimonialsCard key={index} {...item} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonial;
