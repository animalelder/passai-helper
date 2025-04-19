export default function CheckmarkSvg() {
  return (
    <div className="flex justify-center">
      <div className="h-8 w-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <g filter="url(#filter0_d_780_2313)">
            <rect
              x="4"
              width="24"
              height="24"
              rx="12"
              fill="#759EAB"
              shapeRendering="crispEdges"
            />
            <path
              d="M8 13L12.6464 17.6464C12.8417 17.8417 13.1583 17.8417 13.3536 17.6464L24 7"
              stroke="#FEFCF7"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_780_2313"
              x="0"
              y="0"
              width="32"
              height="32"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="out"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_780_2313"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_780_2313"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}
