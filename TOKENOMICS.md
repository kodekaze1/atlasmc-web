# Atlasmc Tokenomics — Draft

> **Status: Draft. Nothing here is final, deployed, or for sale.**
> This document is a working template. Items marked `[FILL IN: ...]`
> require decisions that haven't been made yet. Replace each placeholder
> with concrete answers before publishing or sharing externally.

---

## 1. Vision

Atlasmc is an open-source desktop application (a fork of Arnis by Louis
Erbkamm) that generates Minecraft worlds from real-world geographic data.
The Atlasmc Token is being explored as a way to:

- Fund continued development of the desktop app and its hosted services.
- Pay for shared infrastructure (Overpass mirrors, elevation tile caches,
  CDN, hosted generator).
- Reward contributors via a community grants program.
- Enable lightweight governance over non-critical project decisions.

**The token is not a precondition for using Atlasmc.** The desktop
application remains free and Apache-2.0 licensed indefinitely.

---

## 2. Token classification

We are explicitly designing the Atlasmc Token to be a **utility token**,
not a security. The Howey-test factors we are working to avoid:

- No promise or expectation of profit from the efforts of others.
- No common enterprise where holders' returns are tied to maintainer
  performance.
- Token utility is in-protocol (governance, staking for hosted-tier
  access, etc.) rather than passive holding for appreciation.

`[FILL IN: jurisdiction-specific legal review.` Securities law varies
between the US (SEC), EU (MiCA), UK (FCA), Singapore (MAS), etc.
Identify the maintainer's home jurisdiction and the major user
jurisdictions, and document the legal review for each.]

---

## 3. Chain selection

`[FILL IN: which chain.]` Candidates and tradeoffs:

| Chain | Pros | Cons |
|---|---|---|
| Ethereum L1 | Largest user base, best tooling, best legitimacy | High deploy cost, high gas |
| Base / Arbitrum / Optimism | Cheap, EVM-compatible, large reach | Slightly less prestige |
| Solana | Cheap, fast, good for token launches | Rust SDK; volatile reputation |
| Sui / Aptos | Modern, Move-based | Smaller ecosystem |
| Polygon | Cheap, EVM, integrated with Web3 tooling | Sometimes seen as "pump chain" |

Recommended default: an EVM L2 (Base or Arbitrum) for cost + liquidity +
familiarity. Document the choice's rationale.

---

## 4. Supply

- **Total supply**: `[FILL IN: e.g., 1,000,000,000 ATLAS]`. Fixed,
  not inflationary.
- **Decimals**: `[FILL IN: typically 18 for EVM, 9 for Solana SPL]`.
- **Symbol**: `[FILL IN: e.g., ATLAS]`. Verify it doesn't conflict with
  high-volume tickers on major exchanges.

---

## 5. Distribution

A defensible distribution emphasizes community and treasury, minimizes
team allocation, and avoids a hard insider concentration. Suggested
starting point — adjust to your situation:

| Bucket | % | Lock / Vesting | Rationale |
|---|---|---|---|
| Community / airdrop | 30 | Unlocked at TGE (token generation event) | Early users, contributors |
| Treasury | 25 | Multisig-controlled, transparent on-chain | Development, ops, grants |
| Liquidity | 15 | Locked in DEX pool for 4+ years | Trading on-chain |
| Team | 15 | 6mo cliff, then linear over 36mo | Maintainer + future hires |
| Investors / advisors | 10 | 12mo cliff, then linear over 24mo | If needed; can be 0 |
| Ecosystem grants | 5 | Released quarterly via grants program | Third-party integrations |

`[FILL IN: actual percentages, addresses, multisig signers.]`

---

## 6. Vesting

All non-immediate allocations should follow public, on-chain vesting via
a contract like Sablier, Hedgey, or a custom vester. Anti-rug measures:

- Team and investor tokens locked for the cliff period; no exceptions.
- Liquidity locked for ≥4 years via a third-party locker
  (e.g., UNCX, Team Finance) — verifiable on-chain.
- Treasury controlled by an N-of-M multisig (suggested 3-of-5) with
  public signer identities or pseudonymous-but-doxxable identities.

`[FILL IN: signer list, contract addresses, locker URLs once deployed.]`

---

## 7. Utility

To strengthen the utility-token classification and provide actual reasons
to hold:

- **Hosted generator tier**: token holders get free or discounted access
  to the hosted web generator (the equivalent of upstream's MapSmith).
- **Governance**: vote on non-critical project decisions
  (logos, social copy, feature prioritization). Snapshot off-chain
  governance is sufficient for v1.
- **Grants**: token-funded micro-grants for community contributions
  (translations, plugins, content).
- **Cosmetic**: token-gated cosmetic skins or world-generation styles
  in the desktop app — opt-in only, never gating core features.

`[FILL IN: which utilities ship at launch vs. roadmap items.]`

---

## 8. Treasury management

- All treasury funds in a public multisig.
- Quarterly transparency report posted to the project's GitHub Discussions
  and linked from /token on the website.
- A spending policy (drafted in advance, ratified by token holders if
  you opt for governance) defines what treasury funds can pay for.
- No undisclosed transfers or off-multisig spending.

`[FILL IN: multisig address, signer policy, spending policy doc.]`

---

## 9. Audit and security

Before any mainnet deployment:

- Engage an independent smart-contract auditor (Trail of Bits, OpenZeppelin,
  Spearbit, ConsenSys Diligence, Halborn — pick one).
- Publish the audit report alongside the contract address.
- Contracts use battle-tested implementations (OpenZeppelin ERC-20,
  Sablier vesting, etc.) rather than novel custom logic.
- Bug bounty (Immunefi or self-hosted) for at least 90 days post-launch.

`[FILL IN: auditor selection, report link, bug bounty terms.]`

---

## 10. Roadmap

This is a rough sequence. Each item is a precondition for the next.

1. Finalize this tokenomics document with all `[FILL IN]` resolved.
2. Engage legal review in primary jurisdictions.
3. Engage a smart-contract auditor.
4. Deploy on testnet; run a public testnet phase for ≥30 days.
5. Audit completes; report published.
6. Public announcement; community feedback period (≥14 days).
7. Mainnet deployment; liquidity locked; vesting contracts initialized.
8. TGE (token generation event); airdrop / claim period.
9. Governance bootstrap; first treasury proposal.
10. Hosted generator goes live with token-gated tier.

`[FILL IN: target dates per phase.]`

---

## 11. Contributors

The maintainer of this draft is `kodekaze1` (kodekaze1@gmail.com,
github.com/kodekaze1).

Apache-2.0 contributors to the underlying Arnis codebase are not
affiliated with the token project and have not endorsed it.

`[FILL IN: any additional contributors / advisors and their disclosure
statements.]`

---

## 12. References

- Howey test: https://en.wikipedia.org/wiki/SEC_v._W._J._Howey_Co.
- US SEC framework for digital assets: https://www.sec.gov/files/dlt-framework.pdf
- EU MiCA regulation: https://eur-lex.europa.eu/eli/reg/2023/1114/oj
- Open Zeppelin ERC-20 patterns: https://docs.openzeppelin.com/contracts/5.x/erc20

---

## 13. Disclaimer

This document describes plans only. No commitments are made. Any
statements about future utility, performance, or value are
forward-looking and subject to change. Nothing in this document is
financial, legal, or tax advice. Consult a licensed professional before
participating in any token-related activity.
