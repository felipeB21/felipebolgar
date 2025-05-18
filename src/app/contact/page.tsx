import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpLeft } from "lucide-react";

export default function Contact() {
  return (
    <div className="h-full w-full ">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none bg-black/[0.96]",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl mt-20">
          Contact me <br /> Let&apos;s be in touch.
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
          Send me an email to{" "}
          <Link
            href={"mailto:bolgarfelipe@gmail.com"}
            className="text-stone-400 hover:underline"
          >
            bolgarfelipe@gmail.com
          </Link>{" "}
          or leave me a message below
        </p>
        <div className="flex items-center justify-center mt-10">
          <Link href={"/"}>
            <Button size={"lg"}>
              <ArrowUpLeft />
              Go back to portoflio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
