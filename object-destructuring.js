
// 1. Destructure and pick a property
{
    const user = { 
        'name': 'Alex',
        'address': '15th Park Avenue',
        'age': 43
    }

    const { name } = user;
    console.log(name);
}

// 2. Declaration Gotcha
{
    const user = { 
        'name': 'Alex',
        'address': '15th Park Avenue',
        'age': 43
    }

    { name  } = user // Uncaught SyntaxError: Unexpected token '='

    let name;
    { name  } = user; // user // Uncaught SyntaxError: Unexpected token '='

    ({ name  } = user)
    console.log(name); // Alex

}

// 3. Desctructure and pick multiple properties
{
    const user = { 
        'name': 'Alex',
        'address': '15th Park Avenue',
        'age': 43
    }

    const { name, age } = user;
    console.log(name, age);
}

// 4. Assign new variable and default value
{
    const user = { 
        'name': 'Alex',
        'address': '15th Park Avenue',
        'age': 43
    }
    const {name, age, salary=123455} = user;
    console.log(name, age, salary)
}

// 5. Destructure and add aliases
{
    const user = { 
        'name': 'Alex',
        'address': '15th Park Avenue',
        'age': 43
    }

    const { address: permanentAddress } = user;
    console.log(permanentAddress);
}

// 6. Destructuring nested objects
{
    const user = { 
        'name': 'Alex',
        'address': '15th Park Avenue',
        'age': 43,
        'department':{
            'name': 'Sales',
            'Shift': 'Morning',
            'address': {
                'city': 'Bangalore',
                'street': '7th Residency Rd',
                'zip': 560001
            }
        }
    }

    const { department } = user; // {name: "Sales", Shift: "Morning", address: {…}}

    const { department: { address } } = user; // {city: "Bangalore", street: "7th Residency Rd", zip: 560001}

    const { department: { address: { city } } } = user; // Bangalore
}

// 7. Dynamic name property
{
    const user = { 
        'name': 'Alex',
        'address': '15th Park Avenue',
        'age': 43
    }

    const getValue = key => {
        const { [key]: returnValue } = user;   
        return returnValue;
    }

    getValue('name') // Alex's
    getValue('age') // 43
}

// 8. Destructuring into Function Parameter
{
    const user = { 
        'name': 'Alex',
        'address': '15th Park Avenue',
        'age': 43
    }

    logDetails(user); // Alex is 43 year(s) old!

    function logDetails({name, age}) {
        console.log(`${name} is ${age} year(s) old!`)
    }
}

// 9. Destructure function return
{
    const getUser = () => {
        return{ 
            'name': 'Alex',
            'address': '15th Park Avenue',
            'age': 43
        }
    }

    const { name, address, age } = getUser();

    console.log(name, age, address);
}

// 10. Destructuring in loops
{
    const users = [{ 
        'name': 'Alex',
        'address': '15th Park Avenue',
        'age': 43
    },
    { 
        'name': 'Bob',
        'address': 'Canada',
        'age': 53
    },
    { 
        'name': 'Carl',
        'address': 'Bangalore',
        'age': 26
    }];

    for(let { name, age } of users) {
        console.log(name)
    }
}

// 11. Destructure console.log 
{
    const { log, warn, error } = console;
}

// 12. Create a clone of an object
{
    const user = { 
        'name': 'Alex',
        'address': '15th Park Avenue',
        'age': 43
    }

    const clone = {...user} // {name: "Alex", address: "15th Park Avenue", age: 43}

    clone === user; // false
}

// 13. Add properties to an object in Immutable way
{
    const user = { 
        'name': 'Alex',
        'address': '15th Park Avenue',
        'age': 43
    }

    const updatedUser = {...user, salary:12345}; // {name: "Alex", address: "15th Park Avenue", age: 43, salary: 12345}

    console.log(user); // {name: "Alex", address: "15th Park Avenue", age: 43}
}

// 14. Update an object in Immutable way
{
    const user = { 
        'name': 'Alex',
        'address': '15th Park Avenue',
        'age': 43
    }

    const updatedUser = {...user, age:56}; // {name: "Alex", address: "15th Park Avenue", age: 56}

    console.log(user); // {name: "Alex", address: "15th Park Avenue", age: 43}
}

// 15. Update Nested objects
{
    const user = { 
        'name': 'Alex',
        'address': '15th Park Avenue',
        'age': 43,
        'department':{
            'name': 'Sales',
            'Shift': 'Morning',
            'address': {
                'city': 'Bangalore',
                'street': '7th Residency Rd',
                'zip': 560001
            }
        }
    }

    {...user, department: {'number': 006}} // department replaced

    {...user, department: {...user.department, 'number': 006}} // Right way
}

// 16. Combine two objects - Shallow Merge
{
    const user = { 
        'name': 'Alex',
        'address': '15th Park Avenue',
        'age': 43
    }

    const department = {
        'name': 'Sales',
        'Shift': 'Morning'
    }

    const completeDetails = {...user, ...department};

    console.log({completeDetails});
}

// 17. Rest operator in Object Destructuring
{
    const user = { 
        'name': 'Alex',
        'address': '15th Park Avenue',
        'age': 43
    }
    
    const {name, ...rest} = user;
    console.log(name, rest);

    const {age, ...rest} = user;
    console.log(age, rest);
}

