export function isPositive(n = 1) {
  let nIsPositive = false;
  if (typeof n == "number" && n > 0) {
    nIsPositive = true;
  }
  return nIsPositive;
}
