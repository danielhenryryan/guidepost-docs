---
title: Saving, autosave and recovery
description: Save presentations, recover unsaved changes and handle file errors.
---

## Saving

A presentation is saved as a single `.guidepost` file. Its name in Guidepost is always its file name.

- **File › Save** (<kbd>⌘S</kbd>) saves your changes. The first time, it asks for a name and location.
- **File › Save As…** (<kbd>⌥⇧⌘S</kbd>) saves a copy under a new name.
- **File › Rename…**, or clicking the name in the title bar, renames the presentation, and its file too once it's saved.

A dot beside the name in the title bar means there are unsaved changes.

## Autosave

While you work, Guidepost keeps a working copy of your changes a few seconds after each edit, and whenever you switch workspace, go live, or switch to another app.

Autosave never changes your file. Only **Save** does. Guidepost stores the working copy separately from your saved presentation. If autosave stops working, Guidepost tells you, so you can save with <kbd>⌘S</kbd>.

## Unsaved changes

When you create, open or close a presentation, or quit Guidepost, with unsaved changes, Guidepost asks **Save changes to "Sunday"?**:

- **Save** saves them first.
- **Don't Save** discards them.
- **Cancel** goes back.

While a service is live, these actions first ask whether to end live, for example **End live to open ‘Christmas Eve’?**. Choose **End Live and continue** or **Cancel**.

## Recovering after a crash

If Guidepost or your Mac quits unexpectedly, the next time you open Guidepost, or open the affected presentation, it asks **Recover unsaved work?** It shows when the problem happened and how much unsaved work the recovered copy contains.

- **Recover** opens the recovered work, marked as unsaved. Save it to keep it.
- **Discard** throws the recovered copy away.
- **Not now** keeps the recovered copy and asks again next time.

## When saving fails

If a presentation can't be saved, for example because the disk is full or a USB drive was unplugged, Guidepost says why and when it was last saved successfully. The presentation stays open with your unsaved changes. Choose **Save elsewhere…** to save it to another location, or **Try again**.

## When a presentation can't be opened

If a file can't be opened, Guidepost explains why and what to do. For example:

- **Saved with a newer version of Guidepost:** update Guidepost on this Mac, then open it again. The file isn't changed.
- **The disk it's on is no longer connected:** reconnect the drive.

Recent presentations on a drive that isn't connected appear in **File › Open Recent** and on the Start screen marked as not connected.

## Undo

You can undo changes to the presentation, including deleting slides and groups and making edits while live. **Edit › Undo** names the change it will undo, such as "Undo Move Layer". View changes, such as zoom and panel sizes, aren't part of undo. Undo history starts fresh when you open a presentation.
