document.addEventListener('DOMContentLoaded', () => {
    console.log("Script loaded!");
    
    // Target all navigation buttons using classes
    const navButtons = document.querySelectorAll('.nav-item_index, .nav-item_hp, .nav-item_merch, .nav-item_socials');
    
    console.log("Found buttons:", navButtons);


    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("Button clicked:", button.textContent);
            const targetUrl = button.parentElement.href;
            showNavigationMessage(button.textContent, targetUrl);
        });
    });
});

function showNavigationMessage(pageName, targetUrl) {
    console.log("Showing message for:", pageName);
    
    const message = document.createElement('div');
    message.textContent = `Navigating to ${pageName}`;
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.85);
        color: white;
        padding: 40px 60px;
        border-radius: 10px;
        font-size: 22px;
        z-index: 9999;
    `;

    document.body.appendChild(message);
    console.log("Message added to DOM");

    setTimeout(() => {
        document.body.removeChild(message);
        window.open(targetUrl, '_blank');
    }, 500);
}
