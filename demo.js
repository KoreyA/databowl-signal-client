import { createSignalClient } from "databowl-signal-client";

const signal = createSignalClient({
  urlId: "YOUR_URL_ID",
  defaultAffiliateId: "YOUR_DEFAULT_AFFILIATE_ID",
  submitEventTypeId: 123,                 // Databowl event type id for form submit
  // recaptchaV3SiteKey: "optional",
  // recaptchaV2SiteKey: "optional",
  // baseUrl: "https://dbevt.com",          // optional override
  // signalApiBaseUrl: "https://signal.yourdomain.com", // optional certificate endpoint
  // signalApiKey: "optional",
});

await signal.trackPageView({
  page_version: "lp-2026-01-07.1",
  consent_version: "v4",
});

// optional, can be called any time
signal.setContext({
  ssid: "12345",
  publisher_sub_id: "abc",
});

// on submit
const res = await signal.trackSubmit({
  action: "lead_submit",                  // Recaptcha v3 action
  recaptchaElement: document.getElementById("recaptcha"),
  params: {
    form_id: "car-insurance-quote",
    step_count: "3",
  },
  // optional, forwarded to Signal backend certificate endpoint
  certificatePayload: {
    buyer_id: "buyer-001",
    // send only what you are happy to share server-side
    email: "user@example.com",
    phone: "07123456789",
    postcode: "SW1A 1AA",
  },
});

console.log(res);
/*
{
  uid,
  submitEventId,
  certificate: { token, verifyUrl } | null
}
*/
