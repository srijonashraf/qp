export default ({ width = "24", height = "24", ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect
      y="0.347839"
      width="24"
      height="23.3043"
      fill="url(#pattern0_1_468)"
    />
    <defs>
      <pattern
        id="pattern0_1_468"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image0_1_468"
          transform="matrix(0.01 0 0 0.0102985 0 -0.0149254)"
        />
      </pattern>
      <image
        id="image0_1_468"
        width="100"
        height="100"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
