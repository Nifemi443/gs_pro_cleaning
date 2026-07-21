"use client";

import { motion, useReducedMotion } from "framer-motion";

import { easePremium } from "@/components/animations/presets";
import {
  ServiceContent,
  type ServiceContentData,
} from "@/components/sections/services/ServiceContent";
import { ServiceImage } from "@/components/sections/services/ServiceImage";
import { cn } from "@/lib/utils";

export type ServiceFeatureData = ServiceContentData & {
  imageSrc: string;
  imageAlt: string;
  badge?: string;
};

type ServiceFeatureProps = {
  service: ServiceFeatureData;
  /** Even index = image left; odd = image right */
  index: number;
};

export function ServiceFeature({ service, index }: ServiceFeatureProps) {
  const reduceMotion = useReducedMotion();
  const imageLeft = index % 2 === 0;

  return (
    <motion.article
      className={cn("group grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16")}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.5,
        ease: easePremium,
        delay: reduceMotion ? 0 : index * 0.1,
      }}
      whileHover={
        reduceMotion ? undefined : { y: -4, transition: { duration: 0.25, ease: easePremium } }
      }
    >
      <div className={cn(imageLeft ? "lg:order-1" : "lg:order-2")}>
        <ServiceImage src={service.imageSrc} alt={service.imageAlt} badge={service.badge} />
      </div>

      <div className={cn(imageLeft ? "lg:order-2" : "lg:order-1")}>
        <ServiceContent service={service} />
      </div>
    </motion.article>
  );
}
