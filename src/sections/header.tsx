import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { TextScramble } from "../../components/motion-primitives/text-scramble";

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={"/me.jpeg"}
            alt="My Image"
            width={100}
            height={100}
            className="w-12 h-12 rounded-full object-cover"
            priority
          />
          <div>
            <h1 className="text-xl font-medium">Felipe Bolgar</h1>
            <TextScramble className="text-xs">
              Full Stack Developer
            </TextScramble>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link href={"https://github.com/felipeB21"} target="_blank">
            <Button variant={"ghost"} size={"icon"}>
              <Image
                src={"/github.svg"}
                alt="GitHub"
                width={20}
                height={20}
                className="not-dark:invert"
              />
            </Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
