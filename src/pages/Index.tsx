import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, CheckCircle, Zap, Download, ArrowRight } from "lucide-react";

const Index: React.FC = () => {
  const features = [
    {
      icon: <FileText className="h-10 w-10 text-resume-blue" />,
      title: "Professional Templates",
      description: "Choose from our collection of ATS-friendly resume templates designed by HR professionals.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-resume-blue" />,
      title: "Easy to Use",
      description: "Our intuitive builder makes creating a standout resume quick and simple, no design skills needed.",
    },
    {
      icon: <Zap className="h-10 w-10 text-resume-blue" />,
      title: "Real-time Preview",
      description: "See changes to your resume instantly as you type, allowing for quick refinements.",
    },
    {
      icon: <Download className="h-10 w-10 text-resume-blue" />,
      title: "Download as PDF",
      description: "Export your polished resume as a professional PDF file ready to share with employers.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-resume-light-gray py-16 md:py-24 w-full">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 animate-slide-in">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-resume-dark-gray">
                    Create a <span className="text-resume-blue">Professional Resume</span> in Minutes
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Stand out from the crowd with a beautifully designed resume. Our easy-to-use builder helps you create an interview-winning document.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg" className="bg-resume-blue hover:bg-resume-dark-blue text-white">
                    <Link to="/builder">
                      Create Your Resume <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 animate-fade-in">
                <div className="relative rounded-lg border border-gray-200 bg-white p-2 shadow-lg">
                  <div className="bg-resume-light-gray rounded-lg">
                    <img
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                      alt="Resume Preview"
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-resume-blue text-white rounded-lg px-4 py-2 shadow-lg">
                    Easy to use!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-16 md:py-24 w-full">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-resume-dark-gray">Why Choose ResumeForge?</h2>
              <p className="mt-4 text-lg text-gray-500">
                Our resume builder offers everything you need to create a professional resume
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-md transition-shadow bg-white"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-resume-blue text-white py-16 w-full">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Land Your Dream Job?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Start building your professional resume today and take the first step towards your new career.
            </p>
            <Button asChild size="lg" className="bg-white text-resume-blue hover:bg-resume-light-gray">
              <Link to="/builder">
                Start Building Your Resume
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
