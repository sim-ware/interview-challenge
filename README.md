# Feedr Technical Challenge

Thank you for taking the time to attempt this challenge.

These tests are used to evaluate candidates of all skill levels so please complete them to a level you feel is an accurate representation of your skill set.

Please read `README-FRONTEND.md` for further instructions.

If you have any questions or would like to clarify any details, please email lyz@feedr.co.

Good luck!

## Approach
I first refactored the sidebar into its own component. This allowed me to do the same with FoodItems and Dietaries - allowing me more easily to separate the HTML into more manageable components.


With the new SideBar and FoodItem, Dietary components, I could map over items.js and dynamically populate both the list, and each item's dietary requirements.
Feeling that the menu's state should be at the root level of the app, so child components all could access it, I coded it so, and added an onClick handler to populate the state's menu with the selected choice(s).

I then needed to separate out the MenuPreview into its own component (for ease of use), and then, similarly to the SideBar before, ensure that it maps over App.js' state's menu (instead of items.js like in SideBar) so clicked items in the SideBar populate the MenuPreview.

After this, I needed to add the ability to remove items from the MenuPreview - I sort of reversed the previous clickHandler I wrote for this, addItemFromSideBar(), into removeItemFromSideBar().

Once I was happy this was working, I moved onto adding the necessary info to the MenuSummary. For the itemCount, all we needed to do was pass the length of the menu's state array. For the individual diet count, my working was a bit more cumbersome. In App.js, I wrote a function called 'returnDietaryCounts()' which returns an object with each dietary requirement's total within the menu. It loops over all items in the menu, and then each item's dietaries, and tallies up how much of each category is in the MenuPreview

## Notes
I thought of using "hooks" for state here, but ran into errors when implementing it. A quick search suggested the use of "hooks" was incompatible with the project's React version (https://github.com/facebook/react/issues/14484). I used regular state instead, thinking that if the project was bootstrapped this way, that this is how you code at Feedr and I should follow convention.

The app throws non-crashing errors when duplicate items are added to the MenuPreview. It violates React's policy of ListItems all having unique ID's. However, it did not crash the app, and the user is able to add and remove items freely - unsure as to whether the MenuPreview can contain duplicate items, I left it as is.


