import React from 'react'
import Header from './Header'
import '../index.css';



const Login = () => {
  return (
    <div  >

        <Header/>

        <img src="https://github.com/ayushiee/nextflix/blob/main/public/assets/loginBg.jpg?raw=true"/>
                        
        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0' >
            <input type="text" 
            placeholder="Email Adress" 
            className=' p-4 my-4 w-full bg-gray-700'
            />
            <input type="text" 
            placeholder="password" 
            className=' p-4 my-4 w-full bg-gray-700'
            />
            <button className=' p-4 my-6 bg-red-700 w-full rounded-lg'>
              signin
            </button>

          
        </form>


    </div>



    
  )
}

export default Login