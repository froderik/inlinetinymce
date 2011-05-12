When /^I click on the element with id "([^"]*)"$/ do |id|
  find_by_id(id).click
end

When /^I fill in the editor with "([^"]*)"$/ do |text|
  evaluate_script("tinyMCE.activeEditor.setContent('" + text + "');")  
end
