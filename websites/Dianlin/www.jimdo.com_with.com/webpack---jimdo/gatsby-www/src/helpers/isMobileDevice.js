export const isMobileDevice = () =>
    typeof navigator !== 'undefined' &&
    typeof window !== 'undefined' &&
    navigator &&
    Number(navigator.maxTouchPoints) > 0 &&
    window &&
    window.innerWidth <= 991;
