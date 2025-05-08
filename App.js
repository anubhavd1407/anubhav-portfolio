import React from "react";
import { Mail, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-b from-gray-100 to-white px-4">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">Anubhav Dwivedi</h1>
        <p className="text-xl font-medium text-gray-600">Senior Technical Program Manager</p>
        <p className="mt-4 max-w-xl text-lg text-gray-500">
          Delivering scalable IT solutions through agile leadership and program execution.
        </p>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-4 border-b-2 border-gray-200 pb-2">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I lead and execute complex IT projects that support the organization's mission to deliver global standards for data,
          products, and services. I apply my agile expertise and problem-solving skills to deliver solutions that meet the needs and expectations
          of various stakeholders, including clients, vendors, and internal teams.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          I hold an MBA from DeGroote School of Business – McMaster University, and certifications such as PMP, PSM, CSPO, and SAP.
          My goal is to leverage my technical and business skills to create value and innovation for the IT industry.
        </p>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-gray-200 pb-2">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["IBM to Azure Migration – GS1 Canada",
              "Build Application from Scratch – MMGLN, MMGTIN, 2D – GS1 Canada",
              "ERP Implementation – Wuxly Movement",
              "SAP R3 to HANA Migration – Accenture",
              "Implementation of Disaster Recovery – GS1 Canada",
              "IAM Implementation and Migration – GS1 Canada",
              "Rebuilding the Platform (ECCnet Registry) – GS1 Canada"
            ].map((project, idx) => (
              <div key={idx} className="bg-white p-4 shadow-sm rounded-lg border border-gray-200">
                {project}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-4 border-b-2 border-gray-200 pb-2">Resume</h2>
        <a
          href="/resume/Programmanager-Adresume2025.pdf"
          className="inline-block mt-2 text-blue-600 hover:underline"
          download
        >
          Download My Resume (PDF)
        </a>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-gray-300 pb-2">Contact</h2>
          <div className="flex space-x-6">
            <a
              href="mailto:anubhavd1407@gmail.com"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/anubhavdwivedi14/"
              target="_blank"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
