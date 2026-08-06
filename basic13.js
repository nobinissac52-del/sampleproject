function login(username,password){
    try{
          if(username===""||password===""){
            console.log("username and password cannot be empty");
          }
          else if(username==="admin" && password=== "admin123"){
            console.log ("login successful");
          }
          else {
            console.log ("invalid username or password ");
          }
    }
    catch(error){
        console.log ("An error occured during login:",error.massage);
        console.log("Please try again later.");
    }
    finally{
        console.log("Login attempt finished.");
    }
}
login("admin"," password123");
