// Question 3//

function cal(discounted) {
    let total = 0;
    for (let i = 0; i < discounted.products.length; i++) {
      total += discounted.products[i].price;
    }
    return total * discounted.discount;
  }
  
  const discountedPrice = cal({
    discount: 0.1,
    products: [
      {
        name: "Product 1",
        price: 100,
      },
      {
        name: "Product 2",
        price: 700,
      },
      {
        name: "Product 3",
        price: 250,
      },
    ],
  });
  
  console.log(discountedPrice);