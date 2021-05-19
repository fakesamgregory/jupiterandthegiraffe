import {PolyEngine} from '@polygonjs/polygonjs/src/engine/Poly';
import {PolyScene} from '@polygonjs/polygonjs/src/engine/scene/PolyScene';

export function configurePolygonjs(poly: PolyEngine) {
	poly.renderersController.setPrintDebug(true);
	// configure the engine
}
export function configureScene(scene: PolyScene) {
	// configure the scene
}
