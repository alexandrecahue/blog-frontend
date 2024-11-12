export const msalConfig = {
    auth: {
        clientId: "CLIENTE_ID",
        authority: "https://login.microsoftonline.com/tfp/TENANT-SELECIONADO.onmicrosoft.com/B2C_1_signupsignin",
        knownAuthorities: ["TENANT-SELECIONADO.b2clogin.com"],
        redirectUri: "http://localhost:3000",
    },
};