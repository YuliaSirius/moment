document.addEventListener('DOMContentLoaded', openNextPage);
function openNextPage() {
    setTimeout(() => {
      window.location.assign('connections.html');
    }, 3000);
}
