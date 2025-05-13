import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function bgGradient(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
