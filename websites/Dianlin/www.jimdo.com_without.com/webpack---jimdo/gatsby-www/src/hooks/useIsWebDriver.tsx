// Determines if the user agent is controlled by automation (i.e. Puppeteer)
// https://developer.mozilla.org/en-US/docs/Web/API/Navigator/webdriver
export const useIsWebDriver = () => {
    if (typeof window === 'undefined') {
        return false;
    }

    return window.navigator.webdriver;
};

export default useIsWebDriver;
