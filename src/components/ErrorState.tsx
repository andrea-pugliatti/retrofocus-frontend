type ErrorStateProps = {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction: () => Promise<void>;
};

export default function ErrorState({
  title = "Unable to load this section.",
  description = "Something interrupted the archive request. Please try again.",
  actionLabel = "Try Again",
  onAction
}: ErrorStateProps) {
  return (
    <div className="error-state">
      <h2 className="playfair-font">{title}</h2>
      <p>{description}</p>
      {onAction && (
        <button className="btn-primary error-state-button" type="button" onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </div>
  );
}
