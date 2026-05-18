# Atlasmc Tokenomics — Working Draft

> **Status: Draft. Nothing here is final, deployed, or for sale.**
> This document is the long-form companion to the public
> [/token page](https://atlasmc-web-opal.vercel.app/token). The high-level
> commitments on the public page are reproduced here verbatim and
> expanded. Items marked `[FILL IN: ...]` need decisions that haven't
> been made yet — replace each placeholder with concrete answers
> before publishing externally.

Last updated: 2026-04-28.

---

## 1. Vision

Atlasmc is an open-source desktop application — a fork of [Arnis](https://github.com/louis-e/arnis)
by Louis Erbkamm — that generates Minecraft worlds from real-world
geographic data. The Atlasmc Token funds the bigger bets that pure
donations to a small project realistically can't sustain:

- A hosted browser-based generator for users without local hardware.
- A plugin ecosystem (custom OSM element processors, biome packs).
- Shared infrastructure (Overpass mirrors, elevation tile caches, CDN).
- Community grants for translations, plugins, and documentation.

The desktop application stays free, open-source, and Apache-2.0 licensed
indefinitely. The token never gates core features.

---

## 2. Token classification — utility, not security

We are explicitly designing the Atlasmc Token to be a **utility token**,
not a security. Howey-test factors we are working to avoid:

- **No promise or expectation of profit from the efforts of others.**
  Marketing focuses on in-protocol utility (governance, hosted-tier
  access, plugin marketplace) rather than passive holding for
  appreciation.
- **No common enterprise where holders' returns are tied to maintainer
  performance.** Treasury spending is governed transparently and
  doesn't accrue to holders proportional to their stake.
- **Token utility is in-protocol** rather than purely speculative.

`[FILL IN: jurisdiction-specific legal review.]` Securities law differs
between the US (SEC), EU (MiCA, in force since 2024), UK (FCA),
Singapore (MAS), etc. The maintainer's home jurisdiction and the major
user jurisdictions need a documented legal review before any sale.

---

## 3. Pre-launch guarantees

These commitments are mirrored on the public /token page so they are
publicly verifiable:

1. **The desktop app stays free, open source, and Apache-2.0 forever.**
   The token never gates core features.
2. **Generation works without a wallet, without a token, without an
   account.** No web3 friction in the core product flow.
3. **Independent smart-contract audit before mainnet deployment.**
   Audit report published alongside the contract address. `[FILL IN:
   auditor selection — Trail of Bits, OpenZeppelin, Spearbit,
   ConsenSys Diligence, or Halborn.]`
4. **Liquidity locked for 4+ years** via a third-party locker
   (e.g., UNCX, Team Finance), verifiable on-chain.
5. **Treasury controlled by a multi-sig** with disclosed signers.
   Quarterly transparency reports posted to GitHub Discussions and
   linked from /token.
6. **Public testnet for at least 30 days** before any mainnet
   deployment. Bug bounty for at least 90 days post-launch.

---

## 4. Chain selection

`[FILL IN: which chain.]` Tradeoffs:

| Chain | Pros | Cons |
|---|---|---|
| Ethereum L1 | Largest user base, best tooling, best legitimacy | High deploy cost, high gas |
| Base / Arbitrum / Optimism | Cheap, EVM-compatible, large reach | Slightly less prestige |
| Solana | Cheap, fast, established for token launches | Volatile reputation |
| Sui / Aptos | Modern, Move-based | Smaller ecosystem |
| Polygon | Cheap, EVM | Sometimes seen as a pump-chain |

Recommended default: an EVM L2 (Base or Arbitrum) for cost + liquidity
+ developer familiarity. The chain decision and rationale should be
documented publicly before any sale.

---

## 5. Supply

- **Total supply**: `[FILL IN: e.g., 1,000,000,000 ATLAS]`. Fixed,
  not inflationary.
- **Decimals**: `[FILL IN: typically 18 for EVM, 9 for Solana SPL.]`
- **Symbol**: `[FILL IN: e.g., ATLAS.]` Verify it doesn't conflict
  with high-volume tickers on major exchanges before locking it in.

---

## 6. Distribution

A defensible distribution emphasizes community and treasury, minimizes
team allocation, and avoids hard insider concentration. Suggested
starting point — adjust as the maintainer's situation requires:

| Bucket | % | Lock / Vesting | Rationale |
|---|---|---|---|
| Community / airdrop | 30 | Unlocked at TGE | Early users, contributors |
| Treasury | 25 | Multisig-controlled, transparent | Development, ops, grants |
| Liquidity | 15 | Locked in DEX pool for 4+ years | Trading on-chain |
| Team | 15 | 6mo cliff, then linear over 36mo | Maintainer + future hires |
| Investors / advisors | 10 | 12mo cliff, then linear over 24mo | If needed; can be 0 |
| Ecosystem grants | 5 | Released quarterly via grants program | Third-party integrations |

`[FILL IN: actual percentages, addresses, multisig signers.]`

---

## 7. Vesting

All non-immediate allocations follow public, on-chain vesting via a
contract like Sablier, Hedgey, or a custom vester. Anti-rug measures:

- Team and investor tokens locked for the cliff period; no exceptions,
  no off-chain side deals.
- Liquidity locked for ≥ 4 years via a third-party locker
  (UNCX or Team Finance), verifiable on-chain.
- Treasury controlled by an N-of-M multi-sig (suggested 3-of-5) with
  public signer identities, or pseudonymous-but-doxxable identities
  with reputation skin in the game.

`[FILL IN: signer list, contract addresses, locker URLs.]`

---

## 8. Utility (mirrors /token page)

The token's utility, in priority order:

### 8.1. Treasury funding

A meaningful treasury cut funds:

- Ongoing development of the open-source desktop app.
- Infrastructure: Overpass mirrors, elevation tile caches, CDN bandwidth.
- Hosted browser-based generator (Phase 5 of the public roadmap).
- Community grants program.

Treasury spending is transparent on-chain; quarterly reports are
posted and linked from /token.

### 8.2. Hosted-tier access

Token holders get free or discounted access to the hosted browser-based
generator. Free quota tied to holdings; pay-per-area for non-holders.
This is the dominant economic utility for non-power-user holders.

### 8.3. Governance

Lightweight on-chain (or Snapshot off-chain) voting on non-critical
project decisions:

- Feature prioritization within the published roadmap.
- Grant program direction (which proposals to fund).
- Treasury spending policies above a threshold.

Critical project decisions (license, security responses, fork
direction) remain with the maintainer to avoid governance attacks.

### 8.4. Plugin marketplace

Phase 6 introduces a plugin ecosystem (custom OSM element processors,
biome packs, generation styles). Token holders get a fee-discount lane
on plugin purchases; creators retain the majority of plugin revenue;
token-funded grants seed the first wave of high-quality plugins.

---

## 9. Treasury management

- All treasury funds in a public multi-sig.
- Quarterly transparency report posted to the project's
  [GitHub Discussions](https://github.com/kodekaze1/atlasmc/discussions)
  and linked from /token.
- A spending policy (drafted in advance, ratified by token holders if
  governance is enabled) defines what treasury funds can pay for and
  what triggers a vote.
- No undisclosed transfers, no off-multisig spending, no
  "discretionary fund" outside the policy.

`[FILL IN: multisig address, signer policy, spending policy doc.]`

---

## 10. Audit and security

Before any mainnet deployment:

- Engage an independent smart-contract auditor.
  `[FILL IN: chosen firm — Trail of Bits, OpenZeppelin, Spearbit,
  ConsenSys Diligence, or Halborn.]`
- Publish the audit report alongside the contract address, hashed for
  verifiability.
- Use battle-tested implementations (OpenZeppelin ERC-20, Sablier
  vesting, etc.) over novel custom logic.
- Bug bounty (Immunefi or self-hosted) for ≥ 90 days post-launch.

`[FILL IN: bounty terms, max payout per severity tier.]`

---

## 11. Roadmap

This sequencing mirrors the public /roadmap page. Each milestone
gates the next.

1. **Foundation** — fork, rebrand, ship. *(complete)*
2. **First public release** — Atlasmc v2.7.x with schem export and
   server bundle. *(complete)*
3. **Pre-launch hardening** — auditor selection, legal review,
   tokenomics finalization, custom domain, real logo, real Authenticode
   cert. *(in progress)*
4. **Token launch** — public testnet → audit complete → community
   feedback period → mainnet → liquidity locked → TGE. *(next)*
5. **Hosted generator** — browser-based generation as a token-gated
   service. *(later)*
6. **Plugin ecosystem** — plugin API, marketplace, token-funded
   grants. *(later)*

`[FILL IN: target dates per phase, if any.]` Ship-when-ready beats
ship-by-date for projects this small.

---

## 12. Contributors

Maintainer: `kodekaze1` (kodekaze1@gmail.com,
[github.com/kodekaze1](https://github.com/kodekaze1)).

Apache-2.0 contributors to the underlying Arnis codebase
([louis-e/arnis](https://github.com/louis-e/arnis) at commit `2d0a0aa`)
are not affiliated with the token project and have not endorsed it.

`[FILL IN: any additional contributors / advisors with their disclosure
statements.]`

---

## 13. References

- Howey test: <https://en.wikipedia.org/wiki/SEC_v._W._J._Howey_Co.>
- US SEC framework for digital assets: <https://www.sec.gov/files/dlt-framework.pdf>
- EU MiCA regulation: <https://eur-lex.europa.eu/eli/reg/2023/1114/oj>
- OpenZeppelin ERC-20 patterns: <https://docs.openzeppelin.com/contracts/5.x/erc20>
- Sablier vesting: <https://sablier.com/>
- UNCX / Team Finance lockers: <https://uncx.network/>, <https://team.finance/>

---

## 14. Disclaimer

This document describes plans only. No commitments are made. Any
statements about future utility, performance, or value are
forward-looking and subject to change. Nothing in this document is
financial, legal, or tax advice. Consult a licensed professional in
your jurisdiction before participating in any token-related activity.
See [Terms](https://atlasmc-web-opal.vercel.app/terms) for the operative
agreement.
