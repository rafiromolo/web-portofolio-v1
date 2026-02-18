import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="container">
        <div>
          <div className="w-full h-72">
            <Image src={"/images/hero-section/banner-bg.png"} alt="banner-img" width={1080} height={267} className="w-full h-full object-cover" />
          </div>
          <div className="border-x border-gray-200">
            <div className="relative flex flex-col xs:flex-row items-center xs:items-start justify-center xs:justify-between max-w-3xl mx-auto gap-10 xs:gap-3 px-4 sm:px-7 pt-22 pb-8 sm:pb-12">
              <div className="absolute top-0 transform -translate-y-1/2">
                <Image src={"/images/hero-section/user-img.png"} alt="user-img" width={145} height={145} className="border-4 border-white rounded-full" />
                <span className="absolute bottom-2.5 right-5 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
              </div>
              <div className="flex flex-col gap-2 sm:gap-3 items-center text-center xs:items-center">
                <h1>Rafi Romolo</h1>
                <p className="font-normal">Web Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;