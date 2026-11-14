---
title: Mac integration
description: Shortcuts and Siri, Spotlight, Quick Look, Photos, Live Text, Do Not Disturb, and accessibility.
---

## Shortcuts and Siri

Guidepost adds actions to the Shortcuts app, so you can automate parts of a service or run them with Siri. For example: "At 10:20 on Sunday, open this week's service and start a 10-minute countdown."

| Action | Options |
|---|---|
| **Open Presentation** | The presentation file to open. |
| **Go Live** | — |
| **End Live** | — |
| **Next Slide** | — |
| **Previous Slide** | — |
| **Blank** | **Blank the screens**, **Show the slide again**, or **Toggle Blank**. |
| **Start Countdown** | Count down a length of time (in minutes) or to a time of day, and what happens at zero. |
| **Show Message** | The text, the style (Banner, Bar or Corner badge), and optionally how many seconds before it hides. |

Siri understands phrases such as "Go live with Guidepost", "Next slide in Guidepost" and "Blank the screens in Guidepost".

**Go Live** from Shortcuts runs the same checks as the **GO LIVE** button. If something needs your attention, such as no audience screen being selected, the shortcut stops and reports why instead of asking a question.

## Spotlight

Your songs and recent presentations appear in Spotlight. Type a song title, such as "Amazing Grace", or a presentation's name. Choosing a song opens it in **Library › Songs**. Choosing a presentation opens it.

## Quick Look

In Finder, a presentation's icon shows its first slide. Select a presentation and press <kbd>Space</kbd> to see all its slides, grouped as in Guidepost, without opening the app.

## Photos

Click **Add from Photos…** in **Library › Media** or the Media picker's **From this Mac** tab to choose images and videos from your Photos library. You can also drag items straight from the Photos app onto the Library, the slide list or the canvas. Guidepost only receives the items you choose.

## Live Text

Guidepost can read text from a photo or screenshot, on your Mac:

- **Slides from image…** (in the Add row's **More…** menu) turns the text of an image, such as a printed bulletin, into Text slides.
- **From image…** in **Import songs › Paste text** reads lyrics from an image of a song sheet.

## Silencing notifications while live

Guidepost can turn on Do Not Disturb when you go live and turn it off when you end live, so no notification appears on your screen during the service. macOS doesn't let apps change Focus directly, so this uses two shortcuts you create once.

1. In the Shortcuts app, create a shortcut named **Guidepost Go Live** with one action: **Set Focus**, **Do Not Disturb**, **On**, **Until Turned Off**.
2. Create another named **Guidepost End Live** with: **Set Focus**, **Do Not Disturb**, **Off**.
3. In Guidepost, open **Settings › General**, turn on **Silence notifications**, and click **Check**. When macOS asks, allow Guidepost to control Shortcuts Events.

The status under the setting tells you if anything is missing. The same steps are in **Help › Silencing Notifications While Live**.

Audience screens never show notifications either way. This setting keeps them off your own screen.

## Keeping your Mac awake

While live, or while a countdown is running, Guidepost keeps your Mac and its displays from sleeping. Turn this off with **Keep this Mac awake** in **Settings › General**. When an AirPlay TV is an audience screen, the Mac is always kept awake during a service so the connection doesn't drop.

## iCloud Drive

Presentations saved in iCloud Drive, or another synced folder, open and save like any other file. You can use a synced folder to share a service between an office Mac and the sanctuary Mac.

## Accessibility

- Guidepost works with VoiceOver. Changes such as going live, Blank, Logo, Freeze and messages are announced.
- **Reduce motion** in **System Settings › Accessibility** shortens transitions on the audience screens, pauses built-in backgrounds, and stops flashing timers.
- **Increase contrast** strengthens the edges of controls.
- **Interface text size** in **Settings › General** makes Guidepost's controls larger without changing slides.
- Everything in Present can be done from the keyboard. Every keyboard shortcut can be changed.
