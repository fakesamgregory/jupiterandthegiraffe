import Stats from 'three/examples/jsm/libs/stats.module.js';
import {ThreejsViewer} from '@polygonjs/polygonjs/src/engine/viewers/Threejs';

export class StatsInit {
	public readonly stats = Stats();
	constructor(private viewer: ThreejsViewer) {
		this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
		(this.stats.dom as any).style =
			'position: fixed; top: 0px; right: 0px; cursor: pointer; opacity: 0.9; z-index: 10000; right: 0px; transform: scale(2); transform-origin: top right;';
		document.body.appendChild(this.stats.dom);
	}
	addViewerHooks() {
		this.viewer.registerOnBeforeTick('statsBegin', () => {
			this.stats.begin();
		});
		this.viewer.registerOnAfterRender('statsEnd', () => {
			this.stats.end();
		});
	}
}
