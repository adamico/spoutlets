# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :entry do
    content "This is a reflection for an Entry"
    anxiety_level "5"

    factory :happy_entry do
      happiness_level "5"
    end
  end
end
