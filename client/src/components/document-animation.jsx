import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function SvgPathLoader() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateLoader = async () => {
      await Promise.all([
        animate(
          [
            [".m1", { pathLength: 0.99, pathOffset: 0 }],
            [".m1", { pathLength: 0.99, pathOffset: 0 }, { duration: 1 }],
            [".m1", { pathLength: 1, pathOffset: 0 }],
            [".m1", { pathLength: 0, pathOffset: 0 }],
          ],
          { duration: 6, ease: "linear", repeat: Infinity, repeatDelay: 0 }
        ),
        animate(
          [
            [".m2", { pathLength: 0.99, pathOffset: 0 }],
            [".m2", { pathLength: 0.99, pathOffset: 0 }, { duration: 1 }],
            [".m2", { pathLength: 1, pathOffset: 0 }],
            [".m2", { pathLength: 0, pathOffset: 0 }],
          ],
          { duration: 6, ease: "linear", repeat: Infinity, repeatDelay: 0 }
        ),
      ]);
    };
    animateLoader();
  }, [animate]);

  return (
    <svg
      ref={scope}
      width="200px"
      height="200px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        className="m1"
        initial={{ pathLength: 0, pathOffset: 1 }}
        d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        className="m2"
        initial={{ pathLength: 0, pathOffset: 1 }}
        d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.4"
      />
      <motion.path
        className="m2"
        initial={{ pathLength: 0, pathOffset: 1 }}
        d="M7.47916 15.4901C7.14916 14.4601 7.53914 13.1901 8.60914 12.8401C9.17914 12.6601 9.87914 12.8101 10.2691 13.3601C10.6391 12.7901 11.3691 12.6601 11.9291 12.8401C13.0091 13.1901 13.3892 14.4601 13.0692 15.4901C12.5592 17.1201 10.7691 17.9701 10.2691 17.9701C9.77914 17.9601 8.00916 17.1301 7.47916 15.4901Z"
        stroke="#FF6347" // heart icon hex color
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.4"
      />
    </svg>
  );
}
