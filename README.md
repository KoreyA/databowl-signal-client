# databowl-signal-client

Opinionated client-side wrapper around `@databowl/affiliate-tracking`, used by Databowl Signal to capture and certify lead journeys.

This package standardises:
- Page-view capture
- Attribution and consent metadata
- Submit event creation
- Optional Recaptcha step-up
- Optional certificate issuance call to your Signal backend

## What this is
- A thin wrapper over `TrackingClient`
- A single place to enforce required params and event conventions
- A stable API for landing pages, so Signal can evolve without changing every page

## What this is not
- Not a replacement for `@databowl/affiliate-tracking`
- Not the Signal backend
- Not a fraud detection engine, it only captures signals and calls your backend

## Install

```bash
npm install databowl-signal-client @databowl/affiliate-tracking
