const btnEl = document.getElementById('btn');
const bmiInputEl = document.getElementById('bmi-result');
const weightConditionEl = document.getElementById('weight-condition');

function calculateBmi(){
    const heightValue = document.getElementById('height').value / 100
    const weightValue = document.getElementById('weight').value

    bmiValue = weightValue / (heightValue * heightValue)

    bmiInputEl.value = bmiValue;
    
    if(bmiValue < 18.5){
        weightConditionEl.innerText = '     Under Weight'
    }
}

btnEl.addEventListener('click',calculateBmi)