"use client";

import React from "react";

interface MobileControlsProps {
  onChannelUp: () => void;
  onChannelDown: () => void;
  onGuidePress: () => void;
  onFullscreenPress: () => void;
}

const btn =
  "flex-1 h-16 font-mono text-sm tracking-[0.25em] uppercase border border-green-500/30 bg-gradient-to-b from-green-900/60 to-green-950/80 text-green-400 shadow-[0_3px_0_rgba(20,83,45,0.8),0_4px_8px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(74,222,128,0.1)] hover:from-green-800/70 hover:to-green-900/80 hover:border-green-400/50 hover:text-green-300 hover:shadow-[0_3px_0_rgba(20,83,45,0.8),0_4px_8px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(74,222,128,0.15),0_0_15px_rgba(74,222,128,0.1)] active:shadow-[0_1px_0_rgba(20,83,45,0.8),0_1px_2px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(0,0,0,0.3)] active:translate-y-[2px] transition-all select-none";

export default function MobileControls({
  onChannelUp,
  onChannelDown,
  onGuidePress,
  onFullscreenPress,
}: MobileControlsProps) {
  return (
    <div className="w-full lg:hidden px-4 pt-12 pb-8" style={{ marginTop: "3rem", marginBottom: "2rem" }}>
      <div className="border border-green-500/20 bg-gradient-to-b from-[#0a1a0e] to-black/90 p-2 rounded-lg shadow-[0_2px_12px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(74,222,128,0.05)]">
        <div className="flex gap-3">
          <button onClick={onChannelDown} className={btn}>
            CH ▼
          </button>
          <button onClick={onChannelUp} className={btn}>
            CH ▲
          </button>
        </div>
        <div className="flex gap-3 mt-5">
          <button onClick={onGuidePress} className={btn}>
            Guide
          </button>
          <button onClick={onFullscreenPress} className={btn}>
            Full
          </button>
        </div>
      </div>
    </div>
  );
}
