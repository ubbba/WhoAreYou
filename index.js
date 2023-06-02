// 물음표 클릭 시 모달창
      const body = document.querySelector('body');
      const modal = document.querySelector('.modal');
      const btnOpenPopup = document.querySelector('.btn-open-popup');

      btnOpenPopup.addEventListener('click', () => {
        modal.classList.toggle('show');

        if (modal.classList.contains('show')) {
          body.style.overflow = 'hidden';
        }
      });

      modal.addEventListener('click', (event) => {
        if (event.target === modal) {
          modal.classList.toggle('show');

          if (!modal.classList.contains('show')) {
            body.style.overflow = 'auto';
          }
        }
      });
    

      // 로그인 시 로그인 창 없애고 메인 화면 보이게하기
      const loginForm = document.querySelector("#login-form");
      const loginInput = document.querySelector("#login-form input");
      const greeting = document.querySelector("#greeting");
      const titleBar = document.querySelector(".title-bar");
      
      
      function btnClick(event) {
          // 새로고침하는 기본 동작 막기
          event.preventDefault();
          // submit버튼을 눌렀을 때 디스플레이 none되는 클래스 추가와 삭제
          const username= loginInput.value;
          loginForm.classList.add("hidden");
          titleBar.classList.add("hidden");
          localStorage.setItem("id",username);
          paintgreet(username);
      }
      
          // 로그인을 하게 된 이름을 가지고 인삿말 나타내기(greeting의 히든 클래스 삭제)
      function paintgreet(username) {
          greeting.innerText = `Hello ${username}`;
          greeting.classList.remove("hidden");
      }
      
      // id의 값들을 가져오기
      const saveUser= localStorage.getItem("id");
      
      
      if(saveUser === null) {
          // 폼 보여주기
      loginForm.classList.remove("hidden");
      titleBar.classList.remove("hidden");
      
          loginForm.addEventListener("submit",btnClick);
      } else {
          // 유저가 있다면 폼 없애기
          paintgreet(saveUser);
      }
      
