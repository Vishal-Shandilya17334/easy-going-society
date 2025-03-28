
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-3xl md:text-4xl font-serif mb-6">About me</h1>
            <p className="text-lg text-gray-700 mb-6">
              One of my former colleagues once told me that I am a person of many parts. Today when I think over it, a little
              more deeply, I tend to see myself as — a learner by nature, a teacher by profession, a student by attitude, a poet by
              heart, a philosopher by temperament, and a wanderer by hobby. These parts are manifested through my
              experience in Teaching, Research, Extension, and Administration.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              The teaching career of 20 years enriched me by providing opportunity to work in different types of educational
              institutions situated in different geographies; to meet some of the most wonderful people on earth and to make
              me learn those nuances of life that would not have been otherwise possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link to="/download">Download Brief Profile</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-[300px] sm:w-[400px] rounded-full overflow-hidden">
              <AspectRatio ratio={1/1}>
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
