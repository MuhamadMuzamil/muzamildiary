// Adding event listeners to game links
document.querySelectorAll('.game-link').forEach(link => {
    link.addEventListener('click', () => {
    // will Replace with actual game website URL
    window.location.href = '(link unavailable)';
    });
    });
    
    // Example of filtering games by category
    document.getElementById('filter-button').addEventListener('click', () => {
    // Get all game containers
    const gameContainers = document.querySelectorAll('.game-container');
    
    // Hide all games
    gameContainers.forEach(container => {
    container.style.display = 'none';
    });
    
    // Show only action games
    document.querySelectorAll('#action-games .game-container').forEach(container => {
    container.style.display = 'flex';
    });
    });
    