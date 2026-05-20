# Enterprise RAG Reliability Platform

This is the flagship applied AI story in my portfolio.

The implementation lives primarily in
[`ai-reliability-lab`](https://github.com/GoparapukethaN/ai-reliability-lab), with the
public live demo surface supported by
[`applied-ai-eval-lab`](https://github.com/GoparapukethaN/applied-ai-eval-lab).

I use "enterprise RAG" here to describe the workflow shape, not external adoption. The
project is a portfolio-scale system built around the reliability pieces I would expect
before treating a document AI workflow as more than a demo:

- document ingestion and chunk metadata
- retrieval with visible source evidence
- cited answers
- refusal behavior when evidence is missing or sensitive
- evaluation cases and release-gate style checks
- traces, metrics, and report artifacts
- dashboard and CLI flows
- deterministic no-key verification before optional model providers

## How The Pieces Fit

| Surface | Role |
| --- | --- |
| `ai-reliability-lab` | Full backend/platform repo: FastAPI, SQLite, retrieval, providers, evals, traces, dashboard, CLI, proof artifacts |
| `applied-ai-eval-lab` | Live document intelligence demo: static dashboard, cited answers, answer-fact coverage, release-gate checks, report artifacts |
| Portfolio proof ledger | Public verification map for local tests, demo checks, and Docker-free proof paths |

## Why It Matters

RAG demos can look convincing while hiding the important questions:

- Did retrieval find the right evidence?
- Does the answer cite the evidence it used?
- Does the system refuse unsupported questions?
- Can evaluation catch regressions before a provider or prompt change?
- Can a reviewer run the core workflow without API keys?

The goal of this project is to make those questions inspectable.

## Review Path

1. Start with the full platform repo:
   <https://github.com/GoparapukethaN/ai-reliability-lab>
2. Open the dashboard walkthrough:
   <https://github.com/GoparapukethaN/ai-reliability-lab/blob/main/docs/demo.md#dashboard-demo>
3. Try the live Applied AI Eval Lab demo:
   <https://goparapukethan.github.io/applied-ai-eval-lab/>
4. Check the proof ledger:
   <https://github.com/GoparapukethaN/kethan-portfolio/blob/main/docs/proof-ledger.md>

## Honest Boundary

This is not a claim of production users, customer adoption, or business impact. The
signal is the engineering workflow: code, docs, tests, evals, dashboard behavior,
artifacts, and tradeoffs that I can explain in detail.
