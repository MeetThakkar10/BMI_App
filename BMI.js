const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const res = document.querySelector('#res')
    let bmi = 0
    if(height === '' || height<0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    }

    else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML = `Please give a valid height ${weight}`
    }

    else{
        bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        //Show the result
        results.innerHTML = `<span> ${bmi} </span>`;
    }

    if(bmi<18.6){
        res.innerHTML = `<span> You are in underweight </span>`;
    }
    if(bmi>18.6 && bmi<24.9){
        res.innerHTML = `<span> You are in normal range </span>`;
    }
    if(bmi>24.9){
        res.innerHTML = `<span> You are in overweight </span>`;
    }
})