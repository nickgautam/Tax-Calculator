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
let tax = 0;
let regime = null;
let ageData = null;



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

  if (regime == "old-regime" && ageData == "0 to 60") {

    totalIncome = salary + interest + otherIncome + homeLoan + rentalIncome + interestLoan - deduction;
    totalDeduction = basicDeduction + interestDeposit + medicalInsurance + charityDonation + educationalLoan + housingLoan + employeeContribution;

    document.getElementById("old_gross").innerHTML = totalIncome;
    document.getElementById("old_deduction").innerHTML = totalDeduction;
    document.getElementById("new_gross").innerHTML = 0
    document.getElementById("new_deduction").innerHTML = 0;

    taxableIncome = totalIncome - totalDeduction;

    if (taxableIncome == 0) {
      document.getElementById("old_tax").innerHTML = 0;
      document.getElementById("new_tax").innerHTML = 0;
    }

    else {

      if (taxableIncome <= 250000) {
        tax = 0;
        tax = tax + (tax * 4) / 100;
        // console.log(tax)
        document.getElementById("old_tax").innerHTML = tax;
        document.getElementById("new_tax").innerHTML = 0;
      }

      if (taxableIncome > 250000 && taxableIncome <= 500000) {
        tax = ((taxableIncome - 250000) * 5) / 100;
        tax = tax + (tax * 4) / 100;
        // console.log(tax)
        document.getElementById("old_tax").innerHTML = tax;
        document.getElementById("new_tax").innerHTML = 0;
      }

      if (taxableIncome > 500000 && taxableIncome <= 1000000) {
        tax = ((taxableIncome - 500000) * 20) / 100 + 12500;
        tax = tax + (tax * 4) / 100;
        // console.log(tax)
        document.getElementById("old_tax").innerHTML = tax;
        document.getElementById("new_tax").innerHTML = 0;
      }

      if (taxableIncome > 1000000) {
        tax = ((taxableIncome - 1000000) * 30) / 100 + 112500;
        tax = tax + (tax * 4) / 100;
        // console.log(tax)
        document.getElementById("old_tax").innerHTML = tax;
        document.getElementById("new_tax").innerHTML = 0;
      }

    }

  }

  if (regime == "old-regime" && ageData == "60 to 80") {

    totalIncome = salary + interest + otherIncome + homeLoan + rentalIncome + interestLoan - deduction;
    totalDeduction = basicDeduction + interestDeposit + medicalInsurance + charityDonation + educationalLoan + housingLoan + employeeContribution;

    document.getElementById("old_gross").innerHTML = totalIncome;
    document.getElementById("old_deduction").innerHTML = totalDeduction;
    document.getElementById("new_gross").innerHTML = 0
    document.getElementById("new_deduction").innerHTML = 0;

    taxableIncome = totalIncome - totalDeduction;

    if (taxableIncome == 0) {
      document.getElementById("old_tax").innerHTML = 0;
      document.getElementById("new_tax").innerHTML = 0;
    }

    else {

      if (taxableIncome <= 300000) {
        tax = 0;
        tax = tax + (tax * 4) / 100;
        // console.log(tax)
        document.getElementById("old_tax").innerHTML = tax;
        document.getElementById("new_tax").innerHTML = 0;
      }


      if (taxableIncome > 300000 && taxableIncome <= 500000) {
        tax = ((taxableIncome - 300000) * 5) / 100;
        tax = tax + (tax * 4) / 100;
        // console.log(tax)
        document.getElementById("old_tax").innerHTML = tax;
        document.getElementById("new_tax").innerHTML = 0;
      }

      if (taxableIncome > 500000 && taxableIncome <= 1000000) {
        tax = ((taxableIncome - 500000) * 20) / 100 + 10000;
        tax = tax + (tax * 4) / 100;
        // console.log(tax)
        document.getElementById("old_tax").innerHTML = tax;
        document.getElementById("new_tax").innerHTML = 0;
      }

      if (taxableIncome > 1000000) {
        tax = ((taxableIncome - 1000000) * 30) / 100 + 110000;
        tax = tax + (tax * 4) / 100;
        // console.log(tax)
        document.getElementById("old_tax").innerHTML = tax;
        document.getElementById("new_tax").innerHTML = 0;
      }

    }

  }

  if (regime == "old-regime" && ageData == "80 & above") {
    totalIncome = salary + interest + otherIncome + homeLoan + rentalIncome + interestLoan - deduction;
    totalDeduction = basicDeduction + interestDeposit + medicalInsurance + charityDonation + educationalLoan + housingLoan + employeeContribution;

    document.getElementById("old_gross").innerHTML = totalIncome;
    document.getElementById("old_deduction").innerHTML = totalDeduction;
    document.getElementById("new_gross").innerHTML = 0
    document.getElementById("new_deduction").innerHTML = 0;

    taxableIncome = totalIncome - totalDeduction;

    if (taxableIncome == 0) {
      document.getElementById("old_tax").innerHTML = 0;
      document.getElementById("new_tax").innerHTML = 0;
    }

    else {

      if (taxableIncome <= 500000) {
        tax = 0
        tax = tax + (tax * 4) / 100;
        // console.log(tax)
        document.getElementById("old_tax").innerHTML = tax;
        document.getElementById("new_tax").innerHTML = 0;
      }

      if (taxableIncome > 500000 && taxableIncome <= 1000000) {
        tax = ((taxableIncome - 500000) * 20) / 100;
        tax = tax + (tax * 4) / 100;
        // console.log(tax)
        document.getElementById("old_tax").innerHTML = tax;
        document.getElementById("new_tax").innerHTML = 0;
      }

      if (taxableIncome > 1000000) {
        tax = ((taxableIncome - 1000000) * 30) / 100 + 100000;
        tax = tax + (tax * 4) / 100;
        // console.log(tax)
        document.getElementById("old_tax").innerHTML = tax;
        document.getElementById("new_tax").innerHTML = 0;
      }

    }

  }

  if (regime == "new-regime" && (ageData == "0 to 60" || "60 to 80" || "80 & above")) {

    totalIncome = salary + interest + otherIncome + homeLoan + rentalIncome + interestLoan;

    document.getElementById("old_gross").innerHTML = 0
    document.getElementById("old_deduction").innerHTML = 0
    document.getElementById("new_gross").innerHTML = totalIncome;
    document.getElementById("new_deduction").innerHTML = 0;

    taxableIncome = totalIncome;

    if (taxableIncome == 0) {
      document.getElementById("old_tax").innerHTML = 0;
      document.getElementById("new_tax").innerHTML = 0;
    }

    else {

      if (taxableIncome <= 250000) {
        tax = 0;
        tax = tax + (tax * 4) / 100;
        // console.log(tax)
        document.getElementById("old_tax").innerHTML = 0;
        document.getElementById("new_tax").innerHTML = tax;
      }

      if (taxableIncome > 250000 && taxableIncome <= 500000) {
        tax = ((taxableIncome - 250000) * 5) / 100;
        tax = tax + (tax * 4) / 100;
        // console.log(tax)
        document.getElementById("old_tax").innerHTML = 0;
        document.getElementById("new_tax").innerHTML = tax;
      }

      if (taxableIncome > 500000 && taxableIncome <= 750000) {
        tax = ((taxableIncome - 500000) * 10) / 100 + 12500;
        tax = tax + (tax * 4) / 100;
        // console.log(tax)
        document.getElementById("old_tax").innerHTML = 0;
        document.getElementById("new_tax").innerHTML = tax;
      }

      if (taxableIncome > 750000 && taxableIncome <= 1000000) {
        tax = ((taxableIncome - 750000) * 15) / 100 + 37500;
        tax = tax + (tax * 4) / 100;
        // console.log(tax)
        document.getElementById("old_tax").innerHTML = 0;
        document.getElementById("new_tax").innerHTML = tax;
      }

      if (taxableIncome > 1000000 && taxableIncome <= 1250000) {
        tax = ((taxableIncome - 1000000) * 20) / 100 + 75000;
        tax = tax + (tax * 4) / 100;
        // console.log(tax)
        document.getElementById("old_tax").innerHTML = 0;
        document.getElementById("new_tax").innerHTML = tax;
      }

      if (taxableIncome > 1250000 && taxableIncome <= 1500000) {
        tax = ((taxableIncome - 1250000) * 25) / 100 + 125000;
        tax = tax + (tax * 4) / 100;
        // console.log(tax)
        document.getElementById("old_tax").innerHTML = 0;
        document.getElementById("new_tax").innerHTML = tax;             //+ 26520;
      }

      if (taxableIncome > 1500000) {
        tax = ((taxableIncome - 1500000) * 30) / 100 + 187500;
        tax = tax + (tax * 4) / 100;
        // console.log(tax)
        document.getElementById("old_tax").innerHTML = 0;
        document.getElementById("new_tax").innerHTML = tax;
      }

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