# Web Development Project 2 - The Ultimate Plant Parent!

Submitted by: **Karthik Deevenapalli**

This web app: **is a plant-themed flashcard app that helps users test their knowledge of houseplants by flipping cards containing questions and answers, some with images, categorized by difficulty.**

Time spent: **10 hours** spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed 
  - [x] A short description of the card set is displayed 
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed 
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information 
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [x] Cards contain images in addition to or in place of text
  - [x] Some or all cards have images in place of or in addition to text
- [x] Cards have different visual styles such as color based on their category
  - Example categories you can use:
    - Difficulty: Easy/medium/hard ✅

The following **additional** features are implemented:

- [x] Flip animation added to cards for smoother user interaction
- [x] Local image asset integration for better performance
- [x] Back and forward buttons to navigate through cards sequentially
- [x] Responsive design and custom styling using CSS
- [x] Setup using React + Vite for fast development and hot reload

## Video Walkthrough

Here's a walkthrough of implemented required features:


<img src='./project2-walkthrough.gif' title='Video Walkthrough' width='100%' alt='Video Walkthrough' />

GIF created with **ScreenToGif**


## Notes

Describe any challenges encountered while building the app:

- Initially, local images were not loading due to incorrect folder structure and filename issues (e.g., spaces in file names).
- Getting the card flip animation to feel smooth and natural took CSS experimentation with `transform` and `backface-visibility`.
- Styling cards dynamically by category required careful logic to keep the flip and colors in sync.
- Used manual asset management instead of links to ensure better load consistency and appearance.

## License

    Copyright 2025 Karthik

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
