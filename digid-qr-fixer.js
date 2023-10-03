function waitThenRemoveDigidQrCodeLogos() {
    setTimeout(() => {
        for (logo of document.getElementsByClassName("digid-qr-code-logo")) { 
            logo.remove();
        }
        waitThenRemoveDigidQrCodeLogos();
    }, 500);
}
waitThenRemoveDigidQrCodeLogos();