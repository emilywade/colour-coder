# Colour Coder

Colour Coder is an interactive game where users can test their memory skills to match up the pairs of colours. The game is aimed for all ages - with a particular spotlight on kids and the elderly. My Grandma has suffered with dementia for the last few years and the main purpose for creating this game was to give her another hobby which was challenging but not impossible. 

![Responsive Mockup](assets/images/readme/responsive.png)

## Features 

- __Game Layout__

  - Simple game area with grey colour scheme so that when cards are turned the colours standout.
  - Cards are responsive so move to fill the space on larger devices.
  - The 'PLAY GAME' button is the only thing in a different colour before cards are turned so the user immediately knows how to start the game.
  - When hovering over the cards or button, the cursor changes to a pointer to make it clear that these items are clickable.

![Nav Bar](assets/images/readme/game-layout.png)

- __Game Play__

  - I used the way that JavaScript interacts with the DOM to create this game.
  - I first define the colour codes that will be used to randomly shuffle the cards.
  - Then I create HTML elements representing these cards, each displaying a colour from the shuffled list.
  - The game handles click events on cards, flipping them and checking for matches.
  - I used the pseudo-class ::after to create the back of each card.
  - The PLAY GAME button calls a function to reload the game.
  - After each click it checks for a game win, and if all pairs are matched then an alert is triggered. 

![Header](assets/images/readme/alert-message.png)


## Testing 

### Manual Testing
- Feature testing:
  - Cards flip on click and display colour for an appropriate amount of type.
  - If a pair matches then the cards remain flipped.
  - On win, an alert message triggers.
- Usability:
  - Colour schemes are readable for all users (checked with [WebAim Contrast Checker](https://webaim.org/resources/contrastchecker/))
  - Game is responsive to screen sizes. 
  - Game renders and functions correctly on different browsers (checked Chrome, Firefox, Safari, Edge and Opera using [BrowserStack](https://live.browserstack.com/))
- User Testing:
-   I visited my Grandma and got her to give this game ago! It was extremely heartwarming to see her focussing on something so hard and managing to succeed. Her comment was "I love the colours", and for someone who talks so infrequently, I'm taking this as a win!

### Validator Testing 

- HTML
  - No errors were returned when passing through the official W3C validator
- CSS
  - No errors were found when passing through the official (Jigsaw) validator
  - <p>
      <a href="http://jigsaw.w3.org/css-validator/check/referer">
          <img style="border:0;width:88px;height:31px"
              src="http://jigsaw.w3.org/css-validator/images/vcss"
              alt="Valid CSS!" />
      </a>
    </p>
- Accessibility
  - Colours and fonts chosen are easy to read and accessible (checked using lighthouse in devtools)

![Accessibility](assets/images/readme/accessibility.png)

### Unfixed Bugs

N/A

### Fixed Bugs

- Noticed in final stages that the favicon wasn't displaying.
- Was due to the links being incorrect - have since fixed this.

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - [Colour Coder](https://emilywade.github.io/colour-coder/)

## Credits 

### Content 

- The fonts were taken from [Google Fonts](https://fonts.google.com/)
- The favicon was taken from [Favicon](https://favicon.io/)
- The inspiration for creating a colour coder was taken from the tutorial [Learn the JavaScript DOM With This Project](https://www.youtube.com/watch?v=bznJPt4t_4s&t=1007s)
- I used this website to get an understanding of how flip cards could work [Flip Cards](https://blog.nicm42.co.uk/flip-cards)
- In order to understand the setAttribute method differences in setting class names and background colours I used my trusty friend [W3 Schools](https://www.w3schools.com/jsref/met_element_setattribute.asp)
- I also looked into the difference between getElementById and querySelector prior to starting this project. A lot of tutorials I looked at used the latter and this was different to what we had learnt in the lessons. I found the querySelector more intuitive so decided to use this in my project [Medium](https://medium.com/@tgolebie16/getelementbyid-vs-queryselector-b164acba1421#:~:text=They%20both%20retrieve%20elements%20from,then%20you%20should%20use%20getElementById.)
