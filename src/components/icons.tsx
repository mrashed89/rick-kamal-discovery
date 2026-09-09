export function NorthStarMark({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="currentColor"
      shapeRendering="geometricPrecision"
      aria-hidden
      className={className}
    >
      <polygon points="3,60 18,60 29,4 24,4" />
      <polygon points="35,4 40,4 61,60 46,60" />
    </svg>
  );
}

export function LockIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width={12}
      height={12}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden
      className={className}
    >
      <rect x="6" y="11" width="12" height="10" />
      <path d="M8.5 11V8.2C8.5 5.96 10.24 4.2 12.5 4.2C14.76 4.2 16.5 5.96 16.5 8.2V11" />
    </svg>
  );
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden
      className={className}
    >
      <path d="M4 12h16" />
      <path d="M15 7l5 5-5 5" />
    </svg>
  );
}
