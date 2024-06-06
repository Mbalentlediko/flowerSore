//Create products and store it on the local storage
let wrapper = document.querySelector('[recentProducts]')
let products = 
    JSON.parse (localStorage.getItem('products'))
    ?JSON.parse(localStorage.getItem('products'))
    : localStorage.setItem('products',JSON.stringify(
        [
        {    id:1,
            productName:"Dell-Lattitude",
             category: "Laptop",
            description:  "Dell-Lattitude E5450 13 5th GEN 1 for business." ,
            amount: 25000.89,
            image_url: "https://mbalentlediko.github.io/Images/static/dell1.jpg"
    
           },
           { id:2,
            productName :"Dell-Lattitude",
            category: "Laptop",
            description :"Dell-Lattitude E5450 13 5th GEN 1 for business. ",
            amount: 20056.89,
            image_url:" https://mbalentlediko.github.io/Images/static/dell2.jpg"
    
           },
           {  id:3,
            productName:"Dell-Lattitude",
            category: "Laptop",
            description:"Dell-Lattitude E5450 13 5th GEN 1 for business. ",
            amount: 20025.89,
            image_url:"https://mbalentlediko.github.io/Images/static/dell3.jpg"
    
           },
           {  id:4,
            productName:"Dell-Lattitude",
            category: "Laptop",
            description:"Dell-Lattitude E5450 13 5th GEN 1 for business. ",
            amount: 30000.89,
            image_url:"https://mbalentlediko.github.io/Images/static/dell4.jpg"
    
           },
    
           {  id:5,
            productName:"Dell-Lattitude",
            category: "Laptop",
            description:"Dell-Lattitude E5450 13 5th GEN 1 for business. ",
            amount: 89900.89,
            image_url:"https://mbalentlediko.github.io/Images/static/dell5.jpg"
    
           }
        ]
    
    ))
function recentProducts() {
    let arrSize= products.length
    let latestProducts = products.reverse().slice(0,arrSize>>1)
    latestProducts.forEach(product => {
        wrapper.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="${product.img_url}" class="card-img-top" alt="${product.productName}">
        <div class="card-body">
          <h5 class="card-title">${product.productName}</h5>
          <p class="card-text">${product.description}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
        
    });
}
recentProducts()