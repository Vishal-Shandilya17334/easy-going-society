
import React from "react";
import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Courses = () => {
  const coursesList = [
    "Strategic Management",
    "Marketing Management",
    "Basics of Computers & MIS",
    "Business Environment",
    "Consumer Behaviour",
    "Digital Social Media & Marketing",
    "Web Based Advertising",
    "Mobile Based Advertising",
    "Internet Based Marketing",
    "Retail Management",
    "Green Marketing",
    "Advertising & Brand Management",
    "Integrated Marketing Communication",
    "Marketing Research",
    "Strategic Marketing",
    "E-Customer Relationship Management (CRM)",
    "Entrepreneurship",
    "Creativity & Brand Awareness",
    "Research & Publication Ethics",
    "Academic writing & Communication Skills",
    "Advance topics on Strategic Marketing & Management"
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Courses Taught</h1>
        <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          Prof. (Dr.) Bhagwan Singh has extensive teaching experience in the following courses,
          specializing in Marketing, Management, and Information Technology.
        </p>
        
        <Card className="border shadow-md">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-2xl text-blue-700">Course List</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {coursesList.map((course, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-2 mt-1 text-blue-600">•</div>
                  <div>{course}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Courses;
