const pic = document.createElement('div');
   fetch('https://dog.ceo/api/breeds/image/random')
  .then (function(res){
    return res.json();
  })
.then(function(data){
//   data.forEach(function(user){
        console.log(data);
    // })
})
.then(function(blob){

})