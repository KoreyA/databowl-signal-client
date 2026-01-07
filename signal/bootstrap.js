import { signal } from "./init";

(async function bootstrapSignal() {
  try {
    await signal.trackPageView({
      page_version: window.PAGE_VERSION,
      consent_version: window.CONSENT_VERSION,
    });

    signal.setContext({
      ssid: new URLSearchParams(window.location.search).get("ssid"),
      campaign_id: new URLSearchParams(window.location.search).get("cid"),
      landing_page_id: window.LANDING_PAGE_ID,
    });
  } catch (e) {
    console.warn("[signal] bootstrap failed", e);
  }
})();
