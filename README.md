# donut-delivery

**⚠️ Warning: this app is incomplete, do not use it in production!**

A React (Next.js) donut delivery app. This app uses [BuiltOn](https://builton.dev) and their JavaScript SDK in order to manage app data such as:

- Users (↔️ with Firebase Auth)
- Products (donuts in this case 🍩)
- Discount coupons
- Orders
- Payments (↔️ with Stripe)

This works with my [delivery-manager](https://github.com/bpmct/delivery-manager) application that allows employees/admins to view orders, change order status, refunds, etc.

## Installation

🗺 If you use VS Code, use the [CodeTour](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.codetour) extension to get install instructions in the IDE. Just open and the project in VS Code and start the tour!

**Otherwise, follow these instructions to set up the project:**
- Create a [free BuiltOn account](https://builton.dev)
- Create a [Google Firebase project](https://firebase.com) and link it in to your BuiltOn dashboard.
- Configure Firebase Auth to accept Google logins & guest accounts
- Clone this repo and `npm install`
- Configure the app's enviromnent variables with your API keys:

  - If you want to deploy (or develop with) to ZEIT/Now:
    - For local development, add a `.env.build` file (use `.env.build.sample` as reference)
    - Add [now secrets](https://zeit.co/docs/v2/build-step#adding-secrets) based off the @ definitions in `now.json`
    - Begin developing with `now dev` (or `npx now dev` if you don't have now installed globally)
  - If you just want to build locally (or deploy elseware):
    - Add your API keys `next.config.js` instead of the `process.env` definitions
    - Start developing with `npm run dev`
  - Configuring the ZIP Codes that quality for delivery is a bit tricky:
    - Use [this tool](https://www.zipcodeapi.com/API#radius) by zipcodeapi.com to generate a JSON list of cities and zip codes with delivery
    - Upload the JSON file to your project directory (`public/zip-codes.json` is .gitignored) or use a service like [JSONbin](https://jsonbin.io/) to host it. Make sure it is set to "🔓 Public" [(example)](https://api.jsonbin.io/b/5e8aa04c0cb49e48ce234e42)
    - Set the proper URL of the file with the `ZIP_CODES_JSON` environment variable

- Add some products in the [BuiltOn Dashboard](https://dashboard.builton.dev/order_process/products) to make things more interesting 🚀

---

ℹ Disclaimer: I do consulting work for BuiltOn and needed to make a delivery app for my friend's donut shop. I figured making it open source would be a fun way to show BuiltOn's capabilities! 🚀
