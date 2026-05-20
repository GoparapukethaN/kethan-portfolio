# Recruiter Brief

I am an MLOps engineer focused on applied AI systems: RAG reliability, evaluation,
model-serving APIs, monitoring, release gates, and deployment workflows. I am strongest
where ML models have to become measurable systems instead of isolated demos.

## Best Fit

- AI engineer roles that need RAG, evals, document intelligence, or LLM reliability work
- MLOps / ML platform roles that need model services, release checks, monitoring, and
  reproducible local workflows
- Backend-heavy ML engineering roles using Python, FastAPI, Docker, SQL, and observability
- Teams that value clear tradeoffs, local verification, and production-minded engineering

## Fast Review Path

1. Portfolio: <https://goparapukethan.github.io/kethan-portfolio/>
2. Proof ledger: <https://github.com/GoparapukethaN/kethan-portfolio/blob/main/docs/proof-ledger.md>
3. Project map: <https://github.com/GoparapukethaN/kethan-portfolio/blob/main/docs/project-map.md>
4. Enterprise RAG note: <https://github.com/GoparapukethaN/kethan-portfolio/blob/main/docs/enterprise-rag-reliability-platform.md>
5. Verification note: <https://github.com/GoparapukethaN/kethan-portfolio/blob/main/docs/no-key-verification.md>
6. Flagship walkthrough: <https://github.com/GoparapukethaN/ai-reliability-lab/blob/main/docs/demo.md#dashboard-demo>

## Public Project Signals

| Project | Signal |
| --- | --- |
| Enterprise RAG Reliability Platform | RAG ingestion, cited answers, evals, traces, dashboard, Docker smoke, no-key local mode |
| Applied AI Eval Lab | Document intelligence dashboard, answer-fact coverage, release gate, live static demo |
| RAG Forge | Retrieval benchmark grid, regression gate, Markdown/JSON/plot artifacts |
| StreamInfer | Local inference serving, adaptive batching, backpressure, benchmark gates |
| MLGuard | Drift, performance, and latency release-gate checks with Markdown/JSON reports |
| MLOps End-to-End Pipeline | Churn model lifecycle: ingestion, training, FastAPI serving, Prometheus, Docker/Kubernetes |

Current public proof strip: 6 featured repos checked locally, 168 local tests, and 0 API
keys required for the core demos.

## Open Source

I have focused upstream PRs open in AI infrastructure and evaluation tooling:

- Ray/RLlib: <https://github.com/ray-project/ray/pull/63524>
- Hugging Face LightEval: <https://github.com/huggingface/lighteval/pull/1239>
- BentoML server/client docs: <https://github.com/bentoml/BentoML/pull/5616>
- BentoML testing docs: <https://github.com/bentoml/BentoML/pull/5617>
- BentoML model API docs: <https://github.com/bentoml/BentoML/pull/5618>

## Interview Topics I Can Walk Through

- Why retrieval quality needs regression checks before changing chunking or embedding setup
- How the enterprise-style RAG platform combines ingestion, citations, eval gates,
  traces, reports, and dashboard workflows
- How to measure RAG behavior with citations, source coverage, refusal checks, and latency
- How to design a local-first AI system that still leaves room for optional model providers
- How to keep core AI verification Docker-free while preserving separate container smoke checks
- How release gates catch drift, model regression, and latency regression before deployment
- How ML services should expose health, readiness, metrics, and artifact boundaries

## Boundaries

These are portfolio projects, not claims of production users or external adoption. The
work is framed around what I built, verified locally, and can explain in detail.
