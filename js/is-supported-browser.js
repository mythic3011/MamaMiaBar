// Check if the browser is supported
// supported browsers: Chrome, Edge
// if not supported, redirect to the supported browser page

const isSupportedBrowser = () => {
    const isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    const isEdge = navigator.userAgent.toLowerCase().indexOf('edge') > -1;
    if (!isChrome && !isEdge) {
        window.location.href = "NotSupportedBrowser.html";
    }
};

isSupportedBrowser();