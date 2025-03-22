let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe() {
    let day = new Date()
    let hours = day.getHours()
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir")
    }
    else if (hours >= 12 && hours < 16) {
        speak("Good afternoon Sir")
    } else {
        speak("Good Evening Sir")
    }
}
window.addEventListener('load', () => {
    wishMe()
})
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click", () => {
    recognition.start()
    voice.style.display = "block"
    btn.style.display = "none"
})
function takeCommand(message) {
    voice.style.display = "none"
    btn.style.display = "flex"
    if (message.includes("hello") || message.includes("hey")) {
        speak("hello sir,what can i help you?")
    }
    else if (message.includes("open youtube")) {
        speak("opening youtube...")
        window.open("https://youtube.com/", "_blank")
    }
    else if (message.includes("where are you from ")) {
        speak("sorry i am not from anywhere i am a assistant ")
    } // form here impliment is start


    else if (message.includes("valur of pi ")) {
        speak("value of pi is 3.14")
    }
    else if (message.includes("value of pi in trigonmentry")) {
        speak("value of pi in trigonmetry is 180 degree")
    }
    else if (message.includes("why does ice melt faster in warm water  than in cold water ")) {
        speak("because warm water has more kinectic energy.meaning its molecules move faster and collide with the ice mote frequently and with moreforce ")
    }

    else if (message.includes("which bacteria is responsible for the formation of curd ?")) {
        speak("lactobacillus acidophillus")
    }
    else if (message.includes("what is the chemical formula of gold ")) {
        speak("Au")
    }
    else if (message.includes("what is the ph value of pure water ?")) {
        speak("7")
    }
    else if (message.includes("what is the smallest unit of matter that retains the properties of an elemnts ")) {
        speak("atom")
    }
    else if (message.includes("what is 10 percent of 50")) {
        speak("5")
    }
    else if (message.includes("what is the formula of area of square ")) {
        speak("area of square is pie r square")                            
    }
    else if (message.includes("what is the si unit of electric current ")) {
        speak("ampere")
    }
    else if (message.includes("what is the process by which plants convert light energy into chemiccal energy")) {
        speak("photosynthesis")
    }
    else if (message.includes("which planet is known as red planet ")) {
        speak("mars")
    }
    else if (message.includes("which force keeps planets in orbit around the sun ")) {
        speak("gravitional force ")
    }
    else if (message.includes("what is the square root of 169")) {
        speak("sqaure root of 169 is 13 ")
    }
    else if (message.includes("open google")) {
        speak("opening google...")
        window.open("https://google.com/", "_blank")
    }
    else if (message.includes("open facebook")) {
        speak("opening facebook...")
        window.open("https://facebook.com/", "_blank")
    }
    else if (message.includes("open instagram")) {
        speak("opening instagram...")
        window.open("https://instagram.com/", "_blank")
    }
    else if (message.includes("open calculator")) {
        speak("opening calculator..")
        window.open("calculator://")
    }
    else if (message.includes("open whatsapp")) {
        speak("opening whatsapp..")
        window.open("whatsapp://")
    }
    else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
        speak(time)
    }
    else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" })
        speak(date)
    }
    else {
        let finalText = "this is what i found on internet regarding" + message.replace("jarvish", "") || message.replace("jarvish", "")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("jarvish", "")}`, "_blank")
    }
}