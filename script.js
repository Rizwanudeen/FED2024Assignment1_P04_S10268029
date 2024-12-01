document.addEventListener('DOMContentLoaded', () => {
    console.log("Script loaded!");
    
    // Target all navigation buttons using classes
    const navButtons = document.querySelectorAll('.nav-item_index, .nav-item_hp, .nav-item_merch, .nav-item_socials');
    
    console.log("Found buttons:", navButtons);
});

navButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("Button clicked:", button.textContent);
        const targetUrl = button.parentElement.href;
        showNavigationMessage(button.textContent, targetUrl);
    });
});

