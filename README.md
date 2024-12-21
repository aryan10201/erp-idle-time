# Prevent Auto Logout for ERP

## Description
This extension prevents automatic logout due to inactivity on the website [ERP IIT KGP](https://erp.iitkgp.ac.in/).

### Features:
- Simulates user activity to reset idle timers.
- Sends periodic keep-alive requests to maintain server session.

## Installation

### 1. Download/Clone the Extension
- Clone or download this repository.
  
### 2. Load Extension in Chrome
1. Open `chrome://extensions/`.
2. Enable "Developer mode" by toggling the switch.
3. Click "Load unpacked" and select the folder containing the extension files.

### 3. Navigate to Target Site
- Open `https://erp.iitkgp.ac.in/` in your browser.

## Usage

- Once installed, the extension runs automatically on the specified website.
- Simulates periodic user activity every 60 seconds.
- Optionally sends keep-alive requests every 5 minutes to maintain session.
- Testing: Open the specified website (https://erp.iitkgp.ac.in) and check the Developer Console for logs like "Content script injected for https://erp.iitkgp.ac.in".
- If you see the above log, it means that the extension is working.

## Development

### Files Overview:
- **manifest.json**: Defines the extension's metadata and permissions.
- **background.js**: Handles events when the page is loaded and injects the content script.
- **content.js**: Simulates user activity and keeps the session alive.

### Permissions:
- `scripting`: Allows injection of scripts into webpages.
- `webNavigation`: Enables the extension to detect when the target website loads.

---

Pull requests are welcome.
