1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
  Ans: 
  In getElementById, it finds the element with a specific id. And returns a single element object (the first and only element with that ID).
  In getElementsByClassName, it finds all elements with a given class name. It returns a live HTMLCollection. It looks like array, but not an array. We can use for of loop.
  In querySelector, it finds the first element that matches a CSS selector. It returns a single element (the first match). 
  In querySelectorAll, it finds all elements that match a CSS selector. It returns a static NodeList. 
2. How do you create and insert a new element into the DOM?
   Ans:
   Steps require to create and insert a new element into the DOM are:
   1. Use createElement() to create a new element node.
   2. Then add content or attributes by using className, innerHTML, innerText etc.
   3. Lastly, insert into the DOM by using appendChild().
3. What is Event Bubbling and how does it work?
   Ans:
   Event bubbling is how events flow through the DOM.

   When an event happens on an element, the event handler executes on that element first. Then, the event bubbles up the DOM tree, triggering the same event on its parent, then grandparent, and so on, until it reaches the document.
4. What is Event Delegation in JavaScript? Why is it useful?
   Ans:
   Event delegation is a way where instead of adding event listeners to many child elements, we add one listener to a common parent. When an event happens, it bubbles up, and you check which child triggered it.
   It's Useful because we don’t need to attach listeners to every single child which keeps code cleaner, lightweight and efficient.
5. What is the difference between preventDefault() and stopPropagation() methods?
   Ans:
   preventDefault() is used to stops the default action of the element from happening. For a example, stops a form from submitting.
   stopPropagation() is used to stops the event from bubbling. For a example, a button inside a div won’t trigger the div’s click handler.