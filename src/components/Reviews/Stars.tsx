const STAR = (
  <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.27Z" />
);

export function Stars({ rating }: { rating: 5 }) {
  return (
    <div>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          {STAR}
        </svg>
      ))}
    </div>
  );
}

