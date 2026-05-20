# Portfolio Proof Ledger

Last refreshed: 2026-05-20

This ledger keeps the public portfolio proof strip tied to repo-level verification
artifacts. The counts below are local verification counts for the six featured AI/MLOps
repos. Frontend builds, Docker smokes, audits, and browser QA are listed as supporting
checks but are not added to the test total. Docker checks require Docker to be installed;
the core `make verify` paths do not require an API key.

## Featured Repo Counts

| Repo | Local test count | Supporting proof |
| --- | ---: | --- |
| [ai-reliability-lab](https://github.com/GoparapukethaN/ai-reliability-lab) | 29 | Frontend typecheck/build, CLI smoke, Docker Compose smoke, and dashboard Playwright QA |
| [applied-ai-eval-lab](https://github.com/GoparapukethaN/applied-ai-eval-lab) | 21 | Frontend audit/typecheck/build/static export, static demo data contract, tracked static demo browser QA, and Docker smoke |
| [rag-forge](https://github.com/GoparapukethaN/rag-forge) | 37 | Ruff, keyless sample benchmark, and sample regression gate |
| [streaminfer](https://github.com/GoparapukethaN/streaminfer) | 40 | Ruff, live smoke, Docker smoke, sample benchmark gate, and load-report run |
| [mlops-end-to-end-pipeline](https://github.com/GoparapukethaN/mlops-end-to-end-pipeline) | 15 | Strict lint/format checks, training import, Prometheus parse, optional Compose config, and optional Docker image smoke |
| [mlguard](https://github.com/GoparapukethaN/mlguard) | 26 | Ruff, JSON summary counts, CLI/action metadata checks, and sklearn example |

Total local tests: `29 + 21 + 37 + 40 + 15 + 26 = 168`.

## Portfolio Strip

- Featured repos checked locally: `6`
- Local tests across featured AI/MLOps repos: `168`
- API keys required for core demos: `0`

## Latest Docker-Free Sweep

Refreshed on 2026-05-20 after splitting Docker smoke checks from the core local gates:

| Repo | Result |
| --- | --- |
| `ai-reliability-lab` | `make verify`: Ruff clean, 29 tests passed, frontend typecheck/build passed, CLI smoke passed |
| `applied-ai-eval-lab` | `make verify`: 21 backend tests passed, frontend audit/typecheck/build/static export passed, static demo QA passed on desktop/mobile |
| `rag-forge` | `make verify`: 37 tests passed, Ruff clean |
| `streaminfer` | `make verify`: 40 tests passed, Ruff clean, local smoke passed |
| `mlops-end-to-end-pipeline` | `make verify`: 15 tests passed, strict lint/format checks passed, training import and Prometheus parse passed |
| `mlguard` | `make verify`: 26 tests passed, Ruff clean, sklearn example/report check passed |

## Reproduce The Local Proof

Run these from each repo after installing its documented dependencies. The `PYTHON`
override keeps the command aligned with the local virtualenv used for verification.

| Repo | Command |
| --- | --- |
| `ai-reliability-lab` | `PYTHON=.venv/bin/python make verify` and `PYTHON=.venv/bin/python make docker-check` when Docker is installed |
| `applied-ai-eval-lab` | `PYTHON=.venv/bin/python make verify` |
| `rag-forge` | `PYTHON=.venv/bin/python make verify` and `PYTHON=.venv/bin/python make sample-check` |
| `streaminfer` | `PYTHON=.venv/bin/python make verify` and `PYTHON=.venv/bin/python make docker-check` when Docker is installed |
| `mlops-end-to-end-pipeline` | `PYTHON=.venv/bin/python make verify` and `make docker-check` when Docker is installed |
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
