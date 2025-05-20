const AboutMeSection = () => {
  return (
    <section className="mt-20 max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 px-4">
      <div className="md:w-1/3 flex justify-center md:justify-start">
        <div className="w-60 h-60 bg-bg-element rounded overflow-hidden border-2 border-primary p-1">
          <img
            src="/api/placeholder/250/250"
            alt="Rizqiansyah Ramadhan"
            className="w-full h-full object-cover rounded"
            loading="lazy"
          />
        </div>
      </div>
      <div className="md:w-2/3 text-sm md:text-base leading-relaxed">
        <h2 className="font-semibold text-xl mb-4 text-center md:text-left">
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
          <h3 className="font-medium text-lg mb-2 text-primary">
            Keterampilan Tambahan
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-bg-element rounded text-xs font-medium">
              Kolaborasi
            </span>
            <span className="px-3 py-1 bg-bg-element rounded text-xs font-medium">
              Komunikasi
            </span>
            <span className="px-3 py-1 bg-bg-element rounded text-xs font-medium">
              Pemecahan Masalah
            </span>
            <span className="px-3 py-1 bg-bg-element rounded text-xs font-medium">
              Manajemen Waktu
            </span>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-medium text-lg mb-2 text-primary">Bahasa</h3>
          <div className="flex gap-3">
            <span className="px-3 py-1 bg-bg-element rounded text-xs font-medium">
              Indonesia (Native)
            </span>
            <span className="px-3 py-1 bg-bg-element rounded text-xs font-medium">
              Inggris (Intermediate)
            </span>
          </div>
        </div>

        <div className="mt-6 text-text-tertiary text-sm italic">
          "Selalu bersemangat untuk belajar dan berkontribusi pada proyek-proyek
          yang berdampak."
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
