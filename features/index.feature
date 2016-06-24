Feature: Index visit
  As a visitor
  I want to see BDD text

  Scenario: User visits index pages and can see BDD text
    Given User 
    When User types index page on the web browser 
    Then User can see BDD text