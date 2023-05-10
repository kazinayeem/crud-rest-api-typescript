export const error = (msg: String, status: number) => {
  const e = new Error();
  e.message = msg;
  e.status = status;

  return e;
};
