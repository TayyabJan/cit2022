const  arrticles=  require('../data/others/news.json').articles;
// Tasks

// 1. Name all the sources with null ids.
// 2. Name all the sources with null authors.
// 3. Create a new list with any of the keys that have null values.
// 4. Print the title, content and description of the latest article.
// 5. Print the title, content and description of the oldest article.
// 6. Print the article with the longest title.
// 7. Print all the articles from the same source. find duplicate articles

  
// // TASK 1. Name all the sources with null ids.

// //  Method a  // Prints alomost all names with null id  but last one is undefined??. dont know why.

const sourcesWithNullIds1 = arrticles.filter((article) => article.source.id == null);
console.log(sourcesWithNullIds1.forEach((arrticles) => console.log(arrticles.source.name)));

// // // Method b
const sourcesWithNullIds2 = arrticles
    .map((article) => (article.source.id == null) ? article.source.name : null)
    .filter((article) => article != null);
console.log(sourcesWithNullIds2);


// //  2. Name all the sources with null authors.

const sourcesWithNullAuthors = arrticles
    .map((article) => (article.author == null) ? article.source.name : null)
    .filter((article) => article != null);
console.log(sourcesWithNullAuthors);


// // // 3. Create a new list with any of the keys that have null values.
const new_List = 
    {
        "id": 1,
        "name": " Amir Khan",
        "Marks": null,
        "Blood": null,
        "Address": {
            "city": "Peshawar",
            "Provice": "KP",
            "Country": "Pakistan",
            "Village": null

        }

    }
   

const objKeys = Object.keys(new_List);
console.log(objKeys);

const nullValues = [];

for (let i of objKeys) {

    if(new_List[i] == null) 
     nullValues.push(i);
    }

console.log(nullValues);


// // // 4. Print the title, content and description of the latest article.
const latestArticle = arrticles
.sort( (a, b) => a.publishedAt - b.publishedAt)
.map((article) => "Title: " + article.title + '\n' + "Content: "+ article.content + '\n' 
+ "Description: " + article.description + '\n' + "Published At: " + article.publishedAt);
console.log("\n The Latest Article ***** \n " + latestArticle[0]);


// // // 5. Print the title, content and description of the oldest article.
console.log("\n The Oldest Article *****\n " + latestArticle[latestArticle.length - 1]);



// // // 6. Print the article with the longest title.
const longestTitle = arrticles
                    .reduce((a, b) => a.title.length > b.title.length ? a : b);
                 

console.log("\n The Longest Title Article ***** ( " + longestTitle.title.length + " Characters Long )" 
+ '\n' + longestTitle.title 
+ '\n' + "Content: "+ longestTitle.content + '\n' + "Description: " + longestTitle.description 
+ '\n' + "Published At: " + longestTitle.publishedAt);

/// Just for verification
// const titlelength =  arrticles.map((article) => article.title.length);
// console.log(titlelength.sort((a,b) => a - b));

// // 7. Print all the articles from the same source.

const sourcelist= arrticles
.map(arrticles => arrticles.source.name); 
// // fetch only source names for comparison

const sameSources  = sourcelist.filter((item, index)  => sourcelist.indexOf(item) != index); // check name duplicates
// // find duplicate names

//console.log(sameSources); // print duplicate names

// display articles with duplicate names
               
const articlesWithSameName = arrticles
                            .map( a => sameSources.includes(a.source.name) ? a : null)
                            .filter(a => a != null);


console.log(articlesWithSameName);

console.log(articlesWithSameName.length);
console.log(arrticles.length);
 
    
