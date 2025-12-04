// your JS code here. If required.

async function result() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();

    console.log({
        userId: data.userId,
        id: data.id,
        title: data.title,
        completed: data.completed
    });
}

result();
