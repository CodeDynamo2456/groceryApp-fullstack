import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";


export const AppContext = createContext();

export const AppContextProvider =({children})=>{


    const currency = import.meta.VITE_CURRENCY;

    const navigate = useNavigate()
    const [user,setuser] = useState(null)
    const [isSeller,setIsSeller] = useState(null)
    const [showUserLogin, setShowUserLogin] = useState(false)
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState({})

    //   fetching Products
     const fetchProducts = async () =>{
        setProducts(dummyProducts)
    }


    // Add product to cart

    const addToCart = (ItemId)=>{
        let cartData = structuredClone(cartItems)

        if(cartItems[ItemId]){
            cartData[ItemId] += 1
        }
        else{
            cartData[ItemId] = 1
        }
        setCartItems(cartData)
        TransformStream.succes("Added to Cart")
    }

    // update cart

    const updateCartItem = (ItemId,quantity)=>{
        let cartData = structuredClone(cartItems)
        cartItems[ItemId] = quantity;
        setCartItems(cartData)
        toast.success("Cart Updated")
    }

    // Remove Product from Cart

    const removeFromCart = (ItemId)=>{
        let cartData = structuredClone(cartItems)
        if(cartData[ItemId]){
            cartData[ItemId] -=1;
            if(cartData[ItemId]===0){
                delete cartData[ItemId]
            }
        }
        toast.success("Remove from Cart")
        setCartItems(cartData)
    }
    


    


     useEffect(()=>{
        fetchProducts()
        console.log(products)
     },[])


    const value ={navigate,user,setuser,setIsSeller,isSeller,showUserLogin,setShowUserLogin,products,currency,addToCart,updateCartItem,removeFromCart,cartItems}
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
} 

export const useAppContext =()=>{
    return useContext(AppContext)
}

