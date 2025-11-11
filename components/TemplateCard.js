// components/TemplateCard.js
import Image from "next/image";

export default function TemplateCard({ tpl, isProUser, onTryPro, onUse }) {
  // tpl = { name, img, type }  type = "Free" or "Pro"
  const isProTpl = tpl.type === "Pro";

  return (
    <div className="template" onClick={() => onUse(tpl)}>
      <div className="imgwrap">
        {/* actual image (must exist under /public/template_images/) */}
        <Image src={tpl.img} alt={tpl.name} fill style={{ objectFit: "cover" }} />
        {isProTpl && <div className="pro-badge">PRO</div>}

        {/* watermark if pro template and user not pro */}
        {isProTpl && !isProUser && (
          <div className="watermark">VITA OnlineCV</div>
        )}
      </div>

      <div className="label">
        <h4>{tpl.name}</h4>
        <p>{isProTpl ? "Premium design" : "Free template"}</p>
      </div>
    </div>
  );
}
