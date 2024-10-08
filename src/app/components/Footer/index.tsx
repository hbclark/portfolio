import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 dark:text-white/[0.7]">
      <small className="mb-2 text-xs block">
        &copy; 2024 Clark. All right reversed.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About t his website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion and more.
      </p>
    </footer>
  );
}
