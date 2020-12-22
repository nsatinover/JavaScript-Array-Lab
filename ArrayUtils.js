class ArrayUtils{

    isEmpty(array){
        return array.length < 1;
    }

    append(original, value){
        return original.append(value);
    }

    clone(original){
        return original.map( (x) => x);
    }

    subArray(original, from, to){
        return original.subArray(from + 1, to);
    }

    equals(arr1, arr2){
        return JSON.stringify(arr1) === JSON.stringify(arr2);
    }

    fill(original, value){
        return original.forEach(a => {
            a = value;
        });
    }

    indexOf(original, value){
        return original.indexOf(value);
    }

    remove(original, value){
        return original.splice(
            original.indexOf(value), 1
            );
    }

    reverse(original){
        return original.reverse;
    }
    
}