import React from 'react';

import { SuggestionItem } from './SuggestionItem';

export type Suggestions = {
    domainName: string;
    transferable: boolean;
    availableForRegistration: boolean;
};

type SuggestionsListProps = {
    suggestions: Array<Suggestions>;
    trackLabel: string;
    buttonLabel: string;
    redirectionUrl: string;
    searchInput: string;
};

export const SuggestionsList = React.memo(
    ({
        suggestions,
        trackLabel,
        buttonLabel,
        redirectionUrl,
        searchInput,
    }: SuggestionsListProps) => {
        return (
            <ul>
                {suggestions.map((suggestion, i) => (
                    <SuggestionItem
                        key={i}
                        index={i}
                        domainName={suggestion.domainName}
                        trackLabel={trackLabel}
                        buttonLabel={buttonLabel}
                        redirectionUrl={redirectionUrl}
                        searchInput={searchInput}
                    />
                ))}
            </ul>
        );
    }
);

SuggestionsList.displayName = 'SuggestionsList';
