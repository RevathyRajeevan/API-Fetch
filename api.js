const fetchData = async () => {
    try {
        let response = await fetch('https://fakestoreapi.com/products', { method: "GET" });
        
        let data = await response.json();
        const container = document.getElementById('product-container');
        data.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
                <p>Rating: ${product.rating.rate} (${product.rating.count} reviews)</p>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.log('Error fetching data:', error);
    }
};

fetchData();