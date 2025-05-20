interface ContactSectionProps {
  id: string;
}

const ContactSection = ({ id }: ContactSectionProps) => {
  return (
    <section id={id} className="mt-20 mb-16">
      <div className="container">
        <h2 className="mb-6 text-xl font-semibold text-center">
          Contact <strong className="miku-text-gradient">Me</strong>
        </h2>

        <div className="max-w-4xl mx-auto overflow-hidden rounded-md shadow-md bg-bg-element">
          <div className="p-8">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <div className="flex flex-col items-center w-full md:w-1/2 md:items-start">
                <h3 className="mb-6 text-xl font-semibold font-heading">
                  Rizqiansyah Ramadhan
                </h3>

                <div className="w-full space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-text-inverted">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <p className="text-sm text-text-tertiary">Email</p>
                      <p className="text-text-primary">
                        thenoblerizz@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-text-inverted">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div>
                      <p className="text-sm text-text-tertiary">Phone</p>
                      <p className="text-text-primary">+62 7778206856</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-text-inverted">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <p className="text-sm text-text-tertiary">Location</p>
                      <p className="text-text-primary">Tangerang, Banten</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center w-full md:w-1/2 md:items-start">
                <div className="w-full p-6 rounded-lg bg-bg-alt">
                  <h4 className="mb-4 text-lg font-heading">Connect With Me</h4>
                  <p className="mb-6 text-text-primary">
                    Feel free to reach out if you're looking for a backend
                    developer or want to discuss a project.
                  </p>

                  <div className="flex justify-center space-x-5 md:justify-start">
                    <a
                      href="#"
                      className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-primary hover:bg-primary-hover text-text-inverted"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-primary hover:bg-primary-hover text-text-inverted"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-primary hover:bg-primary-hover text-text-inverted"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
