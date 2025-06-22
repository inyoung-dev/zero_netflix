let position = 0;
const slideWidth = 210 * 2; // 2개씩 이동
const slider = document.querySelector(".poster-area");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

function updateButtons() {
    // 1번 포스터가 처음에 있으면 왼쪽 버튼 숨김
    if (position === 0) {
        prevBtn.classList.add("hidden");
    } else {
        prevBtn.classList.remove("hidden");
    }

    // 우측 끝까지 가면 오른쪽 버튼 숨김
    const maxPosition = -((slider.children.length - 6) * 210);
    if (position <= maxPosition) {
        nextBtn.classList.add("hidden");
    } else {
        nextBtn.classList.remove("hidden");
    }
}

function slide(direction) {
    const maxPosition = -((slider.children.length - 6) * 210); // 화면에 6개 보이도록 수정

    position -= direction * slideWidth; // 방향 반대로 이동

    // 화면 벗어나지 않도록 범위 조정
    if (position > 0) position = 0;
    if (position < maxPosition) position = maxPosition;
    
    slider.style.transform = `translateX(${position}px)`;

    // 버튼 상태 업데이트
    updateButtons();
}

// 초기 버튼 상태 설정
updateButtons();