const convertData = (data) => {
    const lines = data.trim().split('\n');
    lines.shift();
    return lines.map(line => {
        const [date, temperature] = line.split(',');
        return {
            x: date,
            y: temperature
        }
    });
 };
 
 //należy pamiętać o dodaniu exportu powyższej funkcji, w celu zaimportowania jej w innym module
 module.exports = {
    convertData,
}