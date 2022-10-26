import React, { useMemo } from 'react';

import { Typography } from '@jimdo/ui';

import { getDomainTransferLink } from '../../helpers/heroSearchUtils';

import * as classes from './TransferableDomain.module.scss';

type TransferableDomainProps = {
    domain: { domainName: string };
    domainNotAvailable: string;
    transferDomain: string;
    transferDomainLinkText: string;
    trackLabel: string;
    redirectionUrl: string;
};

export const TransferableDomain = React.memo(
    ({
        domain,
        domainNotAvailable,
        transferDomain,
        transferDomainLinkText,
        trackLabel,
        redirectionUrl,
    }: TransferableDomainProps) => {
        const getDomainTransferRedirectionLink = useMemo(
            () => getDomainTransferLink(domain.domainName, redirectionUrl),
            [domain, redirectionUrl]
        );
        return (
            <div className={classes.transferableBox}>
                <div className={classes.transferableGroup}>
                    <a
                        href={getDomainTransferRedirectionLink}
                        style={{ color: 'unset', textDecoration: 'unset' }}
                    >
                        <Typography variant="heading2" className={classes.transferableDomain}>
                            {domain.domainName}
                        </Typography>
                    </a>
                    <Typography variant="bodyDefault" className={classes.transferableText}>
                        {domainNotAvailable}
                    </Typography>
                </div>
                <div className={classes.transferableGroup}>
                    <Typography variant="bodyDefault" className={classes.transferableQuestion}>
                        {transferDomain}
                    </Typography>
                    <Typography variant="bodyDefault" className={classes.transferableLink}>
                        <a
                            id="transferableDomainLink"
                            href={getDomainTransferRedirectionLink}
                            data-tracking={`${trackLabel}-transfer-button`}
                        >
                            {transferDomainLinkText}
                        </a>
                    </Typography>
                </div>
            </div>
        );
    }
);

TransferableDomain.displayName = 'TransferableDomain';
