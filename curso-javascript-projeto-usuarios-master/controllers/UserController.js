class UserController{

    constructor(formId){
        this.formEl = document.getElementById(formId);
    }

    onSubmit(){
        this.formEl.addEventListener("submit", function(event){
            event.preventDefault();
            this.getValues();
        })
    }




    getValues(){
        let user = {}

        this.formEl.elements.forEach((field, index) =>{
            if (field.name == "gender") {
                if (field.checked) {
                    user[field.name] = field.value
                }
            } else {
                user[field.name] = field.value;
            }
        });
        
        return new User(user.name, user.gender, user.birth, user.country, user.email, user.password, user.photo, user.admin)
        
        
    }
}