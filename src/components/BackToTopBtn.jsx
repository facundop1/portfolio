import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-4 right-4 p-3 rounded-full bg-cards text-gray-700 font-semibold cursor-pointer transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJZJREFUSEvtktENgCAMRI9NdBPdRDdxE93EVRzFXFISQoCrH35BE4NRvFdfCfi5ws/5GABpuD9Fkzl5pBvb8EURw08AXFcALogXEMOX5A9cEA8gDY9d8xnvJUQB8vDZFN22SkgLUAqPs+U7F6QF2Gyo7JKd55VCdgBX6WQpRQcAXrUihIMvhvMjBfAe9+q+AZAKh6IOFL13iRoZaP0KtQAAAABJRU5ErkJggg=="
        alt="flecha"
      />
    </div>
  );
};

export default BackToTopButton;
