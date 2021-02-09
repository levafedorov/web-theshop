import {useState, React} from 'react'
import {Button, ButtonGroup} from "react-bootstrap";



export default function ItemsFilter() {
   const [from, setFrom] = useState(0);
   const [to, setTo] = useState(0);
   const [category, setCategory] = useState("all");
   const [sort, setSort] = useState("name");
   
   const handleFrom = ({target: {value}}) => {
    if(value >= 0){
            setFrom(value);
            if(to < value){
                setTo(value);
             }
    }
   }

   const handleTo = ({target: {value}}) => {
        if(value > from){
            setTo(value);
        }
     
    } 

    return (
        <div className="items-filter p-3 mb-5 bg-light">
            <form action="" className="items-filter__form">
                <div className="items-filter__box">                
                        <label className="items-filter__label">
                           Price from: 
                            <input type="number" name="rangeFrom" className="items-filter__range" value={from} onChange={handleFrom}/> 
                        </label>
                        <label className="items-filter__label">
                            to:
                            <input type="number" name="rangeTo" className="items-filter__range" value={to} onChange={handleTo}/> 
                        </label>
                </div>
                <div className="items-filter__box">
                    <label className="items-filter__label">
                        Categories:
                      <select 
                      name="category" 
                      id="filter-category" 
                      className="items-filter__select"
                      value={category} onChange={({target:{value}}) => setCategory(value)}>
                         <option value="all">all</option>
                         <option value="electronics">electronics</option>    
                         <option value="jewelery">jewelery</option>
                         <option value="men clothing">men clothing</option>
                         <option value="women clothing">women clothing</option>
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
                                <option value="name">name</option>
                                <option value="price">price</option>
                            </select> 
                      </label>
                  </div>
                  <ButtonGroup toggle className="items-filter__box">
                    <Button variant="secondary">Start</Button>
                  </ButtonGroup>
            </form>
        </div>    
    )
}
