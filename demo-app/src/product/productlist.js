import React, {Component} from 'react';
import { Product } from './Product';



let handleSubmit = function(product){
    console.log('came inside the handle submit function ', product);
}

export class ProductList extends Component {
    constructor(props){
        super(props);
        this.state = {
            products:[   
                {
                    id:1,
                    name:'AUDI',
                    price:150000
                },
                {
                    id:2,
                    name:'XUV',
                    price:800000
                },
                {
                    id:3,
                    name:'MARUTHI',
                    price:400000
                }
            ]
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handlesubmit(produts){
        this.setState({
            selectedProducts: this.state.selectedProducts.concat([product]),
            products:this.state.products.filter(selectedProduct => product.id !== selectedProduct.id )
        });
    }
    
    
    render(){
                return (
                <div className="row">
                   <h1>Number of Products : {this.state.products.length}</h1>
                   {
                       this.state.products.map(product =>
                        <Product key={product.id} data = {product} click={handleSubmit}/>
                    )}
                </div>
            );
    }
}