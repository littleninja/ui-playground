### The Basics of CSS Grid ###

// TODO: INTRODUCTION. What's the purpose of this doc, what can readers expect to learn? Where can they look for extra resources?


#### Tables ####
An effective and semantically appropriate element for tabular data of reasonable. Just don't use it for layout. Please.

#### Flexbox ####
MDN describes it as a "one-dimensional layout" of items in a container.

#### Grid ####
Our two-dimensional layout.




// ... TODO: Deprecate content below (except resources)? Simplify this--what do I need to know to get running?

## 1: Containers and Items ##

The key actors in grid are the **container** and its **items**.

**Think flat**. Only children of the grid container can be positioned on the grid.

```
  <grid>
    <grid-item-1 />

    <grid-item-2>
      <peanut-butter /> <!-- cannot use grid position here -->
      <jelly />         <!-- cannot use grid position here -->
    </grid-item-2>

    <grid-item-3 />
    <grid-item-4 />
  </grid
```


// TODO: EXERCISE. Create a calendar with 7 columns for days and 6 rows for weeks. Bonus: offset the first day of the month.


## 2: Lines, Tracks, Gutters, and (later) Areas ##

How does the browser define a grid? 


// TODO: Illustrations, exercise


## 3: Explicit vs. Implicit ##

// ...

// TODO: Illustrations for explicit vs. implicit layout

On the container, we can: 
- define columns (`grid-template-columns`)
- define rows (`grid-template-rows`)
- define both columns and rows at the same time (`grid` or `grid-template`)
- 

As we define rows and columns, we create **lines** and **tracks**.

On the items, we can:
- do nothing and leverage implicit layout
- place items explicitly on the grid:
-- `grid-row-start` and `grid-row-end` or shorthand `grid-row`
-- `grid-column-start` and `grid-column-end` or shorthand `grid-column`

// ...


## 4: Oh yeah, Browser Support ##

## 5. Resources ##

The MDN docs:
- [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)

[CanIUse.com to check feature compatibility](https://caniuse.com)

Jen Simmons publishes new videos each Tuesday and Thursday on her channel, [Layout Land](https://www.youtube.com/layoutland)

Rachel Andrew demonstrates [grid by example](https://gridbyexample.com)

