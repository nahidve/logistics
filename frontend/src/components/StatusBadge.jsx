// Clay StatusBadge — cream pill with accent dot per status
const STATUS_CONFIG = {
  Booked: {
    dot:  "var(--clay-lavender)",
    bg:   "var(--clay-surface-card)",
    text: "var(--clay-ink)",
  },
  Stored: {
    dot:  "var(--clay-mint)",
    bg:   "var(--clay-surface-card)",
    text: "var(--clay-ink)",
  },
  "Ready Dispatch": {
    dot:  "var(--clay-peach)",
    bg:   "var(--clay-surface-card)",
    text: "var(--clay-ink)",
  },
  "In Transit": {
    dot:  "var(--clay-ochre)",
    bg:   "var(--clay-surface-card)",
    text: "var(--clay-ink)",
  },
  Received: {
    dot:  "var(--clay-mint)",
    bg:   "var(--clay-surface-card)",
    text: "var(--clay-ink)",
  },
  "Ready Pickup": {
    dot:  "var(--clay-lavender)",
    bg:   "var(--clay-surface-card)",
    text: "var(--clay-ink)",
  },
  Completed: {
    dot:  "#22c55e",
    bg:   "var(--clay-surface-card)",
    text: "var(--clay-ink)",
  },
  Active: {
    dot:  "#22c55e",
    bg:   "var(--clay-surface-card)",
    text: "var(--clay-ink)",
  },
};

const DEFAULT_CONFIG = {
  dot:  "var(--clay-muted-soft)",
  bg:   "var(--clay-surface-card)",
  text: "var(--clay-ink)",
};

export default function StatusBadge({ status }) {
  const cfg = STATUS_CONFIG[status] ?? DEFAULT_CONFIG;

  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "7px",
      padding: "5px 12px",
      background: cfg.bg,
      color: cfg.text,
      fontSize: "13px",
      fontWeight: 500,
      borderRadius: "9999px",
      whiteSpace: "nowrap",
      border: "1px solid var(--clay-hairline)",
    }}>
      <span style={{
        width: "7px", height: "7px",
        borderRadius: "50%",
        background: cfg.dot,
        flexShrink: 0,
      }} />
      {status}
    </span>
  );
}