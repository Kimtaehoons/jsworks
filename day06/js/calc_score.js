//성적 계산
//자료 입력(1열:국어점수, 2열:수학점수)
var score = [
    [80, 70],
    [90, 60],
    [70, 75],
    [100, 70],
    [85, 70],
]
var sum = [0, 0];
var avg = [0.0, 0.0];
//점수 합계
//첫 번째 : 1차원으로 계산(국어 점수 열만 활성화)
for(var i = 0; i <score.length; i++){
    sum[0] += score[i][0];//국어점수 합계
    sum[1] += score[i][1];//영어점수 합계-행은 바뀌면서 열은 그대로
}
avg[0] = sum[0] / score.length;//국어점수 평균
avg[1] = sum[1] / score.length;//수학점수 평균
//출력
document.write("국어 총점 : " + sum[0] + "<br>");
document.write("수학 총점 : " + sum[1] + "<br>");
document.write("국어 평균 : " + avg[0] + "<br>");
document.write("수학 평균 : " + avg[1] + "<br>");