import { useLocalization } from "../../hooks/useLocalization";

const Footer = () => {
  const { t } = useLocalization();

  return (
    <footer className="flex flex-col items-center justify-between px-6 py-6 mx-auto mt-20 text-xs border-t border-secondary md:flex-row max-w-7xl">
      <p>© 2025 Rizqiansyah</p>
      <p>{t("footer.signature")}</p>
    </footer>
  );
};
export default Footer;
