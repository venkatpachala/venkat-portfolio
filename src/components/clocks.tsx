"use client";

import { useEffect, useState } from "react";

function format(date: Date, timeZone?: string) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone,
  }).format(date);
}

export function Clocks() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="text-right font-mono text-xs tracking-wide text-fg/90" aria-live="off">
      <p>
        <span className="text-faint">YOUR </span>
        {now ? format(now) : "—"}
      </p>
      <p className="mt-1">
        <span className="text-faint">MY </span>
        {now ? format(now, "Asia/Kolkata") : "—"}
      </p>
    </div>
  );
}
