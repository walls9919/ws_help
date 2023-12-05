RegisterNetEvent("showHelpUI");
on("showHelpUI", function() {
    fetch(`path_to_your_html/index.html`)
        .then(response => response.text())
        .then(html => {
            SetNuiFocus(true, true);
            SendNuiMessage(JSON.stringify({ type: 'open', content: html }));
        });
});

RegisterNuiCallbackType('buttonClicked');
on('__cfx_nui:buttonClicked', function(data, cb) {
    // Handle button click events here
    console.log(`Button clicked: ${data}`);
    // Add your logic here for button actions
    cb('ok');
});
