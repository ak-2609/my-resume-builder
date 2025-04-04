import * as React from "react";
const { createContext, useContext, useState } = React;

export type Education = {
  school: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type Experience = {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type Skill = {
  name: string;
  level: number;
};

export type ResumeData = {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    title: string;
    summary: string;
  };
  experience: Experience[];
  education: Education[];
  skills: Skill[];
};

export type TemplateType = "basic" | "modern";

type ResumeContextType = {
  resumeData: ResumeData;
  template: TemplateType;
  updatePersonalInfo: (field: string, value: string) => void;
  addExperience: (experience: Experience) => void;
  updateExperience: (index: number, field: string, value: string) => void;
  removeExperience: (index: number) => void;
  addEducation: (education: Education) => void;
  updateEducation: (index: number, field: string, value: string) => void;
  removeEducation: (index: number) => void;
  addSkill: (skill: Skill) => void;
  updateSkill: (index: number, field: string, value: string | number) => void;
  removeSkill: (index: number) => void;
  setTemplate: (template: TemplateType) => void;
};

const defaultResumeData: ResumeData = {
  personalInfo: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    title: "",
    summary: "",
  },
  experience: [],
  education: [],
  skills: [],
};

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);
  const [template, setTemplate] = useState<TemplateType>("basic");

  const updatePersonalInfo = (field: string, value: string) => {
    setResumeData({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        [field]: value,
      },
    });
  };

  const addExperience = (experience: Experience) => {
    setResumeData({
      ...resumeData,
      experience: [...resumeData.experience, experience],
    });
  };

  const updateExperience = (index: number, field: string, value: string) => {
    const updatedExperience = [...resumeData.experience];
    updatedExperience[index] = {
      ...updatedExperience[index],
      [field]: value,
    };
    setResumeData({
      ...resumeData,
      experience: updatedExperience,
    });
  };

  const removeExperience = (index: number) => {
    const updatedExperience = resumeData.experience.filter((_, i) => i !== index);
    setResumeData({
      ...resumeData,
      experience: updatedExperience,
    });
  };

  const addEducation = (education: Education) => {
    setResumeData({
      ...resumeData,
      education: [...resumeData.education, education],
    });
  };

  const updateEducation = (index: number, field: string, value: string) => {
    const updatedEducation = [...resumeData.education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [field]: value,
    };
    setResumeData({
      ...resumeData,
      education: updatedEducation,
    });
  };

  const removeEducation = (index: number) => {
    const updatedEducation = resumeData.education.filter((_, i) => i !== index);
    setResumeData({
      ...resumeData,
      education: updatedEducation,
    });
  };

  const addSkill = (skill: Skill) => {
    setResumeData({
      ...resumeData,
      skills: [...resumeData.skills, skill],
    });
  };

  const updateSkill = (index: number, field: string, value: string | number) => {
    const updatedSkills = [...resumeData.skills];
    updatedSkills[index] = {
      ...updatedSkills[index],
      [field]: value,
    };
    setResumeData({
      ...resumeData,
      skills: updatedSkills,
    });
  };

  const removeSkill = (index: number) => {
    const updatedSkills = resumeData.skills.filter((_, i) => i !== index);
    setResumeData({
      ...resumeData,
      skills: updatedSkills,
    });
  };

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        template,
        updatePersonalInfo,
        addExperience,
        updateExperience,
        removeExperience,
        addEducation,
        updateEducation,
        removeEducation,
        addSkill,
        updateSkill,
        removeSkill,
        setTemplate,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error("useResume must be used within a ResumeProvider");
  }
  return context;
};
