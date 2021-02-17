import {useState, useEffect, React} from 'react'
import {Button, ButtonGroup} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {changeCategory, changeSort, changePage} from "../../Redux/actions/itemsActions";




export default function ItemsFilter() {
   const [category, setCategory] = useState("");
   const [sort, setSort] = useState("?sort=asc");
   const [categories, setCategories] = useState(null);

   const dispatch = useDispatch();
   const isCategory = useSelector(state => state.items.category); 

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
        .then((res) => res.json())
        .then((value) => {
            setCategories(value);
        });
    }, []);




   
    const handleCategory = ({target: {value}}) => {
            setCategory(value)
    }


    const onSubmit = (e) => {
        e.preventDefault();
            dispatch(changeCategory(category));
            dispatch(changeSort(sort));
            dispatch(changePage(2));
    }
    
   


    return (
        <div className="items-filter p-3 mb-5 bg-light">
            <form action="" className="items-filter__form" onSubmit={onSubmit}>
            <div className="items-filter__box">
                    <label className="items-filter__label">
                        Categories:
                      <select 
                      name="category" 
                      id="filter-category" 
                      className="items-filter__select"
                      value={category} onChange={handleCategory}>
                         <option value="">all</option>
                         { categories ? 
                           categories.map(
                             (item, i) => <option value={`/category/${encodeURIComponent(item)}`} key={`key-${i}`}>{item}</option>
                             ):
                           null  
                        }
                         {/* <option value="electronics">electronics</option>    
                         <option value="jewelery">jewelery</option>
                         <option value="men clothing">men clothing</option>
                         <option value="women clothing">women clothing</option> */}
                      </select> 
                    </label>
               </div>
               <div className="items-filter__box">
                     <label className="items-filter__label">
                                Sort by:
                            <select 
                            name="sortBy" 
                            id="sort-by" 
                            className="items-filter__select"
                            value={sort} onChange={({target:{value}}) => setSort(value)}
                            >   
                                <option value="?sort=asc">unsorted</option>
                                <option value="?sort=desc">description</option>
                                <option value="?sort=lowest">lowest price</option>
                                <option value="?sort=highest">highest price</option>
                            </select> 
                      </label>
                  </div>
                  <ButtonGroup toggle className="items-filter__box">
                    <Button variant="secondary" type="submit">Start</Button>
                  </ButtonGroup>
            </form>
        </div>    
    )
}
