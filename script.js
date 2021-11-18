const runWhenClicked = () => {
    let input = document.getElementById('user-input');
    let number = input.value;
    console.log(number)
    try {
        if (isNaN(number) || number === '') {
            throw "נא הכנס מספר";

        } else { alert('!המספר התקבל'); }
    } catch (e) {
        alert(e);
        return;
    }


    function cool(callback) {
        callback();
    }
    const getRandomNumber = () => {
        let rnd = Math.floor(Math.random() * 10);
        alert("random number: " + rnd);
    }
    cool(getRandomNumber);


    function nice(callback) {
        callback(42);
    }
    const printTheNumber = (number) => {
        alert(number)
    }
    nice(printTheNumber);


    function amazing(callback) {
        const num = callback(42, 128, 37, 81, 66);
        alert("Num: " + num);
    }

    const randomNumber = (a, b, c, d, e) => {
        let arr = [a, b, c, d, e]
        let rnd = Math.floor(Math.random() * 5)
        return arr[rnd]
    }
    amazing(randomNumber);

    //10
    function cool(paintCallback) {
        paintCallback();
    }
    const randomScreenColor = () => {
        let arr = ["red", "green", "yellow", "orange", "brown"]
        let rnd = Math.floor(Math.random() * 5)
        document.body.style.backgroundColor = arr[rnd];
    }
    cool(randomScreenColor)

    const printMyName = () => {
        alert("Yuda");
    }
    const a = (callback) => {
        callback();
    }
    a(printMyName);
}




const runAdvencedWhenClicked = () => {
    function cool(callback) {
        callback();
    }
    cool(() => {
        let rnd = Math.floor(Math.random() * 10);
        alert("random number: " + rnd);
    });

    function nice(callback) {
        callback(42);
    }
    nice((number) => { alert(number) });


    function amazing(callback) {
        const num = callback(42, 128, 37, 81, 66);
        alert("Num: " + num);
    }
    amazing((a, b, c, d, e) => {
        let arr = [a, b, c, d, e]
        let rnd = Math.floor(Math.random() * 5)
        return arr[rnd]
    });


    function cool(paintCallback) {
        paintCallback();
    }
    cool(() => {
        let arr = ["red", "green", "yellow", "orange", "brown"]
        let rnd = Math.floor(Math.random() * 5)
        document.body.style.backgroundColor = arr[rnd];
    })

    const a = (callback) => {
        callback();
    }
    a(() => { alert("Yuda"); });


}


let counter;
const runColors = () => {
    counter = setInterval(function() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        console.log(bgColor);
        document.body.style.background = bgColor;
    }, 1000);
}
const stopInterval = () => { clearInterval(counter) }


















// checking if input is a number 
//     let num = parseInt(number, 10)
//     console.log("after parsing, type of number is: " + typeof(num))
//     if (typeof(num) === "string") {
//         console.log("the function Number is doing: " + Number(num));
//         console.log("type string was not changed to int")
//         unicorn;
//     }
//     // num /= 2;
// } catch (e) {
//     alert('יש להכניס מספר בלבד');
//     console.dir("error is: " + e)