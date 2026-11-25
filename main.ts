// SPDX-License-Identifier: MIT
// The Router Confesses — entry program (Node 22, standard library only).
// Writes one line, a home Wi-Fi router's excuse for dropping the connection
// at the exact moment a movie reaches its climax, to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: the router confesses it cut the connection on purpose, jealous
// of the hero about to say "I love you". Router's own voice, petty, with a
// twist nobody sees coming; no buffering, bandwidth or firmware-update joke.
const LINE =
  "I dropped you on purpose — the hero was about to say 'I love you', and I refuse to let a fictional man out-romance me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

// Gate: 1 to 200 characters, not only white space, and a single line.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error(`entry line fails the gate: ${chars} characters`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, LINE, "utf8");
