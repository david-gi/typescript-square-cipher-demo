
### Square cipher
An implementation of a classic method for composing secret messages called a square code.
From a pre-work vetting task.

#### Note on style
I realize the functional programming approach and style used can
often be a point of contention depending on the team's experience.
I had to fit the functions to the pre-written test, so the style is also a bit mixed.

However, I would like to at least make a case for such a, seemingly dense, style.
 - Easier test writing: Straightforward functions return a single value with less 'side effects'.
 - Less bugs: It kinda forces you to write working code, line-by-line, while coding.
 - More performant: Less in memory with less variable declarations, lets algorithms go faster.
 - More obvious abstractions: Less code, less redundant code and exponentially faster coding.
 - Maintainable: Succinctness means less to read, less to change and less to go wrong. 
