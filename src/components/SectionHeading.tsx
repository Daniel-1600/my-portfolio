"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  icon: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

const SectionHeading = ({ icon, title, description, children }: Props) => {
  return (
    <div className="w-full flex float-start flex-col flex-nowrap gap-[10px] h-min justify-start overflow-visible p-[0px_0px_30px]  relative border-b border-dashed border-dark-gray-4 ">
      <div className="flex items-center flex-none flex-nowrap gap-[6px] h-min justify-start overflow-visible p-0 relative w-full ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          viewport={{ once: true }}
          className="aspect-auto w-[30px] flex-none overflow-hidden relative"
        >
          <figure>
            <Image
              src={icon}
              alt="icon"
              width={30}
              height={30}
              className="block w-full h-full rounded-[inherit] object-cover object-center "
            />
          </figure>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          viewport={{ once: true }}
          className="flex-1 w-full h-auto relative whitespace-pre-wrap break-words flex-col justify-start flex-shrink-0"
        >
          <h2 className="font-bold text-[26px] text-white leading-[1.2em] ">
            {title}
          </h2>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="font-medium text-lg text-light-gray-2">{description}</p>
      </motion.div>
      {children}
    </div>
  );
};

export default SectionHeading;
