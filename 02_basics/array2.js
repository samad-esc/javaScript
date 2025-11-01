const marvel = ["Spiderman" , "IronMan"]

const dc = ["superman", "flash"]

// marvel.push(dc)

// console.log(marvel);

// const all = marvel.concat(dc)

// console.log(all);

const all = [...marvel , ...dc]
console.log(all);



console.log(Array.isArray("hellow"));
console.log(Array.from("hellow"));
console.log(Array.from({greet: "hellow"}));  //INTERESTING


