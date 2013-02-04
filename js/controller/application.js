define(['controller/intro', 'lib/collie'], function(Intro) {
  /** 
   * Application 시작 함수.
   */
  function start() {    
    prepareResource_();
  }

  /** 
   * 게임에서 사용하는 모든 이미지 리소스 등록
   */
  function prepareResource_() {
    console.time('prepareResource_()');
    collie.ImageManager.add({
      // 공통 
      background: 'img/background.png',
      dimBackground: 'img/dim.png',

      // 인트로
      introCopyright: 'img/copyright.png',
      introTitle: 'img/intro-title.png',
      introMarbleSmall: 'img/marble-small.png',
      introMarbleLarge: 'img/marble-large.png',

      // 메뉴
      menuTitle: 'img/title.png',
      menuRule: 'img/game-rule.png',
      menuSettings: 'img/settings.png',  
      menuScrollArea: 'img/scroll-area.png',
      menuEasy: 'img/menu-easy.png',
      menuNormal: 'img/menu-normal.png',
      menuNormalLock: 'img/menu-normal-lock.png',
      menuHardLock: 'img/menu-hard-lock.png',
      menuRule1: 'img/rule1.png',
      menuRule2: 'img/rule2.png',
      menuRule3: 'img/rule3.png',

      // 세부 메뉴 
      stageBackground: 'img/mini-background.png',
      stageEasy: 'img/mini-easy.png',
      stageNormal: 'img/mini-normal.png',
      stageHard: 'img/mini-hard.png',
      stage: 'img/stage-back.png',
      stage0: 'img/0.png',
      stage1: 'img/1.png',
      stage2: 'img/2.png',
      stage3: 'img/3.png',
      stage4: 'img/4.png',
      stage5: 'img/5.png',
      stage6: 'img/6.png',
      stage7: 'img/7.png',
      stage8: 'img/8.png',
      stage9: 'img/9.png',
      stageLock: 'img/stage-lock.png',

      // 게임 화면
      gameBackground: 'img/game-background2.png',
      gameMarble: 'img/marble.png',
      gameGoNormal: 'img/go.png',
      gameGoDown: 'img/go-down.png',
      gameAgain: 'img/regame.png',
      gameEasy: 'img/game-easy.png',
      gameNormal: 'img/game-normal.png',
      gameWinPopupBg: 'img/win-back.png',
      gameLosePopupBg: 'img/lose-back.png',
      gameNextStage: 'img/next-stage.png',
      gameWinPopupAgain: 'img/again-small.png',
      gameLosePopupAgain: 'img/again-big.png',

    }, function () {
      console.timeEnd('prepareResource_()');
      Intro.start();
    });
  }

  return {
    start: start
  };
});