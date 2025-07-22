function calculateBMI(){
    
    let weightInput=prompt("Enter Your Weight in kg")
    let heightInput=prompt("Enter Your Height in cm")


    let weight = parseFloat(weightInput);
    let heightcm = parseFloat(heightInput);

    let height = heightcm / 100;

    let bmi = weight / (height * height );

    document.getElementById("result").innerHTML=`Your BMI is : ${bmi.toFixed(2)}` 
}