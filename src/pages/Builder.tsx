import React from "react";
import { ResumeProvider } from "@/context/ResumeContext";
import ResumeForm from "@/components/resume/ResumeForm";
import ResumePreview from "@/components/resume/ResumePreview";
import TemplateSelector from "@/components/resume/TemplateSelector";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Builder: React.FC = () => {
  return (
    <ResumeProvider>
      <div className="min-h-screen flex flex-col w-full">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold mb-6">Resume Builder</h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4 space-y-8 animate-fade-in">
              <Tabs defaultValue="content" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="content">Content</TabsTrigger>
                  <TabsTrigger value="template">Template</TabsTrigger>
                </TabsList>
                <TabsContent value="content">
                  <ResumeForm />
                </TabsContent>
                <TabsContent value="template">
                  <TemplateSelector />
                </TabsContent>
              </Tabs>
            </div>
            <div className="lg:col-span-8 animate-fade-in">
              <div className="sticky top-20">
                <ResumePreview />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ResumeProvider>
  );
};

export default Builder;