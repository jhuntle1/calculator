function run0(){
    document.calculator.readout.value += "0"
};

function run1(){
    document.calculator.readout.value += "1"
};

function run2(){
    document.calculator.readout.value += "2"
};

function run3(){
    document.calculator.readout.value += "3"
};

function run4(){
    document.calculator.readout.value += "4"
};

function run5(){
    document.calculator.readout.value += "5"
};

function run6(){
    document.calculator.readout.value += "6"
};

function run7(){
    document.calculator.readout.value += "7"
};

function run8(){
    document.calculator.readout.value += "8"
};

function run9(){
    document.calculator.readout.value += "9"
};

function runPlus(){
    document.calculator.readout.value += "+"
};

function runSubtract(){
    document.calculator.readout.value += "-"
};

function runMultiply(){
    document.calculator.readout.value += "*"
};

function runDivide(){
    document.calculator.readout.value += "/"
};

function runC(){
    document.calculator.readout.value = ""
};

function runDecimal(){
    document.calculator.readout.value += "."
};

function runEquals(){
    var equals = eval(document.calculator.readout.value)
    document.calculator.readout.value = equals;
};
