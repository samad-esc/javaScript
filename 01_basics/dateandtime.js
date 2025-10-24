// //dates

// let myDate = new Date()
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());

// console.log(typeof(myDate));

let myCreatedDate= new Date ("01-11-2011")

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth()+1);
console.log(newdate.getDay());


newdate.toLocaleString('default', {
    weekday:"long"
})



