// Array of current Users.
let current_users = ["Shahid", "Musfirah", "Hani", "Hadi", "Zahid"];

// Array of new Users.
let new_users = ["Rashid", "shahid", "Shahzad", "Ali", "Musfirah"];

// Loop through new_Users to check for usernames availability.

new_users.forEach(new_one_user =>{
   let condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
   if(condition){
       console.log(`Sorry ${new_one_user} is already taken.`)
   }else{
       console.log(`This username ${new_one_user} is available.`)
   }
})