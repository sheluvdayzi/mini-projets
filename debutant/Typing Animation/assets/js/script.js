let i = document.querySelector('#simpleUsage')


new TypeIt(i  , {
    strings: "This is a simple string.",
    speed: 50,
    waitUntilVisible: true,
  }).go();