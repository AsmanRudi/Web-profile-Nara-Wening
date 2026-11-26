# Reference page topology

Audited `https://www.jkrowling.com/` in Chrome at 1440 × 900.

## Root welcome state

1. Full viewport entry screen: centered two-line serif heading and short intro, split into two equal image-led audience panels, each with a signature mark, descriptive copy, and white text CTA.
2. Left CTA **Enter here** performs an in-page state change to the adult editorial feed without changing the URL. The resulting page has a 32 px audience bar, 42 px primary navigation, ordered feature/news cards, then footer.
3. Right CTA **Come on in!** links to `https://stories.jkrowling.com/` (separate young-reader site).
4. Scrolling the root page continues to a centered white author biography, a sequence of work-category descriptions, Latest News, and a legal/social footer.
5. After scrolling, a two-card audience dock remains fixed near the bottom edge. A cookie-consent notice may overlay the bottom edge.

## Local adaptation

- `/`: preserve the full-screen split entry, same two audience paths, scroll to author biography, editorial highlights, news, footer. Adult entrance routes to `/dewasa` rather than reproducing an in-place third-party state.
- `/dewasa`: editorial feed with category navigation, feature cards, author note, works, news, footer.
- `/pembaca-muda`: independent story destination with its own header, hero, story index, and return links.
- `/dewasa/tentang`: biography profile and audience dock.

The reference's distinctive name, copy, logos, fonts, and photography are not reused. The local brand and editorial content remain fictional and original.
