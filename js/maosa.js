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
