const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');


// 할일 저장
function addTask(){
    if(inputBox.value === ''){
        // 입력창이 비어있으면?
        alert("할 일을 입력해주세요!");
    } else {
        // 입력창이 비어있지 않으면?
        // 할일을 추가하고 입력창을 비우기
        let li = document.createElement('li');
        li.innerText = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

// 클릭 이벤트
listContainer.addEventListener('click', function(e){
    // li 태그 인 경우 체크 상태 토글
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
        // span 태그 인 경우 li 태그를 삭제
    } else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// 할 일 목록을 로컬 스토리지에 저장
function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

// 저장된 할 일 목록을 로컬스토리지에서 불러오기
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();


