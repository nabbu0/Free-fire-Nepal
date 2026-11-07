# Free Fire Nepal — Android-friendly starter

A mobile-first Free Fire MAX tournament website starter.

## Included
- Responsive tournament landing page
- Email/password Firebase Authentication scaffold
- Tournament mode and free non-cash Tournament Points UI
- Firestore default-deny rules
- PWA manifest

## Important status
This is a starter project, **not a deployed or complete tournament service**. Firebase config must be added to `app.js`. Firestore rules intentionally deny all access until a trusted backend and secure authorization rules are implemented. Tournament joining, 48-player enforcement, admin controls, point ledger and automatic cancellation refunds are not implemented in this starter.

No deposits, paid entry, cash prizes, withdrawals or transferable/redeemable points are supported. TP is non-cash and non-transferable.

## Run/deploy
Serve the files from a static HTTPS host. Firebase browser modules require a web server; opening `index.html` directly from local storage will not work reliably.
