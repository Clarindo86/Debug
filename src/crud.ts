const API = "https://jsonplaceholder.typicode.com/posts";

async function main() {

    // 1. READ
    const response1 = await fetch(API);
    const posts = await response1.json();

    console.log("1. READ");
    console.log(posts[0].title);
    console.log(posts[1].title);
    console.log(posts[2].title);


    // 2. READ - post 1
    const response2 = await fetch(`${API}/1`);
    const post1 = await response2.json();

    console.log("\n2. READ - POST 1");
    console.log(post1.title);


    // 3. CREATE
    const response3 = await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "Novo post",
            body: "Meu conteúdo",
            userId: 1
        })
    });

    const novoPost = await response3.json();

    console.log("\n3. CREATE");
    console.log(novoPost);


    // 4. UPDATE
    const response4 = await fetch(`${API}/1`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: 1,
            title: "Título atualizado",
            body: post1.body,
            userId: post1.userId
        })
    });

    const postAtualizado = await response4.json();

    console.log("\n4. UPDATE");
    console.log(postAtualizado);


    // 5. DELETE
    const response5 = await fetch(`${API}/1`, {
        method: "DELETE"
    });

    if (response5.ok) {
        console.log("\n5. DELETE");
        console.log("Post de id 1 apagado com sucesso!");
    }
}

main();








       


        