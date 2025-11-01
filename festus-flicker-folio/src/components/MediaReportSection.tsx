const MediaReportSection = () => {
  const mediaItems = [
    {
      title: "Housing",
      description: "Latest developments in housing initiatives and policies",
      link: "#",
    },
    {
      title: "AIHS",
      description: "Affordable and Innovative Housing Solutions",
      link: "#",
    },
    {
      title: "Rental Housing",
      description: "Comprehensive rental housing reform and strategies",
      link: "#",
    },
    {
      title: "Land Titles",
      description: "Updates on land title registrations and reforms",
      link: "#",
    },
    {
      title: "Urban Development",
      description: "Sustainable urban development projects and initiatives",
      link: "#",
    },
    {
      title: "Community Planning",
      description: "Community-driven planning and development strategies",
      link: "#",
    },
  ];

  return (
    <section id="media" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Media Report
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="media-pill text-center mb-4">
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>

              <p className="text-foreground/80 mb-4 min-h-[60px]">
                {item.description}
              </p>

              <a
                href={item.link}
                className="inline-block text-primary hover:text-accent font-semibold transition-colors duration-300"
              >
                Continue Reading →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaReportSection;
