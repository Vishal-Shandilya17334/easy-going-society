
import Layout from "../components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Education = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif mb-8 text-center">Educational Background</h1>
          
          <Tabs defaultValue="higher" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="higher">Higher Education</TabsTrigger>
              <TabsTrigger value="school">School Education</TabsTrigger>
            </TabsList>
            
            <TabsContent value="higher" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6 text-blue-700">Doctorate</h2>
                  <div className="space-y-2">
                    <p className="text-lg font-medium">Ph.D. in Commerce (2011)</p>
                    <p className="text-gray-700">VBS Purvanchal University, Jaunpur, Uttar Pradesh</p>
                    <p className="text-gray-600 italic mt-2">Batch: 2008-2010</p>
                    <p className="text-gray-600"><span className="font-medium">Topic:</span> "A Study of the Prospects and Problems of Web Based Advertising in Eastern U.P."</p>
                    <p className="text-gray-600"><span className="font-medium">Guide:</span> Prof. (Dr.) G. S. Rathore, Principal, U. P. College & Former Dean & Head, Faculty of Commerce, Udai Pratap Autonomous College, Varanasi, U.P.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6 text-blue-700">Post Graduation</h2>
                  <div className="space-y-2">
                    <p className="text-lg font-medium">MBA in Marketing (1998-2000)</p>
                    <p className="text-gray-700">CSJM Kanpur University, Kanpur, U.P.</p>
                    <p className="text-gray-600 italic">Specialization: Marketing</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6 text-blue-700">Under Graduation</h2>
                  <div className="space-y-2">
                    <p className="text-lg font-medium">B.Com (1993-1996)</p>
                    <p className="text-gray-700">Allahabad University, Allahabad, U.P.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6 text-blue-700">Additional IT Qualifications</h2>
                  <div className="space-y-4">
                    <div>
                      <p className="text-lg font-medium">Honors in System Management (HSM)</p>
                      <p className="text-gray-700">NIIT - CEC (Computer Education Centre), Allahabad, U.P.</p>
                      <p className="text-gray-600 italic">1994-1996</p>
                      <p className="text-gray-600 mt-1">Achieved Topper Status</p>
                    </div>
                    <div>
                      <p className="text-lg font-medium">PGDCA (Post Graduate Diploma in Computer Applications)</p>
                      <p className="text-gray-700">Udai Pratap (U.P.) Autonomous College, Varanasi, Uttar Pradesh</p>
                      <p className="text-gray-600 italic">2011</p>
                      <p className="text-gray-600 mt-1">Achieved First Division</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="school" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6 text-blue-700">School Education</h2>
                  <div className="space-y-6">
                    <div className="border-b pb-4">
                      <p className="text-lg font-medium">Higher Secondary (12th)</p>
                      <p className="text-gray-700">St. John's School, D.L.W., Varanasi, U.P.</p>
                      <p className="text-gray-600 italic">ISC Board, 1993</p>
                    </div>
                    
                    <div className="border-b pb-4">
                      <p className="text-lg font-medium">Secondary (10th)</p>
                      <p className="text-gray-700">St. John's School, D.L.W., Varanasi, U.P.</p>
                      <p className="text-gray-600 italic">ICSE Board, 1991</p>
                    </div>
                    
                    <div className="border-b pb-4">
                      <p className="text-lg font-medium">Middle School (6th to 8th)</p>
                      <p className="text-gray-700">St. Mary's Convent School, Cantt., Varanasi, U.P.</p>
                    </div>
                    
                    <div>
                      <p className="text-lg font-medium">Primary School</p>
                      <p className="text-gray-700">St. Fidelish School, Aliganj, Lucknow, U.P.</p>
                      <p className="text-gray-600 italic">Primary to 5th</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="mt-8 bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-medium text-blue-800 mb-3">Educational Journey</h3>
            <p className="text-gray-700">
              Prof. (Dr.) Bhagwan Singh's educational journey began in Lucknow and continued through Varanasi, 
              culminating in his doctoral research on Web Based Advertising. His diverse academic background 
              combines commerce, management, and information technology, providing a strong foundation for 
              his interdisciplinary approach to research and teaching.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Education;
