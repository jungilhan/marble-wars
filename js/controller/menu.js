define(['view/menuView', 'controller/stage'], function(Menu, Stage) {
  /** 
   * 메뉴 시작 함수.
   */
  function start() {
    var mode = localStorage.getItem('mode');
    if (mode == null) {
      mode = 'easy';
      localStorage.mode = mode;
      //localStorage.stage = 1;
    }

    var highestStage = localStorage.getItem('highestStage');
    if (highestStage == null) {
      localStorage.highestStage = 1;
    }

    var highestMode = localStorage.getItem('highestMode');
    if (highestMode == null) {
      localStorage.highestMode = 'easy';
    }

    Menu.render({
      highestStage: highestStage, 
      highestMode: highestMode
    }, {
      oneasy: oneasy_,
      onnormal: onnormal_, 
      onhard: onhard_
    });
  }

  /** 
   * Easy 게임 버튼 콜백 함수.
   */
  function oneasy_() {
    localStorage.mode = 'easy';
    Stage.start();
  }

  /** 
   * Normal 게임 버튼 콜백 함수.
   */
  function onnormal_() {
    var highestMode = localStorage.getItem('highestMode');
    var isUnlocked = true;

    if (highestMode == 'easy') {
      console.log('Mode is locked!');
      isUnlocked = false;
    }
    
    if (isUnlocked) {
      localStorage.mode = 'normal';
      Stage.start();
    }

    return isUnlocked;
  }

  /** 
   * Hard 게임 버튼 콜백 함수.
   */
  function onhard_() {
    var highestMode = localStorage.getItem('highestMode');
    var isUnlocked = true;

    if (highestMode == 'easy' || highestMode == 'normal') {
      console.log('Mode is locked!');
      isUnlocked = false;
    }
    
    if (isUnlocked) {      
      localStorage.mode = 'hard';
      Stage.start();
    }

    return isUnlocked;
  }

  return {
  	start: start
  };
});