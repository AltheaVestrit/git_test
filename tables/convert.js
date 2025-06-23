function convert(str) {
    const array = str.split(" ");
    console.log(`<th>${array[0]}</th>`)
    array.slice(1,-1).forEach((data) => console.log(`<td>${data}</td>`));
};

convert("Pluto 0.0146 2,370 2095 0.7 153.3 5906.4 -225 5");