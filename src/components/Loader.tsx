type LoaderProps = { size?: number; label?: string };

export default function Loader({ size = 192, label = "Loading..." }: LoaderProps) {
  const dimension = size;
  const height = dimension * 0.8;

  return (
    <div className="loader">
      <svg
        width={dimension}
        height={height}
        viewBox="0 0 180 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ display: "block" }}
      >
        <defs>
          <linearGradient id="lensGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="50%" stopColor="#2d2d2d" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </linearGradient>
          <radialGradient id="lensReflection" cx="35%" cy="35%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>

        {/* Camera Body */}
        <rect
          x="10"
          y="18"
          width="160"
          height="102"
          rx="6"
          ry="6"
          fill="#a0a0a0"
          stroke="currentColor"
          strokeWidth="2"
          style={{ color: "#1c1917" }}
        />

        {/* Top plate line */}
        <line
          x1="10"
          y1="42"
          x2="170"
          y2="42"
          stroke="currentColor"
          strokeWidth="1"
          style={{ color: "#1c1917", opacity: 0.5 }}
        />

        {/* Viewfinder */}
        <rect
          x="125"
          y="22"
          width="28"
          height="16"
          rx="1"
          fill="#fdfcf9"
          stroke="currentColor"
          strokeWidth="1.5"
          style={{ color: "#1c1917" }}
        />

        {/* Controls */}
        <rect
          x="50"
          y="12"
          width="28"
          height="6"
          rx="1"
          fill="#333333"
          stroke="currentColor"
          strokeWidth="1.5"
          style={{ color: "#1c1917" }}
        />

        {/* Shutter button */}
        <g className="shutter-button" style={{ transformOrigin: "35px 15px" }}>
          <rect
            x="25"
            y="13"
            width="20"
            height="5"
            rx="1"
            fill="#333333"
            stroke="currentColor"
            strokeWidth="1.5"
            style={{ color: "#1c1917" }}
          />
        </g>

        {/* Indicator light */}
        <circle
          cx="55"
          cy="30"
          r="3"
          className="indicator-light"
          fill="currentColor"
          style={{ color: "#1c1917" }}
        />

        {/* Leica red dot signature */}
        <circle cx="98" cy="31" r="8.5" fill="#dc2626" />

        {/* Strap lug left */}
        <rect
          x="4"
          y="40"
          width="6"
          height="14"
          rx="3"
          fill="currentColor"
          style={{ color: "#1c1917" }}
        />

        {/* Strap lug right */}
        <rect
          x="170"
          y="40"
          width="6"
          height="14"
          rx="3"
          fill="currentColor"
          style={{ color: "#1c1917" }}
        />

        {/* Lens Mount - outer ring */}
        <circle
          cx="98"
          cy="82"
          r="34"
          fill="#363636"
          stroke="currentColor"
          strokeWidth="2"
          style={{ color: "#1c1917" }}
        />

        {/* Lens body */}
        <circle
          cx="98"
          cy="82"
          r="30"
          fill="#fdfcf9"
          stroke="currentColor"
          strokeWidth="1.5"
          style={{ color: "#1c1917" }}
        />

        {/* Focus ring texture */}
        <circle
          cx="98"
          cy="82"
          r="26"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeDasharray="2 2"
          style={{ color: "#a8a29e" }}
        />

        {/* Inner lens barrel */}
        <circle
          cx="98"
          cy="82"
          r="21"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          style={{ color: "#1c1917" }}
        />

        {/* Aperture housing */}
        <circle cx="98" cy="82" r="15" fill="url(#lensGradient)" />

        {/* Aperture blades - animated */}
        <g className="aperture-blades" style={{ transformOrigin: "98px 82px" }}>
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <path
              key={angle}
              d="M98 72 L104 78 L98 84 L92 78 Z"
              fill="#44403c"
              transform={`rotate(${angle} 98 82)`}
            />
          ))}
        </g>

        {/* Lens center aperture */}
        <circle
          cx="98"
          cy="82"
          r="7"
          className="lens-aperture"
          fill="#0c0a09"
          style={{ transformOrigin: "98px 82px" }}
        />

        {/* Lens reflection */}
        <circle cx="98" cy="82" r="14" fill="url(#lensReflection)" />

        {/* Highlight reflection spot */}
        <ellipse cx="92" cy="76" rx="3" ry="2" fill="rgba(255,255,255,0.25)" />
      </svg>

      <span
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: "0",
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          border: "0"
        }}
      >
        {label}
      </span>

      <style>{`
        @keyframes shutterClick {
          0%, 65%, 100% {
            transform: translateY(0) scale(1);
          }
          70% {
            transform: translateY(1px) scaleY(0.2);
          }
          75% {
            transform: translateY(0) scale(1);
          }
        }

        @keyframes apertureClose {
          0%, 65%, 100% {
            transform: scale(1) rotate(0deg);
          }
          70% {
            transform: scale(0.6) rotate(30deg);
          }
          80% {
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes lensCapture {
          0%, 65%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          70% {
            transform: scale(0.3);
            opacity: 0.8;
          }
          80% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes indicatorBlink {
          0%, 60%, 100% {
            opacity: 0.25;
          }
          65%, 85% {
            opacity: 1;
          }
        }

        .shutter-button {
          animation: shutterClick 2.8s ease-in-out infinite;
        }

        .aperture-blades {
          animation: apertureClose 2.8s ease-in-out infinite;
        }

        .lens-aperture {
          animation: lensCapture 2.8s ease-in-out infinite;
        }

        .indicator-light {
          animation: indicatorBlink 2.8s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .shutter-button,
          .aperture-blades,
          .lens-aperture,
          .indicator-light {
            animation: none;
          }
          
          .indicator-light {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}
