var SuiteName = "";
var CodeDefinitions = "";
var Imports = "";
var debugIt = false;

function myAlert ( msg) {
  if (debugIt) {
    alert (msg);
  }
}

function multiplySide (side, value) {
  var newValue = "";
  var newSide = "";
  var list = side.split ( ' ')
  list = side.split ( ' ')
  if (list.length > 1) {
     newSide = "Sorry, Please isolate x on one side before multipling..thanks"
  } else {
     for (i =0; i<list.length; i++ )  {
       if (list[i] != "") {
         if (list [i] == '+') {
           lastOperation = '+';
         } else if (list[i] == '-') {
           lastOperation = '-'
         } else {        
           newValue = '(' + list[i] + ' * ' + value + ')'  
           if (newSide == "") {
             newSide = newValue 
           }  else {   
             newSide = newSide + ' ' + lastOperation + ' ' + newValue        
           }           
         }  
       }  
     }   
  }   
  myAlert ( 'newSide: ' + newSide);   
  return newSide;
}

function divideSide (side, value) {
  var newValue = "";
  var newSide = "";
  
  list = side.split ( ' ')
  if (list.length > 1) {
     newSide = "Sorry, Please isolate x on one side before dividing..thanks"
  } else {
     myAlert ( 'divide ' + side + ' by ' + value + ' list.length: ' + list.length);
     list = side.split ( ' ')
     for (i =0; i<list.length; i++ )  {
       if (list[i] != "") {
         if (list [i] == '+') {
           lastOperation = '+';
         } else if (list[i] == '-') {
           lastOperation = '-'
         } else {        
           newValue = '(' + list[i] + ' / ' + value + ')'  
           if (newSide == "") {
             newSide = newValue 
           }  else {   
             newSide = newSide + ' ' + lastOperation + ' ' + newValue        
           }           
         }  
       }  
     }   
  }   
  myAlert ( 'newSide: ' + newSide); 
  return newSide;
}

function modifySide ( operator, value, side ) { 
   newSide = ""; 
   
   list = side.split ( ' ')
   for (i =0; i<list.length; i++ )  {
     if (list[i] != "") {
       if (newSide = "") {
         newSide = list[i]
       } else {   
         newSide = newSide + ' ' + list[i]
       }  
     }  
   }  
   
   if (operator == 'Add') { 
     newSide = side + ' + ' + value; 
   } else if (operator == 'Subtract') { 
     newSide = side +   ' - ' + value;
   } else if (operator == 'Multiply') { 
     newSide = multiplySide (side, value)
   } else if (operator == 'Divide' ) { 
     newSide = divideSide (side, value)
   } 
   return newSide
}

function removeFirstChar (line, ch) {
  var newLine = line;
  while (true) {
    if (newLine.substring(0,1) == ch.substring(0,1)) {
      newLine = newLine.substring(1);
    } else {
      break;
    }
    if (newLine.length == 1) {
      break;
    }
  }
  return newLine;
}

function cleanSide ( side ) { 
   var newSide = side;   
   var index = newSide.indexOf ( '+ +')
   while (index > -1) { 
     newSide = newSide.substring (0,index) + newSide.substring (index+2) 
     index = newSide.indexOf ( '+ +') 
   }
                              
   index = newSide.indexOf ( ' + 0')
   while (index > -1) { 
     newSide = newSide.substring (0,index) + newSide.substring (index+4) 
     index = newSide.indexOf ( ' + 0') 
   }

   index = newSide.indexOf ( ' - 0')
   while (index > -1) { 
     newSide = newSide.substring (0,index) + newSide.substring (index+4) 
     index = newSide.indexOf ( ' - 0') 
   }
   
   index = newSide.indexOf ( '+ -')
   while (index > -1) { 
     newSide = newSide.substring (0,index) + newSide.substring (index+2) 
     index = newSide.indexOf ( '+ -') 
   }
   
   index = newSide.indexOf ( '  ')
   while (index > -1) { 
     newSide = newSide.substring (0,index) + newSide.substring (index+1) 
     index = newSide.indexOf ( '  ') 
   }
 
   if (newSide == "") { 
     newSide = '0';
   }   
   
   newSide = removeFirstChar (newSide, ' ');
   newSide = removeFirstChar (newSide, '+');
   newSide = removeFirstChar (newSide, ' ');

   return newSide;
}

function combineTerms (side) {
   var total = 0;
   var newSide = '';
   var lastOperation = '+';
   var lastValueWasX = false;
   var cmd = '';
   var numX = 0;
   var list;

   if (side.indexOf ( '(' ) > -1) {
      side = insideParen (side);
   }
   list = side.split (' ')

   myAlert ( 'combineTerms for side: ' + side );
   
   for (i=0; i<list.length; i++ )  {
     myAlert ( 'list[i]:' + list[i] );
     if (list[i] != "") {
       if ((list[i] == '+') || (list[i] == '-') || (list[i] == '*') || (list[i] == '/')) {
         lastOperation = list[i];
       } else if (!isNaN (list[i] )) {
         if ((lastOperation == '+') || (lastOperation == '-'))  {
           cmd = 'total = total ' + lastOperation + list[i];
         } else if ((lastOperation == '*') || (lastOperation == '/') ) {
           cmd = 'total = total ' + lastOperation + ' ' + list [i];
           eval (cmd);
           cmd = 'numX = numX ' + lastOperation + ' ' + list[i];
         }
         eval (cmd);        
       } else if (list[i] == 'x') {        
         if (lastOperation == '+') {
           numX = numX + 1;
         } else if (lastOperation == '-'){
           numX = numX - 1;           
         } else {
           alert ( 'Could not handle operation: ' + lastOperation);
         }
       } else { // This is an x value 
         value = list[i].substring (0,list[i].length-1);
         cmd = 'numX = numX' + lastOperation + value;
         myAlert ( cmd );
         eval (cmd);
       }
     }  
   } 
   
   if (numX != 0) {
     if (numX == 1) {
       newSide = 'x';
     } else {
       newSide = '' + numX + 'x';
     }  
   }   
         
   if (total == 0) {
     if (newSide == "") {
        newSide = '0';
     }   
   } else {
     newSide = newSide + ' + ' + total;
   }  
   
   return newSide;
}

  String.prototype.replaceAll = function(target, replacement) {
    var newString = "";   
    var startIndex = 0;
    var endIndex = this.indexOf (target, startIndex);
    
    while (endIndex > -1) {
      newString = newString + this.substring (startIndex, endIndex) + replacement;
      startIndex = endIndex + target.length;
      endIndex = this.indexOf (target, startIndex);
    }   
    if (startIndex < this.length) {
      newString = newString + this.substring (startIndex)
    }   
    return newString;
  };

Blockly.Python['equation'] = function(block) {
  var operations = Blockly.Python.statementToCode(block, 'OPERATIONS');   
  var value = Blockly.Python.valueToCode(block, 'GIVEN', Blockly.Python.ORDER_ATOMIC);  
  var given = insideChars ( value, "'", "'" );  
  var leftSide = "";
  var rightSide = ""; 
  var startIndex = 0;
  var operator;

  given = given.replaceAll ( '+', ' + ');
  given = given.replaceAll ( '-', ' - ');
  given = given.replaceAll ( '=', ' = ');
  given = given.replaceAll ( '*', ' * ');
  given = given.replaceAll ( '/', ' / ');
  given = cleanSide (given);  
  var index = given.indexOf ( '=');
  
  myAlert ( 'given after clean: ' + given);
  if (index > -1) {
    leftSide = given.substring ( 0, index-1 );
    rightSide = given.substring ( index + 2);    
  }
  
  endIndex = operations.indexOf ( '\n', startIndex) 
  myAlert ( 'given: [' + given + '] startIndex: ' + startIndex);
  var code = 'Given:\n' + given + '\n'
  // + operations + '\nLeft Side: ' + leftSide + ' Right Side: ' + rightSide;
  while (endIndex != -1) {
     operation = operations.substring (startIndex,endIndex);    
     index = operation.indexOf ( ' ', 2 )
     operator = operation.substring (2,index);
     myAlert ( 'operator: ' + operator);
     if (operator == 'Combine') { 
       code = code + '  Combining like terms...\n';
       leftSide = combineTerms ( leftSide);
       rightSide = combineTerms ( rightSide);       
     } else {
       value = operation.substring (index+1);
       leftSide = modifySide ( operator, value, leftSide );     
       rightSide = modifySide ( operator, value, rightSide ); 
       if (operator == "Add") {        
         code = code + operation + ' to both sides\n'; 
       } else if (operator == "Subtract") {
         code = code + operation + ' from both sides\n';
       } else if (operator == "Multiply") {
         code = code + "Multiply both sides by " + operation.substring (10) + '\n';
       } else if (operator == "Divide") {    
         myAlert ( 'Divide both sides by ' + operation );       
         code = code + "Divide both sides by " + operation.substring(8) + '\n';
       }
     }  
     myAlert ( 'Operator: ' + operator + ' clean sides: [' + leftSide + ',' + rightSide + ']');
     leftSide = cleanSide (leftSide);
     rightSide = cleanSide (rightSide);
     given = leftSide + ' = ' + rightSide
     myAlert ( given);
     code = code + given + '\n'; 
     if ((leftSide == 'x') && !isNaN (rightSide)) {
       alert ( 'You have solved for x good job!');
       break;
     } else if ((rightSide == 'x') && !isNaN (leftSide)) {
       alert ( 'You have solved for x....Good Job!');
       break;
     } else if (code.indexOf ( 'Sorry') > -1) {
       break;
     }
     index = given.indexOf ( '=' );
     startIndex = endIndex + 1;
     endIndex = operations.indexOf ( '\n', endIndex+1) 
  }
  
  return code 
} 

Blockly.Python['testdefinition'] = function(block) {
 
  var statements = Blockly.Python.statementToCode(block, 'STATEMENTS');
  SuiteName = Blockly.Python.valueToCode(block, 'SUITENAME', Blockly.Python.ORDER_ATOMIC);
  SuiteName = insideChars (SuiteName, "'", "'")
  
  CodeDefinitions = "";
  Imports = "source(findFile(\"scripts\", \"all_purpose.py\")) # defines WAIT_TIME\n";
   
  if (statements.indexOf ( 'verify_import_data_is_shown_in_file_manager') > -1) {
    CodeDefinitions = CodeDefinitions + 
    "def verify_import_data_is_shown_in_file_manager(atf, tracksLoaded):\n" +
    "  myverify_imported_data_shown_in_file_manager(tracksLoaded, 0)\n" +
    "  USBOperationsHelper.clean_usb_stick(atf)\n" +
    "#End verify_import_data_is_shown_in_file_manager\n\n"
  }
  if ((statements.indexOf ( 'navigate_to_file_manager()') > -1) || (statements.indexOf ('take_screenshot()') > -1) ||
      (statements.indexOf ( 'FileManager.') > -1)) { 
    Imports = Imports + "source(findFile(\"scripts\", \"overlay_filemanager.py\")) # Defines FileManager\n";
    Imports = Imports + "source(findFile\"scripts\", (\"file_manager_helper.py\"))\n";
  }
  
  if (statements.indexOf ( 'EUWelcomeScreen.') > -1) {
    Imports = Imports + "source(findFile(\"scripts\", \"EULA.py\"))\n";  
  }
  
  if (statements.indexOf ( 'AutoTracWarning.') > -1) { 
    Imports = Imports + "source(findFile(\"scripts\", \"overlay_misc.py\"))\n";
  }
  
  if (statements.indexOf ( 'navigate_to_language_and_units()') > -1 ) {
    Imports = Imports + "source(findFile(\"scripts\", \"overlay_language.py\"))\n";
    Imports = Imports + "source(findFile(\"scripts\", \"overlay_language_helpers.py\"))\n"; 
    Imports = Imports + "source(findFile(\"scripts\", \"ShortcutBar.py\"))\n"
  }
  if (statements.indexOf ( 'navigate_to_software_manager()') > -1) {
    Imports = Imports + "source(findFile(\"scripts\", \"applicationmanager_helper.py\"))\n";
  }
  
  if (statements.indexOf ( 'MachineMonitorAppHelper.') > -1) {
    Imports = Imports + "source(findFile(\"scripts\", \"machine_monitor_app.py\"))\n";
    Imports = Imports + "source(findFile(\"scripts\", \"machine_monitor_helper.py\"))\n";   
  }
  
  if (statements.indexOf ( 'navigate_to_autotrac_guidance()') > -1) {
    Imports = Imports + "source(findFile(\"scripts\", \"guidance_track_helpers.py\"))\n";
  }  
  
  if (statements.indexOf ( 'WorkSetupHelper.') > -1) {
    Imports = Imports + "source(findFile(\"scripts\", \"work_setup_helper.py\"))\n";
  }
  
  if ((statements.indexOf ( 'verify_pie_state') > -1) || (statements.indexOf('GuidanceApp.') > -1)) { 
    Imports = Imports + "source(findFile(\"scripts\", \"guidance_app.py\"))\n";
  }
    
  if ((statements.indexOf ( 'LanguageAndUnits.') > -1) ||
      (statements.indexOf ('Reboot.') > -1) || 
      (statements.indexOf ('DisengageAutoTracMessage.') > -1)) { 
    Imports = Imports + 'source(findFile(\"scripts\", \"overlay_language.py\"))\n'; 
  }
  
  if (statements.indexOf ( 'MachineMonitorAppHelper.') > -1) {
    Imports = Imports + 'source(findFile(\"scripts\", \"machine_monitor_app.py\"))\n';
    Imports = Imports + 'source(findFile(\"scripts\", \"machine_monitor_helper.py\"))\n';
  }
  
  if (statements.indexOf ( 'navigate_to_equipment_overlay') > -1) {
    Imports = Imports + 'source(findFile(\"scripts\", \"machine_profile_helper.py\"))\n';
  }
  
  if (statements.indexOf ( 'GuidanceHilTrackHelp.') > -1) {
    Imports = Imports + 'source(findFile(\"scripts\", \"guidance_hil_track_helpers.py\"))\n';
  }
  
  
  if (statements.indexOf ( 'verify_all_tracks_were_properly_imported') > -1) { 
    CodeDefinitions = CodeDefinitions + 
       "def verify_all_tracks_were_properly_imported(trackNames, trackMethods, trackFields):\n" + 
       "    sort_track_list_in_AtoZ_order()\n" + 
       "    for index in range(0, len(trackNames)):\n" + 
       "        TrackList.clickItem(trackNames[index])\n" + 
       "        Expect.are_equal(trackNames[index], TrackList.get_track_name(index), \"Track %d should be %s.\" % ((index + 1), trackNames[index]))\n" + 
       "        _verify_track_preview_information(trackMethods[index], trackFields[index])\n" + 
       "#End verify_all_tracks_were_properly_imported\n" + 
       "\n" + 
       "def _verify_track_preview_information(methodName, fieldName):\n" + 
       "    guidanceLineMethodTrackPreview = str(TrackList.trackPreviewContent.get_property(\"methodData\"))\n" + 
       "    fieldNameTrackPreview = str(TrackList.trackPreviewContent.get_property(\"fieldData\"))\n" +     
       "    Expect.are_equal(methodName,\n" + 
       "                     guidanceLineMethodTrackPreview,\n" + 
       "                     \"Track Preview should show %s as Method used to create guidance track.\" % methodName)\n" + 
       "    Expect.are_equal(fieldName,\n" + 
       "                     fieldNameTrackPreview,\n" + 
       "                     \"Track Preview should show %s as Field the guidance track it saved to.\" % fieldName)\n" + 
       "#End _verify_track_preview_information\n\n" 
  }
  if (statements.indexOf ( 'verify_can_autotrac_on_imported_track') > -1) {
    CodeDefinitions = CodeDefinitions +    
       "def verify_can_autotrac_on_imported_track(trackName, hil):\n" + 
       "    TrackList.clickItem(trackName)\n" + 
       "    TrackList.doneButton.click()\n" + 
       "    Expect.is_true(GuidanceApp.wait_for_top_visible_state(), \"Guidance App should be on top.\")\n" + 
       "    GuidanceApp.AutoTrac.set_steer_on_off()\n" + 
       "    _start_to_autotrac(hil)\n" + 
       "#End verify_can_autotrac_on_imported_track\n" + 
       "    \n" +   
       "def _start_to_autotrac(hil):\n" + 
       "    hil.sim.set_seat_switch()\n" + 
       "    hil.sim.set_Speed(8)\n" + 
       "    GuidanceApp.Guidance.shiftCenterButton.click()\n" + 
       "    HilPieStateHelper.verify_four_pie(hil)\n" + 
       "    HilPieStateHelper.verify_autotrac_for_duration(hil, 30)\n" + 
       "    hil.sim.park_and_reset()\n" + 
       "    GuidanceApp.AutoTrac.steerOnOff.click()\n" + 
       "    GuidanceApp.close()\n" + 
       "#End _start_to_autotrac  \n"  
  }
  /*
  " import TestLibrary\n" + 
                           " with ATFBoard() as atf, StarFireHIL() as DMStarfire, TestLibrary.TestLibrary() as hil:\n" +   
  
  # "HOME, _BuildArtifacts, GSX_DIR = initial_setup()\n" + 
  */
  var withStatements = ""
  if (statements.indexOf ( 'testing.' ) > -1) { 
    withStatements = withStatements + " with TestLibrary.TestLibrary() as testing:\n"
  }
  statements = "def main(): \n attach()  \n" + withStatements + statements;
  if (statements.indexOf ( 'testing.' ) > -1) { 
    statements = 'import TestLibrary\n' + statements;
  }
  if (statements.indexOf ( 'time.') > -1) { 
    statements = 'import time\n' + statements;
  }
                          
  var code = Imports + statements
  if (CodeDefinitions != "") {
      code = code + "\n\n\n# Helper Functions\n" + CodeDefinitions
  }
  code = code + "  test.log ( \"Test Complete\")\n\nsource(findFile(\"scripts\", \"abort_catcher.py\"));\n#End main"
  
  return code;
};

function getTypeName (value) {
  var bracket1 = findIndex ( value, '|', 1) + 1;
  var bracket2 = findIndex ( value, '|', 2);	
  var typeName = value.substring(bracket1,bracket2);
  return typeName;
}

function getUniqueName (value) {
  var bracket1 = findIndex ( value, '|', 2) + 1;
  var bracket2 = findIndex ( value, '|', 3);	
  var uniqueName = value.substring(bracket1,bracket2);
  var index = uniqueName.indexOf ( "'");
  if (index != -1) {
	 uniqueName = uniqueName.substring (1,uniqueName.length-1);
  }
  return uniqueName;
}

function getPins (value) {
  var bracket1 = findIndex ( value, '|', 3) + 1;
  var bracket2 = findIndex ( value, '|', 4);	
  var val = value.substring(bracket1,bracket2);
  return val;
}

function findType (value) {
  var startIndex = value.indexOf ( '(' ) + 1;
  var endIndex = value.indexOf ( '|' );
  var library = value.substring ( startIndex,endIndex);
  return library;
}

function insideParen (value) {   
  var startIndex = value.indexOf ( '(' );
  if (startIndex == -1) {
     newValue = value;   
  } else {
    startIndex = startIndex + 1;
    var endIndex = value.indexOf ( ')' );
    var newValue = value.substring (startIndex, endIndex );
    if (newValue.indexOf ( '(' ) > -1) {
      endIndex = value.indexOf ( ')', endIndex + 1);
      newValue = value.substring (startIndex, endIndex );   
    }      
  }
  return newValue;
}

function insideChars (value, char1, char2) {
  var startIndex = value.indexOf (char1) + 1;
  var endIndex = value.indexOf ( char2, startIndex );
  var newValue = value.substring (startIndex, endIndex );
  return newValue;
}

function findIndex ( value, char, which ) {
  var startIndex = -1;
  var index;
  for (i=0; i<which; i++) {
    index = value.indexOf ( char, startIndex + 1);
    startIndex = index;
  }
  return index;
}

Blockly.Python['preconditions'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'testing.preConditions()\n';
  return code;
};

Blockly.Python['startcondition'] = function(block) {
  // var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = 'testing.preCondition()\n';
  return code;
};

Blockly.Python['startvehicle'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'testing.startVehicle()\n';
  return code;
};

Blockly.Python['platform'] = function(block) {
  var platform = block.getFieldValue('selectedPlatform');
  // TODO: Assemble Python into code variable.
  var code = 'import TestLibrary\ntesting=TestLibrary.TestLibrary()\ntesting.selectPlatform (\"' + platform + '\")\n';
  return code;
};

Blockly.Python['setspeed'] = function(block) {
  var speed = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'testing.sim.set_Speed (' + speed + ')\n';
  return code;
};

Blockly.Python['setseatswitch'] = function(block) {
  var onOff = block.getFieldValue('NAME');
  var code = 'testing.setSeatSwitch (False)\n'
  if (onOff == "ON") {
    code = 'testing.setSeatSwitch (True)\n';
  }  
  return code;
};

Blockly.Python['setautotrac'] = function(block) {
  var onOff = block.getFieldValue('NAME');
  var code = 'testing.setAutoTrac (False)\n'
  if (onOff == "ON") {
    code = 'testing.sim.resume_AutoTrac ()\n';
  }  
  return code;
};

Blockly.Python['setwheelangle'] = function(block) {
  var angle = Blockly.Python.valueToCode(block, 'wheelAngle', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'testing.setWheelAngle(' + angle + ')\n';
  return code;
};

Blockly.Python['importusbprofile'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'tester.importUsbProfile()\n';
  return code;
};

Blockly.Python['comment'] = function(block) {
  var comment = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "# " + insideChars (comment, "'", "'") + "\n";
  return code;
};

Blockly.Python['selectguidancetrack'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'tester.selectGuidanceTrack()\n';
  return code;
};

Blockly.Python['guidancetrackspacing'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'testing.guidanceTrackSpacing()\n';
  return code;
};

Blockly.Python['setda'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_danumber = Blockly.Python.valueToCode(block, 'danumber', Blockly.Python.ORDER_ATOMIC);
  var value_davalue = Blockly.Python.valueToCode(block, 'davalue', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'testing.setDA()\n';
  return code;
};

Blockly.Python['starfireconfig'] = function(block) {
  var value_farm = Blockly.Python.valueToCode(block, 'FARM', Blockly.Python.ORDER_ATOMIC);
  var value_field = Blockly.Python.valueToCode(block, 'FIELD', Blockly.Python.ORDER_ATOMIC);
  var value_latitude = Blockly.Python.valueToCode(block, 'LATITUDE', Blockly.Python.ORDER_ATOMIC);
  var value_longitude = Blockly.Python.valueToCode(block, 'LONGITUDE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'testing.starfireConfig()\n';
  return code;
};

Blockly.Python['verifyheaderapp'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_rowspacing = Blockly.Python.valueToCode(block, 'rowSpacing', Blockly.Python.ORDER_ATOMIC);
  var value_numberrows = Blockly.Python.valueToCode(block, 'numberRows', Blockly.Python.ORDER_ATOMIC);
  var value_barlength = Blockly.Python.valueToCode(block, 'barLength', Blockly.Python.ORDER_ATOMIC);
  var value_offsets = Blockly.Python.valueToCode(block, 'offsets', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'testing.verifyHeaderApp()\n';
  return code;
};

Blockly.Python['combinemachineprofile'] = function(block) {
  var value_gpslateraloffset = Blockly.Python.valueToCode(block, 'gpsLateralOffset', Blockly.Python.ORDER_ATOMIC);
  var value_gpsinlineoffset = Blockly.Python.valueToCode(block, 'gpsInlineOffset', Blockly.Python.ORDER_ATOMIC);
  var value_gpsheightoffset = Blockly.Python.valueToCode(block, 'gpsHeightOffset', Blockly.Python.ORDER_ATOMIC);
  var value_headerlateraloffset = Blockly.Python.valueToCode(block, 'headerLateralOffset', Blockly.Python.ORDER_ATOMIC);
  var value_workpoint = Blockly.Python.valueToCode(block, 'workPoint', Blockly.Python.ORDER_ATOMIC);
  var value_connectionoffset = Blockly.Python.valueToCode(block, 'connectionOffset', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'testing.combineMachineProfile()\n';
  return code;
};

Blockly.Python['configuremasslegend'] = function(block) {
  var value_lessthan = Blockly.Python.valueToCode(block, 'lessThan', Blockly.Python.ORDER_ATOMIC);
  var value_greaterthan = Blockly.Python.valueToCode(block, 'greaterThan', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'testing.configureMassLegend()\n';
  return code;
};

Blockly.Python['resetworkmonitor'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'testing.resetWorkMonitor()\n';
  return code;
};

Blockly.Python['disengageparkbrake'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'testing.disengageParkBrake()\n';
  return code;
};

Blockly.Python['setbothseparators'] = function(block) {
  var dropdown_separators = block.getFieldValue('separators');
  // TODO: Assemble Python into code variable.
  var code = 'testing.setBothSeparators()\n';
  return code;
};

Blockly.Python['setheader'] = function(block) {
  var dropdown_header = block.getFieldValue('header');
  // TODO: Assemble Python into code variable.
  var code = 'testing.setHeader()\n';
  return code;
};
Blockly.Python['verifycanlogging'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'testing.verifyCANLogging()\n';
  return code;
};

Blockly.Python['verifyequipmentprofile'] = function(block) {
  var value_barlengths = Blockly.Python.valueToCode(block, 'BARLENGTHS', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'testing.verifyEquipmentProfile()\n';
  return code;
};

Blockly.Python['setcancapture'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'test.setCanCapture()\n';
  return code;
};

Blockly.Python['setguidanceautotrac'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'testing.setGuidanceAutotrac()\n';
  return code;
};

Blockly.Python['setmassflow'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'testing.setMassFlow()\n';
  return code;
};

Blockly.Python['setmoistureflow'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'testing.setMoistureFlow()\n';
  return code;
};
Blockly.Python['wait'] = function(block) {
  var value = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = 'test.log ( \"Wait ' + value + ' seconds.\")\ntime.sleep(' + value + ')\n';
  return code;
};

Blockly.Python['takesnapshot'] = function(block) {
  var dropdown_page = block.getFieldValue('PAGE');
  // TODO: Assemble Python into code variable.
  var code = 'testing.takeSnapShot()\n';
  return code;
};

Blockly.Python['worksetup'] = function(block) {
  var dropdown_crop = block.getFieldValue('CROP');
  var dropdown_variety = block.getFieldValue('VARIETY');
  // TODO: Assemble Python into code variable.
  var code = 'testing.workSetup()\n';
  return code;
};

Blockly.Python['debugdump'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'testing.debugDump()\n';
  return code;
};

Blockly.Python['clientfarmfield'] = function(block) {
  var dropdown_crop = block.getFieldValue('CROP');
  var dropdown_variety = block.getFieldValue('VARIETY');
  var value_client = Blockly.Python.valueToCode(block, 'CLIENT', Blockly.Python.ORDER_ATOMIC);
  var value_farm = Blockly.Python.valueToCode(block, 'FARM', Blockly.Python.ORDER_ATOMIC);
  var value_field = Blockly.Python.valueToCode(block, 'FIELD', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'testing.clientFarmField()\n';
  return code;
};

Blockly.Python['exportalltousb'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'testing.exportAllToUSB()\n';
  return code;
};

Blockly.Python['verifyunitsandmeasurements'] = function(block) {
  var dropdown_units = block.getFieldValue('UNITS');
  var dropdown_measurements = block.getFieldValue('MEASUREMENTS');
  // TODO: Assemble Python into code variable.
  var code = 'testing.verifyUnitsAndMeasurements()\n';
  return code;
};

Blockly.Python['gsixpower'] = function(block) {
  var dropdown_onoff = block.getFieldValue('onOff');
  // TODO: Assemble Python into code variable.
  var code = 'testing.gsixPower()\n';
  return code;
};

Blockly.Python['setcombineheader'] = function(block) {
  var dropdown_header = block.getFieldValue('HEADER');
  // TODO: Assemble Python into code variable.
  var code = 'testing.setCombineHeader()\n';
  return code;
};

Blockly.Python['writeusbtoimport'] = function(block) {
  var dataset = Blockly.Python.valueToCode(block, 'DATASET', Blockly.Python.ORDER_ATOMIC);
  var code = "      log.separator(\"Importing First Data Set\")\n" + 
             "      USBOperationsHelper.clean_usb_stick(atf)\n" + 
             "      filePath = os.path.join(_BuildArtifacts, " + dataset + ")\n" + 
             "      navigate_to_file_manager()\n" + 
             "      USBOperationsHelper.write_USB_to_import(atf, filePath)\n\n";
  return code;
};

Blockly.Python['verifyfilemanagerimportdata'] = function(block) {
  var value_description = Blockly.Python.valueToCode(block, 'DESCRIPTION', Blockly.Python.ORDER_ATOMIC);
  var description = insideChars ( value_description, "'", "'");
  var code = '...\n';
  var code = "      log.section(\"Verify Import Data shows in File Manager.\")\n" + 
             "      log.message(\"GIVEN : USB Stick has been inserted into display and is on import overlay.\")\n" + 
             "      log.message(\"WHEN : The import data loads.\")\n" + 
             "      log.message(\"THEN : The data imported should be shown.\")\n" + 
             "      verify_import_data_is_shown_in_file_manager(atf, \"" + description + "\")\n\n"  

  return code;
};

Blockly.Python['verifytracksimported'] = function(block) {
  var names = Blockly.Python.valueToCode(block, 'tracknames', Blockly.Python.ORDER_ATOMIC);
  var methods = Blockly.Python.valueToCode(block, 'trackmethods', Blockly.Python.ORDER_ATOMIC);
  var fields = Blockly.Python.valueToCode(block, 'trackfields', Blockly.Python.ORDER_ATOMIC);
  
  var code =  "      log.section(\"Verify the tracks were correctly imported\")\n" + 
              "      log.message(\"GIVEN : The user navigates to the guidance app track overlay.\")\n" + 
              "      log.message(\"WHEN : The user selects each of the tracks.\")\n" + 
              "      log.message(\"THEN : The track names, track methods, and field names are correct.\")\n" + 
              "      verify_all_tracks_were_properly_imported(" + names + "," +  methods + "," + fields + ")\n\n"    
  
  return code;
};
/*
trackNames0 = ["A+B", "A+H", "AB Curve", "Curved Track", "Global A+B 4in rs",
               "Global A+H", "Global AB Curve", "Global AdaptiveCurve", "Global AutoB",
               "Global Lat/Lon", "Global Lat/Lon+H", "Lat/Lon", "Lat/Lon+H"]

trackMethods0 = ["A + B", "A + Heading", "AB Curve", "Adaptive Curve", "A + B",
                 "A + Heading", "AB Curve", "Adaptive Curve",  "A + Automatic B",
                 "Lat/Lon", "Lat/Lon + Heading", "Lat/Lon", "Lat/Lon + Heading"]
                 
trackFields0 = ["Jensens Field 3",  "Jensens Field 3",  "Jensens Field 3",
                "Jensens Field 3", "None", "None", "None", "None", "None",
                "None", "None", "Jensens Field 3", "Jensens Field 3"]
                
        log.section("Verify the tracks were correctly imported")
        log.message("GIVEN : The user navigates to the guidance app track overlay.")
        log.message("WHEN : The user selects each of the tracks.")
        log.message("THEN : The track names, track methods, and field names are correct.")
        verify_all_tracks_were_properly_imported(trackNames0, trackMethods0, trackFields0)        
                                
*/

Blockly.Python['verifyimportedtrack'] = function(block) {
  /* 
        log.section("Verify that an imported track works properly.")
        log.message("GIVEN : The user is on the Guidance Track List overlay.")
        log.message("WHEN: The track named 'Lat/Lon+H' is selected.")
        log.message("THEN : The user can AutoTrac on the line for 50 yards")
        verify_can_autotrac_on_imported_track("Lat/Lon+H", hil)
                
  */
  var value_trackname = Blockly.Python.valueToCode(block, 'trackname', Blockly.Python.ORDER_ATOMIC);
  var trackName = insideChars ( value_trackname, "'", "'")
  var code =  "      log.section(\"Verify that an imported track works properly.\")\n" + 
              "      log.message(\"GIVEN : The user is on the Guidance Track List overlay.\")\n" + 
              "      log.message(\"WHEN: The track named 'Lat/Lon+H' is selected.\")\n" + 
              "      log.message(\"THEN : The user can AutoTrac on the line for 50 yards\")\n" + 
              "      verify_can_autotrac_on_imported_track(\"" + trackName + "\", hil)\n\n";
  
  return code;
};

Blockly.Python['filemanagerimport'] = function(block) {
  var code = 'FileManager.importTabButton.click()\n';
  return code;
};

Blockly.Python['filemanagerexport'] = function(block) {
  var code = 'FileManager.exportTabButton.click()\n';
  return code;
};

Blockly.Python['filemanagerdelete'] = function(block) {
  var code = 'FileManager.deleteTabButton.click()\n';
  return code;
};

Blockly.Python['filemanagernavigateto'] = function(block) {
  var code = 'navigate_to_file_manager()\n';
  return code;
};

Blockly.Python['filemanagerimportnext'] = function(block) {
  var code = 'FileManager.importNext.click()\n';
  return code;
};

Blockly.Python['cleardtcs'] = function(block) {
  var code = 'nativeType(\"<Delete>\") # Clear DTCs\n';
  return code;
};

Blockly.Python['screenshot'] = function(block) {
  var code = 'take_screenshot()\n';
  return code;
};

Blockly.Python['navtolanguageandunits'] = function(block) {
  var code = 'navigate_to_language_and_units()\n';
  return code;
};

Blockly.Python['softwaremanager'] = function(block) {
  var code = 'navigate_to_software_manager()\n';
  return code;
}

Blockly.Python['navigatetoautotracguidance'] = function(block) {
  var code = 'navigate_to_autotrac_guidance()\n';
  return code;
};

Blockly.Python['navigatetoworksetup'] = function(block) {
  var code = 'WorkSetupHelper.navigate_to_work_setup()\n';
  return code;
};  


Blockly.Python['testlog'] = function(block) {
  var val = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var value = insideChars ( val, "'", "'");
  var code = 'test.log ( \"' + value + '\")\n';
  return code;
};

Blockly.Python['navigatetomachinemonitor'] = function(block) {
  var code = 'MachineMonitorAppHelper.navigate_to_machine_monitor()\n';
  return code;
};

Blockly.Python['navigatetoequipment'] = function(block) {
  var code = 'navigate_to_equipment_overlay()\n';
  return code;
};

Blockly.Python['verifyautotracpie'] = function(block) {
  var piestate = Blockly.Python.valueToCode(block, 'MINIMUMPIESTATE', Blockly.Python.ORDER_ATOMIC);
  var code = 'verify_pie_state(' + piestate + ')\n';
  return code;
};

Blockly.Python['parkandreset'] = function(block) {
  var code = 'testing.sim.park_and_reset()\n';
  return code;
};

Blockly.Python['createstraighttrack'] = function(block) {
  var code = 'GuidanceHilTrackHelp.create_straight_track_AplusB()\n';
  return code;
};

Blockly.Python['closeguidanceapp'] = function(block) {
  var code = 'GuidanceApp.close()\n';
  return code;
};

Blockly.Python['keyswitch'] = function(block) {
  var selection = block.getFieldValue('keySelection');
  var code = 'testing.sim.tractor.KeySwitch.setPosition(\"' + selection + '\")\n';
  return code;
};

Blockly.Python['warmboot'] = function(block) {
  var code = "\n#Warm boot the gsix\n" + 
             "test.log (\"Warm boot the gsix\")\n" + 
             "testing.sim.park_and_reset()\n" + 
             "testing.sim.tractor.KeySwitch.setPosition(\"Off\")\n" + 
             "test.log (\"Ignition off wait 40 seconds\")\n" + 
             "time.sleep(40)\n" + 
             "testing.sim.tractor.KeySwitch.setPosition(\"Start\")\n" + 
             "time.sleep(2)\n" + 
             "testing.sim.tractor.KeySwitch.setPosition(\"Run\")\n" + 
             "test.log (\"Tractor Running wait 40 seconds\")\n" + 
             "time.sleep(40)\n" + 
             "AutoTracWarning.acceptButton.click()\n";
  return code;
};

Blockly.Python['bothsides'] = function(block) {
  var modification = block.getFieldValue('MODIFYBOTH');
  var val = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  var value = insideChars (val, "'", "'");
  var code = modification + ' ' + value + '\n';
  return code;
};

Blockly.Python['combineliketerms'] = function(block) {
  var code = 'Combine like terms\n';
  return code;
};
