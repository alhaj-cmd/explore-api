// step 2 
function loadClient () {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data =>calldata(data))
}

function calldata(data){
    const postItem =document.getElementById('user-data');
    for(const user of data){
        console.log(user);
        const postdiv =document.createElement('div');
        postdiv.classList.add('post'); 
        postdiv.innerHTML=`
        <h3>user-${user.userId}</h3>
        <h4>post:${user.title}</h4>
        <p>Post Description${user.body}</p>
        `;
      postItem.appendChild(postdiv)
    }

}
