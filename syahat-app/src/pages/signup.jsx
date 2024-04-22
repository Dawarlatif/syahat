import Header from '../components/header.jsx'
import Step1 from "../components/Signup/Step1.jsx";
// import Step2 from '../components/Signup/Step2.jsx';
// import Step3 from '../components/Signup/Step3.jsx';
// import Step4 from '../components/Signup/Step4.jsx';
// import Step5 from '../components/Signup/Step5.jsx';
// import Step6 from '../components/Signup/Step6.jsx';

const Signup=()=>{

  return (
    <div className='w-full h-auto md:h-screen flex flex-wrap justify-center items-center signupImage ' >
         <Header />
     
   
      <Step1 />
      {/* <Step2 /> */}
      {/* <Step3 /> */}
      {/* <Step4 /> */}
      {/* <Step5 /> */}
      {/* <Step6 /> */}
   
    </div>
  
 
  )
}

export default Signup;