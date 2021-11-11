/*
'y'키를 누르면 "계속 반복"
'n'키를 누르면 "반복 중단"
그 외의 키는 "잘못 입력"

while(true) ~ if ~ break(반복 조건문(무한반복)- 자동화 프로그램은 반복이 많이 발생함)
*/
var key ="";//문자 초기화
while(true){
    //입력
    key = prompt("계속 반복할까요?", "y/n, n=종료");
    //처리
    if(key == "y" || key == "Y"){
        alert("계속 반복합니다");
    }
    else if(key == "n" || key == "N"){
        alert("반복 중단합니다");
        break;//중단하면서 while에서 빠져나와 출력값(document.write)으로 빠져나간다
    }
    else{
        alert("키를 잘못눌렀습니다");
    }    
}
document.write("프로그램 종료합니다");