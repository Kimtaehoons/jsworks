/*
1부터 10까지의 자연수 중 홀수를 사용하여 합을 구하고, 
그 합을 배열의 맨 뒤에 추가하는 프로그램
*/
//배열 선언
var nums = [1, 3, 5, 7, 9];
var sum = 0;
//홀수의 합 구하기
for(var i = 0; i <nums.length; i++){
    sum += nums[i];
}
//맨 뒤에 sum 추가
nums.push(sum);
//nums 배열 출력(일반 for문)
for(var i = 0; i <nums.length; i++){//for문은 순서가 있기 때문에
    document.write(nums[i] + " ");
}
//nums 배열 출력(index 없는 for ~ in문)
for(var i in nums){//ㅑ는 변수, in은 배열이름
    document.write(nums[i] + " ");
}