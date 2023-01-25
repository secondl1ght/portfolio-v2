import { json } from "@sveltejs/kit";

export function GET() {
  return json({
    names: {
      secondl1ght:
        "2a28380e4727c07f8bf1006f776f8a4cc1941c6bc647bddf5289fc9ee31d85b9",
    },
  });
}
