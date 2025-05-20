import { useLocalization } from "../../hooks/useLocalization";

interface ContactSectionProps {
  id: string;
}

const ContactSection = ({ id }: ContactSectionProps) => {
  const { t } = useLocalization();

  return (
    <section id={id} className="mt-20 mb-16">
      <div className="container">
        <h2 className="mb-6 text-xl font-semibold text-center">
          {t("contact.heading1")}{" "}
          <strong className="miku-text-gradient">
            {t("contact.heading2")}
          </strong>
        </h2>

        <div className="max-w-4xl mx-auto overflow-hidden rounded-md shadow-md bg-bg-element">
          <div className="p-8">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <div className="flex flex-col items-center w-full md:w-1/2 md:items-start">
                <h3 className="mb-6 text-xl font-semibold font-heading">
                  {t("contact.name")}
                </h3>

                <div className="w-full space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-text-inverted">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <p className="text-sm text-text-tertiary">
                        {t("contact.emailLabel")}
                      </p>
                      <p className="text-text-primary">{t("contact.email")}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-text-inverted">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div>
                      <p className="text-sm text-text-tertiary">
                        {t("contact.phoneLabel")}
                      </p>
                      <p className="text-text-primary">{t("contact.phone")}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-text-inverted">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <p className="text-sm text-text-tertiary">
                        {t("contact.locationLabel")}
                      </p>
                      <p className="text-text-primary">
                        {t("contact.location")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center w-full md:w-1/2 md:items-start">
                <div className="w-full p-6 rounded-lg bg-bg-alt">
                  <h4 className="mb-4 text-lg font-heading">
                    {t("contact.connectHeading")}
                  </h4>
                  <p className="mb-6 text-text-primary">
                    {t("contact.connectDescription")}
                  </p>

                  <div className="flex justify-center space-x-5 md:justify-start">
                    <a
                      href="https://github.com/rizz404"
                      className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-primary hover:bg-primary-hover text-text-inverted"
                      aria-label={t("contact.githubAriaLabel")}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/rizqiansyah-ramadhan-37b0b9313"
                      className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-primary hover:bg-primary-hover text-text-inverted"
                      aria-label={t("contact.linkedinAriaLabel")}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a
                      href="https://web.facebook.com/profile.php?id=61551041113414"
                      className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-primary hover:bg-primary-hover text-text-inverted"
                      aria-label={t("contact.facebookAriaLabel")}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook-f"></i>
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
