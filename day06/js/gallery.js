//이미지 넘기기
var num = 1;//전역 변수(클릭할 때마다 소멸돼 특정값 반복이 되지 않도록)
function nextGallery(){
    num++;
    if(num > 7)
        num = 1;//7번 그림 다음에 다시 1번 그림으로 돌아가게함
    document.getElementById("pic").src="../images/img" + num + ".jpg";
}
function prevGallery(){
    num--;
    if(num < 1)
        num = 7;
    document.getElementById("pic").src="../images/img" + num + ".jpg";
}