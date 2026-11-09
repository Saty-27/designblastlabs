"use client";

import React from "react";
import { useContactModal } from "./ContactModalProvider";

/**
 * Opens the shared booking modal. A real anchor to /#booking underneath, so it
 * still works for crawlers and middle-click, but a click opens the modal.
 */
export default function BookCallButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { open } = useContactModal();
  return (
    <a
      href="/#booking"
      onClick={(e) => {
        e.preventDefault();
        open();
      }}
      className={className}
    >
      {children}
    </a>
  );
}
