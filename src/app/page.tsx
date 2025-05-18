import { Contact } from "@/components/contact";
import { Frameworks } from "@/sections/frameworks";
import Header from "@/sections/header";
import { Weather } from "@/sections/weather";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="grid grid-cols-2 mt-10 gap-4">
        <Weather />

        <div className="flex flex-col gap-3">
          <p className="text-sm dark:text-stone-400 text-stone-600">
            Hey! im a Full stack developer that loves to code.
          </p>
          <Contact />
        </div>
        <div className="w-full col-span-2">
          <h5 className="mb-3 text-xl">Frameworks i use</h5>
          <Frameworks />
        </div>
      </main>
    </div>
  );
}
