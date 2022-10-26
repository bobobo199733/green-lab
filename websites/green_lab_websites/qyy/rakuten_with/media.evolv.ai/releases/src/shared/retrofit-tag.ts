let retrofitted = false;

const retrofits = [
	/**
	 * Retrofits <script> tag to use the attribute `data-evolv-environment` instead of `data-evolv-website`.
	 */
	function retrofitEnvironmentAttribute() {
		const scripts = document.scripts;

		for (let i = 0; i < scripts.length; i += 1) {
			const dataset = scripts[i].dataset;

			if ('evolvWebsite' in dataset && !('evolvEnvironment' in dataset)) {
				dataset.evolvEnvironment = dataset.evolvWebsite;
			}
		}
	}
];

/**
 * Retrofits the Evolv Scout `<script>` tag to conform to new, non-breaking changes to the expected attributes.
 */
function retrofitTag() {
	if (retrofitted) {
		return;
	}

	retrofits.forEach(fn => fn());
	retrofitted = true;
}

retrofitTag();
