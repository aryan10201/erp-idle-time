chrome.webNavigation.onCompleted.addListener(async (details) => {
    if (details.url.startsWith("https://erp.iitkgp.ac.in")) {
      await chrome.scripting.executeScript({
        target: { tabId: details.tabId },
        files: ["content.js"]
      });
      console.log("Content script injected for", details.url);
    }
  });
  