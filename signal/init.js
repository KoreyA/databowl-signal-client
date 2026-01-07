import { createSignalClient } from "databowl-signal-client";

export const signal = createSignalClient({
  urlId: window.DB_URL_ID,
  defaultAffiliateId: window.DB_AFFILIATE_ID,
  submitEventTypeId: 101,

  recaptchaV3SiteKey: window.RECAPTCHA_V3_KEY,
  recaptchaV2SiteKey: window.RECAPTCHA_V2_KEY,

  signalApiBaseUrl: window.SIGNAL_API_BASE_URL,
});
