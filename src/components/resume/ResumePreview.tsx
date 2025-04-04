import React, { useRef } from "react";
import { useResume, ResumeData } from "@/context/ResumeContext";
import BasicTemplate from "./templates/BasicTemplate";
import ModernTemplate from "./templates/ModernTemplate";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { ScrollArea } from "../ui/scroll-area";

const ResumePreview: React.FC = () => {
  const { resumeData, template } = useResume();
  const resumeRef = useRef<HTMLDivElement>(null);

  const renderTemplate = (data: ResumeData) => {
    switch (template) {
      case "modern":
        return <ModernTemplate data={data} />;
      case "basic":
      default:
        return <BasicTemplate data={data} />;
    }
  };

  const downloadAsPDF = async () => {
    if (!resumeRef.current) return;
    
    try {
      // Define A4 dimensions in mm
      const a4Width = 210; // mm
      const a4Height = 297; // mm
      
      // Create a wrapper div to properly size the resume for capture
      const wrapper = document.createElement('div');
      wrapper.style.width = '800px'; // Match the max-width from templates
      wrapper.style.padding = '20px'; // Equal spacing on all sides
      wrapper.style.backgroundColor = 'white';
      wrapper.style.boxSizing = 'border-box';
      
      // Clone the resume element for capture
      const clone = resumeRef.current.cloneNode(true) as HTMLElement;
      clone.style.transform = 'none';
      clone.style.width = '100%';
      clone.style.position = 'static';
      clone.style.boxShadow = 'none';
      
      wrapper.appendChild(clone);
      document.body.appendChild(wrapper);
      
      const canvas = await html2canvas(wrapper, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
        backgroundColor: 'white',
      });
      
      // Remove the temporary elements
      document.body.removeChild(wrapper);
      
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [a4Width, a4Height],
      });
      
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      
      // Add the image to PDF with proper margins
      pdf.addImage(imgData, "JPEG", 0, 0, a4Width, a4Height);
      pdf.save(`${resumeData.personalInfo.firstName || 'Resume'}_${resumeData.personalInfo.lastName || ''}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">Resume Preview</h2>
        <Button 
          onClick={downloadAsPDF} 
          className="bg-resume-blue hover:bg-resume-dark-blue text-white"
        >
          <Download className="mr-2 h-4 w-4" /> Download PDF
        </Button>
      </div>
      
      <div className="border rounded-lg bg-resume-light-gray overflow-hidden">
        <ScrollArea className="h-[calc(100vh-200px)] md:h-[calc(100vh-180px)]">
          <div className="p-4 flex justify-center">
            <div 
              ref={resumeRef} 
              className="transform scale-[0.85] origin-top w-full bg-white shadow-md"
            >
              {renderTemplate(resumeData)}
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default ResumePreview;
