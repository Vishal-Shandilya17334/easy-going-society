
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Publications = () => {
  const publications = [
    {
      id: 1,
      cover: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Taking flight with food: investigating the determinants of user acceptance toward drone-based food delivery services in India",
      journal: "British Food Journal",
      year: "2024"
    },
    {
      id: 2,
      cover: "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Drone Usage opportunities for Entrepreneur Contributing towards Aatmanirbhar Bharat",
      journal: "SMS Journal of Entrepreneurship & Innovations",
      year: "2023"
    },
    {
      id: 3,
      cover: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Metaverse the Next Renaissance of Financial Inclusion: Scientific Mapping & Future Research Directions",
      journal: "Journal of Content, Community & Communication",
      year: "2023"
    },
    {
      id: 4,
      cover: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "A study of Prospects and Problems of Online Education in Bihar",
      journal: "Global Journal of Enterprise Information System",
      year: "2023"
    },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-12">Recent Publications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {publications.map((pub) => (
            <Card key={pub.id} className="overflow-hidden border-gray-200 h-full">
              <div className="h-48">
                <img 
                  src={pub.cover} 
                  alt={pub.title}
                  className="w-full h-full object-cover" 
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-2">{pub.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{pub.journal}, {pub.year}</p>
                <Button variant="outline" className="w-full">
                  Read More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
