const ProjectsSection = () => {
  return (
    <section className="mt-20 max-w-5xl mx-auto px-4">
      <h2 className="text-white text-xl font-semibold mb-6">
        My <strong>Projects</strong>
      </h2>
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row md:space-x-8 gap-6">
          <img
            src="https://placehold.co/300x180/png?text=Crypto+Screener+Application+Screenshot"
            alt="Screenshot of Crypto Screener Application with colorful UI"
            className="w-full md:w-1/2 h-auto rounded"
            loading="lazy"
          />
          <div className="md:w-1/2 text-gray-300">
            <h3 className="text-white font-semibold text-lg mb-2">01</h3>
            <h4 className="text-white font-semibold text-lg mb-2">
              Crypto Screener Application
            </h4>
            <p className="text-sm leading-relaxed">
              A web application that allows users to track and analyze
              cryptocurrency prices in real-time. Features include filtering,
              sorting, and detailed coin information.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-8 gap-6">
          <div className="md:w-1/2 text-gray-300 order-2 md:order-1">
            <h3 className="text-white font-semibold text-lg mb-2">02</h3>
            <h4 className="text-white font-semibold text-lg mb-2">
              E-commerce (Apparel) Website Template
            </h4>
            <p className="text-sm leading-relaxed">
              A modern and responsive e-commerce template designed for apparel
              stores. Includes product listings, shopping cart, and checkout
              pages.
            </p>
          </div>
          <img
            src="https://placehold.co/300x180/png?text=E-commerce+Apparel+Website+Template+Screenshot"
            alt="Screenshot of E-commerce Apparel Website Template with product grid"
            className="w-full md:w-1/2 h-auto rounded order-1 md:order-2"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col md:flex-row md:space-x-8 gap-6">
          <img
            src="https://placehold.co/300x180/png?text=Blog+Website+Template+Screenshot"
            alt="Screenshot of Blog Website Template with colorful cards"
            className="w-full md:w-1/2 h-auto rounded"
            loading="lazy"
          />
          <div className="md:w-1/2 text-gray-300">
            <h3 className="text-white font-semibold text-lg mb-2">03</h3>
            <h4 className="text-white font-semibold text-lg mb-2">
              Blog Website Template
            </h4>
            <p className="text-sm leading-relaxed">
              A clean and minimal blog template designed for writers and content
              creators. Features include post previews, categories, and
              responsive design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;
