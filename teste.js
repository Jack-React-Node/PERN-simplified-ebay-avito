function solution(list){

     let res = String(list[0]);
    //  console.log(res)
     let m1 = 0;
     let m2 = 0 ;
     for(let i = 1; i < list.length; i++){
       if(m1 == 0){
            if(list[i-1] + 1 == list[i] && list[i] == list[i+1] - 1){
                res += '-';
                m1 = 1;
            }else{
                if(list[i-1] + 1 == list[i]){
                    res += ',' + list[i];
                }
                if(list[i] == list[i+1] - 1){
                    res += ',' + list[i];
                }
                if(list[i-1] + 1 !== list[i] && list[i] !== list[i+1] - 1){res += ',' + list[i];}
            }
       }else if(m1 == 1){
                if(list[i-1] + 1 == list[i] && list[i] !== list[i+1] - 1){
                    res += list[i];
                    m1 = 0;
                }
     }
     
   }
   return res
}

console.log(
   solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])
)
"-10--8,-6,-3-1,3-5,7-11,14,15,17-20"