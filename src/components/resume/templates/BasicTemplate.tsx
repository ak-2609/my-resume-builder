//import React from "react";
import * as React from 'react';
import { ResumeData } from "@/context/ResumeContext";
import { Mail, Phone, MapPin } from "lucide-react";

interface BasicTemplateProps {
  data: ResumeData;
}

const BasicTemplate: React.FC<BasicTemplateProps> = ({ data }) => {
  const { personalInfo, experience, education, skills } = data;

  return (
    <div className="w-full bg-white shadow-lg p-8 max-w-[800px] mx-auto">
      {/* Header */}
      <div className="border-b border-gray-300 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-resume-dark-gray">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <p className="text-blue-600 mt-1 text-lg">{personalInfo.title}</p>
        
        <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-600">
          {personalInfo.email && (
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              <span>{personalInfo.email}</span>
            </div>
          )}
          
          {personalInfo.phone && (
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          
          {(personalInfo.address || personalInfo.city || personalInfo.state) && (
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>
                {[
                  personalInfo.address,
                  personalInfo.city,
                  personalInfo.state,
                  personalInfo.zipCode,
                ]
                  .filter(Boolean)
                  .join(", ")}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2 text-blue-600">Professional Summary</h2>
          <p className="text-gray-700">{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2 text-blue-600">Work Experience</h2>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={index} className="border-l-2 border-blue-300 pl-4">
                <h3 className="font-bold">{exp.position}</h3>
                <div className="text-resume-gray text-sm mb-1">
                  {exp.company} | {exp.location}
                </div>
                <div className="text-resume-gray text-sm mb-2 italic">
                  {exp.startDate} - {exp.endDate || "Present"}
                </div>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2 text-blue-600">Education</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-blue-300 pl-4">
                <h3 className="font-bold">{edu.degree}</h3>
                <div className="text-resume-gray text-sm mb-1">
                  {edu.school} | {edu.fieldOfStudy}
                </div>
                <div className="text-resume-gray text-sm mb-2 italic">
                  {edu.startDate} - {edu.endDate || "Present"}
                </div>
                <p className="text-gray-700">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div>
          <h2 className="text-lg font-bold mb-2 text-blue-600">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <div key={index} className="bg-resume-light-gray px-3 py-1 rounded-full text-resume-dark-gray">
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BasicTemplate;