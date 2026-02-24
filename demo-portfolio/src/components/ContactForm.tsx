import { useState } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("handle submit clicked");

    const { name, email, message } = formData;
    
    if (!name || !email || !message) {
      toast.error('Please fill all the fields');
      return;
    }

    //Put your API here to submit the from
    //Here's a mock API call for you
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve('API call successful');
      }, 1000);
    })

    if (response) {
      toast.success('Form submitted successfully');
    } else {
      toast.error('Something went wrong. Please try again later.')
    };
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-section-inset mx-auto border-y border-neutral-100 py-10 my-6 px-4 dark:border-neutral-800"
    >
      <div className="mx-auto max-w-lg flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-medium tracking-tight text-neutral-600"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Enter your name"
            className="shadow-aceternity focus:ring-primary rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
          />

          <label
            htmlFor="email"
            className="text-sm font-medium tracking-tight text-neutral-600"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter your email"
            className="shadow-aceternity focus:ring-primary rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
          />

          <label
            htmlFor="message"
            className="text-sm font-medium tracking-tight text-neutral-600"
          >
            Message
          </label>
          <textarea
            rows={5}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="shadow-aceternity focus:ring-primary resize-none rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
            placeholder="Enter your message"
          />
        </div>
        <button
          type="submit"
          className="bg-primary cursor-pointer rounded-md px-4 py-2 text-white"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
