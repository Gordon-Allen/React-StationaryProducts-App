import React from "react";

// function Product(props) {
//     // console.log(props);
//     return (
//         <div>
//             <div><h3>Item Name: <em>{props.name}</em></h3></div>
//             <div><h3>Price <em>{props.price}</em></h3></div>
//             <div><h3>Description <em>{props.desc}</em></h3></div>
//             <br/>
//         </div>
//     );
// }

class Product extends React.Component {
    render() {
        return (
            <div>
            <div><h3>Item Name: <em>{this.props.name}</em></h3></div>
            <div><h3>Price <em>{this.props.price}</em></h3></div>
            <div><h3>Description <em>{this.props.desc}</em></h3></div>
            <br/>
        </div>
        )
    }
}


export default Product;