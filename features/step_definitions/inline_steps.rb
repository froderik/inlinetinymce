When /^I click on the element with id "([^"]*)"$/ do |id|
  find_by_id(id).click
end

When /^I fill in the editor with "([^"]*)"$/ do |arg1|
  pending # express the regexp above with the code you wish you had
end
