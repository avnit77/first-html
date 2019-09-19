function showAlert() {
    alert('Why would you click a button when you have no idea what it does? You are so hacked.');
}

function logHello() {
    console.log('Hello')
}

const shark ={
    name: 'jaws',
    color: 'grey',
    weight: 500,
}

console.log(shark.name);
console.log(shark.color);

if(shark.name === 'jaws') {
    console.log('dun dun');   
} else if (shark.name === 'jaws 2') {
    console.log('dun dun');
} else {
    console.log('dun dun dun dun dun');
}

// count up to five
const veggies = ['carrot', 'potato', 'turnip']
for (let i = 0; i <= 5; i++) 
if (i === 1) {
    console.log(veggies[i])
}

