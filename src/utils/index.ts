import * as Sentry from '@sentry/react';

export const getHumanReadableDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
}

export const initSentry = () => {
    if (import.meta.env.MODE === 'development') {
        const sentryDsn = import.meta.env.VITE_SENTRY_DSN
        if (sentryDsn) {
            Sentry.init({
                dsn: sentryDsn,
                integrations: [
                    Sentry.browserTracingIntegration(),
                    Sentry.replayIntegration(),
                ],
                // Tracing
                tracesSampleRate: 1.0, //  Capture 100% of the transactions
                // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
                tracePropagationTargets: [
                    'localhost',
                    /^https:\/\/yourserver\.io\/api/,
                ],
                // Session Replay
                replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
                replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
            })

            console.log('Sentry successfully initialized in development mode')
        } else {
            console.warn('Sentry DSN is not set for development.')
        }
    }
};