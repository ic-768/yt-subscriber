(async function run() {
  const cids = [
    "UCfM3zsQsOnfWNUppiycmBuw",
    "UCPHjpfnnGklkRBBTd0k6aHg",
    "UC_bNd3ZSSR8jDnJ5vuVD9cA",
    "UCSSIqgytbXxgN47nR9LaTrg",
    "UCfRVJtN4e-7M4AgS0w8nySg",
    "UC04zDnAxV1k8rINplg2RYYw",
    "UC6JJdmaLc1nQ_g0MrXIAeqQ",
    "UCiukZfQzQzcKjAf-_lwJOYQ",
    "UCAvvp53A5XeP_MlTbikoIAQ",
    "UCmrVJGUS1u5-Hsm_BFS_1YA",
    "UCNCSc6rLvgM1sh180q3tz_g",
    "UCT4rGeDXVKMzeHsTNsLklTw",
    "UCEe1wJreegWWirsfPLlosCw",
    "UCD-a5hcntgLtUWZIM5vXRfg",
    "UCjpBtt__PNYz0jM2C8xKqTQ",
    "UCH7iQpYyUJloLKMJBBO7HTA",
    "UC07utrJzxsjOPc7Tl7qXesQ",
    "UCkxMlA7rt-mnIc1AjbyAsPw",
    "UC9ctsJZ2aD1nCexfqj342NQ",
    "UCZUu_KUpfztAbnaR4DNSZ_g",
    "UCItj8WgyxFBfGs1lLejOEbA",
    "UCPQPehv6T4CVeKYtsVZs0rg",
    "UCS_fNfbl1KlDP19fJ4xxlkg",
    "UCaEwYSj9v4_kreb-kfK_anw",
    "UCuwZM3t5FefUY53JKycNT6g",
    "UCxgSQLNe-YR8ZYqaqAOxI0A",
    "UCzBYOHyEEzlkRdDOSobbpvw",
    "UC_BANQfJbw0lPAGHtAeX5nw",
    "UClzuIsSjP2aAYw6rCqE_8CQ",
    "UCSljO84JCPeaefyHe-8voIg",
    "UCb2fKNBRtC06yz_NsUGbYgw",
    "UC0oAMF79rcx6bqvzp9A4sSA",
    "UC0b9_5ecGF_7H1Rj7acwvlw",
    "UCrQnPYOS__APdgottUDDX5g",
    "UCUhNmr5T6FTIN0uIzRg3iag",
    "UCh7ITfvidYqh4uAudHYPnNA",
    "UCh7ITfvidYqh4uAudHYPnNA",
    "UC2O4k38jHQ2c-gvi3ZN_aqA",
    "UCeb6i2NNx3PRp-Al5VRMO4Q",
    "UCIRoo9Lsz1DOXRIvEo-UARQ",
    "UCvmpOQfPsIrxO0NI5slLDwQ",
    "UCTKC4oXEZ9cq1KV-leiu8jw",
    "UCT78OnJ9NbgR3WBcL7vXg4w",
    "UCT78OnJ9NbgR3WBcL7vXg4w",
    "UCArZ8Ms0KMyb2KrphNl2OnQ",
    "UC14hksGNKLU5Ny8c145cuzw",
    "UCne29a_nfGMJcSebL04Rp-A",
    "UCb24bpyTx2fhqiXAnhek26Q",
    "UCnpuk_aRppEYW2xEpw0f1KA",
    "UCJyFuDGF_8ebLE_FIZQBdxw",
    "UCCgrWW6fsUVdRD7xI52xhnQ",
    "UCM_EpzaVHNiZBJL6XoN3ubg",
    "UCIPOnD27fWx5Ts5zOEB5wFA",
    "UCrIPWaSEHW4CqX0hGtxsQwg",
    "UCdGPDYyshQuiRWYQd2WThpg",
    "UCmd3N-jz3T_K7xyZk7BuS8Q",
    "UCrSjSWA4soJEpCGx2b3JqGg",
    "UCufOM2MHhsBcOzBbpoxlzXg",
    "UCJqZJwexzEmO0-GezNBaMrQ",
    "UCbV8aAeE4iseDcpuUTDAJ0w",
    "UCcjVGHwHYVOkuvNEX2UH11Q",
    "UCrCL5J7VveQ8xBLv0INlsPg",
    "UCay_OLhWtf9iklq8zg_or0g",
    "UCay_OLhWtf9iklq8zg_or0g",
    "UCjkNQBA-XPW0B_Q-XYBb_ZA",
    "UCho1jHpyFIygjNAvh5COeTQ",
    "UCTEmTRrG1xva1IaKAPMJZwg",
    "UCPL_4-oBYrZt90X76xJZ5Mw",
    "UCGRAs2h9o8AhlbMwe5T-Iww",
    "UCedcH2kb9dRn6qPcafYF48g",
    "UCSRHo1XLD_1mMkqtv8QbVdg",
    "UCxh5yz-eMpWGsYsa7IWH6OA",
  ];

  function SHA1(msg) {
    function rotate_left(n, s) {
      const t4 = (n << s) | (n >>> (32 - s));
      return t4;
    }
    function cvt_hex(val) {
      let str = "";
      let i;
      let v;
      for (i = 7; i >= 0; i--) {
        v = (val >>> (i * 4)) & 0x0f;
        str += v.toString(16);
      }
      return str;
    }
    function Utf8Encode(string) {
      string = string.replace(/\r\n/g, "\n");
      let utftext = "";
      for (let n = 0; n < string.length; n++) {
        const c = string.charCodeAt(n);
        if (c < 128) {
          utftext += String.fromCharCode(c);
        } else if (c > 127 && c < 2048) {
          utftext += String.fromCharCode((c >> 6) | 192);
          utftext += String.fromCharCode((c & 63) | 128);
        } else {
          utftext += String.fromCharCode((c >> 12) | 224);
          utftext += String.fromCharCode(((c >> 6) & 63) | 128);
          utftext += String.fromCharCode((c & 63) | 128);
        }
      }
      return utftext;
    }
    let blockstart;
    let i, j;
    let W = new Array(80);
    let H0 = 0x67452301;
    let H1 = 0xefcdab89;
    let H2 = 0x98badcfe;
    let H3 = 0x10325476;
    let H4 = 0xc3d2e1f0;
    let A, B, C, D, E;
    var temp;
    msg = Utf8Encode(msg);
    let msg_len = msg.length;
    let word_array = new Array();
    for (i = 0; i < msg_len - 3; i += 4) {
      j =
        (msg.charCodeAt(i) << 24) |
        (msg.charCodeAt(i + 1) << 16) |
        (msg.charCodeAt(i + 2) << 8) |
        msg.charCodeAt(i + 3);
      word_array.push(j);
    }
    switch (msg_len % 4) {
      case 0:
        i = 0x080000000;
        break;
      case 1:
        i = (msg.charCodeAt(msg_len - 1) << 24) | 0x0800000;
        break;
      case 2:
        i =
          (msg.charCodeAt(msg_len - 2) << 24) |
          (msg.charCodeAt(msg_len - 1) << 16) |
          0x08000;
        break;
      case 3:
        i =
          (msg.charCodeAt(msg_len - 3) << 24) |
          (msg.charCodeAt(msg_len - 2) << 16) |
          (msg.charCodeAt(msg_len - 1) << 8) |
          0x80;
        break;
    }
    word_array.push(i);
    while (word_array.length % 16 != 14) word_array.push(0);
    word_array.push(msg_len >>> 29);
    word_array.push((msg_len << 3) & 0x0ffffffff);
    for (blockstart = 0; blockstart < word_array.length; blockstart += 16) {
      for (i = 0; i < 16; i++) W[i] = word_array[blockstart + i];
      for (i = 16; i <= 79; i++)
        W[i] = rotate_left(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
      A = H0;
      B = H1;
      C = H2;
      D = H3;
      E = H4;
      for (i = 0; i <= 19; i++) {
        temp =
          (rotate_left(A, 5) + ((B & C) | (~B & D)) + E + W[i] + 0x5a827999) &
          0x0ffffffff;
        E = D;
        D = C;
        C = rotate_left(B, 30);
        B = A;
        A = temp;
      }
      for (i = 20; i <= 39; i++) {
        temp =
          (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ed9eba1) &
          0x0ffffffff;
        E = D;
        D = C;
        C = rotate_left(B, 30);
        B = A;
        A = temp;
      }
      for (i = 40; i <= 59; i++) {
        temp =
          (rotate_left(A, 5) +
            ((B & C) | (B & D) | (C & D)) +
            E +
            W[i] +
            0x8f1bbcdc) &
          0x0ffffffff;
        E = D;
        D = C;
        C = rotate_left(B, 30);
        B = A;
        A = temp;
      }
      for (i = 60; i <= 79; i++) {
        temp =
          (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0xca62c1d6) &
          0x0ffffffff;
        E = D;
        D = C;
        C = rotate_left(B, 30);
        B = A;
        A = temp;
      }
      H0 = (H0 + A) & 0x0ffffffff;
      H1 = (H1 + B) & 0x0ffffffff;
      H2 = (H2 + C) & 0x0ffffffff;
      H3 = (H3 + D) & 0x0ffffffff;
      H4 = (H4 + E) & 0x0ffffffff;
    }
    var temp =
      cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);

    return temp.toLowerCase();
  }

  function getCookie(name) {
    const re = new RegExp(name + "=([^;]+)");
    const value = re.exec(document.cookie);
    return value != null ? decodeURI(value[1]) : null;
  }

  SAPISID = getCookie("SAPISID");
  origin = "https://www.youtube.com";
  time = new Date().getTime();
  SAPISIDHASH = SHA1(time + " " + SAPISID + " " + origin);

  // populate the channelIds array
  const batchIds = (lowBound, highBound) => {
    let result = "";
    for (let x = lowBound; x < highBound; x++) {
      result += `'${cids[x]}',`;
    }
    return result;
  };

  // how many channels to group into every network call
  const batchNum = 4;

  const runAfterDelay = (fn, delay) =>
    new Promise((resolve) => {
      setTimeout(() => {
        fn();
        resolve();
      }, delay);
    });

  for (idx = 0; idx < cids.length; idx += batchNum) {
    await runAfterDelay(
      () =>
        fetch(
          "https://www.youtube.com/youtubei/v1/subscription/subscribe?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8&prettyPrint=false",
          {
            headers: {
              accept: "*/*",
              authorization: `SAPISIDHASH ${time}_${SAPISIDHASH}`,
              "content-type": "application/json",
            },
            body: `{"context":{"client":{"clientName":"WEB","clientVersion":"2.20220712.01.00"}},"channelIds":[${batchIds(
              idx,
              idx + batchNum
            )}]}`,
            method: "POST",
          }
        ),
      2000
    );
  }
})();
