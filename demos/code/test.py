###################################################################################
# Copyright (c) Deere & Company as an unpublished work
# THIS SOFTWARE AND/OR MATERIAL IS THE PROPERTY OF DEERE & COMPANY. ALL USE,
# DISCLOSURE, AND/OR REPRODUCTION NOT SPECIFICALLY AUTHORIZED BY DEERE &
# COMPANY IS PROHIBITED.
###################################################################################
source(findFile("scripts", "all_purpose.py"))
source(findFile("scripts", "filter_sort_track_list.py"))
source(findFile("scripts", "Guidance.py"))
source(findFile("scripts", "overlay_filemanager.py"))
source(findFile("scripts", "file_manager_helper.py"))
source(findFile("scripts", "usb_operations_helper.py"))
source(findFile("scripts", "guidance_hil_pie_helpers.py"))
source(findFile("scripts", "fields_app.py"))
source(findFile("scripts", "table_view_helper.py"))
source(findFile("scripts", "guidance_hil_track_helpers.py"))
source(findFile("scripts", "deterministic_starfire.py"))
source(findFile("scripts", "overlay_misc.py"))

import os.path
import glob


trackNames0 = ["A+B", "A+H", "AB Curve", "Curved Track", "Global A+B 4in rs",
               "Global A+H", "Global AB Curve", "Global AdaptiveCurve", "Global AutoB",
               "Global Lat/Lon", "Global Lat/Lon+H", "Lat/Lon", "Lat/Lon+H"]

trackMethods0 = ["A + B", "A + Heading", "AB Curve", "Adaptive Curve", "A + B",
                 "A + Heading", "AB Curve", "Adaptive Curve",  "A + Automatic B",
                 "Lat/Lon", "Lat/Lon + Heading", "Lat/Lon", "Lat/Lon + Heading"]

trackFields0 = ["Jensens Field 3",  "Jensens Field 3",  "Jensens Field 3",
                "Jensens Field 3", "None", "None", "None", "None", "None",
                "None", "None", "Jensens Field 3", "Jensens Field 3"]

trackNames1 = [ "A+B Rename", "A+H", "AB Curve","Curved Track",
               "Global A+B 4in rs", "Global A+H", "Global AB Curve", "Global AdaptiveCurve",
                "Global AutoB", "Global Lat/Lon", "Global Lat/Lon+H", "Lat/Lon", "TR1"]

            
trackMethods1 = ["A + B", "A + Heading", "AB Curve", "Adaptive Curve",
                 "A + B", "A + Heading", "AB Curve", "Adaptive Curve",  "A + Automatic B",
                 "Lat/Lon", "Lat/Lon + Heading", "Lat/Lon", "A + B"]
        

trackFields1 = ["None", "New Field", "Jensens Field 3", "Jensens Field 3",
                "Jensens Field 3", "None", "None", "None", "None", "None",
                "None", "Jensens Field 3", "FI2"]

HOME, _BuildArtifacts, GSX_DIR = initial_setup()
dataSet0 = "ImportScenario1"
dataSet1 = "ImportScenario2"
tracksLoaded0 = "13 track(s)"
tracksLoaded1 = "6 track(s)"

def main():
    import TestLibrary

    with ATFBoard() as atf, StarFireHIL() as DMStarfire, TestLibrary.TestLibrary() as hil:
        launch()
        AutoTracWarning.accept_roadway_warning()
        
        nativeType("<Delete>")
        log.separator("Importing First Data Set")
        USBOperationsHelper.clean_usb_stick(atf)
        filePath = os.path.join(_BuildArtifacts, 'ImportScenario1')
        navigate_to_file_manager()
        USBOperationsHelper.write_USB_to_import(atf, filePath)

        log.section("Verify Import Data shows in File Manager.")
        log.message("GIVEN : USB Stick has been inserted into display and is on import overlay.")
        log.message("WHEN : The import data loads.")
        log.message("THEN : The data imported should be shown.")
        verify_import_data_is_shown_in_file_manager(atf, "13 track(s)")

        log.section("Verify the tracks were correctly imported")
        log.message("GIVEN : The user navigates to the guidance app track overlay.")
        log.message("WHEN : The user selects each of the tracks.")
        log.message("THEN : The track names, track methods, and field names are correct.")
        verify_all_tracks_were_properly_imported(TrackNames0,trackMethods0,TrackFields0)

        log.section("Verify that an imported track works properly.")
        log.message("GIVEN : The user is on the Guidance Track List overlay.")
        log.message("WHEN: The track named 'Lat/Lon+H' is selected.")
        log.message("THEN : The user can AutoTrac on the line for 50 yards")
        verify_can_autotrac_on_imported_track("Lat/Lon+H", hil)


# Helper Functions
def verify_import_data_is_shown_in_file_manager(atf, tracksLoaded):
  myverify_imported_data_shown_in_file_manager(tracksLoaded, 0)
  USBOperationsHelper.clean_usb_stick(atf)
#End verify_import_data_is_shown_in_file_manager

def verify_all_tracks_were_properly_imported(trackNames, trackMethods, trackFields):
    sort_track_list_in_AtoZ_order()
    for index in range(0, len(trackNames)):
        TrackList.clickItem(trackNames[index])
        Expect.are_equal(trackNames[index], TrackList.get_track_name(index), "Track %d should be %s." % ((index + 1), trackNames[index]))
        _verify_track_preview_information(trackMethods[index], trackFields[index])
#End verify_all_tracks_were_properly_imported

def _verify_track_preview_information(methodName, fieldName):
    guidanceLineMethodTrackPreview = str(TrackList.trackPreviewContent.get_property("methodData"))
    fieldNameTrackPreview = str(TrackList.trackPreviewContent.get_property("fieldData"))
    Expect.are_equal(methodName,
                     guidanceLineMethodTrackPreview,
                     "Track Preview should show %s as Method used to create guidance track." % methodName)
    Expect.are_equal(fieldName,
                     fieldNameTrackPreview,
                     "Track Preview should show %s as Field the guidance track it saved to." % fieldName)
#End _verify_track_preview_information

def verify_can_autotrac_on_imported_track(trackName, hil):
    TrackList.clickItem(trackName)
    TrackList.doneButton.click()
    Expect.is_true(GuidanceApp.wait_for_top_visible_state(), "Guidance App should be on top.")
    GuidanceApp.AutoTrac.set_steer_on_off()
    _start_to_autotrac(hil)
#End verify_can_autotrac_on_imported_track

def _start_to_autotrac(hil):
    hil.sim.set_seat_switch()
    hil.sim.set_Speed(8)
    GuidanceApp.Guidance.shiftCenterButton.click()
    HilPieStateHelper.verify_four_pie(hil)
    HilPieStateHelper.verify_autotrac_for_duration(hil, 30)
    hil.sim.park_and_reset()
    GuidanceApp.AutoTrac.steerOnOff.click()
    GuidanceApp.close()
#End _start_to_autotrac

source(findFile("scripts", "abort_catcher.py"));
