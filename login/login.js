// 아이디 input
const emailInput = document.getElementById("email-input");
const idBox = document.querySelector(".id-box");
const idError = document.getElementById("id_error");

// 비밀번호 input
const pwInput = document.getElementById("pw-input");
const pwBox = document.querySelector(".pw-box");
const pwError = document.getElementById("pw_error");

// 토글 버튼 (HTML에 추가된 요소)
const togglePassword = document.getElementById("togglePassword");

/**
 * 특정 input의 값이 있으면 부모에 .filled 추가, 없으면 제거
 * @param {HTMLInputElement} input
 * @param {HTMLElement} parent
 */
function toggleFloatLabel(input, parent) {
  if (input.value.trim() !== "") {
    parent.classList.add("filled");
  } else {
    parent.classList.remove("filled");
  }
}

// 이메일 포커스/블러/입력
emailInput.addEventListener("focus", () => toggleFloatLabel(emailInput, idBox));
emailInput.addEventListener("blur", () => {
  toggleFloatLabel(emailInput, idBox);

  // 블러 시 이메일 유효성 검사 (간단히 '@' 포함 여부)
  if (!emailInput.value.includes("@") && emailInput.value.trim() !== "") {
    emailInput.classList.add("invalid");
    idError.textContent = "Ⓧ 정확한 이메일 주소를 입력하세요.";
  } else {
    emailInput.classList.remove("invalid");
    idError.textContent = "";
  }
});
emailInput.addEventListener("input", () => toggleFloatLabel(emailInput, idBox));

// 비밀번호 포커스/블러/입력
pwInput.addEventListener("focus", () => toggleFloatLabel(pwInput, pwBox));
pwInput.addEventListener("blur", () => {
  toggleFloatLabel(pwInput, pwBox);

  // 비밀번호 길이 구하기 (앞뒤 공백 제거 후)
  const pwLength = pwInput.value.trim().length;

  // 비밀번호 유효성 검사: 4~60자 사이여야 함
  if (pwLength < 4 || pwLength > 60) {
    pwInput.classList.add("invalid");
    pwError.textContent = "Ⓧ 비밀번호는 4~60자 사이여야 합니다.";
  } else {
    pwInput.classList.remove("invalid");
    pwError.textContent = "";
  }
});
pwInput.addEventListener("input", () => {
  toggleFloatLabel(pwInput, pwBox);
  // 입력값에 따라 토글 버튼 표시 여부 결정
  if (pwInput.value.trim().length > 0) {
    togglePassword.style.display = "block";
  } else {
    togglePassword.style.display = "none";
  }
});

// 토글 버튼 클릭 시 비밀번호 보이기/숨기기 기능
togglePassword.addEventListener("click", () => {
  if (pwInput.type === "password") {
    pwInput.type = "text";
    togglePassword.textContent = "❍";
  } else {
    pwInput.type = "password";
    togglePassword.textContent = "⌀";
  }
});


//로그인 조건 달성되지 않았을 경우 PW에러 발생하기
const loginBtn = document.querySelector(".login-btn"); // 로그인 버튼 요소 선택
//버튼 클릭시 비밀번호 길이 검사 후 에러 발생
loginBtn.addEventListener("click", () => {
  const pwLength = pwInput.value.trim().length;
  if (pwLength < 4 || pwLength > 60) {
    pwInput.classList.add("invalid");
    pwError.textContent = "Ⓧ 비밀번호는 4~60자 사이여야 합니다.";
  } else {
    pwInput.classList.remove("invalid");
    pwError.textContent = "";
  }
});


// "로그인 코드 사용하기" 버튼
const loginCodeBtn = document.querySelector(".loginCode-btn");
// 기존 로그인 폼
const loginForm = document.querySelector(".login_form");
// 새로 만든 "로그인 코드" 폼
const loginCodeForm = document.querySelector(".login_code_form");

// "비밀번호 사용하기" 버튼
const usePwBtn = document.querySelector(".usePw-btn");

// 1) "로그인 코드 사용하기" 클릭 -> 기존 폼 숨기고, 코드 폼 보이기
loginCodeBtn.addEventListener("click", () => {
  loginForm.style.display = "none";
  loginCodeForm.style.display = "block";
});

// 2) "비밀번호 사용하기" 클릭 -> 코드 폼 숨기고, 기존 폼 보이기
usePwBtn.addEventListener("click", () => {
  loginCodeForm.style.display = "none";
  loginForm.style.display = "block";
});

