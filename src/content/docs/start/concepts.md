---
title: Key concepts
description: The words Guidepost uses, and how the pieces of a service fit together.
---

Guidepost uses one name for each idea, everywhere in the app. Knowing these makes the rest of this help easier to follow.

## How a service is organized

```
Library (on this Mac, shared by every presentation)
 ├─ Songs ──── each with sections and arrangements
 ├─ Media ──── images and videos
 ├─ Themes ─── built-in and your own
 ├─ Saved slides
 └─ Bibles ─── installed translations

Presentation (one service, one file)
 ├─ Theme ──── the default look
 └─ Slides ─── in order, some organized into groups
     ├─ Kind ─────── Text, Scripture, Song, Media or Blank
     ├─ Layout ───── where the text and media sit
     ├─ Background
     ├─ Layers ───── text, images, videos and shapes
     └─ Notes ────── private, for the operator and the Stage Display
```

## Building

- **Presentation**: The document for one service: an ordered list of slides, saved as a single `.guidepost` file. One presentation is open at a time.
- **Slide**: One screenful. Every slide has a **kind**: Text, Scripture, Song, Media or Blank. The kind decides what the slide holds. A Scripture slide knows its passage and translation, and a Song slide knows its song and section.
- **Group**: A run of slides that belong together, such as one song or one passage. Guidepost makes groups automatically for songs and multi-verse passages; you can also group any slides yourself. Groups have a name and can be collapsed in the slide list.
- **Section**: A labelled part of a song: Verse 1, Chorus, Bridge, and so on.
- **Arrangement**: The order a song's sections are sung in. Every song has a **Default** arrangement and can have more, such as "Sunday short" or "Christmas".
- **Layout**: Where the text and media sit on a slide, for example **Title · Centered**, **Lower third** or **Reference above**. Switching layouts keeps the text.
- **Theme**: A named, reusable look: fonts, colors, background, text effect, legibility treatment, and the default layout for each kind of slide. Slides follow the presentation's theme unless they override something.
- **Saved slide**: A finished slide kept in the Library for reuse, such as a welcome or offering slide. Adding one copies it into the presentation.
- **Background**: What sits behind a slide's content: a color, gradient, image, video or scene.
- **Scene**: One of the animated or textured backgrounds built into Guidepost.
- **Dim**: A color tint over a background that keeps text readable.
- **Layer**: One object on a slide: a text box, image, video or shape.

## Running

- **Live**: The service is running and screens are showing it. Marked with the amber **LIVE** badge. You start and stop it with **Go Live** and **End Live**.
- **Program**: The monitor in Present that shows exactly what the audience screens show.
- **Up Next**: The slide that **Next** will show.
- **Audience screen**: A display or window that shows the slides to the congregation.
- **Stage Display**: A screen for the band and the speaker, showing the current and next lyrics, a clock, the speaker timer and cues.
- **Network viewers**: Phones, tablets and TVs on the church network that watch the service in a web browser.
- **Blank, Logo, Freeze, Clear text**: The four **holds**. Each temporarily replaces the slide on the audience screens. See [Blank, Logo, Freeze and Clear text](/present/holds/).
- **Message**: Short text shown over the slides along the bottom of the audience screens, such as "Please silence your phones".
- **Cue**: A private message for the speaker, shown only on the Stage Display.
- **Countdown**: A countdown to the start of the service, shown on the audience screens.
- **Speaker timer**: A timer shown only on the Stage Display, so the speaker can see how much time is left.

## Themes, overrides and resetting

A slide takes everything it doesn't set itself from its theme. When you change something on one slide, such as its background, that property is **overridden**: the inspector marks it with a small dot and offers **Reset to theme**. Changing the theme later updates every slide that doesn't override that property.

A group can use a different theme from the rest of the presentation, for example to give one song its own look.
