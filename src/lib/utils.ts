import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Color palette for tags - vibrant colors that work in both light and dark modes
const tagColors = [
  { bg: "hsl(210, 100%, 50%)", text: "hsl(0, 0%, 100%)" },      // Blue
  { bg: "hsl(158, 64%, 52%)", text: "hsl(0, 0%, 100%)" },      // Teal (matches primary)
  { bg: "hsl(280, 70%, 60%)", text: "hsl(0, 0%, 100%)" },      // Purple
  { bg: "hsl(340, 75%, 55%)", text: "hsl(0, 0%, 100%)" },      // Pink
  { bg: "hsl(25, 95%, 55%)", text: "hsl(0, 0%, 100%)" },       // Orange
  { bg: "hsl(200, 90%, 50%)", text: "hsl(0, 0%, 100%)" },      // Cyan
  { bg: "hsl(150, 70%, 45%)", text: "hsl(0, 0%, 100%)" },      // Green
  { bg: "hsl(320, 65%, 55%)", text: "hsl(0, 0%, 100%)" },      // Magenta
  { bg: "hsl(15, 90%, 55%)", text: "hsl(0, 0%, 100%)" },       // Red-Orange
  { bg: "hsl(230, 80%, 60%)", text: "hsl(0, 0%, 100%)" },      // Indigo
  { bg: "hsl(170, 75%, 45%)", text: "hsl(0, 0%, 100%)" },      // Turquoise
  { bg: "hsl(290, 70%, 60%)", text: "hsl(0, 0%, 100%)" },      // Violet
  { bg: "hsl(40, 90%, 55%)", text: "hsl(0, 0%, 15%)" },        // Yellow (dark text)
  { bg: "hsl(180, 70%, 50%)", text: "hsl(0, 0%, 100%)" },      // Aqua
  { bg: "hsl(260, 70%, 60%)", text: "hsl(0, 0%, 100%)" },      // Blue-Purple
];

/**
 * Generates a deterministic color for a tag based on its text.
 * The same tag will always get the same color.
 */
export function getTagColor(tag: string): { bg: string; text: string } {
  // Simple hash function to convert tag string to a number
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = ((hash << 5) - hash) + tag.charCodeAt(i);
    hash = hash | 0; // Convert to 32bit integer
  }
  
  // Use absolute value and modulo to get an index
  const index = Math.abs(hash) % tagColors.length;
  return tagColors[index];
}