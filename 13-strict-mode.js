const array = [20, 50, 60, 90];
const cloneArray = [...array]
console.log(cloneArray);


const arrayNum = [11,3,4,11,4,7,3];
function removeDuplicates(data){
    return [...new Set(data)]
}
console.log(removeDuplicates(arrayNum));



