export default function Logo({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 10h11v4a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5v-4z" />
      <path d="M16 11h1.5a2.5 2.5 0 0 1 0 5H16" />
      <path d="M8.5 3.5c-1 1.2 1 2 0 3.5M12 3.5c-1 1.2 1 2 0 3.5" />
    </svg>
  );
}
