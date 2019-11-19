Built for an old FreeCodeCamp challenge

# User stories

1. I can see the weather in my current location.
2. I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.
3. I can push a button to toggle between Fahrenheit and Celsius.

# The build

This was a real kicker. My first time working with JSON and my very first GET request to an API. FreeCodeCamp has the tendency to give you a task that they may have not equipped you fully for before to handle. You need to be able to articulate your problems and then do a LOT of research to solve them.

In the end I've managed to throw it together with only a few bugs left:

1. The location error handling was non-existent. UPDATE: I have now managed to fix this with the help of the MDN docs on `navigator.geolocation`.
2. Fixed footer is not so fixed. My original fixed footer lacked left and right padding. UPDATE: all fixed and padded.