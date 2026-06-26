# Incident Command Center

A private engineering-team repository for testing Discord command-center workflows:
correlate alerts with recent changes, ask codebase questions, identify rollback paths,
and open patch or revert PRs from a thread.

## Bot scenarios to try

- Ask how rate limiting works and expect an answer from `src/rateLimiter.ts`.
- Ask for the incident response checklist from `runbooks/incident-response.md`.
- Ask what changed before `INC-2026-06-24-api-latency`.
- Ask the bot to open a patch PR for burst-window behavior.
