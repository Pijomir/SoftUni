function notify(message) {
  let notificationDivRev = document.getElementById('notification');
  notificationDivRev.textContent = message;
  notificationDivRev.style.display = 'block';
  notificationDivRev.addEventListener('click', divClick);

  function divClick(event) {
    let message = event.target;
    message.style.display = 'none';
  }
}