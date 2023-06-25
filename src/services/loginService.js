export async function Login({email,password}) {
 return fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: email,
      password: password,
      // expiresInMins: 60, // optional
    }),
  })
    .then((res) => res.json())
    .then(data=>{
        sessionStorage.setItem("user", JSON.stringify(data));
      console.log(data)
      if(data.token){
        return true
      }else{
        return false
      }
    });
  
}

