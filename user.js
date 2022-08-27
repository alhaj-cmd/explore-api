function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data =>userId(data))
}
function userId(data){
    const ul=document.getElementById('user-data');
    for(const user of data){
    console.log(user.name);
    const li =document.createElement('li');
    li.innerText= user.name;
    ul.appendChild(li);
 }
 }

