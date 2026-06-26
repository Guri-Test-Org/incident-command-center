# Incident Response Runbook

## Severity guide

- SEV1: total outage, data loss, or security incident.
- SEV2: customer-visible degradation above 15 minutes.
- SEV3: limited degradation with a known workaround.

## Discord flow

1. Open an incident thread in `#incidents`.
2. Ask the bot to correlate alerts with recent merged PRs.
3. Assign incident commander, comms lead, and patch owner.
4. Choose patch, revert, or feature-flag mitigation.
5. Ask the bot for a customer update draft every 30 minutes.

## Rollback rule

Prefer a feature flag when the risky path is isolated. Prefer a revert when error
rate is above 5 percent and the suspect commit touched shared request middleware.
