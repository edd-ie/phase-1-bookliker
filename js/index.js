document.addEventListener("DOMContentLoaded", function() {

    let list  = document.querySelector('#list')
    let show = document.querySelector('#show-panel')
    
    fetch('http://localhost:3000/books')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        for (book of data){
            let title = document.createElement('li');
            title.textContent = book.title
            list.appendChild(title)
        }

        let col = Array.from(list.children)
        console.log(col)
        for (let i = 1; i < col.length; i++){
            col[i].addEventListener('click',()=>{
                while (show.hasChildNodes()) {
                    show.removeChild(show.firstChild);
                }

                let thumbnail = document.createElement('img');
                let details = document.createElement('p');
                let userList = document.createElement('ul');

                let likes = document.createElement('p');
                likes.textContent = `likes: ${data[i].users.length}`;
                

                let like = document.createElement('button');
                like.textContent = 'Like';

                show.appendChild(thumbnail);
                show.appendChild(details);
                show.appendChild(userList);
                show.appendChild(likes);
                show.appendChild(like);

                thumbnail.src = data[i].img_url;
                details.textContent = data[i].description;

                for ( x of data[i].users){
                    let user = document.createElement('li');
                    userList.appendChild(user);

                    user.textContent = x.username
                }

                like.addEventListener('click',()=>{
                    let hold = parseInt(data[i].users.length) + 1
                    likes.textContent = `likes: ${hold}`;
                })

            })
        }

    })



});

