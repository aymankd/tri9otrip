export function Location({ num }: { num: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.25}
      stroke="currentColor"
      className="h-8 w-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
      <text
        x="50%"
        y="60%"
        textAnchor="middle"
        fontFamily="Poppins Thin"
        fontSize="9"
        fill="#5377FF"
      >
        {num}
      </text>
    </svg>
  );
}
