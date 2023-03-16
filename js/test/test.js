$(document).ready(function () {

    for (i = 1; i < 10; i++) {
        for (j = 1; j < 10; j++) {
            $('.table').append(`
            <tr>
                <td>${j}*${i} = ${i * j}</td>
            </tr>
            `)
        }
    }

    let triangle = ""
    for (i = 1; i < 5; i++) {
        for (j = 0; j < i; j++) {
            triangle += "*"
        }
        triangle += "\n"
    }
    console.log(triangle)
    $('.triangle').append(`
        ${triangle}
    `)

    let triangle2 = "";
    for (let i = 0; i <= 10; i++) {
        let space = "";
        for (let j = 1; j <= 10 - i; j++) {

            space += " ";
        }
        let star = "";
        for (let k = 1; k <= 2 * i - 1; k++) {

            star += "*";
        }
        triangle2 += space + star + "\n";
    }
    console.log(triangle2);
    $('.triangle2').append(`
        ${triangle2}
    `)

})