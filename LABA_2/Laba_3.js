//task3
function week(day){
	if( day == 1){ 
        alert("��������") ;}
   else if(day == 2) {
         alert("³������");}
   else if(day == 3) {
         alert("������"); }
   else if(day == 4) {
         alert("������"); }
   else if(day == 5) {
         alert("�'������"); }
   else if(day == 6) {
         alert("������"); }
   else if(day == 7) {
         alert("�����"); }
   else  {
	 alert("����� �� ������� � ��� [1;7]"); }
         return day
}

	alert("Task 3")
var day;
day=prompt("������ ����� ������������� ��� � ����� [1;7]: ");
day=week(day);