export interface Work {
  id: string;
  title: string;
  state: string;
}

export const works: Work[] = [
  { id: "RTD-01", title: "b7y7yh88", state: "Pressure" },
  { id: "RTD-02", title: "BBUGY77", state: "Pressure" },
  { id: "RTD-03", title: "gffdfdfd", state: "Pressure" },
  { id: "RTD-04", title: "INHUN", state: "Pressure" },
  { id: "RTD-05", title: "b-vb", state: "Interference" },
  { id: "RTD-06", title: "GF7F", state: "Interference" },
  { id: "RTD-07", title: "HGVHGGHGH", state: "Interference" },
  { id: "RTD-08", title: "i-mijmijmi", state: "Interference" },
  { id: "RTD-09", title: "88Y8Y8Y", state: "Expansion" },
  { id: "RTD-10", title: "CFYY", state: "Expansion" },
  { id: "RTD-11", title: "M-M-KOLI", state: "Expansion" },
  { id: "RTD-12", title: "VYYTGY", state: "Expansion" },
  { id: "RTD-13", title: "CGFCFCFHC", state: "Static / Void" },
  { id: "RTD-14", title: "GGVGJVG", state: "Static / Void" },
  { id: "RTD-15", title: "GHCFCFCF", state: "Static / Void" },
  { id: "RTD-16", title: "HHGFG", state: "Static / Void" },
];

export const stateText: Record<string, { line: string; words: string; note: string }> = {
  Pressure: {
    line: "The face appears close.",
    words: "Held. Direct. Compressed.",
    note: "A chamber of gaze and density.",
  },
  Interference: {
    line: "The image begins to break.",
    words: "Layer. Signal. Surface. Self.",
    note: "Where the archive becomes unstable.",
  },
  Expansion: {
    line: "The field opens.",
    words: "The figure moves outward.",
    note: "A release of air through form.",
  },
  "Static / Void": {
    line: "The work settles.",
    words: "Presence remains without explanation.",
    note: "The final room. No demand. No return.",
  },
};

export const groups = ["Pressure", "Interference", "Expansion", "Static / Void"];

export const glows: Record<string, string> = {
  Pressure: "from-orange-900/40 via-zinc-950 to-black",
  Interference: "from-fuchsia-950/35 via-cyan-950/20 to-black",
  Expansion: "from-amber-800/30 via-sky-950/20 to-black",
  "Static / Void": "from-zinc-700/25 via-zinc-950 to-black",
};
