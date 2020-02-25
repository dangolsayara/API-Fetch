const container=document.getElementById('container');


// .then(function(response){
//    return response.json();
// })
 
document.getElementById('btn').addEventListener('click', btn);
function btn(){
   fetch('https://dog.ceo/api/breeds/image/random')
   .then(function(res){
      return res.text();
   })
   .then(function(data){
      console.log(data);
   })
}