// Функция за взимане на всички постове
// Използваме async заради fetch - чрез async спираме програмата, за да изчакаме отговора от функцията

async function fetchPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
}

// 1. Функция, която връща масив с всички id-та
async function getAllIds() {
    const posts = await fetchPosts();
    return posts.map(post => post.id);
}

// 2. Функция, която връща постовете, чиито title съдържа "nam"
async function getPostsWithNam() {
    const posts = await fetchPosts();
    return posts.filter(post => post.title.includes("nam"));
}

// 3. Функция, която връща масив от обекти { id, title }
async function getPostsIdTitle() {
    const posts = await fetchPosts();
    return posts.map(post => ({ id: post.id, title: post.title }));
}

// 4. Функция, която връща общия сбор на всички id-та
async function getTotalIdSum() {
    const posts = await fetchPosts();
    return posts.reduce((sum, post) => sum + post.id, 0);
}

// Примери за извикване:
getAllIds().then(console.log);      // [1,2,3,4,5,...]
getPostsWithNam().then(console.log); // Всички постове с "nam" в title
getPostsIdTitle().then(console.log); // Масив от обекти { id, title }
getTotalIdSum().then(console.log);   // Общо сума на id-тата