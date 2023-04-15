async function getVisits() {
    const tbody=document.querySelector('tbody')
    let res=await fetch(`http://Clinic.somee.com/GetVisitsByPatient?id=${localStorage.getItem("id")}`) 
    let data=await res.json()
    console.log(data);
    data.forEach(element => {

        let tr=document.createElement('tr')

        let date=document.createElement('td')
        date.scope='row'
        date.textContent=element.date
        tr.appendChild(date)

        let paid=document.createElement('td')
        paid.scope='row'
        paid.textContent=element.paidNow
        tr.appendChild(paid)
        tbody.appendChild(tr)

    })
}
getVisits()
const p=document.querySelector('p')
p.innerHTML=""
p.innerHTML=localStorage.getItem("name")