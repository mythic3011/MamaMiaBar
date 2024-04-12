window.onloadTurnstileCallback = function () {
    turnstile.render('#cf-turnstile', {
        sitekey: '0x4AAAAAAAXAFBSzEPc8ufek',
        callback: function(token) {
            console.log(`Challenge Success ${token}`);
        },
    });
};