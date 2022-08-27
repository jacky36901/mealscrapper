// import the module
const recipeScraper = require("recipe-scraper");

let sitename = "https://www.bonappetit.com/recipe/";
const arr = ["blackberries-and-vanilla-cream-with-crispy-puff-pastry", "mango-mess-recipe", "beef-tostadas-recipe"];
// enter a supported recipe url as a parameter - returns a promise
async function fetcher(site) {
    let recipe = await recipeScraper(sitename + site);
    console.log("Entered Async \n\n");
    console.log(recipe);
    return recipe;
}

// using Promise chaining
arr.forEach(fetcher) 


// recipeScraper("https://www.bonappetit.com/recipe/blistered-corn-and-scallion-salad").then(recipe => {
//     console.log("Scrapper Working");
//     console.log(recipe.name);
//     console.log(recipe);
// }).catch(error => {
//     console.log("Errored Out");
//     console.log(error.message);
// });