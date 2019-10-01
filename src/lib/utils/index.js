const UUID = () => {
  const s4 = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;
};

const getString = () => {
  return Math.round(Math.random() * 36 ** 10).toString(36);
};

const Random = {
  UUID,
  getString
};
export { Random };
