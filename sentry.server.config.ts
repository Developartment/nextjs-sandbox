import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN;
const SENTRY_TRACES_SAMPLE_RATE: number = +(
    process.env.NEXT_PUBLIC_SENTRY_TRACES_SAMPLE_RATE ?? 1.0
);

Sentry.init({
    dsn: SENTRY_DSN,
    tracesSampleRate: SENTRY_TRACES_SAMPLE_RATE,
});
