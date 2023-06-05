import React, { useEffect, useState } from 'react';

const ProgressBar = ({ progress }) => {
  const [animationWidth, setAnimationWidth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationWidth((prevWidth) => {
        const newWidth = prevWidth + 1;
        if (newWidth >= progress) {
          clearInterval(interval);
        }
        return newWidth;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="w-full sm:h-2 bg-porcent rounded-md ">
      <div
        className="h-full bg-primary rounded-md"
        style={{ width: `${animationWidth}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
