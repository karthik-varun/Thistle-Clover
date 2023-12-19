import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyB4sH1H6DTDB2tMAkpvIFisz19TrOUgcLI",
    authDomain: "thistle-clover.firebaseapp.com",
    projectId: "thistle-clover",
    storageBucket: "thistle-clover.appspot.com",
    messagingSenderId: "20521784974",
    appId: "1:20521784974:web:9f257dd909a21fa21cdbdf",
    measurementId: "G-D63GRWZ6HT"
  };



  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);   



  function myfun(){

    let email= document.getElementById('email').value
    let pass = document.getElementById('password').value
    


    if (pass.length<=4){
      alert('your password is too short')
    }
    else if (pass.length>=14){
      alert('your password is too long')
    }
    
    else if (!/[a-z]/.test(pass)){
      alert('password contain atleast one letter')
    }
    else if (!/\d/.test(pass)){
      alert('password conatin atleast one number')
    }
    
    else {
      alert('sucessfull')
    }
    createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    })
  };


  

module.myfun=myfun



function myfun1(){
  let email= document.getElementById('email1').value
    let pass = document.getElementById('password1').value
  signInWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    localStorage.setItem('email',email)
    localStorage.setItem('AccessToken',user.accessToken)
    alert('signIn successfully')
    window.location.href='./index.html'
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

module.myfun1=myfun1