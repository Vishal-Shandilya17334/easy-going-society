
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

const VideoGrid = () => {
  const videos = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Higher Education and Society",
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Trailer: Talk with Professors",
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Talk with Professors: Success",
    },
    {
      id: 4,
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Talk with Professors: Standards",
    },
    {
      id: 5,
      thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Talk with Professors: Major vs Minor",
    },
    {
      id: 6,
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Talk with Professors: Life Choices",
    },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <Card key={video.id} className="overflow-hidden border-0 shadow-lg">
              <div className="relative group">
                <AspectRatio ratio={16 / 9}>
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="object-cover w-full h-full" 
                  />
                </AspectRatio>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-200">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-medium">{video.title}</h3>
                <p className="text-sm text-gray-500">John Doe Smith</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGrid;
