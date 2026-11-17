---
name: For Ireti
description: A hand-made letter on lined paper, taped photos and crimson lettering, for one reader on her phone.
colors:
  ground: "#e3cbc6"
  sheet: "#eeeae0"
  photo-white: "#f3f1ec"
  blush: "#f3dfdc"
  crimson: "#7e3944"
  crimson-deep: "#5f2430"
  ink: "#5a3f33"
  rule: "rgba(176, 112, 120, .26)"
  margin-rule: "rgba(214, 130, 150, .55)"
  tape-a: "rgba(178, 64, 84, .78)"
  tape-b: "rgba(246, 214, 214, .85)"
  thread: "rgba(98, 74, 70, .7)"
  selection: "#e8b4bd"
typography:
  display:
    fontFamily: "'Kaushan Script', 'Segoe Script', cursive"
    fontSize: "clamp(3.4rem, 14vw, 5.2rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.01em"
  headline:
    fontFamily: "'Kaushan Script', 'Segoe Script', cursive"
    fontSize: "clamp(2.2rem, 10vw, 3.6rem)"
    fontWeight: 400
    lineHeight: 1
  title:
    fontFamily: "'Kaushan Script', 'Segoe Script', cursive"
    fontSize: "clamp(1.6rem, 6.5vw, 2rem)"
    fontWeight: 400
    lineHeight: 1.25
  signature:
    fontFamily: "'Kaushan Script', 'Segoe Script', cursive"
    fontSize: "clamp(1.7rem, 7vw, 2.1rem)"
    fontWeight: 400
    lineHeight: 1.2
  body:
    fontFamily: "Rosarivo, Georgia, serif"
    fontSize: "1.1rem"
    fontWeight: 400
    lineHeight: "2rem"
  label:
    fontFamily: "Caveat, 'Segoe Print', cursive"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1
rounded:
  none: "0"
  sm: "0.4rem"
  full: "50%"
spacing:
  line: "2rem"
  sheet-width: "min(86vw, 520px)"
  gate-width: "400px"
components:
  sheet:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 7% 2rem 12%"
    width: "{spacing.sheet-width}"
  photo:
    backgroundColor: "{colors.photo-white}"
    textColor: "{colors.crimson}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "6% 6% 0"
  note:
    backgroundColor: "{colors.blush}"
    textColor: "{colors.crimson-deep}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "2.2rem 1.25rem 1rem"
  button-round:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.crimson}"
    rounded: "{rounded.full}"
    size: "2.9rem"
  button-round-hover:
    backgroundColor: "{colors.crimson}"
    textColor: "{colors.sheet}"
  music-toggle:
    backgroundColor: "{colors.blush}"
    textColor: "{colors.crimson}"
    rounded: "{rounded.full}"
    size: "3.6rem"
  music-toggle-playing:
    backgroundColor: "{colors.crimson}"
    textColor: "{colors.blush}"
  button-open:
    backgroundColor: "{colors.crimson}"
    textColor: "{colors.sheet}"
    rounded: "{rounded.sm}"
    height: "3.2rem"
    width: "100%"
  button-open-hover:
    backgroundColor: "{colors.crimson-deep}"
  input-passcode:
    textColor: "{colors.crimson-deep}"
    rounded: "{rounded.none}"
    padding: "0 .25rem"
    height: "3rem"
    width: "100%"
---

# Design System: For Ireti

## Overview

**Creative North Star: "The Letter You Hold"**

The whole surface is one physical object: a single grained cream sheet of lined paper lying on dusty rose dyed paper, with real instant photos taped to it and a dashed thread carrying the eye down through more photos to a taped note and a signature. Nothing reads as web chrome. There is no nav, no hero banner, no card grid; the page is as wide as a letter held in the hand (never wider than 520px) and is read top to bottom on a phone.

Material is the system. Paper carries texture from two tiled plates (`assets/plates/ground.png`, `assets/plates/sheet.png`), ruling is drawn on the sheet at a fixed line pitch, washi tape is a diagonal crimson and blush stripe, and every object sits at a slight tilt with a soft paper shadow. Lettering is hand-made in three voices: a crimson brush script for anything spoken aloud (her name, section titles, reasons, the signature), a quick pen for small notes, and a warm brown italic serif for the letter itself.

The world rejects the centred headline-over-cards Valentine template and the pink glassmorphism of the previous version. Calm comes first: decoration serves the photos and the words, and nothing competes with reading.

**Key Characteristics:**
- One lined sheet, one column, at most 520px wide, on a textured rose ground.
- Real photos only, framed as warm white instant prints held by striped washi tape.
- Everything tilts a few degrees; nothing sits perfectly square except the rules on the paper.
- Three hand voices: brush script, pen notes, italic serif letter.
- Motion is physical and slow to settle: things drop, tilt into place, and lift when touched.

## Colors

A warm, low-chroma paper palette with a single deep crimson ink that does all the lettering and every interactive state.

### Primary
- **Letter Crimson** (crimson): every piece of display lettering, captions, labels, icon strokes, focus outlines and the filled state of buttons. It is the pen colour of the whole card.
- **Dried Crimson** (crimson-deep): the darker press state and the words that matter most: reason text on the note, typed passcode digits, the gate button on hover, selected text.

### Secondary
- **Washi Stripe** (tape-a with tape-b): the two translucent stripes of the tape, always used together as a -55deg repeating stripe, never as fills elsewhere.
- **Blush Note** (blush): the reasons note, the music toggle at rest, and the placeholder behind photos while they load.

### Neutral
- **Dyed Rose Ground** (ground): the page beneath everything, tiled with the ground plate; also the browser `theme-color`.
- **Cream Sheet** (sheet): the lined letter sheet and the inside of round buttons; also the light text colour on crimson fills.
- **Print White** (photo-white): the border of every instant photo, a touch whiter than the sheet so the prints read as a different paper.
- **Brown Ink** (ink): the letter's body text and the gate hint.
- **Ruled Line** (rule) and **Margin Pink** (margin-rule): the horizontal rules and the single vertical margin line on the sheet.
- **Thread Brown** (thread): the dashed thread joining the sheet to the photos.
- **Rose Highlight** (selection): text selection background, with Dried Crimson text.

### Named Rules
**The One Ink Rule.** Crimson is the only saturated ink. Body text is Brown Ink; every other colour is paper, tape or thread. A new accent hue is a new world, not an edit.

**The Tape Pair Rule.** Tape is always the two-stripe crimson/blush pattern at -55deg (stripes .55rem wide), around 34-42% of its object's width, about 1.9rem tall, overlapping the top edge by .9rem at a small tilt.

## Typography

**Display Font:** Kaushan Script (with Segoe Script, cursive)
**Body Font:** Rosarivo, italic in the letter (with Georgia, serif)
**Label Font:** Caveat, weight 600 (with Segoe Print, cursive)

All three are self-hosted woff2 in `assets/fonts/`; Kaushan Script is preloaded.

**Character:** A confident crimson brush hand speaks the headings and the reasons; a light pen scrawls captions and counters; the letter is set in a warm old-style italic so it reads as written, not typeset.

### Hierarchy
- **Display** (400, clamp(3.4rem, 14vw, 5.2rem), 1): her name at the head of the sheet. The gate uses a smaller clamp(3.2rem, 14vw, 4.4rem).
- **Headline** (400, clamp(2.2rem, 10vw, 3.6rem), 1): section titles ("little moments"; "why it's you" runs at clamp(2.6rem, 11vw, 3.6rem)) and the closing line (clamp(1.7rem, 7vw, 2.2rem), 1.25).
- **Title** (400, clamp(1.6rem, 6.5vw, 2rem), 1.25): the reason on the note, in Dried Crimson.
- **Signature** (400, clamp(1.7rem, 7vw, 2.1rem), 1.2): "Yours, King Gem Gem".
- **Body** (Rosarivo italic 400, 1.1rem, line-height locked to the 2rem line): the letter, max 62ch, one paragraph per `<p>`, one blank line between paragraphs.
- **Label** (Caveat 600, 1.35-1.5rem): photo captions, the reason counter, gate label, error and hint.

### Named Rules
**The On-the-Rules Rule.** Body text line-height is the line pitch (2rem). Paragraph spacing, form spacing and sheet padding are multiples of that same pitch, so text always sits on the drawn rules.

**The Three Hands Rule.** Kaushan for spoken lines, Caveat for small notes, Rosarivo for the letter. No fourth face, and no system face as display.

## Layout

A single centred column, `min(86vw, 520px)` wide (the gate caps at 400px), identical on phone and desktop; desktop simply shows more ground around the same letter. The first viewport is laid out in proportion to the sheet width: the page's top padding is 30% of the width plus 1rem, and the hero photo hangs 28% of the width above the sheet, overlapping its top-right corner at 55% width.

The sheet's head is unruled: the top six lines (five on the gate) stay blank, her name sits on the seventh, and ruling begins beneath it. A pink margin rule runs at 9% from the left; text starts at 12%.

Below the sheet, an SVG thread loops from both bottom corners and the centre down into a vertical dashed line, and the photo trail hangs off it: photos at 68% of the column width, alternating left and right of the thread, 2.5rem apart. After the trail come the reasons note (3rem above), then the closing and signature (4.5rem above), with 6rem of ground at the foot. The music toggle is fixed 1rem from the bottom-right corner.

## Elevation & Depth

Depth is paper lying on paper: two soft, warm-tinted shadows, never hard offsets, plus tilt. Every object on the ground (sheet, photo, note, music toggle) carries the paper shadow; a photo that is lifted trades it for the deeper lift shadow.

### Shadow Vocabulary
- **Paper** (`box-shadow: 0 1px 1px rgba(80, 40, 40, .08), 0 14px 30px -8px rgba(90, 40, 48, .28)`): the resting state of every paper object.
- **Lift** (`box-shadow: 0 2px 2px rgba(80, 40, 40, .1), 0 26px 44px -10px rgba(90, 40, 48, .38)`): a photo picked up by hover or tap.
- **Gate button** (`box-shadow: 0 8px 18px -8px rgba(95, 36, 48, .55)`): the single solid button, so it reads as pressed ink rather than paper.

### Named Rules
**The Tilt Rule.** Paper objects sit at small rotations: hero photo 4deg (gate -4deg), trail photos alternate -3.5deg and 3deg with every third at -1.5deg, the note -1deg, tape 2-5deg either way. Only the sheet is square. A lifted photo straightens to 0deg.

## Shapes

Paper has square corners: the sheet, photos, note and passcode underline are all 0 radius. Circles are reserved for the two kinds of round button (reasons arrows and the music toggle). The gate's "open it" button is the one soft rectangle (0.4rem). Dashed lines mean thread or focus: the thread is a 1.6px dash (7/6 in the SVG), and keyboard focus is a 2px dashed crimson outline offset 4px. Icons are inline SVG line strokes (1.8 width, round caps) at 1.4rem; the heart is the only filled icon.

## Components

### Lined Sheet (signature)
The letter itself. Cream ground with the sheet plate, horizontal rules every 2rem starting below an unruled head of six lines, a pink margin rule at 9%, padding `0 7% 2rem 12%`, paper shadow, no radius. The hero photo is absolutely placed over its top-right corner.

### Instant Photo with Washi Tape (signature)
A Print White frame with 6% padding on top and sides and the caption below in Caveat 600 1.5rem crimson. The image is cropped to 4:4.2 with Blush behind it while loading. Tape is drawn as a pseudo-element on the top edge. In the trail the tape sits where the thread meets the photo (72% across on left-hand photos, 28% on right-hand ones).

**Adding a photo is one line.** Put the image in `assets/images/` and add `{ src, alt, caption }` to the `memories` array at the top of `script.js`. Alternation, tilt, tape position and the settle animation all follow from the photo's position in the list; never style an individual photo.

### Dashed Thread
An SVG of three dashed paths in Thread Brown (non-scaling 1.6px stroke) that loops from the sheet's bottom corners and centre to a point, continued by a vertical dashed border down the middle of the trail. Purely decorative and hidden from assistive tech.

### Reasons Note
A Blush note at -1deg with its own tape strip (34% width), the reason in Kaushan Dried Crimson centred in a box at least 3.5em tall so the note does not jump, and a row with two round buttons and a Caveat counter ("1 of 10"). Changing reason slides the text 1rem in the direction of travel while it fades (0.2s fade, 0.35s slide), then swaps it. The text is `aria-live="polite"`. Reasons come from the `reasons` array in `script.js`.

### Round Buttons
- **Shape:** circle, 2.9rem, 1.5px border in crimson at 35% opacity.
- **Rest:** Cream Sheet fill, crimson stroke icon.
- **Hover:** fills crimson, icon turns cream (0.2s).
- **Disabled:** 35% opacity, keeps the rest colours.

### Music Toggle
A 3.6rem circle fixed bottom-right, Blush with a crimson note icon and the paper shadow. When playing (`aria-pressed="true"`) it fills crimson and shows a pause icon in Blush. The label switches between "Play music" and "Pause music". Music starts at 25% volume, on load if allowed or on the first tap or key press anywhere.

### Gate Form
On the passcode page the same sheet and hero photo are used with a five-line head. Label in Caveat crimson; the input is borderless with a 2px crimson underline (3px on focus), transparent background, digits in Kaushan 2rem with 0.35em tracking, height 1.5 lines. The "open it" button is full width, 3.2rem tall, crimson with cream Kaushan text and a filled heart, 0.4rem radius, darkening to Dried Crimson on hover and moving down 1px when pressed. A wrong or empty code shakes the form twice (6px, 0.28s) and shows a Caveat message; the hint sits below in Brown Ink.

### Motion
- **Settle:** trail photos that start below the fold wait 2.2rem higher, at triple their tilt and 35% opacity, and settle into place when 12% inside the viewport (transform 0.9s, opacity 0.6s, ease `cubic-bezier(.16, 1, .3, 1)`). Photos already in view, and all photos when the script does not run, simply appear in place.
- **Lift:** on hover-capable devices a trail photo straightens and scales to 1.03 with the lift shadow (0.25s); a tap toggles a lifted state at 1.04.
- **Reduced motion:** with `prefers-reduced-motion: reduce`, the settle is skipped in script and CSS removes all transitions and animations; waiting photos show at rest.

## Do's and Don'ts

### Do:
- **Do** keep every vertical measure on the sheet a multiple of the 2rem line so text sits on the rules.
- **Do** add photos only through the `memories` array in `script.js`, with real photos, honest alt text and a short undated caption.
- **Do** give every new paper object the paper shadow and a small tilt, and hold it with the two-stripe tape if it needs holding.
- **Do** keep lettering in crimson: Kaushan for spoken lines, Caveat for notes; the letter stays in Rosarivo italic Brown Ink.
- **Do** keep motion physical (drop, settle, lift, slide) on the `cubic-bezier(.16, 1, .3, 1)` ease, and make sure every state is reachable with motion turned off.
- **Do** keep keyboard focus as the 2px dashed crimson outline.

### Don't:
- **Don't** widen the column past 520px or add a second column; desktop shows more ground, not more layout.
- **Don't** add glass, blur, colour-wash gradients or a second accent hue; gradients here only draw ruling and tape, and the previous pink glassmorphism is what this world replaced.
- **Don't** use hard offset shadows or heavy borders on paper objects; depth comes from the two soft shadows and tilt.
- **Don't** add eyebrow labels, kickers or navigation above the name.
- **Don't** round the corners of paper; circles are for round buttons only.
- **Don't** use emoji or icon fonts as icons; draw inline SVG strokes.
