document.getElementById('register-form').onsubmit = function(e) {
    e.preventDefault();
    const username = document.getElementById('register-username').value.trim();
    const password = document.getElementById('register-password').value.trim();
    const role = document.getElementById('register-role').value;
    const msg = document.getElementById('register-message');
    if (!username || !password) {
        msg.textContent = '用户名和密码不能为空';
        return;
    }
    if (role === 'teacher') {
        const invite = document.getElementById('teacher-invite').value.trim();
        if (!invite) {
            msg.textContent = '请输入邀请码';
            return;
        }
        const INVITE_CODE = 'LAB2024'; // 假设邀请码
        if (invite !== INVITE_CODE) {
            msg.textContent = '邀请码错误，无法注册为老师';
            return;
        }
        msg.textContent = '注册成功（模拟），身份：老师';
    } else {
        const name = document.getElementById('student-name').value.trim();
        const clazz = document.getElementById('student-class').value.trim();
        const major = document.getElementById('student-major').value.trim();
        const phone = document.getElementById('student-phone').value.trim();
        if (!name || !clazz || !major || !phone) {
            msg.textContent = '请填写所有学生信息';
            return;
        }
        if (!/^1[3-9]\d{9}$/.test(phone)) {
            msg.textContent = '手机号格式不正确';
            return;
        }
        msg.textContent = '注册成功（模拟），身份：学生';
    }
};

document.getElementById('to-login-btn').onclick = function() {
    window.location.href = 'login.html';
};

// 身份切换显示不同表单项
const roleSelect = document.getElementById('register-role');
const studentFields = document.getElementById('student-fields');
const teacherFields = document.getElementById('teacher-fields');
roleSelect.onchange = function() {
    if (roleSelect.value === 'teacher') {
        teacherFields.style.display = 'block';
        studentFields.style.display = 'none';
    } else {
        teacherFields.style.display = 'none';
        studentFields.style.display = 'block';
    }
}; 