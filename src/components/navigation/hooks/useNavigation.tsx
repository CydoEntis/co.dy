import { useEffect, useState } from "react";

type UseNavigationOptions = {
  sectionIds: string[];
  onClose?: () => void;
  threshold?: number;
};

function useNavigation({
  sectionIds,
  onClose,
  threshold = 0.6,
}: UseNavigationOptions) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = sectionIds.map((id) => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds, threshold]);

  const activeRouteHandler = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (onClose) {
      onClose();
    }
  };

  return { activeSection, activeRouteHandler };
}

export default useNavigation;
