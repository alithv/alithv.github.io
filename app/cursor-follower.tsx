"use client";

import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const followerRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const follower = followerRef.current;
    if (!follower) return;

    const moveFollower = () => {
      const current = positionRef.current;
      const target = targetRef.current;
      current.x += (target.x - current.x) * 0.16;
      current.y += (target.y - current.y) * 0.16;
      follower.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      frameRef.current = requestAnimationFrame(moveFollower);
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetRef.current = { x: event.clientX, y: event.clientY };
      follower.classList.add("is-visible");
    };

    const handlePointerLeave = () => follower.classList.remove("is-visible");

    window.addEventListener("pointermove", handlePointerMove);
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);
    frameRef.current = requestAnimationFrame(moveFollower);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handlePointerLeave,
      );
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div className="cursor-follower" ref={followerRef} aria-hidden="true" />
  );
}
