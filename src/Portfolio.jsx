
import React from "react";
import { Mail, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="p-6 max-w-4xl mx-auto space-y-12">
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Anubhav Dwivedi</h1>
        <p className="text-xl text-gray-600">Senior Technical Program Manager</p>
      </section>
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p>
          As a Senior Technical Program Manager, I lead and execute complex IT projects
          that support the organization's mission to deliver global standards for data,
          products, and services. I apply my agile expertise and problem-solving skills to
          deliver solutions that meet the needs and expectations of various stakeholders.
        </p>
        <p>
          I hold an MBA from DeGroote School of Business – McMaster University and certifications
          including PMP, PSM, CSPO, and SAP. My goal is to leverage my technical and business
          skills to create value and innovation for the IT industry.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Projects</h2>
        {[
          "IBM to Azure Migration – GS1 Canada",
          "Build Application from Scratch – MMGLN, MMGTIN, 2D – GS1 Canada",
          "ERP Implementation – Wuxly Movement",
          "SAP R3 to HANA Migration – Accenture",
          "Implementation of Disaster Recovery – GS1 Canada",
          "IAM Implementation and Migration – GS1 Canada",
          "Rebuilding the Platform (ECCnet Registry) – GS1 Canada"
        ].map((project, idx) => (
          <div key={idx} className="p-4 border border-gray-200 rounded-lg shadow-sm">{project}</div>
        ))}
      </section>
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Resume</h2>
        <a
          href="/resume/Programmanager-Adresume2025.pdf"
          className="text-blue-600 hover:underline"
          download
        >
          Download My Resume (PDF)
        </a>
      </section>
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <div className="flex space-x-4">
          <a href="mailto:anubhavd1407@gmail.com" className="flex items-center space-x-2">
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/anubhavdwivedi14/"
            target="_blank"
            className="flex items-center space-x-2"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </div>
      </section>
    </main>
  );
}
