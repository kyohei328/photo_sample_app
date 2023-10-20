import React from 'react';
import { ComponentProps, forwardRef } from "react";

// https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/web-intent

// var TwitterIntentTweetProps = {
//   text: null,
//   url: null,
//   hashtags: null,
//   via: null,
//   related: null,
//   in_reply_to: null,
// } & Omit<ComponentProps<"a"> "href" | "target" | "rel">

// // export const TwitterIntentTweet = forwardRef<HTMLAnchorElement, TwitterIntentTweetProps>(
// const TwitterIntentTweet =  forwardRef<HTMLAnchorElement, TwitterIntentTweetProps>(

//   (
//     { text, url, hashtags, via, related, in_reply_to, ...intrinsicProps },
//     forwardedRef,
//   ) => {
//     const _url = new URL("https://twitter.com/intent/tweet");

//     if (text !== undefined) _url.searchParams.set("text", text);
//     if (url !== undefined) _url.searchParams.set("url", url);
//     if (hashtags !== undefined) _url.searchParams.set("hashtags", hashtags.join(","));
//     if (via !== undefined) _url.searchParams.set("via", via);
//     if (related !== undefined) _url.searchParams.set("related", related.join(","));
//     if (in_reply_to !== undefined) _url.searchParams.set("in_reply_to", in_reply_to);

//     return (
//       <a
//         ref={forwardedRef}
//         href={_url.toString()}
//         target="_blank"
//         rel="noopener noreferrer"
//         {...intrinsicProps}
//       />
//     );
//   },
// );

// if (process.env.NODE_ENV === "development") {
//   TwitterIntentTweet.displayName = "TwitterShareLink";
// }


type TwitterIntentTweetProps = {
  text?: string;
  url?: string;
  hashtags?: string[];
  via?: string;
  related?: string[];
  in_reply_to?: string;
} & Omit<ComponentProps<"a">, "href" | "target" | "rel">;

export const TwitterIntentTweet = forwardRef<HTMLAnchorElement, TwitterIntentTweetProps>(
  (
    { text, url, hashtags, via, related, in_reply_to, ...intrinsicProps },
    forwardedRef,
  ) => {
    const _url = new URL("https://twitter.com/intent/tweet");

    if (text !== undefined) _url.searchParams.set("text", text);
    if (url !== undefined) _url.searchParams.set("url", url);
    if (hashtags !== undefined) _url.searchParams.set("hashtags", hashtags.join(","));
    if (via !== undefined) _url.searchParams.set("via", via);
    if (related !== undefined) _url.searchParams.set("related", related.join(","));
    if (in_reply_to !== undefined) _url.searchParams.set("in_reply_to", in_reply_to);

    return (
      <a ref={forwardedRef}href={_url.toString()}
        target="_blank"
        rel="noopener noreferrer"
        {...intrinsicProps}
      >Xでシェアする</a>
    );
  },
);

if (process.env.NODE_ENV === "development") {
  TwitterIntentTweet.displayName = "TwitterShareLink";
}