# Welcome gate and scroll portal spec

## Desktop reference
- Viewport: 1440 × 900.
- Two equal full-height visual panels. H1 centered, 42/52.5 px serif, top 40 px, width about 740 px. Intro uses 15/21 px sans serif.
- Per-panel signature and descriptive copy are centered. CTA is a white rounded rectangle, 21/29.4 px, 53 px high; observed widths 216 px and 231 px.
- Scroll reveals the author biography, then work summaries, news, and footer. A compact two-panel audience switch stays fixed to the viewport bottom after scrolling.

## Local components
- `app/page.tsx` owns welcome hero, profile intro, editorial links and footer.
- `app/components/AudienceDock.tsx` owns scroll-triggered, fixed audience links.
- Preserve Nara Wening / Cerita Muda naming and locally generated desk artwork. Use local destination links.
- Mobile: stack the audience cards; preserve accessible focus states, legible labels, and reduced-motion behavior.
