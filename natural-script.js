// Tab switch function (Natural page specific)
function switchTab(tabName) {
  // Hide all tab content
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });
  // Remove active state from all tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  // Show target tab content and activate target button
  document.getElementById(tabName).classList.add('active');
  event.currentTarget.classList.add('active');
}