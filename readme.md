
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

answer: Here getElementById selects only by ID and returns the element object,
getElementsByClassName selects only by class name and returns an HTML collection,
querySelector selects by css selector and returns the  first match element ,
querySelectorAll also selects by css selector but it returns a nodelist

2. How do you **create and insert a new element into the DOM**?

answer:To create a new element in the DOM, we use the document.createElement method to create the new element, and to insert this element, we use the appendChild() or insertBefore() method on the parentNode where we want to insert it.

3. What is **Event Bubbling** and how does it work?

answer:Event Bubbling is a method of event propagation in JavaScript where an event first occurs on the targeted element (child) and then bubbles up to its parent, grandparent, and even the document. Any parent element that has a listener for the same event will automatically be triggered.

4. What is **Event Delegation** in JavaScript? Why is it useful?

answer:Event Delegation is a technique in JavaScript where we attach a listener to a parent element to handle events of its child elements.

This is helpful because we can handle the child elements’ events by attaching a listener only to the parent, so we don’t need to attach separate listeners to each child. Also, if new child elements are added dynamically, the listener on the parent will automatically handle their events as well.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

answer:preventDefault() stops the default behavior of an event, but it does not affect bubbling or propagation.

On the other hand, stopPropagation() stops the event from bubbling or propagating, meaning it will not propagate from child to parent or parent to child , but it does not affect the event’s default behavior.


