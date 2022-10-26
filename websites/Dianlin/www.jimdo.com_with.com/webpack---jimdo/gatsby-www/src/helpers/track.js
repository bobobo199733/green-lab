import { trackEvent } from '@jimdo/consent-management-tracking';
import { datadogRum } from '@jimdo/monitoring';

const eventMapper = event => ({
    ...event,
    label: event.action,
    action: event.label,
});

export const track = ({ eventAction, eventLabel, payload }) => {
    if (typeof window !== 'undefined') {
        trackEvent(
            {
                category: 'www',
                anonymousCategory: 'lp.www',
                action: eventAction,
                label: eventLabel,
                payload: payload,
            },
            eventMapper
        );

        datadogRum.addAction(`www.${eventAction}.${eventLabel}`, payload);
    }
};
