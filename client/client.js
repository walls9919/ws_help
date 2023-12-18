let visible = false

RegisterCommand('kasiraamat', (source, args) => {
    print('Käsiraamat avatud.')
    setDisplay(!visible)
}, false);

RegisterNuiCallback("lahku",() => {
    setDisplay(false)
});

RegisterNuiCallback("error",(data) => {
    print(data.error)
    setDisplay(false)
});

function setDisplay(b) {
    visible = b
    SetNuiFocus(b, b)
    SendNUIMessage({
        type: "ui",
        status: b
    });
}

setImmediate(() => {
    while (visible) {
        Delay(0);
        DisableControlAction(0, 1, visible) // LookLeftRight
        DisableControlAction(0, 2, visible) // LookUpDown
        DisableControlAction(0, 142, visible) // MeleeAttackAlternate
        DisableControlAction(0, 18, visible) // Enter
        DisableControlAction(0, 322, visible) // ESC
        DisableControlAction(0, 106, visible) // VehicleMouseControlOverride
    }
})