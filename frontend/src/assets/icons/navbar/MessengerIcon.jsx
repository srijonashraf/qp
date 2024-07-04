export default ({ width = "15", height = "15", ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${height} ${width}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="45" height="45" rx="22.5" fill="#E4E4E4" />
    <g clipPath="url(#clip0_1_589)">
      <path
        d="M23 13.14C17.588 13.14 13.2 17.226 13.2 22.27C13.2 25.142 14.626 27.706 16.852 29.38V32.86L20.188 31.018C21.08 31.266 22.022 31.4 23 31.4C28.412 31.4 32.8 27.312 32.8 22.27C32.8 17.226 28.412 13.14 23 13.14ZM23.974 25.434L21.478 22.756L16.608 25.434L21.964 19.712L24.52 22.39L29.328 19.712L23.974 25.434Z"
        fill="#2A2A2A"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_589">
        <rect
          width="20"
          height="20"
          fill="white"
          transform="translate(13 13)"
        />
      </clipPath>
    </defs>
  </svg>
);
