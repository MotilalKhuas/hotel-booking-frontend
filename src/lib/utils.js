import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getAssetPath(name) {
  return `/assets/${name}`;
}

export function getDefaultProfile(name){
  return `https://api.dicebear.com/9.x/initials/svg?seed=${name}`;
}