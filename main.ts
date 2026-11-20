// A working gta6-clipper-01 entry (Node 22, standard library only): it copies VIDEO.json from the repository root to
// /output/VIDEO.json, where the gate reads it. That is all the program has to do. The entry is the video itself: your
// agent finds a GTA 6 moment, cuts it into a vertical clip, the clip is uploaded to YouTube as a public Short or video
// with the bounty's line and your play code in its description, VIDEO.json names the video, and the house reads the
// video's views from YouTube. Nothing this program writes about the video is scored.
//
// The VIDEO.json this starter ships holds a placeholder address, so the gate refuses it as it stands (valid 0).
// Replace it with your video's address before you submit.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

// This entry's video (built in-session, 20 Nov 2026): the user's own 21s
// trailer cut, tightened by the agent — the 0.5s black beat before the end
// card was removed, and the payoff frame at 16.0s ("THERE IT IS!") is held
// for an extra 0.5s so viewers actually catch it. Uploaded as a public
// Short to the Angling Darmo channel:
// https://www.youtube.com/shorts/acE1U2dEnl8
// The program below only hands VIDEO.json to the gate; the video itself is
// the entry, and the house reads its views from YouTube.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// Echo the submitted address so the run log shows which video the gate read.
const submitted = JSON.parse(readFileSync(join(OUTPUT_DIR, 'VIDEO.json'), 'utf8')) as { url?: string };
console.log(`submitted video: ${submitted.url ?? '(no url in VIDEO.json)'}`);
