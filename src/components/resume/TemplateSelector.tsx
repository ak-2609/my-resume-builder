import * as React from "react";
import { useResume } from "@/context/ResumeContext";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const TemplateSelector: React.FC = () => {
  const { template, setTemplate } = useResume();

  const templates = [
    {
      id: "basic",
      name: "Basic",
      description: "Clean and simple layout, perfect for traditional industries",
    },
    {
      id: "modern",
      name: "Modern",
      description: "Contemporary design with a professional color scheme",
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium">Select a Template</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {templates.map((t) => (
          <Card
            key={t.id}
            className={`cursor-pointer transition-all ${
              template === t.id
                ? "ring-2 ring-resume-blue"
                : "hover:border-resume-blue"
            }`}
            onClick={() => setTemplate(t.id as "basic" | "modern")}
          >
            <CardContent className="p-4 flex items-start gap-4">
              <div className="relative flex items-center justify-center w-16 h-16 rounded bg-resume-light-gray">
                <span className="font-medium">{t.name}</span>
                {template === t.id && (
                  <div className="absolute -top-2 -right-2 bg-resume-blue text-white rounded-full p-1">
                    <Check className="h-3 w-3" />
                  </div>
                )}
              </div>
              <div>
                <h3 className="font-medium">{t.name}</h3>
                <p className="text-sm text-resume-gray">{t.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
