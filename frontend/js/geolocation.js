window.onload = function() {
    const locationInfo = document.getElementById('location-info');
    const punchBtn = document.getElementById('punch-btn');
    const punchResult = document.getElementById('punch-result');
    let currentPosition = null;

    // 获取定位
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                currentPosition = position;
                locationInfo.textContent = `纬度: ${position.coords.latitude.toFixed(6)}, 经度: ${position.coords.longitude.toFixed(6)}`;
            },
            function(error) {
                locationInfo.textContent = '定位失败，请检查浏览器权限设置';
            },
            { enableHighAccuracy: true }
        );
    } else {
        locationInfo.textContent = '当前浏览器不支持定位功能';
    }

    // 打卡按钮事件
    punchBtn.onclick = function() {
        if (currentPosition) {
            punchResult.textContent = `打卡成功！\n时间: ${new Date().toLocaleString()}\n位置: 纬度${currentPosition.coords.latitude.toFixed(6)}, 经度${currentPosition.coords.longitude.toFixed(6)}`;
        } else {
            punchResult.textContent = '无法获取定位，打卡失败';
        }
    };
}; 