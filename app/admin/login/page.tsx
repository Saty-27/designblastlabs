import { Suspense } from "react";
import type { Metadata } from "next";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Admin sign in — Design Blast Labs",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#090B0E] px-5">
      <div className="w-full max-w-[400px]">
        <p className="font-anton text-[20px] uppercase leading-none tracking-[-0.01em]">
          <span className="text-white">DESIGN </span>
          <span className="text-[var(--orange)]">BLAST </span>
          <span className="text-white">LABS</span>
        </p>
        <h1
          className="mt-5 font-anton uppercase leading-[1] tracking-[-0.015em] text-white"
          style={{ fontSize: "clamp(26px, 3vw, 34px)" }}
        >
          ADMIN SIGN IN
        </h1>
        <p className="mt-2.5 text-[13.5px] leading-[1.55] text-white/50">
          Enter your admin username and password to view form submissions.
        </p>
        {/* LoginForm reads ?next= via useSearchParams, which needs a boundary. */}
        <Suspense fallback={<div className="mt-7 h-[150px]" />}>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
