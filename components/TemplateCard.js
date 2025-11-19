import React from "react";
import Link from "next/link";

export default function TemplateCard({ template }) {
  return (
    <Link href={`/templates/${template.id}`}>

      <div className="border rounded-xl p-4 hover:shadow-lg transition cursor-pointer bg-white">
        
        <img
          src={template.previewImage}
          alt={template.name}
          className="w-full h-64 object-cover rounded-md border"
        />

        <h3 className="text-lg font-semibold mt-3">{template.name}</h3>
        <p className="text-sm text-gray-600">{template.description}</p>

        {template.category === "pro" && (
          <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-md mt-2 inline-block">
            PRO
          </span>
        )}
      </div>
    </Link>
  );
}
