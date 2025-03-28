
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Books = () => {
  const books = [
    {
      id: 1,
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Human Well-Being and Policy in Modern Society",
      description: "This book explores human well-being from a policy dimension. It discusses the cultural history and diversity of the region in order to highlight major priority areas of public policy to improve people's quality of life."
    },
    {
      id: 2,
      cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "In Defence of Inclusion of Happiness in Public Policy",
      description: "The focus of planning and development has been widely influenced by the indicators reflecting economic progress. This has fetched good results as the economy is estimated to be among the largest in the world."
    }
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-12">Latest Books</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {books.map((book) => (
            <div key={book.id} className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0 w-full md:w-48">
                <Card className="border-0 h-full">
                  <img 
                    src={book.cover} 
                    alt={book.title} 
                    className="w-full h-full object-cover"
                  />
                </Card>
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-serif mb-4">{book.title}</h3>
                  <p className="text-gray-300 mb-6">{book.description}</p>
                </div>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black w-fit">
                  ORDER NOW →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books;
