Blockly.Blocks['startvehicle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Start Vehicle");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['platform'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Selected Platform")
        .appendField(new Blockly.FieldDropdown([["Combine", "COMBINE"], ["Tractor", "TRACTOR"], ["Sprayer", "SPRAYER"], ["Aircart", "AIRCART"]]), "selectedPlatform");
    this.appendDummyInput()
        .appendField("TractorConfig")
        .appendField(new Blockly.FieldDropdown([["7R", "7R"], ["8R", "8R"], ["9R", "9R"]]), "tractorSize")
        .appendField(new Blockly.FieldDropdown([["PST", "PST"], ["IVT", "IVT"]]), "tractorTransmission")
        .appendField(new Blockly.FieldDropdown([["ACS", "ACS"], ["NONACS", "NONACS"]]), "tractorSteering")
        .appendField(new Blockly.FieldDropdown([["SG3", "SG3"], ["SG4", "SG4"]]), "tractorVersion");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['testdefinition'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Test Definition");
    this.appendValueInput("SUITENAME")
        .setCheck("String")
        .appendField("Suite Name");
    this.appendStatementInput("STATEMENTS")
        .setCheck(null)
        .appendField("Test Steps");
    this.setColour(30);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setspeed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Speed");
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("mph");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setwheelangle'] = {
  init: function() {
    this.appendValueInput("wheelAngle")
        .setCheck("Number")
        .appendField("Set Wheel Angle");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['preconditions'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Preconditions");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setseatswitch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Seat Switch")
        .appendField(new Blockly.FieldDropdown([["On (Sitting)", "ON"], ["Off", "OFF"]]), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setautotrac'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Auto Trac")
        .appendField(new Blockly.FieldDropdown([["On", "ON"], ["Off", "OFF"]]), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['comment'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("Comment");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['importusbprofile'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Import Usb Profile");
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("filename");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);        
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['clientfarmfield'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Client Farm Field ");
    this.appendDummyInput()
        .appendField("CROP")
        .appendField(new Blockly.FieldDropdown([["Corn", "CORN"], ["Wheat", "WHEAT"]]), "CROP");
    this.appendDummyInput()
        .appendField("Variety")
        .appendField(new Blockly.FieldDropdown([["Corn CT", "CORNCT"]]), "VARIETY");
    this.appendValueInput("CLIENT")
        .setCheck("String")
        .appendField("Client");
    this.appendValueInput("FARM")
        .setCheck("String")
        .appendField("Farm");
    this.appendValueInput("FIELD")
        .setCheck("String")
        .appendField("Field");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['selectguidancetrack'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Select Guidance Track");
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("Guidance Track from list");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['simheaderconfig'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sim Header Config");
    this.appendDummyInput()
        .appendField("Head")
        .appendField(new Blockly.FieldDropdown([["Corn", "CORN"]]), "head");
    this.appendValueInput("rowspacing")
        .setCheck("Number")
        .appendField("Row spacing (inches):");
    this.appendValueInput("numrows")
        .setCheck("Number")
        .appendField("Number of rows:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['guidancetrackspacing'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("Set & Verify Guidance Track Spacing (feet):");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setda'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Diagnostic Address");
    this.appendDummyInput()
        .appendField("Group")
        .appendField(new Blockly.FieldDropdown([["VtV", "VTV"]]), "NAME");
    this.appendValueInput("danumber")
        .setCheck("Number")
        .appendField("Number");
    this.appendValueInput("davalue")
        .setCheck("Number")
        .appendField("Value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);        
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['gsixpower'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("GSix Power")
        .appendField(new Blockly.FieldDropdown([["On", "ON"], ["Off", "OFF"]]), "onOff");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['starfireconfig'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Starfire Configuration");
    this.appendValueInput("FARM")
        .setCheck("String")
        .appendField("Farm: ");
    this.appendValueInput("FIELD")
        .setCheck("String")
        .appendField("Field: ");
    this.appendValueInput("LATITUDE")
        .setCheck("Number")
        .appendField("Latitude: ");
    this.appendValueInput("LONGITUDE")
        .setCheck("Number")
        .appendField("Longitude: ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['verifyheaderapp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Verify Header App Values");
    this.appendDummyInput()
        .appendField("Head ")
        .appendField(new Blockly.FieldDropdown([["Corn", "CORN"]]), "NAME");
    this.appendValueInput("rowSpacing")
        .setCheck("Number")
        .appendField("Row spacing (inches):");
    this.appendValueInput("numberRows")
        .setCheck("Number")
        .appendField("Number of rows:");
    this.appendValueInput("barLength")
        .setCheck("Number")
        .appendField("Length of bar");
    this.appendValueInput("offsets")
        .setCheck("Number")
        .appendField("Offset");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['combinemachineprofile'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Combine Machine Profile");
    this.appendValueInput("gpsLateralOffset")
        .setCheck("Number")
        .appendField("GPS Lateral Offset (inches)");
    this.appendValueInput("gpsInlineOffset")
        .setCheck("Number")
        .appendField("GPS Inline Offset (inches)");
    this.appendValueInput("gpsHeightOffset")
        .setCheck("Number")
        .appendField("GPS Height (inches)");
    this.appendValueInput("headerLateralOffset")
        .setCheck("Number")
        .appendField("Header Lateral Offset (inches)");
    this.appendValueInput("workPoint")
        .setCheck("Number")
        .appendField("Work Point (feet):");
    this.appendValueInput("connectionOffset")
        .setCheck("Number")
        .appendField("Connection Offset (feet):");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['configuremasslegend'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Configure Mass Legend");
    this.appendValueInput("lessThan")
        .setCheck("Number")
        .appendField("Less Than (bu/acre)");
    this.appendValueInput("greaterThan")
        .setCheck("Number")
        .appendField("Greater Than (bu/acre)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['resetworkmonitor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Reset Work Monitor Counters A & B");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['disengageparkbrake'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Disengage Park Brake");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setbothseparators'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Both Separators")
        .appendField(new Blockly.FieldDropdown([["On", "ON"], ["Off", "OFF"]]), "separators");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setheader'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Header")
        .appendField(new Blockly.FieldDropdown([["Up", "UP"], ["Down", "DOWN"]]), "header");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['verifyequipmentprofile'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Verify Equipment Profile");
    this.appendValueInput("BARLENGTHS")
        .setCheck("Number")
        .appendField("Header Bar Lengths");
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("Header Offsets");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['verifycanlogging'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Verify CAN logging:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setcancapture'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set CAN Capture")
        .appendField(new Blockly.FieldDropdown([["On", "ON"], ["Off", "OFF"]]), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setguidanceautotrac'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Autotrac on Guidance Page")
        .appendField(new Blockly.FieldDropdown([["On", "ON"], ["Off", "OFF"]]), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setmassflow'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Mass Flow")
        .appendField(new Blockly.FieldDropdown([["Constant", "CONSTANT"], ["Random", "RANDOM"]]), "NAME");
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("Set Mass Percent:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setmoistureflow'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Moisture Flow")
        .appendField(new Blockly.FieldDropdown([["Constant", "CONSTANT"], ["Random", "RANDOM"]]), "NAME");
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("Set Moisture Percent:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['wait'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("Wait (Seconds):");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['takesnapshot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Take Snapshot of page:")
        .appendField(new Blockly.FieldDropdown([["Work Monitor", "WORKMONITOR"]]), "PAGE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('Take snap shot');
    this.setHelpUrl('help/takeSnapShot.html');
  }
};

Blockly.Blocks['worksetup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Work Setup:")
        .appendField("Crop Type:");
    this.appendDummyInput()
        .appendField("Crop:")
        .appendField(new Blockly.FieldDropdown([["Corn", "CORN"]]), "CROP");
    this.appendDummyInput()
        .appendField("Variety:")
        .appendField(new Blockly.FieldDropdown([["Corn VT", "CORNVT"]]), "VARIETY");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['debugdump'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("GSix Debug Dump");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['exportalltousb'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Export all data to usb");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['verifyunitsandmeasurements'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Verify Units and Measurements");
    this.appendDummyInput()
        .appendField("Units")
        .appendField(new Blockly.FieldDropdown([["US", "US"]]), "UNITS");
    this.appendDummyInput()
        .appendField("Measurements")
        .appendField(new Blockly.FieldDropdown([["US", "US"]]), "MEASUREMENTS");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setcombineheader'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Header")
        .appendField(new Blockly.FieldDropdown([["Corn Head", "CORN"], ["No Header", "NOHEADER"]]), "HEADER");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['writeusbtoimport'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Write Usb To Import");
    this.appendValueInput("DATASET")
        .setCheck("String")
        .appendField("Data Set");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(285);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['verifyfilemanagerimportdata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Verify File Manager import data");
    this.appendValueInput("DESCRIPTION")
        .setCheck("String")
        .appendField("Description");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['verifytracksimported'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Verify Imported Tracks");
    this.appendValueInput("tracknames")
        .setCheck(null)
        .appendField("Track Names");
    this.appendValueInput("trackmethods")
        .setCheck(null)
        .appendField("Track Methods");
    this.appendValueInput("trackfields")
        .setCheck(null)
        .appendField("Track Fields");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['verifyimportedtrack'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Verify an imported track works properly");
    this.appendValueInput("trackname")
        .setCheck("String")
        .appendField("Imported Track Name");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['filemanagerimport'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("File Manager");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/fileManagerImport.jpg", 180, 29, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['filemanagerexport'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("File Manager");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/fileManagerExport.jpg", 185, 32, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['filemanagerdelete'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("File Manager");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/fileManagerDelete.jpg", 174, 35, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['filemanagernavigateto'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Navigate To");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/fileManager.jpg", 201, 57, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['filemanagerimportnext'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("File Manager");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/fileManagerImportNext.jpg", 209, 87, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['cleardtcs'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Clear");
    this.appendDummyInput()
        .appendField("Diagnostic Trouble Codes");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['screenshot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ScreenShot");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/screenshot.jpg", 59, 49, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['navtolanguageandunits'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Navigate to");
    this.appendDummyInput()
        .appendField("Language And Units");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['softwaremanager'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Navigate To");
    this.appendDummyInput()
        .appendField("Software Manager");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['navigatetoautotracguidance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Navigate To");
    this.appendDummyInput()
        .appendField("Autotrac Guidance");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['navigatetoworksetup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Navigate To");
    this.appendDummyInput()
        .appendField("Work Setup");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['testlog'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("test.log");
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("Message:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['navigatetomachinemonitor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Navigate To");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/machineMonitor.jpg", 233, 53, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['navigatetoequipment'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Navigate To");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/equipment.jpg", 127, 48, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['verifyautotracpie'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Verify Pie State");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/verifyPi.jpg", 150, 160, "*"));        
    this.appendValueInput("MINIMUMPIESTATE")
        .setCheck("Number")
        .appendField("Minimum Pie State");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['parkandreset'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Park And Reset");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['createstraighttrack'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create Straight Track");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/straightTrack.jpg", 124, 125, "*"));        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['keyswitch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Key Selection")
        .appendField(new Blockly.FieldDropdown([["Off", "Off"], ["Start", "Start"], ["Run", "Run"]]), "keySelection");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['closeguidanceapp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Close Guidance App");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['warmboot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Warm Boot");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['equation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Equation");
    this.appendValueInput("GIVEN")
        .setCheck("String")
        .appendField("Given");
    this.appendStatementInput("OPERATIONS")
        .setCheck(null)
        .appendField("Test Steps");
    this.setColour(30);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['bothsides'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Modify Both Sides")
        .appendField(new Blockly.FieldDropdown([["Add", "Add"], ["Subtract", "Subtract"], ["Multiply", "Multiply"], ["Divide", "Divide"]]), "MODIFYBOTH");
    this.appendValueInput("VALUE")
        .setCheck("String")
        .appendField("Value to Use");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['combineliketerms'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Combine Like Terms");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
