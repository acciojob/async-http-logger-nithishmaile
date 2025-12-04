//your JS code here. If required.


async function result(){
	const response=await fetch("https://jsonplaceholder.typicode.com/todos/1")
	const jsonData=await response.json()

	console.log(jsonData.data)
}

result()