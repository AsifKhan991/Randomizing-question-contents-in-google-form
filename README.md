# Randomizing-question-contents-in-google-form-
## Changing question contents (i.e: numeric value/variables) within google form for individual people using Google script
Oftentimes when conducting a survey or taking individual assesment using google form it is required to set the question content differently for individual person. But unfortunately there is no straight forward way to do so in the google form editor UI. This repo shows how this feature can be implemented using google script and basic form triggers. <br> <br>
The google scipt in the repo is used for a dummy survey on 5G data pack where it is required to set different values for the numeric contents like pack size, duration, price etc. for different peoiple. The script works by the following steps:<br>
  1) On form submit, the script disables the response for the form
  2) Saves the submitted response to the spread sheet linked within the script(check line to )
  3) then deletes all the question from the form
  4) sets new question with different numeric contents(pack size, duration, price etc.) based on the randomizing algorithm used. Here 9 set of data was hard-coded to be selected randomly, you can use your own algorithm to set the question contents.
  5) makes the questions and enables form response 
  6) reapeat the process if another response is submitted.
