
import EmailIcon from "../../icons/EmailIcon";
import PhoneIcon from "../../icons/PhoneIcon";
import LocationIcon from "../../icons/LocationIcon";
import WebsiteIcon from "../../icons/WebsiteIcon";

export default function CorporateEurope() {
  return (
    <div className="w-[800px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 p-10 font-sans text-gray-900">

      {/* HEADER */}
      <div className="flex items-center justify-between border-b pb-6 mb-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">John Doe</h1>
          <p className="text-xl text-gray-600">Senior Software Engineer</p>
        </div>

        <div className="w-28 h-28 rounded-full bg-gray-200 overflow-hidden">
          {/* Replace with user photo when builder is connected */}
          <img
            src="/icons/icon.svg"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* CONTACT */}
      <div className="grid grid-cols-2 gap-4 text-sm mb-8">
        <div className="flex items-center gap-2">
          <EmailIcon /> john.doe@example.com
        </div>
        <div className="flex items-center gap-2">
          <PhoneIcon /> +1 234 567 8901
        </div>
        <div className="flex items-center gap-2">
          <LocationIcon /> Berlin, Germany
        </div>
        <div className="flex items-center gap-2">
          <WebsiteIcon /> www.johndoe.dev
        </div>
      </div>

      {/* SECTIONS */}
      <div className="space-y-8">

        {/* EXPERIENCE */}
        <section>
          <h2 className="text-xl font-semibold border-b pb-1 mb-3">Experience</h2>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">Senior Software Engineer – Google</p>
              <p className="text-sm text-gray-600">2020 – Present</p>
              <p className="text-sm mt-2">
                Leading frontend development teams, building scalable tools,
                optimizing performance and UX for millions of users.
              </p>
            </div>

            <div>
              <p className="font-semibold">Frontend Engineer – Amazon</p>
              <p className="text-sm text-gray-600">2017 – 2020</p>
              <p className="text-sm mt-2">
                Developed UI systems, improved load times by 35%, created reusable components.
              </p>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section>
          <h2 className="text-xl font-semibold border-b pb-1 mb-3">Education</h2>
          <div>
            <p className="font-semibold">BSc. Computer Science – MIT</p>
            <p className="text-sm text-gray-600">2013 – 2017</p>
          </div>
        </section>

        {/* SKILLS */}
        <section>
          <h2 className="text-xl font-semibold border-b pb-1 mb-3">Skills</h2>
          <ul className="grid grid-cols-2 list-disc ml-5 text-sm gap-1">
            <li>React</li>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>UI/UX Design</li>
            <li>Team Leadership</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
