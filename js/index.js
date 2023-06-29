// 모달 시작
const btn = document.getElementById("popupBtn");
const modal = document.getElementById("modalWrap");
const closeBtn = document.getElementById("closeBtn");

const fbtn = document.querySelector("#folderBtn");
const fmodal = document.querySelector("#folderWrap");
const fcloseBtn = document.getElementById("fcloseBtn");

btn.onclick = function () {
  modal.style.display = "block";
};
closeBtn.onclick = function () {
  modal.style.display = "none";
};

fbtn.onclick = function () {
  fmodal.style.display = "block";
};
fcloseBtn.onclick = function () {
  fmodal.style.display = "none";
};
// 모달 끝

// 로그인 시작
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const login = document.querySelector(".login");
const main = document.querySelector(".main-all");
const back = document.querySelector(".bottom_start");

var input = document.querySelector("#input-name");

function btnClick(event) {
  // 새로고침하는 기본 동작 막기
  const username = loginInput.value;
  event.preventDefault();
  // submit버튼을 눌렀을 때 디스플레이 none되는 클래스 추가와 삭제
  login.classList.add("hidden");
  localStorage.setItem("id", username);
  paintgreet(username);
  input.value = "";
}

// 로그인을 하게 된 이름을 가지고 인삿말 나타내기(greeting의 히든 클래스 삭제)
function paintgreet(username) {
  greeting.innerText = `Hello ${username}`;
  main.classList.remove("hidden");
}

// id의 값들을 가져오기
const saveUser = localStorage.getItem("id");

if (saveUser === null) {
  // 폼 보여주기
  login.classList.remove("hidden");
  main.classList.add("hidden");
  loginForm.addEventListener("submit", btnClick);
} else {
  // 유저가 있다면 폼 없애기
  login.classList.add("hidden");
  paintgreet(saveUser);
}

// 로그아웃 하기
function deleteName() {
  localStorage.removeItem("id");
  login.classList.remove("hidden");
  main.classList.add("hidden");
  var input = document.querySelector("#login-input");
  input.value = "";
}

// id 영문만 입력하기
function check1(e) {
  var name = document.querySelector("#input-name").value;
  e.value = e.value.replace(/[^A-Za-z]/gi, "");
}
