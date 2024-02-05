import type Image from "next/image";
import { FadeIn } from "@/components/pages/home-shared/FadeIn";
import {
  SectionHeader,
  SectionSubtext,
} from "@/components/pages/home-shared/Headings";
import { FeatureBox } from "@/components/pages/home-shared/FeatureBox";

type NextImageSrc = Parameters<typeof Image>[0]["src"];

export interface FeaturesCardData {
  title: string;
  description: string;
  bgImgDark: NextImageSrc;
  bgImgLight: NextImageSrc;
}

export const featuresCardData: FeaturesCardData[] = [
  {
    title: "Animations",
    description: "",
    bgImgDark: "/img/features/animations-dark.gif",
    bgImgLight: "/img/features/animations.gif",
  },
  {
    title: "Real-time collaboration",
    description: "",
    bgImgDark: "/img/features/collaboration-dark.gif",
    bgImgLight: "/img/features/collaboration.gif",
  },
  {
    title: "Helpful placeholders",
    description: "",
    bgImgDark: "/img/features/placeholders-dark.gif",
    bgImgLight: "/img/features/placeholders.gif",
  },
  {
    title: "Nesting & indentation",
    description: "",
    bgImgDark: "/img/features/nesting-dark.gif",
    bgImgLight: "/img/features/nesting.gif",
  },
  {
    title: "Drag and drop blocks",
    description: "",
    bgImgDark: "/img/features/dragdrop-dark.gif",
    bgImgLight: "/img/features/dragdrop.gif",
  },
  {
    title: "Customizable slash (/) menu",
    description: "",
    bgImgDark: "/img/features/slashmenu-dark.gif",
    bgImgLight: "/img/features/slashmenu.gif",
  },
  {
    title: "Format menu",
    description: "",
    bgImgDark: "/img/features/formattingtoolbar-dark.gif",
    bgImgLight: "/img/features/formattingtoolbar.gif",
  },
];

export function PackFeatures() {
  return (
    <section className="relative flex flex-col items-center px-6 py-16 pb-16 font-sans md:pb-24 lg:pb-32 gap-9 lg:gap-14">
      <FadeIn className="flex flex-col items-center gap-5 md:gap-6">
        <SectionHeader>{"Why BlockNote?"}</SectionHeader>
        <SectionSubtext>{"With a "}</SectionSubtext>
      </FadeIn>
      <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-6 max-w-[1200px]">
        {featuresCardData.map((feature) => (
          <FadeIn className="flex" key={feature.title}>
            <FeatureBox
              description={feature.description}
              iconDark={feature.bgImgDark}
              iconLight={feature.bgImgLight}
              name={feature.title}
            />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}