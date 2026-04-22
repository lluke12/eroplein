// ── Scheduled publishing helpers ────────────────────────────────────────
// Content met een publishedAt in de toekomst wordt niet publiek getoond.
// ISR revalideert elk uur zodat content automatisch live komt op publicatie-datum.

export const REVALIDATE_SECONDS = 3600; // 1 uur — nieuwe content komt binnen 1u live

export function isPublished(publishedAt: string | Date): boolean {
  const pubDate =
    typeof publishedAt === "string" ? new Date(publishedAt) : publishedAt;
  return pubDate.getTime() <= Date.now();
}

export function filterPublished<T extends { publishedAt?: string; published_at?: string }>(
  items: T[]
): T[] {
  return items.filter((item) => {
    const date = item.publishedAt || item.published_at;
    if (!date) return true;
    return isPublished(date);
  });
}

// Voor gebruik in generateStaticParams — genereert alle paden (ook toekomstige)
// De page zelf checkt of hij al live mag
export function isScheduledForFuture(publishedAt: string): boolean {
  return new Date(publishedAt).getTime() > Date.now();
}
