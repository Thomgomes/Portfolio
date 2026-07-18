export function TopoLines({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 1200 800"
      fill="none"
    >
      <g stroke="var(--topo-line)" strokeWidth="1" fill="none">
        <path d="M-50,120 C200,60 400,200 700,140 S1100,80 1300,180" />
        <path d="M-50,200 C180,140 420,300 720,220 S1120,160 1300,260" />
        <path d="M-50,280 C220,220 380,380 680,300 S1140,240 1300,340" />
        <path d="M-50,360 C200,300 440,460 740,380 S1100,320 1300,420" />
        <path d="M-50,440 C240,380 400,540 700,460 S1120,400 1300,500" />
        <path d="M-50,520 C180,460 460,620 720,540 S1080,480 1300,580" />
        <path d="M-50,600 C220,540 420,700 680,620 S1140,560 1300,660" />
        <path d="M-50,680 C200,620 440,780 740,700 S1100,640 1300,740" />
        <circle cx="180" cy="180" r="90" />
        <circle cx="180" cy="180" r="140" />
        <circle cx="180" cy="180" r="200" />
        <circle cx="1020" cy="620" r="80" />
        <circle cx="1020" cy="620" r="130" />
        <circle cx="1020" cy="620" r="190" />
      </g>
    </svg>
  );
}
