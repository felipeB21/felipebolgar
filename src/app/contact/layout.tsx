import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Felipe Bolgar | Contact",
  description: "Contact me to hire me.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.className} -mx-auto -mt-10 max-w-none`}>
      {children}
    </div>
  );
}
