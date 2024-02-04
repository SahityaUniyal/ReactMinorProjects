# Background Changer

- It uses react useState hook to manage the state of bakcground color
- An array of objects of colors is defined that stores all the colors we want to pick from
  ```node
    Color array format :
    color= [
    {colorName: "yellow", textColor: "black" },
    ]
    // text color is optional field with default value "white"
  ```
- ForEach loop is used inside react componet to render all these colors
