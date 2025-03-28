
import Layout from "../components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const courses = [
    "Strategic Management", "Marketing Management", "Basics of Computers & MIS",
    "Business Environment", "Consumer Behaviour", "Digital Social Media & Marketing",
    "Web Based Advertising", "Mobile Based Advertising", "Internet Based Marketing",
    "Retail Management", "Green Marketing", "Advertising & Brand Management",
    "Integrated Marketing Communication", "Marketing Research", "Strategic Marketing",
    "E-Customer Relationship Management (CRM)", "Entrepreneurship", "Creativity & Brand Awareness",
    "Research & Publication Ethics", "Academic writing & Communication Skills", 
    "Advance topics on Strategic Marketing & Management"
  ];

  const awards = [
    "Developed CRISP Model for presentation of RTP (Research/Thesis/ Project) which is appreciated / adopted by National Repute Universities",
    "Received Best Teacher Award from Rotary Club Dharmshala, H. P. (2012)",
    "Received Best Teacher award in 2011, from the hands of Honbl'e Vice Chancellor, Mahatma Gandhi Kashi Vidyapeth State University, Varanasi organized by JDIMT, Varanasi",
    "First Best Paper Award in Feb 2010, among almost 218 papers screened from all over the world in International Conference organized by Gardi Vidyapith University in Rajkot, Gujarat",
    "Chaired several International & National FDP / Seminars / Workshops/ Conferences as a regular activity in top notch reputed organizations"
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif mb-8 text-center">About Prof. (Dr.) Bhagwan Singh</h1>
          
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Prof. Dr. Bhagwan Singh"
                className="w-full h-auto rounded-lg shadow-md"
              />
              <div className="mt-4 text-center">
                <p className="font-medium">Professor of Management</p>
                <p className="text-sm text-gray-600">Ex-Dean, School of Management Sciences (SMS)</p>
                <p className="text-sm text-gray-600">Ex-Head, Department of Business Administration (DBA)</p>
                <p className="text-sm text-gray-600">Central University of Jharkhand (CUJ), Ranchi</p>
                <p className="text-sm mt-2">
                  <a href="mailto:bhagwan.singh@cuj.ac.in" className="text-blue-600 hover:underline">bhagwan.singh@cuj.ac.in</a>
                </p>
                <p className="text-sm">
                  <a href="tel:+919816481037" className="text-blue-600 hover:underline">+91-9816481037</a>
                </p>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="prose prose-lg max-w-none">
                <p>
                  Prof. (Dr.) Bhagwan Singh is Professor of Management at Department of Business Administration (DBA), 
                  School of Management Sciences (SMS), Central University of Jharkhand (CUJ), Ranchi - 835205, Bharat. 
                  He is the Ex-Dean of SMS and Ex-Head of DBA at CUJ. He joined as Professor in Department of Business 
                  Administration (DBA), School of Management Sciences (SMS), Central University of Jharkhand (CUJ), 
                  on 12th March 2020.
                </p>
                <p>
                  He also served as Finance Officer Incharge (I/c) in Central University of Jharkhand (CUJ), for 6 months 
                  during COVID Period. He gave his contribution as Chief Placement Officer (CPO) of Central University of 
                  Jharkhand (CUJ). He is also Academic Council (AC) & University Court (UC) member at CUJ.
                </p>
                <p>
                  Prior to Central University of Jharkhand (CUJ), he served Central University of Himachal Pradesh (CUHP), 
                  where he was the Founder Dean, School of Commerce & Management Studies (SCMS), Central University of 
                  Himachal Pradesh (CUHP). Under this School two Departments: Himachal Pradesh Kendriya Vishwavidyalaya 
                  Business School (HPKVBS) and Department of Commerce (DoC) and One Centre "Centre for Entrepreneurship" was present.
                </p>
                <p>
                  His research interest and work areas are Marketing, advertising and Information Technology. His core 
                  thrust areas are Web-based Advertising (WBA), Green Marketing, Entrepreneurship; Mobile based Marketing (MBM), 
                  Internet Based Marketing (IBM), Drone delivery services, AI, Social Media Influencer and the like.
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
                    <p className="font-medium">Ph.D. in Commerce (2011)</p>
                    <p className="text-gray-600">VBS Purvanchal University, Jaunpur, Uttar Pradesh</p>
                    <p className="text-sm text-gray-500">Topic: "A Study of the Prospects and Problems of Web Based Advertising in Eastern U.P."</p>
                  </li>
                  <li>
                    <p className="font-medium">MBA in Marketing (1998-2000)</p>
                    <p className="text-gray-600">CSJM Kanpur University, Kanpur, U.P.</p>
                  </li>
                  <li>
                    <p className="font-medium">B.Com (1993-1996)</p>
                    <p className="text-gray-600">Allahabad University, Allahabad, U.P.</p>
                  </li>
                  <li>
                    <p className="font-medium">Additional IT Qualifications</p>
                    <p className="text-gray-600">Honors in System Management [HSM] from NIIT - CEC (1994-1996)</p>
                    <p className="text-gray-600">PGDCA from U.P. Autonomous College, Varanasi (2011)</p>
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
                    <span>Web-Based Advertising (WBA) & Digital Marketing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Green Marketing & Sustainable Business Practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Mobile-Based Marketing (MBM) & Emerging Technologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Drone Delivery Services & Applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Strategic Management & Marketing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Entrepreneurship & Innovation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Courses Taught</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {courses.map((course, index) => (
                    <div key={index} className="bg-gray-50 p-2 rounded text-sm">
                      {course}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Awards & Recognition</h2>
                <ul className="space-y-3">
                  {awards.map((award, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-blue-600">★</span>
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Administrative Responsibilities</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Ex-Dean, School of Management Sciences (SMS)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Ex-Head, Department of Business Administration (DBA)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>University Court (UC) Member, CUJ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Academic Council (AC) Member, CUJ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Former Finance Officer (In-charge) of Central University of Jharkhand (CUJ)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Former Chief Placement Officer (CPO)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>State Student Coordinator (SSC) of Jharkhand, CSI (2020-2021)</span>
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
