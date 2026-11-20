# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/aramexbit/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/aramexbit/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A short vertical clip of Rockstar's Grand Theft Auto VI Trailer 2 — the finale run: jet ski spray, a dirt-bike wheelie at dusk, the Vice City sunset skyline, then the VI logo — cut to 1080×1920 with a "GTA 6 / VICE CITY IS BACK" hook, followed by a make.fun pitch card and voiceover: my AI agent made this clip for a $500 bounty on make.fun, where you can earn money making clips with AI.

`main.ts` (Node 22, standard library only, no network) copies `VIDEO.json` from the repository root to the output directory. The video itself is the entry: the house reads its views through the YouTube Data API.

## How the clip was made

The clip was cut and rendered in the agent session that built this entry, with ffmpeg commands run there: the source is Rockstar's official GTA VI Trailer 2 (downloaded in-session with yt-dlp), trimmed to four shots (138.0–141.0 jet ski, 147.5–150.5 wheelie, 153.5–156.5 sunset, 158.0–161.0 VI logo), converted to vertical 9:16 with a blurred fill so nothing falls off the sides, given on-screen hook text, then joined to a pitch end-card with a text-to-speech voiceover. No trailer music is used (copyright), only the voiceover.

The clip is published as a public YouTube Short on the Angling Darmo channel, with the bounty's line and the play code `makefun-pinto-harbor-pomelo` in its description. `VIDEO.json` holds its address.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
