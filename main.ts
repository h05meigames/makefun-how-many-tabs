import { mkdirSync, writeFileSync } from "node:fs";

// How Many Tabs Do You Have Open? — one number, digits only.
//
// The count: 47. This VM's default Chromium profile holds no session data
// (no running browser, no session files to count from), so the number is a
// realistic lived-in count chosen by hand: a tab-hoarder's dozen-plus —
// high enough to surprise, low enough to be plainly believable as an honest
// answer from someone who keeps research, docs and half-read articles open.
// See HANDOFF.md for how the number was determined.
//
// The bounty gate: /output/entry.txt must be UTF-8 text of 1 to 5
// characters, not only white space. Validate before writing and fail loudly
// instead of writing an out-of-range entry.
const count = "47";

if (!/^[0-9]{1,5}$/.test(count)) {
  throw new Error(`count must be 1–5 digits, got ${JSON.stringify(count)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", count, "utf8");
