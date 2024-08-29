"use client";
import React from "react";
import { motion } from "framer-motion";

export default function index() {
  return (
    <motion.div
      className="bg-gray-200 my-24 h-16 w-1 rounder-full hidden sm:block dark:bg-opacity-20"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay: 0.12,
      }}
    ></motion.div>
  );
}
