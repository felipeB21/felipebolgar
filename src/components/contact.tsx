import Link from "next/link";
import { Magnetic } from "./ui/magnetic";

export function Contact() {
  const springOptions = { bounce: 0.1 };

  return (
    <Magnetic
      intensity={0.2}
      springOptions={springOptions}
      actionArea="global"
      range={200}
    >
      <Link
        href={"/contact"}
        className="inline-flex items-center rounded-lg border border-zinc-100 bg-stone-300 px-4 py-2 text-sm text-zinc-950 transition-all duration-200 hover:bg-stone-200 dark:border-zinc-900 dark:bg-stone-800 dark:text-zinc-50 dark:hover:bg-stone-700"
      >
        <Magnetic
          intensity={0.1}
          springOptions={springOptions}
          actionArea="global"
          range={200}
        >
          Hire me
        </Magnetic>
      </Link>
    </Magnetic>
  );
}
