# Locale tools
Created on 5th July 2023

- It can be cumbersome managing 600+ lang keys, which have are multiplied by the number of locales (de, en, etc...)


## Concept

1. check if all locales have parity
  - read locales as objects, objects have same property length
  - object keys are identical
  - if keys are not identical, list diff
2. check which strings are unused
  - read source code of relevant directories and perform regex for string id
  - relevant dirs:
    - pages
    - components
    - layouts
    - data
3. migrate string IDs
  - Tool to automatically replace all occurences of string ids with an individual, new string id
  - necessary to keep a nice naming convention for stringIds
  - to use, write a string migration json file with key-value pairs
  - output warning, if a found string has no replacement
  - searches raw code files with regex to find i18n method calls: `$t("some-id")` and `$t('some-id')`
  - we do NOT want to match `$t(someVariable)` (variable expressions)
