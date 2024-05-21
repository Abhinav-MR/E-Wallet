function Regg(){
    window.location="./index.html"
}
function Reg(){
    window.location="./Register.html"
}
function log_out(){
    localStorage.clear();
    window.location="./index.html"
}

function Regg(){



    uname=user_name.value
    mail=user_mail.value
    pswd=user_pswd.value

 console.log(uname,mail,pswd);

 accountDetails={
    uname,
    mail,
    pswd,
    balance:0
 }

 if(uname in localStorage){
    alert("User already Exist")
 }
 else{
    localStorage.setItem(uname, JSON.stringify(accountDetails))
    alert("Registration successful")
    window.location="./index.html"
 }

}

function logg(){

    let username = document.getElementById('user_name').value
    console.log(username);
    localStorage.setItem('USERNAME',username);

uname=user_name.value
pswd=user_pswd.value
console.log(uname,pswd);

if(uname in localStorage){
    accountDetails=JSON.parse(localStorage.getItem(uname))
    if(pswd==accountDetails.pswd){
        alert("login successful")
        window.location="./Wallet.html"
    }
    else{
        alert("Incorrect password");
    }
}else{
    alert("User does not exist,Please register")
}
}
let totalbalance=0;
function inc(){
    type=inc_type.value
    amnt=inc_am.value
    amnt = Math.floor(amnt)

    income = {
        type,
        amnt,
        balance: 0,
    };
   
    uname = localStorage.key(0);

    if(uname in localStorage){
        accountDetails=JSON.parse(localStorage.getItem(uname))
        if(uname==accountDetails.uname && amnt<=0){
            alert("value cannot be empty or negative")
        }
        else{
            const currentDate = new Date();
        const formattedDate = currentDate.toLocaleString();
  
        totalbalance += amnt;
  
        alert("Amount added successfully");
        result_bal.innerHTML = `
        Rs${totalbalance}/-`;
        incometableresult.innerHTML += `<tbody>
          <td style=" border-bottom:5px #556B2F solid; height:45px;">${income.type}</td>
          <td style=" border-bottom:5px #556B2F solid; height:45px;">+${income.amnt}</td>
          <td style=" border-bottom:5px #556B2F solid; height:45px;">${totalbalance}</td>
          <td style=" border-bottom:5px #556B2F solid; height:45px;">${formattedDate}</td>
          </tbody>`;
  
        localStorage.setItem(uname, totalbalance);
        }
    }else{
        alert("Invalid account number")
    }

}


expense = 0;
  function exp() {
    type = exp_type.value;
    amnt = exp_am.value;
    amnt = Math.floor(amnt);
  
    if (type == "" || amnt == "" || amnt <= 0) {
      alert("Field cannot be empty");
    } else {
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleString();
  
      totalbalance -= amnt;
      expense += amnt;
      alert("Expense added successfully");
       result_bal.innerHTML = ` Rs${totalbalance}/-`;
  
       exp_bal.innerHTML = ` Rs${expense}/-
      `;
  
      expensetableresult.innerHTML += `<tbody>
        <td style=" border-bottom:5px #556B2F solid; height:45px;">${type}</td>
        <td style=" border-bottom:5px #556B2F solid; height:45px;">-${amnt}</td>
        <td style=" border-bottom:5px #556B2F solid; height:45px;">${totalbalance}</td>
        <td style=" border-bottom:5px #556B2F solid; height:45px;">${formattedDate}</td>
        </tbody>`;
  
      localStorage.setItem(uname, totalbalance);
    }
  }

  
  username=localStorage.getItem('USERNAME');
console.log(username);
profilename.innerHTML = `<i class="fa-solid fa-user fa-beat"></i>Welcome ${username}`

function clr(){
    confirm("Are you sure you want to clear data?");
    alert("All data cleared");
    inc_type.value=""
    inc_am.value=""
    exp_type.value=""
    exp_am.value=""
    result_bal.innerHTML = `Rs 0/-`;
    exp_bal.innerHTML = `Rs 0/-`;
    incometableresult.innerHTML = "";
    expensetableresult.innerHTML = "";
}