# donut-delivery

**⚠️ Warning: this app is incomplete, do not use it in production!**

A React (Next.js) donut delivery app. This app uses [BuiltOn](https://builton.dev) and their JavaScript SDK in order to manage app data such as:

- Users (↔️ with Firebase Auth)
- Products (donuts in this case 🍩)
- Discount coupons
- Orders
- Payments (↔️ with Stripe)

## Installation

Long installs stuck. Especially if you just want to start playing around. We're planning on making a simple script that makes it easy to start coding 😊

For now though, here's what you have to do:

- Create a [free BuiltOn account](https://builton.dev)
- Create a [Google Firebase project](https://firebase.com) and link it in to your BuiltOn dashboard.
- Configure Firebase Auth to accept Google logins & guest accounts
- Clone this repo and `npm install`
- Configure the app with environment variables or rename `next.config.sample.js` to `next.config.js` and edit the variables there.
- Add some products in the [BuiltOn Dashboard](https://dashboard.builton.dev/order_process/products) to make things more interesting
- Start developing with `npm run dev`

If you want to deploy to ZEIT or another hosting provider, make sure you properly set your environment vars.

---

ℹ Disclaimer: I do consulting work for BuiltOn and needed to make a delivery app for my friend's donut shop. I figured making it open source would be a fun way to show BuiltOn's capabilities! 😁
