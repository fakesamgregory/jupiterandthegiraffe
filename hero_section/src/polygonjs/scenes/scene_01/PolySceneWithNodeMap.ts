
import {PolyScene} from '@polygonjs/polygonjs/src/engine/scene/PolyScene';
// obj
import {AnimationsNetworkObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/AnimationsNetwork';
import {CopNetworkObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/CopNetwork';
import {EventsNetworkObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/EventsNetwork';
import {GeoObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/Geo';
import {HemisphereLightObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/HemisphereLight';
import {MaterialsNetworkObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/MaterialsNetwork';
import {OrthographicCameraObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/OrthographicCamera';
import {PerspectiveCameraObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/PerspectiveCamera';
import {SpotLightObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/SpotLight';
// sop
import {AttribCreateSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/AttribCreate';
import {CameraPlaneSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/CameraPlane';
import {DeleteSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Delete';
import {EventsNetworkSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/EventsNetwork';
import {InstanceSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Instance';
import {MaterialSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Material';
import {NullSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Null';
import {ParticlesSystemGpuSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/ParticlesSystemGpu';
import {PlaneSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Plane';
import {RenderersNetworkSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/RenderersNetwork';
import {RestAttributesSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/RestAttributes';
import {SphereSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Sphere';
import {TransformSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Transform';
// event
import {CameraOrbitControlsEventNode} from '@polygonjs/polygonjs/src/engine/nodes/event/CameraOrbitControls';
import {PointerEventNode} from '@polygonjs/polygonjs/src/engine/nodes/event/Pointer';
import {RaycastEventNode} from '@polygonjs/polygonjs/src/engine/nodes/event/Raycast';
import {SequenceEventNode} from '@polygonjs/polygonjs/src/engine/nodes/event/Sequence';
// rop
import {WebGLRendererRopNode} from '@polygonjs/polygonjs/src/engine/nodes/rop/WebGLRenderer';
// cop
import {ImageCopNode} from '@polygonjs/polygonjs/src/engine/nodes/cop/Image';
// mat
import {MeshBasicBuilderMatNode} from '@polygonjs/polygonjs/src/engine/nodes/mat/MeshBasicBuilder';
import {MeshBasicMatNode} from '@polygonjs/polygonjs/src/engine/nodes/mat/MeshBasic';
import {PointsBuilderMatNode} from '@polygonjs/polygonjs/src/engine/nodes/mat/PointsBuilder';
// anim
import {DurationAnimNode} from '@polygonjs/polygonjs/src/engine/nodes/anim/Duration';
import {EasingAnimNode} from '@polygonjs/polygonjs/src/engine/nodes/anim/Easing';
import {NullAnimNode} from '@polygonjs/polygonjs/src/engine/nodes/anim/Null';
import {PropertyNameAnimNode} from '@polygonjs/polygonjs/src/engine/nodes/anim/PropertyName';
import {PropertyValueAnimNode} from '@polygonjs/polygonjs/src/engine/nodes/anim/PropertyValue';
import {TargetAnimNode} from '@polygonjs/polygonjs/src/engine/nodes/anim/Target';

export class PolySceneWithNodeMap extends PolyScene {
	node(path: '/hemisphereLight1'): HemisphereLightObjNode;
	node(path: '/spotLight1'): SpotLightObjNode;
	node(path: '/orthographicCamera1'): OrthographicCameraObjNode;
	node(path: '/geo1'): GeoObjNode;
	node(path: '/geo1/plane1'): PlaneSopNode;
	node(path: '/geo1/plane2'): PlaneSopNode;
	node(path: '/geo1/instance1'): InstanceSopNode;
	node(path: '/geo1/transform1'): TransformSopNode;
	node(path: '/geo1/attribCreate1'): AttribCreateSopNode;
	node(path: '/geo1/attribCreate2'): AttribCreateSopNode;
	node(path: '/geo1/cameraPlane1'): CameraPlaneSopNode;
	node(path: '/geo1/delete1'): DeleteSopNode;
	node(path: '/geo1/transform2'): TransformSopNode;
	node(path: '/geo1/plane3'): PlaneSopNode;
	node(path: '/geo1/transform3'): TransformSopNode;
	node(path: '/geo1/plane4'): PlaneSopNode;
	node(path: '/geo1/CONTROL'): NullSopNode;
	node(path: '/geo1/material1'): MaterialSopNode;
	node(path: '/geo1/sphere1'): SphereSopNode;
	node(path: '/geo1/restAttributes1'): RestAttributesSopNode;
	node(path: '/geo1/attribCreate3'): AttribCreateSopNode;
	node(path: '/geo1/particlesSystemGpu1'): ParticlesSystemGpuSopNode;
	node(path: '/perspectiveCamera1'): PerspectiveCameraObjNode;
	node(path: '/perspectiveCamera1/events1'): EventsNetworkSopNode;
	node(path: '/perspectiveCamera1/events1/cameraOrbitControls1'): CameraOrbitControlsEventNode;
	node(path: '/perspectiveCamera1/renderersNetwork1'): RenderersNetworkSopNode;
	node(path: '/perspectiveCamera1/renderersNetwork1/WebGLRenderer1'): WebGLRendererRopNode;
	node(path: '/COP'): CopNetworkObjNode;
	node(path: '/COP/image_01'): ImageCopNode;
	node(path: '/COP/image_02'): ImageCopNode;
	node(path: '/MAT'): MaterialsNetworkObjNode;
	node(path: '/MAT/meshBasic_DEBUG'): MeshBasicMatNode;
	node(path: '/MAT/meshBasicBuilder1'): MeshBasicBuilderMatNode;
	node(path: '/MAT/points_particles'): PointsBuilderMatNode;
	node(path: '/EVENTS'): EventsNetworkObjNode;
	node(path: '/EVENTS/raycast1'): RaycastEventNode;
	node(path: '/EVENTS/pointer1'): PointerEventNode;
	node(path: '/EVENTS/sequence1'): SequenceEventNode;
	node(path: '/ANIM'): AnimationsNetworkObjNode;
	node(path: '/ANIM/target1'): TargetAnimNode;
	node(path: '/ANIM/propertyName1'): PropertyNameAnimNode;
	node(path: '/ANIM/propertyValue1'): PropertyValueAnimNode;
	node(path: '/ANIM/propertyValue2'): PropertyValueAnimNode;
	node(path: '/ANIM/PLAY'): NullAnimNode;
	node(path: '/ANIM/RESET'): NullAnimNode;
	node(path: '/ANIM/duration1'): DurationAnimNode;
	node(path: '/ANIM/easing1'): EasingAnimNode;
	node(path: string):any /* we need any for now as otherwise an error occurs when adding plugins to the overloaded methods */ {
		return super.node(path);
	}
}
