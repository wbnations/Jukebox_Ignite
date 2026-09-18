# Skills Quest Content Handoff

The local prototype keeps recommendation content in `src/main.js`. Published titles and URLs come from slide 8 of `Brief and Style Guide/Team and Conversations Walking Deck.pptx`; slide 9 contains future content.

## Target display

The canonical booth review viewport is a large vertical touch screen at `1080 × 1920`. Dedicated portrait-kiosk styles increase viewing-distance typography, touch targets, album art, and QR sizing while keeping each screen contained without page scrolling.

## Swap playlist content

Edit the `mixes` object. Each of the five conversation areas supports:

- `genre`: short category label shown on the album sleeve
- `title`: primary recommendation headline
- `description`: one-sentence playlist summary
- `outcome`: attendee takeaway
- `url`: QR-code destination
- `icon` and `accent`: album-cover treatment
- `tracks`: supporting playlist titles and URLs

Each genre's `url` drives its QR code. Supporting-track URLs remain in the content model for future interactions, while the booth result keeps one clear scannable destination.

## Tune recommendation logic

Each answer in the `steps` array ends with a score object, such as `{ innovation: 4, data: 1 }`. The app adds those values across all four answers and returns the highest-scoring mix. Adjust these weights to refine representative paths without changing screen code.

## Local review metrics

The prototype stores anonymous counters in browser local storage:

- `skillsQuest.activations`
- `skillsQuest.mixesCreated`
- `skillsQuest.recommendations.<genre>`

No names, sign-ins, badge data, or free-text responses are collected. Clear site data in the review browser to reset the counters.