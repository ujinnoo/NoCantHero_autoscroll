function scrollPage() {
    document.documentElement.scrollBy(0, 1); // 스크롤 이동 거리 및 방향 설정

    // 특정 스크롤 위치에 도달하면 최상단으로 스크롤
    if (window.scrollY >= 28000) {
        // 새로고침하고 3초 뒤에 최상단으로 스크롤
        location.reload();
        setTimeout(function() {
            window.scrollTo(0, 0);
        }, 3000);
    }
}

// 페이지 로드 후 3초 뒤에 scrollPage 함수 호출
setTimeout(function() {
    // 1밀리초마다 scrollPage 함수 호출
    setInterval(scrollPage, 1);
}, 3000);
