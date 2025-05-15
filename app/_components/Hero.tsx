import React from "react";
import { Button } from "../../components/ui/button";
import { AtomIcon, Edit, Share2, Sparkles } from "lucide-react";
import Link from "next/link";

function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Unlock the Future of
              <strong className="text-modern"> Form Creation with AI. </strong>
            </h1>
            <p className="mt-4 text-base text-gray-500 sm:text-lg">
              Genformic uses AI to create, share, and automate forms
              effortlessly. Just provide a prompt, and let AI handle the rest.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Link href={"/dashboard"}>
                <Button size="lg" className="flex items-center gap-2">
                  <Sparkles />
                  Generate AI Form
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="bg-white pb-20">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl text-modern">
              How it Works
            </h2>
            <p className="mt-4 text-gray-600">
              See how Genformic transforms a simple prompt into a fully
              functional form in just a few clicks.
            </p>
          </div>

          <div className="mt-15 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
              <AtomIcon className="h-8 w-8" />
              <h2 className="mt-4 text-xl font-bold text-modern">
                Write Prompt for Your Form
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Simply describe the kind of form you need in natural language.
                Our AI interprets your prompt and instantly generates a draft.
              </p>
            </div>

            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
              <Edit className="h-8 w-8" />
              <h2 className="mt-4 text-xl font-bold text-modern">
                Edit Your Form
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Fine-tune fields, labels, logic, and design using our intuitive
                editor to customize your form exactly the way you want.
              </p>
            </div>

            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
              <Share2 className="h-8 w-8" />
              <h2 className="mt-4 text-xl font-bold text-modern">
                Share & Start Accepting Responses
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Share your form with a link or embed it on your site. Collect
                responses in real-time with built-in analytics.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/sign-in">
              <Button size="lg">Get Started Today</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
