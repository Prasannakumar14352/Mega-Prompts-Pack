import { useEffect } from "react";

interface PageMetaOptions {
  title: string;
  description: string;
  /** e.g. "index, follow" or "noindex, nofollow". Defaults to indexable. */
  robots?: string;
  /** Absolute canonical URL for this route, if different from the default. */
  canonical?: string;
}

function setMetaTag(name: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonicalLink(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Imperatively updates document.title and key meta tags on route mount.
 * This is a single-page-application without server rendering, so per-route
 * <head> tags are managed client-side rather than in index.html.
 */
export function usePageMeta({ title, description, robots = "index, follow", canonical }: PageMetaOptions) {
  useEffect(() => {
    document.title = title;
    setMetaTag("description", description);
    setMetaTag("robots", robots);
    if (canonical) {
      setCanonicalLink(canonical);
    }
  }, [title, description, robots, canonical]);
}
