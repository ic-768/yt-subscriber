(async function iife() {
  // This is the time delay after which the "unsubscribe" button is "clicked"; Tweak to your liking!
  var UNSUBSCRIBE_DELAY_TIME = 200;

  /**
   * Delay runner. Wraps `setTimeout` so it can be `await`ed on.
   * @param {Function} fn
   * @param {number} delay
   */
  const runAfterDelay = (fn, delay) =>
    new Promise((resolve) => {
      setTimeout(() => {
        fn();
        resolve();
      }, delay);
    });

  // Get the channel list; this can be considered a row in the page.
  var channels = Array.from(
    document.getElementsByTagName(`ytd-channel-renderer`)
  );
  console.log(`${channels.length} channels found.`);

  var ctr = 0;
  for (const channel of channels) {
    // Get the subsribe button and trigger a "click"
    channel.querySelector(`[aria-label^='Unsubscribe from']`).click();
    await runAfterDelay(() => {
      // Get the dialog container...
      document
        .getElementsByTagName(`yt-confirm-dialog-renderer`)[0]
        // and find the confirm button...
        .querySelector(`#confirm-button`)
        // and "trigger" the click!
        .click();
      console.log(`Unsubscribed ${ctr + 1}/${channels.length}`);
      ctr++;
    }, UNSUBSCRIBE_DELAY_TIME);
  }
})();
