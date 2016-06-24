# Cucumber sample for node.js 

###### Type below commands on your terminal
- npm install
- npm test

And then you can see below result.
```
Feature: Index visit

  As a visitor
  I want to see BDD text

  Scenario: User visits index pages and can see BDD text
    Given User
GET / 200 6.360 ms - 3
    When User types index page on the web browser
    Then User can see BDD text

1 scenario (1 passed)
3 steps (3 passed)
0m00.043s
```

This sample uses cucumber.js, supertest, should.js.
