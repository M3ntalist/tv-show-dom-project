/* GRID */

/* This grid is meant to be used as is, without any edits to it. 
   You should copy this file into each new responsive project, 
   and import grid.css in the head of your HTML file, as well as 
   your custom stylesheet(s).
 */

   * {
   box-sizing: border-box;
 }
 
 /* Containers */
 /* outside container -1st  */
 .container {
   /* default from breakpoint 0, until another breakpoint overrides it */
 
   padding-right: 15px;
   padding-left: 15px;
   margin-right: auto;
   margin-left: auto;
 }
 
 @media (min-width: 576px) {
   /* sm */
   .container {
     max-width: 540px;
   }
 }
 
 @media (min-width: 768px) {
   /* md */
   .container {
     max-width: 720px;
   }
 }
 
 @media (min-width: 992px) {
   /* lg */
   .container {
     max-width: 960px;
   }
 }
 
 @media (min-width: 1200px) {
   /* xl */
   .container {
     max-width: 1140px;
   }
 }
 
 /* Wrap each bundle of content blocks in a row */
 /* For example, 4 blocks that 'live' together in a row, and then get stacked on mobile */
 /* they should be together inside a wrapper with the class 'row' */
 
 .row {
   display: flex;
   flex-wrap: wrap;
   margin-right: -15px;
   margin-left: -15px;
 }
 
 /* Default styles for all col-classes */
 
 .col-1,
 .col-2,
 .col-3,
 .col-4,
 .col-5,
 .col-6,
 .col-7,
 .col-8,
 .col-9,
 .col-10,
 .col-11,
 .col-12,
 .sm-col-1,
 .sm-col-2,
 .sm-col-3,
 .sm-col-4,
 .sm-col-5,
 .sm-col-6,
 .sm-col-7,
 .sm-col-8,
 .sm-col-9,
 .sm-col-10,
 .sm-col-11,
 .sm-col-12,
 .md-col-1,
 .md-col-2,
 .md-col-3,
 .md-col-4,
 .md-col-5,
 .md-col-6,
 .md-col-7,
 .md-col-8,
 .md-col-9,
 .md-col-10,
 .md-col-11,
 .md-col-12,
 .lg-col-1,
 .lg-col-2,
 .lg-col-3,
 .lg-col-4,
 .lg-col-5,
 .lg-col-6,
 .lg-col-7,
 .lg-col-8,
 .lg-col-9,
 .lg-col-10,
 .lg-col-11,
 .lg-col-12,
 .xl-col-1,
 .xl-col-2,
 .xl-col-3,
 .xl-col-4,
 .xl-col-5,
 .xl-col-6,
 .xl-col-7,
 .xl-col-8,
 .xl-col-9,
 .xl-col-10,
 .xl-col-11,
 .xl-col-12 {
   position: relative;
   min-height: 1px;
   padding-right: 15px;
   padding-left: 15px;
 }
 
 /* INDIVIDUAL BREAKPOINTS */
 
 /* All breakpoints: Extra smallest screen size from this point*/
 
 .col-1 {
   width: 8.333333%;
 }
 .col-2 {
   width: 16.666666%;
 }
 /* if 100% is = 12 col */
 .col-3 {
   width: 25%;
 }
 .col-4 {
   width: 33.333333%;
 }
 .col-5 {
   width: 41.666666%;
 }
 .col-6 {
   width: 50%;
 }
 .col-7 {
   width: 58.333%;
 }
 .col-8 {
   width: 66.666666%;
 }
 .col-9 {
   width: 75%;
 }
 .col-10 {
   width: 83.333333%;
 }
 .col-11 {
   width: 91.666666%;
 }
 .col-12 {
   width: 100%;
 }
 
 /* small and above */
 
 @media (min-width: 576px) {
   .sm-col-1 {
     width: 8.333333%;
   }
   .sm-col-2 {
     width: 16.666666%;
   }
   .sm-col-3 {
     width: 25%;
   }
   .sm-col-4 {
     width: 33.333333%;
   }
   .sm-col-5 {
     width: 41.666666%;
   }
   .sm-col-6 {
     width: 50%;
   }
   .sm-col-7 {
     width: 58.333%;
   }
   .sm-col-8 {
     width: 66.666666%;
   }
   .sm-col-9 {
     width: 75%;
   }
   .sm-col-10 {
     width: 83.333333%;
   }
   .sm-col-11 {
     width: 91.666666%;
   }
   .sm-col-12 {
     width: 100%;
   }
 }
 
 /* Medium and above until you reach the next break-point */
 
 @media (min-width: 768px) {
   .md-col-1 {
     width: 8.333333%;
   }
   .md-col-2 {
     width: 16.666666%;
   }
   .md-col-3 {
     width: 25%;
   }
   .md-col-4 {
     width: 33.333333%;
   }
   .md-col-5 {
     width: 41.666666%;
   }
   .md-col-6 {
     width: 50%;
   }
   .md-col-7 {
     width: 58.333%;
   }
   .md-col-8 {
     width: 66.666666%;
   }
   .md-col-9 {
     width: 75%;
   }
   .md-col-10 {
     width: 83.333333%;
   }
   .md-col-11 {
     width: 91.666666%;
   }
   .md-col-12 {
     width: 100%;
   }
 }
 
 /* Large and above */
 
 @media (min-width: 992px) {
   .lg-col-1 {
     width: 8.333333%;
   }
   .lg-col-2 {
     width: 16.666666%;
   }
   .lg-col-3 {
     width: 25%;
   }
   .lg-col-4 {
     width: 33.333333%;
   }
   .lg-col-5 {
     width: 41.666666%;
   }
   .lg-col-6 {
     width: 50%;
   }
   .lg-col-7 {
     width: 58.333%;
   }
   .lg-col-8 {
     width: 66.666666%;
   }
   .lg-col-9 {
     width: 75%;
   }
   .lg-col-10 {
     width: 83.333333%;
   }
   .lg-col-11 {
     width: 91.666666%;
   }
   .lg-col-12 {
     width: 100%;
   }
 }
 
 /* Extra large and above */
 
 @media (min-width: 1200px) {
   .xl-col-1 {
     width: 8.333333%;
   }
   .xl-col-2 {
     width: 16.666666%;
   }
 
   .xl-col-3 {
     width: 25%;
   }
   .xl-col-4 {
     width: 33.333333%;
   }
   .xl-col-5 {
     width: 41.666666%;
   }
   .xl-col-6 {
     width: 50%;
   }
   .xl-col-7 {
     width: 58.333%;
   }
   .xl-col-8 {
     width: 66.666666%;
   }
   .xl-col-9 {
     width: 75%;
   }
   .xl-col-10 {
     width: 83.333333%;
   }
   .xl-col-11 {
     width: 91.666666%;
   }
   .xl-col-12 {
     width: 100%;
   }
 }
 
 /* 
 grid.css
 grid.css important note - 4 level of div construction for your content
 1st div - outer container
 2nd div - flex-box row
 3rd div - column-width div - this is where you decide how many tv-shows you can see on the screen
 div - for all the contents - this is where you put all the content of the tv-show
 see example https://codepen.io/sonjide/pen/jObjMZg - if you remove each layer you will find that the content will be modified or not look as you intended
 now fix styling for the div so they are 4 in a row - this is now solved
 look at how to use.filter to filter episodes
 outcome of second task is to only show the episodes which have the word“ game” in the name(or series)
 https://codepen.io/PalashSharma20/pen/dMRQYV
 */