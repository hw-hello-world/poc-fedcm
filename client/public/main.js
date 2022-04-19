// Feature detection: Since `FederatedCredential` is already available in Chrome
// for the old Credential Management API, additional
// `FederatedCredential.prototype.login` check is required.
function isFedCMEnabled() {
  return !(!window.FederatedCredential || !FederatedCredential.prototype.login);
}

document.getElementById('fedcm-status').innerText = isFedCMEnabled();



async function login() {
  try {
    // if (!isFedCMEnabled()) {
    //   return;
    // }

    var fedCred = await navigator.credentials.get({
      federated: {
        providers: [
          {
            url: "https://localhost:3000", // IdP domain
            clientId: "1234", // Client ID of the RP
            nonce: "5678", // Nonce (random value)
          }
        ]
      }
    });

    console.log(`Fed Cred Manager: `, fedCred);
    const resp = await fedCred.login()
    console.log('FedCM login resp: ', resp);
  } catch (e) {
    console.log(`rejected with: `, e);
  }
};


document.getElementById('fedcm-login').addEventListener('click', () => {
  login();
})
