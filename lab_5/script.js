const volume = a => b => c => a * b * c;

console.log(volume(2)(3)(4));

const volumeWithA2 = volume(2);

console.log(volumeWithA2(3)(4)); 
console.log(volumeWithA2(5)(6)); 
console.log(volumeWithA2(7)(8)); 

var a = 1;
window.a = 33;
console.log(a);