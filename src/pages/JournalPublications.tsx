
import React from "react";
import Layout from "@/components/Layout/Layout";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface JournalPublication {
  slNo: number;
  title: string;
  journalName: string;
  type: string;
  year: number;
  volume: string;
  pageNo: string;
  issnNo: string;
}

const JournalPublications = () => {
  const publications: JournalPublication[] = [
    {
      slNo: 1,
      title: "Taking flight with food: investigating the determinants of user acceptance toward drone-based food delivery services in India",
      journalName: "British Food Journal",
      type: "Scopus",
      year: 2024,
      volume: "126 Issue 3",
      pageNo: "-",
      issnNo: "0007-070X"
    },
    {
      slNo: 2,
      title: "Drone Usage opportunities for Entrepreneur Contributing towards Aatmanirbhar Bharat",
      journalName: "SMS Journal of Entrepreneurship & Innovations, Refereed Journal",
      type: "Peer Reviewed",
      year: 2023,
      volume: "10",
      pageNo: "24",
      issnNo: "2349-7920"
    },
    {
      slNo: 3,
      title: "Metaverse the Next Renaissance of Financial Inclusion: Scientific Mapping & Future Research Directions.",
      journalName: "Journal of Content, Community & Communication",
      type: "Scopus",
      year: 2023,
      volume: "17",
      pageNo: "14",
      issnNo: "2456-9011"
    },
    {
      slNo: 4,
      title: "A study of Prospects and Problems of Online Education in Bihar",
      journalName: "Global Journal of Enterprise Information System",
      type: "UGC Care",
      year: 2023,
      volume: "15",
      pageNo: "30",
      issnNo: "0975-1432"
    },
    {
      slNo: 5,
      title: "Role of Kisan Drone in developing agricultural Production as a tool of Drone Delivery Service (DDS)",
      journalName: "Education and Society",
      type: "UGC Care",
      year: 2023,
      volume: "2",
      pageNo: "332",
      issnNo: "2278-6864"
    },
    {
      slNo: 6,
      title: "Drone Delivery Services Adaptation Among Consumers of India",
      journalName: "Indian Journal of Commerce Association",
      type: "UGC Care",
      year: 2022,
      volume: "75",
      pageNo: "192",
      issnNo: "0019-512X"
    },
    {
      slNo: 7,
      title: "Towards green product consumption: Effect of green marketing stimuli and perceived environmental knowledge in Indian consumer market",
      journalName: "Society and Business Review",
      type: "Scopus",
      year: 2021,
      volume: "17",
      pageNo: "45",
      issnNo: "1746-5680"
    },
    {
      slNo: 8,
      title: "CRISP Model: A Structured Approach for Presentation of Research",
      journalName: "CSI Communications",
      type: "Peer Reviewed",
      year: 2018,
      volume: "42",
      pageNo: "11",
      issnNo: "0970-647X"
    },
    {
      slNo: 9,
      title: "Toward sustainable consumption: Investigating the determinants of green buying behaviour of Indian consumers.",
      journalName: "Business Strategy & Development by John Wiley & Sons Ltd and ERP Environment",
      type: "Scopus",
      year: 2018,
      volume: "1",
      pageNo: "64",
      issnNo: "2572-3170"
    },
    {
      slNo: 10,
      title: "Solid Waste to Theme Based Parks In Himachal Pradesh, India: A Healthy, Sustainable, Eco-Friendly and Skilled Initiative for Entrepreneurs",
      journalName: "SMS Journal of Entrepreneurship & Innovations, Refereed Journal",
      type: "Peer Reviewed",
      year: 2018,
      volume: "2",
      pageNo: "87",
      issnNo: "2349-7920"
    },
    {
      slNo: 11,
      title: "Opportunities for Entrepreneur in Municipal Solid Waste Management in Smart City Dharamshala, Himachal Pradesh",
      journalName: "SMS Journal of Entrepreneurship & Innovations, Refereed Journal",
      type: "Peer Reviewed",
      year: 2018,
      volume: "1",
      pageNo: "44",
      issnNo: "2349-7920"
    },
    {
      slNo: 12,
      title: "Flourishing Demand for shopping websites as an opportunity for forthcoming Entrepreneurs",
      journalName: "SMS Journal of Entrepreneurship & Innovations, Refereed Journal",
      type: "UGC Care",
      year: 2017,
      volume: "2",
      pageNo: "75",
      issnNo: "2349-7920"
    },
    {
      slNo: 13,
      title: "Mobile Marketing: Upcoming marketing tool for Entrepreneurs",
      journalName: "SMS Journal of Entrepreneurship & Innovations, Refereed Journal",
      type: "UGC Care",
      year: 2017,
      volume: "1",
      pageNo: "47",
      issnNo: "2349-7920"
    },
    {
      slNo: 14,
      title: "Usage of Web Based Advertising (WBA)",
      journalName: "Arni University International Journal",
      type: "",
      year: 2016,
      volume: "1",
      pageNo: "183",
      issnNo: "2270-4241"
    },
    {
      slNo: 15,
      title: "Green Marketing: A Marketing Framework of STP towards Eco- Advantage",
      journalName: "SMS Journal of Entrepreneurship & Innovations, Refereed Journal",
      type: "UGC Care",
      year: 2016,
      volume: "2",
      pageNo: "22",
      issnNo: "2349-7920"
    },
    {
      slNo: 16,
      title: "Analysis of Eco-Labels for Green Washing In North Indian States",
      journalName: "SMS Journal of Entrepreneurship & Innovations, Refereed Journal",
      type: "UGC Care",
      year: 2016,
      volume: "1",
      pageNo: "23",
      issnNo: "2349-7920"
    },
    {
      slNo: 17,
      title: "Marketing Management: WBA is upcoming revolution in Advertising Thought and Strategy",
      journalName: "International Journal of Economics & Managerial Thoughts",
      type: "Peer Reviewed",
      year: 2015,
      volume: "5",
      pageNo: "8",
      issnNo: "2229-3736"
    },
    {
      slNo: 18,
      title: "A Study on Current Status of Green Marketing in North India",
      journalName: "Pacific Business Review",
      type: "Scopus",
      year: 2015,
      volume: "7",
      pageNo: "16",
      issnNo: "0974-438X"
    },
    {
      slNo: 19,
      title: "A Study of the Prospects and Problems of Web Based Advertising (WBA) in Eastern U. P.",
      journalName: "Global Journal of Enterprise Information System",
      type: "UGC Care",
      year: 2015,
      volume: "7",
      pageNo: "131",
      issnNo: "0975-1432"
    },
    {
      slNo: 20,
      title: "Consumer Preference for Eco- Friendly Products of Home Appliance Companies",
      journalName: "Indian Journal of Commerce Association",
      type: "UGC Care",
      year: 2014,
      volume: "67",
      pageNo: "76",
      issnNo: "0019-512X"
    },
    {
      slNo: 21,
      title: "An Empirical Investigation of Financial Performance of Nationalised Banks in India",
      journalName: "International Journal of Economics & Managerial Thoughts",
      type: "Peer Reviewed",
      year: 2014,
      volume: "2",
      pageNo: "9",
      issnNo: "2229-3736"
    },
    {
      slNo: 22,
      title: "Women Entrepreneurship developing platform by WBA",
      journalName: "SMS Journal of Entrepreneurship & Innovations, Refereed Journal",
      type: "UGC Care",
      year: 2014,
      volume: "1",
      pageNo: "94",
      issnNo: "2349-7920"
    },
    {
      slNo: 23,
      title: "Customer Satisfaction Analysis on Services of Delhi Metro",
      journalName: "Asian Journal of Multidisciplinary Studies (AJMS)",
      type: "Scopus",
      year: 2014,
      volume: "2",
      pageNo: "124",
      issnNo: "2321-8819"
    },
    {
      slNo: 24,
      title: "Factors affecting Green Buying Behaviour (GBB) of Consumers",
      journalName: "Commerce Spectrum (International Journal of Commerce & Business Studies)",
      type: "UGC Care",
      year: 2013,
      volume: "3",
      pageNo: "69",
      issnNo: "2249-992X"
    },
    {
      slNo: 25,
      title: "Opportunity for Women Entrepreneurs to en-cash Virtual World through WBA",
      journalName: "International Journal of Economics & Managerial Thoughts",
      type: "Peer Reviewed",
      year: 2013,
      volume: "2",
      pageNo: "8",
      issnNo: "2229-3736"
    },
    {
      slNo: 26,
      title: "Ledge of IT Jobs & HRM in E-Commerce in Eastern U. P",
      journalName: "International Journal of Commerce & Social Sciences",
      type: "Peer Reviewed",
      year: 2011,
      volume: "1",
      pageNo: "100",
      issnNo: "2231-5888"
    },
    {
      slNo: 27,
      title: "Prospects of Web Based Advertising",
      journalName: "Indian Journal of Commerce Association",
      type: "Peer Reviewed",
      year: 2010,
      volume: "63",
      pageNo: "76",
      issnNo: "0019-512X"
    },
    {
      slNo: 28,
      title: "Online Advertising: Trends, Issues and Ideas",
      journalName: "Aatmbodh, Journal",
      type: "Peer Reviewed",
      year: 2009,
      volume: "6",
      pageNo: "70",
      issnNo: "0972-1398"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Journal Publications</h1>
        <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          Prof. (Dr.) Bhagwan Singh has published extensively in various national and international journals, focusing on areas such as drone technology, green marketing, web-based advertising, and entrepreneurship.
        </p>
        
        <div className="overflow-x-auto">
          <Table className="border">
            <TableCaption>List of Journal Publications by Prof. (Dr.) Bhagwan Singh</TableCaption>
            <TableHeader className="bg-blue-50">
              <TableRow>
                <TableHead className="text-blue-700 font-medium">Sl No</TableHead>
                <TableHead className="text-blue-700 font-medium">Title of the Paper</TableHead>
                <TableHead className="text-blue-700 font-medium">Journal Name</TableHead>
                <TableHead className="text-blue-700 font-medium">Type</TableHead>
                <TableHead className="text-blue-700 font-medium">Year</TableHead>
                <TableHead className="text-blue-700 font-medium">Vol. No.</TableHead>
                <TableHead className="text-blue-700 font-medium">Page No.</TableHead>
                <TableHead className="text-blue-700 font-medium">ISSN No.</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {publications.map((pub) => (
                <TableRow key={pub.slNo} className="hover:bg-gray-50">
                  <TableCell className="font-medium text-center">{pub.slNo}</TableCell>
                  <TableCell className="font-medium">{pub.title}</TableCell>
                  <TableCell>{pub.journalName}</TableCell>
                  <TableCell>{pub.type}</TableCell>
                  <TableCell className="text-center">{pub.year}</TableCell>
                  <TableCell className="text-center">{pub.volume}</TableCell>
                  <TableCell className="text-center">{pub.pageNo}</TableCell>
                  <TableCell>{pub.issnNo}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Layout>
  );
};

export default JournalPublications;
