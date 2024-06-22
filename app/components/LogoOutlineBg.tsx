"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const LogoOutlineBg = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 hidden items-end justify-between transition-all xl:flex">
      <Image
        width={416}
        height={416}
        src={
          mounted && resolvedTheme === "dark"
            ? "/logo-outline-group-left-dark.svg"
            : "/logo-outline-group-left-light.svg"
        }
        alt=""
        tabIndex={-1}
      />
      <Image
        width={416}
        height={416}
        src={
          mounted && resolvedTheme === "dark"
            ? "/logo-outline-group-right-dark.svg"
            : "/logo-outline-group-right-light.svg"
        }
        alt=""
        tabIndex={-1}
      />
    </div>
  );
};
