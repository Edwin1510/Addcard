import { useState } from "react";
import styles from "./Book.module.css"
const itemdata = [
    {
      id: 1,
      firstName: "Special Item",
      prize:"$18.00",
    },
  {
      id: 2,
      firstName: "Sale Item",
      prize:"$10.00",
    },
  {
      id: 3,
      firstName: "Popular Item",
      prize:"$20.00",
    },
  {
      id: 4,
      firstName: "Fancy Product",
      prize:"$30.00",
    },
  {
      id: 5,
      firstName: "Special Item",
      prize:"$40.00",
    },
  {
      id: 6,
      firstName: "Popular Item",
      prize:"$50.00",
    },
   
  ];

  const Book=({firstName,prize,handlelike,book=false})=>{
    
    return(
        <div className={styles["student-root"]}>
            <h3>{firstName}</h3>
            <h3>{prize}</h3>
            <span onClick={()=>handlelike(firstName)} >
                <button className={styles["like-count"]}>{book ? "Remove from Cart":"Add to Cart"}</button>
            </span>
        </div>
    )
  }

  const Books=()=>{
    
    const[itembook,setitembook]=useState([])
    const handlelike=(name)=>{
        if(itembook.includes(name)){
            setitembook(itembook.filter((repeatname)=>repeatname!==name)
            )   
          }
        else{
            setitembook([...itembook,name]) 
        }
        
    }
       
    
    return(
        <>
        {console.log(itembook)}
        <div className={styles["liked-count"]}>
        <i className="fa-solid fa-thumbs-up fa-2x"></i> Card (
        {itembook.length})
      </div>
        <div className={styles["students-root"]}>
            {itemdata.map((data)=>{
                return(
                    <Book

                    key={data.id}
                    {...data}
                    handlelike={handlelike}
                    book={itembook.includes(data.firstName)}  
                    />
                )

            })} 
        </div>
        </>
    )
  }
  export default Books;



  