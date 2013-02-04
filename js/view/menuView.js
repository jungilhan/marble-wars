define(['config', 'lib/collie'], function(Config) {
  /** @private */
  var width_ = Config.width();
  var height_ = Config.height();
  var callbacks_ = null;

  /** 
   * View 렌더 함수.
   * @param {Object} parmas 옵션 정보
   * @param {Object} callbacks 콜백 함수 정보
   */
  function render(params, callbacks) {
    callbacks_ = callbacks;
  	init_(params);
  }

  /** 
   * 초기화 함수.
   * @param {Object} parmas 옵션 정보
   */
  function init_(params) {
    var layer = new collie.Layer({
      width: width_,
      height: height_
    });

    var displayObjects = addDisplayObjects_(layer, params);
    bindEvent_(displayObjects);

    collie.Renderer.addLayer(layer);
    collie.Renderer.load(document.getElementById('menu'));
    collie.Renderer.start();
  }

  /** 
   * 레이어에 객체를 추가한다. 
   * @param {Object} layer 레이어
   * @param {Object} parmas 옵션 정보
   * @return {Object} 레이어에 추가된 객체
   */
  function addDisplayObjects_(layer, params) {
    new collie.DisplayObject({
      backgroundImage: 'menuBackground'
    }).addTo(layer);

    var title = new collie.DisplayObject({
      x: 272,
      y: 10,
      backgroundImage: 'menuTitle'
    }).addTo(layer);

    var rule = new collie.DisplayObject({
      x: 590,
      y: 5,
      backgroundImage: 'menuRule'
    }).addTo(layer);

    var settings = new collie.DisplayObject({
      x: 590,
      y: 70,
      backgroundImage: 'menuSettings'
    }).addTo(layer);

    var scrollArea = new collie.DisplayObject({
      x: 0,
      y: 0,
      backgroundImage: 'menuScrollArea'
    }).addTo(layer);

    var easy = new collie.DisplayObject({
      x: 50,
      y: 170,
      backgroundImage: 'menuEasy'
    }).addTo(layer);

    var mode = 'menuNormalLock';
    if (params.highestMode == 'normal') {
      mode = 'menuNormal';
    }
    var normal = new collie.DisplayObject({
      x: 300,
      y: 170,
      backgroundImage: mode
    }).addTo(layer);

    var hard = new collie.DisplayObject({
      x: 550,
      y: 170,
      backgroundImage: 'menuHardLock'
    }).addTo(layer);

    return {
      rule: rule,
      settings: settings,
      scrollArea: scrollArea,
      easy: easy,
      normal: normal,
      hard: hard
    };
  }

  /** 
   * 객체에 대한 이벤트를 등록한다.
   * @param {Object} displayObjects 화면에 보여지는 객체 집합
   */
  function bindEvent_(displayObjects) {
    displayObjects.rule.attach({
      click: function(e) {
        console.log('rule clicked');
      }
    });

    displayObjects.settings.attach({
      click: function(e) {
        console.log('settings clicked'); 
      }
    });

    displayObjects.easy.attach({
      click: function(e) {        
        console.log('easy clicked');        

        if (callbacks_ != null && callbacks_.oneasy != null) {
          callbacks_.oneasy();
          detachAll_(displayObjects);
        }
      }
    });

    displayObjects.normal.attach({
      click: function(e) {
        console.log('normal clicked');           

        if (callbacks_ != null && callbacks_.onnormal != null) {
          if (callbacks_.onnormal()) {
            detachAll_(displayObjects);  
          }          
        }
      }
    });

    displayObjects.hard.attach({
      click: function(e) {
        console.log('hard clicked');            

        if (callbacks_ != null && callbacks_.onhard != null) {
          if (callbacks_.onhard()) {
            detachAll_(displayObjects);
          }
        }
      }
    });
  }

  /** 
   * 객체에 대한 모든 이벤트를 해지한다.
   * @param {Object} displayObjects 화면에 보여지는 객체 집합
   */
  function detachAll_(displayObjects) {
    var layer = displayObjects.easy.getLayer();
    for (var i = 0; i < layer.getChildren().length; i++) {
      layer.getChildren()[i].detachAll();
    }
  }

  return {
  	render: render
  };
});