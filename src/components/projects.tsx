"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    img: "https://ui.aceternity.com/linear.webp",
    href: "https://tino.com",
    name: "tino",
  },
  {
    img: "https://ui.aceternity.com/linear.webp",
    href: "https://example.com/project1",
    name: "pro",
  },
];

export function ProjectScroll() {
  return (
    <div className="flex overflow-hidden">
      {projects.map((project) => (
        <ContainerScroll
          key={project.href}
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                {project.name}
              </h1>
            </>
          }
        >
          <Link href={project.href}>
            <Image
              src={project.img}
              alt={`${project.name} project image`}
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full w-full object-left-top"
              draggable={false}
            />
          </Link>
        </ContainerScroll>
      ))}
    </div>
  );
}
