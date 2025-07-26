import {useState,useEffect} from "react"
import './styles.css'
import ProductCard from './Card.js'
import { FiChevronsLeft,FiChevronsRight } from "react-icons/fi";

const PAGE_SIZE = 10;

const Pagination = () => {
  const [products, setProducts] = useState([]);

useEffect(() => {
    let fetchData = async function() {
      const response = await  fetch('https://fakestoreapi.com/products?limit=10')
      let data = await response.json();

      if (data) {
        setProducts(data);
      }
    }
    fetchData();
  }, []);

 return(
    <div>
      <h1>Pagination</h1>

      

      <div className="pagination">
        {
          products.map((product, id) => (
            <ProductCard key={id} image={product.image} title={product.title}/>
          ))
        }
      </div>
        </div>
 )
};


const pabox = ({num}) => {
  return (
    <div style={{width: "10px", height: "10px"}}>
      {num}
    </div>
  )
}


export default Pagination;
