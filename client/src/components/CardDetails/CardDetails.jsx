import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsDetails } from '../../redux/actions/actions';
// import Nav from '../NavBar/NavBar';
// import style from './CardDetails.module.css';


function CardDetails(props) {

    const dispatch = useDispatch();
    const product  = useSelector((state) => state.product);

    
    useEffect(() => {
        dispatch(getProductsDetails(props.match.params.id));
    }, [dispatch, props.match.params.id]);

  
    return (
        <div>
            <h1>1000</h1>
                <h1> {product.name} </h1>
            
        </div>
    );

    }
    export default CardDetails;


//     return (
//         <div >
//              <>
//              <Nav />
//       <div className="detailsContainer">
//         <h1>{recipe.title} </h1>
//         <div className="details">
//           <div className="image_detail">
//             {/* <img src={recipe.image? recipe.image : `${}` } alt="img" /> */}
//           </div>
//           <div className="scoreDiv">
              
                
//                 <span className="description_number">Score: {recipe.spoonacularScore}</span>
             
         
              
//                 <span className="description_number"> Health Score: {recipe.healthScore}</span>
              
//             </div>
//           <div className="text">
//             <div className="diets">
//               <div className ="diets_name" style={{textTransform: 'uppercase'}}>
//               {recipe.diets?.map((diet) => (
//                   <span key={diet}>
//                     <span className="span_diets">
//                       {diet}
//                     </span>
//                   </span>
//                 ))}   
                
//               </div>
//             </div>
//             <div className="summary">
//                 <h2>Summary</h2>
//             </div>
//             <div dangerouslySetInnerHTML={summary()} className="description" />
        
//             <div className="instructions">
//               <h2>Instructions</h2>
//               <p className="description">{recipe.analyzedInstructions?.map((inst) => (
//                 <ul>
//                   <li>{inst}</li>
//                   </ul>
//               ))}</p>
//             </div>
           
//           </div>
//         </div>
//       </div>
//     </>
//         </div>
//     )
// }
  
  