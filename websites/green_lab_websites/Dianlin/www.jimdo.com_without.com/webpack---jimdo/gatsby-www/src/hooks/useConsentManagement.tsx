import { useGetExperimentGroupById } from '@jimdo/growth-tools';
import loadable from '@loadable/component';

export const useConsentManagement = () => {
    const consentVariation = useGetExperimentGroupById('experiment-MATO1839-consent-management');

    if (consentVariation === undefined) {
        return [null, {}];
    }

    const shouldLoadConsentManagement =
        consentVariation === 'target' || consentVariation === 'excluded';

    const ConsentManagementComponent = shouldLoadConsentManagement
        ? loadable(
              () =>
                  import(
                      /* webpackChunkName: "ConsentManagement" */ '@components/ConsentManagement'
                  )
          )
        : null;

    const consentManagementProps = shouldLoadConsentManagement
        ? {
              googleTagManagerId: 'GTM-MTHKCKN',
              userCentricsId: 'k1JwB2Dk_',
              suppressConsentBanner: consentVariation === 'excluded',
              forceAcceptAllConsent: consentVariation === 'excluded',
          }
        : null;

    return [ConsentManagementComponent, consentManagementProps];
};

export default useConsentManagement;
