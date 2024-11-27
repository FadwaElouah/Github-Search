const btn = document.querySelector(".btn")
const input = document.querySelector(".input")
const user = document.querySelector(".user")
const userName = document.querySelector(".userName")
const date = document.querySelector(".Date")
const Bio = document.querySelector(".Bio")
const repoTotal = document.querySelector(".repoTotal")
const followersTotal = document.querySelector(".followersTotal")
const followingTotal = document.querySelector(".followingTotal")
const userLocation = document.querySelector(".location")
const webSite = document.querySelector(".webSite")
const twitter = document.querySelector(".twitter")
const company = document.querySelector(".company")
let imgs = document.getElementById('img')
let photo = document.getElementById('photo')


btn .addEventListener('click',function(){
    const url = `https://api.github.com/users/${input.value}`
    async function getUrl(){
      const response = await fetch(url);
      const data = await response.json();
      const dataDate = data.created_at.slice(0,data.created_at.length - 10);
       
      imgs.src = data.avatar_url;
      photo.appendChild(imgs);

      user.innerHTML = data.name
      userName.innerHTML =`@${data.login}`
      date.innerHTML =`joined ${dataDate}`
      repoTotal.innerHTML = data.public_repos;
      followersTotal.innerHTML = data.followers;
      followingTotal.innerHTML = data.following
     
      userLocation.innerHTML = data.location === "" || data.location === null ? "No Location" : data.location
      webSite.innerHTML = data.blog === "" || data.blog === null ? "No web Site" : data.blog
      twitter.innerHTML = data.twitter_username === "" || data.twitter_username === null ? "No twitter" : data.twitter_username
      company.innerHTML = data.company === "" || data.company === null ? "No company" : data.company
      Bio.innerHTML = data.bio === "" || data.bio === null ? "This profile has no  bio" : data.bio
      
      input.value ="";

    }
    getUrl();
})

let light = document.querySelector('.light');
let dark = document.querySelector('.dark')
const back = document.querySelectorAll("#back")
const follow = document.querySelectorAll('.follow')
const text = document.querySelectorAll('.text')

light.addEventListener('click',()=>{
    dark.classList.remove('hidden')
    light.classList.add('hidden')
 
    back.forEach(element => {
        element.style.backgroundColor = "#DBD3D3";
    });
    follow.forEach(element =>{
        element.style.backgroundColor="white"
      
    })
    text.forEach(element =>{
        element.style.color= "gray"
    })
})
dark.addEventListener('click',()=>{
    light.classList.remove('hidden')
    dark.classList.add('hidden')
 
    back.forEach(element => {
        element.style.backgroundColor = "#1e2a47";
    });
    follow.forEach(element =>{
        element.style.backgroundColor="#141d2f"
      
    })
    text.forEach(element =>{
        element.style.color= "white"
    })
})

