/*
나이(age) 
- 8세 미만은 "미취학아동", 
- 8세~13세 "초등학생"
- 14세~19세 "중,고등학생"
- 나머지는 "일반인"
입장료(charge) 
- 미취학아동 : 1000원
- 초등학생 : 2000원
- 중, 고등학생 : 2500원
- 일반인 : 3000원
*/
//입력(저장) - 변수 생성
var age = prompt("나이를 입력하세요");
var charge = 0;

//처리 및 출력
// if(age < 8){
//     document.write("<p>미취학 아동입니다</p>");
//     charge = 1000;    
// }
// else if(age >= 8 && age < 14){
//     document.write("<p>초등학생입니다</p>");
//     charge = 2000;
// }
// else if(age >= 14 && age < 19){
//     document.write("<p>중,고등학생입니다</p>");
//     charge = 2500;
// }
// else{
//     document.write("<p>일반인입니다</p>");
//     charge = 3000;
// }
/*(사용자가 오류를 범할 수 있는 사항까지 반영 필요)
  프롬프트 창에서 취소 버튼을 눌러서 에러가 발생하지 않도록*/
if(age == null){
    document.write("입력이 취소되었습니다")
}
else{
    if(age >= 0 && age < 8){
        document.write("<p>미취학 아동입니다</p>");
        charge = 1000;    
    }
    else if(age >= 8 && age < 14){
        document.write("<p>초등학생입니다</p>");
        charge = 2000;
    }
    else if(age >= 14 && age < 19){
        document.write("<p>중,고등학생입니다</p>");
        charge = 2500;
    }
    else if(age >= 19 && age < 80){
        document.write("<p>일반인입니다</p>");
        charge = 3000;
    }
    else{document.write("입력 범위를 초과하였습니다")}
    }
    document.write("<p>입장료는 <span class='access'>" + charge + "원</span> 입니다</p>");