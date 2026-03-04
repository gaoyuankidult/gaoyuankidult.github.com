---
title: Contact
---

<div class="fade-in">
<p class="page-intro">Every conversation begins somewhere. If you have a question, a collaboration in mind, or simply something to say—I'd like to hear it.</p>
</div>

<style>
.contact-form {
  max-width: 520px;
}
.contact-form fieldset {
  border: none;
  padding: 0;
  margin: 0;
}
.contact-form legend {
  display: none;
}
.contact-field {
  margin-bottom: 1.5em;
}
.contact-label {
  display: block;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #999;
  margin-bottom: 0.5em;
  font-weight: 500;
}
.contact-input {
  width: 100%;
  padding: 0.7em 0;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  color: #333;
  border: none;
  border-bottom: 1px solid #ddd;
  background: transparent;
  outline: none;
  transition: border-color 0.3s ease;
  letter-spacing: -0.01em;
}
.contact-input:focus {
  border-bottom-color: #333;
}
.contact-textarea {
  width: 100%;
  min-height: 120px;
  padding: 0.8em 0;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  color: #333;
  border: none;
  border-bottom: 1px solid #ddd;
  background: transparent;
  outline: none;
  resize: vertical;
  transition: border-color 0.3s ease;
  line-height: 1.7;
  letter-spacing: -0.01em;
}
.contact-textarea:focus {
  border-bottom-color: #333;
}
.contact-submit {
  display: inline-block;
  padding: 0.6em 2.5em;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #333;
  background: transparent;
  border: 1px solid #333;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5em;
}
.contact-submit:hover {
  background: #333;
  color: #fff;
}
</style>

<div class="fade-in stagger-2">
<form id="contactForm" class="contact-form" method="POST" action="https://formspree.io/gaoyuankidult@gmail.com">
  <fieldset>
    <legend>Your message:</legend>
    <div class="contact-field">
      <label class="contact-label">Name</label>
      <input class="contact-input" name="name" type="text" required>
    </div>
    <div class="contact-field">
      <label class="contact-label">Email</label>
      <input class="contact-input" name="_replyto" type="email" required>
    </div>
    <div class="contact-field">
      <label class="contact-label">Message</label>
      <textarea class="contact-textarea" name="message" required></textarea>
    </div>
    <button type="submit" class="contact-submit">Send</button>
  </fieldset>
</form>
</div>
