import { Button } from "../../ui/button";
import Link from "next/link";
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
        </div>
      </div>
    </section>
  )
}

export default FeaturedWork;