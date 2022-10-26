import React from 'react';

import clsx from 'clsx';

import * as classes from './index.module.scss';

const PolicyLink = ({ href, children }) => (
    <a
        href={href}
        target="_blank"
        data-tracking="processor_policy_link"
        rel="noreferrer noopener nofollow"
    >
        {children}
    </a>
);

export const ProcessorsTable = ({ data, header }) => (
    <table className={clsx('mni', classes.root)}>
        <thead>
            <tr>
                <th className={classes.header}>{header.name}</th>
                <th className={classes.header}>{header.service}</th>
                <th className={classes.header}>{header.country}</th>
                <th className={classes.header}>{header.policy}</th>
            </tr>
        </thead>
        <tbody>
            {data.map(processor => (
                <tr className={classes.row} key={processor.name}>
                    <td>{processor.name}</td>
                    <td>{processor.service}</td>
                    <td>{processor.country}</td>
                    <td>
                        <PolicyLink href={processor.policyUrl}>Link</PolicyLink>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);
