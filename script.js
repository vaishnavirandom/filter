document.addEventListener('DOMContentLoaded', () => {
    const items = [
        'dog',
        'apple',
        'sweety',
        'Day',
        'peacock',
        'mangoes',
        'giraffee'
    ];

    const searchInput = document.getElementById('searchInput');
    const itemList = document.getElementById('itemList');

    // Function to render items
    function renderItems(filteredItems) {
        itemList.innerHTML = ''; // Clear existing items
        filteredItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            itemList.appendChild(li);
        });
    }

    // Initial render
    renderItems(items);

    // Event listener for search input
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredItems = items.filter(item =>
            item.toLowerCase().includes(query)
        );
        renderItems(filteredItems);
    });
});
