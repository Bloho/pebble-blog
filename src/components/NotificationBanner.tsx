import { useState } from "react";
import { X } from "lucide-react";

export function NotificationBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="w-full bg-blue-600 text-white py-2 px-4">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <p className="font-details text-sm sm:text-base">
          We will be moving to our official domain blog.dpspr.edu.in soon.
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0 hover:opacity-80 transition-opacity"
          aria-label="Dismiss notification"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
