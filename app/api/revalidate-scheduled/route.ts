import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { placeholderArticles } from "@/lib/placeholder-data";
import { guides } from "@/lib/guides-data";
import { landingPages } from "@/lib/landing-pages-data";

// Vercel cron: draait elk uur, revalideert content die zojuist is "live" gegaan
// en de sitemap.
export async function GET(request: Request) {
  const auth = request.headers.get("authorization");
  if (process.env.CRON_SECRET && auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const now = Date.now();
  const oneHourAgo = now - 60 * 60 * 1000;

  const revalidated: string[] = [];

  // Artikelen die in het afgelopen uur live zijn gegaan
  placeholderArticles.forEach((a) => {
    const t = new Date(a.published_at).getTime();
    if (t > oneHourAgo && t <= now) {
      revalidatePath(`/nieuws/${a.slug}`);
      revalidated.push(`/nieuws/${a.slug}`);
    }
  });

  // Gidsen die in het afgelopen uur live zijn gegaan
  guides.forEach((g) => {
    const t = new Date(g.publishedAt).getTime();
    if (t > oneHourAgo && t <= now) {
      revalidatePath(`/gids/${g.slug}`);
      revalidated.push(`/gids/${g.slug}`);
    }
  });

  // Landingspages die in het afgelopen uur live zijn gegaan
  landingPages.forEach((p) => {
    const t = new Date(p.publishedAt).getTime();
    if (t > oneHourAgo && t <= now) {
      revalidatePath(`/beste/${p.slug}`);
      revalidated.push(`/beste/${p.slug}`);
    }
  });

  // Altijd: hub-pagina's en sitemap
  revalidatePath("/nieuws");
  revalidatePath("/gids");
  revalidatePath("/beste");
  revalidatePath("/sitemap.xml");

  return NextResponse.json({
    ok: true,
    timestamp: new Date().toISOString(),
    revalidated,
    hubs: ["/nieuws", "/gids", "/beste", "/sitemap.xml"],
  });
}
