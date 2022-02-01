# Randomizing question contents in google form
## Changing question contents (i.e: numeric value/variables) within google form for individual people using Google script
Oftentimes when conducting a survey or taking individual assesment using google form it is required to set the question content differently for each person. But unfortunately there is no straight forward way to do so in the google form editor UI. This repo shows how this feature can be implemented using google script and basic form triggers. <br> <br>
The google scipt in this repository is used for a dummy survey on 5G data pack where it is required to set different values for the numeric contents like pack size, duration, price etc. for different peoiple. The script works by the following steps:<br>
  1) On form submit, the script disables the response for the form
  2) saves the submitted response to the spread sheet linked within the script(check line 19 to 35)
  3) then deletes all the question from the form
  4) sets new question with different numeric values (pack size, duration, price etc.) based on the randomizing algorithm used (check line 43 to 77). Here 9 set of data was hard-coded to be selected randomly, you can use your own algorithm to set the question contents. 
  5) enables form response 
  6) reapeat the process if another response is submitted.

## How to set up the triggers:
  1) In app script editor, go to triggers menu click "add trigger"<br>![This is an image](https://github.com/AsifKhan991/Randomizing-question-contents-in-google-form/blob/main/trigger%20menu.PNG)
  2) apply settings as such and click save <br>![This is an image](https://github.com/AsifKhan991/Randomizing-question-contents-in-google-form/blob/main/trigger%20settings.PNG)
  3) upon completion it will look like this and you are done<br>![This is an image](https://github.com/AsifKhan991/Randomizing-question-contents-in-google-form/blob/main/after%20completion.PNG)
