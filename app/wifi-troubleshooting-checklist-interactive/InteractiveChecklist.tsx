"use client";

import { useMemo, useState } from "react";

const STEPS = [
  { id: "baseline", label: "Run the two-speed baseline test", hint: "Near router vs. broken room" },
  { id: "powercycle", label: "Power-cycle modem, router, nodes in order", hint: "Modem first, 60s wait" },
  { id: "placement", label: "Check router placement and antennas", hint: "Central, elevated, open air" },
  { id: "device", label: "Isolate: one device or every device?", hint: "Forget + rejoin on the outlier" },
  { id: "bands", label: "Sort out 2.4 GHz vs. 5 GHz", hint: "Split bands if a device clings wrong" },
  { id: "channels", label: "Fix channel congestion", hint: "Auto channel or least-crowded pick" },
  { id: "firmware", label: "Update router firmware", hint: "Auto-update on" },
  { id: "wired", label: "Run the wired truth test", hint: "Ethernet directly to router" },
  { id: "mesh", label: "Decide: mesh node or replacement", hint: "1500+ sq ft usually means mesh" },
  { id: "isp", label: "Call the provider with numbers in hand", hint: "Wired + wireless readings ready" },
];

export default function InteractiveChecklist() {
  const [done, setDone] = useState<Record<string, boolean>>({});

  const count = useMemo(() => STEPS.filter((s) => done[s.id]).length, [done]);
  const pct = Math.round((count / STEPS.length) * 100);

  function toggle(id: string) {
    setDone((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function reset() {
    setDone({});
  }

  return (
    <div className="term-card-static my-6 overflow-hidden">
      <div className="term-bar">
        <span className="dot bg-[#ff5f57]" />
        <span className="dot bg-[#febc2e]" />
        <span className="dot bg-[#28c840]" />
        <span className="mono ml-2 text-xs text-[#7d8f85]">
          wifi_checklist --interactive ({count}/{STEPS.length})
        </span>
      </div>
      <div className="p-5">
        <div
          className="h-2 overflow-hidden rounded-full bg-white/10"
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Checklist progress"
        >
          <div
            className="h-full rounded-full bg-[#34f27b] transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="mono mt-3 text-sm text-[#34f27b]">
          {pct === 100
            ? "all checks complete — re-run your speed tests now"
            : `${count} of ${STEPS.length} checks done (${pct}%)`}
        </p>
        <ol className="mt-4 space-y-3">
          {STEPS.map((s, i) => (
            <li key={s.id}>
              <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 hover:border-[#34f27b]/40">
                <input
                  type="checkbox"
                  checked={Boolean(done[s.id])}
                  onChange={() => toggle(s.id)}
                  className="mt-1 h-4 w-4 accent-[#34f27b]"
                  aria-label={s.label}
                />
                <span>
                  <span className="step-num mr-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={done[s.id] ? "line-through opacity-60" : ""}>
                    {s.label}
                  </span>
                  <span className="mono block text-xs text-[#7d8f85]">
                    {s.hint}
                  </span>
                </span>
              </label>
            </li>
          ))}
        </ol>
        <button
          type="button"
          onClick={reset}
          className="mono mt-4 rounded-lg border border-white/15 px-4 py-2 text-xs text-[#7d8f85] hover:border-[#34f27b]/50 hover:text-[#34f27b]"
        >
          reset checklist
        </button>
      </div>
    </div>
  );
}
