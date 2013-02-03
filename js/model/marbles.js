define(function() {
   /** 
   * 게임의 구슬 개수를 반환한다.
   * @param {String} mode 난이도 
   * @param {Number} stage 판을 의미(1, 2, 3...)
   */
  function get(mode, stage) {
    var marbles = [];

    switch (mode) {
      case 'easy':
        marbles = getEasy_(stage);
        break;
      case 'normal':
        marbles = getNormal_(stage);
        break;
    }

    return marbles;
  }  

  /**
   * Easy 난이도의 구슬 개수를 반환한다.
   * @param {Number} stage 판을 의미(1, 2, 3...)
   */
  function getEasy_(stage) {
    switch (stage) {
      case 1:
        return [0, 1, 4];
      case 2:
        return [0, 2, 5];
      case 3:
        return [0, 3, 4];
      case 4:
        return [0, 3, 6];
      case 5:
        return [0, 4, 5];
      case 6:
        return [1, 1, 2];
      case 7:
        return [1, 1, 5];
      case 8:
        return [1, 2, 2];
      case 9:
        return [1, 2, 4];
      case 10:
        return [1, 2, 7];
      case 11:
        return [1, 3, 3];
      case 12:
        return [1, 3, 6];
      case 13:
        return [1, 3, 7];
      case 14:
        return [1, 4, 4];
      case 15:
        return [1, 4, 7];
    }
  }

  /** 
   * Normal 난이도의 구슬 개수를 반환한다.
   * @param {Number} stage 판을 의미(1, 2, 3...)
   */
  function getNormal_(stage) {
    switch (stage) {
      case 1:
        return [1, 4, 8];
      case 2:
        return [1, 5, 6];
      case 3:
        return [2, 3, 4];
      case 4:
        return [2, 4, 5];
      case 5:
        return [2, 4, 7];
      case 6:
        return [2, 5, 6];
      case 7:
        return [2, 5, 9];
      case 8:
        return [2, 6, 7];
      case 9:
        return [2, 7, 10];
      case 10:
        return [2, 8, 9];
      case 11:
        return [2, 8, 11];
      case 12:
        return [2, 9, 10];
      case 13:
        return [2, 9, 12];
      case 14:
        return [2, 10, 11];
      case 15:
        return [2, 10, 12];
    }
  }

  return {
  	get: get
  };
});