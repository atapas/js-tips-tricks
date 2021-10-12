// Using for-loop
console.log('**** 1. Using for-loop ****');
{
  let merge = (first, second) => {
    for (let i = 0; i < second.length; i++) {
      first.push(second[i]);
    }

    return first;
  };

  let merged = merge([1, 2, 3], [4, 5, 6]);
  console.log(`merged using for loop is ${JSON.stringify(merged)}`);

  merged = merge(merge([1, 2, 3], [4, 5, 6]), [7, 8, 9]);
  console.log(`merged using for loop: ${JSON.stringify(merged)}`);
}

// Using Spread Operator
console.log('**** 2. Using Spread Operator ****');
{
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];

  // Merge arrays
  let merged = [...arr1, ...arr2];
  
  console.log(`input array ${JSON.stringify(arr1)}`); // [1,2,3]
  console.log(`input array ${JSON.stringify(arr2)}`); // [4,5,6]
  console.log(`merged using spread operator: ${JSON.stringify(merged)}`); // [1,2,3,4,5,6]
  

  // let merged = [...arr1, ...arr2, ...arr3];
}

// Using the concat() method
console.log('**** 3. Using concat() Method ****');
{
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];

  // Merge arrays
  let merged = arr1.concat(arr2);

  console.log(`input array ${JSON.stringify(arr1)}`); // [1,2,3]
  console.log(`input array ${JSON.stringify(arr2)}`); // [4,5,6]
  console.log(`merged using concat() method: ${JSON.stringify(merged)}`); // [1,2,3,4,5,6]
  

  // let merged = [].concat(arr1, arr2);
}

// Spread vs Concat
console.log('**** 3a. Spread vs Concat ****');
{
  let arr1 = [1, 2, 3];
  let name = 'Tapas';

  console.log(`input array ${JSON.stringify(arr1)}`); // [1,2,3]
  console.log(`input string ${name}`); // [4,5,6]

  const mergedUsingSpread = [...arr1, ...name];
  const mergedUsingConcat = arr1.concat(name);

  console.log(`mergedUsingSpread: ${JSON.stringify(mergedUsingSpread)}`);
  console.log(`mergedUsingConcat: ${JSON.stringify(mergedUsingConcat)}`);
}

// Using push() method
console.log('**** 4. Using push() Method ****');
{
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];

  // Merge arrays
  let merged = arr1.push(...arr2);

  console.log(`merged using push() method: input array array1 changed to: ${JSON.stringify(arr1)}`); // [1,2,3]
  console.log(`input array array2 dodn't change: ${JSON.stringify(arr2)}`); // [4,5,6]

  arr1 = [1, 2, 3];
  arr2 = [4, 5, 6];
  arr3 = [7, 8, 9];

  // Merge arrays
  arr1.push(...[...arr2, ...arr3]);
}

// Using reduce() method
console.log('**** 5. Using reduce() Method ****');
{
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];

  let merged = arr2.reduce((arr = [], item) => {
    arr.push(item);
    return arr;
  }, arr1);

  console.log(`input array ${JSON.stringify(arr1)}`); // [1,2,3]
  console.log(`input array ${JSON.stringify(arr2)}`); // [4,5,6]
  console.log(`merged using reduce() method: ${JSON.stringify(merged)}`); // [1,2,3,4,5,6]
}
