# Portfolio Proof Ledger

Last refreshed: 2026-05-20

This ledger keeps the public portfolio proof strip tied to repo-level verification
artifacts. The counts below are local verification counts for the six featured AI/MLOps
repos; frontend builds, Docker smokes, audits, and browser QA are listed as supporting
checks but are not added to the test total.

## Featured Repo Counts

| Repo | Local test count | Supporting proof |
| --- | ---: | --- |
| [ai-reliability-lab](https://github.com/GoparapukethaN/ai-reliability-lab) | 29 | Frontend typecheck/build, CLI smoke, Docker Compose smoke, and dashboard Playwright QA |
| [applied-ai-eval-lab](https://github.com/GoparapukethaN/applied-ai-eval-lab) | 21 | Frontend audit/typecheck/build/static export, static demo data contract, tracked static demo browser QA, and Docker smoke |
| [rag-forge](https://github.com/GoparapukethaN/rag-forge) | 37 | Ruff, keyless sample benchmark, and sample regression gate |
| [streaminfer](https://github.com/GoparapukethaN/streaminfer) | 40 | Ruff, live smoke, Docker smoke, sample benchmark gate, and load-report run |
| [mlops-end-to-end-pipeline](https://github.com/GoparapukethaN/mlops-end-to-end-pipeline) | 15 | Strict lint/format checks, Compose config, training import, and Docker image smoke |
| [mlguard](https://github.com/GoparapukethaN/mlguard) | 26 | Ruff, JSON summary counts, CLI/action metadata checks, and sklearn example |

Total local tests: `29 + 21 + 37 + 40 + 15 + 26 = 168`.

## Portfolio Strip

- Featured repos checked locally: `6`
- Local tests across featured AI/MLOps repos: `168`
- API keys required for core demos: `0`

## Reproduce The Local Proof

Run these from each repo after installing its documented dependencies. The `PYTHON`
override keeps the command aligned with the local virtualenv used for verification.

| Repo | Command |
| --- | --- |
| `ai-reliability-lab` | `PYTHON=.venv/bin/python make verify` and `PYTHON=.venv/bin/python make docker-check` |
| `applied-ai-eval-lab` | `PYTHON=.venv/bin/python make verify` |
| `rag-forge` | `PYTHON=.venv/bin/python make verify` and `PYTHON=.venv/bin/python make sample-check` |
| `streaminfer` | `PYTHON=.venv/bin/python make verify` and `PYTHON=.venv/bin/python make docker-check` |
| `mlops-end-to-end-pipeline` | `PYTHON=.venv/bin/python make verify` and `make docker-check` |
| `mlguard` | `PYTHON=.venv/bin/python make verify` |

## Verification Sources

- [AI Reliability Platform verification](https://github.com/GoparapukethaN/ai-reliability-lab/blob/main/docs/verification.md)
- [Applied AI Eval Lab verification](https://github.com/GoparapukethaN/applied-ai-eval-lab/blob/main/docs/verification.md)
- [RAG Forge verification](https://github.com/GoparapukethaN/rag-forge/blob/main/docs/verification.md)
- [StreamInfer verification](https://github.com/GoparapukethaN/streaminfer/blob/main/docs/verification.md)
- [MLOps End-to-End Pipeline verification](https://github.com/GoparapukethaN/mlops-end-to-end-pipeline/blob/main/docs/verification.md)
- [MLGuard verification](https://github.com/GoparapukethaN/mlguard/blob/main/docs/verification.md)

## Open Source Status

The portfolio links to open upstream pull requests. They are useful signals because they
show focused contribution work in real projects, but they should not be described as
merged until maintainers merge them.

- Ray/RLlib PR: <https://github.com/ray-project/ray/pull/63524>
- Hugging Face LightEval PR: <https://github.com/huggingface/lighteval/pull/1239>
- BentoML server API PR: <https://github.com/bentoml/BentoML/pull/5616>
- BentoML testing PR: <https://github.com/bentoml/BentoML/pull/5617>
- BentoML Model API PR: <https://github.com/bentoml/BentoML/pull/5618>
