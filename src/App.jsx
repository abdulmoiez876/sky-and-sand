import {useState} from 'react';
import axios from "axios";
import MyNavbar from './Components/Navbar/MyNavbar';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Hotels from './Components/Hotels/Hotels';
import Footer from './Components/Footer/Footer';
import TestimonialsCarousel from './Components/UI/TestimonialsCarousel';
import ContactUs from './Components/ContactUs/ContactUs';

const App = () => {
    const [selectedCountry, setSelectedCountry] = useState('Pakistan');
    const [showContact, setShowContact] = useState(false);
    const API_PATH = 'http://localhost:8000/Sky%20and%20Sand/Sky%20and%20Sand/skyandsand/PHP/index.php';
    const [result, setResult] = useState("");
    const [name, setName] = useState("");
    const handleChange = (e) => {
        setName(e.target.value);
    };
  
    const handleSumbit = (e) => {
        e.preventDefault();
        const form = (e.target);
        axios({            
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: this.state
          })
            .then(result => {
              console.log("AFRAZ")
            })
            .catch(error => this.setState({ error: error.message }));
        };
    function changeCountryHandler(country) {
        setSelectedCountry(country);
    }

    function showContactUs() {
        setShowContact(true);
    }

    function hideContactUs() {
        setShowContact(false);
    }
   
    return (
        <>
            {showContact && <ContactUs hideContactUs={hideContactUs}/>}
            <MyNavbar 
            showContactUs={showContactUs}
             onLoad={(event) => handleSumbit(event)}/>
            <Home 
                changeCountryHandler = {changeCountryHandler}
            />
            <Services onChange={(event) => handleChange(event)}/>
            <Hotels
                selectedCountry = {selectedCountry}
            />
            <TestimonialsCarousel/>
            <Footer/>
        </>
    )
}

export default App;