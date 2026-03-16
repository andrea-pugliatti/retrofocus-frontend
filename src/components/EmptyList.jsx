export default function EmptyList({ children }) {
  return (
    <div className="empty-list">
      {children}
      <p>Try adjusting your filters or search term.</p>
    </div>
  );
}
