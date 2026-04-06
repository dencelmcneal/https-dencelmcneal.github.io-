# Defense Lawn Service LLC Website

This is a free static website bundle prepared for Defense Lawn Service LLC.

## Files
- `index.html` – main website page
- `styles.css` – styling
- `script.js` – mobile menu + contact form placeholder
- `logo.png` – your logo

## Fastest free way to put this site online
### Option 1: GitHub Pages
1. Create a free GitHub account.
2. Create a new public repository named something like `defense-lawn-service-site`.
3. Upload all files from this folder.
4. In the repository, open **Settings** → **Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and `/root`.
7. Save. GitHub will publish the site on a free `github.io` URL.

## Add a free contact form
This website is already prepared for a Google Form embed.

### Create the form
Create a Google Form with fields like:
- Name
- Phone Number
- Email
- Property Address
- Service Needed
- Message

### Embed it into the site
1. Open your Google Form.
2. Click **Send**.
3. Choose the **<>** embed option.
4. Copy the URL from the iframe code Google gives you.
5. Open `index.html`.
6. Find this line:

```html
<iframe
  title="Defense Lawn Service LLC contact form"
  src="about:blank"
```

7. Replace `about:blank` with your Google Form embed URL.

## Put your business on Google
Create or claim your free Google Business Profile and add:
- Business name: Defense Lawn Service LLC
- Primary phone: (832) 654-2148
- Website URL after the site is live
- Service area: Houston and surrounding cities
- Business description from the site
- Photos and logo

## Suggested Google Business description
Defense Lawn Service LLC provides commercial property maintenance and grounds services in Houston and surrounding cities. We specialize in lawn care, landscaping, pressure washing, industrial site cleanup, and exterior property maintenance for commercial properties, restaurants, oil fields, scrapyards, and high-demand environments.

## Important note
A static website cannot send email by itself without a form service or backend. That is why the site is set up to use a free Google Form embed and also includes direct call and email buttons.
