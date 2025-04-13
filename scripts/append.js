function appendMovies(data){

    let loader_div =document.getElementById('loader_div');
     loader_div.style.display = 'none';
 
     let movies_div = document.getElementById('movies');
 
     movies_div.innerHTML = null;
 
     data.forEach(function(el){
         let div = document.createElement('div');
 
         let img = document.createElement('img');
         img.src = el.Poster;
 
         let name =document.createElement('p');
         name.innerText = el.Title;
 
         div.append(img, name);
         movies_div.append(div);
     })
  }

  export default appendMovies;