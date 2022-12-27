let bread1 = prompt("Which bread would you like to have ");
let vaggies = prompt("What are your favorite vagies ");
let sauce = prompt("Which sauce would you like to have ")

function MakeSandwich(bread1,vaggies,sauce)
{
    let sandwich = bread1 + " bread1 " +vaggies+ " "+ sauce + " sandwich is ready";
    return sandwich;
}
let vegsandwich = MakeSandwich(bread1,vaggies,sauce);
console.log(vegsandwich);
