import React from "react";
import { Button } from "../../components/ui/button";
import { Sparkles } from "lucide-react";

function Hero() {
  return (
    <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-prose text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Unlock the Future of
            <strong className="text-modern"> Form Creation with AI. </strong>
          </h1>
          <p className="mt-4 text-base text-pretty text-gray-500 sm:text-lg/relaxed">
            Genformic uses AI to create, share, and automate forms effortlessly.
            Just provide a prompt, and let AI handle the rest.
          </p>
          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <Button size={"lg"} className="flex justify-center items-center">
              <Sparkles />
              <div>Generate AI Form</div>
            </Button>
            <Button variant={"outline"} size={"lg"}>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
