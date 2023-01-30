//---------------------------------------------- All variables declaration ----------------------------------------------------//

let salary = 0;
let deduction = 0;
let interest = 0;
let otherIncome = 0;
let homeLoan = 0;
let rentalIncome = 0;
let interestLoan = 0;
let basicDeduction = 0;
let interestDeposit = 0;
let medicalInsurance = 0;
let charityDonation = 0;
let educationalLoan = 0;
let housingLoan = 0;
let employeeContribution = 0;
let totalIncome = 0;
let totalDeduction = 0;
let taxableIncome = 0;
let oldRegimeTax = 0;
let newRegimeTax = 0;
let regime = null;
let ageData = null;
let income = 0;
let selectRegime=null
let chooseRegime=null

//--------------------------------------- Radio button function to get values -----------------------------------------------//

function displayRadioValue() {
  var ele = document.getElementsByName("year");
  var age = document.getElementsByName("age");

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) regime = ele[i].value;
  }

  for (i = 0; i < age.length; i++) {
    if (age[i].checked) ageData = age[i].value;
  }
}

displayRadioValue();

//-----------------------------------Functions to get the value of required fields-------------------------------------------//

function getSalary(el) {
  salary = +el.value;
}

function getDeduction(el) {
  deduction = +el.value;
}

function getInterest(el) {
  interest = +el.value;
}

function getotherIncome(el) {
  otherIncome = +el.value;
}

function gethomeLoan(el) {
  homeLoan = +el.value;
}

function getrentalIncome(el) {
  rentalIncome = +el.value;
}

function getinterestLoan(el) {
  interestLoan = +el.value;
}

function getbasicDeduction(el) {
  basicDeduction = +el.value;
}

function getinterestDeposit(el) {
  interestDeposit = +el.value;
}

function getmedicalInsurance(el) {
  medicalInsurance = +el.value;
}

function getcharityDonation(el) {
  charityDonation = +el.value;
}

function geteducationalLoan(el) {
  educationalLoan = +el.value;
}

function gethousingLoan(el) {
  housingLoan = +el.value;
}

function getemployeeContribution(el) {
  employeeContribution = +el.value;
}

//---------------------------------------------Tax Calculation function-------------------------------------------------------//

function calculate() {
  if (ageData == "0 to 60") {

    income = salary + interest + otherIncome + homeLoan + rentalIncome + interestLoan;

    totalIncome = income - deduction;

    totalDeduction =basicDeduction +interestDeposit +medicalInsurance +charityDonation +educationalLoan +housingLoan +employeeContribution;

    document.getElementById("old_gross").innerHTML = totalIncome;
    document.getElementById("old_deduction").innerHTML = totalDeduction;
    document.getElementById("new_gross").innerHTML = income;
    document.getElementById("new_deduction").innerHTML = 0;
   
    taxableIncome = totalIncome - totalDeduction;
    // console.log(taxableIncome)

    if (taxableIncome == 0) {
      document.getElementById("old_tax").innerHTML = 0;
      document.getElementById("new_tax").innerHTML = 0;
    }
    else {
      if (taxableIncome <= 250000) {
        oldRegimeTax = 0;
        oldRegimeTax = oldRegimeTax + (oldRegimeTax * 4) / 100;
        // console.log(tax)
        document.getElementById("old_tax").innerHTML = oldRegimeTax;
       
      }

      else if (taxableIncome > 250000 && taxableIncome <= 500000) {
        oldRegimeTax = ((taxableIncome - 250000) * 5) / 100;
        oldRegimeTax = oldRegimeTax + (oldRegimeTax * 4) / 100;
        // console.log(tax)
        document.getElementById("old_tax").innerHTML = oldRegimeTax;
       
      }

      else if (taxableIncome > 500000 && taxableIncome <= 1000000) {
        oldRegimeTax = ((taxableIncome - 500000) * 20) / 100 + 12500;
        oldRegimeTax = oldRegimeTax + (oldRegimeTax * 4) / 100;
        // console.log(tax)
        document.getElementById("old_tax").innerHTML = oldRegimeTax;
       
      }

      else if (taxableIncome > 1000000) {
        oldRegimeTax = ((taxableIncome - 1000000) * 30) / 100 + 112500;
        oldRegimeTax = oldRegimeTax + (oldRegimeTax * 4) / 100;
        // console.log(tax)
        document.getElementById("old_tax").innerHTML = oldRegimeTax;
     
      }
    }
  }

  if (ageData == "60 to 80") {
    income = salary + interest + otherIncome + homeLoan + rentalIncome + interestLoan;
    totalIncome = income - deduction;
    totalDeduction = basicDeduction + interestDeposit + medicalInsurance + charityDonation + educationalLoan + housingLoan + employeeContribution;

    document.getElementById("old_gross").innerHTML = totalIncome;
    document.getElementById("old_deduction").innerHTML = totalDeduction;
    document.getElementById("new_gross").innerHTML = income;
    document.getElementById("new_deduction").innerHTML = 0;
   
    taxableIncome = totalIncome - totalDeduction;

    if (taxableIncome == 0) {
      document.getElementById("old_tax").innerHTML = 0;
      document.getElementById("new_tax").innerHTML = 0;
    }

    else {
      if (taxableIncome <= 300000) {
        oldRegimeTax = 0;
        oldRegimeTax = oldRegimeTax + (oldRegimeTax * 4) / 100;
        // console.log(tax)
        document.getElementById("old_tax").innerHTML = oldRegimeTax;
      }

      if (taxableIncome > 300000 && taxableIncome <= 500000) {
        oldRegimeTax = ((taxableIncome - 300000) * 5) / 100;
        oldRegimeTax = oldRegimeTax + (oldRegimeTax * 4) / 100;
        // console.log(tax)
        document.getElementById("old_tax").innerHTML = oldRegimeTax;
      }

      if (taxableIncome > 500000 && taxableIncome <= 1000000) {
        oldRegimeTax = ((taxableIncome - 500000) * 20) / 100 + 10000;
        oldRegimeTax = oldRegimeTax + (oldRegimeTax * 4) / 100;
        // console.log(tax)
        document.getElementById("old_tax").innerHTML = oldRegimeTax;
      }

      if (taxableIncome > 1000000) {
        oldRegimeTax = ((taxableIncome - 1000000) * 30) / 100 + 110000;
        oldRegimeTax = oldRegimeTax + (oldRegimeTax * 4) / 100;
        // console.log(tax)
        document.getElementById("old_tax").innerHTML = oldRegimeTax;
      }
    }
  }

  if (ageData == "80 & above") {

    income =salary + interest + otherIncome + homeLoan + rentalIncome + interestLoan;
    totalIncome = income - deduction;
    totalDeduction =basicDeduction +interestDeposit +medicalInsurance +charityDonation +educationalLoan +housingLoan +employeeContribution;

    document.getElementById("old_gross").innerHTML = totalIncome;
    document.getElementById("old_deduction").innerHTML = totalDeduction;
    document.getElementById("new_gross").innerHTML = income;
    document.getElementById("new_deduction").innerHTML = 0;
   
    taxableIncome = totalIncome - totalDeduction;

    if (taxableIncome == 0) {
      document.getElementById("old_tax").innerHTML = 0;
      document.getElementById("new_tax").innerHTML = 0;
    }

    else {
      if (taxableIncome <= 500000) {
        oldRegimeTax = 0;
        oldRegimeTax = oldRegimeTax + (oldRegimeTax * 4) / 100;
        // console.log(tax)
        document.getElementById("old_tax").innerHTML = oldRegimeTax;
      }

      else if (taxableIncome > 500000 && taxableIncome <= 1000000) {
        oldRegimeTax = ((taxableIncome - 500000) * 20) / 100;
        oldRegimeTax = oldRegimeTax + (oldRegimeTax * 4) / 100;
        // console.log(tax)
        document.getElementById("old_tax").innerHTML = oldRegimeTax;
      }

      else if (taxableIncome > 1000000) {
        oldRegimeTax = ((taxableIncome - 1000000) * 30) / 100 + 100000;
        oldRegimeTax = oldRegimeTax + (oldRegimeTax * 4) / 100;
        // console.log(tax)
        document.getElementById("old_tax").innerHTML = oldRegimeTax;
      }
    }
  }

  if ((ageData == "0 to 60" || "60 to 80" || "80 & above")) {

    income =salary + interest + otherIncome + homeLoan + rentalIncome + interestLoan;

    totalIncome = income - deduction;

    totalDeduction =basicDeduction +interestDeposit +medicalInsurance +charityDonation +educationalLoan +housingLoan +employeeContribution;

    document.getElementById("old_gross").innerHTML = totalIncome;
    document.getElementById("old_deduction").innerHTML = totalDeduction;
    document.getElementById("new_gross").innerHTML = income;
    document.getElementById("new_deduction").innerHTML = 0;

    taxableIncome = income;

    if (taxableIncome == 0) {
      document.getElementById("old_tax").innerHTML = 0;
      document.getElementById("new_tax").innerHTML = 0;
    }
   
    else {

      if (taxableIncome <= 250000) {
        newRegimeTax = 0;
        newRegimeTax = newRegimeTax + (newRegimeTax * 4) / 100;
        // console.log(tax)

      }
      else if (taxableIncome > 250000 && taxableIncome <= 500000) {
        newRegimeTax = ((taxableIncome - 250000) * 5) / 100;
        newRegimeTax = newRegimeTax + (newRegimeTax * 4) / 100;
        // console.log(tax)
       
      }

      else if (taxableIncome > 500000 && taxableIncome <= 750000) {
        newRegimeTax = ((taxableIncome - 500000) * 10) / 100 + 12500;
        newRegimeTax = newRegimeTax + (newRegimeTax * 4) / 100;
        // console.log(tax)
     
      }

      else if (taxableIncome > 750000 && taxableIncome <= 1000000) {
        newRegimeTax = ((taxableIncome - 750000) * 15) / 100 + 37500;
        newRegimeTax = newRegimeTax + (newRegimeTax * 4) / 100;
        // console.log(tax)
     
      }

      else if (taxableIncome > 1000000 && taxableIncome <= 1250000) {
        newRegimeTax = ((taxableIncome - 1000000) * 20) / 100 + 75000;
        newRegimeTax = newRegimeTax + (newRegimeTax * 4) / 100;
        // console.log(tax)
   
      }

      else if (taxableIncome > 1250000 && taxableIncome <= 1500000) {
        newRegimeTax = ((taxableIncome - 1250000) * 25) / 100 + 125000;
        newRegimeTax = newRegimeTax + (newRegimeTax * 4) / 100;
        // console.log(tax)
     
      }

      else if (taxableIncome > 1500000) {
        newRegimeTax = ((taxableIncome - 1500000) * 30) / 100 + 187500;
        newRegimeTax = newRegimeTax + (newRegimeTax * 4) / 100;
        // console.log(tax)
       
      }

      if(newRegimeTax>oldRegimeTax){
        selectRegime= "Old Regime";
        chooseRegime= "New Regime"
      }
      else{
        selectRegime= "New Regime";
        chooseRegime= "Old Regime"
      }

        document.getElementById("suggestion").innerHTML= `You should opt for ${selectRegime} as it will provide you benefit of Rs. ${Math.abs(newRegimeTax-oldRegimeTax)} over ${chooseRegime}.`
        document.getElementById("new_tax").innerHTML = newRegimeTax;
     
    }
  }
}

var deductionLimits = {
  "2022-2023": {
    Section80CLimit: "1,50,000",
    Section80TTALimit: "10,000",
    Section80TTASeniorLimit: "50,000",
    Section80DLimit: "25,000",
    Section80DSeniorLimit: "50,000",
    Section80DParentsLimit: "50,000",
  },
  "2021-2022": {
    Section80CLimit: "1,50,000",
    Section80TTALimit: "10,000",
    Section80TTASeniorLimit: "50,000",
    Section80DLimit: "25,000",
    Section80DSeniorLimit: "50,000",
    Section80DParentsLimit: "50,000",
  },
  "2020-2021": {
    Section80CLimit: "1,50,000",
    Section80TTALimit: "10,000",
    Section80TTASeniorLimit: "50,000",
    Section80DLimit: "25,000",
    Section80DSeniorLimit: "50,000",
    Section80DParentsLimit: "50,000",
  },
};