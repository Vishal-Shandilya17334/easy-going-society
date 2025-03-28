
import Layout from "../components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif mb-8 text-center">About Me</h1>
          
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Profile"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-2/3">
              <div className="prose prose-lg max-w-none">
                <p>
                  One of my former colleagues once told me that I am a person of many parts. Today when I think over it, a little
                  more deeply, I tend to see myself as — a learner by nature, a teacher by profession, a student by attitude, a poet by
                  heart, a philosopher by temperament, and a wanderer by hobby. These parts are manifested through my
                  experience in Teaching, Research, Extension, and Administration.
                </p>
                <p>
                  The teaching career of 20 years enriched me by providing opportunity to work in different types of educational
                  institutions situated in different geographies; to meet some of the most wonderful people on earth and to make
                  me learn those nuances of life that would not have been otherwise possible.
                </p>
                <p>
                  The institutions that I have worked for have bestowed their trust in me by allowing me to play the role of a
                  catalyst for loving students. Their love and affection are my most precious gifts. The results of some of my
                  interventions in policy front both at the organizational as well as at the national/global level keep enthusing a
                  sense of hope and optimism.
                </p>
                <p>
                  Human Well-Being and Happiness are the core of my academic adventure which keeps me pushing to raise
                  concerns towards making organizations and nations happy. Education is the primary domain that concerns me
                  most for building happy societies all around the globe.
                </p>
              </div>
              <div className="mt-6">
                <Button>
                  Download Brief Profile
                </Button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Education</h2>
                <ul className="space-y-4">
                  <li>
                    <p className="font-medium">Ph.D. in Education</p>
                    <p className="text-gray-600">Harvard University, 2005</p>
                  </li>
                  <li>
                    <p className="font-medium">M.A. in Educational Psychology</p>
                    <p className="text-gray-600">Stanford University, 2000</p>
                  </li>
                  <li>
                    <p className="font-medium">B.A. in Psychology</p>
                    <p className="text-gray-600">University of California, 1998</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Areas of Expertise</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Human Well-Being and Education Policy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Educational Psychology and Learning Methods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Happiness Metrics in Educational Institutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Cultural Perspectives in Education</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Policy Making and Implementation Strategies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
