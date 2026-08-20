"use client";

import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const followerRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number | null>(null);
  const dragRef = useRef({ active: false, lastY: 0 });

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

      if (dragRef.current.active) {
        window.scrollBy(0, dragRef.current.lastY - event.clientY);
        dragRef.current.lastY = event.clientY;
      }
    };

    const handlePointerLeave = () => follower.classList.remove("is-visible");
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      if (
        event.button !== 0 ||
        target.closest("a, button, input, textarea, select")
      ) {
        return;
      }

      dragRef.current = { active: true, lastY: event.clientY };
      target.setPointerCapture?.(event.pointerId);
      follower.classList.add("is-grabbing");
      document.body.classList.add("is-dragging");
    };
    const handlePointerMoveDuringDrag = (event: PointerEvent) => {
      if (dragRef.current.active && event.buttons !== 1) stopDragging();
    };
    const stopDragging = () => {
      dragRef.current.active = false;
      follower.classList.remove("is-grabbing");
      document.body.classList.remove("is-dragging");
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointermove", handlePointerMoveDuringDrag);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", stopDragging);
    window.addEventListener("pointercancel", stopDragging);
    window.addEventListener("blur", stopDragging);
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);
    frameRef.current = requestAnimationFrame(moveFollower);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointermove", handlePointerMoveDuringDrag);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", stopDragging);
      window.removeEventListener("pointercancel", stopDragging);
      window.removeEventListener("blur", stopDragging);
      document.documentElement.removeEventListener(
        "mouseleave",
        handlePointerLeave,
      );
      stopDragging();
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div className="cursor-follower" ref={followerRef} aria-hidden="true" />
  );
}
