//변수의 값 교환하기
var x = 0;
var y = 1;
var temp; //교환할 임시 변수

document.write("*** 교환 전 ***<br>")
document.write("x = " + x + ", y = " + y)

//교환 처리(대입연산자 활용, 넣을 값은 '='의 오른쪽, 넣는 곳은 '='의 왼쪽)
temp = x; //x값을 temp에 대입
x = y; //y값을 x에 대입
y = temp; //temp값을 y에 대입

document.write("<br><br>")
document.write("*** 교환 후 ***<br>")
document.write("x = " + x + ", y = " + y)