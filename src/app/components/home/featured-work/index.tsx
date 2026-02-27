"use client";
import { Button } from "../../ui/button";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const FeaturedWork = () => {
  const [featureWork, setFeatureWork] = useState<any>(null);

  useEffect(() => {
    const fetchFeatureWork = async () => {
      try {
        const res = await fetch("/api/featured-work");
        if (!res.ok) throw new Error("Failed to fetch featured work");
        const data = await res.json();
        setFeatureWork(data?.featureWork);
      } catch (error) {
        console.error("Error fetching featured work:", error);
      }
    }

    fetchFeatureWork();
  }, [])

  return (
    <section>
      <div className="container">
        <div className="border-x border-gray-200">
          <div className="flex flex-col gap-10 max-w-3xl mx-auto px-4 sm:px-7 pt-22 pb-8 sm:pb-12">
            <div className="flex items-center justify-between">
              <p className="text-sm tracking-widest uppercase font-medium">Featured Work</p>
              <div className="flex items-center gap-3">
                <Button asChild variant={"outline"} className="h-auto">
                    <Link href={"/"}>View All Works</Link>
                </Button>
                <Button asChild variant={"outline"} className="h-auto">
                    <Link href={"/"}>Download PDF</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {featureWork?.map((value: any, index: number) => {
              const isRightCol = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col gap-4 sm:gap-5 p-4 sm:p-6 ${isRightCol ? 'md:border-l md:border-gray-900/10' : ''}`}
                >
                  <Link href={"/"}>
                    <Image
                      src={value?.image}
                      alt={`${value?.title}-image`}
                      width={500}
                      height={300}
                      className="w-full h-auto object-cover rounded-md transition-transform duration-300 hover:scale-105"
                    />
                  </Link>
                  <div className="flex flex-col gap-1 px-2">
                    <Link href={"/"}>
                      <h4 className="text-lg font-bold">{value?.title}</h4>
                    </Link>
                    <div className="flex">
                      <p className="text-md font-medium text-gray-400">{value?.roles?.join(', ')}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedWork;