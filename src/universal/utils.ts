// @ts-expect-error
export const isBun = typeof Bun !== "undefined";
// @ts-expect-error
export const isDeno = typeof Deno !== "undefined";

export function isCloudflareWorker() {
	try {
		// Check for the presence of caches.default, which is a global in Workers
		if (
			// @ts-expect-error
			typeof caches !== "undefined" &&
			// @ts-expect-error
			typeof caches.default !== "undefined"
		)
			return true;

		// @ts-expect-error
		if (typeof WebSocketPair !== "undefined") return true;
	} catch {
		return false;
	}

	return false;
}
