export default function Templates() {
  const templates = [
    { name: "Corporate Europe", img: "/template_images/corporate.jpg", pro: false },
    { name: "Minimal Nordic", img: "/template_images/nordic.jpg", pro: false },
    { name: "Modern Creative", img: "/template_images/creative.jpg", pro: true },
    { name: "Student Compact", img: "/template_images/student.jpg", pro: false },
    { name: "Tech International", img: "/template_images/tech.jpg", pro: false },
    { name: "Elegant Classic", img: "/template_images/classic.jpg", pro: true },
    { name: "Professional Edge", img: "/template_images/edge.jpg", pro: false },
    { name: "Aesthetic Balance", img: "/template_images/aesthetic.jpg", pro: true },
  ];

  return (
    <section className="min-h-screen bg-[#FAF8F4] text-[#3C3C3B] px-6 py-20">
      <h1 className="text-4xl font-semibold text-center mb-10">
        Explore Our Templates
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {templates.map((t, i) => (
          <div key={i} className="relative bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition">
            {t.pro && (
              <span className="absolute top-3 left-3 bg-[#C86E3B] text-white text-xs px-3 py-1 rounded-full shadow">
                PRO
              </span>
            )}
            <img src={t.img} alt={t.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="font-medium text-lg">{t.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
