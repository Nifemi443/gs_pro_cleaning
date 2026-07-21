"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { easePremium } from "@/components/animations/presets";
import { BeforeAfterSlider } from "@/components/sections/before-after/BeforeAfterSlider";
import { cn } from "@/lib/utils";

export type ProjectCardData = {
  id: string;
  title: string;
  propertyType: string;
  description: string;
  beforeLabel: string;
  afterLabel: string;
  beforeAlt: string;
  afterAlt: string;
  beforeSrc: string;
  afterSrc: string;
  /** Featured card — larger footprint + gold accent */
  featured?: boolean;
  className?: string;
};

type ProjectCardProps = {
  project: ProjectCardData;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      id={project.id}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[12px] bg-white",
        "shadow-[0_1px_2px_rgb(18_41_77/0.05)] transition-[box-shadow,transform] duration-300",
        "hover:shadow-[0_10px_28px_rgb(18_41_77/0.12)]",
        project.featured && "ring-brand-gold/45 ring-1",
        project.className,
      )}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.45,
        ease: easePremium,
        delay: reduceMotion ? 0 : index * 0.1,
      }}
      whileHover={
        reduceMotion ? undefined : { y: -3, transition: { duration: 0.22, ease: easePremium } }
      }
    >
      <div className="relative overflow-hidden">
        <div className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:scale-[1.04]">
          <BeforeAfterSlider
            beforeSrc={project.beforeSrc}
            afterSrc={project.afterSrc}
            beforeLabel={project.beforeLabel}
            afterLabel={project.afterLabel}
            beforeAlt={project.beforeAlt}
            afterAlt={project.afterAlt}
            className={project.featured ? "aspect-[5/4] sm:aspect-[4/3]" : undefined}
          />
        </div>

        <Link
          href={`/#${project.id}`}
          className={cn(
            "bg-brand-navy absolute right-3 bottom-3 z-30 inline-flex items-center gap-1.5 rounded-[8px] px-2.5 py-1.5 text-xs font-semibold text-white",
            "opacity-0 transition-opacity duration-300 motion-safe:group-hover:opacity-100",
            "focus-visible:ring-brand-navy focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-offset-2",
            "group-focus-within:opacity-100",
          )}
        >
          View Details
          <ArrowUpRight className="size-3.5" aria-hidden />
        </Link>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-brand-warm text-brand-navy rounded-full px-2.5 py-0.5 text-[0.6875rem] font-medium">
            Completed
          </span>
          {project.featured ? (
            <span className="bg-brand-gold/20 text-brand-navy rounded-full px-2.5 py-0.5 text-[0.6875rem] font-medium">
              Featured
            </span>
          ) : null}
          <span className="text-[0.6875rem] font-medium tracking-wide text-[#5c6570] uppercase">
            {project.propertyType}
          </span>
        </div>

        <h3 className="text-brand-navy font-[family-name:var(--font-display)] text-lg leading-snug font-semibold sm:text-xl">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-[#3d4654]">{project.description}</p>
      </div>
    </motion.article>
  );
}
