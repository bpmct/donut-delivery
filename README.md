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
- Configure the app's enviromnent variables with your API keys:

  - If you want to deploy to ZEIT/Now:
    - For local development, add a `.env.build` file (use `.env.build.sample` as reference)
    - Add [now secrets](https://zeit.co/docs/v2/build-step#adding-secrets) based off the @ definitions in `now.json`
    - Begin developing with `now dev` (or `npx now dev` if you don't have now installed globally)
  - If you just want to build locally (or deploy elseware):
    - Add your API keys `next.config.js` instead of the `process.env` definitions
    - Start developing with `npm run dev`

- Add some products in the [BuiltOn Dashboard](https://dashboard.builton.dev/order_process/products) to make things more interesting 🚀

---

ℹ Disclaimer: I do consulting work for BuiltOn and needed to make a delivery app for my friend's donut shop. I figured making it open source would be a fun way to show BuiltOn's capabilities! 😁
