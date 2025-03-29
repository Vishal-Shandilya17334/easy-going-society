
import { BookOpen } from "lucide-react";
import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Books = () => {
  const publishedBooks = [
    {
      id: 1,
      title: "Web Based Advertising: A Tool of Digital & Internet Based Marketing",
      year: "2017",
      edition: "1st Edition",
      publisher: "Anamika Publisher, New Delhi"
    },
    {
      id: 2,
      title: "Internet Based Marketing: Trends, Issues & Challenges for Digital Marketing & Web Based Advertising",
      year: "2015",
      edition: "1st Edition",
      publisher: "Anamika Publisher, New Delhi"
    }
  ];

  const bookChapters = [
    {
      id: 1,
      title: "NEP-2020: Challenge on Implementation, National Education Policy 2020: Reflection from Stakeholders",
      year: "2020",
      details: "Pg 46, White Falcon Publishing, ISBN:"
    },
    {
      id: 2,
      title: "Prospects for Entrepreneurs in Retail Outlets in H. P",
      year: "2018",
      details: "MRI Publications, ISBN: 978-93-86142-23-8"
    },
    {
      id: 3,
      title: "Popular Websites helping Agriculture of India ICT Rural Development",
      year: "2016",
      details: "Bharti Publications, Delhi, ISBN: 978-81-933475-5-3"
    },
    {
      id: 4,
      title: "Role of Web based Advertising (WBA) in Promotion Mix: A New Area for Strategic Management",
      year: "2015",
      details: "Bharti Publications, Delhi, ISBN: 978-93-85000-48-5"
    },
    {
      id: 5,
      title: "Dimensions of Service Sector Operations and Approaches: An Assessment of Nationalized Sector Banks in India",
      year: "2014",
      details: "IIT Roorkee, Dept. of Management Studies, ISBN: 978-93-8493-502-3"
    },
    {
      id: 6,
      title: "Green Marketing Through WBA in International Trade",
      year: "2014",
      details: "Global Publishing House, Vishakhapatnam, ISBN: 978-93-81563-24-3"
    },
    {
      id: 7,
      title: "Service Quality Assessment in Indian Banking Sector: An Application of Factor Analysis",
      year: "2014",
      details: "K. K. Publications, New Delhi, ISBN: 978-81-7844-173-3"
    },
    {
      id: 8,
      title: "Stride of Advertising: Web Based Advertising",
      year: "2012",
      details: "Anmol Publication, New Delhi, ISBN: 978-81-261-5064-9"
    },
    {
      id: 9,
      title: "Web Based Advertising: An increasing demand in Agribusiness with Internet World",
      year: "2011",
      details: "Suruchi Kala Prakashan, Varanasi, ISBN: 978-93-81564-02-8"
    },
    {
      id: 10,
      title: "Web Based Advertising: An Emerging Stride of Advertising in India – A study Based on Eastern Districts of Uttar Pradesh",
      year: "2011",
      details: "Excel India Publishers, ISBN: 978-93-81361-12-2"
    },
    {
      id: 11,
      title: "E-Advertising and Women Entrepreneurship: A study from Eastern U. P.",
      year: "2010",
      details: "Macmillian, ISBN: 10: 0230-33150-1"
    },
    {
      id: 12,
      title: "Web Based Advertising – Case Study of Varanasi Region",
      year: "2009",
      details: "ABC Press, New Delhi, ISBN: 978-81-907612-1-8"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Books & Book Chapters</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <span>Published Books</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px]">No.</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead className="w-[120px]">Year</TableHead>
                    <TableHead className="w-[250px]">Publisher</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {publishedBooks.map((book) => (
                    <TableRow key={book.id}>
                      <TableCell className="font-medium">{book.id}</TableCell>
                      <TableCell>{book.title}</TableCell>
                      <TableCell>{book.year}</TableCell>
                      <TableCell>{book.publisher}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <span>Book Chapters</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px]">No.</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead className="w-[120px]">Year</TableHead>
                    <TableHead>Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookChapters.map((chapter) => (
                    <TableRow key={chapter.id}>
                      <TableCell className="font-medium">{chapter.id}</TableCell>
                      <TableCell>{chapter.title}</TableCell>
                      <TableCell>{chapter.year}</TableCell>
                      <TableCell>{chapter.details}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <p className="mt-4 text-gray-600 italic">And 04 other Chapters published in reputed Edited Books</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Books;
