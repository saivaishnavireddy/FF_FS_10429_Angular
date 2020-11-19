let result: string = "";
function validateUser(firstName : string, lastName: string, age: number, gender:string,city:string, contactNumber:number, userId:number, password: string) {
    
    if(userId >= 0){
        if(firstName.length != 0){
            if(lastName.length != 0){
                if(age >= 0){
                    if(gender.length != 0){
                        if(city.length != 0){
                            if(contactNumber >= 0){
                                if(password.length != 0){
                                    console.log(`Dear ${firstName} successfully registered`);
                                }

                            }else {
                                result.concat('contactNumber');
                            }

                        }else{
                            result.concat('city ');
                        }

                    }else{
                        result.concat('gender ');
                    }
                }else{
                    result.concat('age ');
                }
               
            }else {
                result.concat('lastName ');
            }

            
        }else {
            result.concat('firstName ');
        }
        
    } else{
        result.concat('userId ');
    }
       
    
    let first_name = new String(firstName);
    if (first_name.length==0)
        return "First Name is mandatory field, please provide valid value";
    let last_name = new String(lastName);
    if (last_name.length==0){
        
        return "Last Name is mandatory field, please provide valid value";  
    }
    if(age <= 0)
        return "age is non zero, please provide valid value";
    let var_gender = new String(gender);
    if (var_gender.length==0)
        return "gender is mandatory field, please provide valid value";
    let var_city = new String(city);
    if (var_city.length==0){
         return "city is mandatory field, please provide valid value";
    }
       
    if(contactNumber <= 0)
        return "contactNumber is non zero, please provide valid value";
    let var_password = new String(password);
    if (var_password.length==0)
        return "password is mandatory field, please provide valid value";
    
    
    return `Dear ${firstName} !!! You have successfully registered`;
}
// let message: string = validateUser('sai vaishnavi','vugumudi',22,'female','bangalore',9182100600,51887851, 'vaishu@12');
 //let message: string = validateUser('','vugumudi',22,'female','bangalore',9182100600,51887851, 'vaishu@12');
// let message: string = validateUser('sai vaishnavi','',22,'female','bangalore',9182100600,51887851, 'vaishu@12');
//let message: string = validateUser('sai vaishnavi','vugumudi',0,'female','bangalore',9182100600,51887851, 'vaishu@12');
//let message: string = validateUser('sai vaishnavi','vugumudi',22,'','bangalore',9182100600,51887851, 'vaishu@12');
//let message: string = validateUser('sai vaishnavi','vugumudi',22,'female','',9182100600,51887851, 'vaishu@12');
//let message: string = validateUser('sai vaishnavi','vugumudi',22,'female','bangalore',0,51887851, 'vaishu@12');
//let message: string = validateUser('sai vaishnavi','vugumudi',22,'female','bangalore',9182100600,0, 'vaishu@12');
//let message: string = validateUser('sai vaishnavi','vugumudi',22,'female','bangalore',9182100600,51887851, '');
//let message: string = validateUser('sai vaishnavi','vugumudi',0,'female','bangalore',0,0, 'vaishu@12');
//let message: string = validateUser('','vugumudi',0,'female','bangalore',0,0, 'vaishu@12');
//let message: string = validateUser('sai vaishnavi','vugumudi',22,'female','bangalore',0,0, 'vaishu@12');


console.log(message);
