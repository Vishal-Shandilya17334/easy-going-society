
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";

const Stats = () => {
  const stats = [
    { number: "54+", label: "Publications" },
    { number: "60+", label: "Invited Lectures" },
    { number: "65+", label: "Conferences" },
    { number: "18+", label: "Book Chapters" },
    { number: "11", label: "PhD Students" },
    { number: "20+", label: "Teaching Experience" },
  ];

  return (
    <section className="py-10 md:py-16 bg-gradient-to-r from-purple-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-wrap justify-center">
          <div className="w-full">
            <div className="flex flex-wrap justify-center gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white shadow-md border-0 w-[180px] px-4 transform transition-transform hover:scale-105">
                  <CardContent className="pt-6 pb-6 text-center">
                    <h3 className="text-3xl font-bold text-gray-800">{stat.number}</h3>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
