function createShoppingList(products){
    const main = document.createElement('main');
    main.id = 'main';
    document.body.appendChild(main);

    const mainTitle = document.createElement('h2');
    mainTitle.id = 'main__title'
    mainTitle.innerText = 'Visual Market';
    main.appendChild(mainTitle);


    const productList = document.createElement('ul');
    productList.id = 'product-list';
    main.appendChild(productList);

    const productListHeader = document.createElement('div');
    productListHeader.className = 'standard-card';
    productListHeader.id = 'product-list__header';
    productListHeader.innerHTML = '<p>Item</p> <p>Valor</p>'
    productList.appendChild(productListHeader);

    products.forEach((element) => {
        const productItem = document.createElement('li');
        productItem.classList.add('standard-card');
        productItem.classList.add('product-list__product');
        productItem.innerHTML = '<p>' + element.name + '</p>' + '<p>R$ ' + element.price + '</p>';
        productList.appendChild(productItem);
    });


    const productDetails = document.createElement('ul');
    productDetails.id = 'product-details';
    main.appendChild(productDetails);

    const productSome = document.createElement('div');
    productSome.classList.add('standard-card');
    productSome.classList.add('product-some');
    productSome.innerHTML = '<p>Total</p> <p>R$ ' + sum([...products.map(element => {return element.price})]) + '</p>';
    productDetails.appendChild(productSome);

    const buttonEnd = document.createElement('button');
    buttonEnd.classList.add('standard-card');
    buttonEnd.classList.add('button-end');
    buttonEnd.innerHTML = '<p>Finalizar compra</p>';
    productDetails.appendChild(buttonEnd);
}

function sum(prices) {
    let sum = 0;
    prices.forEach(element => {sum += element});
    return sum;
}

const products = [{name: 'Uva Crimson', price: 44.99},
                  {name: 'Vinho Canção', price: 17.98},
                  {name: 'Água de coco', price: 8.99},
                  {name: 'Mamão', price: 9.98},
                  {name: 'Água tônica', price: 17.98}];

createShoppingList(products);