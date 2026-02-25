import { Badge } from "../../ui/badge"
import Image from "next/image";

const AboutMe = () => {
  const servicesBagde = ["Web Development", "UI/UX Design", "Data Science", "Machine Learning"];
  const skillsBadge = [
    {
      name: "Vue.js",
      icon: "/images/icon/vuejs-icon.svg"
    },
    {
      name: "Next.js",
      icon: "/images/icon/nextjs-icon.svg"
    },
    {
      name: "CodeIgniter",
      icon: "/images/icon/codeigniter-icon.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "/images/icon/tailwindcss-icon.svg"
    },
    {
      name: "Figma",
      icon: "/images/icon/figma-icon.svg"
    },
    {
      name: "Python",
      icon: "/images/icon/python-icon.svg"
    },
    {
      name: "Tableau",
      icon: "/images/icon/tableau-icon.svg"
    },
    {
      name: "Streamlit",
      icon: "/images/icon/streamlit-icon.svg"
    },
    {
      name: "Scikit-learn",
      icon: "/images/icon/scikitlearn-icon.svg"
    },
    {
      name: "TensorFlow",
      icon: "/images/icon/tensorflow-icon.svg"
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="border-x border-gray-200">
          <div className="flex flex-col gap-10 max-w-3xl mx-auto px-4 sm:px-7 pt-22 pb-8 sm:pb-12">
            <div className="flex flex-col gap-4">
              <p className="text-sm tracking-widest uppercase font-medium">About Me</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">Hey, everyone! I&apos;m Rafi Romolo, a passionate web developer and designer based in Indonesia, currently works in a manufacturing company.</h2>
              <h5 className="text-gray-500 font-medium">Digitalization Finance Accounting at PT Mekar Armada Jaya, Bekasi Regency.</h5>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm tracking-wide uppercase font-medium">Services</p>
              <div className="flex flex-wrap gap-2">
                {servicesBagde.map((value, index) => {
                  return (
                    <Badge variant={"default"} key={index}>
                      <p className="text-sm font-medium">{value}</p>
                    </Badge>
                  )
                })}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm tracking-wide uppercase font-medium">Skills</p>
              <div className="flex flex-wrap gap-2">
                {skillsBadge.map((value, index) => {
                  return (
                    <Badge variant={"default"} key={index} className="flex gap-2">
                      <Image src={value.icon} alt={`${value.name}-icon`} width={16} height={16} />
                      <p className="text-sm font-medium">{value.name}</p>
                    </Badge>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;