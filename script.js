const generateBtn = document.querySelector("#generateBtn");
const gridContainer = document.querySelector("#gridContainer");

generateBtn.addEventListener('click', (e) => {
    //이미지가 30개 이상일 경우 모든 이미지 삭제
    if(gridContainer.children.length >=30){
        const confirmed = confirm("생성 가능한 이미지 30개를 모두 사용하였습니다. 모든 사진을 지우시겠습니까?");
        if(confirmed){
            gridContainer.innerHTML = ""; //이미지 모두 삭제
        }
    }else {

        //버튼 클릭 이벤트가 발생했을때 코드
        console.log("버튼이 눌렸습니다.");
        const randomNumber = Math.floor(Math.random() * 1000) + 1;
        const imgUrl = `https://picsum.photos/500?random=${randomNumber}`

        const img = document.createElement('img');
        img.src = imgUrl

        gridContainer.append(img);

    }


})