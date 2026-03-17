// Your "Context" tab should look like this
/* === 1. INNER SELF & AUTO-CARDS INTEGRATION === */
// This must run first. It handles /AC commands and Inner Self's internal
// processing.
if (state.ngoEnabled) {
	if (typeof InnerSelf === "function") {
		InnerSelf("input");
	}
}
else {
	log("NGO is disabled, ignoring... (Context)");
}

InnerSelf("context");
const modifier = (text) => {
	text = LocalizedLanguages("context", text);
	text = onContext_ReputeX(text);
	text = onContext_TAS(text);
	// NGO: inject story phase prompt into context
	if (state.ngoEnabled && state.originalAuthorsNote) {
		text = text + "\n\n" + state.originalAuthorsNote;
	}
	// Any other context modifier scripts can go here
	let stop = false;
	return {
		text,
		stop
	};
};
modifier(text);
