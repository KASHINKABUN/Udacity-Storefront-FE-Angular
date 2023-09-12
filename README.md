# Setup Front End work
- Clone this repository
- Run `npm install` to install the dependencies
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/` to see our application

# Setup Back End work
- Clone the BackEnd Server Repository from `https://github.com/KASHINKABUN/Udacity-Storefront-BE-Nodejs`
- Folow the setup database in above repository. The Backend server should be hosted in `http://localhost:4001`
- Create some data in your postgreSQL (simplier with Postman):
1. Create user account API
- Address: `http://localhost:4001/user-information`
- Method: `POST`
- Header: None
- Body: `{ "username": "admin", "pass_word": "admin", "fullname": "adminstrator" }`

2. Get user information (to get the token)
- Address: `http://localhost:4001/validate-information`
- Method: `POST`
- Header: None
- Body: `{ "username": "admin", "pass_word": "admin" }`

3. Add product information API (repeat this step with each body)
- Address: `http://localhost:4001/product`
- Method: `POST`
- Header: Authorization/Bearer <Your token>
- Body:

`{`
  `"product_name": "Smart Phone 100MP, 8GB RAM, 1T ROM, Android 15.0",`
  `"first_price": "50$",`
  `"discount_price": "25$",`
  `"product_description": "Newest smartphone 2023, discount 50%, powerful performance 8Gb RAM, 1T ROM, Android 15.0, ",`
  `"product_image": "https://res.cloudinary.com/ddyzzqqod/image/upload/v1694492933/StoreFrontNodeJSFrontEnd/smartphone_zlifqx.jpg"`
`}`


`
{
  "product_name": "Airbus A320 Plane 99% deep discount 25%",
  "first_price": "500$",
  "discount_price": "450$",
  "product_description": "Like real, Airbus A320, like new 99%, a litter bit dirty",
  "product_image": "https://res.cloudinary.com/ddyzzqqod/image/upload/v1694492933/StoreFrontNodeJSFrontEnd/plane_jw1ssl.jpg"
}
`

`
{
  "product_name": "Tablet A13, 12GB RAM, 1T ROM",
  "first_price": "44$",
  "discount_price": "40$",
  "product_description": "Play almost modern game easy, 15 inch LED screen",
  "product_image": "https://res.cloudinary.com/ddyzzqqod/image/upload/v1694492933/StoreFrontNodeJSFrontEnd/tablet_r2fui2.jpg"
}
`

`
{
  "product_name": "Full slot PC, 24 inch monitor, RGB PC intel 10400F, 32GB RAM, Asus 550M motherboard, ...",
  "first_price": "350$",
  "discount_price": "344$",
  "product_description": "RGB PC intel 10400F, 32GB RAM, Asus 550M motherboard, RTX 4060Ti 12Gb, 24 LED monitor, keyboard, Logitech mouse",
  "product_image": "https://res.cloudinary.com/ddyzzqqod/image/upload/v1694492933/StoreFrontNodeJSFrontEnd/pc_katxr0.jpg"
}
`

`
{
  "product_name": "2 Baby husky child dog",
  "first_price": "20$",
  "discount_price": "10$",
  "product_description": "Color white, 10 kilogram",
  "product_image": "https://res.cloudinary.com/ddyzzqqod/image/upload/v1694492933/StoreFrontNodeJSFrontEnd/dog_uzf7vm.jpg"
}
`

`
{
  "product_name": "Gopro hero 10 black",
  "first_price": "500%",
  "discount_price": "449$",
  "product_description": "Gopro 10 Black, version 5.0 hyper smooth, 15F sensor cammera, front LED 5 inch display, 16m deeper water hack",
  "product_image": "https://res.cloudinary.com/ddyzzqqod/image/upload/v1694492932/StoreFrontNodeJSFrontEnd/gopro_e6or47.jpg"
}
`

`
{
  "product_name": "Pink pig baby",
  "first_price": "10%",
  "discount_price": "8$",
  "product_description": "5 kilogram, good heathy, color pink, need a new family",
  "product_image": "https://res.cloudinary.com/ddyzzqqod/image/upload/v1694492933/StoreFrontNodeJSFrontEnd/pig_judy6c.jpg"
}
`

`
{
  "product_name": "Black logitech RGB mouse 2",
  "first_price": "49$",
  "discount_price": "39$",
  "product_description": "Good for playing game, 1.000.000 click times, can custom click event, color, ... by LGTECH application",
  "product_image": "https://res.cloudinary.com/ddyzzqqod/image/upload/v1694492933/StoreFrontNodeJSFrontEnd/mouse_sgcoyw.jpg"
}
`

`
{
  "product_name": "Dji mini 2 flycam",
  "first_price": "249$",
  "discount_price": "239$",
  "product_description": "Best version in 2023, 10km distance, new wave version 2.0, increase panorama mode, video 4k 60fps. 3 batteries and dock for combo version",
  "product_image": "https://res.cloudinary.com/ddyzzqqod/image/upload/v1694492932/StoreFrontNodeJSFrontEnd/flycam_khlerk.jpg"
}
`

`
{
  "product_name": "Baby yellow cat",
  "first_price": "15$",
  "discount_price": "10$",
  "product_description": "5 kilogram, good heathy, really smart and listen to the owner",
  "product_image": "https://res.cloudinary.com/ddyzzqqod/image/upload/v1694492932/StoreFrontNodeJSFrontEnd/cat_wphyww.jpg"
}
`

`
{
  "product_name": "Dell laptop gamming 2023",
  "first_price": "200$",
  "discount_price": "189$",
  "product_description": "Newest Dell laptop gamming, intel core i7 7700, gearfore 2010Ti 6Gb RAM, 32GB RAM, 500GB SSD Nvme, 17 inch monitor",
  "product_image": "https://res.cloudinary.com/ddyzzqqod/image/upload/v1694492932/StoreFrontNodeJSFrontEnd/laptop_ph6iq7.jpg"
}
`

`
{
  "product_name": "Logitech over ear headphone",
  "first_price": "100$",
  "discount_price": "69$",
  "product_description": "No sound outside version 4.0, led RGB, black color, nice to have for gamer, sound version 5.1",
  "product_image": "https://res.cloudinary.com/ddyzzqqod/image/upload/v1694492932/StoreFrontNodeJSFrontEnd/headphone_ujz30h.jpg"
}
`

** Refresh the website to see our application **

# Component structure
| Component Name | Description |
|-----------------|------------------|
| login | component that allow to login to the application |
| page-not-found | component was shown when the invalid URL entered |
| blank-content | component was shown when there are not available data in page |
| app-bar | the top bar of website. it's contain user name, cart and logout feature |
| products | products list component has many small product component that got from the API |
| product | small component has product information: image, name, final price, discount price |
| cart | it has all products that added by user |
| congratulation | shown incase submit order successfully have order information |

# Service information
| Service Name | Description |
|-----------------|------------------|
| user-service | handle some action related to user like set-API-header using token, login, set-user-information |
| product-service | handle some action related to product like get-product-list, get-product-detail-information |
| cart-service | handle some action related to cart and order like add-product-to-cart, delete-product-from-cart, get-all-product-in-cart |
| error-handler-service | handle some action related to API-error like showing snackbar-toast-message, redirect-to-login-page |


# Some work results
![image](https://res.cloudinary.com/ddyzzqqod/image/upload/v1694696059/StoreFrontAngularFrontEnd/result1_xxjti7.png)
![image](https://res.cloudinary.com/ddyzzqqod/image/upload/v1694696060/StoreFrontAngularFrontEnd/result2_yd8nub.png)
![image](https://res.cloudinary.com/ddyzzqqod/image/upload/v1694696060/StoreFrontAngularFrontEnd/result3_eb3xbv.png)
![image](https://res.cloudinary.com/ddyzzqqod/image/upload/v1694696059/StoreFrontAngularFrontEnd/result4_zdrddp.png)
![image](https://res.cloudinary.com/ddyzzqqod/image/upload/v1694696059/StoreFrontAngularFrontEnd/result5_acda4h.png)
![image](https://res.cloudinary.com/ddyzzqqod/image/upload/v1694696059/StoreFrontAngularFrontEnd/rsult6_fmgyxw.png)