let posts = fetch("https://jsonplaceholder.ir/posts");
let users = fetch("https://jsonplaceholder.ir/users");
let fullname;

posts.then((value) => {
    if (value.status == 200) {
        return value.json();
    }
}).then((val) => {


    console.log(getAuther());
    //console.log(c);
    val.forEach((value, key) => {
        //console.log(value);
    });
});


function getAuther() {

    users.then((value) => {
        return value.json();
    }).then((value) => {
        value.forEach((a, b) => {
            if (a.id == 1) {
                fullname = a.name;
            }
            return fullname;
        });
        return fullname;
    });
    return fullname;

}

function createPost(value) {

    let post = `

            <div>
                
                <header class="">${value.title}</header>
                <h2>${value.title}</h2>
                <article>${value.body}</article>
            </div>
        
        `


}