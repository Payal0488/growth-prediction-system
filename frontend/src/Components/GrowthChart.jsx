import styles from "./GrowthChart.module.css";

const GrowthChart = () => {
  const bars = [
    { x: 40, height: 78 },
    { x: 96, height: 96 },
    { x: 152, height: 120 },
    { x: 208, height: 102 },
    { x: 264, height: 132 },
  ];

  const dots = [
    { cx: 40, cy: 148 },
    { cx: 96, cy: 128 },
    { cx: 152, cy: 104 },
    { cx: 208, cy: 118 },
    { cx: 264, cy: 86 },
  ];

  return (
    <div className={styles.chartContainer}>
      <div className={styles.chartGlow} />
      <svg viewBox="0 0 320 220" className={styles.chartSvg} aria-hidden="true">
        <defs>
          <linearGradient id="chartGradient" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#718A57" />
            <stop offset="100%" stopColor="#C58A4A" />
          </linearGradient>
        </defs>

        <g opacity="0.22" stroke="#E7E1D8" strokeWidth="1">
          {[1, 2, 3, 4].map((row) => (
            <line key={`row-${row}`} x1="32" y1={32 + row * 38} x2="296" y2={32 + row * 38} />
          ))}
          {[1, 2, 3, 4, 5].map((col) => (
            <line key={`col-${col}`} x1={32 + col * 54} y1="28" x2={32 + col * 54} y2="170" />
          ))}
        </g>

        {bars.map((bar, index) => (
          <rect
            key={index}
            x={bar.x}
            y={182 - bar.height}
            width="18"
            height={bar.height}
            rx="9"
            fill="rgba(113, 138, 87, 0.18)"
          />
        ))}

        <path
          className={styles.chartLine}
          d="M40 148 C72 136, 88 132, 120 118 S188 100, 220 90 S248 82, 296 70"
        />

        {dots.map((dot, index) => (
          <g key={index} className={styles.dotGroup} style={{ animationDelay: `${index * 0.14}s` }}>
            <circle className={styles.dotHalo} cx={dot.cx} cy={dot.cy} r="11" />
            <circle className={styles.dot} cx={dot.cx} cy={dot.cy} r="5" />
          </g>
        ))}
      </svg>
    </div>
  );
};

export default GrowthChart;
