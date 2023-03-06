export function PlusCircle({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="2.5em"
      height="2.5em"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-brand-100 hover:fill-brand-300 ${className}`}
      {...props}
    >
      <g>
        <g>
          <g filter="url(#filter0_d_347_774)">
            <circle cx={15} cy={15} r={15} />
          </g>
          <g>
            <g>
              <path
                d="M10 15H20"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <g>
              <path
                d="M15 10V20"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </g>
      </g>
      <defs>
        <filter
          x={0}
          y={0}
          width={82}
          height={82}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={14.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.157083 0 0 0 0 0.260252 0 0 0 0 0.65 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_347_774"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_347_774"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
