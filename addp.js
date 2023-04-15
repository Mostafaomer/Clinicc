    let doctor;

document.querySelectorAll(".dropdown-menu li a").forEach((e) => {
    e.addEventListener('click', (ee) => {
        doctor=ee.target.textContent;

    })
})
document.querySelector('.save').addEventListener('click' , () => {

        let code=document.querySelector(".code").value
        let paid=document.querySelector(".paid").value
        let toatl=document.querySelector(".total").value
        let reason=document.querySelector(".reason").value
        let phone=document.querySelector(".phone").value
        let pn=document.querySelector(".pn").value
        fetch("http://Clinic.somee.com/AddPatient", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "DoctorName":doctor,
                "PateintId":code,
                "Phone":phone,
                "paid":parseInt(paid),
                "PatientName":"mj",
                "Total":parseInt(toatl),
                "Reason":"d"
            })
        }).then((e)=> {
            window.location.href="index.html"
        })
    
})