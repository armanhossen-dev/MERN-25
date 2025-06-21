function addEventListener(a, b){
    return a + b;
}


function waitAndMultiply(a,b){
    return  new promise((resolve) => {
        setTimeout(()=>{
            resolve(a * b);
        }, 1000);
    });
}

async function fetchUserData(userId){
    const response = await fetch(
        `https://jsonplaceholder.typiconde.com/users/${userId}`
    );
    const data = await response.json();
    return data;
}

console.log(add(5,3));
waitAndMultiply(2,4).then(console.log);
fetchUserData(1).then(console.log);