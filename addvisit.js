document.querySelector(".addvisit").addEventListener("click", () => {
    console.log(document.querySelector('input').value);
    fetch( `http://Clinic.somee.com/AddVisit?patientId=${localStorage.getItem("id")}&paid=${document.querySelector('input').value}`).then((e)=> {
        window.location.href="Visits.html"
    })
})
