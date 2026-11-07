import type { CSSProperties, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function Container({
  children,
  className = "",
  style = {},
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-4 sm:w-[90%] sm:px-0 lg:w-[80%] xl:w-[70%] ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
