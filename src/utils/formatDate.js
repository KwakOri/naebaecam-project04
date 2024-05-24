const getFormatedDate = (currDate) => {
  const _date = new Date(currDate);
  const isAm = _date.getHours() < 13 ? "오전" : "오후";
  return {
    shortFormat: `${isAm} ${_date.getHours() % 12}:${_date.getMinutes()}`,
    fullFormat: `${_date.getFullYear()}년 ${
      _date.getMonth() + 1
    }월 ${_date.getDate()}일, ${isAm} ${
      _date.getHours() % 12
    }:${_date.getMinutes()}`,
  };
};

export { getFormatedDate };

// getTime()을 받아서 `오후 : 11:04 ` 의 형식으로 formating
