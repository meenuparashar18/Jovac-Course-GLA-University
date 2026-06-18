// array ke kuch function
//




//callback function
//function that is passed as an argument to another function and is executed after some operation is completed
// function greeting (name){
//     console.log(`helllo , ${name}`);

// }
// function userInput(callback){
//     const name = "Rahul";
//     callback(name);
// }
// userInput(greeting);



//Map array ka ak method h jisme ak callback pass hota h or kuch operation perform hote h


// const marks = [50,60,70];
// const updateMarks = marks.map((num) => {
//     return num + 5;
// })
// console.log(updateMarks)
// console.log(marks)



//filter array ka ak method h jisme ak callback pass hota h or kuch operation perform hote h

//condition true h to new array me add hoga
//array ki length change ho sakti h map ke under nahi hoti h

// const classMarks = [30,40,50,60,70,95]
// const passStudent = classMarks.filter((mark) =>{
//     return mark >40
// })
// console.log(passStudent)


// quess---mujhe filter ki help se even num
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const evenNumbers = numbers.filter((num) =>{
//     return num % 2 === 0;
// })
// console.log(evenNumbers)

//reduce array ka ak method h jisme ak callback pass hota h or kuch operation perform hote h
//array ke sare element ko ek single value me convert kar deta h




//reduce 
//int , accumlator , current valure theen para pr kaam krta h

// array.reduce((accumulator,currentValue) => {
//     return total
// },initialValue)

//  const nums = [10,20,30]
// const total = nums.reduce((accumulator,currentValue) =>{
//     return accumulator + currentValue;

// },30)
// console.log(total)



//find in array 
const ids = [101 , 102 , 103,104]
const target = ids.find((id) => {
    return id === 103;
})
console.log(target)
//agr 102 nahi mila to undefined return hoga
// agr copy hoga to ak hi print krega


//some array ka ak method h jisme ak callback pass hota h or kuch operation perform hote h
// const marks = [45,50,30,80]
// const isAnyTooper = marks.some(m => m>90)
// const isAllTooper = marks.every(m => m>30)
// console.log(isAnyTooper)
// console.log(isAllTooper)


//sort array ka ak method h jisme ak callback pass hota h or kuch operation perform hote h
// const names = ["Rahul","Amit","Suresh","Ramesh"]
// names.sort()
// console.log(names)

//flat plate


const cart = [
    { name: "Laptop", price: 20000},
    { name: "Mouse", price: 300},
    { name: "Keyboard", price: 300}
];
const totalPrice = cart.reduce((total, item) => {
    return total + item.price;
}, 0);
console.log(totalPrice*0.8);



const result = smartPhones
    .filter((phone) => phone.rating >= 4.5)
    .map((phone) => {
        return {
            phoneName: phone.name,
            rating: phone.rating,
            price: phone.price * 0.8
        };
    });

console.log(result);