import React from "react";
import md5 from "md5";

export default class ShoppingCart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      shoppingCart: this.props.location.state.shoppingCart ? this.props.location.state.shoppingCart : [],
      amount: this.props.location.state.amount ? this.props.location.state.amount : 0,
      merchantId: "508029",
      referenceCode: "GamesShopPayU10",
      currency: "COP",
      tax: 0,
      taxReturnBase: 0
    };
  }

  render() {
    const formatter = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
    });
    const selectedProducts = this.state.shoppingCart.map((p, index) => (
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{p.name}</td>
        <td>{formatter.format(p.price)}</td>
      </tr>
    ));
    const totalAmount = this.state.amount + (this.state.tax * this.state.shoppingCart.length);
    return (
      <div>
        <header>
          <nav className={"navbar"}>
            <a className={"navbar-brand"} href="/gamesshop">Games Shop</a>
          </nav>
        </header>
        <main className={"container"}>
          <div className={"row"}>
            <div className={"col-md-5"}>
              <h2>Resumen de productos seleccionados</h2>
              <table className={"table"}>
                <thead>
                <tr>
                  <th scope={"col"}>#</th>
                  <th scope={"col"}>Producto</th>
                  <th scope={"col"}>Valor</th>
                </tr>
                </thead>
                <tbody>
                {selectedProducts}
                </tbody>
              </table>
            </div>
            <div className={"col-md-2"}/>
            <div className={"col-md-5"}>
              <h2>Formulario de pago</h2>
              <div className={"row"}>
                <div className={"col-md-3"}>
                  <label htmlFor={"inputAmount"}>Precio productos</label>
                </div>
                <div className={"col-md-9"}>
                  <p id={"inputAmount"}> {formatter.format(this.state.amount)} </p>
                </div>
              </div>
              <div className={"row"} style={{borderBottom: "solid"}}>
                <div className={"col-md-3"}>
                  <label htmlFor={"inputTax"}>Impuesto</label>
                </div>
                <div className={"col-md-9"}>
                  <p id={"inputTax"}> {formatter.format(this.state.tax) + " x " + this.state.shoppingCart.length + " productos"} </p>
                </div>
              </div>
              <div className={"row"}>
                <div className={"col-md-3"}>
                  <label htmlFor={"inputTotal"}>Total</label>
                </div>
                <div className={"col-md-9"}>
                  <p id={"inputTotal"}> {formatter.format(totalAmount)} </p>
                </div>
              </div>
              <form method="post" action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/">
                <input name="merchantId" type="hidden" value={this.state.merchantId}/>
                <input name="accountId" type="hidden" value="512327"/> {/*accountId of Brasil*/}
                <input name="description" type="hidden" value="Games Shop PayU"/>
                <input name="referenceCode" type="hidden" value={this.state.referenceCode}/>
                <input name="amount" type="hidden" value={totalAmount}/>
                <input name="tax" type="hidden" value={this.state.tax}/>
                <input name="taxReturnBase" type="hidden" value={this.state.taxReturnBase}/>
                <input name="currency" type="hidden" value={this.state.currency}/>
                <input name="signature" type="hidden"
                       value={md5("4Vj8eK4rloUd272L48hsrarnUA~" + this.state.merchantId + "~" + this.state.referenceCode + "~" + totalAmount + "~" + this.state.currency)}/> {/*ApiKey~merchantId~referenceCode~amount~currency*/}
                <input name="test" type="hidden" value="1"/>
                <input name="buyerEmail" type="hidden" value="carlosandresmedinarivas14@gmail.com"/>
                <input name="responseUrl" type="hidden" value="http://ec2-54-197-75-223.compute-1.amazonaws.com/response.php"/>
                <input name="confirmationUrl" type="hidden" value="http://ec2-54-197-75-223.compute-1.amazonaws.com/confirmation.php"/>
                <input name="Submit" type="submit" className={"btn btn-color"} value="Realizar Pago"/>
              </form>
            </div>
          </div>
        </main>
        <footer>
          "Games Shop" - @Copyright 2020 - Carlos Medina
        </footer>
      </div>
    );
  }
}