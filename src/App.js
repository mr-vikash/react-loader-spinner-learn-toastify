
import './App.css';
import Header from './components/Header';
import {useState,useEffect} from 'react'
import {TailSpin,Bars,BallTriangle,Dna} from 'react-loader-spinner'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer,toast} from 'react-toastify'

const  App =()=> {

  const [loading,setLoading] = useState(false);
  const [data,setData] = useState([]);
  useEffect(()=>{
     const fetchData = async()=>{
       setLoading(true);
       const res = await fetch("https://hub.dummyapis.com/employee?noofRecords=1000&idStarts=1001");
       const finalRes = await res.json();
       setData(finalRes)
       setLoading(false);
       toast.success("Email fetched successfully")
     }
     fetchData();
  },[])

  console.log(data);
  return (
    <div className="App">
     <Header/>
     <ToastContainer/>
     <div>
     {
     loading 
     ? 
     <div className='spinner'>
          <Dna/>
     </div>
    
     :
      data.map((e,i)=>{
        return(
          <div key={i}>
           <p >{e.email}</p>
        </div>
        )   
      })
     }
     </div>
     
    </div>
  );
}

export default App;
