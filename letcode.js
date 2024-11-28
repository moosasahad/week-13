function sort(a){
    let array=[]
    const sorted = a.sort((a,b)=>a-b)
   let start =0
   let end =a.length-1
   let status=true
  for(i=1;i<a.length;i++){
      if(status){
          array.push(a[start])
          start++
          status=false
      }else{
          array.push(a[end])
          end--
          status=true
      }
  }
  return array
}
console.log(sort(a=[15, 8, 42, 23, 4, 16, 50, 29, 9, 33, 7, 1, 60, 21, 37, 3]))

// Given a large array of integers, print 10 elements in this order:
// 	Smallest, largest, 2nd smallest, 2nd largest and so on till 10 elements
// [15, 8, 42, 23, 4, 16, 50, 29, 9, 33, 7, 1, 60, 21, 37, 3]
// [1, 60, 3, 50, 4, 42, 7, 37, 8, 33]