(async()=> {
	
"use strict";

async function getJSON(link){
	const response = await fetch(link);
	return response.json();
}

const aho = await getJSON("./test.json");
console.log(aho);

})();
