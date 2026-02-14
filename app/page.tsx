"use client";

import { useState, FormEvent, JSX } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Loader2,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Lightbulb,
  Target,
} from "lucide-react";
import { submitFeedback } from "./actions";

interface SubmissionState {
  status: "idle" | "loading" | "success" | "error";
  message: string;
}

export default function FeedbackPage(): JSX.Element {
  const [state, setState] = useState<SubmissionState>({
    status: "idle",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);

    try {
      const formData = new FormData(form);
      const result = await submitFeedback(formData);
      setState({ status: "success", message: result.message });
      form.reset();
      setTimeout(() => setState({ status: "idle", message: "" }), 5000);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";
      setState({ status: "error", message: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-4 lg:p-8">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Side - Branding & Guidelines */}
        <div className="flex flex-col justify-center space-y-6 lg:space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Raise <span className="font-mono">Feedback</span> for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r  from-yellow-400 via-green-500 to-red-500">
                Blogs
              </span>
            </h1>
            <p className="text-gray-400 text-lg lg:text-xl">
              Your issues and feedback helps me to improve my website and
              blogs/products better
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-500" />
              Issue / Feedback Submission Guidelines
            </h2>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-1.5">
                <MessageSquare className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-medium mb-1">Be Specific</h3>
                  <p className="text-gray-400 text-sm">
                    Share your detailed thoughts about what you liked or what
                    can be improved in blogs and other projects.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-1.5">
                <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-medium mb-1">
                    Be Constructive
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Give specific suggestions like UI/UX improvements or content
                    variations. Give suggestions that can help me improve. Be
                    respecfull while giving negative feedback.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-1.5">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-medium mb-1">
                    Give feedback in proper format
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Use the form on the right to submit your feedback. Make sure
                    to fill in the required fields.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block pt-4">
            <p className="text-gray-500 text-sm">
              All feedback is reviewed by our team and helps shape our roadmap.
            </p>
          </div>
        </div>

        {/* Right Side - Feedback Form */}
        <div className="flex items-center">
          <Card className="w-full border-none bg-[#141414] border-gray-800">
            <CardHeader className="space-y-2">
              <CardTitle className="text-2xl font-bold text-white">
                Share Your Feedback
              </CardTitle>
              <CardDescription className="text-gray-400">
                We&apos;d love to hear your thoughts and suggestions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-bold text-white"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    disabled={isSubmitting}
                    className="bg-[#252525] text-white border-gray-800 focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold text-white"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    disabled={isSubmitting}
                    className="bg-[#252525] text-white border-gray-800 focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="github_username"
                    className="text-sm font-bold text-white"
                  >
                    GitHub / Instagram Username
                  </label>
                  <Input
                    id="github_username"
                    name="github_username"
                    type="text"
                    placeholder="@github_handle / Instagram_handle"
                    disabled={isSubmitting}
                    className="bg-[#252525] font-mono border-gray-800 text-green-500 focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="feedback"
                    className="text-sm font-bold text-white"
                  >
                    Feedback <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="feedback"
                    name="feedback"
                    placeholder="Please share your feedback (minimum 10 characters)"
                    disabled={isSubmitting}
                    rows={5}
                    className="bg-[#252525] font-mono border-gray-800 text-white resize-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {state.status === "success" && (
                  <Alert className="bg-green-950 border-green-800">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <AlertDescription className="text-green-300">
                      {state.message}
                    </AlertDescription>
                  </Alert>
                )}

                {state.status === "error" && (
                  <Alert
                    variant="destructive"
                    className="bg-red-950 border-red-800"
                  >
                    <AlertCircle className="h-4 w-4 text-red-500" />
                    <AlertDescription className="text-red-300">
                      {state.message}
                    </AlertDescription>
                  </Alert>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 cursor-pointer text-white font-medium px-4 py-2 rounded-full transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Feedback"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
