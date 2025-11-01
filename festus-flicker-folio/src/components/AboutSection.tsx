const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          About Me
        </h2>

        <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Photo */}
            <div className="order-2 md:order-1">
              <div className="w-full aspect-square rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg"
                  alt="Festus Adebayo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="order-1 md:order-2 space-y-4">
              <p className="text-lg text-foreground/90 leading-relaxed">
                Festus Adebayo is a distinguished urban planner and community
                development leader with decades of experience in transforming
                communities and advancing sustainable development initiatives.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                His work has been recognized internationally, including
                prestigious acknowledgments from the Legislature of Ontario and
                the Nigeria Institute of Town Planners, where he was honored as
                an Honorary Fellow.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Through his visionary leadership and commitment to excellence,
                Festus continues to shape the future of urban planning and
                community development, inspiring the next generation of leaders
                in the field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
