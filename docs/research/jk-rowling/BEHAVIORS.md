# Observed behaviors

- Root entry page scrolls vertically; total document height was about 4,944 px before the cookie banner changed the measured page height.
- At the root state, clicking **Enter here** swaps to the adult feed in place. URL stays `/`; observed body height after transition was about 4,380 px and the initial content is a large “In My Own Words” feature followed by a vertical news feed. Local `/dewasa` is the route equivalent.
- **Come on in!** links to `stories.jkrowling.com/`, a separate young-reader site. Local equivalent is `/pembaca-muda`.
- On scroll, the two compact audience panels become fixed at the viewport bottom; when active, each has a short description and a smaller white CTA.
- Root cookie consent banner is bottom-fixed and includes Cookie Settings and Accept All controls. Not copied into the fictional site because a cookie layer is not required for its current static content.
- Root page's desktop viewport is split into two equal halves. Audience dock uses two equal cards with a modest central gutter.
- Browser audit captured desktop first-screen and scrolled states. Mobile/tablet visual inspection is still to be completed; responsive details below are implementation choices pending that comparison.
