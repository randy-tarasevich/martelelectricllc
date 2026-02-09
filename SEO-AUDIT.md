# Google SEO Audit — Martel Electric LLC

**Date:** February 9, 2026  
**Scope:** index.html, about.html, contact.html, services.html, projects.html

---

## Executive summary

The site has a solid base: good meta and Open Graph on the homepage, semantic HTML, and clear structure. To align with Google’s guidelines and improve visibility, focus on: **unique meta and titles on every page**, **technical essentials (robots.txt, sitemap, canonical)**, **structured data**, and **social previews (OG image, optional Twitter Cards)**.

---

## 1. What’s working well

| Area                      | Status                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------- |
| **HTML5 & semantics**     | `lang="en"`, `<section>`, single `<h1>` per page, logical heading order               |
| **Mobile**                | Viewport meta present; responsive layout                                              |
| **Homepage meta**         | Strong `description`, `keywords`, geo tags (US-CT, Plainville)                        |
| **Open Graph (homepage)** | `og:title`, `og:description`, `og:type`, `og:url` present                             |
| **Image alt text**        | Most images have descriptive `alt` (e.g. “Residential electrical panel installation”) |
| **Internal links**        | Clear nav and in-content links to services, projects, contact                         |
| **Performance**           | Preconnect for Google Fonts; Bootstrap from CDN with SRI                              |

---

## 2. Critical issues

### 2.1 Wrong author meta (index.html)

- **Current:** `<meta name="author" content="Legacy Electrical" />`
- **Fix:** Use `Martel Electric LLC` so branding and attribution are correct.

### 2.2 Missing page-specific meta on inner pages

- **about.html** – No `meta name="description"`, no Open Graph; title is generic “Martel Electric LLC”.
- **contact.html** – No description, no OG; title is “Martel Electric LLC”.
- **projects.html** – No description, no OG; title is “Projects - Martel Electric LLC” (OK but page needs its own description).

**Impact:** Google may use weak or duplicated snippets; social shares will fall back to homepage or generic text.

**Recommendation:** Add a unique, compelling meta description (and matching `og:description`) and a clear, unique `<title>` on every page.

### 2.3 No robots.txt or sitemap

- **robots.txt** – Missing. Crawlers get no explicit crawl/directive or sitemap pointer.
- **sitemap.xml** – Missing. Search engines have no explicit list of URLs to crawl.

**Recommendation:** Add `robots.txt` and `sitemap.xml` at site root and reference the sitemap in `robots.txt`.

---

## 3. High-priority improvements

### 3.1 Canonical URLs

- No `<link rel="canonical">` on any page.
- **Recommendation:** Add a canonical to each page pointing to its final URL (e.g. `https://martelelectricllc.com/` for index, `https://martelelectricllc.com/about.html` for about, etc.) to avoid duplicate-content issues if the site is reachable via multiple URLs.

### 3.2 Open Graph image

- No `og:image` (or `og:image:width` / `og:image:height`) on any page.
- **Impact:** Social shares (Facebook, LinkedIn, etc.) will have no preview image.
- **Recommendation:** Add `og:image` (and optionally Twitter `twitter:image`) using a strong brand image (e.g. logo or hero) in recommended size (e.g. 1200×630).

### 3.3 Favicon

- No `<link rel="icon">` in `<head>`.
- **Recommendation:** Add favicon(s) (e.g. ICO and/or PNG) and link them in all pages.

### 3.4 Structured data (JSON-LD)

- No schema.org markup.
- **Recommendation:** Add **LocalBusiness** (or **Electrician** where applicable) JSON-LD on the homepage with: name, description, address (Plainville, CT), phone, URL, area served, and optionally opening hours and sameAs (e.g. Facebook). This supports rich results and local SEO.

### 3.5 Title position and uniqueness

- **index.html:** `<title>` is at the end of `<head>`. Moving it earlier (after charset/viewport) is a small best practice.
- **Uniqueness:** Every page should have a distinct title (e.g. “About Us – Martel Electric LLC”, “Contact – Martel Electric LLC”, “Our Services – Martel Electric LLC”, “Projects – Martel Electric LLC”).

---

## 4. Medium-priority / optional

### 4.1 Navbar and footer loaded via JavaScript

- Nav and footer are injected with `fetch()` in `scripts.js`. Google typically executes JS, so main links are crawlable.
- **Risk:** Slight delay before links exist; rare crawlers that don’t run JS might not see them.
- **Optional:** For maximum assurance, you could inline nav/footer in each HTML file or use a build step; not required for most cases.

### 4.2 Image filenames and paths

- Many images use generic names (e.g. `IMG_8297.jpg`). Descriptive names (e.g. `shed-wiring-avon-ct.jpg`) can help image search and accessibility.
- **projects.html:** Mix of paths: `/IMG_8297.jpg` (root-absolute) vs `IMG_8392.jpeg` (relative). Root-absolute paths can break if the site is ever deployed in a subdirectory. Prefer relative or base-relative URLs consistently.

### 4.3 Twitter Card tags

- No `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`.
- **Recommendation:** Add Twitter Card meta for better previews on X/Twitter; can mirror OG values.

### 4.4 HTTPS and redirects

- Ensure the live site is served over HTTPS and that `https://martelelectricllc.com` (and `www` vs non-`www`) is consistent; use redirects and canonical to one preferred URL.

---

## 5. Checklist summary

| Item                             | Status                                             |
| -------------------------------- | -------------------------------------------------- |
| Unique `<title>` per page        | ⚠️ Partial (about, contact need updates)           |
| Unique meta description per page | ⚠️ Partial (about, contact, projects missing)      |
| Meta author correct              | ❌ Fix “Legacy Electrical” → “Martel Electric LLC” |
| Canonical URL per page           | ❌ Add                                             |
| Open Graph (all pages)           | ⚠️ Home has OG; add OG + og:image on all           |
| Twitter Card meta                | ❌ Add (optional but recommended)                  |
| Favicon                          | ❌ Add                                             |
| robots.txt                       | ❌ Add                                             |
| sitemap.xml                      | ❌ Add                                             |
| JSON-LD (LocalBusiness)          | ❌ Add on homepage                                 |
| Semantic HTML / one H1           | ✅ Good                                            |
| Image alt text                   | ✅ Good                                            |
| Mobile viewport                  | ✅ Good                                            |

---

## 6. Recommended next steps

1. **Immediate:** Fix author meta; add unique titles and meta descriptions (and OG) to about, contact, and projects.
2. **Technical:** Add `robots.txt`, `sitemap.xml`, and canonical links on all pages.
3. **Rich results & social:** Add JSON-LD LocalBusiness on index; add `og:image` (and favicon); optionally add Twitter Card meta.
4. **Ongoing:** Submit sitemap in Google Search Console; monitor indexing and search appearance; consider descriptive image filenames and consistent image paths.

Implementing the changes in this audit will align the site with Google SEO best practices and improve potential for rich results and social sharing.
