import React from "react";
import { useNavigate } from "react-router";
import './Sign.css';
import swal from "sweetalert"

export const Sign = ({data, setData}) => {

    const mostrarAlerta = () =>{
        swal({
                title: "Туура эмес",
                text: "Документти толук толтурунуз жана Парольду туура жазыныз!",
                icon: "error",
                button: "Макул"
        })
    }

    const navigate = useNavigate();

    const checkAccount = () => {
        let isEmail = "Okuuit@gmail.com"
        let isPassword = "nomad2022"

    

            if(isEmail == data.email && isPassword == data.password){
                navigate("/lesson")
            } else {
                mostrarAlerta() 
            }
    }

    return (
      <div>
           <div className="signBlock" >
                <div className='sign'>
                        <h1 className='sign_title'>Катталуу</h1>
                        <div className='textfield'>
                            <label htmlFor='Your Name'>Аты жөнү</label>
                            <input
                                className="input"
                                type='text'
                                placeholder='Аты жөнү'
                                name={'name'}
                                value={data.name}
                                onChange={setData}
                            />
                        </div>
                        <br />
                        <div className='textfield'>
                            <label htmlFor='Email'>Email</label>
                            <input
                                className="input"
                                type='email'
                                placeholder='Электрондук дарек'
                                name={'email'}
                                onChange={setData}
                            />
                        </div>
                        <br />
                        <div className='textfield'>
                            <label htmlFor='Password'>Пароль</label>
                            <input
                                className="input"
                                type='password'
                                placeholder='Пароль'
                                name={'password'}
                                value={data.password}
                                onChange={setData}
                            />
                        </div>
                        <button
                            className='sign__btn1'
                            danger
                            onClick={() => {
                                checkAccount()
                            }}
                          
                        >
                            Kирүү
                        </button>
                </div>
           </div>
      </div>
    );
};