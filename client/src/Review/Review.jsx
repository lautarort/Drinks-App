import React from "react"
import "./Review.css"


export default function Review ({rating, numReview}) {
    return (
        <div>
          <button> 
              
                <i 
                    className="fa fa-star" 
                ></i> 
            </button>
            <button> 
                <i 
                    className="fa fa-star" 
                            
                    
                ></i> 
            </button>
            <button> 
                <i
                    className="fa fa-star" 
                ></i> 
            </button>
            <button> 
                <i 
                    className="fa fa-star" 
                ></i>
            </button>
            <button> 
                <i
                    className= "fa fa-star" 
                ></i> 
            </button>
        </div>
    )
}