import {Poly} from '@polygonjs/polygonjs/src/engine/Poly';
import {AllExpressionsRegister} from '@polygonjs/polygonjs/src/engine/poly/registers/expressions/All';
import {configurePolygonjs} from '../../PolyConfig';
// anim
import {DurationAnimNode} from '@polygonjs/polygonjs/src/engine/nodes/anim/Duration';
import {EasingAnimNode} from '@polygonjs/polygonjs/src/engine/nodes/anim/Easing';
import {NullAnimNode} from '@polygonjs/polygonjs/src/engine/nodes/anim/Null';
import {PropertyNameAnimNode} from '@polygonjs/polygonjs/src/engine/nodes/anim/PropertyName';
import {PropertyValueAnimNode} from '@polygonjs/polygonjs/src/engine/nodes/anim/PropertyValue';
import {TargetAnimNode} from '@polygonjs/polygonjs/src/engine/nodes/anim/Target';
// cop
import {ImageCopNode} from '@polygonjs/polygonjs/src/engine/nodes/cop/Image';
// event
import {CameraOrbitControlsEventNode} from '@polygonjs/polygonjs/src/engine/nodes/event/CameraOrbitControls';
import {PointerEventNode} from '@polygonjs/polygonjs/src/engine/nodes/event/Pointer';
import {RaycastEventNode} from '@polygonjs/polygonjs/src/engine/nodes/event/Raycast';
import {SequenceEventNode} from '@polygonjs/polygonjs/src/engine/nodes/event/Sequence';
// mat
import {MeshBasicMatNode} from '@polygonjs/polygonjs/src/engine/nodes/mat/MeshBasic';
import {MeshBasicBuilderMatNode} from '@polygonjs/polygonjs/src/engine/nodes/mat/MeshBasicBuilder';
import {PointsBuilderMatNode} from '@polygonjs/polygonjs/src/engine/nodes/mat/PointsBuilder';
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
// rop
import {WebGLRendererRopNode} from '@polygonjs/polygonjs/src/engine/nodes/rop/WebGLRenderer';
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
export class PolyRegister {
	static run() {
		AllExpressionsRegister.run(Poly);
		// anim
		Poly.registerNode(DurationAnimNode);
		Poly.registerNode(EasingAnimNode);
		Poly.registerNode(NullAnimNode);
		Poly.registerNode(PropertyNameAnimNode);
		Poly.registerNode(PropertyValueAnimNode);
		Poly.registerNode(TargetAnimNode);
		// cop
		Poly.registerNode(ImageCopNode);
		// event
		Poly.registerNode(CameraOrbitControlsEventNode);
		Poly.registerNode(PointerEventNode);
		Poly.registerNode(RaycastEventNode);
		Poly.registerNode(SequenceEventNode);
		// mat
		Poly.registerNode(MeshBasicMatNode);
		Poly.registerNode(MeshBasicBuilderMatNode);
		Poly.registerNode(PointsBuilderMatNode);
		// obj
		Poly.registerNode(AnimationsNetworkObjNode);
		Poly.registerNode(CopNetworkObjNode);
		Poly.registerNode(EventsNetworkObjNode);
		Poly.registerNode(GeoObjNode);
		Poly.registerNode(HemisphereLightObjNode);
		Poly.registerNode(MaterialsNetworkObjNode);
		Poly.registerNode(OrthographicCameraObjNode);
		Poly.registerNode(PerspectiveCameraObjNode);
		Poly.registerNode(SpotLightObjNode);
		// rop
		Poly.registerNode(WebGLRendererRopNode);
		// sop
		Poly.registerNode(AttribCreateSopNode);
		Poly.registerNode(CameraPlaneSopNode);
		Poly.registerNode(DeleteSopNode);
		Poly.registerNode(EventsNetworkSopNode);
		Poly.registerNode(InstanceSopNode);
		Poly.registerNode(MaterialSopNode);
		Poly.registerNode(NullSopNode);
		Poly.registerNode(ParticlesSystemGpuSopNode);
		Poly.registerNode(PlaneSopNode);
		Poly.registerNode(RenderersNetworkSopNode);
		Poly.registerNode(RestAttributesSopNode);
		Poly.registerNode(SphereSopNode);
		Poly.registerNode(TransformSopNode);
		// custom configuration
		configurePolygonjs(Poly);
	}
}
