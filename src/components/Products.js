import React from "react";
import Product from "./Product";

export default class Products extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [
        { name: "Nintendo Switch",
          price: 1000000,
          image: "https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/n/i/nintendoswitchneon.jpg"
        },
        { name: "Nintendo Switch",
          price: 1000000,
          image: "https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/n/i/nintendoswitchneon.jpg"
        },
        { name: "Nintendo Switch",
          price: 1000000,
          image: "https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/n/i/nintendoswitchneon.jpg"
        },
        { name: "Nintendo Switch",
          price: 1000000,
          image: "https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/n/i/nintendoswitchneon.jpg"
        },
        { name: "Nintendo Switch",
          price: 1000000,
          image: "https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/n/i/nintendoswitchneon.jpg"
        },
        { name: "Nintendo Switch",
          price: 1000000,
          image: "https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/n/i/nintendoswitchneon.jpg"
        },
        { name: "Nintendo Switch",
          price: 1000000,
          image: "https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/n/i/nintendoswitchneon.jpg"
        },
        { name: "Nintendo Switch",
          price: 1000000,
          image: "https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/n/i/nintendoswitchneon.jpg"
        },
        { name: "Nintendo Switch",
          price: 1000000,
          image: "https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/n/i/nintendoswitchneon.jpg"
        },
        { name: "Nintendo Switch",
          price: 1000000,
          image: "https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/n/i/nintendoswitchneon.jpg"
        }
      ]
    }
  }

  render() {
    const productsList = this.state.products.map( (p, index) => (
      <Product key={index} name={p.name} price={p.price} image={p.image} handleAddToCart={this.props.handleAddToCart}/>
    ));
    return (
      <div>
        <div className={"products-grid"}>
          {productsList}
        </div>
      </div>
    );
  }
}