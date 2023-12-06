import React, { useRef, useState } from 'react'

function Sigup() {
    
 let firstNameinputRef= useRef();
 let lastNameinputRef= useRef();
 let emailinputRef= useRef();
 let passwordinputRef= useRef();
 let profilepicinputRef= useRef();
 let [profilepic, setprofilepic] =useState("./images/profile.png");

 let sendSignupDataToServer = async()=>{

    let myHeader = new Headers();
    myHeader.append("content-type","application/json");

     let dataToSend = {
        fn:firstNameinputRef.current.value,
        ln:lastNameinputRef.current.value,
        email:emailinputRef.current.value,
        password:passwordinputRef.current.value,
        profilepic:profilepicinputRef.current.value,
     };

    let reqOptions = {
        method:"POST",
        headers:myHeader,
        body:JSON.stringify(dataToSend)
    };

    let jSONData = await fetch("http://localhost:1111/signup",reqOptions);
    let jSOData = await jSONData.json();

    console.log(jSOData);
 };

let sendSignupDataToServerURLEncoded = async()=>{

let myHeader = new Headers()
myHeader.append("content-type","application/x-www-form-urlencoded")

let dataToSend = new URLSearchParams();
dataToSend.append("fn",firstNameinputRef.current.value);

dataToSend.append("ln",lastNameinputRef.current.value);

dataToSend.append("email",emailinputRef.current.value);

dataToSend.append("password",passwordinputRef.current.value);

for(let i=0;i< profilepicinputRef.current.files;i++)
{
    dataToSend.append("profilepic",profilepicinputRef.current.files[i]);
}



let reqOptions = {
    method:"POST",
    headers:myHeader,
    body:dataToSend,

};

let jSONData = await fetch ("http://localhost:1111/signup",reqOptions)

let jSOData = await jSONData.json();

console.log(jSOData);

};



let sendSignupDataToServerFormData = async()=>{

    
    let dataToSend = new FormData();
    dataToSend.append("fn",firstNameinputRef.current.value);
    
    dataToSend.append("ln",lastNameinputRef.current.value);
    
    dataToSend.append("email",emailinputRef.current.value);
    
    dataToSend.append("password",passwordinputRef.current.value);
    
    for(let i=0;i< profilepicinputRef.current.files.length;i++)
    {
        dataToSend.append("profilepic",profilepicinputRef.current.files[i]);
    }
    
    
    
    let reqOptions = {
        method:"POST",
    
        body:dataToSend,
    
    };
    
    let jSONData = await fetch ("http://localhost:1111/signup",reqOptions)
    
    let jSOData = await jSONData.json();
    
    console.log(jSOData);
    
    };
    
    



  return (
    <div>
        <fieldset>
            <legend>PLEASE FILL THE FORM 🕵🏻‍♂️  🧑🏼‍💻</legend>
        <form>
            <div>
                <label >First Name :</label>
                <input ref={firstNameinputRef}></input>
            </div>
            <div>
                <label>Last Name :</label>
                <input ref={lastNameinputRef}></input>
            </div>

            <div>
                
                <label>Email :</label>
                <input ref={emailinputRef}></input>
            </div>

            <div>
                <label>Password :</label>
                <input  ref={passwordinputRef}></input>
            </div>

            <div>
                <label>Profile Pic :</label>
                <input  ref={profilepicinputRef}
                type='file'multiple onChange={()=>{

                    let selectedFileURL= URL.createObjectURL
                    (profilepicinputRef.current.files[0])
                    setprofilepic(selectedFileURL);



                }}></input>
            </div>
            <div>

                <img className='profile' src={profilepic}></img>
            </div>


            <div>
                <button type="button"
                 onClick={()=>{
                    sendSignupDataToServer();

                }}>
                    Sign Up(JSON)
                    </button>
                    <br></br>
                    <br></br>

                    <button type="button"
                 onClick={()=>{
                    sendSignupDataToServerURLEncoded();

                }}>
                    Sign Up(URLEncoded)
                    </button>


                    <button type="button"
                 onClick={()=>{
                    sendSignupDataToServerFormData();

                }}>
                    Sign Up(Form Data)
                    </button>
                    

            </div>

        </form>
        </fieldset>
    </div>
  )
}

export default Sigup