import userLoader from "./userLoader";

export function tokenLoader({ params }) {
  return params.token;
}
export function codeLoader({ params }) {
  return params.code;
}

export async function shortsParamsLoader({ params }) {
  const user = await userLoader();
  const result = {
    user,
    code: params.code,
  };
  return result;
}
