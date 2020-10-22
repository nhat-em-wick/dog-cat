axios.get('http://localhost:3000/products')
  .then(function (response) {
    // handle succes
    var items = response.data.products;
    renderList(items);
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

//   axios.get('http://localhost:3000/my/', {
//     headers: {'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjc4OGMxYTM1NzZmNTBkNWRhNjQzMmYiLCJpYXQiOjE2MDIwOTc0NTUsImV4cCI6MTYwMjA5OTI1NX0.q71SKPmt3MCmwluuQxwNOiixpcQfi_mrSZL1OzB0NAE'},
//   })
//   .then(function (response) {
//       var user = response.data.user
//       renderUser(user)
//     console.log(user);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// function renderUser(user){
//     var userHtml = document.getElementById('user');
//     userHtml.innerHTML = '<b>'+ user +'</b>';

// }

function renderList(items) {
    var html = '';
    for (var list = 0; list < items.length; list++) {
        html += '<li>' + items[list].title +'<br>'+ items[list].description+'<br>'+
        items[list].price+'<br>'+items[list].image+'</li>';
    }
    var listHTML = document.getElementById('products');
    listHTML.innerHTML = html;
}


let addToCart = document.querySelectorAll('.login');
function login(user){
  axios.post('/login', user).then(function (res) {
   console.log(res.data);
  })
}

addToCart.forEach(function (btn) {
btn.addEventListener('click', function (e) {
var product = JSON.parse(btn.dataset.product);
updateCart(product);
 })})