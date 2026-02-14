import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Review/issues Format - Cloudkinshuk",
  description: "Review/Issue format for Cloudkinshuk.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className={` antialiased`}>{children}</section>;
}
