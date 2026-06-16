import React from "react";

interface LeafIconProps {
  className?: string;
}

export default function LeafIcon({ className }: LeafIconProps) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="currentColor" 
      className={`text-[#3F5E4A] pointer-events-none opacity-80 ${className}`}
    >
      <path d="M50 15 C30 35 25 55 45 80 C48 70 55 60 70 50 C55 45 52 30 50 15 Z" />
      <path d="M48 80 C40 70 30 65 15 68 C28 58 38 52 45 50 C44 40 46 28 48 80 Z" opacity="0.6" />
    </svg>
  );
}
