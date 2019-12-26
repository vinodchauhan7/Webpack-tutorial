import { parseInput } from "./parseInput";

export const checkUserIdValidation = input => {
  return (
    input.length !== 0 && typeof parseInput(input) === "number" && !isNaN(input)
  );
};
