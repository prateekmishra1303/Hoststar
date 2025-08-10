// code for import

import navbar from './components/navbar.js';

let navbar_div = document.getElementById('navbar');
navbar_div.innerHTML = navbar();

import appendMovies from './scripts/append.js';

let input_box = document.getElementById('movie_name');

input_box.addEventListener('input', function(){
    debounce(searchMovies, 1000);
})

let search_div =document.getElementById('rhs');
search_div.style.display='none';
// code to create carousal and changing images on the carousal

let carousel_div = document.getElementById("carousel");


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// old carousel function

// function carousel(){

//     let images =["https://i.ytimg.com/vi/sL3jNjriKXE/maxresdefault.jpg","https://peepingmoon-cdn.sgp1.digitaloceanspaces.com/engpeepingmoon/190822115134-62ff2bee90983akshay.jpg","https://i.ytimg.com/vi/b6F7G104_ec/maxresdefault.jpg"];

//     let imgElement = document.createElement('img');

//     let i=1;

//     imgElement.src = images[0];
//     carousel_div.append(imgElement);

//     setInterval( function(){
        
//         if (i=== images.length){
//             i = 0;
//         }

//         imgElement.src = images[i];
//         carousel_div.append(imgElement);
//         i++;
//     }, 3000)
// }


// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// new Carousel function 

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


// code for fetching data and rendering on screen of search page

// key: d7e5e601


// Handling search movies using async await
 async function searchMovies(){
    
let loader_div = document.getElementById('loader_div');
loader_div.style.display = 'block';

let movie_name =document.getElementById("movie_name").value;


    try{
        let response = await fetch(`https://www.omdbapi.com/?apikey=d7e5e601&s=${movie_name}`);
        
        let data = await response.json();
        console.log(data);

        let actual_data = data.Search;

        appendMovies(actual_data);
    }

    catch(err){
        console.log(err);
    }

  }


 //appending movies

//  function appendMovies(data){

//    let loader_div =document.getElementById('loader_div');
//     loader_div.style.display = 'none';

//     let movies_div = document.getElementById('movies');

//     movies_div.innerHTML = null;

//     data.forEach(function(el){
//         let div = document.createElement('div');

//         let img = document.createElement('img');
//         img.src = el.Poster;

//         let name =document.createElement('p');
//         name.innerText = el.Title;

//         div.append(img, name);
//         movies_div.append(div);
//     })
//  }



  // code for debouncing part



let id;

  function debounce(func, delay){

    if(id){
        clearTimeout(id)
    }


    id = setTimeout(function(){
        func();
    }, delay);
  }




// Handling searchMovies using .then and .catch

// response
//     .then(function(success){

//         let data = success.json();

//         data
//             .then(function(success){
//                 console.log('success:', success);
//             })
//             .catch(function(success){
//                     console.log('error', error);
//             });

//     })
//     .catch(function(error){
//         console.log('error:', error);
//     });
// }
 