var nuhuh = 0;
var steal = true;
var arrowCode = "";
var invert = false;
var hammer = false;
var numberCode = "";
var click = 0;
var question = false;
var trophy = 0;
var nuhuhOn = false;
var timeForWrongCodeButton = 0;
var deathButtonColor = randomNumber(1, 2);
var tea = "Tea";
var corI = 0;
//The Function That Runs The Ending
function end(ending) {
  nuhuh = 0;
  corI -= 1;
  arrowCode = "";
  setScreen("endingScreen");
  showElement("glass");
  hideElement("brokenGlass");
  if (ending != ("You won! (Try other endings!)" || ("You won! (Did you not listen to me?)" || ("You won! (STOP GETTING THIS ENDING.)" || "You won! (YOU WILL BE ANNIHILATED IF YOU DO IT AGAIN.)")))) {
    trophy = 0;
  }
  setTimeout(function() {
    showElement("endingLabel");
  }, 1000);
  setTimeout(function() {
    setText("theActualEnding", ending);
  }, 2000);
  setTimeout(function() {
    showElement("restartButtonFromEndingScreenToPreScreen");
  }, 3000);
}
//💧︎❄︎⚐︎🏱︎💧︎ ❄︎☟︎✋︎💧︎ ☟︎⚐︎🏱︎☜︎☹︎☜︎💧︎💧︎ 🏱︎✌︎❄︎☟︎ ⚐︎☞︎ 📬︎📫︎📬︎📬︎ 📫︎📫︎📫︎ 📬︎📬︎📬︎ 📫︎ 📭︎ 📬︎📫︎ 📬︎📫︎📬︎ 📬︎ 📬︎📫︎
function corruptEye() {
  nuhuh = 0;
  var countdown = 100;
  corI -= 1;
  setScreen("blackScreen");
  setText("itIsText", "SO I SEE");
  setTimeout(function() {
    setText("itIsText", "SO I SEE.");
  }, 1000);
  setTimeout(function() {
    setText("itIsText", "SO I SEE..");
  }, 2000);
  setTimeout(function() {
    setText("itIsText", "SO I SEE...");
  }, 3000);
  setTimeout(function() {
    setText("itIsText", "IT SEEMS");
  }, 5000);
  setTimeout(function() {
    setText("itIsText", "IT SEEMS.");
  }, 6000);
  setTimeout(function() {
    setText("itIsText", "IT SEEMS..");
  }, 7000);
  setTimeout(function() {
    setText("itIsText", "IT SEEMS...");
  }, 8000);
  setTimeout(function() {
    setText("itIsText", "YOU HAVE FAILED");
  }, 10000);
  setTimeout(function() {
    setText("itIsText", "YOU HAVE FAILED.");
  }, 11000);
  setTimeout(function() {
    setText("itIsText", "YOU HAVE FAILED..");
  }, 12000);
  setTimeout(function() {
    setText("itIsText", "YOU HAVE FAILED...");
  }, 13000);
  setTimeout(function() {
    setText("itIsText", "GOODBYE");
  }, 15000);
  setTimeout(function() {
    timedLoop(50, function() {
      setText("itIsText", "❄︎☟︎✋︎💧︎ 🕈︎⚐︎☼︎☹︎👎︎ 🕈︎✋︎☹︎☹︎ 👌︎☜︎ 👎︎☜︎☹︎☜︎❄︎☜︎👎︎ ☠︎⚐︎🕈︎");
      setTimeout(function() {
        setText("itIsText", "❄︎☟︎✋︎💧︎ ☼︎☜︎✌︎☹︎💣︎ ☟︎✌︎💧︎ ☠︎⚐︎🕈︎ 👌︎☜︎☜︎☠︎ ☞︎⚐︎☼︎💧︎✌︎😐︎☜︎☠︎ ");
      }, 50);
      setTimeout(function() {
        setText("itIsText", "❄︎☟︎☜︎ ☠︎⚐︎🕈︎ 👍︎⚐︎☼︎☼︎🕆︎🏱︎❄︎☜︎👎︎ 💧︎☟︎✌︎☹︎☹︎ ☠︎⚐︎🕈︎ 👌︎☜︎ ☝︎⚐︎☠︎☜︎ ☠︎⚐︎🕈︎");
      }, 100);
      setTimeout(function() {
        setText("itIsText", "●︎□︎●︎ ♓︎🕯︎●︎●︎ 🙰◆︎⬧︎⧫︎ ●︎♏︎♋︎❖︎♏︎ ⧫︎♒︎♓︎⬧︎ ♓︎■︎ ♒︎♏︎❒︎♏︎ ♌︎♏︎♍︎♋︎◆︎⬧︎♏︎ ⬥︎♒︎⍓︎ ■︎□︎⧫︎ ✂︎☝︎✌︎💧︎❄︎☜︎📫︎");
      }, 150);
      setTimeout(function() {
        countdown -= 1;
      }, 200);
      if (countdown == 0) {
        stopTimedLoop();
        countdown = 100;
        showElement("glass");
        hideElement("brokenGlass");
        trophy = 0;
        setScreen("preScreen");
      }
    });
  }, 15500);
}
setScreen("preScreen");
onEvent("startButton", "click", function( ) {
  if (question == true) {
    setScreen("glitchScreen");
    playSound("assets/category_digital/error_2.mp3", false);
  } else if ((question == false)) {
    if (invert == true) {
      setScreen("invertStartScreened");
      playSound("assets/category_alerts/playful_game_error_sound_4.mp3", false);
    } else if ((invert == false)) {
      setScreen("startScreened");
      playSound("assets/category_alerts/vibrant_game_correct_answer_hit.mp3", false);
    }
  }
});
onEvent("trophyForYouWon", "click", function( ) {
  if (trophy == 4) {
    setScreen("screenOfDeath");
    playSound("assets/category_explosion/retro_game_classic_explosion_2.mp3", false);
    setTimeout(function() {
      end("Death (RESETTING TROPHY)");
    }, 3000);
    trophy = 0;
  } else if ((trophy == 0)) {
    playSound("assets/category_achievements/melodic_win_10.mp3", false);
    end("You won! (Try other endings!)");
    trophy = 1;
  } else if ((trophy == 1)) {
    playSound("assets/category_achievements/melodic_win_10.mp3", false);
    end("You won! (Did you not listen to me?)");
    trophy = 2;
  } else if ((trophy == 2)) {
    playSound("assets/category_achievements/melodic_win_10.mp3", false);
    end("You won! (STOP GETTING THIS ENDING.)");
    trophy = 3;
  } else if ((trophy == 3)) {
    playSound("assets/category_achievements/melodic_win_10.mp3", false);
    end("You won! (YOU WILL BE ANNIHILATED IF YOU DO IT AGAIN.)");
    trophy = 4;
  }
});
onEvent("secretButton", "click", function( ) {
  playSound("assets/category_accent/puzzle_game_accent_a_02.mp3", false);
  setScreen("secretScreenEz");
});
onEvent("Barrier", "click", function( ) {
  playSound("assets/category_board_games/dice_shuffle.mp3", false);
  end("Barrier");
});
onEvent("restartButtonFromEndingScreenToPreScreen", "click", function( ) {
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setScreen("preScreen");
  hideElement("endingLabel");
  hideElement("restartButtonFromEndingScreenToPreScreen");
  setText("theActualEnding", "");
});
onEvent("arrowToGoRight", "click", function( ) {
  playSound("assets/category_projectile/game_notification_particle_ping.mp3", false);
  setScreen("nextScreenOfTea");
});
onEvent("Tea", "click", function( ) {
  playSound("assets/category_music/8bit_game_over_2.mp3", false);
  end("Tea");
});
onEvent("glitchImage", "click", function( ) {
  playSound("assets/category_retro/retro_game_echo_error_2.mp3", false);
  showElement("hackedLabel");
  if ((arrowCode == "DUDD") && (trophy == 4)) {
    showElement("niceHackedArrows");
    hideElement("image1");
    hideElement("label1");
    setText("arrowsActivationText", "The green arrow has been fulfilled!");
  }
  setTimeout(function() {
    hideElement("hackedLabel");
    onEvent("secretImageForOrangeEnding", "click", function( ) {
      if ((arrowCode == "DUDD") && (trophy == 4)) {
        hideElement("niceHackedArrows");
        showElement("image1");
        showElement("label1");
        setText("arrowsActivationText", "text");
      }
      playSound("assets/category_swing/swing_1.mp3", false);
      setScreen("orangeScreen");
    });
    onEvent("niceHackedArrows", "click", function( ) {
      playSound("assets/category_achievements/melodic_win_6.mp3", false);
      end("Green Arrow");
      hideElement("niceHackedArrows");
      showElement("image1");
      showElement("label1");
      setText("arrowsActivationText", "text");
    });
    setScreen("hackedScreen");
  }, 1000);
});
onEvent("OrangeButton", "click", function( ) {
  playSound("assets/category_objects/drop_2.mp3", false);
  end("Orange");
});
onEvent("arrowPanel", "click", function( ) {
  playSound("assets/category_transition/dark_transition_whoosh_or_selection.mp3", false);
  setScreen("arrowKeypadScreen");
});
onEvent("keyDown", "click", function( ) {
  if (arrowCode.length < 4) {
    playSound("assets/category_accent/puzzle_game_accent_a_02.mp3", false);
    arrowCode += "D";
  } else {
    playSound("assets/default.mp3", false);
    end("Bad Arrowing");
  }
});
onEvent("keyUp", "click", function( ) {
  if (arrowCode.length < 4) {
    playSound("assets/category_accent/puzzle_game_accent_a_02.mp3", false);
    arrowCode += "U";
  } else {
    arrowCode += "U";
    if (arrowCode == "DUDDU") {
      end("Arrow Master");
    } else {
      end("Bad Arrowing");
    }
  }
});
onEvent("backButtonFromArrowKeypadToStartScreened", "click", function( ) {
  playSound("assets/category_whoosh/alien_ship_flyby_whoosh_7.mp3", false);
  setScreen("startScreened");
});
onEvent("backToStartScreenedArrow", "click", function( ) {
  playSound("assets/category_app/app_button_5.mp3", false);
  setScreen("startScreened");
});
onEvent("invertSettingSlider", "change", function( ) {
  if (invert == false) {
    playSound("assets/category_retro/retro_game_error_4.mp3", false);
    invert = true;
  } else if ((invert == true)) {
    playSound("assets/category_explosion/melodic_loss_6.mp3", false);
    invert = false;
  }
});
onEvent("settingsImage", "click", function( ) {
  playSound("assets/category_transition/ball_throw_bowl_1.mp3", false);
  setScreen("settingsScreen");
});
onEvent("returnFromSettings", "click", function( ) {
  playSound("assets/category_transition/dark_transition_whoosh_or_selection.mp3", false);
  setScreen("preScreen");
});
onEvent("invertTrophy", "click", function( ) {
  playSound("assets/category_digital/failure.mp3", false);
  end("You... Won?");
});
onEvent("atomicTransporter", "click", function( ) {
  playSound("assets/category_pop/puzzle_game_bonus_bubble_large_01.mp3", false);
  open("https://physics.mit.edu/research-areas/atomic-physics/");
  setScreen("AtomicScreenOfScienceAndCircles");
});
onEvent("theCircleOfHope", "click", function( ) {
  playSound("assets/category_male_voiceover/round_male.mp3", false);
  end("Circle");
});
onEvent("hashtagTeleporter", "click", function( ) {
  playSound("assets/category_transition/teleport_in.mp3", false);
  setScreen("Bob'sScreen");
});
onEvent("Bob'sLabel", "click", function( ) {
  playSound("assets/category_app/app_interface_button_2.mp3", false);
  hideElement("Bob'sLabel");
  showElement("Bob'sChatbox");
  setText("Bob'sChat", "Hello");
  setTimeout(function() {
    showElement("Bob'sFirstButton");
    showElement("Bob'sSecondButton");
    setText("Bob'sFirstButton", "Howdy!");
    setText("Bob'sSecondButton", "I hate you");
  }, 2000);
});
onEvent("returnButton", "click", function( ) {
  playSound("assets/category_hits/8bit_splat.mp3", false);
  setScreen("startScreened");
});
onEvent("Bob'sFirstButton", "click", function( ) {
  playSound("assets/default.mp3", false);
  hideElement("Bob'sFirstButton");
  hideElement("Bob'sSecondButton");
  setText("Bob'sChat", "Cool");
  setTimeout(function() {
    playSound("assets/default.mp3", false);
    setText("Bob'sChat", "Have this hammer");
    steal = false;
  }, 2000);
});
onEvent("Bob'sHammer", "click", function( ) {
  if (steal == true) {
    playSound("assets/category_collect/vibrant_game_tone_bling_1.mp3", false);
    hideElement("Bob'sFirstButton");
    hideElement("Bob'sSecondButton");
    hideElement("Bob'sHammer");
    hideElement("Bob'sLabel");
    showElement("Bob'sChatbox");
    setText("Bob'sChat", "You have stolen");
    setTimeout(function() {
    playSound("assets/category_pop/puzzle_game_bonus_bubble_large_01.mp3", false);
    setText("Bob'sChat", "Now you shall pay");
    }, 2000);
    setTimeout(function() {
      playSound("assets/category_explosion/melodic_loss_6.mp3", false);
      hideElement("Bob'sChatbox");
      showElement("Bob'sHammer");
      showElement("Bob'sLabel");
      setText("Bob'sChat", "");
      setScreen("bankingInformationScreen");
    }, 4000);
    setTimeout(function() {
      playSound("assets/category_pop/puzzle_game_downgrade_bubble_04.mp3", false);
      end("Debt");
    }, 8000);
  } else if ((steal == false)) {
    playSound("assets/category_projectile/retro_game_melodic_pickup_3.mp3", false);
    hammer = true;
    steal = true;
    hideElement("Bob'sHammer");
    showElement("Bob'sHammerAcquiredLabel");
    setTimeout(function() {
      showElement("Bob'sHammer");
      showElement("Bob'sLabel");
      hideElement("Bob'sChatbox");
      hideElement("Bob'sHammerAcquiredLabel");
      setText("Bob'sChat", "");
      setScreen("startScreened");
    }, 1000);
  } else {
    
  }
});
onEvent("Bob'sSecondButton", "click", function( ) {
  playSound("assets/category_explosion/puzzle_game_break_magic_05.mp3", false);
  hideElement("Bob'sFirstButton");
  hideElement("Bob'sSecondButton");
  setText("Bob'sChat", "...");
  setTimeout(function() {
    playSound("assets/category_explosion/puzzle_game_break_magic_02.mp3", false);
    setText("Bob'sChat", ">:(");
  }, 2000);
  setTimeout(function() {
    playSound("assets/category_explosion/puzzle_game_break_magic_04.mp3", false);
    setScreen("[UNNAMED](screenItIs)");
    showElement("Bob'sLabel");
    hideElement("Bob'sChatbox");
    setText("Bob'sChat", "");
  }, 4000);
});
onEvent("glass", "click", function( ) {
  if (hammer == true) {
    playSound("assets/category_explosion/puzzle_game_break_magic_03.mp3", false);
    hideElement("glass");
    showElement("brokenGlass");
    hammer = false;
  } else {
    
  }
});
onEvent("brokenGlass", "click", function( ) {
  playSound("assets/category_board_games/break.mp3", false);
  setScreen("screenOfNumber");
  hideElement("brokenGlass");
  showElement("glass");
  hammer = false;
});
onEvent("12178-enter-pls", "input", function( ) {
  click = randomNumber(1, 2);
  if (click == 1) {
    playSound("assets/category_tap/puzzle_game_organic_wood_block_tone_tap_3_app_click.mp3", false);
  } else if ((click == 2)) {
    playSound("assets/category_tap/puzzle_game_organic_wood_block_tone_tap_3_app_click.mp3", false);
  } else {
    
  }
  numberCode = getText("12178-enter-pls");
});
onEvent("submitNumberCode!!!!!", "click", function( ) {
  if (numberCode == "12178") {
    playSpeech("One, Two, One, Seven, Eight.", "female", "English");
    setText("12178-enter-pls", "");
    end("Numerals");
  } else if ((numberCode != "12178")) {
    playSound("assets/category_human/character_kimberly_game_over_1.mp3", false);
    setText("12178-enter-pls", "");
    end("Wrong Code");
  } else {
    
  }
});
onEvent("discoloredSettingsPart", "click", function( ) {
  playSound("assets/category_hits/retro_game_weapon_-_gauntlet_punch_3.mp3", false);
  setScreen("glitchSettingScreen");
});
onEvent("backFromGlitchSettingsScreen", "click", function( ) {
  playSound("assets/category_swish/motion_whoosh_8v2.mp3", false);
  setScreen("settingsScreen");
});
onEvent("??????Slider", "change", function( ) {
  if (question == false) {
    playSound("assets/category_bell/hollow_bell_notification.mp3", false);
    question = true;
  } else if ((question == true)) {
    playSound("assets/category_bell/hollow_bell_notification.mp3", false);
    question = false;
  }
});
onEvent("glitchTrophy", "click", function( ) {
  playSound("assets/category_explosion/melodic_loss_1.mp3", false);
  end("Glitched");
});
onEvent("exclamationPoint", "click", function( ) {
  setScreen("exclamationScreen");
});
onEvent("mailboxButton", "click", function( ) {
  setScreen("mailboxScreen");
});
onEvent("mailboxBack", "click", function( ) {
  setScreen("[UNNAMED](screenItIs)");
});
onEvent("exclamationInput", "input", function( ) {
  if (getText("exclamationInput").toLowerCase().includes("gaster") || getText("exclamationInput").toLowerCase().includes("wd") || getText("exclamationInput").toLowerCase().includes("w.d.") || getText("exclamationInput").toLowerCase().includes("wingding")) {
    showElement("glass");
    hideElement("brokenGlass");
    setText("exclamationInput", "");
    trophy = 0;
    setScreen("preScreen");
  }
});
onEvent("exclamationSubmit", "click", function( ) {
  if (getText("exclamationInput") == "I PRAISE" || getText("exclamationInput") == "IPRAISE") {
    corI = 2;
    setText("exclamationInput", "PRAISETHEEYEPRAISETHEEYEPRAISETHEEYEPRAISETHEEYEPRAISETHEEYEPRAISETHEEYEPRAISETHEEYEPRAISETHEEYEPRAISETHEEYEPRAISETHEEYEPRAISETHEEYEPRAISETHEEYEPRAISETHEEYEPRAISETHEEYEPRAISETHEEYEPRAISETHEEYEPRAISETHEEYEPRAISETHEEYEPRAISETHEEYEPRAISETHEEYEPRAISETHEEYEPRAISETHEEYEPRAISETHEEYE");
    showElement("exclamationEye");
    playSound("assets/category_explosion/retro_game_classic_explosion_10.mp3", false);
    setTimeout(function() {
      setText("exclamationInput", "");
      hideElement("exclamationEye");
      end("THE EYE");
    }, 1000);
  } else {
    setText("exclamationInput", "");
    corruptEye();
  }
});
onEvent("endingDifficultiesButton", "click", function( ) {
  playSound("assets/category_retro/retro_game_bit_coin_5.mp3", false);
  setScreen("endingDifficultiesScreen");
});
onEvent("backFromEndingDifficultiesScreen", "click", function( ) {
  playSound("assets/category_retro/retro_game_bit_coin_2.mp3", false);
  setScreen("preScreen");
});
onEvent("theEndingTextHitbox", "click", function( ) {
  nuhuh += 1;
  if (nuhuhOn == false) {
    nuhuhOn = true;
    playSound("assets/category_music/mocking_tonal_fail_1.mp3", false);
    showElement("nuhuh");
    setTimeout(function() {
      hideElement("nuhuh");
    }, 2000);
    setTimeout(function() {
      nuhuhOn = false;
    }, 2500);
  }
});
onEvent("endingsButton", "click", function( ) {
  playSound("assets/category_digital/jump_7.mp3", false);
  setScreen("endingsShowcaseScreen1");
});
onEvent("backFromEndingShowcaseScreens", "click", function( ) {
  playSound("assets/category_swing/knife_swing_2.mp3", false);
  setScreen("preScreen");
});
onEvent("nextPageInEndingShowcase1ToEndingShowcase2", "click", function( ) {
  playSound("assets/category_digital/hop.mp3", false);
  setScreen("endingsShowcaseScreen2");
});
onEvent("previousPageButtonGoingToEndingShowcaseScreen1", "click", function( ) {
  playSound("assets/category_digital/hop.mp3", false);
  setScreen("endingsShowcaseScreen1");
});
onEvent("nextPageInEndingShowcase1ToEndingShowcase2", "click", function( ) {
  timeForWrongCodeButton = 0;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code|");
  }, timeForWrongCodeButton + 1000);
  timeForWrongCodeButton = timeForWrongCodeButton + 2000;
  setTimeout(function() {
    setText("wrongCodeButton", "Wrong Code");
  }, timeForWrongCodeButton);
});
onEvent("numeralsButton", "mouseover", function( ) {
  setText("numeralsButton", "0123456789");
});
onEvent("numeralsButton", "mouseout", function( ) {
  setText("numeralsButton", "Numerals");
});
onEvent("youWonButton", "mouseover", function( ) {
  playSound("assets/category_achievements/peaceful_win_2.mp3", false);
});
onEvent("you...Won?Button", "mouseover", function( ) {
  playSound("assets/category_achievements/peaceful_win_2.mp3", false);
});
onEvent("you...Won?Button", "mousemove", function( ) {
  playSound("assets/category_achievements/peaceful_win_2.mp3", false);
});
onEvent("you...Won?Button", "mouseout", function( ) {
  playSound("assets/category_achievements/peaceful_win_2.mp3", false);
});
onEvent("teaButton", "mouseover", function( ) {
  var randomTea = randomNumber(0, 2);
  tea = tea + "Tea";
  setText("teaButton", tea);
  if (randomTea == 0) {
    setProperty("teaButton", "x", getProperty("teaButton", "x") + 1);
  } else if ((randomTea == 1)) {
    setProperty("teaButton", "x", getProperty("teaButton", "x") - 1);
  }
});
onEvent("backFromEndingShowcaseScreens", "click", function( ) {
  tea = "Tea";
  setText("teaButton", "Tea");
});
onEvent("deathButton", "mouseover", function( ) {
  if (deathButtonColor == 1) {
    setProperty("endingsShowcaseScreen1", "background-color", "red");
    setProperty("endingsShowcaseScreen1", "icon-color", "black");
  } else {
    setProperty("endingsShowcaseScreen1", "background-color", "black");
    setProperty("endingsShowcaseScreen1", "icon-color", "white");
  }
  deathButtonColor = randomNumber(1, 2);
});
onEvent("deathButton", "mouseout", function( ) {
  setProperty("endingsShowcaseScreen1", "background-color", "rgb(0, 255, 231)");
  setProperty("endingsShowcaseScreen1", "icon-color", "rgb(0, 255, 231)");
});
