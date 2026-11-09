"use client";

import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import ContactModal from "./ContactModal";

type Ctx = { open: () => void; close: () => void };

const ContactModalContext = createContext<Ctx | null>(null);

/**
 * One modal for the whole app. Any CTA can call `open()` instead of each
 * section owning its own copy and its own state.
 */
export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ open, close }), [open, close]);

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      <ContactModal open={isOpen} onClose={close} />
    </ContactModalContext.Provider>
  );
}

/**
 * Returns `open`/`close` for the shared booking modal. Falls back to a no-op
 * outside the provider so a stray component can never crash the page.
 */
export function useContactModal(): Ctx {
  const ctx = useContext(ContactModalContext);
  return ctx ?? { open: () => {}, close: () => {} };
}
