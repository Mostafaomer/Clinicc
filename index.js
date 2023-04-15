getpatient()

setTimeout(() => {
    const btns=document.querySelectorAll(".visit")
    btns.forEach(element => {
        element.addEventListener('click' , () => {
          localStorage.setItem('id',element.getAttribute("data-id"))
          window.location.href="Visits.html"
        })
    });

    const dels=document.querySelectorAll(".delete")
    dels.forEach(element => {
        element.addEventListener('click' , () => {
          fetch(`http://Clinic.somee.com/Delete?id=${element.getAttribute("data-id")}`).then((e)=>{
            window.location.reload()
          })
        })
    });

    const adds=document.querySelectorAll(".add")
    adds.forEach(element => {
        element.addEventListener('click' , () => {
          localStorage.setItem('id',element.getAttribute("data-id"))
            window.location.href="AddVisit.html"
        })
    });
}, 500);
async function getpatient() {
    const tbody=document.querySelector('tbody')
    const res=await fetch('http://Clinic.somee.com/GetAll')
    const data= await res.json()
    data.forEach(element => {

        let tr=document.createElement('tr')
        let code=document.createElement('td')
        code.scope='row'
        code.textContent=element.pateintId
        tr.appendChild(code)

        let pn=document.createElement('td')
        pn.scope='row'
        pn.textContent=element.patientName
        localStorage.setItem("name",pn.textContent)

        tr.appendChild(pn)

        let phone=document.createElement('td')
        phone.scope='row'
        phone.textContent=element.phone
        tr.appendChild(phone)

        let res=document.createElement('td')
        res.scope='row'
        res.textContent=element.reason
        tr.appendChild(res)

        let dn=document.createElement('td')
        dn.scope='row'
        dn.textContent=element.doctorName
        tr.appendChild(dn)
        
        let total=document.createElement('td')
        total.scope='row'
        total.textContent=element.total
        tr.appendChild(total)

        let paid=document.createElement('td')
        paid.scope='row'
        paid.textContent=element.paid
        tr.appendChild(paid)

        let btn=document.createElement('td')
        btn.scope='row'
        btn.innerHTML=`
            <button type="button" data-id=${code.textContent} class="visit btn btn-outline-success">Get Visits</button>
            <button type="button" data-id=${code.textContent} class="add btn btn-outline-success">Add Visit</button>
            <button type="button" data-id=${code.textContent} class="delete btn btn-outline-danger">Delete</button> `
        tr.appendChild(btn)
        tbody.appendChild(tr)
        
    });
}



function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.querySelector(".search");
  filter = input.value.toUpperCase();
  table = document.querySelector(".table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}