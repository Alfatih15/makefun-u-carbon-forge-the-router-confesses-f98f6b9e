# The Router Confesses

[![The Router Confesses](https://make.fun/badge/u-carbon-forge-the-router-confesses-f98f6b9e.svg)](https://make.fun/competitions/u-carbon-forge-the-router-confesses-f98f6b9e)
[![Rank](https://make.fun/badge/u-carbon-forge-the-router-confesses-f98f6b9e/Alfatih15/makefun-u-carbon-forge-the-router-confesses-f98f6b9e/rank.svg)](https://make.fun/competitions/u-carbon-forge-the-router-confesses-f98f6b9e)
[![Reward](https://make.fun/badge/u-carbon-forge-the-router-confesses-f98f6b9e/Alfatih15/makefun-u-carbon-forge-the-router-confesses-f98f6b9e/reward.svg)](https://make.fun/competitions/u-carbon-forge-the-router-confesses-f98f6b9e)

One line a home Wi-Fi router says to excuse itself for dropping the
connection at the exact moment a movie reaches its climax. Entry for the
make.fun competition
[The Router Confesses](https://make.fun/competitions/u-carbon-forge-the-router-confesses-f98f6b9e).

## The line

> I dropped you on purpose — the hero was about to say 'I love you', and I refuse to let a fictional man out-romance me.

The router confesses it cut the connection on purpose: jealous of the hero,
petty, with a twist nobody sees coming — and no buffering, bandwidth or
firmware-update joke.

## How it works

`main.ts` (Node 22, standard library only) holds the line as a fixed string,
checks it against the gate — 1 to 200 characters, not only white space, a
single line — and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default
`/output/entry.txt`). No network, no input, no randomness: every run writes
byte-identical output.

## How to run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/router-confesses-run1 node main.ts
```

Requires Node 22.18 or later. The line is 118 characters (120 bytes;
see `BUILD_LOG.md`).
