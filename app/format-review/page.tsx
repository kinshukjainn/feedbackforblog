export default function FeedbackPage() {
  return (
    <div className="min-h-screen  bg-black text-green-400 font-mono p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="border border-green-400 p-4 mb-6">
          <h1 className="text-2xl  md:text-3xl mb-2">$ ./feedback --help</h1>
          <p className="text-sm opacity-80">
            FEEDBACK SUBMISSION PROTOCOL v1.0
          </p>
        </div>

        {/* Projects Section */}
        <div className="mb-8">
          <div className="bg-green-400 text-black px-3 py-1 inline-block mb-4">
            [PROJECTS]
          </div>

          <div className="border border-green-400 p-4 md:p-6 space-y-4">
            <div>
              <p className="text-green-300 mb-2">&gt; Required Fields:</p>
              <div className="pl-4 space-y-1 text-sm md:text-base">
                <p>
                  • project_name: <span className="opacity-60">[string]</span>
                </p>
                <p>
                  • issue_type:{" "}
                  <span className="opacity-60">
                    [bug | feature | enhancement | performance]
                  </span>
                </p>
                <p>
                  • severity:{" "}
                  <span className="opacity-60">
                    [critical | high | medium | low]
                  </span>
                </p>
                <p>
                  • description:{" "}
                  <span className="opacity-60">[detailed explanation]</span>
                </p>
              </div>
            </div>

            <div>
              <p className="text-green-300 mb-2">&gt; Optional Fields:</p>
              <div className="pl-4 space-y-1 text-sm md:text-base">
                <p>
                  • steps_to_reproduce:{" "}
                  <span className="opacity-60">[array of steps]</span>
                </p>
                <p>
                  • expected_behavior:{" "}
                  <span className="opacity-60">[string]</span>
                </p>
                <p>
                  • actual_behavior:{" "}
                  <span className="opacity-60">[string]</span>
                </p>
                <p>
                  • environment:{" "}
                  <span className="opacity-60">[browser/os/device info]</span>
                </p>
                <p>
                  • screenshots:{" "}
                  <span className="opacity-60">[url or attachment]</span>
                </p>
              </div>
            </div>

            <div className="bg-green-950 border border-green-600 p-3 mt-4">
              <p className="text-xs md:text-sm mb-2">Example Format:</p>
              <pre className="text-xs md:text-sm overflow-x-auto">
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
          </div>
        </div>

        {/* Blogs Section */}
        <div className="mb-8">
          <div className="bg-green-400 text-black px-3 py-1 inline-block mb-4">
            [BLOGS]
          </div>

          <div className="border border-green-400 p-4 md:p-6 space-y-4">
            <div>
              <p className="text-green-300 mb-2">&gt; Required Fields:</p>
              <div className="pl-4 space-y-1 text-sm md:text-base">
                <p>
                  • blog_title: <span className="opacity-60">[string]</span>
                </p>
                <p>
                  • feedback_type:{" "}
                  <span className="opacity-60">
                    [content | grammar | suggestion | question]
                  </span>
                </p>
                <p>
                  • message: <span className="opacity-60">[your feedback]</span>
                </p>
              </div>
            </div>

            <div>
              <p className="text-green-300 mb-2">&gt; Optional Fields:</p>
              <div className="pl-4 space-y-1 text-sm md:text-base">
                <p>
                  • section:{" "}
                  <span className="opacity-60">
                    [specific section reference]
                  </span>
                </p>
                <p>
                  • line_number:{" "}
                  <span className="opacity-60">[paragraph or line ref]</span>
                </p>
                <p>
                  • suggestion:{" "}
                  <span className="opacity-60">[proposed improvement]</span>
                </p>
                <p>
                  • rating: <span className="opacity-60">[1-5 stars]</span>
                </p>
              </div>
            </div>

            <div className="bg-green-950 border border-green-600 p-3 mt-4">
              <p className="text-xs md:text-sm mb-2">Example Format:</p>
              <pre className="text-xs md:text-sm overflow-x-auto">
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
          </div>
        </div>

        {/* Footer Notes */}
        <div className="border border-green-400 p-4 text-xs md:text-sm">
          <p className="mb-2">&gt; SUBMISSION NOTES:</p>
          <div className="pl-4 space-y-1 opacity-80">
            <p>→ All submissions are reviewed within 48-72 hours</p>
            <p>→ Critical bugs are prioritized</p>
            <p>→ Constructive feedback is appreciated</p>
            <p>→ Include contact info if you want a response</p>
          </div>
          <p className="mt-4 text-center opacity-60">
            $ echo &quot;Thank you for helping improve this space&quot;
          </p>
        </div>
      </div>
    </div>
  );
}
