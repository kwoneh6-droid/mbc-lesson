// DOM 생성 후 이벤트 바인딩
document.addEventListener('DOMContentLoaded', function() {
    
    // 버튼 클릭 이벤트 예시
    const actionBtn = document.getElementById('btn-action');
    
    if (actionBtn) {
        actionBtn.addEventListener('click', function() {
            alert('바이브 코딩으로 페이지 제작을 시작합니다! 피그마 요소를 채워보세요.');
        });
    }

    // MPA 구조에서 현재 활성화된 메뉴에 active 클래스 부여하기 (선택 사항)
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else if (currentPath === '' && link.getAttribute('href') === 'index.html') {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});