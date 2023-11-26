// 🎇🎇😍
// Imagine you have an array of objects representing different users. Each user object has properties like name, age, and isActive.

// Your task is to write a function filterUsers that takes in this array of users and returns an object containing two properties:

// An array of active users (where isActive is true).
// An object where keys are age groups ("under 30", "30-50", and "over 50"), and values are arrays containing users within those age groups.



const filterUsers = (user) => {

    const activeUser = user.filter((activeuser) => activeuser.isActive);



   const ageGroups = user.reduce((groups, user) => {
    let agegroup;
    if(user.age < 30){
        agegroup = "under 30";
    }else if(user.age >= 30 && user.age <= 50){
        agegroup = "under 30-50";
    }else {
        agegroup = "over 50";
    }

    if(!groups[agegroup]){
        groups[agegroup] = [];
    }

    groups[agegroup].push(user)



    return groups;



   }, {})

   

    return {activeUser, ageGroups};

}

//   // Example usage:
  const users = [
    { name: 'Alice', age: 25, isActive: true },
    { name: 'Bob', age: 30, isActive: false },
    { name: 'Charlie', age: 40, isActive: true },
    { name: 'David', age: 55, isActive: true },
    { name: 'Eve', age: 20, isActive: false },
    // ... more users
  ];


const filteredData =  filterUsers(users);

console.log(filteredData);


  
  
  
  
  
  
  
  