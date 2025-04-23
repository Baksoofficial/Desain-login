document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (!email || !password) {
        alert('Harap isi semua kolom');
        return;
    }
    console.log('Percobaan masuk dengan:', { email, password });
    const btn = document.querySelector('.btn-primary');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sedang masuk...';
    btn.disabled = true;
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        alert('Berhasil masuk! (Ini adalah demo)');
    }, 1500);
});

function showForgotPasswordModal() {
    document.getElementById('forgotPasswordModal').classList.add('active');
}

function closeForgotPasswordModal() {
    document.getElementById('forgotPasswordModal').classList.remove('active');
}

document.getElementById('forgotPasswordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('forgotEmail').value;
    if (!email) {
        alert('Harap masukkan alamat email');
        return;
    }
    alert('Link reset kata sandi telah dikirim ke ' + email + ' (Ini adalah demo)');
    closeForgotPasswordModal();
});

function showRegisterModal() {
    document.getElementById('registerModal').classList.add('active');
}

function closeRegisterModal() {
    document.getElementById('registerModal').classList.remove('active');
}

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    if (!name || !email || !password) {
        alert('Harap isi semua kolom');
        return;
    }
    alert('Pendaftaran berhasil! Silakan login. (Ini adalah demo)');
    closeRegisterModal();
});

window.onclick = function(event) {
    const forgotModal = document.getElementById('forgotPasswordModal');
    const registerModal = document.getElementById('registerModal');
    if (event.target == forgotModal) {
        closeForgotPasswordModal();
    }
    if (event.target == registerModal) {
        closeRegisterModal();
    }
}