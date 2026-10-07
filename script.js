const messages = [
    "Are you sure? 🥺",
    "Really sure?? 💔",
    "Don't do this to me! 😭",
    "I'll buy you your favorite treats! 🍫🍬",
    "Pookie please... 🥺❤️",
    "Just think about it! ✨",
    "If you say no, a cute little bear will cry... 🐻💧",
    "I will be super sad... 🖤",
    "Ok fine, I'll stop asking... 🥺",
    "Just kidding, say yes please! ❤️✨"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.35}px`;
    yesButton.style.padding = `${Math.min(currentSize * 0.8, 40)}px ${Math.min(currentSize * 1.5, 70)}px`;
    
    noButton.classList.add('shake-anim');
    setTimeout(() => noButton.classList.remove('shake-anim'), 400);
}

function handleYesClick() {
    const yesBtn = document.querySelector('.yes-button');
    yesBtn.style.transform = "scale(1.2)";
    setTimeout(() => {
        window.location.href = "yes_page.html";
    }, 200);
}