/* 
findByIdAndUpdate(id, updateObject, arr)
Given an id, an object that has keys with corresponding updated values, and an array of objects
Find the object by "id" key that matches the given id value and then update that object's
keys with the provided new values.
Return the updated object, or null if no object was found

check 
someObj.hasOwnProperty("key")
Object.keys(someObj) // returns [an array of "keys"]
*/

const students = [
    {
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false
    },
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false
    }
];

function findByIdAndUpdate(id, updatedVals, collection) { 

    // Create an array of keys in updated Vals
    const updatedKeys = Object.keys(updatedVals)
    // parse thru collection
    for(let someObjElement of collection){
        // In loop check for object with matching ID's
        if(someObjElement.id === id){
            // Once we find ID's we can run logic to change 
        for(let key of updatedKeys){
            if(someObjElement.hasOwnProperty(key)){
                someObjElement[key] = updatedVals[key]
            }
            // Check to see if the keys is in the last index of the array of keys
            // If true return object
            // if(key === updatedKeys[updatedKeys.length-1]){
            // }
        }
        return someObjElement

        }
    }
    return null;

}

console.log(findByIdAndUpdate(3, { redBeltStatus: true }, students));
console.log(findByIdAndUpdate(1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students));
console.log(findByIdAndUpdate(5, {}, students));