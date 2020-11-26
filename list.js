///new로 생성시 창이 닫힐 때 까지 존재
//최근 지진 발생 리스트 top10을 저장하기 위한 저장소
function Eq_list()
{
    var eq_date = ""; 
    var eq_time = ""; 
    var eq_size = ""; 
    var eq_place = ""; 
}

$.ajax({ //비동기 방식으로 호출 
    url: 'eq_list.csv', 
    dataType: 'text',
    contentType: 'application/x-www-form-urlencoded; charset=euc-kr'

}).done(successFunction);

    function successFunction(data) {
        
        var lately_eq = []; 
        var allRows = data.split(/\r?\n|\r/);
        var table = '<table>';
        var power = [];
        var location=[];
        var idx=0;

        for (var singleRow = 0; singleRow < 15; singleRow++) { //가장 최근에 발생한 지진 중 10개만 가져옴
            var rowCells = allRows[singleRow].split(',');
            location[singleRow] = rowCells[4];
            console.log(location[singleRow]);
            if(singleRow%5==1){
            
                power[idx] = rowCells[3];
                
                console.log("----------");
                console.log(power[idx]);
                console.log("----------");
                idx++;
            }   
            

        }
    }
    