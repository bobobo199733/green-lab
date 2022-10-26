import { useStaticQuery, graphql } from 'gatsby';
import { getSrc, ImageDataLike } from 'gatsby-plugin-image';

import { Langs } from 'types/langs';

type UsePreviewImageArgs = {
    language: Langs;
    customPreviewImage?: ImageDataLike;
};

export const usePreviewImage = ({ language, customPreviewImage }: UsePreviewImageArgs) => {
    const queryResult = useStaticQuery(graphql`
        query PreviewImageData {
            previewImageJP: file(
                absolutePath: { glob: "**/content/images/shared/preview-link-image/OGP-JP.png" }
            ) {
                childImageSharp {
                    gatsbyImageData(layout: FIXED, quality: 85)
                }
            }
            previewImage: file(absolutePath: { glob: "**/content/images/homepage/og_image.png" }) {
                childImageSharp {
                    gatsbyImageData(layout: FIXED, quality: 85)
                }
            }
        }
    `);

    if (customPreviewImage) {
        return getSrc(customPreviewImage);
    }

    const { previewImage, previewImageJP } = queryResult;

    if (language === Langs.JA_JP) {
        return getSrc(previewImageJP);
    }

    return getSrc(previewImage);
};

export default usePreviewImage;
