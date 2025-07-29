function playVideo() {
  const video = document.getElementById("broVideo");
  video.style.display = "block";
  video.play();

  // Notification anzeigen
  if ("Notification" in window) {
    // Prüfen ob Erlaubnis vorhanden
    if (Notification.permission === "granted") {
      new Notification("Von Bro zu Bro – wenn ich nicht dein Bro wäre");
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification("Von Bro zu Bro – wenn ich nicht dein Bro wäre");
        }
      });
    }
  } else {
    alert("Von Bro zu Bro – wenn ich nicht dein Bro wäre");
  }
}
