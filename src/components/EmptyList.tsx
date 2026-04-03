import type { ReactNode } from "react";

export default function EmptyList({ children }: { children: ReactNode }) {
  return (
    <div className="empty-list">
      {children}
      <p>Try adjusting your filters or search term.</p>
    </div>
  );
}
