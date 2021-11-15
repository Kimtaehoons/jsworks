// function calcAge(){
//     //현재년도, 출생년도 입력(선언)
//         const CURRENT_YEAR = 2021;
//         var birthYear = prompt("태어난 해를 입력하세요 ");
//         var age;
//     //계산
//         age = CURRENT_YEAR - birthYear + 1;
//     //출력(age를 p태그 result로 보내준다)
//         document.getElementById("result").innerHTML = "나이는 " + age + "세 입니다";
//     }

    //나이를 계산하는 프로그램
function calcAge(){
    //현재년도, 출생년도 입력
    const CURRENT_YEAR = 2021;
    var birthYear = prompt("태어난 해를 입력하세요. ");
    var age;

    //계산
    age = CURRENT_YEAR - birthYear + 1;

    //출력(p태그)
    document.getElementById("result").innerHTML = "나이는 " + age + "세 입니다.";
}