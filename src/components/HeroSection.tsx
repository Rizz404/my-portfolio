const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-between gap-10 mt-10 md:flex-row md:items-start md:mt-20 md:gap-0">
      <div className="max-w-lg md:w-1/2">
        <h1 className="text-3xl font-semibold leading-tight md:text-4xl font-heading">
          Hello I'm <strong>Rizqiansyah Ramadhan.</strong>
          <br />
          Backend <strong>Developer</strong>
          <br />
          Based In <strong>Tangerang, Banten.</strong>
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-text-secondary md:text-base font-body">
          Mahasiswa Teknik Perangkat Lunak dengan spesialisasi pengembangan
          backend, berpengalaman dalam membangun dan mengelola API menggunakan
          Express, NestJS, Flask, dan Laravel, serta mahir dalam manajemen
          database seperti MongoDB, MySQL, dan PostgreSQL. Siap berkontribusi
          dalam proyek-proyek berdampak.
        </p>
        <div className="flex mt-6 space-x-4 text-lg text-primary">
          <a
            href="mailto:thenoblerizz@gmail.com"
            aria-label="Email"
            className="hover:text-primary-hover"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://github.com/rizz404"
            aria-label="GitHub"
            className="hover:text-primary-hover"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rizqiansyah-ramadhan-37b0b9313"
            aria-label="LinkedIn"
            className="hover:text-primary-hover"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://web.facebook.com/profile.php?id=61551041113414"
            aria-label="Facebook"
            className="hover:text-primary-hover"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/better_call_rizz"
            aria-label="Instagram"
            className="hover:text-primary-hover"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="flex justify-center md:w-1/2 md:justify-end">
        <img
          src="https://placehold.co/300x300/png?text=Illustration+of+coder+in+action"
          alt="Ilustrasi seorang backend developer dengan kode atau server"
          className="h-auto w-72"
          loading="lazy"
        />
      </div>
    </section>
  );
};
export default HeroSection;
