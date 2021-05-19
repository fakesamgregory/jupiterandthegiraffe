import {SceneDataManifestImporter} from '@polygonjs/polygonjs/src/engine/io/manifest/import/SceneData';
import {SceneJsonImporter} from '@polygonjs/polygonjs/src/engine/io/json/import/Scene';
import {CoreSleep} from '@polygonjs/polygonjs/src/core/Sleep';
import {PolyRegister} from './register';
import { PolySceneWithNodeMap } from './PolySceneWithNodeMap';
const manifest = require('./manifest.json');

export async function loadPolygonjsScene() {
    PolyRegister.run();

    const manifestContent = await manifest;
    if(!manifestContent){
        return;
    }
    const sceneData = await SceneDataManifestImporter.importSceneData({
        manifest: manifestContent,
        urlPrefix: `/polygonjs/scenes/scene_01`,
    });

    const importer = new SceneJsonImporter(sceneData);
    const scene = (await importer.scene()) as PolySceneWithNodeMap;
    (window as any).scene = scene;

    // await scene.waitForCooksCompleted() // not working since particles system added
    await CoreSleep.sleep(1000)
    const raycastNode = scene.node('/EVENTS/raycast1')
    raycastNode.p.position.set([-1000,-1000,0])

    const cameraNode = scene.mainCameraNode();
    if (!cameraNode) {
        console.warn('no main camera found');
        return;
    }
    const container = document.getElementById('polygonjs-app');
    if (!container) {
        console.warn('no element to mount the viewer onto');
        return;
    }
    cameraNode.createViewer(container);

    scene.setFrame(0);
    scene.play();

    function fadeImage(){
        const playNode = scene.node('/ANIM/PLAY')
        playNode.p.play.pressButton()
    }
    (window as any).fadeImage = fadeImage;
}

