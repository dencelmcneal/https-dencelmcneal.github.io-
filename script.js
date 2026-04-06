const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Helpful placeholder for the contact iframe
const iframe = document.querySelector('.form-shell iframe');
if (iframe && iframe.src === 'about:blank') {
  iframe.setAttribute('srcdoc', `
    <style>
      body {
        margin: 0;
        font-family: Inter, Arial, sans-serif;
        background: linear-gradient(135deg, rgba(15,106,82,0.04), rgba(126,203,100,0.05));
        color: #12332a;
        display: grid;
        place-items: center;
        min-height: 100vh;
        padding: 24px;
        box-sizing: border-box;
      }
      .box {
        background: white;
        border: 1px solid #d7e4db;
        border-radius: 22px;
        padding: 28px;
        max-width: 520px;
        box-shadow: 0 18px 40px rgba(16,58,46,0.08);
      }
      h3 { margin: 0 0 10px; font-size: 24px; }
      p { margin: 0 0 12px; line-height: 1.6; color: #5f776f; }
      code {
        display: inline-block;
        background: #edf5ef;
        border-radius: 8px;
        padding: 4px 8px;
        color: #0f6a52;
        font-size: 13px;
      }
    </style>
    <div class="box">
      <h3>Connect your free Google Form</h3>
      <p>This website is ready for a working contact form. Replace the iframe <code>src</code> in <code>index.html</code> with your Google Form embed URL.</p>
      <p>Until then, visitors can still contact you by phone or email using the buttons below this section.</p>
    </div>
  `);
}
