# Pocket Tracker v21

- Adds Hong Leong Wise reward tracker (RM1,000 posted calendar-month threshold, category caps and rates).
- Collapsible settings: Profile, My cards (show/hide and billing dates), History & backup.
- Recurring payments can have an optional monthly **charge day**. Mark each as posted to count a payment. No automatic charges are created.
- Cat money illustration supplied by the user is the Home Screen icon.
- Preserves the existing `pocket-tracker-compact-v3` storage key and older transaction histories.

## Update your existing GitHub Pages repository

1. Export a JSON backup in Settings first.
2. Extract this ZIP. Upload `index.html`, `sw.js`, `manifest.webmanifest`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` into the repository root, replacing existing files where applicable. Do **not** upload the ZIP directly.
3. Commit the files; refresh your live Pages URL and verify `v16.0` at the bottom.
4. iPhone Home Screen icon changes may require installing the new Home Screen shortcut after making a backup. Do not delete your existing app until you have confirmed the data is backed up.

Transactions remain local to the browser or installed PWA. No bank connection or sync. Reward predictions are estimates; verify actual bank terms and merchant MCCs. HLB Wise official terms updated August 2026.
