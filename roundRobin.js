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

// Función para inicializar la simulación con un número dado de procesos y tareas
function initializeSimulation(numProcesses, numTasks) {
const processes = [];
for (let i = 0; i < numProcesses; i++) {
    const process = {
        id: i + 1,          // Número único de proceso
        code: [],           // Lista de líneas de código para este proceso
        currentIndex: 0,    // Índice de la línea de código actual que se ejecutará
    };
    for (let j = 0; j < numTasks; j++) {
        process.code.push(chooseCodeLine());
    } 
    processes.push(process);
}
return processes;
}

// Función para iniciar la simulación de los procesos
function startSimulation(processes) {
let allProcessesFinished = false;

// El bucle principal que simula la ejecución de los procesos
while (!allProcessesFinished) {
    allProcessesFinished = true;

    for (const process of processes) {
        if (process.currentIndex < process.code.length) {
            allProcessesFinished = false;
            console.log(`Proceso ${process.id}`);
            console.log(`Línea de código: ${process.code[process.currentIndex]}`);
            process.currentIndex++;
        } else {
            console.log(`Proceso ${process.id}\nTerminado`);
        }
    }
}
}

// Obtener el número de procesos y tareas desde la línea de comandos
const numProcesses = parseInt(process.argv[2]);
const numTasks = parseInt(process.argv[3]);

// Inicializar la simulación con el número de procesos y tareas especificados
const processes = initializeSimulation(numProcesses, numTasks);

// Iniciar la simulación
startSimulation(processes);



