1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer : The differences between above selectors are mentioned below:
i) getElementById():
  1. selects a single element by id and id must be unique.
  2. returns single element, if not found returns null.

ii) getElementsClassName():
  1. selects all elements containing the same class name.
  2. returns a HTMLCollection of elements.
iii) getElementsClassNa():
  1. selects the first element matching the specific CSS selector like #id, .class, tag, div etc.
  2.returns single element, if not found returns null.

iv) getElementsClassNa():
  1. selects all element matching the specific CSS selector.
  2.returns NodeList of elements.

2.How do you create and insert a new element into the DOM?

Answer: I create and and insert a new element into the DOM using document.createElement() method and appendChild() method.

For example;
<!DOCTYPE html>
     <html lang="en">
      <head>
           <meta charset="UTF-8">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>Creating and inserting new element into the DOM</title>
      </head>
     <body>
           <div style="background-color: aqua; height: 100px; margin: 10px auto;" id="element-contianer">
           </div>
    <script>
           const newPara = document.createElement('p');
           newPara.innerText = "Hi I am really new in the world of DOM";
            const elementContainer = document.getElementById('element-contianer');
           elementContainer.appendChild(newPara);
       </script>
    </body>
   </html>
   
3.What is Event Bubbling and how does it work?

Answer: Event Bubbling is a process of event propagation. In this process event bubbles up the DOM tree, from the target Element up to the window. It is a default behaviour of browser.

** How it works:**

 Suppose there is three nested html elements
       1. A <div> 
       2. A <p> inside the <div> as child  of div
       3. A <button> inside the <p> as child  of p
       
       IF someone click on the following events will occur.

 1. Target Event : First, the click event will be triggered on the <button>
 2. Bubbling Starts: Then the event will starts to bubble up to its parent <p>
 3. Propagation to parents: Next, the event will bubbles from <p> to <div>
 4. Up to the top: This bubbling will be continued until the event reaches to <html>
stopPropagation() method is used to stop event propagation

4. What is Event Delegation in JavaScript? Why is it useful?

Answer: In javaScript, Event delegation is a technique for attaching a single event listener to a parent element instead of adding individual event listeners to each child element.

** Why is Event Delegation Useful**

1.Event delegation can improve the performance by adding fewer event listeners, consuming less memory
2.It helps us to Simply code.
3.When new elements are added to the parent after the page has loaded, the delegated event listener automatically works for them without any extra code.

5.What is the difference between preventDefault() and stopPropagation() methods?

Answer: stopPropagation() and preventDefault() methods help us to manage event behaviour.

The differences between them are below:

preventDefault():

1.Prevents the default browser action.

2.Cancels the event's inherent behavior.

3.Stops the default action.

stopPropagation():

1.Stops the event from traveling to other elements.

2.Controls the flow of the event through the DOM.

3.Does not stop the default action.






 
