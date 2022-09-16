let submit_button = document.getElementById('submit')

submit_button.addEventListener('click', ()=> {
    let my_name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone_no = document.getElementById('phone').value
    let desc = document.getElementById('desc').value

    localStorage.setItem('FormData', [[my_name, email, phone_no, desc]])
    console.log('Form Submitted Successfully')

})