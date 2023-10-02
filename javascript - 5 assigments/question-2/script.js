
// generate random number

function randomNumberGenerator() {
    const numbers = Math.floor(Math.random() * 10000)
    return numbers
}



// submit 
const delayTime = document.querySelector('[data-delayTime]')

const submitButton = document.querySelector('[data-submitButton]')
submitButton.addEventListener("click", function () {
    const storeValue = Number(delayTime.value)


    // output data

    const outputArea = document.querySelector('[data-outputArea]')

    let lefttime = document.querySelector('[data-leftTime]')

    function startCountDown(storeValue) {

        let value = storeValue;
        const interval = setInterval(
            function () {
                lefttime.textContent = value
                value--;
                if (value === -1) {
                    clearInterval(interval)
                    const generateNumbers = randomNumberGenerator();
                    console.log(generateNumbers);
                    console.log(typeof generateNumbers);
                    outputArea.value = String(generateNumbers)
                }

            }, 1000
        )

    }
    startCountDown(storeValue);

})

