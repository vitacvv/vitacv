import { templates } from "../../templates";

export default function TemplatePreview({ template }) {
  if (!template) return <p>Template not found.</p>;

  const Component = template.component;

  return (
    <div className="p-10 bg-gray-50 min-h-screen flex justify-center">
      <Component />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const template = templates.find((t) => t.id === params.id) || null;

  return {
    props: { template },
  };
}
