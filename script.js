//your JS code here. If required.


async function result(){
	const response=await fetch("https://jsonplaceholder.typicode.com/todos/1")
	const jsonData=await response.json()
	const data=jsonData.data

	console.log({ userId: `${data.userId}`, id: `${data.id}`, title: `${data.title}`, completed: `${data.completed}` })
}

result()