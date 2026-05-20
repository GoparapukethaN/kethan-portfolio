# Verifying AI Systems Without API Keys

I like local-first AI projects because they force the system to prove its shape before a
paid model provider enters the loop. A stronger model can make an answer sound better,
but it should not be the only reason the system looks reliable.

For the portfolio projects I have been polishing, I use a simple rule: the core demo
should run without an API key, and the verification path should make the important
failure modes visible from a fresh checkout.

## What I Check First

The first layer is deterministic behavior. In a RAG system, that means the retriever,
chunk metadata, citations, refusal behavior, and eval scoring should all be testable
without calling an external model. If the local answer composer can cite the right
evidence and refuse questions that are not supported by the corpus, then a future LLM
provider has a cleaner contract to satisfy.

The second layer is artifact evidence. I want a reviewer to find concrete outputs:
JSON reports, Markdown reports, screenshots, browser QA results, sample benchmark
tables, and commands that recreate the proof. That is more useful than a vague claim
that the project is "production ready."

The third layer is optional infrastructure. Docker and Compose are still valuable, but
they should be separate from the core verification path when possible. If Docker is not
installed, `make verify` should still prove the Python, frontend, eval, and report logic.
The container smoke can live in `make docker-check` or `make verify-full`.

## Why This Matters

Most AI demos fail in quiet ways:

- The answer is fluent but not grounded in the retrieved evidence.
- Citations point to a document but not the actual supporting chunk.
- An eval score improves because the test set is too small or too forgiving.
- A dashboard looks polished but does not expose failure cases.
- A model provider change breaks behavior that was never tested locally.

Local deterministic checks do not solve every problem, but they make these failures
visible early. They also make the project easier to review because the important paths
do not depend on secret keys, billing state, or a specific cloud account.

## The Pattern I Use

1. Keep a small sample corpus or dataset in the repo.
2. Build a deterministic baseline before adding optional providers.
3. Test retrieval, scoring, refusal, and report generation directly.
4. Add browser QA for the visible demo path.
5. Keep Docker checks separate from the core local test path.
6. Document exact commands and the current limits of the project.

That pattern shows up across the current project set: AI Reliability Platform, Applied
AI Eval Lab, RAG Forge, StreamInfer, MLGuard, and the MLOps pipeline. The goal is not to
pretend a local repo is a production platform. The goal is to show the habits that make
AI systems easier to trust when they move beyond a demo.
