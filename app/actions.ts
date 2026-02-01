"use server";

import { supabase } from "./libirary/supabase";

interface FeedbackFormData {
  name: string | null;
  email: string | null;
  github_username: string | null;
  feedback: string;
}

export async function submitFeedback(
  formData: FormData,
): Promise<{ success: boolean; message: string }> {
  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const github_username = formData.get("github_username") as string | null;
  const feedback = formData.get("feedback") as string;

  // Validate feedback is required and at least 10 characters
  if (!feedback || feedback.trim().length < 10) {
    throw new Error(
      "Feedback is required and must be at least 10 characters long",
    );
  }

  const feedbackData: FeedbackFormData = {
    name: name && name.trim() ? name.trim() : null,
    email: email && email.trim() ? email.trim() : null,
    github_username:
      github_username && github_username.trim() ? github_username.trim() : null,
    feedback: feedback.trim(),
  };

  const { error } = await supabase.from("feedbacks").insert([feedbackData]);

  if (error) {
    throw new Error(`Failed to submit feedback: ${error.message}`);
  }

  return { success: true, message: "Thank you for your feedback!" };
}
