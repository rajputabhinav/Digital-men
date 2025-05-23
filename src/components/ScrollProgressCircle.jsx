import React, { useEffect, useState } from "react";

function ScrollProgressCircle() {
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const percent = (scrollTop / docHeight) * 100;
    setScrollPercent(percent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 30;
  const stroke = 2;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset =
    circumference - (scrollPercent / 100) * circumference;

  return (
    <div>
      {scrollPercent > 0 && (
        <svg
          onClick={scrollToTop}
          height={radius * 2 + stroke}
          width={radius * 2 + stroke}
          className="fixed bottom-6 right-6 cursor-pointer z-50 rotate-[-90deg] transition-all duration-500"
        >
          {/* Background Circle */}
          <circle
            className="stroke-gray-300"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius + stroke / 2}
            cy={radius + stroke / 2}
          />
          {/* Progress Circle */}
          <circle
            className="stroke-blue-500 transition-all duration-75"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            r={normalizedRadius}
            cx={radius + stroke / 2}
            cy={radius + stroke / 2}
          />
          {/* Up Arrow */}
          <g
            transform={`rotate(90, ${radius + stroke / 2}, ${
              radius + stroke / 2
            })scale(.8)  translate(11, 6)`}
          >
            <path
              d="M 30 45 L 30 25 M 25 30 L 30 25 L 35 30"
              stroke="#3B82F6"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      )}
    </div>
  );
}

export default ScrollProgressCircle;
