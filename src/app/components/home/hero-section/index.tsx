import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const socialIcons = [
    {
      img: "/images/icon/linkedin-icon.svg",
      href: "https://www.linkedin.com/in/rafi-achmad-romolo/",
      name: "LinkedIn"
    },
  ];

  return (
    <section>
      <div className="container">
        <div>
          <div className="w-full h-72">
            <Image src={"/images/hero-section/banner-bg.png"} alt="banner-img" width={1080} height={267} className="w-full h-full object-cover" />
          </div>
          <div className="border-x border-gray-200">
            <div className="relative flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-between max-w-3xl mx-auto gap-10 sm:gap-3 px-4 sm:px-7 pt-22 pb-8 sm:pb-12">
              <div className="absolute top-0 transform -translate-y-1/2">
                <Image src={"/images/hero-section/user-img.png"} alt="user-img" width={145} height={145} className="border-4 border-white rounded-full" />
                <span className="absolute bottom-2.5 right-5 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
              </div>
              <div className="flex flex-col gap-2 sm:gap-3 items-center text-center sm:items-center">
                <h1>Rafi Romolo</h1>
                <p className="font-medium">Web Developer</p>
                <div className="flex items-center gap-2">
                  <Image src={"/images/icon/map-icon.svg"} alt="map-icon" width={20} height={20} />
                  <p>Bekasi, Indonesia</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center">
                {socialIcons.map((value, index) => {
                  return (
                    <Link href={value?.href} key={index} className="w-fit p-2.5 border border-gray-300 rounded-full">
                      <Image src={value?.img} alt={value?.name} width={18} height={18} />
                    </Link>
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

export default HeroSection;