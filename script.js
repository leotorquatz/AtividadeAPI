document.addEventListener('DOMContentLoaded', function() {
    const verseContainer = document.getElementById('verse');
    const verses = [
        "O Senhor é o meu pastor; nada me faltará. (Salmos 23:1)",
        "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna. (João 3:16)",
    ];

    const randomIndex = Math.floor(Math.random() * verses.length);
    const randomVerse = verses[randomIndex];
    
    verseContainer.textContent = randomVerse;
});
