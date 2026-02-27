import { NextResponse } from "next/server";

const featureWork = [
  {
    title: "Calendar Printing Landing Page",
    description: "A landing page for calendar printing services, showcasing various calendar designs and customization options.",
    roles: ["Web Development"],
    image: "/images/hero-section/feature-img-1.png"
  },
  {
    title: "MIRO Automation",
    description: "An automation tool for MIRO, designed to streamline workflow and enhance productivity by automating repetitive tasks.",
    roles: ["Web Development"],
    image: "/images/hero-section/feature-img-1.png"
  },
];

export const GET = async () => {
  return NextResponse.json({featureWork});
};