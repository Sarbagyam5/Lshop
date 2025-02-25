const {Home_Route,Product_Route, Cart_Route} = require("./routes");

const navLinks = [
  {
    Label: "Home",
    route: Home_Route
  },
  {
    Label: "Product",
    route: Product_Route
  }
  {
    Label: "Cart",
    route:  Cart_Route
  }
]
export default navLinks