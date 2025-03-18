import isNil from "lodash/isNil";

const format = (date:Date) => (option:Intl.DateTimeFormatOptions) => {
  const formatter = new Intl.DateTimeFormat('en', option);
  return formatter.format(date);
};

const join = (date:Date, options:Intl.DateTimeFormatOptions[], separator:string):string => {
  return options.map(format(date)).join(separator);
};

const hyphenatedDate = (date:Date, options:Intl.DateTimeFormatOptions[]|null = null):string => {
  if(isNil(options)) {
    options = [{year: 'numeric'}, {month: 'numeric'}, {day: 'numeric'}];
  }
  return join(date, options, '-');
};

const useDateHelper = () => {
  return {
    hyphenatedDate,
  };
};

export default useDateHelper;