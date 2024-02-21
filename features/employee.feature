Feature: super test demo

  @debug
  Scenario: Create new employee profile
    Given The "AU" service is up and running
    When sign up with email "janet.weaver@reqres.in"
    Then The user sign up successfully
    When create employee profile for the user with following data
      | name  | salary | age |
      | janet | 1234   | 23  |
    Then employee profile created successfully
