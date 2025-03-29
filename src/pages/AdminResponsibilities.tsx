
import React from "react";
import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AdminResponsibilities = () => {
  const responsibilities = [
    "Ex-Dean, School of Management Sciences (SMS)",
    "Ex-Head, Department of Business Administration (DBA)",
    "University Court (UC) Member, CUJ",
    "Academic Council (AC) Member, CUJ",
    "Member, School Board, School of Management Sciences (SMS), CUJ",
    "Member, Board of Studies (BoS), Dept. of Business Administration (DBA), SMS, CUJ",
    "State Student Coordinator (SSC) of Jharkhand, CSI (2020-2021)",
    "Expert in Various Country / State Level Committees for examinations, policy making, Thesis evaluation and the like Resource Person / Speaker in National Repute Workshops / Seminar / Conferences etc.",
    "Former Finance Officer (In-charge) of Central University of Jharkhand (CUJ), Ranchi",
    "Former Chief Placement Officer (CPO)"
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Administrative Responsibilities</h1>
        <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          Prof. (Dr.) Bhagwan Singh has held numerous administrative positions and responsibilities throughout his academic career.
        </p>
        
        <Card className="border shadow-md">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-2xl text-blue-700">Leadership Roles & Positions</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {responsibilities.map((responsibility, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-2 mt-1 text-blue-600 flex-shrink-0">•</div>
                  <div>{responsibility}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AdminResponsibilities;
