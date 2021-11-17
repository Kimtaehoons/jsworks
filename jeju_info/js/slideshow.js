//이미지 선택
var slides = document.querySelectorAll(".slides img");
let current = 0;
let next = document.getElementById("next");
let prex = document.getElementById("prev");
showSlides(current);//호출
next.onclick = nextSlide;
prev.onclick = prevSlide;
function showSlides(n){
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";    
    }
    slides[n].style.display = "block";
}
function nextSlide(){
    if(current < slides.length -1)//인덱스 번호가 2보다 작으면(0, 1일 때)
        current += 1;//인덱스 번호가 1씩 증가
    else//인덱스 번호가 2보다 크면(3이 될 경우)
        current  = 0;//배열의 개수 0으로 설정
    showSlides(current);//호출
}
function prevSlide(){
    if(current > 0)//인덱스 번호가 0보다 크면
        current -= 1;//인덱스 번호가 1씩 감소
    else//인덱스 번호가 0보다 작으면
        current  = slides.length -1;//배열의 개수 2로 설정
    showSlides(current);
}
