import {useState, useEffect} from 'react';
// import axios from '../http/Axios';
// import SiteBar from '../components/SiteBar';


export default function  Home(){
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [res, setRes] = useState(false);
    

  
      const handleIn = () => {
        console.log(name + mail);
            setRes(true);
      }

      return (
            <>
                    <input name= 'name' onChange={(e) => setName(e.target.value)}></input>
                    <input name= 'mail' onChange={(e) => setMail(e.target.value)}></input>
                    <button onClick={handleIn}></button>
                    { res && <p>Success!</p> }
                    
            </>

      );
      }