# iPhone Eshop

Based on the data array below, you need to build the homepage of an eshop selling iPhones using React.


## Tasks

1. Build the homepage as a React Component. It should contain all the states and the functions containing the state
2. Build a header for the eshop. It should contain:
   1. a company logo
   2. 4 menu items (Home, Categories, Deals, Contact)
   3. an input search box along with a button
   4. a cart icon along with the number of prodcuts inside it. Default value is 0

3. Build a product card. It should contain:
   1.  Product name
   2.  Product Image
   3.  Product price
   4.  Average Rating
   5.  "add to cart" button
   
   Once the button pressed the number at the cart icon at the header should increase by one.

4. Build a card container component. It should contain: 
   1. a title at the top
   2. products cards
   The title should be rendered at the top left corner
   If the products cover more than the page width then a horizontal scrollbar should be shown.


5. Using the card container component add to the home page a top selling products component with title "Best Sellers"
6. Using the card container component add to the home page the most popular products (best average) with title "Most Popular"
7. Using the card container component add to the home page all products with title "All Products"
8. When the user types some text in the search input element at the header, all product containers should not be shown except the one with all the products. This component should render only the products that their name or description contains the search text

9. Modify the product card and render the first 100 characters of the product description just below the product image
10. Add a button above the "All Products" component which toggles the rendering of the all products between horizontal scroll and with flex-wrap ;)


## Tips

   Kindly note that the following are just recommendations and not instructions.

 - 1. The products should be an array contained in a state.
 - 2. The number inside the cart should be connected to a state that holds the number of products in the cart
 - 2. When a product is being added to the cart, then 
 - 2. There should be a function to handle the onChange event of the input element. (Just an idea: store the text in a state). 
 - 4. The Product container component should have a title and a products property. The title should be used to display the title e.g. "Best sellers"
 - 8. You could try to chain the .filter method with the map method. The filter criteria should be the search text. The map method should return some html markup as usual.