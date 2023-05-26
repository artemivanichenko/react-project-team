export const objectStyle = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    '&:focus': { outline: 'none', border: 'none' },
    '&:hover': { outline: 'none', border: '2px solid #474759' },
    border: '2px solid #474759',
    cursor: 'pointer',
    background: 'transparent',
    height: '46px',
    width: '170px',
    fontSize: '12px',
    color: '#C7CCDC80',
  }),
  valueContainer: (baseStyles, state) => ({
    ...baseStyles,
    paddingTop: '4px',
    paddingLeft: '20px',
    // paddingBottom: "15px",
  }),
  indicatorSeparator: (baseStyles, state) => ({
    ...baseStyles,
    width: 0,
  }),
  dropdownIndicator: (baseStyles, state) => ({
    ...baseStyles,
    color: '#C7CCDC80',
  }),
  menu: (baseStyles, state) => ({
    ...baseStyles,
    background: '#383847',
    cursor: 'pointer',
    color: '#C7CCDC50',
  }),
  option: (baseStyles, state) => ({
    '&:hover': { background: '#474759', color: '#F6F7FB' },
    letterSpacing: '0.02em',
    fontSize: '12px',
    lineHeight: 1.17,
    padding: '12px 18px',
  }),
  singleValue: (baseStyles, state) => ({
    ...baseStyles,
    color: '#C7CCDC50',
  }),
};
