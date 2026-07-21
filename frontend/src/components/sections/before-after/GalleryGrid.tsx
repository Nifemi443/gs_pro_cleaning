"use client";

import { ProjectCard, type ProjectCardData } from "@/components/sections/before-after/ProjectCard";

type GalleryGridProps = {
  projects: ProjectCardData[];
};

/**
 * Uneven masonry-style grid — featured card spans more columns.
 */
export function GalleryGrid({ projects }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-6 lg:gap-5">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}
