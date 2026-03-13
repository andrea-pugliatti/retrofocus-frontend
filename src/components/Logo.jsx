export default function Logo({ height, width }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 368 226"
      width={`${width}px`}
      height={`${height}px`}
    >
      <g id="camera-logo">
        <g fill="none" stroke="#4C3A28" strokeWidth="5" strokeLinejoin="round">
          <rect x="42" y="8" width="12" height="15" rx="1" />
          <rect x="36" y="14" width="24" height="15" rx="1" />
          <rect x="90" y="14" width="36" height="15" rx="1" />
          <rect x="145" y="12" width="50" height="15" rx="1" />
        </g>

        <rect
          x="0"
          y="20"
          width="364"
          height="196"
          rx="8"
          ry="8"
          fill="#F2F0E6"
          stroke="#4C3A28"
          strokeWidth="5"
          strokeLinejoin="round"
        />

        <g fill="none" stroke="#4C3A28" strokeWidth="5" strokeLinejoin="round">
          <line x1="0" y1="75" x2="364" y2="75" />
          <line x1="0" y1="204" x2="364" y2="204" />

          <line x1="25" y1="95" x2="70" y2="95" strokeLinecap="round" />

          <rect x="94" y="35" width="22" height="16" rx="2" />
          <rect x="192" y="32" width="42" height="24" rx="2" />
          <rect x="250" y="32" width="56" height="32" rx="2" />

          <rect x="64" y="85" width="12" height="28" rx="6" fill="#F2F0E6" />
        </g>

        <g
          transform="translate(315, 115) rotate(15)"
          fill="#F2F0E6"
          stroke="#4C3A28"
          strokeWidth="5"
        >
          <rect x="-6" y="-12" width="12" height="24" rx="6" />
        </g>

        <g id="lens">
          <circle cx="182" cy="135" r="76" fill="#F2F0E6" stroke="#4C3A28" strokeWidth="5" />

          <path
            d="M 106 120 A 14 14 0 0 0 106 150"
            fill="#F2F0E6"
            stroke="#4C3A28"
            strokeWidth="5"
            strokeLinecap="round"
          />

          <circle cx="182" cy="135" r="56" fill="#EA6B15" />

          <g transform="translate(182, 135)">
            <polygon points="-12,-20.78 12,-20.78 24,0 12,20.78 -12,20.78 -24,0" fill="#F2F0E6" />

            <g stroke="#F2F0E6" strokeWidth="4.5" strokeLinecap="round">
              <line x1="-7" y1="-21" x2="50" y2="-20.78" />
              <line x1="-7" y1="-20.78" x2="50" y2="-20.78" transform="rotate(120)" />
              <line x1="-7" y1="-20.78" x2="50" y2="-20.78" transform="rotate(180)" />
              <line x1="-7" y1="-20.78" x2="50" y2="-20.78" transform="rotate(60)" />
              <line x1="-7" y1="-20.78" x2="50" y2="-20.78" transform="rotate(240)" />
              <line x1="-7" y1="-20.78" x2="50" y2="-20.78" transform="rotate(300)" />
            </g>
          </g>

          <circle cx="182" cy="135" r="56" fill="none" stroke="#4C3A28" strokeWidth="5" />
        </g>
      </g>
    </svg>
  );
}
