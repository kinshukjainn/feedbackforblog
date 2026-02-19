import { ExternalLink, FileCheck } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#242424] text-white sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between gap-2 sm:gap-3 md:gap-4">
        {/* Logo/Title - Responsive text sizing */}
        <h1 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold  flex-shrink min-w-0">
          <span className="block sm:inline">
            CloudKinshuk<span className="text-blue-500">.in</span>
          </span>
          <span className="text-gray-500 hidden sm:inline">{" / "}</span>
          <span className="block sm:inline text-gray-400 sm:text-white">
            Feedback Page
          </span>
        </h1>

        {/* Buttons Container */}
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 flex-shrink-0">
          {/* Check Format Button */}
          <Link
            href="/format-review"
            className="inline-flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-emerald-700 hover:underline text-white  font-medium text-xs sm:text-sm md:text-base whitespace-nowrap"
          >
            <span className="hidden xs:inline">Check Format of feeback </span>
            <span className="xs:hidden">Format of feedback</span>
            <FileCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" />
          </Link>

          {/* CTA Button - Responsive sizing and text */}
          <Link
            href="https://cloudkinshuk.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 px-2.5 sm:px-3 md:px-4 lg:px-5 py-1.5 sm:py-2 bg-blue-700 text-white hover:underline font-medium text-xs sm:text-sm md:text-base whitespace-nowrap"
          >
            <span className="hidden xs:inline">Cloudkinshuk.in</span>
            <span className="xs:hidden">Visit the page</span>
            <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" />
          </Link>
        </div>
      </div>
    </header>
  );
}
