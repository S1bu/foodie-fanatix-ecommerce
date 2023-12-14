const meals = [
{
    id:1,
    product:"Juicy Chicken Burger",
    Image:"https://i.pinimg.com/564x/73/a5/d7/73a5d79799e91f4982b11993a621be16.jpg",
    price:"21",
   category:"meal"
},
{
    id:2,
    product:"Crispy Chicken Tacos",
    Image:"https://i.pinimg.com/564x/1e/fc/75/1efc75b4422bc8c48e85c9030f2a6d57.jpg",
    price:"21",
    category:"meal"
},
{
    id:3,
    product:"Hot dog",
    Image:"https://i.pinimg.com/564x/a3/d9/34/a3d93497180e92e5ca7166141efdb493.jpg",
    price:"21",
    category:"meal"
},
{
    id:4,
    product:"Sphagetti and meat sauce",
    Image:"https://i.pinimg.com/564x/10/fd/c2/10fdc24b980f8025c1e4bb52b2d3db55.jpg",
    price:"21",
    category:"meal"
},
{
    id:5,
    product:"Pizza",
    Image:"https://i.pinimg.com/736x/59/ff/2e/59ff2e6456372690e0b6436e898a26b4.jpg",
    price:"21",
    category:"meal"
},
{
    id:6,
    product:"Fish and Chips",
    Image:"https://i.pinimg.com/564x/f1/fe/94/f1fe944658897fd32c5c01f926059243.jpg",
    price:"21",
    category:"meal"
}

]

const deserts = [
    {
        id:1,
        product:"Pumpkin Cookie Dough Ice-Cream",
        Image:"https://i.pinimg.com/564x/b2/51/e4/b251e4cc8f45428783db12f83a3174da.jpg",
        price:"21",
        category:"desert"
    },
    {
        id:2,
        product:"Chocolate Oreo Pudding Delight",
        Image:"https://i.pinimg.com/564x/0f/85/4f/0f854f1a226f39cf90c2f3c261fabcad.jpg",
        price:"21",
        category:"desert"
    },
    {
        id:3,
        product:"Crispy Chocolate Chip waffles",
        Image:"https://i.pinimg.com/564x/a2/e1/1d/a2e11d22b223371bd5f999f5aaa6e9af.jpg",
        price:"21",
        category:"desert"
    },
    {
        id:4,
        product:"Old Fashioned Devils Food Cake",
        Image:"https://i.pinimg.com/564x/c7/eb/6e/c7eb6eaab5fdc463070d24239f69f91c.jpg",
        price:"21",
        category:"desert"
    },
    {
        id:5,
        product:"Peppermint Crisp Tart",
        Image:"https://i.pinimg.com/564x/67/47/4b/67474b2e8915c82c6ea017f9cc542669.jpg",
        price:"21",
        category:"desert"
    },
    {
        id:6,
        product:"Milk Tart",
        Image:"https://i.pinimg.com/564x/98/3e/df/983edf8cdd43d46711b216267047cdb8.jpg",
        price:"21",
        category:"desert"
    },
    {
        id:7,
        product:"Galaxy Cup cake",
        Image:"https://i.pinimg.com/564x/23/09/08/2309081c44c7f0f00f7ce79e7d1e22d2.jpg",
        price:"21",
        category:"desert"
    },
    {
        id:8,
        product:"Brownie Sundae",
        Image:"https://i.pinimg.com/564x/7c/6a/94/7c6a94f180de7e9f6698d596fccd396e.jpg",
        price:"21",
        category:"desert"
    },
    {
        id:9,
        product:"Magnum Ice cream",
        Image:"https://i.pinimg.com/564x/14/e1/6b/14e16bd3465af41f9dff460da200e8c1.jpg",
        price:"21",
        category:"desert"
    },

   
]

const drinks = [
    {
        id:1,
        product:"Water",
        Image:"https://i.pinimg.com/564x/ef/63/dd/ef63ddb07e1ece007b2de75e34e37e79.jpg",
        price:"21",
        category:"drinks"
    },
    {
        id:2,
        product:"Riverdale milkshake",
        Image:"https://i.pinimg.com/564x/ff/e1/5e/ffe15ef81159f0e7146bfc835c3900f9.jpg",
        price:"21",
        category:"drinks"
    },
    {
        id:3,
        product:"Score energy drink",
        Image:"https://i.pinimg.com/564x/0f/18/1c/0f181c90fd647bd8d68cc3ced8544b4e.jpg",
        price:"21",
        category:"drinks"
    },
    {
        id:4,
        product:"Coke",
        Image:"https://i.pinimg.com/736x/d9/90/b4/d990b4e3fafb7073f2ab7241e48aea0b.jpg",
        price:"21",
        category:"drinks"
    },
    {
        id:5,
        product:"Corona",
        Image:"https://i.pinimg.com/564x/22/70/17/22701784deb4629c2c3952f473a509af.jpg",
        price:"21",
        category:"drinks"
    },
    {
        id:6,
        product:"Fanta Orange",
        Image:"https://i.pinimg.com/564x/95/f5/3a/95f53adebd89414863149903e700fe67.jpg",
        price:"21",
        category:"drinks"
    },
    {
        id:7,
        product:"HEINEKEN",
        Image:"https://i.pinimg.com/564x/de/f5/57/def557ba9b9a9c2e7f753facfc0f1c58.jpg",
        price:"21",
        category:"drinks"
    },
    {
        id:8,
        product:"Rum Berry cocktail",
        Image:"https://i.pinimg.com/564x/94/77/35/947735f971eeba424518b37e78efe5b6.jpg",
        price:"21",
        category:"drinks"
    },
    {
        id:9,
        product:"Perfect Vanilla Bean Iced Coffee",
        Image:"https://i.pinimg.com/564x/98/79/f1/9879f186f06b552856148d291eb69210.jpg",
        price:"21",
        category:"drinks"
    },
   
]

const starters =[
    {
        id:1,
        product:"Mini pizza",
        Image:"https://i.pinimg.com/564x/0c/2f/c0/0c2fc05438e6fe41f034a232e1d710a5.jpg",
        price:"21",
        category:"starters"
    },
    {
        id:2,
        product:"Sushi",
        Image:"https://i.pinimg.com/564x/05/43/49/054349a2911104caa84c099b2cbc2148.jpg",
        price:"21",
        category:"starters"
    },
    {
        id:3,
        product:"Samoosas",
        Image:"https://i.pinimg.com/564x/35/47/90/354790ef813f126fbd51c52e7958f1ab.jpg",
        price:"21",
        category:"starters"
    },
    {
        id:4,
        product:"Wings",
        Image:"https://i.pinimg.com/564x/b7/4f/02/b74f02731c5e4b39eb40d4bb0845e19e.jpg",
        price:"21",
        category:"starters"
    },
    {
        id:5,
        product:"Beef swekers",
        Image:"https://i.pinimg.com/564x/85/f8/6e/85f86ef1e6bafd4004dc6d5b5739eb4a.jpg",
        price:"21",
        category:"starters"
    },
    {
        id:6,
        product:"Chipotle Chicken Nachos with Jalapeño Yogurt",
        Image:"https://i.pinimg.com/564x/fc/3b/dd/fc3bdd5d885fdf404c8c11e21ce681be.jpg",
        price:"21",
        category:"starters"
    },
    
]

const special = [
    {
        id:1,
        product:"Beef Burgers x 6",
        Image:"https://i.pinimg.com/564x/b0/68/45/b0684510d758db6e05c13f71421ca49a.jpg",
        price:"15",
        category:"Special"
    },
    {
        id:2,
        product:"Custard & Jelly x2",
        Image:"https://i.pinimg.com/564x/4c/b3/cd/4cb3cdb6d0543e40b54167cb7e0930d2.jpg",
        price:"15",
        category:"Special"
    },
    {
        id:3,
        product:"Moroccan Chicken Wrap x",
        Image:"https://i.pinimg.com/564x/cd/2c/e1/cd2ce1bae745b70afc70a398b3bc3475.jpg",
        price:"15",
        category:"Special"
    },
    {
        id:4,
        product:"Rasberry mores Milkshake",
        Image:"https://i.pinimg.com/564x/54/35/4b/54354b184e08e3d4c6512351cecfee87.jpg",
        price:"15",
        category:"Special"
    },
    
]
// DOM for display
let specials_display = document.querySelector('.specials');
let meal_display = document.querySelector('#meals') 
let drink_display = document.querySelector('#drinks') 
let desert_display= document.querySelector('#deserts') 
let starter_display = document.querySelector('#starters') 
//---- DISPLAYs------
// specials
special.forEach(special => {
    specials_display.innerHTML+=`
    
    <div class="card" style="border:1px solid white;">
               
    <div class="image-holder">
        <img src="${special.Image}" alt="">
    </div>
    <div class="details">
        <div class="row">
            <div class="col">
               <strong><p>${special.product}</p></strong>
            </div>
            <div class="col price">
                    <p>$${special.price}</p>
            </div>
        </div>
    
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
             impedit placeat ipsum, architecto ipsam iusto praesentium eaque
        </p>
        <div class="cart-button">
        <button class="cart-button" onclick="add_to_cart(special)">
            <i class="bi bi-bag"></i>
        </div>
    </div>
</div>
    `});
//  meals
meals.forEach(meal => {
        meal_display.innerHTML+=`
        <div class="card" style="border:1px solid white;">       
        <div class="image-holder">
            <img src="${meal.Image}" alt="">
        </div>
        <div class="details">
            <div class="row">
                <div class="col">
                   <strong><p>${meal.product}</p></strong>
                </div>
                <div class="col price">
                        <p>$${meal.price}</p>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                 impedit placeat ipsum, architecto ipsam iusto praesentium eaque
            </p>
            <div class="cart-button">
            <button class="cart-button" onclick="add_to_cart(meals)">
            <i class="bi bi-bag"></i>
            </button>
            </div>
        </div>
    </div>
        `});
 
// deserts
deserts.forEach(desert => {
            desert_display.innerHTML+=`
            <div class="card" style="border:1px solid white;">       
            <div class="image-holder">
                <img src="${desert.Image}" alt="">
            </div>
            <div class="details">
                <div class="row">
                    <div class="col">
                       <strong><p>${desert.product}</p></strong>
                    </div>
                    <div class="col price">
                            <p>$${desert.price}</p>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                     impedit placeat ipsum, architecto ipsam iusto praesentium eaque
                </p>
                <div class="cart-button">
                <button class="cart-button" onclick="add_to_cart(deserts)">
                <i class="bi bi-bag"></i>
                </button>
                </div>
            </div>
        </div>
            `});   
 
//drinks
drinks.forEach(drink => {
            drink_display.innerHTML+=`
            <div class="card" style="border:1px solid white;">       
            <div class="image-holder">
                <img src="${drink.Image}" alt="">
            </div>
            <div class="details">
                <div class="row">
                    <div class="col">
                       <strong><p>${drink.product}</p></strong>
                    </div>
                    <div class="col price">
                            <p>$${drink.price}</p>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                     impedit placeat ipsum, architecto ipsam iusto praesentium eaque
                </p>
                <div class="cart-button">
                <button class="cart-button" onclick="add_to_cart(drinks)">
                <i class="bi bi-bag"></i>
                </button>
                </div>
            </div>
        </div>
            `}); 
 
//starters
starters.forEach(starter => {
            starter_display.innerHTML+=`

            <div class="card" style="border:1px solid white;">       
            <div class="image-holder">
                <img src="${starter.Image}" alt="">
            </div>
            <div class="details">
                <div class="row">
                    <div class="col">
                       <strong><p>${starter.product}</p></strong>
                    </div>
                    <div class="col price">
                            <p>$${starter.price}</p>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                     impedit placeat ipsum, architecto ipsam iusto praesentium eaque
                </p>
                <div class="cart-button">
                <button class="cart-button" onclick="add_to_cart(starters)">
                <i class="bi bi-bag"></i>
                </button>
                </div>
            </div>
        </div>
            `});   
 

// ----------------------------------
//-----------CART-------------------
// ----------------------------------
let cart = []

let cart_target = document.querySelector('.count')

// Event listeners
let cart_button = document.querySelectorAll('.cart-button')

// cart-button.addEventListener("click",add_to_cart)

function add_to_cart(starters) {
    cart.push({
        id: starters.id,
        product: starters.product.value,
        Image: starters.Image,
        price: starters.price,
        category: starters.category
    });
    function cart_count() {
        let cart_length = cart.length;
        cart_target.innerHTML = `
        ${cart_length}
        `;
    }

    cart_count();
    remove()
}

function add_to_cart(meals) {
    cart.push({
        id: meals.id,
        product: meals.product,
        Image: meals.Image,
        price: meals.price,
        category: meals.category
    });


    function cart_count() {
        let cart_length = cart.length;
        cart_target.innerHTML = `
        ${cart_length}
        `;
    }

  

    cart_count();

}

function add_to_cart(drinks) {
    cart.push({
        id: drinks.id,
        product: drinks.product,
        Image: drinks.Image,
        price: drinks.price,
        category: drinks.category
    });

    function cart_count() {
        let cart_length = cart.length;
        cart_target.innerHTML = `
        ${cart_length}
        `;
    }

    cart_count();
    remove()
}

function add_to_cart(deserts) {
    cart.push({
        id: deserts.id,
        product: deserts.product,
        Image: deserts.Image,
        price: deserts.price,
        category: deserts.category
    });
    function cart_count() {
        let cart_length = cart.length;
        cart_target.innerHTML = `
        ${cart_length}
        `;
    }

    cart_count();
    remove()
}

function add_to_cart(special) {
    cart.push({
        id: deserts.id,
        product: deserts.product,
        Image: deserts.Image,
        price: deserts.price,
        category: deserts.category
    });
    function cart_count() {
        let cart_length = cart.length;
        cart_target.innerHTML = `
        ${cart_length}
        `;
    }

    cart_count();
    remove()
}

