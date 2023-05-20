
function calculate() {
    const cars = document.getElementById('cars').value;
    const lanes = document.getElementById('lanes').value;
    const current = cars;
    const resistance = lanes;
    const voltage = current * resistance;


    document.getElementById('current').textContent = current;
    document.getElementById('voltage').textContent = voltage;
    document.getElementById('resistance').textContent = resistance;
    
    const resultCurrent = current;
    const resultVoltage = voltage;
    const resultResistance = resistance;
    document.getElementById('result-current').textContent = resultCurrent;
    document.getElementById('result-voltage').textContent = resultVoltage;
    document.getElementById('result-resistance').textContent = resultResistance;

    const speedLimit = voltage;
    document.getElementById('speed-limit').textContent = speedLimit;

    

    const ohmCurrent = current;
    const ohmVoltage = voltage;
    const ohmResistance = resistance;
    document.getElementById('ohm-current').textContent = ohmCurrent;
    document.getElementById('ohm-voltage').textContent = ohmVoltage;
    document.getElementById('ohm-resistance').textContent = ohmResistance;

    //const ohmsLawVoltage = current * resistance;
  //document.getElementById('result-voltage').textContent = ohmsLawVoltage + " volts";
}


