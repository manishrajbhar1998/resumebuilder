function addNewWork(){
 let newNode = document.createElement('textarea');
 newNode.classList.add('form-control');
 newNode.classList.add('wkFeild');
 newNode.classList.add('my-2');
 newNode.setAttribute('row3',3);
 newNode.setAttribute('placeholder',"Enter here");

 let weOb = document.getElementById("we");
 let weAddButton = document.getElementById("addWork");

 weOb.insertBefore(newNode,weAddButton);
 
}

function addNewEdu(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eduFeild");
    newNode.classList.add('my-2');
    newNode.setAttribute('row3',3);
    newNode.setAttribute('placeholder',"Enter here");

    let weAddButton = document.getElementById("addEdu");
    let weOb = document.getElementById("aq");

    weOb.insertBefore(newNode,weAddButton)
}

// generating CV
function generateCV(){
    let nameFeild = document.getElementById("nameField").value;
    let namT1 = document.getElementById("nameT1");

    // for nameT1 and nameT2 
    nameT1.innerHTML = nameFeild;
    document.getElementById("nameT2").innerHTML = nameFeild;

    // for contact
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

    // address
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    // links
    let val1 = document.getElementById("fbField").value;
    document.getElementById("fbT").setAttribute("href",val1);
    document.getElementById("instaT").setAttribute("href",document.getElementById("instaField").value);
    document.getElementById("linkedT").setAttribute("href",document.getElementById("linkField").value);

    // objective
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    // work Exp
    let wes = document.getElementsByClassName("wkFeild");
    let str = '';
    for(let e of wes){
      str = str+`<li> ${e.value}</li>`;
    }
    document.getElementById("wrkT").innerHTML = str;

    // edu
    let equ = document.getElementsByClassName("eduFeild");
    let str1= '';
    for(let e of equ){
        str1 += `<li> ${e.value}</li>`;
    }
    document.getElementById("aqT").innerHTML = str1;

   // setting photo
   let file = document.getElementById("imgField").files[0];
   console.log(file);

   let reader = new FileReader();
   reader.readAsDataURL(file);
   console.log(reader.result);

   // set the image to tempatle
   reader.onloadend = function (){
    document.getElementById("imgT").src = reader.result;
   }


    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";

}

// printCV

function printCV(){
    window.print();
}