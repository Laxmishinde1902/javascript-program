const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45];
console.log(arrayRollNumbers);

console.log(`=================== Reverse the array ======================`);
    
    const arrayReverse = arrayRollNumbers.reverse();
    console.log(`After Reverse the array: ${arrayReverse}`);

console.log(`================= Use the sort() method =====================`);

    const arraySort = arrayRollNumbers.sort();
    console.log(`After Sorting the Array : ${arraySort}`);

console.log(`=============== Sort the array by ascending order =============`);

    const arrayAscending = arrayRollNumbers.sort((n1 , n2) =>{
        return n1 > n2 ? 1 : -1
    })
    console.log(`Array in Ascending order : ${arrayAscending}`);


console.log(`============= Remove duplicate from array =====================`);

    function removeDuplicates(data){
        return [...new Set (data)]
    }
    console.log(removeDuplicates(arrayAscending));



    