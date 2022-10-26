import { useMedia } from '@jimdo/ui';

export function useIsDesktopAndSmaller() {
    return useMedia(['(max-width: 992px)'], [true], false);
}
