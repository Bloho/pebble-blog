import React from "react";
import { cn } from "@/lib/utils";

interface ProgressiveBlurProps {
  className?: string;
  height?: string;
  position?: "top" | "bottom" | "both";
  blurLevels?: number[];
  children?: React.ReactNode;
}

export function ProgressiveBlur({
  className,
  height = "30%",
  position = "bottom",
  blurLevels = [0.5, 1, 2, 4, 8, 16, 32, 64],
  children,
}: ProgressiveBlurProps) {
  const gradientStops = blurLevels.map((_, index) => {
    const percent = (index / (blurLevels.length - 1)) * 100;
    return percent;
  });

  const renderBlurLayers = (pos: "top" | "bottom") => {
    const isTop = pos === "top";
    
    return blurLevels.map((blur, index) => {
      const stop1 = gradientStops[index];
      const stop2 = gradientStops[index + 1] || 100;
      
      return (
        <div
          key={index}
          className="absolute inset-0 pointer-events-none"
          style={{
            backdropFilter: `blur(${blur}px)`,
            WebkitBackdropFilter: `blur(${blur}px)`,
            maskImage: isTop
              ? `linear-gradient(to bottom, black ${stop1}%, black ${stop2}%, transparent ${stop2}%, transparent 100%)`
              : `linear-gradient(to top, black ${stop1}%, black ${stop2}%, transparent ${stop2}%, transparent 100%)`,
            WebkitMaskImage: isTop
              ? `linear-gradient(to bottom, black ${stop1}%, black ${stop2}%, transparent ${stop2}%, transparent 100%)`
              : `linear-gradient(to top, black ${stop1}%, black ${stop2}%, transparent ${stop2}%, transparent 100%)`,
          }}
        />
      );
    });
  };

  return (
    <div
      className={cn(
        "absolute left-0 right-0 pointer-events-none z-10",
        position === "top" && "top-0",
        position === "bottom" && "bottom-0",
        position === "both" && "inset-0",
        className
      )}
      style={{ height }}
    >
      {position === "both" ? (
        <>
          <div className="absolute top-0 left-0 right-0" style={{ height: "50%" }}>
            {renderBlurLayers("top")}
          </div>
          <div className="absolute bottom-0 left-0 right-0" style={{ height: "50%" }}>
            {renderBlurLayers("bottom")}
          </div>
        </>
      ) : (
        renderBlurLayers(position)
      )}
      {children}
    </div>
  );
}
