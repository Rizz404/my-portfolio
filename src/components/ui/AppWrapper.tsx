import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useLocalization } from "../../hooks/useLocalization";

interface AppWrapperProps {
  children: ReactNode;
}

const AppWrapper = ({ children }: AppWrapperProps) => {
  const location = useLocation();
  const { isChangingLanguage } = useLocalization();

  // * Hanya render komponen AnimatePresence jika bahasa tidak sedang berganti
  // * Ini mencegah konten lama terlihat selama proses perpindahan bahasa
  return isChangingLanguage ? (
    // * Tampilkan loading indicator saat sedang ganti bahasa
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-10 h-10 border-4 rounded-full border-primary border-t-transparent animate-spin"></div>
    </div>
  ) : (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AppWrapper;
