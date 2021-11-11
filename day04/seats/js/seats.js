var customerNum = prompt("입장객은 몇 명인가요?");
var columnNum = prompt("한 줄에 몇 명 안나요?");
var rowNum = 0;//초기화
//처리(오류가 나올 가능성까지 반영)
if(customerNum == null || columnNum == null){
/* 프롬프트 창이 두 개 뜨기 때문에 오류도 두 번까지 생길 수 있어 or로 연결함 */
    document.write("입력이 취소되었습니다");
}
//입장객 수에 따른 좌석의 줄(행) 수 계산하기
else{
    if(customerNum % columnNum == 0){
    rowNum = customerNum / columnNum;
    //나누어 떨어지면(나머지가 0이면)
    }
    else{
    rowNum = parseInt(customerNum / columnNum) + 1;
    //나누어 떨어지지 않으면(나머지가 있으면)
    //palseInt() - 정수로 변환하는 함수
    }
}
//중첩 for문으로 자리 배치(위에서 줄 수를 구해야 중첩 for를 돌릴 수 있다)
    document.write("<table>")
    for(var i = 0; i < rowNum; i++){
        document.write("<tr>")
        for(var j = 1; j <= columnNum; j++){
            var seatNum = i * columnNum + j;
            //예를 들어, 입장객과 자리값이 입력값까지만 나오고 그 이외는 빠져나와야 한다
            //33까지만 원하면 거기까지만 break걸고 34는 안 찍히게 밖으로 빠져나오게 한다
            if(seatNum > customerNum) break;{
                document.write("<td>좌석" + seatNum + "</td>");
            //if(seatNum == customerNum) break; 
            //위치에 따라 if문 true조건을 맞춰준다
            }            
        }
        document.write("</tr>");
    }
    document.write("</table>")