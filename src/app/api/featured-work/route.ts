import { NextResponse } from "next/server";

const featureWork = [
  {
    title: "Calendar Printing Landing Page",
    description: "A landing page for calendar printing services, showcasing various calendar designs and customization options.",
    roles: ["Web Development"],
    images: "/images/hero-section/user-img.png"
  },
  {
    title: "Calendar Printing Landing Page",
    description: "A landing page for calendar printing services, showcasing various calendar designs and customization options.",
    roles: ["Web Development"],
    images: "/images/hero-section/user-img.png"
  },
];

export const GET = async () => {
  return NextResponse.json({featureWork});
};