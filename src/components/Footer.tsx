const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between p-6 text-xs text-muted-foreground border-t border-border">
      <div>
        © 2025 Webempresa. vf.4.0.63 vb.4.0.2
      </div>
      <div className="flex items-center gap-4 mt-2 sm:mt-0">
        <a href="#" className="hover:text-foreground transition-colors">
          Cookies
        </a>
        <a href="#" className="hover:text-foreground transition-colors">
          Términos
        </a>
        <a href="#" className="hover:text-foreground transition-colors">
          Privacidad
        </a>
      </div>
    </footer>
  );
};

export default Footer;
