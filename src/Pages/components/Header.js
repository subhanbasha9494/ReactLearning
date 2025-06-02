import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
    const [btnName, setBtnName] = useState("Logout");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-10">
            <div className="logo-container">
                <img className="w-24 h-auto" src="https://marketplace.canva.com/EAGFKseLJto/2/0/1200w/canva-orange-and-blue-illustrative-circle-food-logo-0sJ4GmZGuS8.png" alt="Logo" />
            </div>
            <div className="nav-items">
                <ul className="flex items-center space-x-6">
                    <li className="flex items-center text-sm font-medium text-gray-600">
                        <span className="mr-1">Status:</span> { onlineStatus ? "✅" : "🔴" }
                    </li>
                    <li><Link to="/" className="text-gray-800 hover:text-orange-500 transition-colors font-medium">Home</Link></li>
                    <li><Link to="/about" className="text-gray-800 hover:text-orange-500 transition-colors font-medium">About Us</Link></li>
                    <li><Link to="/contact" className="text-gray-800 hover:text-orange-500 transition-colors font-medium">Contact Us</Link></li>
                    <li className="font-bold"><Link to="/cart" className="text-gray-800 hover:text-orange-500 transition-colors font-medium">Cart - {cartItems.length}</Link></li>
                    <li><Link to="/grocery" className="text-gray-800 hover:text-orange-500 transition-colors font-medium">Grocery</Link></li>
                    <button 
                        type="button" 
                        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors font-medium"
                        onClick={() => {
                            btnName === 'Login' ? setBtnName("LogOut") : setBtnName("Login");
                        }}
                    >
                        {btnName}
                    </button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;