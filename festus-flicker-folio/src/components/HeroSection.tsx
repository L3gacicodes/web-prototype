const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Festus Adebayo
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto">
            Visionary Leader in Urban Planning and Community Development
          </p>
        </div>

        {/* Congratulatory Messages Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-10">
            Congratulatory Messages from the Legislature of Ontario
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Left Message Box */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300">
              <div className="w-full h-96 bg-muted rounded-2xl flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  alt="Legislative Congratulations 1"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Right Message Box */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300">
              <div className="w-full h-96 bg-muted rounded-2xl flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  alt="Legislative Congratulations 2"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
