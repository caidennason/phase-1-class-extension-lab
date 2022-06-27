// Your code here
class Polygon{
    constructor(array){
        this.array = array
    }
    get countSides(){
        return this.array.length
    }
    get perimeter(){
        let sum = 0
        let arr = this.array
        for (let n of arr){
        sum += n
        }
        return sum
    }
}

class Triangle extends Polygon{
    get isValid(){
        let arr = this.array
        if (arr[0] + arr[1] <= arr[2] || arr [1] + arr[2] <= arr[0] || arr[2] + arr[0] <= arr[1]){
            return false
        } else {
            return true
        }
    }
}

class Square extends Polygon{
    get isValid(){
        let arr = this.array
        for (let i = 0; i < arr.length; i ++){
            if (arr[i] !== arr[i + 1]){
                return false
            } else {
                return true
            }
        }
    }
    get area(){
        let arr = this.array
        let test = arr[0] * arr[1]
        return test
}
}


// if the sum of the array divided by length of array = 0, return true