/// Q.1. Do the below programs in anonymous function & IIFE

//1.Print odd numbers in an array
//2.Convert all the strings to title caps in a string array
//3.Sum of all numbers in an array
//4.Return all the prime numbers in an array
//5.Return all the palindromes in an array
//6.Return median of two sorted arrays of same size
//7.Remove duplicates from an array
//8.Rotate an array by k times 

let arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

//1.Print odd numbers in an array

let resultArray =(function (arrNumber){

    return (arrNumber.filter((item) =>{

        return item % 2 !== 0

    }))
})(arrNumber);

console.log("All odd numbers in an array: " + resultArray)


//2.Convert all the strings to title caps in a string array

let stringArray = ["Sudhakar", "is", "a", "Web", "developer"]

let resultstring = (function (stringArray) {

    return (stringArray.map((item) => {

        return item.toUpperCase()

    }))
})(stringArray);

console.log("All upper case string in an array: " + resultstring)

//3.Sum of all numbers in an array

let resultSumArray = (function (arrayNumber) {

    return (arrNumber.reduce((currentTotal, item) => {

        return currentTotal + item

    }, 0))
})(arrNumber);

console.log("Sum of numbers in an array: " + resultSumArray)

//4.Return all the prime numbers in an array

let resultPrimeArray = (function (arrayNumber) {

    return (arrNumber.filter((item) => {

        for (i = 2; i < item; i++) {
            if (item % i === 0)
                return false
        }

        return true

    }))
})(arrNumber);

console.log("Prime numbers in an array: " + resultPrimeArray)

//5.Return all the palindromes in an array

let resultPallindromeArray = (function (arrNumber) {

    return (arrNumber.filter((item) => {

        let temp = item + ""

        if ((temp.split('').reverse().join('')) === item + "")
            return true

        return false

    }))
})(arrNumber);

console.log("Pallindrome numbers in an array: " + resultPallindromeArray)

//6.Return median of two sorted arrays of same size

let arr1 = [1, 2, 3, 4, 5, 6, 7]
let arr2 = [8,9,10,12,16,17,18]

let resultMedian = function (arr1, arr2) {

    let result = []

    let lenArr1 = arr1.length

    let lenArr2 = arr2.length

    if (lenArr1 % 2 === 0) {

        console.log("Median of array 1: " + arr1[lenArr1 / 2])

    } else {

        console.log("Median of array 1: " + arr1[(lenArr1 + 1) / 2])
    }

    if (lenArr2 % 2 === 0) {

        console.log("Median of array 2: " + arr2[lenArr2 / 2])

    } else {

        console.log("Median of array 2: " + arr2[(lenArr2 + 1) / 2])
    }

    return
}(arr1, arr2)

//7.Remove duplicates from an array

let arrayDuplicates = [1, 2, 3, 4, 5, 10, 11, 12, 10, 1, 2, 6, 7, 3, 9]

let resultDuplicates = ((arrayDuplicates, index) => {

    return [...new Set(arrayDuplicates)]

})(arrayDuplicates)

console.log("Array without Duplicates " + resultDuplicates)

//8.Rotate an array by k times 

let arrforrotation = [0, 1, 5, 6, 7, 9]
let resultArrayShifted = ((array, k) => {

    for (let i = 0; i < k; i++) {
        let temp = array.shift()
        array.push(temp)
    }
    return array

})(arrforrotation, 3)

console.log("Array roatated k times: " + resultArrayShifted)

/// Q.3. Do the below programs in arrow functions.
// Print odd numbers in an array
// Convert all the strings to title caps in a string array
// Sum of all numbers in an array
// Return all the prime numbers in an array
// Return all the palindromes in an array 

//1. Print odd numbers in an array

let numberArr = [1, 2, 7, 4, 9, 6, 98, 128, 351]

console.log("Odd Numbers in Number Array are: " + numberArr.filter((item) => {

    return item % 2 !== 0

}))

//2.Convert all the strings to title caps in a string array

let stringArray1 = ["Sudhakar", "is", "a", "Great", "Chess","player"]

stringArray = stringArray1.map((item) => {

    return item.toUpperCase()

})

console.log("Converted String Array is: " + stringArray)

//3.Sum of all numbers in an array
//using numArray Defined Above

let sum = numberArr.reduce((currentTotal, item) => {

    return currentTotal + item

}, 0)

console.log("Sum of elements in Number Array: " + sum)

//4.Return all the prime numbers in an array

console.log("Prime Number is Array are: " +
    numberArr.filter((item) => {

        for (let i = 2; i < item; i++) {
            if (item % i === 0)
                return false;
        }
        return item !== 1;

    }))

//5.Return all the palindromes in an array 

let arrayPallindrome = [111, 102, 505, 323, 612, 776, 707, 121]

console.log("Pallindrome Numbers in array are: " +
    arrayPallindrome.filter((item) => {

        let temp = item + "";

        if (temp.split('').reverse().join('') === item + "")
            return true

        return false

    }))