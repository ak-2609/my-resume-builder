import * as React from "react";
import { useState } from "react";
import { useResume, Education, Experience, Skill } from "@/context/ResumeContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Trash2, Plus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ResumeForm: React.FC = () => {
  const {
    resumeData,
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
  } = useResume();

  const [newExperience, setNewExperience] = useState<Experience>({
    company: "",
    position: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const [newEducation, setNewEducation] = useState<Education>({
    school: "",
    degree: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const [newSkill, setNewSkill] = useState<Skill>({
    name: "",
    level: 3,
  });

  const handleAddExperience = () => {
    addExperience(newExperience);
    setNewExperience({
      company: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };

  const handleAddEducation = () => {
    addEducation(newEducation);
    setNewEducation({
      school: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };

  const handleAddSkill = () => {
    if (newSkill.name.trim() === "") return;
    
    addSkill(newSkill);
    setNewSkill({
      name: "",
      level: 3,
    });
  };

  return (
    <div className="space-y-6">
      <Accordion type="single" collapsible className="w-full" defaultValue="personal">
        {/* Personal Information */}
        <AccordionItem value="personal">
          <AccordionTrigger className="text-lg font-medium">Personal Information</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={resumeData.personalInfo.firstName}
                  onChange={(e) => updatePersonalInfo("firstName", e.target.value)}
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={resumeData.personalInfo.lastName}
                  onChange={(e) => updatePersonalInfo("lastName", e.target.value)}
                  placeholder="Doe"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">Professional Title</Label>
                <Input
                  id="title"
                  value={resumeData.personalInfo.title}
                  onChange={(e) => updatePersonalInfo("title", e.target.value)}
                  placeholder="Software Engineer"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={resumeData.personalInfo.email}
                  onChange={(e) => updatePersonalInfo("email", e.target.value)}
                  placeholder="john.doe@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={resumeData.personalInfo.phone}
                  onChange={(e) => updatePersonalInfo("phone", e.target.value)}
                  placeholder="(123) 456-7890"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={resumeData.personalInfo.address}
                  onChange={(e) => updatePersonalInfo("address", e.target.value)}
                  placeholder="123 Main St"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  value={resumeData.personalInfo.city}
                  onChange={(e) => updatePersonalInfo("city", e.target.value)}
                  placeholder="New York"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Input
                  id="state"
                  value={resumeData.personalInfo.state}
                  onChange={(e) => updatePersonalInfo("state", e.target.value)}
                  placeholder="NY"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zipCode">Zip Code</Label>
                <Input
                  id="zipCode"
                  value={resumeData.personalInfo.zipCode}
                  onChange={(e) => updatePersonalInfo("zipCode", e.target.value)}
                  placeholder="10001"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="summary">Professional Summary</Label>
              <Textarea
                id="summary"
                value={resumeData.personalInfo.summary}
                onChange={(e) => updatePersonalInfo("summary", e.target.value)}
                placeholder="A brief summary of your professional background and career goals..."
                className="min-h-[100px]"
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Work Experience */}
        <AccordionItem value="experience">
          <AccordionTrigger className="text-lg font-medium">Work Experience</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-6">
              {/* Existing Experience */}
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">
                      {exp.position} at {exp.company}
                    </h3>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeExperience(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`exp-company-${index}`}>Company</Label>
                      <Input
                        id={`exp-company-${index}`}
                        value={exp.company}
                        onChange={(e) =>
                          updateExperience(index, "company", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`exp-position-${index}`}>Position</Label>
                      <Input
                        id={`exp-position-${index}`}
                        value={exp.position}
                        onChange={(e) =>
                          updateExperience(index, "position", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`exp-location-${index}`}>Location</Label>
                      <Input
                        id={`exp-location-${index}`}
                        value={exp.location}
                        onChange={(e) =>
                          updateExperience(index, "location", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`exp-start-date-${index}`}>Start Date</Label>
                      <Input
                        id={`exp-start-date-${index}`}
                        value={exp.startDate}
                        onChange={(e) =>
                          updateExperience(index, "startDate", e.target.value)
                        }
                        placeholder="MM/YYYY"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`exp-end-date-${index}`}>
                        End Date (leave blank if current)
                      </Label>
                      <Input
                        id={`exp-end-date-${index}`}
                        value={exp.endDate}
                        onChange={(e) =>
                          updateExperience(index, "endDate", e.target.value)
                        }
                        placeholder="MM/YYYY"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor={`exp-description-${index}`}>Description</Label>
                      <Textarea
                        id={`exp-description-${index}`}
                        value={exp.description}
                        onChange={(e) =>
                          updateExperience(index, "description", e.target.value)
                        }
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                </div>
              ))}

              {/* Add New Experience */}
              <div className="border rounded-lg p-4 border-dashed">
                <h3 className="font-medium mb-4">Add New Experience</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="new-company">Company</Label>
                    <Input
                      id="new-company"
                      value={newExperience.company}
                      onChange={(e) =>
                        setNewExperience({ ...newExperience, company: e.target.value })
                      }
                      placeholder="Company Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-position">Position</Label>
                    <Input
                      id="new-position"
                      value={newExperience.position}
                      onChange={(e) =>
                        setNewExperience({ ...newExperience, position: e.target.value })
                      }
                      placeholder="Job Title"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-location">Location</Label>
                    <Input
                      id="new-location"
                      value={newExperience.location}
                      onChange={(e) =>
                        setNewExperience({ ...newExperience, location: e.target.value })
                      }
                      placeholder="City, State"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-start-date">Start Date</Label>
                    <Input
                      id="new-start-date"
                      value={newExperience.startDate}
                      onChange={(e) =>
                        setNewExperience({ ...newExperience, startDate: e.target.value })
                      }
                      placeholder="MM/YYYY"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-end-date">
                      End Date (leave blank if current)
                    </Label>
                    <Input
                      id="new-end-date"
                      value={newExperience.endDate}
                      onChange={(e) =>
                        setNewExperience({ ...newExperience, endDate: e.target.value })
                      }
                      placeholder="MM/YYYY"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="new-description">Description</Label>
                    <Textarea
                      id="new-description"
                      value={newExperience.description}
                      onChange={(e) =>
                        setNewExperience({
                          ...newExperience,
                          description: e.target.value,
                        })
                      }
                      placeholder="Describe your responsibilities and achievements..."
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
                <Button
                  className="mt-4 bg-resume-blue hover:bg-resume-dark-blue"
                  onClick={handleAddExperience}
                >
                  <Plus className="mr-2 h-4 w-4" /> Add Experience
                </Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Education */}
        <AccordionItem value="education">
          <AccordionTrigger className="text-lg font-medium">Education</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-6">
              {/* Existing Education */}
              {resumeData.education.map((edu, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">
                      {edu.degree} from {edu.school}
                    </h3>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeEducation(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`edu-school-${index}`}>School</Label>
                      <Input
                        id={`edu-school-${index}`}
                        value={edu.school}
                        onChange={(e) =>
                          updateEducation(index, "school", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`edu-degree-${index}`}>Degree</Label>
                      <Input
                        id={`edu-degree-${index}`}
                        value={edu.degree}
                        onChange={(e) =>
                          updateEducation(index, "degree", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`edu-field-${index}`}>Field of Study</Label>
                      <Input
                        id={`edu-field-${index}`}
                        value={edu.fieldOfStudy}
                        onChange={(e) =>
                          updateEducation(index, "fieldOfStudy", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`edu-start-date-${index}`}>Start Date</Label>
                      <Input
                        id={`edu-start-date-${index}`}
                        value={edu.startDate}
                        onChange={(e) =>
                          updateEducation(index, "startDate", e.target.value)
                        }
                        placeholder="MM/YYYY"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`edu-end-date-${index}`}>
                        End Date (leave blank if current)
                      </Label>
                      <Input
                        id={`edu-end-date-${index}`}
                        value={edu.endDate}
                        onChange={(e) =>
                          updateEducation(index, "endDate", e.target.value)
                        }
                        placeholder="MM/YYYY"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor={`edu-description-${index}`}>Description</Label>
                      <Textarea
                        id={`edu-description-${index}`}
                        value={edu.description}
                        onChange={(e) =>
                          updateEducation(index, "description", e.target.value)
                        }
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                </div>
              ))}

              {/* Add New Education */}
              <div className="border rounded-lg p-4 border-dashed">
                <h3 className="font-medium mb-4">Add New Education</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="new-school">School</Label>
                    <Input
                      id="new-school"
                      value={newEducation.school}
                      onChange={(e) =>
                        setNewEducation({ ...newEducation, school: e.target.value })
                      }
                      placeholder="University Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-degree">Degree</Label>
                    <Input
                      id="new-degree"
                      value={newEducation.degree}
                      onChange={(e) =>
                        setNewEducation({ ...newEducation, degree: e.target.value })
                      }
                      placeholder="Bachelor's, Master's, etc."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-field">Field of Study</Label>
                    <Input
                      id="new-field"
                      value={newEducation.fieldOfStudy}
                      onChange={(e) =>
                        setNewEducation({
                          ...newEducation,
                          fieldOfStudy: e.target.value,
                        })
                      }
                      placeholder="Computer Science, Business, etc."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-edu-start-date">Start Date</Label>
                    <Input
                      id="new-edu-start-date"
                      value={newEducation.startDate}
                      onChange={(e) =>
                        setNewEducation({
                          ...newEducation,
                          startDate: e.target.value,
                        })
                      }
                      placeholder="MM/YYYY"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-edu-end-date">
                      End Date (leave blank if current)
                    </Label>
                    <Input
                      id="new-edu-end-date"
                      value={newEducation.endDate}
                      onChange={(e) =>
                        setNewEducation({ ...newEducation, endDate: e.target.value })
                      }
                      placeholder="MM/YYYY"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="new-edu-description">Description</Label>
                    <Textarea
                      id="new-edu-description"
                      value={newEducation.description}
                      onChange={(e) =>
                        setNewEducation({
                          ...newEducation,
                          description: e.target.value,
                        })
                      }
                      placeholder="Describe your achievements, courses, etc."
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
                <Button
                  className="mt-4 bg-resume-blue hover:bg-resume-dark-blue"
                  onClick={handleAddEducation}
                >
                  <Plus className="mr-2 h-4 w-4" /> Add Education
                </Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Skills */}
        <AccordionItem value="skills">
          <AccordionTrigger className="text-lg font-medium">Skills</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-6">
              {/* Existing Skills */}
              {resumeData.skills.length > 0 && (
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-4">Your Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="bg-resume-light-gray rounded-full px-3 py-1 flex items-center gap-2"
                      >
                        <span>{skill.name}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-5 w-5 p-0 rounded-full hover:bg-resume-gray hover:text-white"
                          onClick={() => removeSkill(index)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Add New Skill */}
              <div className="border rounded-lg p-4 border-dashed">
                <h3 className="font-medium mb-4">Add New Skill</h3>
                <div className="flex flex-wrap gap-4 items-end">
                  <div className="space-y-2 flex-1">
                    <Label htmlFor="new-skill-name">Skill Name</Label>
                    <Input
                      id="new-skill-name"
                      value={newSkill.name}
                      onChange={(e) =>
                        setNewSkill({ ...newSkill, name: e.target.value })
                      }
                      placeholder="e.g., JavaScript, Project Management, etc."
                    />
                  </div>
                  <div className="space-y-2 flex-1">
                    <Label htmlFor="new-skill-level">Proficiency Level (1-5)</Label>
                    <Input
                      id="new-skill-level"
                      type="range"
                      min="1"
                      max="5"
                      value={newSkill.level}
                      onChange={(e) =>
                        setNewSkill({
                          ...newSkill,
                          level: parseInt(e.target.value),
                        })
                      }
                    />
                    <div className="flex justify-between text-xs text-resume-gray">
                      <span>Beginner</span>
                      <span>Expert</span>
                    </div>
                  </div>
                  <Button
                    onClick={handleAddSkill}
                    className="bg-resume-blue hover:bg-resume-dark-blue"
                  >
                    <Plus className="mr-2 h-4 w-4" /> Add Skill
                  </Button>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ResumeForm;
