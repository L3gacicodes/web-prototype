const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Gallery
        </h2>

        {/* Main Gallery - 45 boxes in 3 columns */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 mb-20">
          {Array.from({ length: 45 }).map((_, index) => {
            const column = index % 3;
            let heightClass = "h-32 md:h-40";
            let roundedClass = "rounded-3xl";
            
            if (column === 1) {
              heightClass = "h-36 md:h-48";
              roundedClass = "rounded-[2.5rem]";
            } else if (column === 2) {
              heightClass = "h-40 md:h-56";
              roundedClass = "rounded-[3rem]";
            }

            return (
              <div
                key={`main-${index}`}
                className={`gallery-box ${heightClass} ${roundedClass}`}
              >
                <img
                  src="/placeholder.svg"
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>

        {/* UK Government Delegation */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground mb-8">
            UK Government Delegation
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {Array.from({ length: 20 }).map((_, index) => (
              <div
                key={`uk-${index}`}
                className="gallery-box h-48 md:h-56 rounded-3xl"
              >
                <img
                  src="/placeholder.svg"
                  alt={`UK Delegation ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Honorary Fellow Award */}
        <div>
          <h3 className="text-3xl font-bold text-foreground mb-8">
            Festus Adebayo Receives Prestigious Honorary Fellow of Nigeria
            Institute of Town Planners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {Array.from({ length: 19 }).map((_, index) => (
              <div
                key={`fellow-${index}`}
                className="gallery-box h-48 md:h-56 rounded-3xl"
              >
                <img
                  src="/placeholder.svg"
                  alt={`Honorary Fellow ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
