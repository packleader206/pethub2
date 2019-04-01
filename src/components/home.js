import React, { Component } from 'react'

class Home extends Component {
    constructor() {
        super()
    }


    render() {
//         <div className="container">
// 	<div className="row">
// 	    <div class="col-md-3 bg-secondary">
// 	       <div className="filter-sidebar">
// 	        <div className="row card-body py-2 mb-3 bg-dark twhite">
// 	            <h4><i className="fa fa-car"></i> Search Options</h4>
// 	        </div>    
// 	        <div className="form-group">
//                 <select className="form-control" id="conditionsselect1">
//                   <option>Animal</option>
//                   <option>Dog</option>
//                   <option>Cat</option>
//                 </select>
//              </div>
//     </div>
// </div>
// </div>
// </div>
        const imageStyle = {
            width: 400
        }
        return (
            
            <div>
                <p>nick nack paddy whack</p>
                <img style={imageStyle} src="dogbone.png" />
            </div>
    )

    }
}

export default Home
