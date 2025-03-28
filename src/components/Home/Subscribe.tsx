
import { Button } from "@/components/ui/button";

const Subscribe = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input 
            type="text" 
            placeholder="Name" 
            className="w-full md:w-64 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="email" 
            placeholder="Email"
            className="w-full md:w-64 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button className="w-full md:w-auto">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
