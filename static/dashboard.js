document.addEventListener('DOMContentLoaded', () => {
  const transferBtn = document.getElementById('transferBtn');
  const transactionsBtn = document.getElementById('transactionsBtn');
  const settingsBtn = document.getElementById('settingsBtn');
  const logoutBtn = document.getElementById('logoutBtn');

  transferBtn.addEventListener('click', () => {
    window.location.href = '/transfer';
  });

  transactionsBtn.addEventListener('click', () => {
    window.location.href = '/transactions';
  });

  settingsBtn.addEventListener('click', () => {
    window.location.href = '/settings';
  });

  logoutBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to logout?')) {
      window.location.href = '/logout';
    }
  });
});
