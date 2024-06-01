let apiUrl = 'https://jsonplaceholder.typicode.com/users'
let container = document.querySelector('.container')


async function getData() {
    //get data 
    let data = await fetch(apiUrl)
    let users = await data.json()
    console.log(typeof users)
    console.log(users)
    
    for(let i = 0; i < users.length; i++){
        // console.log(users[i]);

        // html create
        let content__item = document.createElement('div')
        content__item.classList.add('content__item')
        container.append(content__item)

        // img  person img
        let img = document.createElement('img')
        img.classList.add('img')
        img.src = 'images/person-image.jpg'
        content__item.append(img)
        
        // name h3
        let name = document.createElement('h4')
        name.classList.add('name')
        name.innerText = 'name: '
        name.innerText += users[i].name
        content__item.append(name)

        // id p
        let id = document.createElement('p')
        id.innerText = 'id: '
        id.innerText += users[i].id
        id.classList.add('id')
        content__item.append(id)
        
        // username p
        let username = document.createElement('p')
        username.innerText = 'username: '
        username.innerText += users[i].username.toLowerCase()
        username.classList.add('username')
        content__item.append(username)
        
        // email p
        let email = document.createElement('p')
        email.innerText = 'mail: '
        email.innerText += users[i].email.toLowerCase()
        email.classList.add('email')
        content__item.append(email)

        // website p
        let web__site = document.createElement('p')
        web__site.innerText = 'website: '
        web__site.innerText += users[i].website.toLowerCase()
        web__site.classList.add('web__site')
        content__item.append(web__site)
        
        // console.log(container)
    }
}
getData()