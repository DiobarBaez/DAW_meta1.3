const codeLines = [
    // Lista de líneas de código que representan las instrucciones de los procesos
    "a = 1 + 2;",
    "console.log('1+2');",
    "console.log(a);",
    "b = 3 + 4;",
    "console.log('3+4');",
    "c = 5 + 6;",
    "console.log('5+6');",
    "console.log(c);",
];

// Función para elegir una línea de código al azar de la lista
function chooseCodeLine() {
    const randomIndex = Math.floor(Math.random() * codeLines.length);
    return codeLines[randomIndex];
}

function initializeSimulation(numProcesses, numTasks) {
    const processes = [];
    for (let i = 0; i < numProcesses; i++) {
        const process = {
            id: i + 1,
            code: [],
            currentIndex: 0,
        };
        for (let j = 0; j < numTasks; j++) {
            process.code.push(chooseCodeLine());
        }
        processes.push(process);
    }
    return processes;
}

function startSimulation(processes) {
    let allProcessesFinished = false;
    const outputElement = document.getElementById("output");

    while (!allProcessesFinished) {
        allProcessesFinished = true;

        for (const process of processes) {
            if (process.currentIndex < process.code.length) {
                allProcessesFinished = false;
                outputElement.innerHTML += `Proceso ${process.id}<br>`;
                outputElement.innerHTML += `Línea de código: ${process.code[process.currentIndex]}<br><br>`;
                process.currentIndex++;
            } else {
                outputElement.innerHTML += `Proceso ${process.id}<br>`;
                outputElement.innerHTML += `Terminado<br><br>`;
            }
        }
    }
}

/**/
const startButton = document.getElementById("startButton");
const clearButton = document.getElementById("clearButton");
const outputElement = document.getElementById("output");

startButton.addEventListener("click", function () {
    outputElement.innerHTML = "";
    const numProcesses = parseInt(document.getElementById("numProcesses").value);
    const numTasks = parseInt(document.getElementById("numTasks").value);

    const processes = initializeSimulation(numProcesses, numTasks);

    startSimulation(processes);
});

clearButton.addEventListener("click", function () {
    outputElement.innerHTML = "";
});
