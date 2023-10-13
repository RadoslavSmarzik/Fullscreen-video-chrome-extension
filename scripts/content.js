// Select the node that will be observed for mutations
const targetNode = document.querySelector("body");

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {

  for (const mutation of mutationList) {
    if (mutation.target.tagName === "VIDEO"){
      handle_video();
      observer.disconnect();
      break;
    }
  }

};


const handle_video = () => {

  const video = document.querySelector("video")
  video.style.width = "100%"
  video.style.height = "100%"
  video.style.position = "fixed"
  video.style.top = "0";
  video.style.left = "0";

  parentDiv = video.parentNode;

  parentParentDiv = parentDiv.parentNode
  parentParentDiv.style.width = "100%"
  parentParentDiv.style.height = "100%"
  parentParentDiv.style.zIndex = 50000
  parentParentDiv.style.position = "fixed"
  parentParentDiv.style.top = "0";
  parentParentDiv.style.left = "0";

}

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observing
//observer.disconnect();


// setInterval(() => {
//   video = document.querySelector("video")
//   console.log("APPP");
//   console.log(video);
// }, "1000");





// const article = document.querySelector("article");

// // `document.querySelector` may return null if the selector doesn't match anything.
// if (article) {
//   const text = article.textContent;
//   const wordMatchRegExp = /[^\s]+/g; // Regular expression
//   const words = text.matchAll(wordMatchRegExp);
//   // matchAll returns an iterator, convert to array to get word count
//   const wordCount = [...words].length;
//   const readingTime = Math.round(wordCount / 200);
//   const badge = document.createElement("p");
//   // Use the same styling as the publish information in an article's header
//   badge.classList.add("color-secondary-text", "type--caption");
//   badge.textContent = `⏱️ ${readingTime} min read`;

//   // Support for API reference docs
//   const heading = article.querySelector("h1");
//   // Support for article docs with date
//   const date = article.querySelector("time")?.parentNode;

//   (date ?? heading).insertAdjacentElement("afterend", badge);
// }