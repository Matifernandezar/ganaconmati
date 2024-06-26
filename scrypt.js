document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('whatsapp-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const whatsappNumber = '5492975815752'; // Reemplaza con tu número de WhatsApp
        const message = `Hola, mi nombre es ${name}. Me gustaría tener más información para jugar.`;
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    });
});
