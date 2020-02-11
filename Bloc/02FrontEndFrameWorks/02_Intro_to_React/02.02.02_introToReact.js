// 1. In your own words, explain React's Virtual DOM. What gives React its fast
// performance?

// Virtual DOM updates information similar to the way github updates: through
// logging `diff` after an event and making just those changes. This speeds up
// rendering time because the browser only makes the necessary changes instead
// or re-rendering the entire DOM every time. So the last DOM structure is kept
// in a snapshot, then updated and replaced when a new event occures.


// 2. In your own words, describe React's core concept of uni-directional data
// flow. Draw diagrams to illustrate. Discuss the answer with your mentor in
// your next session.

// Uni-Directional data flow limits the manipulation of a website by sending
// data from Parent elements down to child elements. YOu can drop a variable or
// data set into a unidirectional flow, the data will be processed by the child
// elements, then pushed back up to the parent as output. This is smoother
// execution than multi-directional data-flow, since only one input can manipulate
// the elements instead of several inputs that could create crashes or errors.


// Diagram:

Input Field ---> Event or Action (processes code) ---> Store (updates VDOM)---V
        ^--------------------View Outpus-------------------------------------
