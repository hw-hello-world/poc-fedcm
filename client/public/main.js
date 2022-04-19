// Feature detection: Since `FederatedCredential` is already available in Chrome
// for the old Credential Management API, additional
// `FederatedCredential.prototype.login` check is required.
function isFedCMEnabled() {
  return !(!window.FederatedCredential || !FederatedCredential.prototype.login);
}
console.log(isFedCMEnabled() ? "FedCM is available" : "FedCM is not available");

document.getElementById('fedcm-status').innerText = isFedCMEnabled();

async function login() {
  try {
    if (!isFedCMEnabled()) {
      return;
    }

    // In this example, https://idp.example is the IdP's URL.
    var idToken = await navigator.credentials.get({
      federated: {
        providers: [{
          url: "https://idp.example", // IdP domain
          clientId: "1234", // Client ID of the RP
          nonce: "5678", // Nonce (random value)
        }]
      }
    });

    console.log(`received token: `, idToken);
  } catch (e) {
    console.log(`rejected with ${e}`);
  }
};


document.getElementById('fedcm-login').addEventListener('click', () => {
  login();
})
