import React from 'react';
export const getLink = (domainName, redirectionUrl) => {
    return redirectionUrl + `&upgrade[domain]=${domainName}`;
};
export const getDomainTransferLink = (domainName, redirectionUrl) => {
    return redirectionUrl + `&upgrade[domain]=${domainName}&upgrade[isDomainTransfer]=1`;
};
export async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const json = await response.json();
    return json;
}

export const getDomainNameHTML = domainName => {
    return (
        <>
            {domainName.split('.')[0]}.<span>{domainName.split('.')[1]}</span>
        </>
    );
};
