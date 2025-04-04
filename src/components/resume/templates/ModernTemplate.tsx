//import React from "react";
import * as React from 'react';
import { ResumeData } from "@/context/ResumeContext";
import { Mail, Phone, MapPin, Star } from "lucide-react";

interface ModernTemplateProps {
  data: ResumeData;
}

const ModernTemplate: React.FC<ModernTemplateProps> = ({ data }) => {
  const { personalInfo, experience, education, skills } = data;

  return (
    <div className="w-full bg-white shadow-lg max-w-[800px] mx-auto">
      {/* Header */}
      <div className="bg-blue-600 text-white p-8">
        <h1 className="text-3xl font-bold">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <p className="mt-1 text-xl">{personalInfo.title}</p>
        
        <div className="mt-4 flex flex-wrap gap-6 text-sm">
          {personalInfo.email && (
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span>{personalInfo.email}</span>
            </div>
          )}
          
          {personalInfo.phone && (
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          
          {(personalInfo.address || personalInfo.city || personalInfo.state) && (
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        {/* Left column */}
        <div className="md:col-span-1">
          {/* Skills */}
          {skills.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-bold border-b-2 border-blue-300 pb-2 mb-3">SKILLS</h2>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <div className="w-full bg-resume-light-gray rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${Math.min(skill.level * 20, 100)}%` }}
                    ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {education.length > 0 && (
            <div>
              <h2 className="text-lg font-bold border-b-2 border-blue-300 pb-2 mb-3">EDUCATION</h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="font-bold">{edu.school}</h3>
                    <p className="text-blue-600">{edu.degree}</p>
                    <p className="text-sm text-resume-gray">{edu.fieldOfStudy}</p>
                    <p className="text-sm text-resume-gray italic">
                      {edu.startDate} - {edu.endDate || "Present"}
                    </p>
                    <p className="text-sm mt-1">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right column */}
        <div className="md:col-span-2">
          {/* Summary */}
          {personalInfo.summary && (
            <div className="mb-6">
              <h2 className="text-lg font-bold border-b-2 border-blue-300 pb-2 mb-3">PROFESSIONAL SUMMARY</h2>
              <p className="text-gray-700">{personalInfo.summary}</p>
            </div>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <div>
              <h2 className="text-lg font-bold border-b-2 border-blue-300 pb-2 mb-3">WORK EXPERIENCE</h2>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index}>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <h3 className="font-bold text-lg">{exp.position}</h3>
                      <div className="text-resume-gray text-sm">
                        {exp.startDate} - {exp.endDate || "Present"}
                      </div>
                    </div>
                    <p className="text-blue-600 mb-2">{exp.company}, {exp.location}</p>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModernTemplate;