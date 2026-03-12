import { describe, expect, it } from "bun:test";
import { z } from "zod";
import { Elysia, getSchemaValidator, t } from "../../src";

describe("getSchemaValidator", () => {
	it("handle TypeBox as sub type", () => {
		const validator = getSchemaValidator(
			z.object({
				name: z.string(),
			}),
			{
				validators: [
					t.Object({
						age: t.Number(),
					}),
				],
			},
		);

		expect(
			validator.Check({
				name: "Elysia",
				age: 1,
			}),
		).toEqual({
			value: {
				name: "Elysia",
				age: 1,
			},
		});
	});
});
