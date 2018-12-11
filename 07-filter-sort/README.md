# Filter-Sort Flight Results

## Goals

_Show how to refactor legacy Javascript into more modern patterns._

Taken from a real example, the controls to filter and sort flight results both displayed the user's selection and allowed the user to change their selection. In addition, other parts of the code could update the selection but weren't guaranteed to update the controls. The data (selections) and view (controls) were **tightly coupled**. Unrelated areas of code were allowed to update the selections (**multiple responsibility**). Zero unit tests made changing this area of code even more scary.

The refactor aimed to make the filter-sort feature **more open to change**--changing requirements in both functionality and visual design. It was also a goal to **separate the concerns of data and view** by using **event-driven architecture** (publish-subscribe pattern).

Secondary goals aimed to, if not writing the tests, at least making the new code more testable. This was also a good opportunity to look at maintenance: to consider strong typing and linting that would help the new code grow with multiple contributors over time.

## Progress

- 2018-12-10: Begin with the basics, just a couple HTML files with their style and legacy Javascript references to get started. Created an example for one-way and round-trip flights. One interesting twist was a functional change that brought separate controls for round-trip flights into a single global control. Next steps: add data attributes to markup and basic sort implementation.