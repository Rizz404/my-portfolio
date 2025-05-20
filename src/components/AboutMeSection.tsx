interface AboutMeSectionProps {
  id: string;
}

const AboutMeSection = ({ id }: AboutMeSectionProps) => {
  return (
    <section
      id={id}
      className="flex flex-col items-center max-w-5xl gap-10 px-4 mx-auto mt-20 md:flex-row md:items-start"
    >
      <div className="flex justify-center md:w-1/3 md:justify-start">
        <div className="p-1 overflow-hidden border-2 rounded w-60 h-60 bg-bg-element border-primary">
          <img
            src="https://i.pinimg.com/736x/a1/1b/07/a11b07f6d1022fb95d2d668cc77eee96.jpg"
            alt="Rizqiansyah Ramadhan"
            className="object-cover w-full h-full rounded"
            loading="lazy"
          />
        </div>
      </div>
      <div className="text-sm leading-relaxed md:w-2/3 md:text-base">
        <h2 className="mb-4 text-xl font-semibold text-center md:text-left">
          Tentang <strong className="miku-text-gradient">Saya</strong>
        </h2>

        <p className="mb-4 text-text-secondary">
          Mahasiswa Software Engineering yang sedang menempuh pendidikan di
          Global Institute Technology And Business dengan spesialisasi
          pengembangan backend. Saya memiliki pengalaman dalam membuat dan
          mengelola API menggunakan berbagai framework backend seperti Express,
          NestJS, Flask, dan Laravel.
        </p>

        <p className="mb-4 text-text-secondary">
          Terampil dalam manajemen database menggunakan MongoDB, MySQL,
          PostgreSQL, SQLite, dan Firebase. Memiliki pemahaman yang kuat tentang
          konsep dan alur kerja frontend untuk mengintegrasikan API secara
          efektif.
        </p>

        <div className="mt-6">
          <h3 className="mb-2 text-lg font-medium text-primary">
            Keterampilan Tambahan
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 text-xs font-medium rounded bg-bg-element">
              Kolaborasi
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded bg-bg-element">
              Komunikasi
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded bg-bg-element">
              Pemecahan Masalah
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded bg-bg-element">
              Manajemen Waktu
            </span>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="mb-2 text-lg font-medium text-primary">Bahasa</h3>
          <div className="flex gap-3">
            <span className="px-3 py-1 text-xs font-medium rounded bg-bg-element">
              Indonesia (Native)
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded bg-bg-element">
              Inggris (Intermediate)
            </span>
          </div>
        </div>

        <div className="mt-6 text-sm italic text-text-tertiary">
          "Selalu bersemangat untuk belajar dan berkontribusi pada proyek-proyek
          yang berdampak."
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
