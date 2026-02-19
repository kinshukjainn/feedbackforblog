import React from "react";

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-[#313131] text-gray-200 font-sans p-4 md:p-8 leading-relaxed selection:bg-cyan-900 selection:text-white">
      <div className="max-w-4xl mx-auto">
        {/* Document Header */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
            Feedback Submission Protocol
          </h1>
          <p className="text-sm text-gray-400 font-mono">Version 1.0.0</p>
          <hr className="border-[#4a4a4a] my-6" />
        </header>

        {/* Quick TOC (Optional but very "ffmpeg docs" style) */}
        <nav className="mb-12 bg-[#2a2a2a] p-4 border border-[#4a4a4a] rounded-sm">
          <h2 className="text-lg font-semibold text-white mb-3">
            Table of Contents
          </h2>
          <ul className="space-y-1 text-sm text-cyan-400 font-mono">
            <li>
              <a href="#projects" className="hover:underline">
                1. Projects Feedback
              </a>
            </li>
            <li>
              <a href="#blogs" className="hover:underline">
                2. Blogs Feedback
              </a>
            </li>
            <li>
              <a href="#notes" className="hover:underline">
                3. Submission Notes
              </a>
            </li>
          </ul>
        </nav>

        {/* 1. Projects Section */}
        <section id="projects" className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 border-b border-[#4a4a4a] pb-2">
            1. Projects Feedback
          </h2>
          <p className="mb-6 text-gray-300">
            Submit bug reports, feature requests, or performance issues related
            to specific projects using the following parameters.
          </p>

          <h3 className="text-lg font-semibold text-white mb-4">
            1.1 Required Parameters
          </h3>
          <dl className="space-y-4 mb-8">
            <div>
              <dt className="font-mono text-cyan-300 font-bold">
                -project_name{" "}
                <span className="text-gray-400 font-normal italic">
                  &lt;string&gt;
                </span>
              </dt>
              <dd className="pl-4 md:pl-8 mt-1 text-sm md:text-base text-gray-300">
                The exact name of the project you are providing feedback for.
              </dd>
            </div>
            <div>
              <dt className="font-mono text-cyan-300 font-bold">
                -issue_type{" "}
                <span className="text-gray-400 font-normal italic">
                  &lt;bug | feature | enhancement | performance&gt;
                </span>
              </dt>
              <dd className="pl-4 md:pl-8 mt-1 text-sm md:text-base text-gray-300">
                Categorizes the nature of the feedback.
              </dd>
            </div>
            <div>
              <dt className="font-mono text-cyan-300 font-bold">
                -severity{" "}
                <span className="text-gray-400 font-normal italic">
                  &lt;critical | high | medium | low&gt;
                </span>
              </dt>
              <dd className="pl-4 md:pl-8 mt-1 text-sm md:text-base text-gray-300">
                Indicates the impact level of the issue.
              </dd>
            </div>
            <div>
              <dt className="font-mono text-cyan-300 font-bold">
                -description{" "}
                <span className="text-gray-400 font-normal italic">
                  &lt;string&gt;
                </span>
              </dt>
              <dd className="pl-4 md:pl-8 mt-1 text-sm md:text-base text-gray-300">
                A detailed explanation of the issue or feature request.
              </dd>
            </div>
          </dl>

          <h3 className="text-lg font-semibold text-white mb-4">
            1.2 Optional Parameters
          </h3>
          <dl className="space-y-4 mb-8">
            <div>
              <dt className="font-mono text-cyan-300 font-bold">
                -steps_to_reproduce{" "}
                <span className="text-gray-400 font-normal italic">
                  &lt;array&gt;
                </span>
              </dt>
              <dd className="pl-4 md:pl-8 mt-1 text-sm md:text-base text-gray-300">
                A sequential list of steps required to trigger the bug.
              </dd>
            </div>
            <div>
              <dt className="font-mono text-cyan-300 font-bold">
                -expected_behavior{" "}
                <span className="text-gray-400 font-normal italic">
                  &lt;string&gt;
                </span>
              </dt>
              <dd className="pl-4 md:pl-8 mt-1 text-sm md:text-base text-gray-300">
                What should happen under normal operation.
              </dd>
            </div>
            <div>
              <dt className="font-mono text-cyan-300 font-bold">
                -actual_behavior{" "}
                <span className="text-gray-400 font-normal italic">
                  &lt;string&gt;
                </span>
              </dt>
              <dd className="pl-4 md:pl-8 mt-1 text-sm md:text-base text-gray-300">
                What actually happens (if different from description).
              </dd>
            </div>
            <div>
              <dt className="font-mono text-cyan-300 font-bold">
                -environment{" "}
                <span className="text-gray-400 font-normal italic">
                  &lt;string&gt;
                </span>
              </dt>
              <dd className="pl-4 md:pl-8 mt-1 text-sm md:text-base text-gray-300">
                Contextual information such as Browser, OS, and Device.
              </dd>
            </div>
            <div>
              <dt className="font-mono text-cyan-300 font-bold">
                -screenshots{" "}
                <span className="text-gray-400 font-normal italic">
                  &lt;url | attachment&gt;
                </span>
              </dt>
              <dd className="pl-4 md:pl-8 mt-1 text-sm md:text-base text-gray-300">
                Visual proof or context for the submission.
              </dd>
            </div>
          </dl>

          <h3 className="text-lg font-semibold text-white mb-4">
            1.3 Example Usage
          </h3>
          <div className="bg-[#232323] border border-[#4a4a4a] p-4 rounded-sm">
            <pre className="text-sm font-mono text-gray-300 overflow-x-auto">
              {`{
  "project_name": "Portfolio Site",
  "issue_type": "bug",
  "severity": "high",
  "description": "Contact form not submitting",
  "steps_to_reproduce": [
    "1. Navigate to /contact",
    "2. Fill out all fields",
    "3. Click submit button"
  ],
  "environment": "Chrome 120, Windows 11"
}`}
            </pre>
          </div>
        </section>

        {/* 2. Blogs Section */}
        <section id="blogs" className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 border-b border-[#4a4a4a] pb-2">
            2. Blogs Feedback
          </h2>
          <p className="mb-6 text-gray-300">
            Submit corrections, suggestions, or questions regarding published
            blog content.
          </p>

          <h3 className="text-lg font-semibold text-white mb-4">
            2.1 Required Parameters
          </h3>
          <dl className="space-y-4 mb-8">
            <div>
              <dt className="font-mono text-cyan-300 font-bold">
                -blog_title{" "}
                <span className="text-gray-400 font-normal italic">
                  &lt;string&gt;
                </span>
              </dt>
              <dd className="pl-4 md:pl-8 mt-1 text-sm md:text-base text-gray-300">
                The exact title of the blog post.
              </dd>
            </div>
            <div>
              <dt className="font-mono text-cyan-300 font-bold">
                -feedback_type{" "}
                <span className="text-gray-400 font-normal italic">
                  &lt;content | grammar | suggestion | question&gt;
                </span>
              </dt>
              <dd className="pl-4 md:pl-8 mt-1 text-sm md:text-base text-gray-300">
                The classification of your feedback.
              </dd>
            </div>
            <div>
              <dt className="font-mono text-cyan-300 font-bold">
                -message{" "}
                <span className="text-gray-400 font-normal italic">
                  &lt;string&gt;
                </span>
              </dt>
              <dd className="pl-4 md:pl-8 mt-1 text-sm md:text-base text-gray-300">
                The core content of your feedback.
              </dd>
            </div>
          </dl>

          <h3 className="text-lg font-semibold text-white mb-4">
            2.2 Optional Parameters
          </h3>
          <dl className="space-y-4 mb-8">
            <div>
              <dt className="font-mono text-cyan-300 font-bold">
                -section{" "}
                <span className="text-gray-400 font-normal italic">
                  &lt;string&gt;
                </span>
              </dt>
              <dd className="pl-4 md:pl-8 mt-1 text-sm md:text-base text-gray-300">
                Reference to a specific header or section within the blog.
              </dd>
            </div>
            <div>
              <dt className="font-mono text-cyan-300 font-bold">
                -line_number{" "}
                <span className="text-gray-400 font-normal italic">
                  &lt;string | integer&gt;
                </span>
              </dt>
              <dd className="pl-4 md:pl-8 mt-1 text-sm md:text-base text-gray-300">
                Specific paragraph or line reference.
              </dd>
            </div>
            <div>
              <dt className="font-mono text-cyan-300 font-bold">
                -suggestion{" "}
                <span className="text-gray-400 font-normal italic">
                  &lt;string&gt;
                </span>
              </dt>
              <dd className="pl-4 md:pl-8 mt-1 text-sm md:text-base text-gray-300">
                Your proposed improvement or rewritten text.
              </dd>
            </div>
            <div>
              <dt className="font-mono text-cyan-300 font-bold">
                -rating{" "}
                <span className="text-gray-400 font-normal italic">
                  &lt;integer&gt;
                </span>
              </dt>
              <dd className="pl-4 md:pl-8 mt-1 text-sm md:text-base text-gray-300">
                A score from 1 to 5 stars.
              </dd>
            </div>
          </dl>

          <h3 className="text-lg font-semibold text-white mb-4">
            2.3 Example Usage
          </h3>
          <div className="bg-[#232323] border border-[#4a4a4a] p-4 rounded-sm">
            <pre className="text-sm font-mono text-gray-300 overflow-x-auto">
              {`{
  "blog_title": "Getting Started with React",
  "feedback_type": "suggestion",
  "message": "Great article! Consider adding...",
  "section": "Hooks Introduction",
  "rating": 5,
  "suggestion": "Add useCallback example"
}`}
            </pre>
          </div>
        </section>

        {/* 3. Notes Section */}
        <section id="notes" className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 border-b border-[#4a4a4a] pb-2">
            3. Submission Notes
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-8 ml-2">
            <li>All submissions are reviewed within 48-72 hours.</li>
            <li>
              Critical bugs reported under the projects endpoint are
              prioritized.
            </li>
            <li>Constructive feedback is highly appreciated.</li>
            <li>
              Please include contact information in your payload if you require
              a response.
            </li>
          </ul>

          <div className="text-center mt-12 pt-8 border-t border-[#4a4a4a] text-gray-500 font-mono text-sm">
            EOF: Thank you for helping improve this space.
          </div>
        </section>
      </div>
    </div>
  );
}
