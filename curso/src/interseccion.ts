 interface User  {
    name: string, 
    startDate: Date
 }

 interface Admin  {
    name: string,
    permission: string 
 }

interface UserAdmin extends User, Admin  {}