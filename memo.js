function crear() {
 
    var circle = "https://upload.wikimedia.org/wikipedia/commons/3/31/Circle_Burgundy_Solid.svg"
    var triangle = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1OslWm00or8KZOR5W-XltcMAYGRURGZg2nxixBl6zWZkbsi4u"
    var square = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSs1V_X8sTQx8_vp8Yz2j76IK-jOWhD_Teo1pRnytL77mv1pqCm"
    var star = "https://www.freeiconspng.com/uploads/star-icon-28.png"
    var pentagon = "https://img.favpng.com/5/6/4/angle-geometric-shape-pentagon-line-png-favpng-DnZ0qqKXT6QKC5tgXRgRBVkJQ.jpg"
    var hexagon = "https://www.freepngimg.com/thumb/hexagon/6-2-hexagon-png-clipart-thumb.png"
    var octaedro = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwtpcYXFhZ30Iwoatzjj9c44C2i5nR0QtFRRTY-QUQ7ITduZHR"
    var icosaedro = "http://agrega.juntadeandalucia.es/repositorio/14032012/75/es-an_2012031413_9123338/NDOIAND-20070912-0051/Trabajo/tema7/imagenes/icosaedro.gif"
 
    var shapes_array = [circle, triangle, square, star, pentagon, hexagon, octaedro, icosaedro]; // Array de posibilidades
 
    var random_shape = shapes_array[Math.floor((Math.random() * shapes_array.length))]; // => Elige un elemento random de shapes_array string
 
    var ids_array = Array.from({ length: shapes_array.length * 2 }, (v, k) => k + 1); // 16 => [1,2,3,4...16] ids de divs
 
    var random_id = ids_array[Math.floor((Math.random() * ids_array.length))]; // => Elige un elemento random de id_array
 
    var currentIndex = shapes_array.indexOf(random_shape);
 
    for (var i = 0; i < 8; i++) {
 
        for (var j = 0; j < 2; j++) {
            document.getElementById(random_id).src = random_shape; // 3
            // console.log(random_shape);
            ids_array.splice(ids_array.indexOf(random_id), 1);
            // console.log(random_id);
            // console.log(ids_array);

            random_id = ids_array[Math.floor((Math.random() * ids_array.length))];
        }
        // QUITAR ELEMENTO DE shapes_array
        shapes_array.splice(currentIndex, 1);
 
        // Elige un random de shapes_array
        random_shape = shapes_array[Math.floor((Math.random() * shapes_array.length))];
 
        // Índice del nuevo elemento
        currentIndex = shapes_array.indexOf(random_shape);
    }

    setTimeout(() => {  fade(); }, 2000);

    function fade(){
      var imgs = document.getElementsByTagName("img"),
          len = imgs !== null ? imgs.length : 0,
          i = 0;
      for(i; i < len; i++) {
          imgs[i].className += " notseen"; 
      }    
    }
 
}

var choices = [];
var ids = [];
var counter = 0;



function clicked(img){
  document.getElementById(img.id).classList.remove("notseen");

  if(!(ids.includes(img.id))){
    choices.push(img.src);
    ids.push(img.id);
  }

  // console.log(choices);
  // console.log(ids);

  if(choices.length == 2){
    if(choices[0] == choices[1]){
      counter += 1;
      if(counter == 8){
        alert("You win!");
        counter = 0;
        choices = [];
        ids = [];

      }
    } else {
      var a = document.getElementById(ids[0]);
      var b = document.getElementById(ids[1]);  
      setTimeout(() => { fadeOut(a,b) }, 1000);
    }

  choices = [];
  ids = [];
  }

}

function fadeOut(a, b){
  a.classList.add("notseen");
  b.classList.add("notseen");
}

