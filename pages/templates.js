import { useRouter } from "next/router";
import dynamic from "next/dynamic";

export default function TemplatesPage() {
  const router = useRouter();
  const { template } = router.query;

  // Map template names to files
  const templates = {
    CorporateEurope: dynamic(() =>
      import("../components/templates/CorporateEurope/CorporateEurope.jsx")
    ),
  };

  const TemplateComponent = template ? templates[template] : null;

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6">Template Preview</h1>

      {!template && (
        <p className="text-gray-600">No template selected.</p>
      )}

      {template && !TemplateComponent && (
        <p className="text-red-600">Template not found.</p>
      )}

      {TemplateComponent && (
        <div className="flex justify-center">
          <TemplateComponent />
        </div>
      )}
    </div>
  );
}
