//control Statement --switch

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

let month=5;

    switch (month) {
        case 1:
    console.log("January");
            break;
        case 2:
    console.log("feb");
            break;
        case 3:
    console.log("march");
            break;
        case 4:
    console.log("april");
            break;
        case 5:
    console.log("may");
            break;
        case 5:
    console.log("june");
            break;

        default:
            console.log("Not found");
            break;
    }
    //---output--may


    const month2=3;

    switch (month2) {
        case 1:
    console.log("January");
            break;
        case 2:
    console.log("feb");
            break;
        case 3:
    console.log("march");
            // break;----> if the break statement is not their so what will be the output
        case 4:
    console.log("april");
            break;
        case 5:
    console.log("may");
            break;
        case 5:
    console.log("june");
            break;

        default:
            console.log("Not found");
            break;
    }

    //The output will be ---->march , april

    //If the break staetment is not present so after that excuation ---it will directly will move to next one without checking the condition-----and it will stop if break statememnt is present

    


