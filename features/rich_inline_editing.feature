Feature: rich inline editing
  In order to get a comprehensive context
  as a web site editor
  I want to inline edit text on my pages

  Scenario: edit inline
    Given I am on the home page
    When I click on the element with id "fancy_text"
    And I fill in the editor with "A really fancy text"
    And I press "Save" within ".editor"
    Then I should see "A really fancy text" within "#fancy_text"
