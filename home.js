// code for import

import navbar from './components/navbar.js'

let navbar_div = document.getElementById('navbar');
navbar_div.innerHTML = navbar();

import appendMovies from './scripts/append.js';

// code to create carousal and changing images on the carousal

let carousel_div = document.getElementById("carousel");

function carousel(){

    let images =["https://i.ytimg.com/vi/sL3jNjriKXE/maxresdefault.jpg","https://peepingmoon-cdn.sgp1.digitaloceanspaces.com/engpeepingmoon/190822115134-62ff2bee90983akshay.jpg","https://i.ytimg.com/vi/b6F7G104_ec/maxresdefault.jpg"];

    let imgElement = document.createElement('img');

    let i=1;

    // imgElement.src = images[0];

    imgElement.src = images[0];
    imgElement.style.position = 'absolute';
    imgElement.style.top = 0;
    imgElement.style.left = 0;
    imgElement.style.width = '100%';
    imgElement.style.height = '100%';
    imgElement.style.transition = 'transform 0.5s ease-in-out';

    carousel_div.style.position = 'relative'; // make sure the parent is positioned
    carousel_div.style.overflow = 'hidden';
    carousel_div.appendChild(imgElement);



    setInterval( function(){
        
        // if (i=== images.length){
        //     i = 0;
        // }

        // imgElement.src = images[i];
        // carousel_div.append(imgElement);
        // i++;

        let img2 = document.createElement('img');
        img2.src = images[i];
        img2.style.position = 'absolute';
        img2.style.top = 0;
        img2.style.left = 0;
        img2.style.width = '100%';
        img2.style.height = '100%';
        img2.style.transform = 'translateX(100%)';
        img2.style.transition = 'transform 0.5s ease-in-out';

        carousel_div.appendChild(img2);

        // trigger sliding
        setTimeout(() => {
            imgElement.style.transform = 'translateX(-100%)';
            img2.style.transform = 'translateX(0%)';
        }, 50)

        // remove old image after animation
        setTimeout(() => {
            carousel_div.removeChild(imgElement);
            imgElement = img2;
        }, 600);

        i = (i + 1) % images.length;
    }, 3000)
}

carousel();


// code to create static data for the webbapp (as till now we had not learned how to fetch data or API)

const movies = [
    {
    Poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvJzjaIlCRJrYXjfzos5sTuokzFAiUeFpEmw&s",
    Title: "Doctor Strange"
    },

    {
        Poster: "https://image.tmdb.org/t/p/original/hEqw9swA8gFJuNjgWYEypwZfkZg.jpg",
        Title: "Free Guy"
    },

    {
        Poster: "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/c/b/d/small-pathan-shah-rukh-khan-bollywood-hindi-movie-poster-small-original-imagmt3dgxh7avyg.jpeg?q=20&crop=false",
        Title: "pathaan"
    },

    {
        Poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRshxazFUfQi8coAJltpM97EQxA2hOdTj8s8Q&s",
        Title: "Mufasa"
    },

    {
        Poster: "https://image.tmdb.org/t/p/original/ctOoWXqezfD7krv6Tw0l1nZJCOF.jpg",
        Title: "Kaagaz"
    },

    {
        Poster: "https://wallpapercave.com/wp/wp8807411.jpg",
        Title: "Hichki",
    },
];

// code to create and append movie images on the webpage (this has included creating different tags like div, img, p for the movie grid)

// function appendMovies(data){

//     let loader_div =document.getElementById('loader_div');
//      loader_div.style.display = 'none';
 
//      let movies_div = document.getElementById('movies');
 
//      movies_div.innerHTML = null;
 
//      data.forEach(function(el){
//          let div = document.createElement('div');
 
//          let img = document.createElement('img');
//          img.src = el.Poster;
 
//          let name =document.createElement('p');
//          name.innerText = el.Title;
 
//          div.append(img, name);
//          movies_div.append(div);
//      })
//   }

//appendMovies(movies);



// code for sort L to H and H to L buttons

document.getElementById("sortLH").addEventListener("click",function(){

     movies.sort((a,b) => a.rating - b.rating);
     appendMovies(movies);

});


document.getElementById("sortHL").addEventListener("click",function(){

    movies.sort((a,b) => b.rating - a.rating);
    appendMovies(movies);

});


// Code for loader



let getmeData = new Promise (function (resolve, reject){

    setTimeout(function(){

        let data = movies;
        
        if(data != null){
            resolve(data);
            console.log(data);
        }else{
            reject ('ERR: Server could not get movies data');
        }
    }, 3000);
 });

 console.log(getmeData);

getmeData
    .then(function (success){
       appendMovies(success);
    })
    .catch(function(error){
        console.log('Error', error);
    })

   



  