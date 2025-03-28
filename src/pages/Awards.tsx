
import React from "react";
import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Awards = () => {
  const awardsList = [
    "Developed CRISP Model for presentation of RTP (Research/Thesis/ Project) which is appreciated / adopted by National Repute Universities",
    "Received Best Teacher Award from Rotary Club Dharmshala, H. P. (2012)",
    "Received Best Teacher award in 2011, from the hands of Honbl'e Vice Chancellor, Mahatma Gandhi Kashi Vidyapeth State University, Varanasi organized by JDIMT, Varanasi",
    "First Best Paper Award in Feb 2010, among almost 218 papers screened from all over the world in International Conference organized by Gardi Vidyapith University in Rajkot, Gujarat.",
    "Chaired several International & National FDP / Seminars / Workshops/ Conferences as a regular activity in top notch reputed organizations.",
    "Members of Following Organizations/Societies:",
    "ISCA - Indian Science Congress Association (Life Member) No.L16507",
    "CSI - Computer Society of India (Life Member) No.01102839.",
    "ICA - Indian Commerce Association (Life Member) No.UP489.",
    "Guided as Supervisor for a Post Doc Student Dr Sachin Kumar in the Area of Green Marketing who is now posted at NIT Hamirpur.",
    "Have More than 51 publications and have attended more than 65 International & National Conferences & Seminars. He has presented more than 60 papers in International & National Conferences & Seminars.",
    "Taken various Guest lecturers in well renowned & top-notch reputed organizations and Universities of India on IT, Web Based Advertising & Marketing.",
    "Conducted National FDP/Seminars/Workshops/Conferences as a regular activity."
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Awards & Recognition</h1>
        <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          Prof. (Dr.) Bhagwan Singh has received numerous awards and recognitions throughout his academic career.
        </p>
        
        <Card className="border shadow-md">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-2xl text-blue-700">Honors & Achievements</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {awardsList.map((award, index) => (
                <div key={index} className="flex items-start">
                  {!award.startsWith("ISCA") && !award.startsWith("CSI") && !award.startsWith("ICA") ? (
                    <>
                      <div className="mr-2 mt-1 text-blue-600 flex-shrink-0">•</div>
                      <div>{award}</div>
                    </>
                  ) : (
                    <div className="ml-8">
                      <span className="mr-2 text-blue-600">○</span>
                      {award}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Awards;
