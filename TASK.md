# **Spartan Trophies | Test task**

**The goal:**

Create web-site, using Vue.js, according to the acceptance criteria below.

Use source file as data received via API.

Publish final version to GitHub.

**Acceptance criteria:**

1. **A customer can open &quot;Your Tropaion&quot; page** ([design](https://www.figma.com/file/60KG4lvAM0v65PBWENAfKT/Trophies-Test-Task?node-id=1%3A1288))
1. The page is located under /tropaion URI
2. The page contains a single section &quot;Your trophies&quot;
3. The page has 3 primary adaptive formats:
   1. 375+
   2. 500+
   3. 900+
2. **Your trophies section**
   Shows the overall list of badges by year.
1. **Year switcher**
   Allows to select the year where a customer has badges. Сhanges the counter of badges and the table of badges below. By default is set to the current year.
2. **Counter of earned/all badges**
   Is dependent on the chosen year.
3. **Table of badges**
   Shows all the badges available for the chosen year.
   1. On the launch, we&#39;ll have 2020 &amp; 2021 years.
   2. The badges are grouped into categories which have names
   3. The categories and badges inside categories are sorted according to the order provided in the API.
   4. Available badges are dimmed by default. Earned badges are coloured.

**Data to use:**

- Link to the source file: [https://my-json-server.typicode.com/zahod/membership/trophies](https://my-json-server.typicode.com/zahod/membership/trophies)
- All the badges have the same icon: [link](https://www.dropbox.com/s/heju5dqudft1ogx/Badge-Sprint.svg?dl=0).

**Preferred technologies:**

- Version of Vue.js 2+
- Code is written in JavaScript
- Leverage a simple store using Vuex for storing data from the source file
- If needed use a public visual components library
- If needed use a public library for grouping, sorting, etc

**Source File Data:**

**2020**

- Virtual
  - VR Sprint - true
  - VR Super - false
  - VR Beast - false
- Race
  - Open Heat - true
  - Elite Heat - true
- Age Group Rank
  - Age Group Win - true
  - Age Group 2nd - false
  - Age Group 3rd - false
  - Age Group 4th - false
  - Age Group 5th - false

**2021**

- Race
  - City - true
  - Stadion - true
  - Sprint - false
  - Super - false
  - Beast - true
  - Ultra - false
  - Open Heat - true
  - Age Group Heat - true
  - Elite Heat - false
- Gender rank
  - Gender Win - false
  - Gender 2nd - false
  - Gender 3rd - false
  - Gender 4th - true
  - Gender 5th - true
