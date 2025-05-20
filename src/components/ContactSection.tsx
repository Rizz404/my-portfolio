const ContactSection = () => {
  return (
    <section className="mt-20 max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
      <form className="flex flex-col w-full md:w-1/2 space-y-4 text-black">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <textarea
          rows={4}
          placeholder="Your Message"
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black resize-none"
        ></textarea>
        <button
          type="submit"
          className="bg-black text-white font-semibold py-3 rounded hover:bg-gray-900 transition"
        >
          Get in Touch
        </button>
      </form>
      <div className="flex flex-col space-y-4 text-white w-full md:w-1/2 max-w-sm">
        <h3 className="text-lg font-semibold">
          Let's <strong>Talk</strong> for <br />
          Something special
        </h3>
        <p className="text-sm">
          Feel free to reach out for collaborations or just a friendly hello.
        </p>
        <p className="text-sm font-semibold">youremail@domain.com</p>
        <p className="text-sm font-semibold">+123 456 7890</p>
        <div className="flex space-x-4 text-white text-xl">
          <a href="#" aria-label="Facebook" className="hover:text-gray-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
