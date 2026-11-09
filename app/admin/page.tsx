import type { Metadata } from "next";
import { readAll, storageInfo } from "@/lib/submissions";
import SubmissionsView from "./SubmissionsView";

export const metadata: Metadata = {
  title: "Submissions — Design Blast Labs",
  robots: { index: false, follow: false },
};

// Always read the store fresh — never serve a cached snapshot of the inbox.
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function AdminPage() {
  const submissions = await readAll();
  const storage = storageInfo();

  return (
    <SubmissionsView
      submissions={submissions}
      // Only worth warning about when a redeploy could erase the store.
      storageWarning={storage.insideProject ? storage.directory : null}
    />
  );
}
