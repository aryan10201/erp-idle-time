(function preventAutoLogout() {
    console.log("Prevent Auto Logout script running on ERP.");
  
    // Simulate user activity every minute
    setInterval(() => {
      console.log("Simulating user activity...");
      
      // Trigger mouse movement
      const mouseMoveEvent = new MouseEvent("mousemove", {
        bubbles: true,
        cancelable: true,
        view: window
      });
      document.dispatchEvent(mouseMoveEvent);
  
      // Trigger a key press
      const keyPressEvent = new KeyboardEvent("keydown", {
        bubbles: true,
        cancelable: true,
        key: "Shift"
      });
      document.dispatchEvent(keyPressEvent);
    }, 60000); // Every 60 seconds
  
    // Optional: Keep session alive by sending requests
    setInterval(() => {
      console.log("Sending keep-alive request...");
      fetch(window.location.href, { method: "GET", credentials: "include" })
        .then(response => console.log("Keep-alive response:", response.status))
        .catch(error => console.error("Keep-alive error:", error));
    }, 300000); // Every 5 minutes
  })();
  