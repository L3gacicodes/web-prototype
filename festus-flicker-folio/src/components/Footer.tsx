const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-foreground/10 backdrop-blur-sm">
      <div className="container mx-auto text-center">
        <p className="text-foreground/70">
          © {new Date().getFullYear()} Festus Adebayo. All rights reserved.
        </p>
        <p className="text-foreground/60 mt-2 text-sm">
          Visionary Leader in Urban Planning and Community Development
        </p>
      </div>
    </footer>
  );
};

export default Footer;
