from playwright.sync_api import sync_playwright
import os
import time

screenshot_path = os.path.join(os.path.dirname(__file__), "lab_screenshot.png")

with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)  # Use headed mode
    context = browser.new_context(viewport={"width": 1920, "height": 1080})
    page = context.new_page()
    page.goto("http://localhost:4000/lab/")
    page.wait_for_load_state("domcontentloaded")
    page.wait_for_timeout(5000)  # Wait 5 seconds for CSS/fonts to load
    page.screenshot(path=screenshot_path, full_page=True)
    print(f"Screenshot saved to: {screenshot_path}")
    browser.close()
