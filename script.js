function setScreen(screenId) {
  // Remove 'active' class from all screens
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  
  // Add 'active' class to the target screen
  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add('active');
  } else {
    console.error("Screen ID " + screenId + " not found!");
  }
}
