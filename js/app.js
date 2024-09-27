// server.js
console.log('estoy aqui')
class Product{
    constructor(name,autor,description,price,genero){
        this.name = name;
        this.autor = autor;
        this.description = description;
        this.price = price;
        this.genero = genero;
    }
}

class UI{
    addProduct(product){
        const productList=document.getElementById('product-list');
        const element= document.createElement('div');
        element.innerHTML= `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong> Product name </strong>: ${product.name}
                <strong> Author </strong>: ${product.autor}
                <strong> Description </strong>: ${product.description}
                <strong> Price </strong>: ${product.price}
                <strong> Genre </strong>: ${product.genero}
                <a href="#" class="btn btn-danger btn-sm delete" name="delete">Delete</a>
            </div>
        `;
        productList.appendChild(element);
        this.resetForm();
    }
    resetForm (){
        document.getElementById('product-form').reset();
    }
    deleteProduct(element){
        if(element.name=== 'delete')
            element.parentElement.parentElement.parentElement.remove();
    }

    showProduct(){
        const productList = document.getElementById('product-list'); // Assuming same ID in tendencias.html
  productList.innerHTML = ''; // Clear existing content

  // Get products from local storage (or handle empty storage)
  const storedProducts = JSON.parse(localStorage.getItem('products')) || [];

  // Loop through products and create UI elements
  storedProducts.forEach((product) => {
    const element = document.createElement('div');
    element.innerHTML = `
      <div class="card text-center mb-4">
        <div class="card-body">
          <strong> Product name </strong>: ${product.name}
          <strong> Author </strong>: ${product.autor}
          <strong> Description </strong>: ${product.description}
          <strong> Price </strong>: ${product.price}
          <strong> Genre </strong>: ${product.genero}
        </div>
      </div>
    `;
    productList.appendChild(element);
  });
}

}

//DOM Events

document.getElementById('product-form').addEventListener('submit', (e)=>{
    const name = document.getElementById('name').value;
    const autor = document.getElementById('autor').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const genero = document.getElementById('genero').value;

    const product = new Product(name, autor, description, price, genero);

    const ui = new UI();
    ui.addProduct(product);
    e.preventDefault();
    
});

document.getElementById('product-list').addEventListener('click', (e)=>{
    const ui= new UI;
    ui.deleteProduct(e.target)
})