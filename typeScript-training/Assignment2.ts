let customerName : string = "John Doe";
let creditScore : number = 720;
let income : number = 55000.0;
let isEmployed : boolean = true;
let debtToIncomeRatio : number  = 35.0 ;

if ( creditScore > 750 )
{
    console.log("Hurray !! Congrats John Doe , Loan Approved");
}
else if ( creditScore >= 650 )
{
    if (income >= 50000 ){
        if ( isEmployed ){
            if ( debtToIncomeRatio > 40.0 ){
               console.log("Congrats John Doe!! , loan is approved . You've met all criteria.")
            }
            else if ( debtToIncomeRatio < 40.0 ){
                console.log("sorry, You have not met the eleigible criteria for the loan.Your dept to income ratio is below the required range.")
            }
        }
        else {
            console.log("loan process is denied since you are not employed.")
        }
    }
    else{
        console.log("your loan process is denied due to your low income.")
    }
}
else if(creditScore < 650 ){
    console.log("Sorry, your loan process is rejected because your credit score is very low.")
}