function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var eyeIcon = document.getElementById('eyesvg');

    // Toggle password visibility
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.textContent = '🔒';
    } else {
        passwordInput.type = 'password';
        // eyeIcon.textContent = '👁️';
    }
}