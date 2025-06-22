import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // * Monitor scroll position untuk menampilkan/menyembunyikan button
  useEffect(() => {
    const toggleVisibility = () => {
      // * Tampilkan button jika user sudah scroll lebih dari 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // * Add scroll event listener
    window.addEventListener("scroll", toggleVisibility);

    // * Cleanup function untuk remove event listener
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // * Function untuk scroll ke atas dengan smooth behavior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // * Jangan render button jika tidak visible
  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 group transition-all duration-300 transform hover:scale-110 focus:outline-none"
      aria-label="Scroll to top"
    >
      <div className="absolute inset-0 bg-bg-element/80 backdrop-blur-sm rounded-full border border-secondary/20 shadow-xl group-hover:shadow-2xl transition-all duration-300"></div>

      <div className="relative p-2 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 mix-blend-overlay rounded-full"></div>

        <img
          src="https://i.pinimg.com/originals/45/b1/0c/45b10c9f93d42eafee239bfa7e7075fe.gif"
          alt="Scroll to top"
          className="size-8 object-cover rounded-full relative z-10 filter brightness-110 contrast-110"
        />

        <div className="absolute inset-0 rounded-full ring-2 ring-primary/0 group-hover:ring-primary/30 transition-all duration-300"></div>
      </div>

      <div className="absolute inset-0 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-all duration-300"></div>
    </button>
  );
};

export default ScrollToTopButton;
