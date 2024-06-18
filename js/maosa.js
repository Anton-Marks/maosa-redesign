window.addEventListener('load', (e) => {
    const numero = '+524431455339';


    const sendMessagetoWhatsapp = () => {
        const mensaje = encodeURIComponent('¡Hola, me gustaría obtener más información!');
        const url = `https://api.whatsapp.com/send?phone=${numero}&text=${mensaje}`;
        window.open(url, '_blank');
    }

    const idBtnWhats = 'btn-whats-maosa-rt';
    let btnWhats = document.getElementById(idBtnWhats);

    btnWhats.addEventListener("click", () => {
        sendMessagetoWhatsapp()
    })
});


// About
document.getElementById("maosa-mn-about").addEventListener("click", function() {
    document.getElementById("main-content-section-about").scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("btn-maosa-slider-about").addEventListener("click", function() {
    document.getElementById("main-content-section-about").scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("maosa-mn-about-f").addEventListener("click", function() {
    document.getElementById("main-content-section-about").scrollIntoView({ behavior: 'smooth' });
});

// Products
document.getElementById("maosa-mn-products").addEventListener("click", function() {
    document.getElementById("main-content-section-products").scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("btn-maosa-slider-products").addEventListener("click", function() {
    document.getElementById("main-content-section-products").scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("maosa-mn-products-f").addEventListener("click", function() {
    document.getElementById("main-content-section-products").scrollIntoView({ behavior: 'smooth' });
});

// Operation
document.getElementById("maosa-mn-operation").addEventListener("click", function() {
    document.getElementById("main-content-section").scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("btn-maosa-slider-operation").addEventListener("click", function() {
    document.getElementById("main-content-section").scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("maosa-mn-operation-f").addEventListener("click", function() {
    document.getElementById("main-content-section").scrollIntoView({ behavior: 'smooth' });
});


// Clients
document.getElementById("maosa-mn-clients").addEventListener("click", function() {
    document.getElementById("main-content-section-clients").scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("btn-maosa-slider-clients").addEventListener("click", function() {
    document.getElementById("main-content-section-clients").scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("maosa-mn-clients-f").addEventListener("click", function() {
    document.getElementById("main-content-section-clients").scrollIntoView({ behavior: 'smooth' });
});

