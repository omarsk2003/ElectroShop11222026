const storeName: string = "ElectroShop";
let strstat: string="Open";


let products = [
    {
        name: "Laptop",
        available: true,
        description: "A high-performance laptop for work and play.",
          price: 700,
          quantity: 10
    },
    {
        name: "Mouse",
        available: true,
        description: "A wireless mouse with ergonomic design.",
        price: 200,
        quantity: 5
    },
    {
        name: "Keyboard",
        description: "A mechanical keyboard with customizable RGB lighting.",
          available: true,
        price: 50,
        quantity: 7
    }
];
    
let cart: (string | number | boolean)[] = [
    "Laptop",
    700,
    true,
    "Mouse",
    200,
    false
];


if(strstat=="Open")
{alert("We are Open");}
else{alert("We will open soon");}

let container = document.getElementById("productsContainer");
let count:number=0;
        

    if (container) {
        container.innerHTML = "";
        for (let product of products) { 
             let price2:string="";  
      if(product.price>=500)
            {
                price2="Expensive";
                count=count+1;
            }
        else if(product.price>100 && product.price<500)
        {
            price2="Medium";
            count=count+1;
        }
        else{price2="Affordable"}
        
              container.innerHTML += `
                <div>
                    <h2>${product.name}</h2>
                    <p>Description: ${product.description}</p>
                    <p>Available: ${product.available ? "Yes" : "No"}</p>
                    <p>Price: ${product.price}</p>
                    <p>Productprice ${price2} </p>
                    <hr>
                </div>
            `;
        }
    console.log(count);
}

function CalculateDiscount(price: number): number {
    price = price * 0.5;
    return price;
}

function availableProducts(available: boolean):boolean {
    if(available==true)
    {
        return true;
    }
    return false;
}   
function displaymessage(message: string): void {
    alert(message);
}

function displayProductDetails(product: { name: string; description: string; available?: boolean; price: number; quantity: number }, currency: string="USD"): void {
    console.log(`Product Name: ${product.name}`);
    console.log(`Description: ${product.description}`);
    console.log(`Available: ${product.available ? "Yes" : "No"}`);
    console.log(`Price: ${product.price} ${currency}`);
    console.log(`Quantity: ${product.quantity}`);
}


const tableBody = document.getElementById("productsTableBody");
function displayproducttable(products: { name: string; description: string; available?: boolean; price: number; quantity: number }[]): void 
{
    if (tableBody) {
        tableBody.innerHTML = "";
        for (let product of products) {
            tableBody.innerHTML += `
                <tr>
                    <td>${product.name}</td>
                    <td>${product.description}</td>
                    <td>${product.available ? "Yes" : "No"}</td>
                    <td>${product.price}</td>
                    <td>${product.quantity}</td>
                </tr>
            `;
        }
    }
}

function calculateTotalPrice(...products: { price: number; quantity: number }[]): number {
    let totalPrice = 0;
    for (let product of products) {
        totalPrice += product.price * product.quantity;
    }
    return totalPrice;
}

let f1: number = CalculateDiscount(100);
console.log("Calculated discount for $100:", f1);
console.log("Available products:", availableProducts(true));
displaymessage("Welcome to ElectroShop!");
displayProductDetails(products[0], "JD");
displayProductDetails(products[1]);
let totalPrice: number = calculateTotalPrice(products[0], products[1], products[2]);
console.log("Total price of products:", totalPrice);
displayproducttable(products);