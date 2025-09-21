
//disable default website validation
const myForm = document.querySelector(".form");
myForm.noValidate = true;

//setting up custom validation
myForm.addEventListener('submit', validateForm)

function validateForm(e){
    const form = e.target;

    if(form.checkValidity()){
        // form is valid
    }
    else{
        //form is invalid
        e.preventDefault();
        Array.from(form.elements).forEach(i => {
            if (i.checkValidity()) {
                // field is valid - remove class
                i.parentElement.classList.remove('invalid');
            }
            else {
                // field is invalid - add class
                i.parentElement.classList.add('invalid');
            }
        });
    }
};
