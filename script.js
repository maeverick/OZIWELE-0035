let data = [
    {
     Id : 1,
     fullname: "Sophia Yates",
     email: "ekeerja@orzutke.pe",
     phone: "(854) 615-6874",
     dept: "OS",
     job :"Analyst",
     dob: "2004-08-10T18:29:27-07:00",
     Doh: "2000-01-10T09:33:01-08:00",
     experience: 12
    },
    {
        Id : 2,
        fullname: "Ethel McLaughlin",
        email: "egahut@beowape.kw",
        phone: "(836) 263-9338",
        dept: "OS",
        job :"Analyst",
        dob: "2004-08-10T18:29:27-07:00",
        Doh: "2000-01-10T09:33:01-08:00",
        experience: 10
       },
       {
        Id : 3,
        fullname: "Myrtie Bennett",
        email: "tujdeb@zalar.lr",
        phone: "(389) 442-6795",
        dept: "frontend Developer",
        job :"Cybersecurity Analyst",
        dob: "2004-08-10T18:29:27-07:00",
        Doh: "2000-01-10T09:33:01-08:00",
        experience: 10
       },
       {
        Id : 4,
        fullname: "Francisco Holloway",
        email: "puh@pa.bj",
        phone: "(371) 925-2951",
        dept: "OS",
        job :"Backend Developer",
        dob: "2004-08-10T18:29:27-07:00",
        Doh: "2000-01-10T09:33:01-08:00",
        experience: 10
       },
       {
        Id : 5,
        fullname: "Landon Cain",
        email: "dawowet@poeb.aq",
        phone: "(719) 462-1663",
        dept: "OS",
        job :"Analyst",
        dob: "2004-08-10T18:29:27-07:00",
        Doh: "2000-01-10T09:33:01-08:00",
        experience: 10
       },
       {
        Id : 6,
        fullname: "Tommy Quinn",
        email: "mechige@tuopejo.gb",
        phone: "(687) 754-8939",
        dept: "OS",
        job :"Analyst",
        dob: "2004-08-10T18:29:27-07:00",
        Doh: "2000-01-10T09:33:01-08:00",
        experience: 10
       },
       {
        Id : 7,
        fullname: "Katherine Morris",
        email: "icipon@motfub.ni",
        phone: "(365) 544-1537",
        dept: "OS",
        job :"Business analyst",
        dob: "2004-08-10T18:29:27-07:00",
        Doh: "2000-01-10T09:33:01-08:00",
        experience: 10
       },
       {
        Id : 8,
        fullname: "Louise Day",
        email: "fofawfor@wul.cm",
        phone: "(441) 514-3636",
        dept: "OS",
        job :"Analyst",
        dob: "2004-08-10T18:29:27-07:00",
        Doh: "2000-01-10T09:33:01-08:00",
        experience: 10
       },
       {
        Id : 9,
        fullname: "Ernest Gonzalez",
        email: "bekindal@mosjiezi.ar",
        phone: "(218) 839-4896",
        dept: "OS",
        job :"Analyst",
        dob: "2004-08-10T18:29:27-07:00",
        Doh: "2000-01-10T09:33:01-08:00",
        experience: 10
       },
       {
        Id : 10,
        fullname: "Ina Anderson",
        email: "ke@zuvaid.tg",
        phone: "(554) 895-2766",
        dept: "OS",
        job :"Analyst",
        dob: "2004-08-10T18:29:27-07:00",
        Doh: "2000-01-10T09:33:01-08:00",
        experience: 10
       }

]

const readAll = () => {
    localStorage.setItem("item",JSON.stringify(data))
    const tbody = document.querySelector(".tbody");
    const item = localStorage.getItem("item")
     const itemdata = JSON.parse(item);
    
     var elements = "";
     itemdata.map((record) =>{
        let  {Id,fullname,email,phone,dept,job,dob,Doh,experience} = record;

        elements += `
       <tr>
                    <td>${Id}</td>
                    <td>${fullname}</td>
                    <td>${email}</td>
                    <td>${phone}</td>
                    <td>${dept}</td>
                    <td>${job}</td>
                    <td>${dob}</td>
                    <td>${Doh}</td>
                    <td> $${experience* 1000}</td>
                    <td><button class ="edit sub" onclick="edit(${record.Id})">Edit</button></td>
                    <td><button class ="delete sub" onclick="delet(${record.Id})">Delete</button></td>
                </tr>
        `
     })
     tbody.innerHTML = elements;
     }
    
     const search = document.querySelector("#search")

     const newTable = () =>{
        const newData = searchTable(search.value , data)
        buildData(newData);
     }
    search.addEventListener('keyup', newTable)


const searchTable= (identity, item) => {
     let filteredData =[]
     for (obj in item){
        identity = identity.toLowerCase()
        const nam = obj.fullname.toLowerCase()

        if(nam.includes(identity)){
            filteredData.push(obj)
        }
     }
     return filteredData
}


     const delet = (Id) => {
        data = data.filter(rec => rec.Id !== Id);
        readAll()
    }


     const create = () => {
        document.querySelector(".form").style.display = "block"
        document.querySelector(".table").style.display = "none"
        document.querySelector("#create").style.display = "block"
        document.querySelector("#update").style.display = "none"
     }
     
     const show =  document.querySelector(".input");
     show.addEventListener("click", create)


   const line = document.querySelector(".fill")

     const fill = () =>{
            const fullname = document.querySelector(".fullname").value;
            const email = document.querySelector(".email").value;
            const phone = document.querySelector(".phone").value;
            const dept = document.querySelector(".dept").value
            const dob = document.querySelector(".DoB").value;
            const Doh = new Date;
            const experience = document.querySelector(".experience").value;
            const job = document.querySelector(".job").value;
            let vra = Math.random();
            let random = (vra * 100) + 1;
            random= Math.floor(random)
            const Id = random;
        ;
           
        const newObj = {
            Id,
            fullname,
            email,
            phone,
            dept,
            job ,
            dob,
            Doh,
            experience
        }
        data.push(newObj);
       
        alert("Info Added successfully!!")
        readAll()
     }

    line.addEventListener("click", fill)


    const  edit = (Id) =>{
        document.querySelector(".form").style.display = "block"
        document.querySelector("#create").style.display = "none"
         document.querySelector("#update").style.display = "block"
            document.querySelector(".table").style.display = "none"
        const obj = data.find(rec => rec.Id === Id);
        document.querySelector(".ufullname").value = obj.fullname;
        document.querySelector(".uemail").value = obj.email;
            document.querySelector(".uphone").value =  obj.phone;
            document.querySelector(".udept").value = obj.dept
                    document.querySelector(".uDoB").value = obj.dob;
             document.querySelector(".uexperience").value = obj.experience;
           document.querySelector(".ujob").value = obj.job;
           document.querySelector(".id").value = obj.Id
    }
  
const update = () => {
    const Id = parseInt(document.querySelector(".id").value);
    const fullname = document.querySelector(".ufullname").value
    const email = document.querySelector(".uemail").value
    const phone = document.querySelector(".uphone").value 
    const dept = document.querySelector(".udept").value 
    const dob = document.querySelector(".uDoB").value 
    const Doh = new Date;
    const experience = document.querySelector(".uexperience").value
    const job = document.querySelector(".ujob").value

    let index = data.findIndex(rec => rec.Id === Id)
    data[index] = {
        Id,
        fullname,
        email,
        phone,
        dept,
        job ,
        dob,
        Doh,
        experience
    }
    readAll();
    alert(" Update Successful")
}

const review = document.querySelector(".review")
review.addEventListener("click", update)

const check = () => {
    document.querySelector(".table").style.display = "block"
    document.querySelector(".form").style.display = "none";
console.log();
}
const check2 = () => {
    document.querySelector(".table").style.display = "block"
    document.querySelector(".form").style.display = "none";
console.log();
}
const che = document.querySelector(".che")
const che2 = document.querySelector(".che2")

che.addEventListener("click", check)
che2.addEventListener("click", check)