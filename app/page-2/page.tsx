import type { Metadata } from "next";
import AISearchScorecard from "@/components/AISearchScorecard";

export const metadata: Metadata = {
  title: "AI Search Visibility Scorecard | WX Partners",
  description:
    "Austbrokers SPT AI search visibility scorecard, competitive citation analysis, and 90-day improvement plan.",
};

export default function PageTwo() {
  return <AISearchScorecard />;
}
