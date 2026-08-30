import bLoom from '../../evidence/manifests/b-loom.json';
import badminton from '../../evidence/manifests/badminton-tournament-operations.json';
import blwfinbot from '../../evidence/manifests/blwfinbot.json';
import uiGreenMetric from '../../evidence/manifests/ui-greenmetric.json';
import type { ProjectEvidence } from '../types/portfolio';

type Placement = 'card' | 'case-study';

interface ImageManifestEntry {
  id: string;
  representation: NonNullable<ProjectEvidence['representation']>;
  alt: string;
  caption: string;
  order: number;
  placement: Placement;
  variants: {
    card: { src: string; width: number; height: number };
    caseStudy: { src: string; width: number; height: number };
  };
}

interface ImageManifest {
  projectSlug: string;
  images: ImageManifestEntry[];
}

const manifests = [
  uiGreenMetric,
  badminton,
  blwfinbot,
  bLoom,
] as ImageManifest[];

const assetUrls = import.meta.glob<string>('../assets/projects/**/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
});

export function imageEvidenceFor(
  projectSlug: string | undefined,
  placement: Placement,
): ProjectEvidence[] {
  if (!projectSlug) return [];
  const manifest = manifests.find((entry) => entry.projectSlug === projectSlug);
  if (!manifest) return [];

  return manifest.images
    .filter((image) => image.placement === placement)
    .sort((left, right) => left.order - right.order)
    .map((image) => {
      const variant =
        placement === 'card' ? image.variants.card : image.variants.caseStudy;
      const src = assetUrls[`../${variant.src}`];
      if (!src)
        throw new Error(`Missing bundled evidence asset: ${variant.src}`);
      return {
        type: 'screenshot',
        src,
        alt: image.alt,
        caption: image.caption,
        width: variant.width,
        height: variant.height,
        representation: image.representation,
      };
    });
}
