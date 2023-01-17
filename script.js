// var arr = new Array(1,2,1);
// arr.sort();
// console.log(arr)

// var arr = "1001001111111";
// var a=0;
// var b=0;
// var x=1;
// for(var i=0;i<arr.length;i++){
//     if(arr.charAt(i)==="1"){
//         b++;
//         a=0;
//     }
//     if(arr.charAt(i)==="0"){
//         a++;
//         b=0;
//     }
//     if(b==7){
//         console.log("YES");
//         x=0;
//         break;
//     }
// }
// if(x==1){
//     console.log("NO");
// }

// var arr=[1,2,3]
// var r=arr.map((x)=>x*3)
// console.log(r);
// arr.forEach(e=>{
//     console.log(e*2+2)
// });

// const employees = [
//     { name: "Adam", salary: 5000, bonus: 500, tax: 1000 },
//     { name: "Noah", salary: 8000, bonus: 1500, tax: 2500 },
//     { name: "Fabiano", salary: 1500, bonus: 500, tax: 200 },
//     { name: "Ali", salary: 4500, bonus: 1000, tax: 900 },
//   ];

//   var x=employees.map((obj)=>{
//     newO={};
//     newO.name=obj.name;
//     newO.salary=obj.salary+obj.bonus-obj.tax;
//     return newO;
//   })
//   console.log(x);

//for map we need to return if there are multiple lines, it it is a single line no need to return
  let n=[1,2,3,4,5,6,7,8,9,10];
  var x=n.filter((x)=>x%2!=0);
  console.log(x);
  n.re