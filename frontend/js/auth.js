document.getElementById('login-form').onsubmit = function(e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    // 这里只做本地模拟
    if (username && password) {
        document.getElementById('auth-message').textContent = '登录成功（模拟）';
        setTimeout(() => { window.location.href = 'index.html'; }, 1000);
    } else {
        document.getElementById('auth-message').textContent = '请输入用户名和密码';
    }
};

// 跳转到注册页面
const toRegisterBtn = document.getElementById('to-register-btn');
if (toRegisterBtn) {
    toRegisterBtn.onclick = function() {
        window.location.href = 'register.html';
    };
} 