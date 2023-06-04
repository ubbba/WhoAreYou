// html에서 사용한 form과 id를 js로 가져오기
const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

let toDos = [];

function handleToDoSubmit(event) {
    // 새로고침 방지
    event.preventDefault();
    // input type=text에 받은 값을 newTodo에 넣어주기
    const newTodo = todoInput.value;
    // 넣은 후에 값을 초기화
    todoInput.value="";
    // newTodo와 랜덤id를 가진 객체를 toDos배열에 집어넣기
    const newTodoObj= {
        text:newTodo,
        id:Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDo();
}

// localStorage에 newTodo값을 받은 toDos를 저장시키기
// JSON.stringigy()를 사용하면 모든 값을 string으로 받아온다.
function saveToDo() {
    localStorage.setItem("to", JSON.stringify(toDos));
}


// 리스트 목록 지워주는 함수
function deleteToDo(event) {
    // li에 버튼을 눌렀을 때 어떤 li엘레멘트가 눌렸는지 타겟을 알려주는 정보를 넣는다.
    const li =event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo)=> toDo.id !== parseInt(li.id));
    saveToDo();
}


function paintTodo(newTodo) {
    // html에서 쓸 li태그와 span태그를 생성
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    // const button= document.createElement("label");
    // button.classList.add("todo-button");
    // 버튼을 어떻게 표시할 것인지? / 버튼을 클릭했을 시 삭제 함수 발동
    // button.innerText = "X";
    span.addEventListener("click", deleteToDo);
    // li가 span과 button을 품게 된다.
    li.append(span);
    // li.append(button);
    // span 안에 newTodo 값을 입력해준다
    span.innerText = newTodo.text;
    // ul태그인 todolist에 li값을 넣어서 span에 쓰여진 값들을 보이게 한다
    todoList.append(li);
}




// submit이 되었을 때 handleToDoSubmit함수가 실행되게 하기
todoForm.addEventListener("submit", handleToDoSubmit);

// saveToDos에 setItem한 "to"를 가져온다.
const saveToDos = localStorage.getItem("to");
console.log(saveToDos);



// if문을 써 만약 saveToDos값이 있다면 값을 JSON.parse를 통해 다시 array로 받아온다.
if(saveToDos !== null) {
    const parsedToDos = JSON.parse(saveToDos);
    // toDos가 시작할 때 빈값으로 시작하기때문에 시작하자마자 저장된 값을 바로 가져가게한다.
    toDos =parsedToDos;
    // forEach는 각 item들을 하나씩 꺼내올 때 반복문 없이 function을 수행할 수 있다
       /* function name(item) {
        console.log("hello", item);
    } 와 똑같은 개념임*/ 
    parsedToDos.forEach(paintTodo);
}

// array에서 삭제하기, 사실 삭제하는게 아닌 새로운 array값으로 대체해주는 작업(비워놓기)

function sexyFilter() {

}