//학점 출력 프로그램
/*
A - 90 <= score < 100 
B - 80 <= score < 90
C - 70 <= score < 80
D - 60 <= score < 70
F - 0 <= score 60 
*/
//변수 생성
var score = 100;
var grade = '';//학점 초기화
//처리 및 출력
if(score >= 90 && score <= 100){
      grade = 'A';
}
else if(score >= 80 && score < 90){
      grade = 'B';
}
else if(score >= 70 && score < 80){
      grade = 'C';
}
else if(score >= 60 && score < 70){
      grade = 'D';
}
else if(score >= 0 && score < 60){
      grade = 'F';
}
else{
    document.write("입력 오류입니다")
}
document.write("<p>학점은 <span class='access'>" + grade + "학점</span>입니다</p>");