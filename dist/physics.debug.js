/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@dimforge/rapier2d/rapier_wasm2d_bg.wasm":
/*!***************************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/rapier_wasm2d_bg.wasm ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "wasm/rapier_wasm2d_bg.5f86d35fdcfdfa6c82c001fa58012d28.wasm");

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/coarena.js":
/*!****************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/coarena.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Coarena": () => (/* binding */ Coarena)
/* harmony export */ });
class Coarena {
    constructor() {
        this.fconv = new Float64Array(1);
        this.uconv = new Uint32Array(this.fconv.buffer);
        this.data = new Array();
        this.size = 0;
    }
    set(handle, data) {
        let i = this.index(handle);
        while (this.data.length <= i) {
            this.data.push(null);
        }
        if (this.data[i] == null)
            this.size += 1;
        this.data[i] = data;
    }
    len() {
        return this.size;
    }
    delete(handle) {
        let i = this.index(handle);
        if (i < this.data.length) {
            if (this.data[i] != null)
                this.size -= 1;
            this.data[i] = null;
        }
    }
    clear() {
        this.data = new Array();
    }
    get(handle) {
        let i = this.index(handle);
        if (i < this.data.length) {
            return this.data[i];
        }
        else {
            return null;
        }
    }
    forEach(f) {
        for (const elt of this.data) {
            if (elt != null)
                f(elt);
        }
    }
    getAll() {
        return this.data.filter((elt) => elt != null);
    }
    index(handle) {
        /// Extracts the index part of a handle (the lower 32 bits).
        /// This is done by first injecting the handle into an Float64Array
        /// which is itself injected into an Uint32Array (at construction time).
        /// The 0-th value of the Uint32Array will become the `number` integer
        /// representation of the lower 32 bits.
        /// Also `this.uconv[1]` then contains the generation number as a `number`,
        /// which we don’t really need.
        this.fconv[0] = handle;
        return this.uconv[0];
    }
}
//# sourceMappingURL=coarena.js.map

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/dynamics/ccd_solver.js":
/*!****************************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/dynamics/ccd_solver.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CCDSolver": () => (/* binding */ CCDSolver)
/* harmony export */ });
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../raw */ "./node_modules/@dimforge/rapier2d/rapier_wasm2d_bg.js");

/**
 * The CCD solver responsible for resolving Continuous Collision Detection.
 *
 * To avoid leaking WASM resources, this MUST be freed manually with `ccdSolver.free()`
 * once you are done using it.
 */
class CCDSolver {
    constructor(raw) {
        this.raw = raw || new _raw__WEBPACK_IMPORTED_MODULE_0__.RawCCDSolver();
    }
    /**
     * Release the WASM memory occupied by this narrow-phase.
     */
    free() {
        this.raw.free();
        this.raw = undefined;
    }
}
//# sourceMappingURL=ccd_solver.js.map

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/dynamics/coefficient_combine_rule.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/dynamics/coefficient_combine_rule.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoefficientCombineRule": () => (/* binding */ CoefficientCombineRule)
/* harmony export */ });
/**
 * A rule applied to combine coefficients.
 *
 * Use this when configuring the `ColliderDesc` to specify
 * how friction and restitution coefficient should be combined
 * in a contact.
 */
var CoefficientCombineRule;
(function (CoefficientCombineRule) {
    CoefficientCombineRule[CoefficientCombineRule["Average"] = 0] = "Average";
    CoefficientCombineRule[CoefficientCombineRule["Min"] = 1] = "Min";
    CoefficientCombineRule[CoefficientCombineRule["Multiply"] = 2] = "Multiply";
    CoefficientCombineRule[CoefficientCombineRule["Max"] = 3] = "Max";
})(CoefficientCombineRule || (CoefficientCombineRule = {}));
//# sourceMappingURL=coefficient_combine_rule.js.map

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/dynamics/impulse_joint.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/dynamics/impulse_joint.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FixedImpulseJoint": () => (/* binding */ FixedImpulseJoint),
/* harmony export */   "ImpulseJoint": () => (/* binding */ ImpulseJoint),
/* harmony export */   "JointData": () => (/* binding */ JointData),
/* harmony export */   "JointType": () => (/* binding */ JointType),
/* harmony export */   "MotorModel": () => (/* binding */ MotorModel),
/* harmony export */   "PrismaticImpulseJoint": () => (/* binding */ PrismaticImpulseJoint),
/* harmony export */   "RevoluteImpulseJoint": () => (/* binding */ RevoluteImpulseJoint),
/* harmony export */   "UnitImpulseJoint": () => (/* binding */ UnitImpulseJoint)
/* harmony export */ });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/@dimforge/rapier2d/math.js");
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../raw */ "./node_modules/@dimforge/rapier2d/rapier_wasm2d_bg.js");


/**
 * An enum grouping all possible types of joints:
 *
 * - `Revolute`: A revolute joint that removes all degrees of freedom between the affected
 *               bodies except for the rotation along one axis.
 * - `Fixed`: A fixed joint that removes all relative degrees of freedom between the affected bodies.
 * - `Prismatic`: A prismatic joint that removes all degrees of freedom between the affected
 *                bodies except for the translation along one axis.
 * - `Spherical`: (3D only) A spherical joint that removes all relative linear degrees of freedom between the affected bodies.
 */
var JointType;
(function (JointType) {
    JointType[JointType["Revolute"] = 0] = "Revolute";
    JointType[JointType["Fixed"] = 1] = "Fixed";
    JointType[JointType["Prismatic"] = 2] = "Prismatic";
})(JointType || (JointType = {}));
var MotorModel;
(function (MotorModel) {
    MotorModel[MotorModel["AccelerationBased"] = 0] = "AccelerationBased";
    MotorModel[MotorModel["ForceBased"] = 1] = "ForceBased";
})(MotorModel || (MotorModel = {}));
class ImpulseJoint {
    constructor(rawSet, bodySet, handle) {
        this.rawSet = rawSet;
        this.bodySet = bodySet;
        this.handle = handle;
    }
    static newTyped(rawSet, bodySet, handle) {
        switch (rawSet.jointType(handle)) {
            case JointType.Revolute:
                return new RevoluteImpulseJoint(rawSet, bodySet, handle);
            case JointType.Prismatic:
                return new PrismaticImpulseJoint(rawSet, bodySet, handle);
            case JointType.Fixed:
                return new FixedImpulseJoint(rawSet, bodySet, handle);
            default:
                return new ImpulseJoint(rawSet, bodySet, handle);
        }
    }
    /** @internal */
    finalizeDeserialization(bodySet) {
        this.bodySet = bodySet;
    }
    /**
     * Checks if this joint is still valid (i.e. that it has
     * not been deleted from the joint set yet).
     */
    isValid() {
        return this.rawSet.contains(this.handle);
    }
    /**
     * The first rigid-body this joint it attached to.
     */
    body1() {
        return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle));
    }
    /**
     * The second rigid-body this joint is attached to.
     */
    body2() {
        return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle));
    }
    /**
     * The type of this joint given as a string.
     */
    type() {
        return this.rawSet.jointType(this.handle);
    }
    /**
     * The position of the first anchor of this joint.
     *
     * The first anchor gives the position of the points application point on the
     * local frame of the first rigid-body it is attached to.
     */
    anchor1() {
        return _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(this.rawSet.jointAnchor1(this.handle));
    }
    /**
     * The position of the second anchor of this joint.
     *
     * The second anchor gives the position of the points application point on the
     * local frame of the second rigid-body it is attached to.
     */
    anchor2() {
        return _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(this.rawSet.jointAnchor2(this.handle));
    }
}
class UnitImpulseJoint extends ImpulseJoint {
    /**
     * Are the limits enabled for this joint?
     */
    limitsEnabled() {
        return this.rawSet.jointLimitsEnabled(this.handle, this.rawAxis());
    }
    /**
     * The min limit of this joint.
     */
    limitsMin() {
        return this.rawSet.jointLimitsMin(this.handle, this.rawAxis());
    }
    /**
     * The max limit of this joint.
     */
    limitsMax() {
        return this.rawSet.jointLimitsMax(this.handle, this.rawAxis());
    }
    configureMotorModel(model) {
        this.rawSet.jointConfigureMotorModel(this.handle, this.rawAxis(), model);
    }
    configureMotorVelocity(targetVel, factor) {
        this.rawSet.jointConfigureMotorVelocity(this.handle, this.rawAxis(), targetVel, factor);
    }
    configureMotorPosition(targetPos, stiffness, damping) {
        this.rawSet.jointConfigureMotorPosition(this.handle, this.rawAxis(), targetPos, stiffness, damping);
    }
    configureMotor(targetPos, targetVel, stiffness, damping) {
        this.rawSet.jointConfigureMotor(this.handle, this.rawAxis(), targetPos, targetVel, stiffness, damping);
    }
}
class FixedImpulseJoint extends ImpulseJoint {
}
class PrismaticImpulseJoint extends UnitImpulseJoint {
    rawAxis() {
        return _raw__WEBPACK_IMPORTED_MODULE_1__.RawJointAxis.X;
    }
}
class RevoluteImpulseJoint extends UnitImpulseJoint {
    rawAxis() {
        return _raw__WEBPACK_IMPORTED_MODULE_1__.RawJointAxis.AngX;
    }
}
class JointData {
    constructor() { }
    /**
     * Creates a new joint descriptor that builds a Fixed joint.
     *
     * A fixed joint removes all the degrees of freedom between the affected bodies, ensuring their
     * anchor and local frames coincide in world-space.
     *
     * @param anchor1 - Point where the joint is attached on the first rigid-body affected by this joint. Expressed in the
     *                  local-space of the rigid-body.
     * @param frame1 - The reference orientation of the joint wrt. the first rigid-body.
     * @param anchor2 - Point where the joint is attached on the second rigid-body affected by this joint. Expressed in the
     *                  local-space of the rigid-body.
     * @param frame2 - The reference orientation of the joint wrt. the second rigid-body.
     */
    static fixed(anchor1, frame1, anchor2, frame2) {
        let res = new JointData();
        res.anchor1 = anchor1;
        res.anchor2 = anchor2;
        res.frame1 = frame1;
        res.frame2 = frame2;
        res.jointType = JointType.Fixed;
        return res;
    }
    // #if DIM2
    /**
     * Create a new joint descriptor that builds revolute joints.
     *
     * A revolute joint allows three relative rotational degrees of freedom
     * by preventing any relative translation between the anchors of the
     * two attached rigid-bodies.
     *
     * @param anchor1 - Point where the joint is attached on the first rigid-body affected by this joint. Expressed in the
     *                  local-space of the rigid-body.
     * @param anchor2 - Point where the joint is attached on the second rigid-body affected by this joint. Expressed in the
     *                  local-space of the rigid-body.
     */
    static revolute(anchor1, anchor2) {
        let res = new JointData();
        res.anchor1 = anchor1;
        res.anchor2 = anchor2;
        res.jointType = JointType.Revolute;
        return res;
    }
    /**
     * Creates a new joint descriptor that builds a Prismatic joint.
     *
     * A prismatic joint removes all the degrees of freedom between the
     * affected bodies, except for the translation along one axis.
     *
     * @param anchor1 - Point where the joint is attached on the first rigid-body affected by this joint. Expressed in the
     *                  local-space of the rigid-body.
     * @param anchor2 - Point where the joint is attached on the second rigid-body affected by this joint. Expressed in the
     *                  local-space of the rigid-body.
     * @param axis - Axis of the joint, expressed in the local-space of the rigid-bodies it is attached to.
     */
    static prismatic(anchor1, anchor2, axis) {
        let res = new JointData();
        res.anchor1 = anchor1;
        res.anchor2 = anchor2;
        res.axis = axis;
        res.jointType = JointType.Prismatic;
        return res;
    }
    // #endif
    intoRaw() {
        let rawA1 = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(this.anchor1);
        let rawA2 = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(this.anchor2);
        let rawAx;
        let result;
        let limitsEnabled = false;
        let limitsMin = 0.0;
        let limitsMax = 0.0;
        switch (this.jointType) {
            case JointType.Fixed:
                let rawFra1 = _math__WEBPACK_IMPORTED_MODULE_0__.RotationOps.intoRaw(this.frame1);
                let rawFra2 = _math__WEBPACK_IMPORTED_MODULE_0__.RotationOps.intoRaw(this.frame2);
                result = _raw__WEBPACK_IMPORTED_MODULE_1__.RawGenericJoint.fixed(rawA1, rawFra1, rawA2, rawFra2);
                rawFra1.free();
                rawFra2.free();
                break;
            case JointType.Prismatic:
                rawAx = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(this.axis);
                if (!!this.limitsEnabled) {
                    limitsEnabled = true;
                    limitsMin = this.limits[0];
                    limitsMax = this.limits[1];
                }
                // #if DIM2
                result = _raw__WEBPACK_IMPORTED_MODULE_1__.RawGenericJoint.prismatic(rawA1, rawA2, rawAx, limitsEnabled, limitsMin, limitsMax);
                // #endif
                rawAx.free();
                break;
            // #if DIM2
            case JointType.Revolute:
                result = _raw__WEBPACK_IMPORTED_MODULE_1__.RawGenericJoint.revolute(rawA1, rawA2);
                break;
            // #endif
        }
        rawA1.free();
        rawA2.free();
        return result;
    }
}
//# sourceMappingURL=impulse_joint.js.map

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/dynamics/impulse_joint_set.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/dynamics/impulse_joint_set.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImpulseJointSet": () => (/* binding */ ImpulseJointSet)
/* harmony export */ });
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../raw */ "./node_modules/@dimforge/rapier2d/rapier_wasm2d_bg.js");
/* harmony import */ var _coarena__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../coarena */ "./node_modules/@dimforge/rapier2d/coarena.js");
/* harmony import */ var _impulse_joint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./impulse_joint */ "./node_modules/@dimforge/rapier2d/dynamics/impulse_joint.js");



/**
 * A set of joints.
 *
 * To avoid leaking WASM resources, this MUST be freed manually with `jointSet.free()`
 * once you are done using it (and all the joints it created).
 */
class ImpulseJointSet {
    constructor(raw) {
        this.raw = raw || new _raw__WEBPACK_IMPORTED_MODULE_0__.RawImpulseJointSet();
        this.map = new _coarena__WEBPACK_IMPORTED_MODULE_1__.Coarena();
        // Initialize the map with the existing elements, if any.
        if (raw) {
            raw.forEachJointHandle((handle) => {
                this.map.set(handle, _impulse_joint__WEBPACK_IMPORTED_MODULE_2__.ImpulseJoint.newTyped(raw, null, handle));
            });
        }
    }
    /**
     * Release the WASM memory occupied by this joint set.
     */
    free() {
        this.raw.free();
        this.raw = undefined;
        this.map.clear();
        this.map = undefined;
    }
    /** @internal */
    finalizeDeserialization(bodies) {
        this.map.forEach((joint) => joint.finalizeDeserialization(bodies));
    }
    /**
     * Creates a new joint and return its integer handle.
     *
     * @param bodies - The set of rigid-bodies containing the bodies the joint is attached to.
     * @param desc - The joint's parameters.
     * @param parent1 - The handle of the first rigid-body this joint is attached to.
     * @param parent2 - The handle of the second rigid-body this joint is attached to.
     * @param wakeUp - Should the attached rigid-bodies be awakened?
     */
    createJoint(bodies, desc, parent1, parent2, wakeUp) {
        const rawParams = desc.intoRaw();
        const handle = this.raw.createJoint(rawParams, parent1, parent2, wakeUp);
        rawParams.free();
        let joint = _impulse_joint__WEBPACK_IMPORTED_MODULE_2__.ImpulseJoint.newTyped(this.raw, bodies, handle);
        this.map.set(handle, joint);
        return joint;
    }
    /**
     * Remove a joint from this set.
     *
     * @param handle - The integer handle of the joint.
     * @param wakeUp - If `true`, the rigid-bodies attached by the removed joint will be woken-up automatically.
     */
    remove(handle, wakeUp) {
        this.raw.remove(handle, wakeUp);
        this.unmap(handle);
    }
    /**
     * Calls the given closure with the integer handle of each impulse joint attached to this rigid-body.
     *
     * @param f - The closure called with the integer handle of each impulse joint attached to the rigid-body.
     */
    forEachJointHandleAttachedToRigidBody(handle, f) {
        this.raw.forEachJointAttachedToRigidBody(handle, f);
    }
    /**
     * Internal function, do not call directly.
     * @param handle
     */
    unmap(handle) {
        this.map.delete(handle);
    }
    /**
     * The number of joints on this set.
     */
    len() {
        return this.map.len();
    }
    /**
     * Does this set contain a joint with the given handle?
     *
     * @param handle - The joint handle to check.
     */
    contains(handle) {
        return this.get(handle) != null;
    }
    /**
     * Gets the joint with the given handle.
     *
     * Returns `null` if no joint with the specified handle exists.
     *
     * @param handle - The integer handle of the joint to retrieve.
     */
    get(handle) {
        return this.map.get(handle);
    }
    /**
     * Applies the given closure to each joint contained by this set.
     *
     * @param f - The closure to apply.
     */
    forEach(f) {
        this.map.forEach(f);
    }
    /**
     * Gets all joints in the list.
     *
     * @returns joint list.
     */
    getAll() {
        return this.map.getAll();
    }
}
//# sourceMappingURL=impulse_joint_set.js.map

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/dynamics/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/dynamics/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CCDSolver": () => (/* reexport safe */ _ccd_solver__WEBPACK_IMPORTED_MODULE_8__.CCDSolver),
/* harmony export */   "CoefficientCombineRule": () => (/* reexport safe */ _coefficient_combine_rule__WEBPACK_IMPORTED_MODULE_7__.CoefficientCombineRule),
/* harmony export */   "FixedImpulseJoint": () => (/* reexport safe */ _impulse_joint__WEBPACK_IMPORTED_MODULE_3__.FixedImpulseJoint),
/* harmony export */   "FixedMultibodyJoint": () => (/* reexport safe */ _multibody_joint__WEBPACK_IMPORTED_MODULE_5__.FixedMultibodyJoint),
/* harmony export */   "ImpulseJoint": () => (/* reexport safe */ _impulse_joint__WEBPACK_IMPORTED_MODULE_3__.ImpulseJoint),
/* harmony export */   "ImpulseJointSet": () => (/* reexport safe */ _impulse_joint_set__WEBPACK_IMPORTED_MODULE_4__.ImpulseJointSet),
/* harmony export */   "IntegrationParameters": () => (/* reexport safe */ _integration_parameters__WEBPACK_IMPORTED_MODULE_2__.IntegrationParameters),
/* harmony export */   "IslandManager": () => (/* reexport safe */ _island_manager__WEBPACK_IMPORTED_MODULE_9__.IslandManager),
/* harmony export */   "JointData": () => (/* reexport safe */ _impulse_joint__WEBPACK_IMPORTED_MODULE_3__.JointData),
/* harmony export */   "JointType": () => (/* reexport safe */ _impulse_joint__WEBPACK_IMPORTED_MODULE_3__.JointType),
/* harmony export */   "MotorModel": () => (/* reexport safe */ _impulse_joint__WEBPACK_IMPORTED_MODULE_3__.MotorModel),
/* harmony export */   "MultibodyJoint": () => (/* reexport safe */ _multibody_joint__WEBPACK_IMPORTED_MODULE_5__.MultibodyJoint),
/* harmony export */   "MultibodyJointSet": () => (/* reexport safe */ _multibody_joint_set__WEBPACK_IMPORTED_MODULE_6__.MultibodyJointSet),
/* harmony export */   "PrismaticImpulseJoint": () => (/* reexport safe */ _impulse_joint__WEBPACK_IMPORTED_MODULE_3__.PrismaticImpulseJoint),
/* harmony export */   "PrismaticMultibodyJoint": () => (/* reexport safe */ _multibody_joint__WEBPACK_IMPORTED_MODULE_5__.PrismaticMultibodyJoint),
/* harmony export */   "RevoluteImpulseJoint": () => (/* reexport safe */ _impulse_joint__WEBPACK_IMPORTED_MODULE_3__.RevoluteImpulseJoint),
/* harmony export */   "RevoluteMultibodyJoint": () => (/* reexport safe */ _multibody_joint__WEBPACK_IMPORTED_MODULE_5__.RevoluteMultibodyJoint),
/* harmony export */   "RigidBody": () => (/* reexport safe */ _rigid_body__WEBPACK_IMPORTED_MODULE_0__.RigidBody),
/* harmony export */   "RigidBodyDesc": () => (/* reexport safe */ _rigid_body__WEBPACK_IMPORTED_MODULE_0__.RigidBodyDesc),
/* harmony export */   "RigidBodySet": () => (/* reexport safe */ _rigid_body_set__WEBPACK_IMPORTED_MODULE_1__.RigidBodySet),
/* harmony export */   "RigidBodyType": () => (/* reexport safe */ _rigid_body__WEBPACK_IMPORTED_MODULE_0__.RigidBodyType),
/* harmony export */   "UnitImpulseJoint": () => (/* reexport safe */ _impulse_joint__WEBPACK_IMPORTED_MODULE_3__.UnitImpulseJoint),
/* harmony export */   "UnitMultibodyJoint": () => (/* reexport safe */ _multibody_joint__WEBPACK_IMPORTED_MODULE_5__.UnitMultibodyJoint)
/* harmony export */ });
/* harmony import */ var _rigid_body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rigid_body */ "./node_modules/@dimforge/rapier2d/dynamics/rigid_body.js");
/* harmony import */ var _rigid_body_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rigid_body_set */ "./node_modules/@dimforge/rapier2d/dynamics/rigid_body_set.js");
/* harmony import */ var _integration_parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./integration_parameters */ "./node_modules/@dimforge/rapier2d/dynamics/integration_parameters.js");
/* harmony import */ var _impulse_joint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./impulse_joint */ "./node_modules/@dimforge/rapier2d/dynamics/impulse_joint.js");
/* harmony import */ var _impulse_joint_set__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./impulse_joint_set */ "./node_modules/@dimforge/rapier2d/dynamics/impulse_joint_set.js");
/* harmony import */ var _multibody_joint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./multibody_joint */ "./node_modules/@dimforge/rapier2d/dynamics/multibody_joint.js");
/* harmony import */ var _multibody_joint_set__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./multibody_joint_set */ "./node_modules/@dimforge/rapier2d/dynamics/multibody_joint_set.js");
/* harmony import */ var _coefficient_combine_rule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./coefficient_combine_rule */ "./node_modules/@dimforge/rapier2d/dynamics/coefficient_combine_rule.js");
/* harmony import */ var _ccd_solver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ccd_solver */ "./node_modules/@dimforge/rapier2d/dynamics/ccd_solver.js");
/* harmony import */ var _island_manager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./island_manager */ "./node_modules/@dimforge/rapier2d/dynamics/island_manager.js");










//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/dynamics/integration_parameters.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/dynamics/integration_parameters.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntegrationParameters": () => (/* binding */ IntegrationParameters)
/* harmony export */ });
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../raw */ "./node_modules/@dimforge/rapier2d/rapier_wasm2d_bg.js");

class IntegrationParameters {
    constructor(raw) {
        this.raw = raw || new _raw__WEBPACK_IMPORTED_MODULE_0__.RawIntegrationParameters();
    }
    /**
     * Free the WASM memory used by these integration parameters.
     */
    free() {
        this.raw.free();
        this.raw = undefined;
    }
    /**
     * The timestep length (default: `1.0 / 60.0`)
     */
    get dt() {
        return this.raw.dt;
    }
    /**
     * The Error Reduction Parameter in `[0, 1]` is the proportion of
     * the positional error to be corrected at each time step (default: `0.2`).
     */
    get erp() {
        return this.raw.erp;
    }
    /**
     * Amount of penetration the engine wont attempt to correct (default: `0.001m`).
     */
    get allowedLinearError() {
        return this.raw.allowedLinearError;
    }
    /**
     * The maximal distance separating two objects that will generate predictive contacts (default: `0.002`).
     */
    get predictionDistance() {
        return this.raw.predictionDistance;
    }
    /**
     * Maximum number of iterations performed by the velocity constraints solver (default: `4`).
     */
    get maxVelocityIterations() {
        return this.raw.maxVelocityIterations;
    }
    /**
     * Maximum number of friction iterations performed by the position-based constraints solver (default: `1`).
     */
    get maxVelocityFrictionIterations() {
        return this.raw.maxVelocityFrictionIterations;
    }
    /**
     * Maximum number of stabilization iterations performed by the position-based constraints solver (default: `1`).
     */
    get maxStabilizationIterations() {
        return this.raw.maxStabilizationIterations;
    }
    /**
     * Minimum number of dynamic bodies in each active island (default: `128`).
     */
    get minIslandSize() {
        return this.raw.minIslandSize;
    }
    /**
     * Maximum number of substeps performed by the  solver (default: `1`).
     */
    get maxCcdSubsteps() {
        return this.raw.maxCcdSubsteps;
    }
    set dt(value) {
        this.raw.dt = value;
    }
    set erp(value) {
        this.raw.erp = value;
    }
    set allowedLinearError(value) {
        this.raw.allowedLinearError = value;
    }
    set predictionDistance(value) {
        this.raw.predictionDistance = value;
    }
    set maxVelocityIterations(value) {
        this.raw.maxVelocityIterations = value;
    }
    set maxVelocityFrictionIterations(value) {
        this.raw.maxVelocityFrictionIterations = value;
    }
    set maxStabilizationIterations(value) {
        this.raw.maxStabilizationIterations = value;
    }
    set minIslandSize(value) {
        this.raw.minIslandSize = value;
    }
    set maxCcdSubsteps(value) {
        this.raw.maxCcdSubsteps = value;
    }
}
//# sourceMappingURL=integration_parameters.js.map

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/dynamics/island_manager.js":
/*!********************************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/dynamics/island_manager.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IslandManager": () => (/* binding */ IslandManager)
/* harmony export */ });
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../raw */ "./node_modules/@dimforge/rapier2d/rapier_wasm2d_bg.js");

/**
 * The CCD solver responsible for resolving Continuous Collision Detection.
 *
 * To avoid leaking WASM resources, this MUST be freed manually with `ccdSolver.free()`
 * once you are done using it.
 */
class IslandManager {
    constructor(raw) {
        this.raw = raw || new _raw__WEBPACK_IMPORTED_MODULE_0__.RawIslandManager();
    }
    /**
     * Release the WASM memory occupied by this narrow-phase.
     */
    free() {
        this.raw.free();
        this.raw = undefined;
    }
    /**
     * Applies the given closure to the handle of each active rigid-bodies contained by this set.
     *
     * A rigid-body is active if it is not sleeping, i.e., if it moved recently.
     *
     * @param f - The closure to apply.
     */
    forEachActiveRigidBodyHandle(f) {
        this.raw.forEachActiveRigidBodyHandle(f);
    }
}
//# sourceMappingURL=island_manager.js.map

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/dynamics/multibody_joint.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/dynamics/multibody_joint.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FixedMultibodyJoint": () => (/* binding */ FixedMultibodyJoint),
/* harmony export */   "MultibodyJoint": () => (/* binding */ MultibodyJoint),
/* harmony export */   "PrismaticMultibodyJoint": () => (/* binding */ PrismaticMultibodyJoint),
/* harmony export */   "RevoluteMultibodyJoint": () => (/* binding */ RevoluteMultibodyJoint),
/* harmony export */   "UnitMultibodyJoint": () => (/* binding */ UnitMultibodyJoint)
/* harmony export */ });
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../raw */ "./node_modules/@dimforge/rapier2d/rapier_wasm2d_bg.js");
/* harmony import */ var _impulse_joint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./impulse_joint */ "./node_modules/@dimforge/rapier2d/dynamics/impulse_joint.js");


class MultibodyJoint {
    constructor(rawSet, handle) {
        this.rawSet = rawSet;
        this.handle = handle;
    }
    static newTyped(rawSet, handle) {
        switch (rawSet.jointType(handle)) {
            case _impulse_joint__WEBPACK_IMPORTED_MODULE_0__.JointType.Revolute:
                return new RevoluteMultibodyJoint(rawSet, handle);
            case _impulse_joint__WEBPACK_IMPORTED_MODULE_0__.JointType.Prismatic:
                return new PrismaticMultibodyJoint(rawSet, handle);
            case _impulse_joint__WEBPACK_IMPORTED_MODULE_0__.JointType.Fixed:
                return new FixedMultibodyJoint(rawSet, handle);
            default:
                return new MultibodyJoint(rawSet, handle);
        }
    }
    /**
     * Checks if this joint is still valid (i.e. that it has
     * not been deleted from the joint set yet).
     */
    isValid() {
        return this.rawSet.contains(this.handle);
    }
}
class UnitMultibodyJoint extends MultibodyJoint {
}
class FixedMultibodyJoint extends MultibodyJoint {
}
class PrismaticMultibodyJoint extends UnitMultibodyJoint {
    rawAxis() {
        return _raw__WEBPACK_IMPORTED_MODULE_1__.RawJointAxis.X;
    }
}
class RevoluteMultibodyJoint extends UnitMultibodyJoint {
    rawAxis() {
        return _raw__WEBPACK_IMPORTED_MODULE_1__.RawJointAxis.AngX;
    }
}
//# sourceMappingURL=multibody_joint.js.map

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/dynamics/multibody_joint_set.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/dynamics/multibody_joint_set.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultibodyJointSet": () => (/* binding */ MultibodyJointSet)
/* harmony export */ });
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../raw */ "./node_modules/@dimforge/rapier2d/rapier_wasm2d_bg.js");
/* harmony import */ var _coarena__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../coarena */ "./node_modules/@dimforge/rapier2d/coarena.js");
/* harmony import */ var _multibody_joint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multibody_joint */ "./node_modules/@dimforge/rapier2d/dynamics/multibody_joint.js");



/**
 * A set of joints.
 *
 * To avoid leaking WASM resources, this MUST be freed manually with `jointSet.free()`
 * once you are done using it (and all the joints it created).
 */
class MultibodyJointSet {
    constructor(raw) {
        this.raw = raw || new _raw__WEBPACK_IMPORTED_MODULE_0__.RawMultibodyJointSet();
        this.map = new _coarena__WEBPACK_IMPORTED_MODULE_1__.Coarena();
        // Initialize the map with the existing elements, if any.
        if (raw) {
            raw.forEachJointHandle((handle) => {
                this.map.set(handle, _multibody_joint__WEBPACK_IMPORTED_MODULE_2__.MultibodyJoint.newTyped(this.raw, handle));
            });
        }
    }
    /**
     * Release the WASM memory occupied by this joint set.
     */
    free() {
        this.raw.free();
        this.raw = undefined;
        this.map.clear();
        this.map = undefined;
    }
    /**
     * Creates a new joint and return its integer handle.
     *
     * @param desc - The joint's parameters.
     * @param parent1 - The handle of the first rigid-body this joint is attached to.
     * @param parent2 - The handle of the second rigid-body this joint is attached to.
     * @param wakeUp - Should the attached rigid-bodies be awakened?
     */
    createJoint(desc, parent1, parent2, wakeUp) {
        const rawParams = desc.intoRaw();
        const handle = this.raw.createJoint(rawParams, parent1, parent2, wakeUp);
        rawParams.free();
        let joint = _multibody_joint__WEBPACK_IMPORTED_MODULE_2__.MultibodyJoint.newTyped(this.raw, handle);
        this.map.set(handle, joint);
        return joint;
    }
    /**
     * Remove a joint from this set.
     *
     * @param handle - The integer handle of the joint.
     * @param wake_up - If `true`, the rigid-bodies attached by the removed joint will be woken-up automatically.
     */
    remove(handle, wake_up) {
        this.raw.remove(handle, wake_up);
        this.map.delete(handle);
    }
    /**
     * Internal function, do not call directly.
     * @param handle
     */
    unmap(handle) {
        this.map.delete(handle);
    }
    /**
     * The number of joints on this set.
     */
    len() {
        return this.map.len();
    }
    /**
     * Does this set contain a joint with the given handle?
     *
     * @param handle - The joint handle to check.
     */
    contains(handle) {
        return this.get(handle) != null;
    }
    /**
     * Gets the joint with the given handle.
     *
     * Returns `null` if no joint with the specified handle exists.
     *
     * @param handle - The integer handle of the joint to retrieve.
     */
    get(handle) {
        return this.map.get(handle);
    }
    /**
     * Applies the given closure to each joint contained by this set.
     *
     * @param f - The closure to apply.
     */
    forEach(f) {
        this.map.forEach(f);
    }
    /**
     * Calls the given closure with the integer handle of each multibody joint attached to this rigid-body.
     *
     * @param f - The closure called with the integer handle of each multibody joint attached to the rigid-body.
     */
    forEachJointHandleAttachedToRigidBody(handle, f) {
        this.raw.forEachJointAttachedToRigidBody(handle, f);
    }
    /**
     * Gets all joints in the list.
     *
     * @returns joint list.
     */
    getAll() {
        return this.map.getAll();
    }
}
//# sourceMappingURL=multibody_joint_set.js.map

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/dynamics/rigid_body.js":
/*!****************************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/dynamics/rigid_body.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RigidBody": () => (/* binding */ RigidBody),
/* harmony export */   "RigidBodyDesc": () => (/* binding */ RigidBodyDesc),
/* harmony export */   "RigidBodyType": () => (/* binding */ RigidBodyType)
/* harmony export */ });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/@dimforge/rapier2d/math.js");

/**
 * The simulation status of a rigid-body.
 */
// TODO: rename this to RigidBodyType
var RigidBodyType;
(function (RigidBodyType) {
    /**
     * A `RigidBodyType::Dynamic` body can be affected by all external forces.
     */
    RigidBodyType[RigidBodyType["Dynamic"] = 0] = "Dynamic";
    /**
     * A `RigidBodyType::Fixed` body cannot be affected by external forces.
     */
    RigidBodyType[RigidBodyType["Fixed"] = 1] = "Fixed";
    /**
     * A `RigidBodyType::KinematicPositionBased` body cannot be affected by any external forces but can be controlled
     * by the user at the position level while keeping realistic one-way interaction with dynamic bodies.
     *
     * One-way interaction means that a kinematic body can push a dynamic body, but a kinematic body
     * cannot be pushed by anything. In other words, the trajectory of a kinematic body can only be
     * modified by the user and is independent from any contact or joint it is involved in.
     */
    RigidBodyType[RigidBodyType["KinematicPositionBased"] = 2] = "KinematicPositionBased";
    /**
     * A `RigidBodyType::KinematicVelocityBased` body cannot be affected by any external forces but can be controlled
     * by the user at the velocity level while keeping realistic one-way interaction with dynamic bodies.
     *
     * One-way interaction means that a kinematic body can push a dynamic body, but a kinematic body
     * cannot be pushed by anything. In other words, the trajectory of a kinematic body can only be
     * modified by the user and is independent from any contact or joint it is involved in.
     */
    RigidBodyType[RigidBodyType["KinematicVelocityBased"] = 3] = "KinematicVelocityBased";
})(RigidBodyType || (RigidBodyType = {}));
/**
 * A rigid-body.
 */
class RigidBody {
    constructor(rawSet, colliderSet, handle) {
        this.rawSet = rawSet;
        this.colliderSet = colliderSet;
        this.handle = handle;
    }
    /** @internal */
    finalizeDeserialization(colliderSet) {
        this.colliderSet = colliderSet;
    }
    /**
     * Checks if this rigid-body is still valid (i.e. that it has
     * not been deleted from the rigid-body set yet.
     */
    isValid() {
        return this.rawSet.contains(this.handle);
    }
    /**
     * Locks or unlocks the ability of this rigid-body to translate.
     *
     * @param locked - If `true`, this rigid-body will no longer translate due to forces and impulses.
     * @param wakeUp - If `true`, this rigid-body will be automatically awaken if it is currently asleep.
     */
    lockTranslations(locked, wakeUp) {
        return this.rawSet.rbLockTranslations(this.handle, locked, wakeUp);
    }
    /**
     * Locks or unlocks the ability of this rigid-body to rotate.
     *
     * @param locked - If `true`, this rigid-body will no longer rotate due to torques and impulses.
     * @param wakeUp - If `true`, this rigid-body will be automatically awaken if it is currently asleep.
     */
    lockRotations(locked, wakeUp) {
        return this.rawSet.rbLockRotations(this.handle, locked, wakeUp);
    }
    // #if DIM2
    /**
     * Locks or unlocks the ability of this rigid-body to translation along individual coordinate axes.
     *
     * @param enableX - If `false`, this rigid-body will no longer rotate due to torques and impulses, along the X coordinate axis.
     * @param enableY - If `false`, this rigid-body will no longer rotate due to torques and impulses, along the Y coordinate axis.
     * @param wakeUp - If `true`, this rigid-body will be automatically awaken if it is currently asleep.
     */
    restrictTranslations(enableX, enableY, wakeUp) {
        return this.rawSet.rbRestrictTranslations(this.handle, enableX, enableY, wakeUp);
    }
    // #endif
    /**
     * The dominance group, in [-127, +127] this rigid-body is part of.
     */
    dominanceGroup() {
        return this.rawSet.rbDominanceGroup(this.handle);
    }
    /**
     * Sets the dominance group of this rigid-body.
     *
     * @param group - The dominance group of this rigid-body. Must be a signed integer in the range [-127, +127].
     */
    setDominanceGroup(group) {
        this.rawSet.rbSetDominanceGroup(this.handle, group);
    }
    /**
     * Enable or disable CCD (Continuous Collision Detection) for this rigid-body.
     *
     * @param enabled - If `true`, CCD will be enabled for this rigid-body.
     */
    enableCcd(enabled) {
        this.rawSet.rbEnableCcd(this.handle, enabled);
    }
    /**
     * The world-space translation of this rigid-body.
     */
    translation() {
        let res = this.rawSet.rbTranslation(this.handle);
        return _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(res);
    }
    /**
     * The world-space orientation of this rigid-body.
     */
    rotation() {
        let res = this.rawSet.rbRotation(this.handle);
        return _math__WEBPACK_IMPORTED_MODULE_0__.RotationOps.fromRaw(res);
    }
    /**
     * The world-space next translation of this rigid-body.
     *
     * If this rigid-body is kinematic this value is set by the `setNextKinematicTranslation`
     * method and is used for estimating the kinematic body velocity at the next timestep.
     * For non-kinematic bodies, this value is currently unspecified.
     */
    nextTranslation() {
        let res = this.rawSet.rbNextTranslation(this.handle);
        return _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(res);
    }
    /**
     * The world-space next orientation of this rigid-body.
     *
     * If this rigid-body is kinematic this value is set by the `setNextKinematicRotation`
     * method and is used for estimating the kinematic body velocity at the next timestep.
     * For non-kinematic bodies, this value is currently unspecified.
     */
    nextRotation() {
        let res = this.rawSet.rbNextRotation(this.handle);
        return _math__WEBPACK_IMPORTED_MODULE_0__.RotationOps.fromRaw(res);
    }
    /**
     * Sets the translation of this rigid-body.
     *
     * @param tra - The world-space position of the rigid-body.
     * @param wakeUp - Forces the rigid-body to wake-up so it is properly affected by forces if it
     *                 wasn't moving before modifying its position.
     */
    setTranslation(tra, wakeUp) {
        // #if DIM2
        this.rawSet.rbSetTranslation(this.handle, tra.x, tra.y, wakeUp);
        // #endif
    }
    /**
     * Sets the linear velocity fo this rigid-body.
     *
     * @param vel - The linear velocity to set.
     * @param wakeUp - Forces the rigid-body to wake-up if it was asleep.
     */
    setLinvel(vel, wakeUp) {
        let rawVel = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(vel);
        this.rawSet.rbSetLinvel(this.handle, rawVel, wakeUp);
        rawVel.free();
    }
    /**
     * The scale factor applied to the gravity affecting
     * this rigid-body.
     */
    gravityScale() {
        return this.rawSet.rbGravityScale(this.handle);
    }
    /**
     * Sets the scale factor applied to the gravity affecting
     * this rigid-body.
     *
     * @param factor - The scale factor to set. A value of 0.0 means
     *   that this rigid-body will on longer be affected by gravity.
     * @param wakeUp - Forces the rigid-body to wake-up if it was asleep.
     */
    setGravityScale(factor, wakeUp) {
        this.rawSet.rbSetGravityScale(this.handle, factor, wakeUp);
    }
    // #if DIM2
    /**
     * Sets the rotation angle of this rigid-body.
     *
     * @param angle - The rotation angle, in radians.
     * @param wakeUp - Forces the rigid-body to wake-up so it is properly affected by forces if it
     * wasn't moving before modifying its position.
     */
    setRotation(angle, wakeUp) {
        this.rawSet.rbSetRotation(this.handle, angle, wakeUp);
    }
    /**
     * Sets the angular velocity fo this rigid-body.
     *
     * @param vel - The angular velocity to set.
     * @param wakeUp - Forces the rigid-body to wake-up if it was asleep.
     */
    setAngvel(vel, wakeUp) {
        this.rawSet.rbSetAngvel(this.handle, vel, wakeUp);
    }
    // #endif
    /**
     * If this rigid body is kinematic, sets its future translation after the next timestep integration.
     *
     * This should be used instead of `rigidBody.setTranslation` to make the dynamic object
     * interacting with this kinematic body behave as expected. Internally, Rapier will compute
     * an artificial velocity for this rigid-body from its current position and its next kinematic
     * position. This velocity will be used to compute forces on dynamic bodies interacting with
     * this body.
     *
     * @param t - The kinematic translation to set.
     */
    setNextKinematicTranslation(t) {
        // #if DIM2
        this.rawSet.rbSetNextKinematicTranslation(this.handle, t.x, t.y);
        // #endif
    }
    // #if DIM2
    /**
     * If this rigid body is kinematic, sets its future rotation after the next timestep integration.
     *
     * This should be used instead of `rigidBody.setRotation` to make the dynamic object
     * interacting with this kinematic body behave as expected. Internally, Rapier will compute
     * an artificial velocity for this rigid-body from its current position and its next kinematic
     * position. This velocity will be used to compute forces on dynamic bodies interacting with
     * this body.
     *
     * @param angle - The kinematic rotation angle, in radians.
     */
    setNextKinematicRotation(angle) {
        this.rawSet.rbSetNextKinematicRotation(this.handle, angle);
    }
    // #endif
    /**
     * The linear velocity of this rigid-body.
     */
    linvel() {
        return _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(this.rawSet.rbLinvel(this.handle));
    }
    // #if DIM2
    /**
     * The angular velocity of this rigid-body.
     */
    angvel() {
        return this.rawSet.rbAngvel(this.handle);
    }
    // #endif
    /**
     * The mass of this rigid-body.
     */
    mass() {
        return this.rawSet.rbMass(this.handle);
    }
    /**
     * Put this rigid body to sleep.
     *
     * A sleeping body no longer moves and is no longer simulated by the physics engine unless
     * it is waken up. It can be woken manually with `this.wakeUp()` or automatically due to
     * external forces like contacts.
     */
    sleep() {
        this.rawSet.rbSleep(this.handle);
    }
    /**
     * Wakes this rigid-body up.
     *
     * A dynamic rigid-body that does not move during several consecutive frames will
     * be put to sleep by the physics engine, i.e., it will stop being simulated in order
     * to avoid useless computations.
     * This methods forces a sleeping rigid-body to wake-up. This is useful, e.g., before modifying
     * the position of a dynamic body so that it is properly simulated afterwards.
     */
    wakeUp() {
        this.rawSet.rbWakeUp(this.handle);
    }
    /**
     * Is CCD enabled for this rigid-body?
     */
    isCcdEnabled() {
        this.rawSet.rbIsCcdEnabled(this.handle);
    }
    /**
     * The number of colliders attached to this rigid-body.
     */
    numColliders() {
        return this.rawSet.rbNumColliders(this.handle);
    }
    /**
     * Retrieves the `i-th` collider attached to this rigid-body.
     *
     * @param i - The index of the collider to retrieve. Must be a number in `[0, this.numColliders()[`.
     *         This index is **not** the same as the unique identifier of the collider.
     */
    collider(i) {
        return this.colliderSet.get(this.rawSet.rbCollider(this.handle, i));
    }
    /**
     * The status of this rigid-body: static, dynamic, or kinematic.
     */
    bodyType() {
        return this.rawSet.rbBodyType(this.handle);
    }
    /**
     * Set a new status for this rigid-body: static, dynamic, or kinematic.
     */
    setBodyType(type) {
        return this.rawSet.rbSetBodyType(this.handle, type);
    }
    /**
     * Is this rigid-body sleeping?
     */
    isSleeping() {
        return this.rawSet.rbIsSleeping(this.handle);
    }
    /**
     * Is the velocity of this rigid-body not zero?
     */
    isMoving() {
        return this.rawSet.rbIsMoving(this.handle);
    }
    /**
     * Is this rigid-body static?
     */
    isFixed() {
        return this.rawSet.rbIsFixed(this.handle);
    }
    /**
     * Is this rigid-body kinematic?
     */
    isKinematic() {
        return this.rawSet.rbIsKinematic(this.handle);
    }
    /**
     * Is this rigid-body dynamic?
     */
    isDynamic() {
        return this.rawSet.rbIsDynamic(this.handle);
    }
    /**
     * The linear damping coefficient of this rigid-body.
     */
    linearDamping() {
        return this.rawSet.rbLinearDamping(this.handle);
    }
    /**
     * The angular damping coefficient of this rigid-body.
     */
    angularDamping() {
        return this.rawSet.rbAngularDamping(this.handle);
    }
    /**
     * Sets the linear damping factor applied to this rigid-body.
     *
     * @param factor - The damping factor to set.
     */
    setLinearDamping(factor) {
        this.rawSet.rbSetLinearDamping(this.handle, factor);
    }
    /**
     * Sets the linear damping factor applied to this rigid-body.
     *
     * @param factor - The damping factor to set.
     */
    setAngularDamping(factor) {
        this.rawSet.rbSetAngularDamping(this.handle, factor);
    }
    /**
     * Resets to zero the user forces (but not torques) applied to this rigid-body.
     *
     * @param wakeUp - should the rigid-body be automatically woken-up?
     */
    resetForces(wakeUp) {
        this.rawSet.rbResetForces(this.handle, wakeUp);
    }
    /**
     * Resets to zero the user torques applied to this rigid-body.
     *
     * @param wakeUp - should the rigid-body be automatically woken-up?
     */
    resetTorques(wakeUp) {
        this.rawSet.rbResetTorques(this.handle, wakeUp);
    }
    /**
     * Adds a force at the center-of-mass of this rigid-body.
     *
     * @param force - the world-space force to add to the rigid-body.
     * @param wakeUp - should the rigid-body be automatically woken-up?
     */
    addForce(force, wakeUp) {
        const rawForce = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(force);
        this.rawSet.rbAddForce(this.handle, rawForce, wakeUp);
        rawForce.free();
    }
    /**
     * Applies an impulse at the center-of-mass of this rigid-body.
     *
     * @param impulse - the world-space impulse to apply on the rigid-body.
     * @param wakeUp - should the rigid-body be automatically woken-up?
     */
    applyImpulse(impulse, wakeUp) {
        const rawImpulse = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(impulse);
        this.rawSet.rbApplyImpulse(this.handle, rawImpulse, wakeUp);
        rawImpulse.free();
    }
    // #if DIM2
    /**
     * Adds a torque at the center-of-mass of this rigid-body.
     *
     * @param torque - the torque to add to the rigid-body.
     * @param wakeUp - should the rigid-body be automatically woken-up?
     */
    addTorque(torque, wakeUp) {
        this.rawSet.rbAddTorque(this.handle, torque, wakeUp);
    }
    // #endif
    // #if DIM2
    /**
     * Applies an impulsive torque at the center-of-mass of this rigid-body.
     *
     * @param torqueImpulse - the torque impulse to apply on the rigid-body.
     * @param wakeUp - should the rigid-body be automatically woken-up?
     */
    applyTorqueImpulse(torqueImpulse, wakeUp) {
        this.rawSet.rbApplyTorqueImpulse(this.handle, torqueImpulse, wakeUp);
    }
    // #endif
    /**
     * Adds a force at the given world-space point of this rigid-body.
     *
     * @param force - the world-space force to add to the rigid-body.
     * @param point - the world-space point where the impulse is to be applied on the rigid-body.
     * @param wakeUp - should the rigid-body be automatically woken-up?
     */
    addForceAtPoint(force, point, wakeUp) {
        const rawForce = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(force);
        const rawPoint = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(point);
        this.rawSet.rbAddForceAtPoint(this.handle, rawForce, rawPoint, wakeUp);
        rawForce.free();
        rawPoint.free();
    }
    /**
     * Applies an impulse at the given world-space point of this rigid-body.
     *
     * @param impulse - the world-space impulse to apply on the rigid-body.
     * @param point - the world-space point where the impulse is to be applied on the rigid-body.
     * @param wakeUp - should the rigid-body be automatically woken-up?
     */
    applyImpulseAtPoint(impulse, point, wakeUp) {
        const rawImpulse = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(impulse);
        const rawPoint = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(point);
        this.rawSet.rbApplyImpulseAtPoint(this.handle, rawImpulse, rawPoint, wakeUp);
        rawImpulse.free();
        rawPoint.free();
    }
}
class RigidBodyDesc {
    constructor(status) {
        this.status = status;
        this.translation = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.zeros();
        this.rotation = _math__WEBPACK_IMPORTED_MODULE_0__.RotationOps.identity();
        this.gravityScale = 1.0;
        this.linvel = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.zeros();
        this.mass = 0.0;
        this.centerOfMass = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.zeros();
        this.translationsEnabledX = true;
        this.translationsEnabledY = true;
        // #if DIM2
        this.angvel = 0.0;
        this.principalAngularInertia = 0.0;
        this.rotationsEnabled = true;
        // #endif
        this.linearDamping = 0.0;
        this.angularDamping = 0.0;
        this.canSleep = true;
        this.sleeping = false;
        this.ccdEnabled = false;
        this.dominanceGroup = 0;
    }
    /**
     * A rigid-body descriptor used to build a dynamic rigid-body.
     */
    static dynamic() {
        return new RigidBodyDesc(RigidBodyType.Dynamic);
    }
    /**
     * A rigid-body descriptor used to build a position-based kinematic rigid-body.
     */
    static kinematicPositionBased() {
        return new RigidBodyDesc(RigidBodyType.KinematicPositionBased);
    }
    /**
     * A rigid-body descriptor used to build a velocity-based kinematic rigid-body.
     */
    static kinematicVelocityBased() {
        return new RigidBodyDesc(RigidBodyType.KinematicVelocityBased);
    }
    /**
     * A rigid-body descriptor used to build a fixed rigid-body.
     */
    static fixed() {
        return new RigidBodyDesc(RigidBodyType.Fixed);
    }
    /**
     * A rigid-body descriptor used to build a dynamic rigid-body.
     *
     * @deprecated The method has been renamed to `.dynamic()`.
     */
    static newDynamic() {
        return new RigidBodyDesc(RigidBodyType.Dynamic);
    }
    /**
     * A rigid-body descriptor used to build a position-based kinematic rigid-body.
     *
     * @deprecated The method has been renamed to `.kinematicPositionBased()`.
     */
    static newKinematicPositionBased() {
        return new RigidBodyDesc(RigidBodyType.KinematicPositionBased);
    }
    /**
     * A rigid-body descriptor used to build a velocity-based kinematic rigid-body.
     *
     * @deprecated The method has been renamed to `.kinematicVelocityBased()`.
     */
    static newKinematicVelocityBased() {
        return new RigidBodyDesc(RigidBodyType.KinematicVelocityBased);
    }
    /**
     * A rigid-body descriptor used to build a fixed rigid-body.
     *
     * @deprecated The method has been renamed to `.fixed()`.
     */
    static newStatic() {
        return new RigidBodyDesc(RigidBodyType.Fixed);
    }
    setDominanceGroup(group) {
        this.dominanceGroup = group;
        return this;
    }
    // #if DIM2
    /**
     * Sets the initial translation of the rigid-body to create.
     */
    setTranslation(x, y) {
        if (typeof x != "number" || typeof y != "number")
            throw TypeError("The translation components must be numbers.");
        this.translation = { x: x, y: y };
        return this;
    }
    // #endif
    /**
     * Sets the initial rotation of the rigid-body to create.
     *
     * @param rot - The rotation to set.
     */
    setRotation(rot) {
        this.rotation = rot;
        return this;
    }
    /**
     * Sets the scale factor applied to the gravity affecting
     * the rigid-body being built.
     *
     * @param scale - The scale factor. Set this to `0.0` if the rigid-body
     *   needs to ignore gravity.
     */
    setGravityScale(scale) {
        this.gravityScale = scale;
        return this;
    }
    /**
     * Sets the initial mass of the rigid-body being built, before adding colliders' contributions.
     *
     * @param mass − The initial mass of the rigid-body to create.
     */
    setAdditionalMass(mass) {
        this.mass = mass;
        return this;
    }
    // #if DIM2
    /**
     * Sets the initial linear velocity of the rigid-body to create.
     *
     * @param x - The linear velocity to set along the `x` axis.
     * @param y - The linear velocity to set along the `y` axis.
     */
    setLinvel(x, y) {
        if (typeof x != "number" || typeof y != "number")
            throw TypeError("The linvel components must be numbers.");
        this.linvel = { x: x, y: y };
        return this;
    }
    /**
     * Sets the initial angular velocity of the rigid-body to create.
     *
     * @param vel - The angular velocity to set.
     */
    setAngvel(vel) {
        this.angvel = vel;
        return this;
    }
    /**
     * Sets the mass properties of the rigid-body being built.
     *
     * Note that the final mass properties of the rigid-bodies depends
     * on the initial mass-properties of the rigid-body (set by this method)
     * to which is added the contributions of all the colliders with non-zero density
     * attached to this rigid-body.
     *
     * Therefore, if you want your provided mass properties to be the final
     * mass properties of your rigid-body, don't attach colliders to it, or
     * only attach colliders with densities equal to zero.
     *
     * @param mass − The initial mass of the rigid-body to create.
     * @param centerOfMass − The initial center-of-mass of the rigid-body to create.
     * @param principalAngularInertia − The initial principal angular inertia of the rigid-body to create.
     */
    setAdditionalMassProperties(mass, centerOfMass, principalAngularInertia) {
        this.mass = mass;
        this.centerOfMass = centerOfMass;
        this.principalAngularInertia = principalAngularInertia;
        return this;
    }
    /**
     * Sets the mass properties of the rigid-body being built.
     *
     * @param principalAngularInertia − The initial principal angular inertia of the rigid-body to create.
     */
    setAdditionalPrincipalAngularInertia(principalAngularInertia) {
        this.principalAngularInertia = principalAngularInertia;
        return this;
    }
    /**
     * Allow translation of this rigid-body only along specific axes.
     * @param translationsEnabledX - Are translations along the X axis enabled?
     * @param translationsEnabledY - Are translations along the y axis enabled?
     */
    restrictTranslations(translationsEnabledX, translationsEnabledY) {
        this.translationsEnabledX = translationsEnabledX;
        this.translationsEnabledY = translationsEnabledY;
        return this;
    }
    /**
     * Locks all translations that would have resulted from forces on
     * the created rigid-body.
     */
    lockTranslations() {
        return this.restrictTranslations(false, false);
    }
    /**
     * Locks all rotations that would have resulted from forces on
     * the created rigid-body.
     */
    lockRotations() {
        this.rotationsEnabled = false;
        return this;
    }
    // #endif
    /**
     * Sets the linear damping of the rigid-body to create.
     *
     * This will progressively slowdown the translational movement of the rigid-body.
     *
     * @param damping - The angular damping coefficient. Should be >= 0. The higher this
     *                  value is, the stronger the translational slowdown will be.
     */
    setLinearDamping(damping) {
        this.linearDamping = damping;
        return this;
    }
    /**
     * Sets the angular damping of the rigid-body to create.
     *
     * This will progressively slowdown the rotational movement of the rigid-body.
     *
     * @param damping - The angular damping coefficient. Should be >= 0. The higher this
     *                  value is, the stronger the rotational slowdown will be.
     */
    setAngularDamping(damping) {
        this.angularDamping = damping;
        return this;
    }
    /**
     * Sets whether or not the rigid-body to create can sleep.
     *
     * @param can - true if the rigid-body can sleep, false if it can't.
     */
    setCanSleep(can) {
        this.canSleep = can;
        return this;
    }
    /**
     * Sets whether or not the rigid-body is to be created asleep.
     *
     * @param can - true if the rigid-body should be in sleep, default false.
     */
    setSleeping(sleeping) {
        this.sleeping = sleeping;
        return this;
    }
    /**
     * Sets whether Continuous Collision Detection (CCD) is enabled for this rigid-body.
     *
     * @param enabled - true if the rigid-body has CCD enabled.
     */
    setCcdEnabled(enabled) {
        this.ccdEnabled = enabled;
        return this;
    }
    /**
     * Sets the user-defined object of this rigid-body.
     *
     * @param userData - The user-defined object to set.
     */
    setUserData(data) {
        this.userData = data;
        return this;
    }
}
//# sourceMappingURL=rigid_body.js.map

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/dynamics/rigid_body_set.js":
/*!********************************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/dynamics/rigid_body_set.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RigidBodySet": () => (/* binding */ RigidBodySet)
/* harmony export */ });
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../raw */ "./node_modules/@dimforge/rapier2d/rapier_wasm2d_bg.js");
/* harmony import */ var _coarena__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../coarena */ "./node_modules/@dimforge/rapier2d/coarena.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../math */ "./node_modules/@dimforge/rapier2d/math.js");
/* harmony import */ var _rigid_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rigid_body */ "./node_modules/@dimforge/rapier2d/dynamics/rigid_body.js");




/**
 * A set of rigid bodies that can be handled by a physics pipeline.
 *
 * To avoid leaking WASM resources, this MUST be freed manually with `rigidBodySet.free()`
 * once you are done using it (and all the rigid-bodies it created).
 */
class RigidBodySet {
    constructor(raw) {
        this.raw = raw || new _raw__WEBPACK_IMPORTED_MODULE_0__.RawRigidBodySet();
        this.map = new _coarena__WEBPACK_IMPORTED_MODULE_1__.Coarena();
        // deserialize
        if (raw) {
            raw.forEachRigidBodyHandle((handle) => {
                this.map.set(handle, new _rigid_body__WEBPACK_IMPORTED_MODULE_2__.RigidBody(raw, null, handle));
            });
        }
    }
    /**
     * Release the WASM memory occupied by this rigid-body set.
     */
    free() {
        this.raw.free();
        this.raw = undefined;
        this.map.clear();
        this.map = undefined;
    }
    /**
     * Internal method, do not call this explicitly.
     */
    finalizeDeserialization(colliderSet) {
        this.map.forEach((rb) => rb.finalizeDeserialization(colliderSet));
    }
    /**
     * Creates a new rigid-body and return its integer handle.
     *
     * @param desc - The description of the rigid-body to create.
     */
    createRigidBody(colliderSet, desc) {
        let rawTra = _math__WEBPACK_IMPORTED_MODULE_3__.VectorOps.intoRaw(desc.translation);
        let rawRot = _math__WEBPACK_IMPORTED_MODULE_3__.RotationOps.intoRaw(desc.rotation);
        let rawLv = _math__WEBPACK_IMPORTED_MODULE_3__.VectorOps.intoRaw(desc.linvel);
        let rawCom = _math__WEBPACK_IMPORTED_MODULE_3__.VectorOps.intoRaw(desc.centerOfMass);
        let handle = this.raw.createRigidBody(rawTra, rawRot, desc.gravityScale, desc.mass, rawCom, rawLv, 
        // #if DIM2
        desc.angvel, desc.principalAngularInertia, desc.translationsEnabledX, desc.translationsEnabledY, desc.rotationsEnabled, 
        // #endif
        desc.linearDamping, desc.angularDamping, desc.status, desc.canSleep, desc.sleeping, desc.ccdEnabled, desc.dominanceGroup);
        rawTra.free();
        rawRot.free();
        rawLv.free();
        rawCom.free();
        const body = new _rigid_body__WEBPACK_IMPORTED_MODULE_2__.RigidBody(this.raw, colliderSet, handle);
        body.userData = desc.userData;
        this.map.set(handle, body);
        return body;
    }
    /**
     * Removes a rigid-body from this set.
     *
     * This will also remove all the colliders and joints attached to the rigid-body.
     *
     * @param handle - The integer handle of the rigid-body to remove.
     * @param colliders - The set of colliders that may contain colliders attached to the removed rigid-body.
     * @param impulseJoints - The set of impulse joints that may contain joints attached to the removed rigid-body.
     * @param multibodyJoints - The set of multibody joints that may contain joints attached to the removed rigid-body.
     */
    remove(handle, islands, colliders, impulseJoints, multibodyJoints) {
        // Unmap the entities that will be removed automatically because of the rigid-body removals.
        for (let i = 0; i < this.raw.rbNumColliders(handle); i += 1) {
            colliders.unmap(this.raw.rbCollider(handle, i));
        }
        impulseJoints.forEachJointHandleAttachedToRigidBody(handle, (handle) => impulseJoints.unmap(handle));
        multibodyJoints.forEachJointHandleAttachedToRigidBody(handle, (handle) => multibodyJoints.unmap(handle));
        // Remove the rigid-body.
        this.raw.remove(handle, islands.raw, colliders.raw, impulseJoints.raw, multibodyJoints.raw);
        this.map.delete(handle);
    }
    /**
     * The number of rigid-bodies on this set.
     */
    len() {
        return this.map.len();
    }
    /**
     * Does this set contain a rigid-body with the given handle?
     *
     * @param handle - The rigid-body handle to check.
     */
    contains(handle) {
        return this.get(handle) != null;
    }
    /**
     * Gets the rigid-body with the given handle.
     *
     * @param handle - The handle of the rigid-body to retrieve.
     */
    get(handle) {
        return this.map.get(handle);
    }
    /**
     * Applies the given closure to each rigid-body contained by this set.
     *
     * @param f - The closure to apply.
     */
    forEach(f) {
        this.map.forEach(f);
    }
    /**
     * Applies the given closure to each active rigid-bodies contained by this set.
     *
     * A rigid-body is active if it is not sleeping, i.e., if it moved recently.
     *
     * @param f - The closure to apply.
     */
    forEachActiveRigidBody(islands, f) {
        islands.forEachActiveRigidBodyHandle((handle) => {
            f(this.get(handle));
        });
    }
    /**
     * Gets all rigid-bodies in the list.
     *
     * @returns rigid-bodies list.
     */
    getAll() {
        return this.map.getAll();
    }
}
//# sourceMappingURL=rigid_body_set.js.map

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/exports.js":
/*!****************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/exports.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActiveCollisionTypes": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.ActiveCollisionTypes),
/* harmony export */   "ActiveEvents": () => (/* reexport safe */ _pipeline__WEBPACK_IMPORTED_MODULE_4__.ActiveEvents),
/* harmony export */   "ActiveHooks": () => (/* reexport safe */ _pipeline__WEBPACK_IMPORTED_MODULE_4__.ActiveHooks),
/* harmony export */   "Ball": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.Ball),
/* harmony export */   "BroadPhase": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.BroadPhase),
/* harmony export */   "CCDSolver": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.CCDSolver),
/* harmony export */   "Capsule": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.Capsule),
/* harmony export */   "CoefficientCombineRule": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.CoefficientCombineRule),
/* harmony export */   "Collider": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.Collider),
/* harmony export */   "ColliderDesc": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.ColliderDesc),
/* harmony export */   "ColliderSet": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.ColliderSet),
/* harmony export */   "ConvexPolygon": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.ConvexPolygon),
/* harmony export */   "Cuboid": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.Cuboid),
/* harmony export */   "DebugRenderBuffers": () => (/* reexport safe */ _pipeline__WEBPACK_IMPORTED_MODULE_4__.DebugRenderBuffers),
/* harmony export */   "DebugRenderPipeline": () => (/* reexport safe */ _pipeline__WEBPACK_IMPORTED_MODULE_4__.DebugRenderPipeline),
/* harmony export */   "EventQueue": () => (/* reexport safe */ _pipeline__WEBPACK_IMPORTED_MODULE_4__.EventQueue),
/* harmony export */   "FeatureType": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.FeatureType),
/* harmony export */   "FixedImpulseJoint": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.FixedImpulseJoint),
/* harmony export */   "FixedMultibodyJoint": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.FixedMultibodyJoint),
/* harmony export */   "Heightfield": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.Heightfield),
/* harmony export */   "ImpulseJoint": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.ImpulseJoint),
/* harmony export */   "ImpulseJointSet": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.ImpulseJointSet),
/* harmony export */   "IntegrationParameters": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.IntegrationParameters),
/* harmony export */   "IslandManager": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.IslandManager),
/* harmony export */   "JointData": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.JointData),
/* harmony export */   "JointType": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.JointType),
/* harmony export */   "MotorModel": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.MotorModel),
/* harmony export */   "MultibodyJoint": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.MultibodyJoint),
/* harmony export */   "MultibodyJointSet": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.MultibodyJointSet),
/* harmony export */   "NarrowPhase": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.NarrowPhase),
/* harmony export */   "PhysicsPipeline": () => (/* reexport safe */ _pipeline__WEBPACK_IMPORTED_MODULE_4__.PhysicsPipeline),
/* harmony export */   "PointColliderProjection": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.PointColliderProjection),
/* harmony export */   "PointProjection": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.PointProjection),
/* harmony export */   "Polyline": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.Polyline),
/* harmony export */   "PrismaticImpulseJoint": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.PrismaticImpulseJoint),
/* harmony export */   "PrismaticMultibodyJoint": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.PrismaticMultibodyJoint),
/* harmony export */   "Ray": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.Ray),
/* harmony export */   "RayColliderIntersection": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.RayColliderIntersection),
/* harmony export */   "RayColliderToi": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.RayColliderToi),
/* harmony export */   "RayIntersection": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.RayIntersection),
/* harmony export */   "RevoluteImpulseJoint": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.RevoluteImpulseJoint),
/* harmony export */   "RevoluteMultibodyJoint": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.RevoluteMultibodyJoint),
/* harmony export */   "RigidBody": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.RigidBody),
/* harmony export */   "RigidBodyDesc": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.RigidBodyDesc),
/* harmony export */   "RigidBodySet": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.RigidBodySet),
/* harmony export */   "RigidBodyType": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.RigidBodyType),
/* harmony export */   "RotationOps": () => (/* reexport safe */ _math__WEBPACK_IMPORTED_MODULE_1__.RotationOps),
/* harmony export */   "RoundConvexPolygon": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.RoundConvexPolygon),
/* harmony export */   "RoundCuboid": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.RoundCuboid),
/* harmony export */   "RoundTriangle": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.RoundTriangle),
/* harmony export */   "Segment": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.Segment),
/* harmony export */   "SerializationPipeline": () => (/* reexport safe */ _pipeline__WEBPACK_IMPORTED_MODULE_4__.SerializationPipeline),
/* harmony export */   "Shape": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.Shape),
/* harmony export */   "ShapeColliderTOI": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.ShapeColliderTOI),
/* harmony export */   "ShapeContact": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.ShapeContact),
/* harmony export */   "ShapeTOI": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.ShapeTOI),
/* harmony export */   "ShapeType": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.ShapeType),
/* harmony export */   "SolverFlags": () => (/* reexport safe */ _pipeline__WEBPACK_IMPORTED_MODULE_4__.SolverFlags),
/* harmony export */   "TempContactManifold": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.TempContactManifold),
/* harmony export */   "TriMesh": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.TriMesh),
/* harmony export */   "Triangle": () => (/* reexport safe */ _geometry__WEBPACK_IMPORTED_MODULE_3__.Triangle),
/* harmony export */   "UnitImpulseJoint": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.UnitImpulseJoint),
/* harmony export */   "UnitMultibodyJoint": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_2__.UnitMultibodyJoint),
/* harmony export */   "Vector2": () => (/* reexport safe */ _math__WEBPACK_IMPORTED_MODULE_1__.Vector2),
/* harmony export */   "VectorOps": () => (/* reexport safe */ _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps),
/* harmony export */   "World": () => (/* reexport safe */ _pipeline__WEBPACK_IMPORTED_MODULE_4__.World),
/* harmony export */   "version": () => (/* binding */ version)
/* harmony export */ });
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raw */ "./node_modules/@dimforge/rapier2d/rapier_wasm2d_bg.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/@dimforge/rapier2d/math.js");
/* harmony import */ var _dynamics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamics */ "./node_modules/@dimforge/rapier2d/dynamics/index.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geometry */ "./node_modules/@dimforge/rapier2d/geometry/index.js");
/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipeline */ "./node_modules/@dimforge/rapier2d/pipeline/index.js");

function version() {
    return (0,_raw__WEBPACK_IMPORTED_MODULE_0__.version)();
}





//# sourceMappingURL=exports.js.map

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/geometry/broad_phase.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/geometry/broad_phase.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BroadPhase": () => (/* binding */ BroadPhase)
/* harmony export */ });
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../raw */ "./node_modules/@dimforge/rapier2d/rapier_wasm2d_bg.js");

/**
 * The broad-phase used for coarse collision-detection.
 *
 * To avoid leaking WASM resources, this MUST be freed manually with `broadPhase.free()`
 * once you are done using it.
 */
class BroadPhase {
    constructor(raw) {
        this.raw = raw || new _raw__WEBPACK_IMPORTED_MODULE_0__.RawBroadPhase();
    }
    /**
     * Release the WASM memory occupied by this broad-phase.
     */
    free() {
        this.raw.free();
        this.raw = undefined;
    }
}
//# sourceMappingURL=broad_phase.js.map

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/geometry/collider.js":
/*!**************************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/geometry/collider.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActiveCollisionTypes": () => (/* binding */ ActiveCollisionTypes),
/* harmony export */   "Collider": () => (/* binding */ Collider),
/* harmony export */   "ColliderDesc": () => (/* binding */ ColliderDesc)
/* harmony export */ });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math */ "./node_modules/@dimforge/rapier2d/math.js");
/* harmony import */ var _dynamics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dynamics */ "./node_modules/@dimforge/rapier2d/dynamics/coefficient_combine_rule.js");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "./node_modules/@dimforge/rapier2d/geometry/shape.js");
/* harmony import */ var _ray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ray */ "./node_modules/@dimforge/rapier2d/geometry/ray.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./point */ "./node_modules/@dimforge/rapier2d/geometry/point.js");
/* harmony import */ var _toi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toi */ "./node_modules/@dimforge/rapier2d/geometry/toi.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./node_modules/@dimforge/rapier2d/geometry/contact.js");







/// Flags affecting whether or not collision-detection happens between two colliders
/// depending on the type of rigid-bodies they are attached to.
var ActiveCollisionTypes;
(function (ActiveCollisionTypes) {
    /// Enable collision-detection between a collider attached to a dynamic body
    /// and another collider attached to a dynamic body.
    ActiveCollisionTypes[ActiveCollisionTypes["DYNAMIC_DYNAMIC"] = 1] = "DYNAMIC_DYNAMIC";
    /// Enable collision-detection between a collider attached to a dynamic body
    /// and another collider attached to a kinematic body.
    ActiveCollisionTypes[ActiveCollisionTypes["DYNAMIC_KINEMATIC"] = 12] = "DYNAMIC_KINEMATIC";
    /// Enable collision-detection between a collider attached to a dynamic body
    /// and another collider attached to a fixed body (or not attached to any body).
    ActiveCollisionTypes[ActiveCollisionTypes["DYNAMIC_FIXED"] = 2] = "DYNAMIC_FIXED";
    /// Enable collision-detection between a collider attached to a kinematic body
    /// and another collider attached to a kinematic body.
    ActiveCollisionTypes[ActiveCollisionTypes["KINEMATIC_KINEMATIC"] = 52224] = "KINEMATIC_KINEMATIC";
    /// Enable collision-detection between a collider attached to a kinematic body
    /// and another collider attached to a fixed body (or not attached to any body).
    ActiveCollisionTypes[ActiveCollisionTypes["KINEMATIC_FIXED"] = 8704] = "KINEMATIC_FIXED";
    /// Enable collision-detection between a collider attached to a fixed body (or
    /// not attached to any body) and another collider attached to a fixed body (or
    /// not attached to any body).
    ActiveCollisionTypes[ActiveCollisionTypes["FIXED_FIXED"] = 32] = "FIXED_FIXED";
    /// The default active collision types, enabling collisions between a dynamic body
    /// and another body of any type, but not enabling collisions between two non-dynamic bodies.
    ActiveCollisionTypes[ActiveCollisionTypes["DEFAULT"] = 15] = "DEFAULT";
    /// Enable collisions between any kind of rigid-bodies (including between two non-dynamic bodies).
    ActiveCollisionTypes[ActiveCollisionTypes["ALL"] = 60943] = "ALL";
})(ActiveCollisionTypes || (ActiveCollisionTypes = {}));
/**
 * A geometric entity that can be attached to a body so it can be affected
 * by contacts and proximity queries.
 */
class Collider {
    constructor(colliderSet, handle, parent, shape) {
        this.colliderSet = colliderSet;
        this.handle = handle;
        this._parent = parent;
        this._shape = shape;
    }
    /** @internal */
    finalizeDeserialization(bodies) {
        if (this.handle != null) {
            this._parent = bodies.get(this.colliderSet.raw.coParent(this.handle));
        }
    }
    ensureShapeIsCached() {
        if (!this._shape)
            this._shape = _shape__WEBPACK_IMPORTED_MODULE_0__.Shape.fromRaw(this.colliderSet.raw, this.handle);
    }
    /**
     * The shape of this collider.
     */
    get shape() {
        this.ensureShapeIsCached();
        return this._shape;
    }
    /**
     * Checks if this collider is still valid (i.e. that it has
     * not been deleted from the collider set yet).
     */
    isValid() {
        return this.colliderSet.raw.contains(this.handle);
    }
    /**
     * The world-space translation of this rigid-body.
     */
    translation() {
        return _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.fromRaw(this.colliderSet.raw.coTranslation(this.handle));
    }
    /**
     * The world-space orientation of this rigid-body.
     */
    rotation() {
        return _math__WEBPACK_IMPORTED_MODULE_1__.RotationOps.fromRaw(this.colliderSet.raw.coRotation(this.handle));
    }
    /**
     * Is this collider a sensor?
     */
    isSensor() {
        return this.colliderSet.raw.coIsSensor(this.handle);
    }
    /**
     * Sets whether or not this collider is a sensor.
     * @param isSensor - If `true`, the collider will be a sensor.
     */
    setSensor(isSensor) {
        this.colliderSet.raw.coSetSensor(this.handle, isSensor);
    }
    /**
     * Sets the new shape of the collider.
     * @param shape - The collider’s new shape.
     */
    setShape(shape) {
        let rawShape = shape.intoRaw();
        this.colliderSet.raw.coSetShape(this.handle, rawShape);
        rawShape.free();
        this._shape = shape;
    }
    /**
     * Sets the restitution coefficient of the collider to be created.
     *
     * @param restitution - The restitution coefficient in `[0, 1]`. A value of 0 (the default) means no bouncing behavior
     *                   while 1 means perfect bouncing (though energy may still be lost due to numerical errors of the
     *                   constraints solver).
     */
    setRestitution(restitution) {
        this.colliderSet.raw.coSetRestitution(this.handle, restitution);
    }
    /**
     * Sets the friction coefficient of the collider to be created.
     *
     * @param friction - The friction coefficient. Must be greater or equal to 0. This is generally smaller than 1. The
     *                   higher the coefficient, the stronger friction forces will be for contacts with the collider
     *                   being built.
     */
    setFriction(friction) {
        this.colliderSet.raw.coSetFriction(this.handle, friction);
    }
    /**
     * Gets the rule used to combine the friction coefficients of two colliders
     * colliders involved in a contact.
     */
    frictionCombineRule() {
        return this.colliderSet.raw.coFrictionCombineRule(this.handle);
    }
    /**
     * Sets the rule used to combine the friction coefficients of two colliders
     * colliders involved in a contact.
     *
     * @param rule − The combine rule to apply.
     */
    setFrictionCombineRule(rule) {
        this.colliderSet.raw.coSetFrictionCombineRule(this.handle, rule);
    }
    /**
     * Gets the rule used to combine the restitution coefficients of two colliders
     * colliders involved in a contact.
     */
    restitutionCombineRule() {
        return this.colliderSet.raw.coRestitutionCombineRule(this.handle);
    }
    /**
     * Sets the rule used to combine the restitution coefficients of two colliders
     * colliders involved in a contact.
     *
     * @param rule − The combine rule to apply.
     */
    setRestitutionCombineRule(rule) {
        this.colliderSet.raw.coSetRestitutionCombineRule(this.handle, rule);
    }
    /**
     * Sets the collision groups used by this collider.
     *
     * Two colliders will interact iff. their collision groups are compatible.
     * See the documentation of `InteractionGroups` for details on teh used bit pattern.
     *
     * @param groups - The collision groups used for the collider being built.
     */
    setCollisionGroups(groups) {
        this.colliderSet.raw.coSetCollisionGroups(this.handle, groups);
    }
    /**
     * Sets the solver groups used by this collider.
     *
     * Forces between two colliders in contact will be computed iff their solver
     * groups are compatible.
     * See the documentation of `InteractionGroups` for details on the used bit pattern.
     *
     * @param groups - The solver groups used for the collider being built.
     */
    setSolverGroups(groups) {
        this.colliderSet.raw.coSetSolverGroups(this.handle, groups);
    }
    /**
     * Get the physics hooks active for this collider.
     */
    activeHooks() {
        return this.colliderSet.raw.coActiveHooks(this.handle);
    }
    /**
     * Set the physics hooks active for this collider.
     *
     * Use this to enable custom filtering rules for contact/intersecstion pairs involving this collider.
     *
     * @param activeHooks - The hooks active for contact/intersection pairs involving this collider.
     */
    setActiveHooks(activeHooks) {
        this.colliderSet.raw.coSetActiveHooks(this.handle, activeHooks);
    }
    /**
     * The events active for this collider.
     */
    activeEvents() {
        return this.colliderSet.raw.coActiveEvents(this.handle);
    }
    /**
     * Set the events active for this collider.
     *
     * Use this to enable contact and/or intersection event reporting for this collider.
     *
     * @param activeEvents - The events active for contact/intersection pairs involving this collider.
     */
    setActiveEvents(activeEvents) {
        this.colliderSet.raw.coSetActiveEvents(this.handle, activeEvents);
    }
    /**
     * Gets the collision types active for this collider.
     */
    activeCollisionTypes() {
        return this.colliderSet.raw.coActiveCollisionTypes(this.handle);
    }
    /**
     * Set the collision types active for this collider.
     *
     * @param activeCollisionTypes - The hooks active for contact/intersection pairs involving this collider.
     */
    setActiveCollisionTypes(activeCollisionTypes) {
        this.colliderSet.raw.coSetActiveCollisionTypes(this.handle, activeCollisionTypes);
    }
    /**
     * Sets the translation of this collider.
     *
     * @param tra - The world-space position of the collider.
     */
    setTranslation(tra) {
        // #if DIM2
        this.colliderSet.raw.coSetTranslation(this.handle, tra.x, tra.y);
        // #endif
    }
    /**
     * Sets the translation of this collider relative to its parent rigid-body.
     *
     * Does nothing if this collider isn't attached to a rigid-body.
     *
     * @param tra - The new translation of the collider relative to its parent.
     */
    setTranslationWrtParent(tra) {
        // #if DIM2
        this.colliderSet.raw.coSetTranslationWrtParent(this.handle, tra.x, tra.y);
        // #endif
    }
    // #if DIM2
    /**
     * Sets the rotation angle of this collider.
     *
     * @param angle - The rotation angle, in radians.
     */
    setRotation(angle) {
        this.colliderSet.raw.coSetRotation(this.handle, angle);
    }
    /**
     * Sets the rotation angle of this collider relative to its parent rigid-body.
     *
     * Does nothing if this collider isn't attached to a rigid-body.
     *
     * @param angle - The rotation angle, in radians.
     */
    setRotationWrtParent(angle) {
        this.colliderSet.raw.coSetRotationWrtParent(this.handle, angle);
    }
    // #endif
    /**
     * The type of the shape of this collider.
     * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
     */
    shapeType() {
        return this.colliderSet.raw.coShapeType(this.handle);
    }
    /**
     * The half-extents of this collider if it is a cuboid shape.
     * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
     */
    halfExtents() {
        return _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle));
    }
    /**
     * The radius of this collider if it is a ball, cylinder, capsule, or cone shape.
     * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
     */
    radius() {
        return this.colliderSet.raw.coRadius(this.handle);
    }
    /**
     * The radius of the round edges of this collider if it is a round cylinder.
     * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
     */
    roundRadius() {
        return this.colliderSet.raw.coRoundRadius(this.handle);
    }
    /**
     * The half height of this collider if it is a cylinder, capsule, or cone shape.
     * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
     */
    halfHeight() {
        return this.colliderSet.raw.coHalfHeight(this.handle);
    }
    /**
     * If this collider has a triangle mesh, polyline, convex polygon, or convex polyhedron shape,
     * this returns the vertex buffer of said shape.
     * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
     */
    vertices() {
        return this.colliderSet.raw.coVertices(this.handle);
    }
    /**
     * If this collider has a triangle mesh, polyline, or convex polyhedron shape,
     * this returns the index buffer of said shape.
     * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
     */
    indices() {
        return this.colliderSet.raw.coIndices(this.handle);
    }
    /**
     * If this collider has a heightfield shape, this returns the heights buffer of
     * the heightfield.
     * In 3D, the returned height matrix is provided in column-major order.
     * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
     */
    heightfieldHeights() {
        return this.colliderSet.raw.coHeightfieldHeights(this.handle);
    }
    /**
     * If this collider has a heightfield shape, this returns the scale
     * applied to it.
     * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
     */
    heightfieldScale() {
        let scale = this.colliderSet.raw.coHeightfieldScale(this.handle);
        return _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.fromRaw(scale);
    }
    /**
     * The rigid-body this collider is attached to.
     */
    parent() {
        return this._parent;
    }
    /**
     * The friction coefficient of this collider.
     */
    friction() {
        return this.colliderSet.raw.coFriction(this.handle);
    }
    /**
     * The restitution coefficient of this collider.
     */
    restitution() {
        return this.colliderSet.raw.coRestitution(this.handle);
    }
    /**
     * The density of this collider.
     */
    density() {
        return this.colliderSet.raw.coDensity(this.handle);
    }
    /**
     * The collision groups of this collider.
     */
    collisionGroups() {
        return this.colliderSet.raw.coCollisionGroups(this.handle);
    }
    /**
     * The solver groups of this collider.
     */
    solverGroups() {
        return this.colliderSet.raw.coSolverGroups(this.handle);
    }
    /**
     * Tests if this collider contains a point.
     *
     * @param point - The point to test.
     */
    containsPoint(point) {
        let rawPoint = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(point);
        let result = this.colliderSet.raw.coContainsPoint(this.handle, rawPoint);
        rawPoint.free();
        return result;
    }
    /**
     * Find the projection of a point on this collider.
     *
     * @param point - The point to project.
     * @param solid - If this is set to `true` then the collider shapes are considered to
     *   be plain (if the point is located inside of a plain shape, its projection is the point
     *   itself). If it is set to `false` the collider shapes are considered to be hollow
     *   (if the point is located inside of an hollow shape, it is projected on the shape's
     *   boundary).
     */
    projectPoint(point, solid) {
        let rawPoint = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(point);
        let result = _point__WEBPACK_IMPORTED_MODULE_2__.PointProjection.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle, rawPoint, solid));
        rawPoint.free();
        return result;
    }
    /**
     * Tests if this collider intersects the given ray.
     *
     * @param ray - The ray to cast.
     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
     *   limits the length of the ray to `ray.dir.norm() * maxToi`.
     */
    intersectsRay(ray, maxToi) {
        let rawOrig = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(ray.origin);
        let rawDir = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(ray.dir);
        let result = this.colliderSet.raw.coIntersectsRay(this.handle, rawOrig, rawDir, maxToi);
        rawOrig.free();
        rawDir.free();
        return result;
    }
    /*
     * Computes the smallest time between this and the given shape under translational movement are separated by a distance smaller or equal to distance.
     *
     * @param collider1Vel - The constant velocity of the current shape to cast (i.e. the cast direction).
     * @param shape2 - The shape to cast against.
     * @param shape2Pos - The position of the second shape.
     * @param shape2Rot - The rotation of the second shape.
     * @param shape2Vel - The constant velocity of the second shape.
     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
     *   limits the distance traveled by the shape to `collider1Vel.norm() * maxToi`.
     */
    castShape(collider1Vel, shape2, shape2Pos, shape2Rot, shape2Vel, maxToi) {
        let rawCollider1Vel = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(collider1Vel);
        let rawShape2Pos = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(shape2Pos);
        let rawShape2Rot = _math__WEBPACK_IMPORTED_MODULE_1__.RotationOps.intoRaw(shape2Rot);
        let rawShape2Vel = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(shape2Vel);
        let rawShape2 = shape2.intoRaw();
        let result = _toi__WEBPACK_IMPORTED_MODULE_3__.ShapeTOI.fromRaw(this.colliderSet, this.colliderSet.raw.coCastShape(this.handle, rawCollider1Vel, rawShape2, rawShape2Pos, rawShape2Rot, rawShape2Vel, maxToi));
        rawCollider1Vel.free();
        rawShape2Pos.free();
        rawShape2Rot.free();
        rawShape2Vel.free();
        rawShape2.free();
        return result;
    }
    /*
     * Computes the smallest time between this and the given collider under translational movement are separated by a distance smaller or equal to distance.
     *
     * @param collider1Vel - The constant velocity of the current collider to cast (i.e. the cast direction).
     * @param collider2 - The collider to cast against.
     * @param collider2Vel - The constant velocity of the second collider.
     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
     *   limits the distance traveled by the shape to `shapeVel.norm() * maxToi`.
     */
    castCollider(collider1Vel, collider2, collider2Vel, maxToi) {
        let rawCollider1Vel = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(collider1Vel);
        let rawCollider2Vel = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(collider2Vel);
        let result = _toi__WEBPACK_IMPORTED_MODULE_3__.ShapeColliderTOI.fromRaw(this.colliderSet, this.colliderSet.raw.coCastCollider(this.handle, rawCollider1Vel, collider2.handle, rawCollider2Vel, maxToi));
        rawCollider1Vel.free();
        rawCollider2Vel.free();
        return result;
    }
    intersectsShape(shape2, shapePos2, shapeRot2) {
        let rawPos2 = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(shapePos2);
        let rawRot2 = _math__WEBPACK_IMPORTED_MODULE_1__.RotationOps.intoRaw(shapeRot2);
        let rawShape2 = shape2.intoRaw();
        let result = this.colliderSet.raw.coIntersectsShape(this.handle, rawShape2, rawPos2, rawRot2);
        rawPos2.free();
        rawRot2.free();
        rawShape2.free();
        return result;
    }
    /**
     * Computes one pair of contact points between the shape owned by this collider and the given shape.
     *
     * @param shape2 - The second shape.
     * @param shape2Pos - The initial position of the second shape.
     * @param shape2Rot - The rotation of the second shape.
     * @param prediction - The prediction value, if the shapes are separated by a distance greater than this value, test will fail.
     * @returns `null` if the shapes are separated by a distance greater than prediction, otherwise contact details. The result is given in world-space.
     */
    contactShape(shape2, shape2Pos, shape2Rot, prediction) {
        let rawPos2 = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(shape2Pos);
        let rawRot2 = _math__WEBPACK_IMPORTED_MODULE_1__.RotationOps.intoRaw(shape2Rot);
        let rawShape2 = shape2.intoRaw();
        let result = _contact__WEBPACK_IMPORTED_MODULE_4__.ShapeContact.fromRaw(this.colliderSet.raw.coContactShape(this.handle, rawShape2, rawPos2, rawRot2, prediction));
        rawPos2.free();
        rawRot2.free();
        rawShape2.free();
        return result;
    }
    /**
     * Computes one pair of contact points between the collider and the given collider.
     *
     * @param collider2 - The second collider.
     * @param prediction - The prediction value, if the shapes are separated by a distance greater than this value, test will fail.
     * @returns `null` if the shapes are separated by a distance greater than prediction, otherwise contact details. The result is given in world-space.
     */
    contactCollider(collider2, prediction) {
        let result = _contact__WEBPACK_IMPORTED_MODULE_4__.ShapeContact.fromRaw(this.colliderSet.raw.coContactCollider(this.handle, collider2.handle, prediction));
        return result;
    }
    /*
     * Find the closest intersection between a ray and this collider.
     *
     * This also computes the normal at the hit point.
     * @param ray - The ray to cast.
     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
     *   limits the length of the ray to `ray.dir.norm() * maxToi`.
     * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
     *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
     *   whereas `false` implies that all shapes are hollow for this ray-cast.
     * @returns The time-of-impact between this collider and the ray, or `-1` if there is no intersection.
     */
    castRay(ray, maxToi, solid) {
        let rawOrig = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(ray.origin);
        let rawDir = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(ray.dir);
        let result = this.colliderSet.raw.coCastRay(this.handle, rawOrig, rawDir, maxToi, solid);
        rawOrig.free();
        rawDir.free();
        return result;
    }
    /**
     * Find the closest intersection between a ray and this collider.
     *
     * This also computes the normal at the hit point.
     * @param ray - The ray to cast.
     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
     *   limits the length of the ray to `ray.dir.norm() * maxToi`.
     * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
     *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
     *   whereas `false` implies that all shapes are hollow for this ray-cast.
     */
    castRayAndGetNormal(ray, maxToi, solid) {
        let rawOrig = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(ray.origin);
        let rawDir = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(ray.dir);
        let result = _ray__WEBPACK_IMPORTED_MODULE_5__.RayIntersection.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle, rawOrig, rawDir, maxToi, solid));
        rawOrig.free();
        rawDir.free();
        return result;
    }
}
class ColliderDesc {
    /**
     * Initializes a collider descriptor from the collision shape.
     *
     * @param shape - The shape of the collider being built.
     */
    constructor(shape) {
        this.shape = shape;
        this.useMassProps = false;
        this.density = 1.0;
        this.friction = 0.5;
        this.restitution = 0.0;
        this.rotation = _math__WEBPACK_IMPORTED_MODULE_1__.RotationOps.identity();
        this.translation = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.zeros();
        this.isSensor = false;
        this.collisionGroups = 4294967295;
        this.solverGroups = 4294967295;
        this.frictionCombineRule = _dynamics__WEBPACK_IMPORTED_MODULE_6__.CoefficientCombineRule.Average;
        this.restitutionCombineRule = _dynamics__WEBPACK_IMPORTED_MODULE_6__.CoefficientCombineRule.Average;
        this.activeCollisionTypes = ActiveCollisionTypes.DEFAULT;
        this.activeEvents = 0;
        this.activeHooks = 0;
        this.mass = 0.0;
        this.centerOfMass = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.zeros();
        // #if DIM2
        this.principalAngularInertia = 0.0;
        this.rotationsEnabled = true;
        // #endif
    }
    /**
     * Create a new collider descriptor with a ball shape.
     *
     * @param radius - The radius of the ball.
     */
    static ball(radius) {
        const shape = new _shape__WEBPACK_IMPORTED_MODULE_0__.Ball(radius);
        return new ColliderDesc(shape);
    }
    /**
     * Create a new collider descriptor with a capsule shape.
     *
     * @param halfHeight - The half-height of the capsule, along the `y` axis.
     * @param radius - The radius of the capsule basis.
     */
    static capsule(halfHeight, radius) {
        const shape = new _shape__WEBPACK_IMPORTED_MODULE_0__.Capsule(halfHeight, radius);
        return new ColliderDesc(shape);
    }
    /**
     * Creates a new segment shape.
     *
     * @param a - The first point of the segment.
     * @param b - The second point of the segment.
     */
    static segment(a, b) {
        const shape = new _shape__WEBPACK_IMPORTED_MODULE_0__.Segment(a, b);
        return new ColliderDesc(shape);
    }
    /**
     * Creates a new triangle shape.
     *
     * @param a - The first point of the triangle.
     * @param b - The second point of the triangle.
     * @param c - The third point of the triangle.
     */
    static triangle(a, b, c) {
        const shape = new _shape__WEBPACK_IMPORTED_MODULE_0__.Triangle(a, b, c);
        return new ColliderDesc(shape);
    }
    /**
     * Creates a new triangle shape with round corners.
     *
     * @param a - The first point of the triangle.
     * @param b - The second point of the triangle.
     * @param c - The third point of the triangle.
     * @param borderRadius - The radius of the borders of this triangle. In 3D,
     *   this is also equal to half the thickness of the triangle.
     */
    static roundTriangle(a, b, c, borderRadius) {
        const shape = new _shape__WEBPACK_IMPORTED_MODULE_0__.RoundTriangle(a, b, c, borderRadius);
        return new ColliderDesc(shape);
    }
    /**
     * Creates a new collider descriptor with a polyline shape.
     *
     * @param vertices - The coordinates of the polyline's vertices.
     * @param indices - The indices of the polyline's segments. If this is `undefined` or `null`,
     *    the vertices are assumed to describe a line strip.
     */
    static polyline(vertices, indices) {
        const shape = new _shape__WEBPACK_IMPORTED_MODULE_0__.Polyline(vertices, indices);
        return new ColliderDesc(shape);
    }
    /**
     * Creates a new collider descriptor with a triangle mesh shape.
     *
     * @param vertices - The coordinates of the triangle mesh's vertices.
     * @param indices - The indices of the triangle mesh's triangles.
     */
    static trimesh(vertices, indices) {
        const shape = new _shape__WEBPACK_IMPORTED_MODULE_0__.TriMesh(vertices, indices);
        return new ColliderDesc(shape);
    }
    // #if DIM2
    /**
     * Creates a new collider descriptor with a rectangular shape.
     *
     * @param hx - The half-width of the rectangle along its local `x` axis.
     * @param hy - The half-width of the rectangle along its local `y` axis.
     */
    static cuboid(hx, hy) {
        const shape = new _shape__WEBPACK_IMPORTED_MODULE_0__.Cuboid(hx, hy);
        return new ColliderDesc(shape);
    }
    /**
     * Creates a new collider descriptor with a rectangular shape with round borders.
     *
     * @param hx - The half-width of the rectangle along its local `x` axis.
     * @param hy - The half-width of the rectangle along its local `y` axis.
     * @param borderRadius - The radius of the cuboid's borders.
     */
    static roundCuboid(hx, hy, borderRadius) {
        const shape = new _shape__WEBPACK_IMPORTED_MODULE_0__.RoundCuboid(hx, hy, borderRadius);
        return new ColliderDesc(shape);
    }
    /**
     * Creates a new collider descriptor with a heightfield shape.
     *
     * @param heights - The heights of the heightfield, along its local `y` axis.
     * @param scale - The scale factor applied to the heightfield.
     */
    static heightfield(heights, scale) {
        const shape = new _shape__WEBPACK_IMPORTED_MODULE_0__.Heightfield(heights, scale);
        return new ColliderDesc(shape);
    }
    /**
     * Computes the convex-hull of the given points and use the resulting
     * convex polygon as the shape for this new collider descriptor.
     *
     * @param points - The point that will be used to compute the convex-hull.
     */
    static convexHull(points) {
        const shape = new _shape__WEBPACK_IMPORTED_MODULE_0__.ConvexPolygon(points, false);
        return new ColliderDesc(shape);
    }
    /**
     * Creates a new collider descriptor that uses the given set of points assumed
     * to form a convex polyline (no convex-hull computation will be done).
     *
     * @param vertices - The vertices of the convex polyline.
     */
    static convexPolyline(vertices) {
        const shape = new _shape__WEBPACK_IMPORTED_MODULE_0__.ConvexPolygon(vertices, true);
        return new ColliderDesc(shape);
    }
    /**
     * Computes the convex-hull of the given points and use the resulting
     * convex polygon as the shape for this new collider descriptor. A
     * border is added to that convex polygon to give it round corners.
     *
     * @param points - The point that will be used to compute the convex-hull.
     * @param borderRadius - The radius of the round border added to the convex polygon.
     */
    static roundConvexHull(points, borderRadius) {
        const shape = new _shape__WEBPACK_IMPORTED_MODULE_0__.RoundConvexPolygon(points, borderRadius, false);
        return new ColliderDesc(shape);
    }
    /**
     * Creates a new collider descriptor that uses the given set of points assumed
     * to form a round convex polyline (no convex-hull computation will be done).
     *
     * @param vertices - The vertices of the convex polyline.
     * @param borderRadius - The radius of the round border added to the convex polyline.
     */
    static roundConvexPolyline(vertices, borderRadius) {
        const shape = new _shape__WEBPACK_IMPORTED_MODULE_0__.RoundConvexPolygon(vertices, borderRadius, true);
        return new ColliderDesc(shape);
    }
    // #endif
    // #if DIM2
    /**
     * Sets the position of the collider to be created relative to the rigid-body it is attached to.
     */
    setTranslation(x, y) {
        if (typeof x != "number" || typeof y != "number")
            throw TypeError("The translation components must be numbers.");
        this.translation = { x: x, y: y };
        return this;
    }
    // #endif
    /**
     * Sets the rotation of the collider to be created relative to the rigid-body it is attached to.
     *
     * @param rot - The rotation of the collider to be created relative to the rigid-body it is attached to.
     */
    setRotation(rot) {
        this.rotation = rot;
        return this;
    }
    /**
     * Sets whether or not the collider being created is a sensor.
     *
     * A sensor collider does not take part of the physics simulation, but generates
     * proximity events.
     *
     * @param is - Set to `true` of the collider built is to be a sensor.
     */
    setSensor(is) {
        this.isSensor = is;
        return this;
    }
    /**
     * Sets the density of the collider being built.
     *
     * @param density - The density to set, must be greater or equal to 0. A density of 0 means that this collider
     *                  will not affect the mass or angular inertia of the rigid-body it is attached to.
     */
    setDensity(density) {
        this.useMassProps = false;
        this.density = density;
        return this;
    }
    // #if DIM2
    /**
     * Sets the mass properties of the collider being built.
     *
     * This replaces the mass-properties automatically computed from the collider's density and shape.
     * These mass-properties will be added to the mass-properties of the rigid-body this collider will be attached to.
     *
     * @param mass − The mass of the collider to create.
     * @param centerOfMass − The center-of-mass of the collider to create.
     * @param principalAngularInertia − The principal angular inertia of the collider to create.
     */
    setMassProperties(mass, centerOfMass, principalAngularInertia) {
        this.useMassProps = true;
        this.mass = mass;
        this.centerOfMass = centerOfMass;
        this.principalAngularInertia = principalAngularInertia;
        return this;
    }
    // #endif
    /**
     * Sets the restitution coefficient of the collider to be created.
     *
     * @param restitution - The restitution coefficient in `[0, 1]`. A value of 0 (the default) means no bouncing behavior
     *                   while 1 means perfect bouncing (though energy may still be lost due to numerical errors of the
     *                   constraints solver).
     */
    setRestitution(restitution) {
        this.restitution = restitution;
        return this;
    }
    /**
     * Sets the friction coefficient of the collider to be created.
     *
     * @param friction - The friction coefficient. Must be greater or equal to 0. This is generally smaller than 1. The
     *                   higher the coefficient, the stronger friction forces will be for contacts with the collider
     *                   being built.
     */
    setFriction(friction) {
        this.friction = friction;
        return this;
    }
    /**
     * Sets the rule used to combine the friction coefficients of two colliders
     * colliders involved in a contact.
     *
     * @param rule − The combine rule to apply.
     */
    setFrictionCombineRule(rule) {
        this.frictionCombineRule = rule;
        return this;
    }
    /**
     * Sets the rule used to combine the restitution coefficients of two colliders
     * colliders involved in a contact.
     *
     * @param rule − The combine rule to apply.
     */
    setRestitutionCombineRule(rule) {
        this.restitutionCombineRule = rule;
        return this;
    }
    /**
     * Sets the collision groups used by this collider.
     *
     * Two colliders will interact iff. their collision groups are compatible.
     * See the documentation of `InteractionGroups` for details on teh used bit pattern.
     *
     * @param groups - The collision groups used for the collider being built.
     */
    setCollisionGroups(groups) {
        this.collisionGroups = groups;
        return this;
    }
    /**
     * Sets the solver groups used by this collider.
     *
     * Forces between two colliders in contact will be computed iff their solver
     * groups are compatible.
     * See the documentation of `InteractionGroups` for details on the used bit pattern.
     *
     * @param groups - The solver groups used for the collider being built.
     */
    setSolverGroups(groups) {
        this.solverGroups = groups;
        return this;
    }
    /**
     * Set the physics hooks active for this collider.
     *
     * Use this to enable custom filtering rules for contact/intersecstion pairs involving this collider.
     *
     * @param activeHooks - The hooks active for contact/intersection pairs involving this collider.
     */
    setActiveHooks(activeHooks) {
        this.activeHooks = activeHooks;
        return this;
    }
    /**
     * Set the events active for this collider.
     *
     * Use this to enable contact and/or intersection event reporting for this collider.
     *
     * @param activeEvents - The events active for contact/intersection pairs involving this collider.
     */
    setActiveEvents(activeEvents) {
        this.activeEvents = activeEvents;
        return this;
    }
    /**
     * Set the collision types active for this collider.
     *
     * @param activeCollisionTypes - The hooks active for contact/intersection pairs involving this collider.
     */
    setActiveCollisionTypes(activeCollisionTypes) {
        this.activeCollisionTypes = activeCollisionTypes;
        return this;
    }
}
//# sourceMappingURL=collider.js.map

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/geometry/collider_set.js":
/*!******************************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/geometry/collider_set.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColliderSet": () => (/* binding */ ColliderSet)
/* harmony export */ });
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../raw */ "./node_modules/@dimforge/rapier2d/rapier_wasm2d_bg.js");
/* harmony import */ var _coarena__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../coarena */ "./node_modules/@dimforge/rapier2d/coarena.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../math */ "./node_modules/@dimforge/rapier2d/math.js");
/* harmony import */ var _collider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collider */ "./node_modules/@dimforge/rapier2d/geometry/collider.js");




/**
 * A set of rigid bodies that can be handled by a physics pipeline.
 *
 * To avoid leaking WASM resources, this MUST be freed manually with `colliderSet.free()`
 * once you are done using it (and all the rigid-bodies it created).
 */
class ColliderSet {
    constructor(raw) {
        this.raw = raw || new _raw__WEBPACK_IMPORTED_MODULE_0__.RawColliderSet();
        this.map = new _coarena__WEBPACK_IMPORTED_MODULE_1__.Coarena();
        // Initialize the map with the existing elements, if any.
        if (raw) {
            raw.forEachColliderHandle((handle) => {
                this.map.set(handle, new _collider__WEBPACK_IMPORTED_MODULE_2__.Collider(this, handle, null));
            });
        }
    }
    /**
     * Release the WASM memory occupied by this collider set.
     */
    free() {
        this.raw.free();
        this.raw = undefined;
        this.map.clear();
        this.map = undefined;
    }
    /** @internal */
    finalizeDeserialization(bodies) {
        this.map.forEach((collider) => collider.finalizeDeserialization(bodies));
    }
    /**
     * Creates a new collider and return its integer handle.
     *
     * @param bodies - The set of bodies where the collider's parent can be found.
     * @param desc - The collider's description.
     * @param parentHandle - The integer handle of the rigid-body this collider is attached to.
     */
    createCollider(bodies, desc, parentHandle) {
        let hasParent = parentHandle != undefined && parentHandle != null;
        if (hasParent && isNaN(parentHandle))
            throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");
        let rawShape = desc.shape.intoRaw();
        let rawTra = _math__WEBPACK_IMPORTED_MODULE_3__.VectorOps.intoRaw(desc.translation);
        let rawRot = _math__WEBPACK_IMPORTED_MODULE_3__.RotationOps.intoRaw(desc.rotation);
        let rawCom = _math__WEBPACK_IMPORTED_MODULE_3__.VectorOps.intoRaw(desc.centerOfMass);
        let handle = this.raw.createCollider(rawShape, rawTra, rawRot, desc.useMassProps, desc.mass, rawCom, 
        // #if DIM2
        desc.principalAngularInertia, 
        // #endif
        desc.density, desc.friction, desc.restitution, desc.frictionCombineRule, desc.restitutionCombineRule, desc.isSensor, desc.collisionGroups, desc.solverGroups, desc.activeCollisionTypes, desc.activeHooks, desc.activeEvents, hasParent, hasParent ? parentHandle : 0, bodies.raw);
        rawShape.free();
        rawTra.free();
        rawRot.free();
        rawCom.free();
        let parent = hasParent ? bodies.get(parentHandle) : null;
        let collider = new _collider__WEBPACK_IMPORTED_MODULE_2__.Collider(this, handle, parent, desc.shape);
        this.map.set(handle, collider);
        return collider;
    }
    /**
     * Remove a collider from this set.
     *
     * @param handle - The integer handle of the collider to remove.
     * @param bodies - The set of rigid-body containing the rigid-body the collider is attached to.
     * @param wakeUp - If `true`, the rigid-body the removed collider is attached to will be woken-up automatically.
     */
    remove(handle, islands, bodies, wakeUp) {
        this.raw.remove(handle, islands.raw, bodies.raw, wakeUp);
        this.unmap(handle);
    }
    /**
     * Internal function, do not call directly.
     * @param handle
     */
    unmap(handle) {
        this.map.delete(handle);
    }
    /**
     * Gets the rigid-body with the given handle.
     *
     * @param handle - The handle of the rigid-body to retrieve.
     */
    get(handle) {
        return this.map.get(handle);
    }
    /**
     * The number of colliders on this set.
     */
    len() {
        return this.map.len();
    }
    /**
     * Does this set contain a collider with the given handle?
     *
     * @param handle - The collider handle to check.
     */
    contains(handle) {
        return this.get(handle) != null;
    }
    /**
     * Applies the given closure to each collider contained by this set.
     *
     * @param f - The closure to apply.
     */
    forEach(f) {
        this.map.forEach(f);
    }
    /**
     * Gets all colliders in the list.
     *
     * @returns collider list.
     */
    getAll() {
        return this.map.getAll();
    }
}
//# sourceMappingURL=collider_set.js.map

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/geometry/contact.js":
/*!*************************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/geometry/contact.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShapeContact": () => (/* binding */ ShapeContact)
/* harmony export */ });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/@dimforge/rapier2d/math.js");

/**
 * The contact info between two shapes.
 */
class ShapeContact {
    constructor(dist, point1, point2, normal1, normal2) {
        this.distance = dist;
        this.point1 = point1;
        this.point2 = point2;
        this.normal1 = normal1;
        this.normal2 = normal2;
    }
    static fromRaw(raw) {
        if (!raw)
            return null;
        const result = new ShapeContact(raw.distance(), _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(raw.point1()), _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(raw.point2()), _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(raw.normal1()), _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(raw.normal2()));
        raw.free();
        return result;
    }
}
//# sourceMappingURL=contact.js.map

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/geometry/feature.js":
/*!*************************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/geometry/feature.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureType": () => (/* binding */ FeatureType)
/* harmony export */ });
// #if DIM2
var FeatureType;
(function (FeatureType) {
    FeatureType[FeatureType["Vertex"] = 0] = "Vertex";
    FeatureType[FeatureType["Face"] = 1] = "Face";
    FeatureType[FeatureType["Unknown"] = 2] = "Unknown";
})(FeatureType || (FeatureType = {}));
// #endif
//# sourceMappingURL=feature.js.map

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/geometry/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/geometry/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActiveCollisionTypes": () => (/* reexport safe */ _collider__WEBPACK_IMPORTED_MODULE_3__.ActiveCollisionTypes),
/* harmony export */   "Ball": () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_2__.Ball),
/* harmony export */   "BroadPhase": () => (/* reexport safe */ _broad_phase__WEBPACK_IMPORTED_MODULE_0__.BroadPhase),
/* harmony export */   "Capsule": () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_2__.Capsule),
/* harmony export */   "Collider": () => (/* reexport safe */ _collider__WEBPACK_IMPORTED_MODULE_3__.Collider),
/* harmony export */   "ColliderDesc": () => (/* reexport safe */ _collider__WEBPACK_IMPORTED_MODULE_3__.ColliderDesc),
/* harmony export */   "ColliderSet": () => (/* reexport safe */ _collider_set__WEBPACK_IMPORTED_MODULE_4__.ColliderSet),
/* harmony export */   "ConvexPolygon": () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_2__.ConvexPolygon),
/* harmony export */   "Cuboid": () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_2__.Cuboid),
/* harmony export */   "FeatureType": () => (/* reexport safe */ _feature__WEBPACK_IMPORTED_MODULE_5__.FeatureType),
/* harmony export */   "Heightfield": () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_2__.Heightfield),
/* harmony export */   "NarrowPhase": () => (/* reexport safe */ _narrow_phase__WEBPACK_IMPORTED_MODULE_1__.NarrowPhase),
/* harmony export */   "PointColliderProjection": () => (/* reexport safe */ _point__WEBPACK_IMPORTED_MODULE_7__.PointColliderProjection),
/* harmony export */   "PointProjection": () => (/* reexport safe */ _point__WEBPACK_IMPORTED_MODULE_7__.PointProjection),
/* harmony export */   "Polyline": () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_2__.Polyline),
/* harmony export */   "Ray": () => (/* reexport safe */ _ray__WEBPACK_IMPORTED_MODULE_6__.Ray),
/* harmony export */   "RayColliderIntersection": () => (/* reexport safe */ _ray__WEBPACK_IMPORTED_MODULE_6__.RayColliderIntersection),
/* harmony export */   "RayColliderToi": () => (/* reexport safe */ _ray__WEBPACK_IMPORTED_MODULE_6__.RayColliderToi),
/* harmony export */   "RayIntersection": () => (/* reexport safe */ _ray__WEBPACK_IMPORTED_MODULE_6__.RayIntersection),
/* harmony export */   "RoundConvexPolygon": () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_2__.RoundConvexPolygon),
/* harmony export */   "RoundCuboid": () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_2__.RoundCuboid),
/* harmony export */   "RoundTriangle": () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_2__.RoundTriangle),
/* harmony export */   "Segment": () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_2__.Segment),
/* harmony export */   "Shape": () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_2__.Shape),
/* harmony export */   "ShapeColliderTOI": () => (/* reexport safe */ _toi__WEBPACK_IMPORTED_MODULE_8__.ShapeColliderTOI),
/* harmony export */   "ShapeContact": () => (/* reexport safe */ _contact__WEBPACK_IMPORTED_MODULE_9__.ShapeContact),
/* harmony export */   "ShapeTOI": () => (/* reexport safe */ _toi__WEBPACK_IMPORTED_MODULE_8__.ShapeTOI),
/* harmony export */   "ShapeType": () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_2__.ShapeType),
/* harmony export */   "TempContactManifold": () => (/* reexport safe */ _narrow_phase__WEBPACK_IMPORTED_MODULE_1__.TempContactManifold),
/* harmony export */   "TriMesh": () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_2__.TriMesh),
/* harmony export */   "Triangle": () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_2__.Triangle)
/* harmony export */ });
/* harmony import */ var _broad_phase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./broad_phase */ "./node_modules/@dimforge/rapier2d/geometry/broad_phase.js");
/* harmony import */ var _narrow_phase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./narrow_phase */ "./node_modules/@dimforge/rapier2d/geometry/narrow_phase.js");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shape */ "./node_modules/@dimforge/rapier2d/geometry/shape.js");
/* harmony import */ var _collider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collider */ "./node_modules/@dimforge/rapier2d/geometry/collider.js");
/* harmony import */ var _collider_set__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collider_set */ "./node_modules/@dimforge/rapier2d/geometry/collider_set.js");
/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feature */ "./node_modules/@dimforge/rapier2d/geometry/feature.js");
/* harmony import */ var _ray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ray */ "./node_modules/@dimforge/rapier2d/geometry/ray.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./point */ "./node_modules/@dimforge/rapier2d/geometry/point.js");
/* harmony import */ var _toi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./toi */ "./node_modules/@dimforge/rapier2d/geometry/toi.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact */ "./node_modules/@dimforge/rapier2d/geometry/contact.js");











//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/geometry/narrow_phase.js":
/*!******************************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/geometry/narrow_phase.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NarrowPhase": () => (/* binding */ NarrowPhase),
/* harmony export */   "TempContactManifold": () => (/* binding */ TempContactManifold)
/* harmony export */ });
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../raw */ "./node_modules/@dimforge/rapier2d/rapier_wasm2d_bg.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math */ "./node_modules/@dimforge/rapier2d/math.js");


/**
 * The narrow-phase used for precise collision-detection.
 *
 * To avoid leaking WASM resources, this MUST be freed manually with `narrowPhase.free()`
 * once you are done using it.
 */
class NarrowPhase {
    constructor(raw) {
        this.raw = raw || new _raw__WEBPACK_IMPORTED_MODULE_0__.RawNarrowPhase();
        this.tempManifold = new TempContactManifold(null);
    }
    /**
     * Release the WASM memory occupied by this narrow-phase.
     */
    free() {
        this.raw.free();
        this.raw = undefined;
    }
    /**
     * Enumerates all the colliders potentially in contact with the given collider.
     *
     * @param collider1 - The second collider involved in the contact.
     * @param f - Closure that will be called on each collider that is in contact with `collider1`.
     */
    contactsWith(collider1, f) {
        this.raw.contacts_with(collider1, f);
    }
    /**
     * Enumerates all the colliders intersecting the given colliders, assuming one of them
     * is a sensor.
     */
    intersectionsWith(collider1, f) {
        this.raw.intersections_with(collider1, f);
    }
    /**
     * Iterates through all the contact manifolds between the given pair of colliders.
     *
     * @param collider1 - The first collider involved in the contact.
     * @param collider2 - The second collider involved in the contact.
     * @param f - Closure that will be called on each contact manifold between the two colliders. If the second argument
     *            passed to this closure is `true`, then the contact manifold data is flipped, i.e., methods like `localNormal1`
     *            actually apply to the `collider2` and fields like `localNormal2` apply to the `collider1`.
     */
    contactPair(collider1, collider2, f) {
        const rawPair = this.raw.contact_pair(collider1, collider2);
        if (!!rawPair) {
            const flipped = rawPair.collider1() != collider1;
            let i;
            for (i = 0; i < rawPair.numContactManifolds(); ++i) {
                this.tempManifold.raw = rawPair.contactManifold(i);
                if (!!this.tempManifold.raw) {
                    f(this.tempManifold, flipped);
                }
                // SAFETY: The RawContactManifold stores a raw pointer that will be invalidated
                //         at the next timestep. So we must be sure to free the pair here
                //         to avoid unsoundness in the Rust code.
                this.tempManifold.free();
            }
            rawPair.free();
        }
    }
    /**
     * Returns `true` if `collider1` and `collider2` intersect and at least one of them is a sensor.
     * @param collider1 − The first collider involved in the intersection.
     * @param collider2 − The second collider involved in the intersection.
     */
    intersectionPair(collider1, collider2) {
        return this.raw.intersection_pair(collider1, collider2);
    }
}
class TempContactManifold {
    constructor(raw) {
        this.raw = raw;
    }
    free() {
        this.raw.free();
        this.raw = undefined;
    }
    normal() {
        return _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.fromRaw(this.raw.normal());
    }
    localNormal1() {
        return _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.fromRaw(this.raw.local_n1());
    }
    localNormal2() {
        return _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.fromRaw(this.raw.local_n2());
    }
    subshape1() {
        return this.raw.subshape1();
    }
    subshape2() {
        return this.raw.subshape2();
    }
    numContacts() {
        return this.raw.num_contacts();
    }
    localContactPoint1(i) {
        return _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.fromRaw(this.raw.contact_local_p1(i));
    }
    localContactPoint2(i) {
        return _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.fromRaw(this.raw.contact_local_p2(i));
    }
    contactDist(i) {
        return this.raw.contact_dist(i);
    }
    contactFid1(i) {
        return this.raw.contact_fid1(i);
    }
    contactFid2(i) {
        return this.raw.contact_fid2(i);
    }
    contactImpulse(i) {
        return this.raw.contact_impulse(i);
    }
    // #if DIM2
    contactTangentImpulse(i) {
        return this.raw.contact_tangent_impulse(i);
    }
    // #endif
    numSolverContacts() {
        return this.raw.num_solver_contacts();
    }
    solverContactPoint(i) {
        return _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.fromRaw(this.raw.solver_contact_point(i));
    }
    solverContactDist(i) {
        return this.raw.solver_contact_dist(i);
    }
    solverContactFriction(i) {
        return this.raw.solver_contact_friction(i);
    }
    solverContactRestitution(i) {
        return this.raw.solver_contact_restitution(i);
    }
    solverContactTangentVelocity(i) {
        return _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.fromRaw(this.raw.solver_contact_tangent_velocity(i));
    }
}
//# sourceMappingURL=narrow_phase.js.map

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/geometry/point.js":
/*!***********************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/geometry/point.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointColliderProjection": () => (/* binding */ PointColliderProjection),
/* harmony export */   "PointProjection": () => (/* binding */ PointProjection)
/* harmony export */ });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/@dimforge/rapier2d/math.js");
/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature */ "./node_modules/@dimforge/rapier2d/geometry/feature.js");


/**
 * The projection of a point on a collider.
 */
class PointProjection {
    constructor(point, isInside) {
        this.point = point;
        this.isInside = isInside;
    }
    static fromRaw(raw) {
        if (!raw)
            return null;
        const result = new PointProjection(_math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(raw.point()), raw.isInside());
        raw.free();
        return result;
    }
}
/**
 * The projection of a point on a collider (includes the collider handle).
 */
class PointColliderProjection {
    constructor(collider, point, isInside, featureType, featureId) {
        /**
         * The type of the geometric feature the point was projected on.
         */
        this.featureType = _feature__WEBPACK_IMPORTED_MODULE_1__.FeatureType.Unknown;
        /**
         * The id of the geometric feature the point was projected on.
         */
        this.featureId = undefined;
        this.collider = collider;
        this.point = point;
        this.isInside = isInside;
        if (featureId !== undefined)
            this.featureId = featureId;
        if (featureType !== undefined)
            this.featureType = featureType;
    }
    static fromRaw(colliderSet, raw) {
        if (!raw)
            return null;
        const result = new PointColliderProjection(colliderSet.get(raw.colliderHandle()), _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(raw.point()), raw.isInside(), raw.featureType(), raw.featureId());
        raw.free();
        return result;
    }
}
//# sourceMappingURL=point.js.map

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/geometry/ray.js":
/*!*********************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/geometry/ray.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ray": () => (/* binding */ Ray),
/* harmony export */   "RayColliderIntersection": () => (/* binding */ RayColliderIntersection),
/* harmony export */   "RayColliderToi": () => (/* binding */ RayColliderToi),
/* harmony export */   "RayIntersection": () => (/* binding */ RayIntersection)
/* harmony export */ });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math */ "./node_modules/@dimforge/rapier2d/math.js");
/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature */ "./node_modules/@dimforge/rapier2d/geometry/feature.js");


/**
 * A ray. This is a directed half-line.
 */
class Ray {
    /**
     * Builds a ray from its origin and direction.
     *
     * @param origin - The ray's starting point.
     * @param dir - The ray's direction of propagation.
     */
    constructor(origin, dir) {
        this.origin = origin;
        this.dir = dir;
    }
    pointAt(t) {
        return {
            x: this.origin.x + this.dir.x * t,
            y: this.origin.y + this.dir.y * t,
        };
    }
}
/**
 * The intersection between a ray and a collider.
 */
class RayIntersection {
    constructor(toi, normal, featureType, featureId) {
        /**
         * The type of the geometric feature the point was projected on.
         */
        this.featureType = _feature__WEBPACK_IMPORTED_MODULE_0__.FeatureType.Unknown;
        /**
         * The id of the geometric feature the point was projected on.
         */
        this.featureId = undefined;
        this.toi = toi;
        this.normal = normal;
        if (featureId !== undefined)
            this.featureId = featureId;
        if (featureType !== undefined)
            this.featureType = featureType;
    }
    static fromRaw(raw) {
        if (!raw)
            return null;
        const result = new RayIntersection(raw.toi(), _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.fromRaw(raw.normal()), raw.featureType(), raw.featureId());
        raw.free();
        return result;
    }
}
/**
 * The intersection between a ray and a collider (includes the collider handle).
 */
class RayColliderIntersection {
    constructor(collider, toi, normal, featureType, featureId) {
        /**
         * The type of the geometric feature the point was projected on.
         */
        this.featureType = _feature__WEBPACK_IMPORTED_MODULE_0__.FeatureType.Unknown;
        /**
         * The id of the geometric feature the point was projected on.
         */
        this.featureId = undefined;
        this.collider = collider;
        this.toi = toi;
        this.normal = normal;
        if (featureId !== undefined)
            this.featureId = featureId;
        if (featureType !== undefined)
            this.featureType = featureType;
    }
    static fromRaw(colliderSet, raw) {
        if (!raw)
            return null;
        const result = new RayColliderIntersection(colliderSet.get(raw.colliderHandle()), raw.toi(), _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.fromRaw(raw.normal()), raw.featureType(), raw.featureId());
        raw.free();
        return result;
    }
}
/**
 * The time of impact between a ray and a collider.
 */
class RayColliderToi {
    constructor(collider, toi) {
        this.collider = collider;
        this.toi = toi;
    }
    static fromRaw(colliderSet, raw) {
        if (!raw)
            return null;
        const result = new RayColliderToi(colliderSet.get(raw.colliderHandle()), raw.toi());
        raw.free();
        return result;
    }
}
//# sourceMappingURL=ray.js.map

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/geometry/shape.js":
/*!***********************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/geometry/shape.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ball": () => (/* binding */ Ball),
/* harmony export */   "Capsule": () => (/* binding */ Capsule),
/* harmony export */   "ConvexPolygon": () => (/* binding */ ConvexPolygon),
/* harmony export */   "Cuboid": () => (/* binding */ Cuboid),
/* harmony export */   "Heightfield": () => (/* binding */ Heightfield),
/* harmony export */   "Polyline": () => (/* binding */ Polyline),
/* harmony export */   "RoundConvexPolygon": () => (/* binding */ RoundConvexPolygon),
/* harmony export */   "RoundCuboid": () => (/* binding */ RoundCuboid),
/* harmony export */   "RoundTriangle": () => (/* binding */ RoundTriangle),
/* harmony export */   "Segment": () => (/* binding */ Segment),
/* harmony export */   "Shape": () => (/* binding */ Shape),
/* harmony export */   "ShapeType": () => (/* binding */ ShapeType),
/* harmony export */   "TriMesh": () => (/* binding */ TriMesh),
/* harmony export */   "Triangle": () => (/* binding */ Triangle)
/* harmony export */ });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/@dimforge/rapier2d/math.js");
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../raw */ "./node_modules/@dimforge/rapier2d/rapier_wasm2d_bg.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./node_modules/@dimforge/rapier2d/geometry/contact.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./point */ "./node_modules/@dimforge/rapier2d/geometry/point.js");
/* harmony import */ var _ray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ray */ "./node_modules/@dimforge/rapier2d/geometry/ray.js");
/* harmony import */ var _toi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toi */ "./node_modules/@dimforge/rapier2d/geometry/toi.js");






class Shape {
    /**
     * instant mode without cache
     */
    static fromRaw(rawSet, handle) {
        const rawType = rawSet.coShapeType(handle);
        let extents;
        let borderRadius;
        let vs;
        let indices;
        let halfHeight;
        let radius;
        switch (rawType) {
            case ShapeType.Ball:
                return new Ball(rawSet.coRadius(handle));
            case ShapeType.Cuboid:
                extents = rawSet.coHalfExtents(handle);
                // #if DIM2
                return new Cuboid(extents.x, extents.y);
            // #endif
            case ShapeType.RoundCuboid:
                extents = rawSet.coHalfExtents(handle);
                borderRadius = rawSet.coRoundRadius(handle);
                // #if DIM2
                return new RoundCuboid(extents.x, extents.y, borderRadius);
            // #endif
            case ShapeType.Capsule:
                halfHeight = rawSet.coHalfHeight(handle);
                radius = rawSet.coRadius(handle);
                return new Capsule(halfHeight, radius);
            case ShapeType.Segment:
                vs = rawSet.coVertices(handle);
                // #if DIM2
                return new Segment(_math__WEBPACK_IMPORTED_MODULE_0__.VectorOps["new"](vs[0], vs[1]), _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps["new"](vs[2], vs[3]));
            // #endif
            case ShapeType.Polyline:
                vs = rawSet.coVertices(handle);
                indices = rawSet.coIndices(handle);
                return new Polyline(vs, indices);
            case ShapeType.Triangle:
                vs = rawSet.coVertices(handle);
                // #if DIM2
                return new Triangle(_math__WEBPACK_IMPORTED_MODULE_0__.VectorOps["new"](vs[0], vs[1]), _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps["new"](vs[2], vs[3]), _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps["new"](vs[4], vs[5]));
            // #endif
            case ShapeType.RoundTriangle:
                vs = rawSet.coVertices(handle);
                borderRadius = rawSet.coRoundRadius(handle);
                // #if DIM2
                return new RoundTriangle(_math__WEBPACK_IMPORTED_MODULE_0__.VectorOps["new"](vs[0], vs[1]), _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps["new"](vs[2], vs[3]), _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps["new"](vs[4], vs[5]), borderRadius);
            // #endif
            case ShapeType.TriMesh:
                vs = rawSet.coVertices(handle);
                indices = rawSet.coIndices(handle);
                return new TriMesh(vs, indices);
            case ShapeType.HeightField:
                const scale = rawSet.coHeightfieldScale(handle);
                const heights = rawSet.coHeightfieldHeights(handle);
                // #if DIM2
                return new Heightfield(heights, scale);
            // #endif
            // #if DIM2
            case ShapeType.ConvexPolygon:
                vs = rawSet.coVertices(handle);
                return new ConvexPolygon(vs, false);
            case ShapeType.RoundConvexPolygon:
                vs = rawSet.coVertices(handle);
                borderRadius = rawSet.coRoundRadius(handle);
                return new RoundConvexPolygon(vs, borderRadius, false);
            // #endif
            default:
                throw new Error("unknown shape type: " + rawType);
        }
    }
    /**
     * Computes the time of impact between two moving shapes.
     * @param shapePos1 - The initial position of this sahpe.
     * @param shapeRot1 - The rotation of this shape.
     * @param shapeVel1 - The velocity of this shape.
     * @param shape2 - The second moving shape.
     * @param shapePos2 - The initial position of the second shape.
     * @param shapeRot2 - The rotation of the second shape.
     * @param shapeVel2 - The velocity of the second shape.
     * @param maxToi - The maximum time when the inpact can happen.
     * @returns If the two moving shapes collider at some point along their trajectories, this retruns the
     *  time at which the two shape collider as well as the contact information durning the impact. Returns
     *  `null`if the two shapes never collide along their paths.
     */
    castShape(shapePos1, shapeRot1, shapeVel1, shape2, shapePos2, shapeRot2, shapeVel2, maxToi) {
        let rawPos1 = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(shapePos1);
        let rawRot1 = _math__WEBPACK_IMPORTED_MODULE_0__.RotationOps.intoRaw(shapeRot1);
        let rawVel1 = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(shapeVel1);
        let rawPos2 = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(shapePos2);
        let rawRot2 = _math__WEBPACK_IMPORTED_MODULE_0__.RotationOps.intoRaw(shapeRot2);
        let rawVel2 = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(shapeVel2);
        let rawShape1 = this.intoRaw();
        let rawShape2 = shape2.intoRaw();
        let result = _toi__WEBPACK_IMPORTED_MODULE_1__.ShapeTOI.fromRaw(null, rawShape1.castShape(rawPos1, rawRot1, rawVel1, rawShape2, rawPos2, rawRot2, rawVel2, maxToi));
        rawPos1.free();
        rawRot1.free();
        rawVel1.free();
        rawPos2.free();
        rawRot2.free();
        rawVel2.free();
        rawShape1.free();
        rawShape2.free();
        return result;
    }
    /**
     * Tests if this shape intersects another shape.
     *
     * @param shapePos1 - The position of this shape.
     * @param shapeRot1 - The rotation of this shape.
     * @param shape2  - The second shape to test.
     * @param shapePos2 - The position of the second shape.
     * @param shapeRot2 - The rotation of the second shape.
     * @returns `true` if the two shapes intersect, `false` if they don’t.
     */
    intersectsShape(shapePos1, shapeRot1, shape2, shapePos2, shapeRot2) {
        let rawPos1 = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(shapePos1);
        let rawRot1 = _math__WEBPACK_IMPORTED_MODULE_0__.RotationOps.intoRaw(shapeRot1);
        let rawPos2 = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(shapePos2);
        let rawRot2 = _math__WEBPACK_IMPORTED_MODULE_0__.RotationOps.intoRaw(shapeRot2);
        let rawShape1 = this.intoRaw();
        let rawShape2 = shape2.intoRaw();
        let result = rawShape1.intersectsShape(rawPos1, rawRot1, rawShape2, rawPos2, rawRot2);
        rawPos1.free();
        rawRot1.free();
        rawPos2.free();
        rawRot2.free();
        rawShape1.free();
        rawShape2.free();
        return result;
    }
    /**
     * Computes one pair of contact points between two shapes.
     *
     * @param shapePos1 - The initial position of this sahpe.
     * @param shapeRot1 - The rotation of this shape.
     * @param shape2 - The second shape.
     * @param shapePos2 - The initial position of the second shape.
     * @param shapeRot2 - The rotation of the second shape.
     * @param prediction - The prediction value, if the shapes are separated by a distance greater than this value, test will fail.
     * @returns `null` if the shapes are separated by a distance greater than prediction, otherwise contact details. The result is given in world-space.
     */
    contactShape(shapePos1, shapeRot1, shape2, shapePos2, shapeRot2, prediction) {
        let rawPos1 = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(shapePos1);
        let rawRot1 = _math__WEBPACK_IMPORTED_MODULE_0__.RotationOps.intoRaw(shapeRot1);
        let rawPos2 = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(shapePos2);
        let rawRot2 = _math__WEBPACK_IMPORTED_MODULE_0__.RotationOps.intoRaw(shapeRot2);
        let rawShape1 = this.intoRaw();
        let rawShape2 = shape2.intoRaw();
        let result = _contact__WEBPACK_IMPORTED_MODULE_2__.ShapeContact.fromRaw(rawShape1.contactShape(rawPos1, rawRot1, rawShape2, rawPos2, rawRot2, prediction));
        rawPos1.free();
        rawRot1.free();
        rawPos2.free();
        rawRot2.free();
        rawShape1.free();
        rawShape2.free();
        return result;
    }
    containsPoint(shapePos, shapeRot, point) {
        let rawPos = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(shapePos);
        let rawRot = _math__WEBPACK_IMPORTED_MODULE_0__.RotationOps.intoRaw(shapeRot);
        let rawPoint = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(point);
        let rawShape = this.intoRaw();
        let result = rawShape.containsPoint(rawPos, rawRot, rawPoint);
        rawPos.free();
        rawRot.free();
        rawPoint.free();
        rawShape.free();
        return result;
    }
    projectPoint(shapePos, shapeRot, point, solid) {
        let rawPos = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(shapePos);
        let rawRot = _math__WEBPACK_IMPORTED_MODULE_0__.RotationOps.intoRaw(shapeRot);
        let rawPoint = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(point);
        let rawShape = this.intoRaw();
        let result = _point__WEBPACK_IMPORTED_MODULE_3__.PointProjection.fromRaw(rawShape.projectPoint(rawPos, rawRot, rawPoint, solid));
        rawPos.free();
        rawRot.free();
        rawPoint.free();
        rawShape.free();
        return result;
    }
    intersectsRay(ray, shapePos, shapeRot, maxToi) {
        let rawPos = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(shapePos);
        let rawRot = _math__WEBPACK_IMPORTED_MODULE_0__.RotationOps.intoRaw(shapeRot);
        let rawRayOrig = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(ray.origin);
        let rawRayDir = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(ray.dir);
        let rawShape = this.intoRaw();
        let result = rawShape.intersectsRay(rawPos, rawRot, rawRayOrig, rawRayDir, maxToi);
        rawPos.free();
        rawRot.free();
        rawRayOrig.free();
        rawRayDir.free();
        rawShape.free();
        return result;
    }
    castRay(ray, shapePos, shapeRot, maxToi, solid) {
        let rawPos = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(shapePos);
        let rawRot = _math__WEBPACK_IMPORTED_MODULE_0__.RotationOps.intoRaw(shapeRot);
        let rawRayOrig = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(ray.origin);
        let rawRayDir = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(ray.dir);
        let rawShape = this.intoRaw();
        let result = rawShape.castRay(rawPos, rawRot, rawRayOrig, rawRayDir, maxToi, solid);
        rawPos.free();
        rawRot.free();
        rawRayOrig.free();
        rawRayDir.free();
        rawShape.free();
        return result;
    }
    castRayAndGetNormal(ray, shapePos, shapeRot, maxToi, solid) {
        let rawPos = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(shapePos);
        let rawRot = _math__WEBPACK_IMPORTED_MODULE_0__.RotationOps.intoRaw(shapeRot);
        let rawRayOrig = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(ray.origin);
        let rawRayDir = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(ray.dir);
        let rawShape = this.intoRaw();
        let result = _ray__WEBPACK_IMPORTED_MODULE_4__.RayIntersection.fromRaw(rawShape.castRayAndGetNormal(rawPos, rawRot, rawRayOrig, rawRayDir, maxToi, solid));
        rawPos.free();
        rawRot.free();
        rawRayOrig.free();
        rawRayDir.free();
        rawShape.free();
        return result;
    }
}
// #if DIM2
/**
 * An enumeration representing the type of a shape.
 */
var ShapeType;
(function (ShapeType) {
    ShapeType[ShapeType["Ball"] = 0] = "Ball";
    ShapeType[ShapeType["Cuboid"] = 1] = "Cuboid";
    ShapeType[ShapeType["Capsule"] = 2] = "Capsule";
    ShapeType[ShapeType["Segment"] = 3] = "Segment";
    ShapeType[ShapeType["Polyline"] = 4] = "Polyline";
    ShapeType[ShapeType["Triangle"] = 5] = "Triangle";
    ShapeType[ShapeType["TriMesh"] = 6] = "TriMesh";
    ShapeType[ShapeType["HeightField"] = 7] = "HeightField";
    // Compound = 8,
    ShapeType[ShapeType["ConvexPolygon"] = 9] = "ConvexPolygon";
    ShapeType[ShapeType["RoundCuboid"] = 10] = "RoundCuboid";
    ShapeType[ShapeType["RoundTriangle"] = 11] = "RoundTriangle";
    ShapeType[ShapeType["RoundConvexPolygon"] = 12] = "RoundConvexPolygon";
})(ShapeType || (ShapeType = {}));
// #endif
/**
 * A shape that is a sphere in 3D and a circle in 2D.
 */
class Ball extends Shape {
    /**
     * Creates a new ball with the given radius.
     * @param radius - The balls radius.
     */
    constructor(radius) {
        super();
        this.type = ShapeType.Ball;
        this.radius = radius;
    }
    intoRaw() {
        return _raw__WEBPACK_IMPORTED_MODULE_5__.RawShape.ball(this.radius);
    }
}
/**
 * A shape that is a box in 3D and a rectangle in 2D.
 */
class Cuboid extends Shape {
    // #if DIM2
    /**
     * Creates a new 2D rectangle.
     * @param hx - The half width of the rectangle.
     * @param hy - The helf height of the rectangle.
     */
    constructor(hx, hy) {
        super();
        this.type = ShapeType.Cuboid;
        this.halfExtents = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps["new"](hx, hy);
    }
    // #endif
    intoRaw() {
        // #if DIM2
        return _raw__WEBPACK_IMPORTED_MODULE_5__.RawShape.cuboid(this.halfExtents.x, this.halfExtents.y);
        // #endif
    }
}
/**
 * A shape that is a box in 3D and a rectangle in 2D, with round corners.
 */
class RoundCuboid extends Shape {
    // #if DIM2
    /**
     * Creates a new 2D rectangle.
     * @param hx - The half width of the rectangle.
     * @param hy - The helf height of the rectangle.
     * @param borderRadius - The radius of the borders of this cuboid. This will
     *   effectively increase the half-extents of the cuboid by this radius.
     */
    constructor(hx, hy, borderRadius) {
        super();
        this.type = ShapeType.RoundCuboid;
        this.halfExtents = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps["new"](hx, hy);
        this.borderRadius = borderRadius;
    }
    // #endif
    intoRaw() {
        // #if DIM2
        return _raw__WEBPACK_IMPORTED_MODULE_5__.RawShape.roundCuboid(this.halfExtents.x, this.halfExtents.y, this.borderRadius);
        // #endif
    }
}
/**
 * A shape that is a capsule.
 */
class Capsule extends Shape {
    /**
     * Creates a new capsule with the given radius and half-height.
     * @param halfHeight - The balls half-height along the `y` axis.
     * @param radius - The balls radius.
     */
    constructor(halfHeight, radius) {
        super();
        this.type = ShapeType.Capsule;
        this.halfHeight = halfHeight;
        this.radius = radius;
    }
    intoRaw() {
        return _raw__WEBPACK_IMPORTED_MODULE_5__.RawShape.capsule(this.halfHeight, this.radius);
    }
}
/**
 * A shape that is a segment.
 */
class Segment extends Shape {
    /**
     * Creates a new segment shape.
     * @param a - The first point of the segment.
     * @param b - The second point of the segment.
     */
    constructor(a, b) {
        super();
        this.type = ShapeType.Segment;
        this.a = a;
        this.b = b;
    }
    intoRaw() {
        let ra = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(this.a);
        let rb = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(this.b);
        let result = _raw__WEBPACK_IMPORTED_MODULE_5__.RawShape.segment(ra, rb);
        ra.free();
        rb.free();
        return result;
    }
}
/**
 * A shape that is a segment.
 */
class Triangle extends Shape {
    /**
     * Creates a new triangle shape.
     *
     * @param a - The first point of the triangle.
     * @param b - The second point of the triangle.
     * @param c - The third point of the triangle.
     */
    constructor(a, b, c) {
        super();
        this.type = ShapeType.Triangle;
        this.a = a;
        this.b = b;
        this.c = c;
    }
    intoRaw() {
        let ra = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(this.a);
        let rb = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(this.b);
        let rc = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(this.c);
        let result = _raw__WEBPACK_IMPORTED_MODULE_5__.RawShape.triangle(ra, rb, rc);
        ra.free();
        rb.free();
        rc.free();
        return result;
    }
}
/**
 * A shape that is a triangle with round borders and a non-zero thickness.
 */
class RoundTriangle extends Shape {
    /**
     * Creates a new triangle shape with round corners.
     *
     * @param a - The first point of the triangle.
     * @param b - The second point of the triangle.
     * @param c - The third point of the triangle.
     * @param borderRadius - The radius of the borders of this triangle. In 3D,
     *   this is also equal to half the thickness of the triangle.
     */
    constructor(a, b, c, borderRadius) {
        super();
        this.type = ShapeType.RoundTriangle;
        this.a = a;
        this.b = b;
        this.c = c;
        this.borderRadius = borderRadius;
    }
    intoRaw() {
        let ra = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(this.a);
        let rb = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(this.b);
        let rc = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(this.c);
        let result = _raw__WEBPACK_IMPORTED_MODULE_5__.RawShape.roundTriangle(ra, rb, rc, this.borderRadius);
        ra.free();
        rb.free();
        rc.free();
        return result;
    }
}
/**
 * A shape that is a triangle mesh.
 */
class Polyline extends Shape {
    /**
     * Creates a new polyline shape.
     *
     * @param vertices - The coordinates of the polyline's vertices.
     * @param indices - The indices of the polyline's segments. If this is `null` or not provided, then
     *    the vertices are assumed to form a line strip.
     */
    constructor(vertices, indices) {
        super();
        this.type = ShapeType.Polyline;
        this.vertices = vertices;
        this.indices = indices !== null && indices !== void 0 ? indices : new Uint32Array(0);
    }
    intoRaw() {
        return _raw__WEBPACK_IMPORTED_MODULE_5__.RawShape.polyline(this.vertices, this.indices);
    }
}
/**
 * A shape that is a triangle mesh.
 */
class TriMesh extends Shape {
    /**
     * Creates a new triangle mesh shape.
     *
     * @param vertices - The coordinates of the triangle mesh's vertices.
     * @param indices - The indices of the triangle mesh's triangles.
     */
    constructor(vertices, indices) {
        super();
        this.type = ShapeType.TriMesh;
        this.vertices = vertices;
        this.indices = indices;
    }
    intoRaw() {
        return _raw__WEBPACK_IMPORTED_MODULE_5__.RawShape.trimesh(this.vertices, this.indices);
    }
}
// #if DIM2
/**
 * A shape that is a convex polygon.
 */
class ConvexPolygon extends Shape {
    /**
     * Creates a new convex polygon shape.
     *
     * @param vertices - The coordinates of the convex polygon's vertices.
     * @param skipConvexHullComputation - If set to `true`, the input points will
     *   be assumed to form a convex polyline and no convex-hull computation will
     *   be done automatically.
     */
    constructor(vertices, skipConvexHullComputation) {
        super();
        this.type = ShapeType.ConvexPolygon;
        this.vertices = vertices;
        this.skipConvexHullComputation = !!skipConvexHullComputation;
    }
    intoRaw() {
        if (this.skipConvexHullComputation) {
            return _raw__WEBPACK_IMPORTED_MODULE_5__.RawShape.convexPolyline(this.vertices);
        }
        else {
            return _raw__WEBPACK_IMPORTED_MODULE_5__.RawShape.convexHull(this.vertices);
        }
    }
}
/**
 * A shape that is a convex polygon.
 */
class RoundConvexPolygon extends Shape {
    /**
     * Creates a new convex polygon shape.
     *
     * @param vertices - The coordinates of the convex polygon's vertices.
     * @param borderRadius - The radius of the borders of this convex polygon.
     * @param skipConvexHullComputation - If set to `true`, the input points will
     *   be assumed to form a convex polyline and no convex-hull computation will
     *   be done automatically.
     */
    constructor(vertices, borderRadius, skipConvexHullComputation) {
        super();
        this.type = ShapeType.RoundConvexPolygon;
        this.vertices = vertices;
        this.borderRadius = borderRadius;
        this.skipConvexHullComputation = !!skipConvexHullComputation;
    }
    intoRaw() {
        if (this.skipConvexHullComputation) {
            return _raw__WEBPACK_IMPORTED_MODULE_5__.RawShape.roundConvexPolyline(this.vertices, this.borderRadius);
        }
        else {
            return _raw__WEBPACK_IMPORTED_MODULE_5__.RawShape.roundConvexHull(this.vertices, this.borderRadius);
        }
    }
}
/**
 * A shape that is a heightfield.
 */
class Heightfield extends Shape {
    /**
     * Creates a new heightfield shape.
     *
     * @param heights - The heights of the heightfield, along its local `y` axis.
     * @param scale - The scale factor applied to the heightfield.
     */
    constructor(heights, scale) {
        super();
        this.type = ShapeType.HeightField;
        this.heights = heights;
        this.scale = scale;
    }
    intoRaw() {
        let rawScale = _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.intoRaw(this.scale);
        let rawShape = _raw__WEBPACK_IMPORTED_MODULE_5__.RawShape.heightfield(this.heights, rawScale);
        rawScale.free();
        return rawShape;
    }
}
// #endif
//# sourceMappingURL=shape.js.map

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/geometry/toi.js":
/*!*********************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/geometry/toi.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShapeColliderTOI": () => (/* binding */ ShapeColliderTOI),
/* harmony export */   "ShapeTOI": () => (/* binding */ ShapeTOI)
/* harmony export */ });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/@dimforge/rapier2d/math.js");

/**
 * The intersection between a ray and a collider.
 */
class ShapeTOI {
    constructor(toi, witness1, witness2, normal1, normal2) {
        this.toi = toi;
        this.witness1 = witness1;
        this.witness2 = witness2;
        this.normal1 = normal1;
        this.normal2 = normal2;
    }
    static fromRaw(colliderSet, raw) {
        if (!raw)
            return null;
        const result = new ShapeTOI(raw.toi(), _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(raw.witness1()), _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(raw.witness2()), _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(raw.normal1()), _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(raw.normal2()));
        raw.free();
        return result;
    }
}
/**
 * The intersection between a ray and a collider.
 */
class ShapeColliderTOI extends ShapeTOI {
    constructor(collider, toi, witness1, witness2, normal1, normal2) {
        super(toi, witness1, witness2, normal1, normal2);
        this.collider = collider;
    }
    static fromRaw(colliderSet, raw) {
        if (!raw)
            return null;
        const result = new ShapeColliderTOI(colliderSet.get(raw.colliderHandle()), raw.toi(), _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(raw.witness1()), _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(raw.witness2()), _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(raw.normal1()), _math__WEBPACK_IMPORTED_MODULE_0__.VectorOps.fromRaw(raw.normal2()));
        raw.free();
        return result;
    }
}
//# sourceMappingURL=toi.js.map

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/math.js":
/*!*************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/math.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RotationOps": () => (/* binding */ RotationOps),
/* harmony export */   "Vector2": () => (/* binding */ Vector2),
/* harmony export */   "VectorOps": () => (/* binding */ VectorOps)
/* harmony export */ });
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raw */ "./node_modules/@dimforge/rapier2d/rapier_wasm2d_bg.js");

/**
 * A 2D vector.
 */
class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class VectorOps {
    static new(x, y) {
        return new Vector2(x, y);
    }
    static zeros() {
        return VectorOps.new(0.0, 0.0);
    }
    // FIXME: type ram: RawVector?
    static fromRaw(raw) {
        if (!raw)
            return null;
        let res = VectorOps.new(raw.x, raw.y);
        raw.free();
        return res;
    }
    static intoRaw(v) {
        return new _raw__WEBPACK_IMPORTED_MODULE_0__.RawVector(v.x, v.y);
    }
}
class RotationOps {
    static identity() {
        return 0.0;
    }
    static fromRaw(raw) {
        if (!raw)
            return null;
        let res = raw.angle;
        raw.free();
        return res;
    }
    static intoRaw(angle) {
        return _raw__WEBPACK_IMPORTED_MODULE_0__.RawRotation.fromAngle(angle);
    }
}
// #endif
//# sourceMappingURL=math.js.map

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/pipeline/debug_render_pipeline.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/pipeline/debug_render_pipeline.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DebugRenderBuffers": () => (/* binding */ DebugRenderBuffers),
/* harmony export */   "DebugRenderPipeline": () => (/* binding */ DebugRenderPipeline)
/* harmony export */ });
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../raw */ "./node_modules/@dimforge/rapier2d/rapier_wasm2d_bg.js");

/**
 * The vertex and color buffers for debug-redering the physics scene.
 */
class DebugRenderBuffers {
    constructor(vertices, colors) {
        this.vertices = vertices;
        this.colors = colors;
    }
}
/**
 * A pipeline for rendering the physics scene.
 *
 * To avoid leaking WASM resources, this MUST be freed manually with `debugRenderPipeline.free()`
 * once you are done using it (and all the rigid-bodies it created).
 */
class DebugRenderPipeline {
    constructor(raw) {
        this.raw = raw || new _raw__WEBPACK_IMPORTED_MODULE_0__.RawDebugRenderPipeline();
    }
    /**
     * Release the WASM memory occupied by this serialization pipeline.
     */
    free() {
        this.raw.free();
        this.raw = undefined;
        this.vertices = undefined;
        this.colors = undefined;
    }
    render(bodies, colliders, impulse_joints, multibody_joints, narrow_phase) {
        this.raw.render(bodies.raw, colliders.raw, impulse_joints.raw, multibody_joints.raw, narrow_phase.raw);
        this.vertices = this.raw.vertices();
        this.colors = this.raw.colors();
    }
}
//# sourceMappingURL=debug_render_pipeline.js.map

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/pipeline/event_queue.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/pipeline/event_queue.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActiveEvents": () => (/* binding */ ActiveEvents),
/* harmony export */   "EventQueue": () => (/* binding */ EventQueue)
/* harmony export */ });
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../raw */ "./node_modules/@dimforge/rapier2d/rapier_wasm2d_bg.js");

/// Flags indicating what events are enabled for colliders.
var ActiveEvents;
(function (ActiveEvents) {
    /// Enable collision events.
    ActiveEvents[ActiveEvents["COLLISION_EVENTS"] = 1] = "COLLISION_EVENTS";
})(ActiveEvents || (ActiveEvents = {}));
/**
 * A structure responsible for collecting events generated
 * by the physics engine.
 *
 * To avoid leaking WASM resources, this MUST be freed manually with `eventQueue.free()`
 * once you are done using it.
 */
class EventQueue {
    /**
     * Creates a new event collector.
     *
     * @param autoDrain -setting this to `true` is strongly recommended. If true, the collector will
     * be automatically drained before each `world.step(collector)`. If false, the collector will
     * keep all events in memory unless it is manually drained/cleared; this may lead to unbounded use of
     * RAM if no drain is performed.
     */
    constructor(autoDrain, raw) {
        this.raw = raw || new _raw__WEBPACK_IMPORTED_MODULE_0__.RawEventQueue(autoDrain);
    }
    /**
     * Release the WASM memory occupied by this event-queue.
     */
    free() {
        this.raw.free();
        this.raw = undefined;
    }
    /**
     * Applies the given javascript closure on each collision event of this collector, then clear
     * the internal collision event buffer.
     *
     * @param f - JavaScript closure applied to each collision event. The
     * closure must take three arguments: two integers representing the handles of the colliders
     * involved in the collision, and a boolean indicating if the collision started (true) or stopped
     * (false).
     */
    drainCollisionEvents(f) {
        this.raw.drainCollisionEvents(f);
    }
    /**
     * Removes all events contained by this collector
     */
    clear() {
        this.raw.clear();
    }
}
//# sourceMappingURL=event_queue.js.map

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/pipeline/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/pipeline/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActiveEvents": () => (/* reexport safe */ _event_queue__WEBPACK_IMPORTED_MODULE_3__.ActiveEvents),
/* harmony export */   "ActiveHooks": () => (/* reexport safe */ _physics_hooks__WEBPACK_IMPORTED_MODULE_4__.ActiveHooks),
/* harmony export */   "DebugRenderBuffers": () => (/* reexport safe */ _debug_render_pipeline__WEBPACK_IMPORTED_MODULE_5__.DebugRenderBuffers),
/* harmony export */   "DebugRenderPipeline": () => (/* reexport safe */ _debug_render_pipeline__WEBPACK_IMPORTED_MODULE_5__.DebugRenderPipeline),
/* harmony export */   "EventQueue": () => (/* reexport safe */ _event_queue__WEBPACK_IMPORTED_MODULE_3__.EventQueue),
/* harmony export */   "PhysicsPipeline": () => (/* reexport safe */ _physics_pipeline__WEBPACK_IMPORTED_MODULE_1__.PhysicsPipeline),
/* harmony export */   "SerializationPipeline": () => (/* reexport safe */ _serialization_pipeline__WEBPACK_IMPORTED_MODULE_2__.SerializationPipeline),
/* harmony export */   "SolverFlags": () => (/* reexport safe */ _physics_hooks__WEBPACK_IMPORTED_MODULE_4__.SolverFlags),
/* harmony export */   "World": () => (/* reexport safe */ _world__WEBPACK_IMPORTED_MODULE_0__.World)
/* harmony export */ });
/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./world */ "./node_modules/@dimforge/rapier2d/pipeline/world.js");
/* harmony import */ var _physics_pipeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./physics_pipeline */ "./node_modules/@dimforge/rapier2d/pipeline/physics_pipeline.js");
/* harmony import */ var _serialization_pipeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serialization_pipeline */ "./node_modules/@dimforge/rapier2d/pipeline/serialization_pipeline.js");
/* harmony import */ var _event_queue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event_queue */ "./node_modules/@dimforge/rapier2d/pipeline/event_queue.js");
/* harmony import */ var _physics_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./physics_hooks */ "./node_modules/@dimforge/rapier2d/pipeline/physics_hooks.js");
/* harmony import */ var _debug_render_pipeline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./debug_render_pipeline */ "./node_modules/@dimforge/rapier2d/pipeline/debug_render_pipeline.js");






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/pipeline/physics_hooks.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/pipeline/physics_hooks.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActiveHooks": () => (/* binding */ ActiveHooks),
/* harmony export */   "SolverFlags": () => (/* binding */ SolverFlags)
/* harmony export */ });
var ActiveHooks;
(function (ActiveHooks) {
    ActiveHooks[ActiveHooks["FILTER_CONTACT_PAIRS"] = 1] = "FILTER_CONTACT_PAIRS";
    ActiveHooks[ActiveHooks["FILTER_INTERSECTION_PAIRS"] = 2] = "FILTER_INTERSECTION_PAIRS";
    // MODIFY_SOLVER_CONTACTS = 0b0100, /* Not supported yet in JS. */
})(ActiveHooks || (ActiveHooks = {}));
var SolverFlags;
(function (SolverFlags) {
    SolverFlags[SolverFlags["EMPTY"] = 0] = "EMPTY";
    SolverFlags[SolverFlags["COMPUTE_IMPULSE"] = 1] = "COMPUTE_IMPULSE";
})(SolverFlags || (SolverFlags = {}));
//# sourceMappingURL=physics_hooks.js.map

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/pipeline/physics_pipeline.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/pipeline/physics_pipeline.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhysicsPipeline": () => (/* binding */ PhysicsPipeline)
/* harmony export */ });
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../raw */ "./node_modules/@dimforge/rapier2d/rapier_wasm2d_bg.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math */ "./node_modules/@dimforge/rapier2d/math.js");


class PhysicsPipeline {
    constructor(raw) {
        this.raw = raw || new _raw__WEBPACK_IMPORTED_MODULE_0__.RawPhysicsPipeline();
    }
    free() {
        this.raw.free();
        this.raw = undefined;
    }
    step(gravity, integrationParameters, islands, broadPhase, narrowPhase, bodies, colliders, impulseJoints, multibodyJoints, ccdSolver, eventQueue, hooks) {
        let rawG = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(gravity);
        if (!!eventQueue) {
            this.raw.stepWithEvents(rawG, integrationParameters.raw, islands.raw, broadPhase.raw, narrowPhase.raw, bodies.raw, colliders.raw, impulseJoints.raw, multibodyJoints.raw, ccdSolver.raw, eventQueue.raw, hooks, !!hooks ? hooks.filterContactPair : null, !!hooks ? hooks.filterIntersectionPair : null);
        }
        else {
            this.raw.step(rawG, integrationParameters.raw, islands.raw, broadPhase.raw, narrowPhase.raw, bodies.raw, colliders.raw, impulseJoints.raw, multibodyJoints.raw, ccdSolver.raw);
        }
        rawG.free();
    }
}
//# sourceMappingURL=physics_pipeline.js.map

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/pipeline/query_pipeline.js":
/*!********************************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/pipeline/query_pipeline.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryPipeline": () => (/* binding */ QueryPipeline)
/* harmony export */ });
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../raw */ "./node_modules/@dimforge/rapier2d/rapier_wasm2d_bg.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../geometry */ "./node_modules/@dimforge/rapier2d/geometry/ray.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../geometry */ "./node_modules/@dimforge/rapier2d/geometry/point.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../geometry */ "./node_modules/@dimforge/rapier2d/geometry/toi.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math */ "./node_modules/@dimforge/rapier2d/math.js");



/**
 * A pipeline for performing queries on all the colliders of a scene.
 *
 * To avoid leaking WASM resources, this MUST be freed manually with `queryPipeline.free()`
 * once you are done using it (and all the rigid-bodies it created).
 */
class QueryPipeline {
    constructor(raw) {
        this.raw = raw || new _raw__WEBPACK_IMPORTED_MODULE_0__.RawQueryPipeline();
    }
    /**
     * Release the WASM memory occupied by this query pipeline.
     */
    free() {
        this.raw.free();
        this.raw = undefined;
    }
    /**
     * Updates the acceleration structure of the query pipeline.
     * @param bodies - The set of rigid-bodies taking part in this pipeline.
     * @param colliders - The set of colliders taking part in this pipeline.
     */
    update(islands, bodies, colliders) {
        this.raw.update(islands.raw, bodies.raw, colliders.raw);
    }
    /**
     * Find the closest intersection between a ray and a set of collider.
     *
     * @param colliders - The set of colliders taking part in this pipeline.
     * @param ray - The ray to cast.
     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
     *   limits the length of the ray to `ray.dir.norm() * maxToi`.
     * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
     *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
     *   whereas `false` implies that all shapes are hollow for this ray-cast.
     * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
     * @param filter - The callback to filter out which collider will be hit.
     */
    castRay(colliders, ray, maxToi, solid, groups, filter) {
        let rawOrig = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(ray.origin);
        let rawDir = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(ray.dir);
        let result = _geometry__WEBPACK_IMPORTED_MODULE_2__.RayColliderToi.fromRaw(colliders, this.raw.castRay(colliders.raw, rawOrig, rawDir, maxToi, solid, groups, filter));
        rawOrig.free();
        rawDir.free();
        return result;
    }
    /**
     * Find the closest intersection between a ray and a set of collider.
     *
     * This also computes the normal at the hit point.
     * @param colliders - The set of colliders taking part in this pipeline.
     * @param ray - The ray to cast.
     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
     *   limits the length of the ray to `ray.dir.norm() * maxToi`.
     * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
     *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
     *   whereas `false` implies that all shapes are hollow for this ray-cast.
     * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
     */
    castRayAndGetNormal(colliders, ray, maxToi, solid, groups, filter) {
        let rawOrig = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(ray.origin);
        let rawDir = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(ray.dir);
        let result = _geometry__WEBPACK_IMPORTED_MODULE_2__.RayColliderIntersection.fromRaw(colliders, this.raw.castRayAndGetNormal(colliders.raw, rawOrig, rawDir, maxToi, solid, groups, filter));
        rawOrig.free();
        rawDir.free();
        return result;
    }
    /**
     * Cast a ray and collects all the intersections between a ray and the scene.
     *
     * @param colliders - The set of colliders taking part in this pipeline.
     * @param ray - The ray to cast.
     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
     *   limits the length of the ray to `ray.dir.norm() * maxToi`.
     * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
     *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
     *   whereas `false` implies that all shapes are hollow for this ray-cast.
     * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
     * @param callback - The callback called once per hit (in no particular order) between a ray and a collider.
     *   If this callback returns `false`, then the cast will stop and no further hits will be detected/reported.
     */
    intersectionsWithRay(colliders, ray, maxToi, solid, groups, callback, filter) {
        let rawOrig = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(ray.origin);
        let rawDir = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(ray.dir);
        let rawCallback = (rawInter) => {
            return callback(_geometry__WEBPACK_IMPORTED_MODULE_2__.RayColliderIntersection.fromRaw(colliders, rawInter));
        };
        this.raw.intersectionsWithRay(colliders.raw, rawOrig, rawDir, maxToi, solid, groups, rawCallback, filter);
        rawOrig.free();
        rawDir.free();
    }
    /**
     * Gets the handle of up to one collider intersecting the given shape.
     *
     * @param colliders - The set of colliders taking part in this pipeline.
     * @param shapePos - The position of the shape used for the intersection test.
     * @param shapeRot - The orientation of the shape used for the intersection test.
     * @param shape - The shape used for the intersection test.
     * @param groups - The bit groups and filter associated to the ray, in order to only
     *   hit the colliders with collision groups compatible with the ray's group.
     */
    intersectionWithShape(colliders, shapePos, shapeRot, shape, groups, filter) {
        let rawPos = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(shapePos);
        let rawRot = _math__WEBPACK_IMPORTED_MODULE_1__.RotationOps.intoRaw(shapeRot);
        let rawShape = shape.intoRaw();
        let result = this.raw.intersectionWithShape(colliders.raw, rawPos, rawRot, rawShape, groups, filter);
        rawPos.free();
        rawRot.free();
        rawShape.free();
        return result;
    }
    /**
     * Find the projection of a point on the closest collider.
     *
     * @param colliders - The set of colliders taking part in this pipeline.
     * @param point - The point to project.
     * @param solid - If this is set to `true` then the collider shapes are considered to
     *   be plain (if the point is located inside of a plain shape, its projection is the point
     *   itself). If it is set to `false` the collider shapes are considered to be hollow
     *   (if the point is located inside of an hollow shape, it is projected on the shape's
     *   boundary).
     * @param groups - The bit groups and filter associated to the point to project, in order to only
     *   project on colliders with collision groups compatible with the ray's group.
     */
    projectPoint(colliders, point, solid, groups, filter) {
        let rawPoint = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(point);
        let result = _geometry__WEBPACK_IMPORTED_MODULE_3__.PointColliderProjection.fromRaw(colliders, this.raw.projectPoint(colliders.raw, rawPoint, solid, groups, filter));
        rawPoint.free();
        return result;
    }
    /**
     * Find the projection of a point on the closest collider.
     *
     * @param colliders - The set of colliders taking part in this pipeline.
     * @param point - The point to project.
     * @param groups - The bit groups and filter associated to the point to project, in order to only
     *   project on colliders with collision groups compatible with the ray's group.
     */
    projectPointAndGetFeature(colliders, point, groups) {
        let rawPoint = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(point);
        let result = _geometry__WEBPACK_IMPORTED_MODULE_3__.PointColliderProjection.fromRaw(colliders, this.raw.projectPointAndGetFeature(colliders.raw, rawPoint, groups));
        rawPoint.free();
        return result;
    }
    /**
     * Find all the colliders containing the given point.
     *
     * @param colliders - The set of colliders taking part in this pipeline.
     * @param point - The point used for the containment test.
     * @param groups - The bit groups and filter associated to the point to test, in order to only
     *   test on colliders with collision groups compatible with the ray's group.
     * @param callback - A function called with the handles of each collider with a shape
     *   containing the `point`.
     */
    intersectionsWithPoint(colliders, point, groups, callback, filter) {
        let rawPoint = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(point);
        this.raw.intersectionsWithPoint(colliders.raw, rawPoint, groups, callback, filter);
        rawPoint.free();
    }
    /**
     * Casts a shape at a constant linear velocity and retrieve the first collider it hits.
     * This is similar to ray-casting except that we are casting a whole shape instead of
     * just a point (the ray origin).
     *
     * @param colliders - The set of colliders taking part in this pipeline.
     * @param shapePos - The initial position of the shape to cast.
     * @param shapeRot - The initial rotation of the shape to cast.
     * @param shapeVel - The constant velocity of the shape to cast (i.e. the cast direction).
     * @param shape - The shape to cast.
     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
     *   limits the distance traveled by the shape to `shapeVel.norm() * maxToi`.
     * @param groups - The bit groups and filter associated to the shape to cast, in order to only
     *   test on colliders with collision groups compatible with this group.
     */
    castShape(colliders, shapePos, shapeRot, shapeVel, shape, maxToi, groups, filter) {
        let rawPos = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(shapePos);
        let rawRot = _math__WEBPACK_IMPORTED_MODULE_1__.RotationOps.intoRaw(shapeRot);
        let rawVel = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(shapeVel);
        let rawShape = shape.intoRaw();
        let result = _geometry__WEBPACK_IMPORTED_MODULE_4__.ShapeColliderTOI.fromRaw(colliders, this.raw.castShape(colliders.raw, rawPos, rawRot, rawVel, rawShape, maxToi, groups, filter));
        rawPos.free();
        rawRot.free();
        rawVel.free();
        rawShape.free();
        return result;
    }
    /**
     * Retrieve all the colliders intersecting the given shape.
     *
     * @param colliders - The set of colliders taking part in this pipeline.
     * @param shapePos - The position of the shape to test.
     * @param shapeRot - The orientation of the shape to test.
     * @param shape - The shape to test.
     * @param groups - The bit groups and filter associated to the shape to test, in order to only
     *   test on colliders with collision groups compatible with this group.
     * @param callback - A function called with the handles of each collider intersecting the `shape`.
     */
    intersectionsWithShape(colliders, shapePos, shapeRot, shape, groups, callback, filter) {
        let rawPos = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(shapePos);
        let rawRot = _math__WEBPACK_IMPORTED_MODULE_1__.RotationOps.intoRaw(shapeRot);
        let rawShape = shape.intoRaw();
        this.raw.intersectionsWithShape(colliders.raw, rawPos, rawRot, rawShape, groups, callback, filter);
        rawPos.free();
        rawRot.free();
        rawShape.free();
    }
    /**
     * Finds the handles of all the colliders with an AABB intersecting the given AABB.
     *
     * @param aabbCenter - The center of the AABB to test.
     * @param aabbHalfExtents - The half-extents of the AABB to test.
     * @param callback - The callback that will be called with the handles of all the colliders
     *                   currently intersecting the given AABB.
     */
    collidersWithAabbIntersectingAabb(aabbCenter, aabbHalfExtents, callback) {
        let rawCenter = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(aabbCenter);
        let rawHalfExtents = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(aabbHalfExtents);
        this.raw.collidersWithAabbIntersectingAabb(rawCenter, rawHalfExtents, callback);
        rawCenter.free();
        rawHalfExtents.free();
    }
}
//# sourceMappingURL=query_pipeline.js.map

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/pipeline/serialization_pipeline.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/pipeline/serialization_pipeline.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SerializationPipeline": () => (/* binding */ SerializationPipeline)
/* harmony export */ });
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../raw */ "./node_modules/@dimforge/rapier2d/rapier_wasm2d_bg.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math */ "./node_modules/@dimforge/rapier2d/math.js");
/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./world */ "./node_modules/@dimforge/rapier2d/pipeline/world.js");



/**
 * A pipeline for serializing the physics scene.
 *
 * To avoid leaking WASM resources, this MUST be freed manually with `queryPipeline.free()`
 * once you are done using it (and all the rigid-bodies it created).
 */
class SerializationPipeline {
    constructor(raw) {
        this.raw = raw || new _raw__WEBPACK_IMPORTED_MODULE_0__.RawSerializationPipeline();
    }
    /**
     * Release the WASM memory occupied by this serialization pipeline.
     */
    free() {
        this.raw.free();
        this.raw = undefined;
    }
    /**
     * Serialize a complete physics state into a single byte array.
     * @param gravity - The current gravity affecting the simulation.
     * @param integrationParameters - The integration parameters of the simulation.
     * @param broadPhase - The broad-phase of the simulation.
     * @param narrowPhase - The narrow-phase of the simulation.
     * @param bodies - The rigid-bodies taking part into the simulation.
     * @param colliders - The colliders taking part into the simulation.
     * @param impulseJoints - The impulse joints taking part into the simulation.
     * @param multibodyJoints - The multibody joints taking part into the simulation.
     */
    serializeAll(gravity, integrationParameters, islands, broadPhase, narrowPhase, bodies, colliders, impulseJoints, multibodyJoints) {
        let rawGra = _math__WEBPACK_IMPORTED_MODULE_1__.VectorOps.intoRaw(gravity);
        const res = this.raw.serializeAll(rawGra, integrationParameters.raw, islands.raw, broadPhase.raw, narrowPhase.raw, bodies.raw, colliders.raw, impulseJoints.raw, multibodyJoints.raw);
        rawGra.free();
        return res;
    }
    /**
     * Deserialize the complete physics state from a single byte array.
     *
     * @param data - The byte array to deserialize.
     */
    deserializeAll(data) {
        return _world__WEBPACK_IMPORTED_MODULE_2__.World.fromRaw(this.raw.deserializeAll(data));
    }
}
//# sourceMappingURL=serialization_pipeline.js.map

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/pipeline/world.js":
/*!***********************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/pipeline/world.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "World": () => (/* binding */ World)
/* harmony export */ });
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../geometry */ "./node_modules/@dimforge/rapier2d/geometry/broad_phase.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../geometry */ "./node_modules/@dimforge/rapier2d/geometry/narrow_phase.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../geometry */ "./node_modules/@dimforge/rapier2d/geometry/collider_set.js");
/* harmony import */ var _dynamics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dynamics */ "./node_modules/@dimforge/rapier2d/dynamics/integration_parameters.js");
/* harmony import */ var _dynamics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dynamics */ "./node_modules/@dimforge/rapier2d/dynamics/island_manager.js");
/* harmony import */ var _dynamics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dynamics */ "./node_modules/@dimforge/rapier2d/dynamics/rigid_body_set.js");
/* harmony import */ var _dynamics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dynamics */ "./node_modules/@dimforge/rapier2d/dynamics/impulse_joint_set.js");
/* harmony import */ var _dynamics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dynamics */ "./node_modules/@dimforge/rapier2d/dynamics/multibody_joint_set.js");
/* harmony import */ var _dynamics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dynamics */ "./node_modules/@dimforge/rapier2d/dynamics/ccd_solver.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../math */ "./node_modules/@dimforge/rapier2d/math.js");
/* harmony import */ var _physics_pipeline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./physics_pipeline */ "./node_modules/@dimforge/rapier2d/pipeline/physics_pipeline.js");
/* harmony import */ var _query_pipeline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./query_pipeline */ "./node_modules/@dimforge/rapier2d/pipeline/query_pipeline.js");
/* harmony import */ var _serialization_pipeline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./serialization_pipeline */ "./node_modules/@dimforge/rapier2d/pipeline/serialization_pipeline.js");
/* harmony import */ var _debug_render_pipeline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./debug_render_pipeline */ "./node_modules/@dimforge/rapier2d/pipeline/debug_render_pipeline.js");







/**
 * The physics world.
 *
 * This contains all the data-structures necessary for creating and simulating
 * bodies with contacts, joints, and external forces.
 */
class World {
    constructor(gravity, rawIntegrationParameters, rawIslands, rawBroadPhase, rawNarrowPhase, rawBodies, rawColliders, rawImpulseJoints, rawMultibodyJoints, rawCCDSolver, rawQueryPipeline, rawPhysicsPipeline, rawSerializationPipeline, rawDebugRenderPipeline) {
        this.gravity = gravity;
        this.integrationParameters = new _dynamics__WEBPACK_IMPORTED_MODULE_0__.IntegrationParameters(rawIntegrationParameters);
        this.islands = new _dynamics__WEBPACK_IMPORTED_MODULE_1__.IslandManager(rawIslands);
        this.broadPhase = new _geometry__WEBPACK_IMPORTED_MODULE_2__.BroadPhase(rawBroadPhase);
        this.narrowPhase = new _geometry__WEBPACK_IMPORTED_MODULE_3__.NarrowPhase(rawNarrowPhase);
        this.bodies = new _dynamics__WEBPACK_IMPORTED_MODULE_4__.RigidBodySet(rawBodies);
        this.colliders = new _geometry__WEBPACK_IMPORTED_MODULE_5__.ColliderSet(rawColliders);
        this.impulseJoints = new _dynamics__WEBPACK_IMPORTED_MODULE_6__.ImpulseJointSet(rawImpulseJoints);
        this.multibodyJoints = new _dynamics__WEBPACK_IMPORTED_MODULE_7__.MultibodyJointSet(rawMultibodyJoints);
        this.ccdSolver = new _dynamics__WEBPACK_IMPORTED_MODULE_8__.CCDSolver(rawCCDSolver);
        this.queryPipeline = new _query_pipeline__WEBPACK_IMPORTED_MODULE_9__.QueryPipeline(rawQueryPipeline);
        this.physicsPipeline = new _physics_pipeline__WEBPACK_IMPORTED_MODULE_10__.PhysicsPipeline(rawPhysicsPipeline);
        this.serializationPipeline = new _serialization_pipeline__WEBPACK_IMPORTED_MODULE_11__.SerializationPipeline(rawSerializationPipeline);
        this.debugRenderPipeline = new _debug_render_pipeline__WEBPACK_IMPORTED_MODULE_12__.DebugRenderPipeline(rawDebugRenderPipeline);
        this.impulseJoints.finalizeDeserialization(this.bodies);
        this.bodies.finalizeDeserialization(this.colliders);
        this.colliders.finalizeDeserialization(this.bodies);
    }
    /**
     * Release the WASM memory occupied by this physics world.
     *
     * All the fields of this physics world will be freed as well,
     * so there is no need to call their `.free()` methods individually.
     */
    free() {
        this.integrationParameters.free();
        this.islands.free();
        this.broadPhase.free();
        this.narrowPhase.free();
        this.bodies.free();
        this.colliders.free();
        this.impulseJoints.free();
        this.multibodyJoints.free();
        this.ccdSolver.free();
        this.queryPipeline.free();
        this.physicsPipeline.free();
        this.serializationPipeline.free();
        this.debugRenderPipeline.free();
        this.integrationParameters = undefined;
        this.islands = undefined;
        this.broadPhase = undefined;
        this.narrowPhase = undefined;
        this.bodies = undefined;
        this.colliders = undefined;
        this.ccdSolver = undefined;
        this.impulseJoints = undefined;
        this.multibodyJoints = undefined;
        this.queryPipeline = undefined;
        this.physicsPipeline = undefined;
        this.serializationPipeline = undefined;
        this.debugRenderPipeline = undefined;
    }
    static fromRaw(raw) {
        if (!raw)
            return null;
        return new World(_math__WEBPACK_IMPORTED_MODULE_13__.VectorOps.fromRaw(raw.takeGravity()), raw.takeIntegrationParameters(), raw.takeIslandManager(), raw.takeBroadPhase(), raw.takeNarrowPhase(), raw.takeBodies(), raw.takeColliders(), raw.takeImpulseJoints(), raw.takeMultibodyJoints());
    }
    /**
     * Takes a snapshot of this world.
     *
     * Use `World.restoreSnapshot` to create a new physics world with a state identical to
     * the state when `.takeSnapshot()` is called.
     */
    takeSnapshot() {
        return this.serializationPipeline.serializeAll(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints);
    }
    /**
     * Creates a new physics world from a snapshot.
     *
     * This new physics world will be an identical copy of the snapshoted physics world.
     */
    static restoreSnapshot(data) {
        let deser = new _serialization_pipeline__WEBPACK_IMPORTED_MODULE_11__.SerializationPipeline();
        return deser.deserializeAll(data);
    }
    /**
     * Computes all the lines (and their colors) needed to render the scene.
     */
    debugRender() {
        this.debugRenderPipeline.render(this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.narrowPhase);
        return new _debug_render_pipeline__WEBPACK_IMPORTED_MODULE_12__.DebugRenderBuffers(this.debugRenderPipeline.vertices, this.debugRenderPipeline.colors);
    }
    /**
     * Advance the simulation by one time step.
     *
     * All events generated by the physics engine are ignored.
     *
     * @param EventQueue - (optional) structure responsible for collecting
     *   events generated by the physics engine.
     */
    step(eventQueue, hooks) {
        this.physicsPipeline.step(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.ccdSolver, eventQueue, hooks);
        this.queryPipeline.update(this.islands, this.bodies, this.colliders);
    }
    /**
     * The current simulation timestep.
     */
    get timestep() {
        return this.integrationParameters.dt;
    }
    /**
     * Sets the new simulation timestep.
     *
     * The simulation timestep governs by how much the physics state of the world will
     * be integrated. A simulation timestep should:
     * - be as small as possible. Typical values evolve around 0.016 (assuming the chosen unit is milliseconds,
     * corresponds to the time between two frames of a game running at 60FPS).
     * - not vary too much during the course of the simulation. A timestep with large variations may
     * cause instabilities in the simulation.
     *
     * @param dt - The timestep length, in seconds.
     */
    set timestep(dt) {
        this.integrationParameters.dt = dt;
    }
    /**
     * The maximum velocity iterations the velocity-based force constraint solver can make.
     */
    get maxVelocityIterations() {
        return this.integrationParameters.maxVelocityIterations;
    }
    /**
     * Sets the maximum number of velocity iterations (default: 4).
     *
     * The greater this value is, the most rigid and realistic the physics simulation will be.
     * However a greater number of iterations is more computationally intensive.
     *
     * @param niter - The new maximum number of velocity iterations.
     */
    set maxVelocityIterations(niter) {
        this.integrationParameters.maxVelocityIterations = niter;
    }
    /**
     * The maximum velocity iterations the velocity-based friction constraint solver can make.
     */
    get maxVelocityFrictionIterations() {
        return this.integrationParameters.maxVelocityFrictionIterations;
    }
    /**
     * Sets the maximum number of velocity iterations for friction (default: 8).
     *
     * The greater this value is, the most realistic friction will be.
     * However a greater number of iterations is more computationally intensive.
     *
     * @param niter - The new maximum number of velocity iterations.
     */
    set maxVelocityFrictionIterations(niter) {
        this.integrationParameters.maxVelocityFrictionIterations = niter;
    }
    /**
     * The maximum velocity iterations the velocity-based constraint solver can make to attempt to remove
     * the energy introduced by constraint stabilization.
     */
    get maxStabilizationIterations() {
        return this.integrationParameters.maxStabilizationIterations;
    }
    /**
     * Sets the maximum number of velocity iterations for stabilization (default: 1).
     *
     * @param niter - The new maximum number of velocity iterations.
     */
    set maxStabilizationIterations(niter) {
        this.integrationParameters.maxStabilizationIterations = niter;
    }
    /**
     * Creates a new rigid-body from the given rigd-body descriptior.
     *
     * @param body - The description of the rigid-body to create.
     */
    createRigidBody(body) {
        return this.bodies.createRigidBody(this.colliders, body);
    }
    /**
     * Creates a new collider.
     *
     * @param desc - The description of the collider.
     * @param parent - The rigid-body this collider is attached to.
     */
    createCollider(desc, parent) {
        let parentHandle = parent ? parent.handle : undefined;
        return this.colliders.createCollider(this.bodies, desc, parentHandle);
    }
    /**
     * Creates a new impulse joint from the given joint descriptor.
     *
     * @param params - The description of the joint to create.
     * @param parent1 - The first rigid-body attached to this joint.
     * @param parent2 - The second rigid-body attached to this joint.
     * @param wakeUp - Should the attached rigid-bodies be awakened?
     */
    createImpulseJoint(params, parent1, parent2, wakeUp) {
        return this.impulseJoints.createJoint(this.bodies, params, parent1.handle, parent2.handle, wakeUp);
    }
    /**
     * Creates a new multibody joint from the given joint descriptor.
     *
     * @param params - The description of the joint to create.
     * @param parent1 - The first rigid-body attached to this joint.
     * @param parent2 - The second rigid-body attached to this joint.
     * @param wakeUp - Should the attached rigid-bodies be awakened?
     */
    createMultibodyJoint(params, parent1, parent2, wakeUp) {
        return this.multibodyJoints.createJoint(params, parent1.handle, parent2.handle, wakeUp);
    }
    /**
     * Retrieves a rigid-body from its handle.
     *
     * @param handle - The integer handle of the rigid-body to retrieve.
     */
    getRigidBody(handle) {
        return this.bodies.get(handle);
    }
    /**
     * Retrieves a collider from its handle.
     *
     * @param handle - The integer handle of the collider to retrieve.
     */
    getCollider(handle) {
        return this.colliders.get(handle);
    }
    /**
     * Retrieves an impulse joint from its handle.
     *
     * @param handle - The integer handle of the impulse joint to retrieve.
     */
    getImpulseJoint(handle) {
        return this.impulseJoints.get(handle);
    }
    /**
     * Retrieves an multibody joint from its handle.
     *
     * @param handle - The integer handle of the multibody joint to retrieve.
     */
    getMultibodyJoint(handle) {
        return this.multibodyJoints.get(handle);
    }
    /**
     * Removes the given rigid-body from this physics world.
     *
     * This will remove this rigid-body as well as all its attached colliders and joints.
     * Every other bodies touching or attached by joints to this rigid-body will be woken-up.
     *
     * @param body - The rigid-body to remove.
     */
    removeRigidBody(body) {
        if (this.bodies) {
            this.bodies.remove(body.handle, this.islands, this.colliders, this.impulseJoints, this.multibodyJoints);
        }
    }
    /**
     * Removes the given collider from this physics world.
     *
     * @param collider - The collider to remove.
     * @param wakeUp - If set to `true`, the rigid-body this collider is attached to will be awaken.
     */
    removeCollider(collider, wakeUp) {
        if (this.colliders) {
            this.colliders.remove(collider.handle, this.islands, this.bodies, wakeUp);
        }
    }
    /**
     * Removes the given impulse joint from this physics world.
     *
     * @param joint - The impulse joint to remove.
     * @param wakeUp - If set to `true`, the rigid-bodies attached by this joint will be awaken.
     */
    removeImpulseJoint(joint, wakeUp) {
        if (this.impulseJoints) {
            this.impulseJoints.remove(joint.handle, wakeUp);
        }
    }
    /**
     * Removes the given multibody joint from this physics world.
     *
     * @param joint - The multibody joint to remove.
     * @param wakeUp - If set to `true`, the rigid-bodies attached by this joint will be awaken.
     */
    removeMultibodyJoint(joint, wakeUp) {
        if (this.impulseJoints) {
            this.multibodyJoints.remove(joint.handle, wakeUp);
        }
    }
    /**
     * Applies the given closure to each collider managed by this physics world.
     *
     * @param f(collider) - The function to apply to each collider managed by this physics world. Called as `f(collider)`.
     */
    forEachCollider(f) {
        this.colliders.forEach(f);
    }
    /**
     * Applies the given closure to each rigid-body managed by this physics world.
     *
     * @param f(body) - The function to apply to each rigid-body managed by this physics world. Called as `f(collider)`.
     */
    forEachRigidBody(f) {
        this.bodies.forEach(f);
    }
    /**
     * Applies the given closure to each active rigid-body managed by this physics world.
     *
     * After a short time of inactivity, a rigid-body is automatically deactivated ("asleep") by
     * the physics engine in order to save computational power. A sleeping rigid-body never moves
     * unless it is moved manually by the user.
     *
     * @param f - The function to apply to each active rigid-body managed by this physics world. Called as `f(collider)`.
     */
    forEachActiveRigidBody(f) {
        this.bodies.forEachActiveRigidBody(this.islands, f);
    }
    /**
     * Find the closest intersection between a ray and the physics world.
     *
     * @param ray - The ray to cast.
     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
     *   limits the length of the ray to `ray.dir.norm() * maxToi`.
     * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
     *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
     *   whereas `false` implies that all shapes are hollow for this ray-cast.
     * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
     * @param filter - The callback to filter out which collider will be hit.
     */
    castRay(ray, maxToi, solid, groups, filter) {
        return this.queryPipeline.castRay(this.colliders, ray, maxToi, solid, groups, castClosure(this.colliders, filter));
    }
    /**
     * Find the closest intersection between a ray and the physics world.
     *
     * This also computes the normal at the hit point.
     * @param ray - The ray to cast.
     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
     *   limits the length of the ray to `ray.dir.norm() * maxToi`.
     * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
     *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
     *   whereas `false` implies that all shapes are hollow for this ray-cast.
     * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
     */
    castRayAndGetNormal(ray, maxToi, solid, groups, filter) {
        return this.queryPipeline.castRayAndGetNormal(this.colliders, ray, maxToi, solid, groups, castClosure(this.colliders, filter));
    }
    /**
     * Cast a ray and collects all the intersections between a ray and the scene.
     *
     * @param ray - The ray to cast.
     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
     *   limits the length of the ray to `ray.dir.norm() * maxToi`.
     * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
     *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
     *   whereas `false` implies that all shapes are hollow for this ray-cast.
     * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
     * @param callback - The callback called once per hit (in no particular order) between a ray and a collider.
     *   If this callback returns `false`, then the cast will stop and no further hits will be detected/reported.
     */
    intersectionsWithRay(ray, maxToi, solid, groups, callback, filter) {
        this.queryPipeline.intersectionsWithRay(this.colliders, ray, maxToi, solid, groups, callback, castClosure(this.colliders, filter));
    }
    /**
     * Gets the handle of up to one collider intersecting the given shape.
     *
     * @param shapePos - The position of the shape used for the intersection test.
     * @param shapeRot - The orientation of the shape used for the intersection test.
     * @param shape - The shape used for the intersection test.
     * @param groups - The bit groups and filter associated to the ray, in order to only
     *   hit the colliders with collision groups compatible with the ray's group.
     */
    intersectionWithShape(shapePos, shapeRot, shape, groups, filter) {
        let handle = this.queryPipeline.intersectionWithShape(this.colliders, shapePos, shapeRot, shape, groups, castClosure(this.colliders, filter));
        return handle != null ? this.colliders.get(handle) : null;
    }
    /**
     * Find the projection of a point on the closest collider.
     *
     * @param point - The point to project.
     * @param solid - If this is set to `true` then the collider shapes are considered to
     *   be plain (if the point is located inside of a plain shape, its projection is the point
     *   itself). If it is set to `false` the collider shapes are considered to be hollow
     *   (if the point is located inside of an hollow shape, it is projected on the shape's
     *   boundary).
     * @param groups - The bit groups and filter associated to the point to project, in order to only
     *   project on colliders with collision groups compatible with the ray's group.
     */
    projectPoint(point, solid, groups, filter) {
        return this.queryPipeline.projectPoint(this.colliders, point, solid, groups, castClosure(this.colliders, filter));
    }
    /**
     * Find the projection of a point on the closest collider.
     *
     * @param point - The point to project.
     * @param groups - The bit groups and filter associated to the point to project, in order to only
     *   project on colliders with collision groups compatible with the ray's group.
     */
    projectPointAndGetFeature(point, groups) {
        return this.queryPipeline.projectPointAndGetFeature(this.colliders, point, groups);
    }
    /**
     * Find all the colliders containing the given point.
     *
     * @param point - The point used for the containment test.
     * @param groups - The bit groups and filter associated to the point to test, in order to only
     *   test on colliders with collision groups compatible with the ray's group.
     * @param callback - A function called with the handles of each collider with a shape
     *   containing the `point`.
     */
    intersectionsWithPoint(point, groups, callback, filter) {
        this.queryPipeline.intersectionsWithPoint(this.colliders, point, groups, castClosure(this.colliders, callback), castClosure(this.colliders, filter));
    }
    /**
     * Casts a shape at a constant linear velocity and retrieve the first collider it hits.
     * This is similar to ray-casting except that we are casting a whole shape instead of
     * just a point (the ray origin).
     *
     * @param shapePos - The initial position of the shape to cast.
     * @param shapeRot - The initial rotation of the shape to cast.
     * @param shapeVel - The constant velocity of the shape to cast (i.e. the cast direction).
     * @param shape - The shape to cast.
     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
     *   limits the distance traveled by the shape to `shapeVel.norm() * maxToi`.
     * @param groups - The bit groups and filter associated to the shape to cast, in order to only
     *   test on colliders with collision groups compatible with this group.
     */
    castShape(shapePos, shapeRot, shapeVel, shape, maxToi, groups, filter) {
        return this.queryPipeline.castShape(this.colliders, shapePos, shapeRot, shapeVel, shape, maxToi, groups, castClosure(this.colliders, filter));
    }
    /**
     * Retrieve all the colliders intersecting the given shape.
     *
     * @param shapePos - The position of the shape to test.
     * @param shapeRot - The orientation of the shape to test.
     * @param shape - The shape to test.
     * @param groups - The bit groups and filter associated to the shape to test, in order to only
     *   test on colliders with collision groups compatible with this group.
     * @param callback - A function called with the handles of each collider intersecting the `shape`.
     */
    intersectionsWithShape(shapePos, shapeRot, shape, groups, callback, filter) {
        this.queryPipeline.intersectionsWithShape(this.colliders, shapePos, shapeRot, shape, groups, castClosure(this.colliders, callback), castClosure(this.colliders, filter));
    }
    /**
     * Finds the handles of all the colliders with an AABB intersecting the given AABB.
     *
     * @param aabbCenter - The center of the AABB to test.
     * @param aabbHalfExtents - The half-extents of the AABB to test.
     * @param callback - The callback that will be called with the handles of all the colliders
     *                   currently intersecting the given AABB.
     */
    collidersWithAabbIntersectingAabb(aabbCenter, aabbHalfExtents, callback) {
        this.queryPipeline.collidersWithAabbIntersectingAabb(aabbCenter, aabbHalfExtents, castClosure(this.colliders, callback));
    }
    /**
     * Enumerates all the colliders potentially in contact with the given collider.
     *
     * @param collider1 - The second collider involved in the contact.
     * @param f - Closure that will be called on each collider that is in contact with `collider1`.
     */
    contactsWith(collider1, f) {
        this.narrowPhase.contactsWith(collider1.handle, castClosure(this.colliders, f));
    }
    /**
     * Enumerates all the colliders intersecting the given colliders, assuming one of them
     * is a sensor.
     */
    intersectionsWith(collider1, f) {
        this.narrowPhase.intersectionsWith(collider1.handle, castClosure(this.colliders, f));
    }
    /**
     * Iterates through all the contact manifolds between the given pair of colliders.
     *
     * @param collider1 - The first collider involved in the contact.
     * @param collider2 - The second collider involved in the contact.
     * @param f - Closure that will be called on each contact manifold between the two colliders. If the second argument
     *            passed to this closure is `true`, then the contact manifold data is flipped, i.e., methods like `localNormal1`
     *            actually apply to the `collider2` and fields like `localNormal2` apply to the `collider1`.
     */
    contactPair(collider1, collider2, f) {
        this.narrowPhase.contactPair(collider1.handle, collider2.handle, f);
    }
    /**
     * Returns `true` if `collider1` and `collider2` intersect and at least one of them is a sensor.
     * @param collider1 − The first collider involved in the intersection.
     * @param collider2 − The second collider involved in the intersection.
     */
    intersectionPair(collider1, collider2) {
        return this.narrowPhase.intersectionPair(collider1.handle, collider2.handle);
    }
}
function castClosure(set, f) {
    return (handle) => {
        if (!!f) {
            return f(set.get(handle));
        }
        else {
            return undefined;
        }
    };
}
//# sourceMappingURL=world.js.map

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/rapier.js":
/*!***************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/rapier.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActiveCollisionTypes": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.ActiveCollisionTypes),
/* harmony export */   "ActiveEvents": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.ActiveEvents),
/* harmony export */   "ActiveHooks": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.ActiveHooks),
/* harmony export */   "Ball": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.Ball),
/* harmony export */   "BroadPhase": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.BroadPhase),
/* harmony export */   "CCDSolver": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.CCDSolver),
/* harmony export */   "Capsule": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.Capsule),
/* harmony export */   "CoefficientCombineRule": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.CoefficientCombineRule),
/* harmony export */   "Collider": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.Collider),
/* harmony export */   "ColliderDesc": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.ColliderDesc),
/* harmony export */   "ColliderSet": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.ColliderSet),
/* harmony export */   "ConvexPolygon": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.ConvexPolygon),
/* harmony export */   "Cuboid": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.Cuboid),
/* harmony export */   "DebugRenderBuffers": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.DebugRenderBuffers),
/* harmony export */   "DebugRenderPipeline": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.DebugRenderPipeline),
/* harmony export */   "EventQueue": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.EventQueue),
/* harmony export */   "FeatureType": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.FeatureType),
/* harmony export */   "FixedImpulseJoint": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.FixedImpulseJoint),
/* harmony export */   "FixedMultibodyJoint": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.FixedMultibodyJoint),
/* harmony export */   "Heightfield": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.Heightfield),
/* harmony export */   "ImpulseJoint": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.ImpulseJoint),
/* harmony export */   "ImpulseJointSet": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.ImpulseJointSet),
/* harmony export */   "IntegrationParameters": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.IntegrationParameters),
/* harmony export */   "IslandManager": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.IslandManager),
/* harmony export */   "JointData": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.JointData),
/* harmony export */   "JointType": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.JointType),
/* harmony export */   "MotorModel": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.MotorModel),
/* harmony export */   "MultibodyJoint": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.MultibodyJoint),
/* harmony export */   "MultibodyJointSet": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.MultibodyJointSet),
/* harmony export */   "NarrowPhase": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.NarrowPhase),
/* harmony export */   "PhysicsPipeline": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.PhysicsPipeline),
/* harmony export */   "PointColliderProjection": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.PointColliderProjection),
/* harmony export */   "PointProjection": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.PointProjection),
/* harmony export */   "Polyline": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.Polyline),
/* harmony export */   "PrismaticImpulseJoint": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.PrismaticImpulseJoint),
/* harmony export */   "PrismaticMultibodyJoint": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.PrismaticMultibodyJoint),
/* harmony export */   "Ray": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.Ray),
/* harmony export */   "RayColliderIntersection": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.RayColliderIntersection),
/* harmony export */   "RayColliderToi": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.RayColliderToi),
/* harmony export */   "RayIntersection": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.RayIntersection),
/* harmony export */   "RevoluteImpulseJoint": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.RevoluteImpulseJoint),
/* harmony export */   "RevoluteMultibodyJoint": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.RevoluteMultibodyJoint),
/* harmony export */   "RigidBody": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.RigidBody),
/* harmony export */   "RigidBodyDesc": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.RigidBodyDesc),
/* harmony export */   "RigidBodySet": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.RigidBodySet),
/* harmony export */   "RigidBodyType": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.RigidBodyType),
/* harmony export */   "RotationOps": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.RotationOps),
/* harmony export */   "RoundConvexPolygon": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.RoundConvexPolygon),
/* harmony export */   "RoundCuboid": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.RoundCuboid),
/* harmony export */   "RoundTriangle": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.RoundTriangle),
/* harmony export */   "Segment": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.Segment),
/* harmony export */   "SerializationPipeline": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.SerializationPipeline),
/* harmony export */   "Shape": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.Shape),
/* harmony export */   "ShapeColliderTOI": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.ShapeColliderTOI),
/* harmony export */   "ShapeContact": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.ShapeContact),
/* harmony export */   "ShapeTOI": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.ShapeTOI),
/* harmony export */   "ShapeType": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.ShapeType),
/* harmony export */   "SolverFlags": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.SolverFlags),
/* harmony export */   "TempContactManifold": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.TempContactManifold),
/* harmony export */   "TriMesh": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.TriMesh),
/* harmony export */   "Triangle": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.Triangle),
/* harmony export */   "UnitImpulseJoint": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.UnitImpulseJoint),
/* harmony export */   "UnitMultibodyJoint": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.UnitMultibodyJoint),
/* harmony export */   "Vector2": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.Vector2),
/* harmony export */   "VectorOps": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.VectorOps),
/* harmony export */   "World": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.World),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "version": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.version)
/* harmony export */ });
/* harmony import */ var _exports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exports */ "./node_modules/@dimforge/rapier2d/exports.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_exports__WEBPACK_IMPORTED_MODULE_0__);
//# sourceMappingURL=rapier.js.map

/***/ }),

/***/ "./node_modules/@dimforge/rapier2d/rapier_wasm2d_bg.js":
/*!*************************************************************!*\
  !*** ./node_modules/@dimforge/rapier2d/rapier_wasm2d_bg.js ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RawBroadPhase": () => (/* binding */ RawBroadPhase),
/* harmony export */   "RawCCDSolver": () => (/* binding */ RawCCDSolver),
/* harmony export */   "RawColliderSet": () => (/* binding */ RawColliderSet),
/* harmony export */   "RawContactManifold": () => (/* binding */ RawContactManifold),
/* harmony export */   "RawContactPair": () => (/* binding */ RawContactPair),
/* harmony export */   "RawDebugRenderPipeline": () => (/* binding */ RawDebugRenderPipeline),
/* harmony export */   "RawDeserializedWorld": () => (/* binding */ RawDeserializedWorld),
/* harmony export */   "RawEventQueue": () => (/* binding */ RawEventQueue),
/* harmony export */   "RawFeatureType": () => (/* binding */ RawFeatureType),
/* harmony export */   "RawGenericJoint": () => (/* binding */ RawGenericJoint),
/* harmony export */   "RawImpulseJointSet": () => (/* binding */ RawImpulseJointSet),
/* harmony export */   "RawIntegrationParameters": () => (/* binding */ RawIntegrationParameters),
/* harmony export */   "RawIslandManager": () => (/* binding */ RawIslandManager),
/* harmony export */   "RawJointAxis": () => (/* binding */ RawJointAxis),
/* harmony export */   "RawJointType": () => (/* binding */ RawJointType),
/* harmony export */   "RawMotorModel": () => (/* binding */ RawMotorModel),
/* harmony export */   "RawMultibodyJointSet": () => (/* binding */ RawMultibodyJointSet),
/* harmony export */   "RawNarrowPhase": () => (/* binding */ RawNarrowPhase),
/* harmony export */   "RawPhysicsPipeline": () => (/* binding */ RawPhysicsPipeline),
/* harmony export */   "RawPointColliderProjection": () => (/* binding */ RawPointColliderProjection),
/* harmony export */   "RawPointProjection": () => (/* binding */ RawPointProjection),
/* harmony export */   "RawQueryPipeline": () => (/* binding */ RawQueryPipeline),
/* harmony export */   "RawRayColliderIntersection": () => (/* binding */ RawRayColliderIntersection),
/* harmony export */   "RawRayColliderToi": () => (/* binding */ RawRayColliderToi),
/* harmony export */   "RawRayIntersection": () => (/* binding */ RawRayIntersection),
/* harmony export */   "RawRigidBodySet": () => (/* binding */ RawRigidBodySet),
/* harmony export */   "RawRigidBodyType": () => (/* binding */ RawRigidBodyType),
/* harmony export */   "RawRotation": () => (/* binding */ RawRotation),
/* harmony export */   "RawSerializationPipeline": () => (/* binding */ RawSerializationPipeline),
/* harmony export */   "RawShape": () => (/* binding */ RawShape),
/* harmony export */   "RawShapeColliderTOI": () => (/* binding */ RawShapeColliderTOI),
/* harmony export */   "RawShapeContact": () => (/* binding */ RawShapeContact),
/* harmony export */   "RawShapeTOI": () => (/* binding */ RawShapeTOI),
/* harmony export */   "RawShapeType": () => (/* binding */ RawShapeType),
/* harmony export */   "RawVector": () => (/* binding */ RawVector),
/* harmony export */   "__wbg_bind_c09a1641c1580c07": () => (/* binding */ __wbg_bind_c09a1641c1580c07),
/* harmony export */   "__wbg_buffer_7af23f65f6c64548": () => (/* binding */ __wbg_buffer_7af23f65f6c64548),
/* harmony export */   "__wbg_call_3ed288a247f13ea5": () => (/* binding */ __wbg_call_3ed288a247f13ea5),
/* harmony export */   "__wbg_call_6ed7121cfb42cfed": () => (/* binding */ __wbg_call_6ed7121cfb42cfed),
/* harmony export */   "__wbg_call_a19d3173f3e1d3c5": () => (/* binding */ __wbg_call_a19d3173f3e1d3c5),
/* harmony export */   "__wbg_length_0acb1cf9bbaf8519": () => (/* binding */ __wbg_length_0acb1cf9bbaf8519),
/* harmony export */   "__wbg_length_371cc1c92aa8feae": () => (/* binding */ __wbg_length_371cc1c92aa8feae),
/* harmony export */   "__wbg_new_cc9018bd6f283b6f": () => (/* binding */ __wbg_new_cc9018bd6f283b6f),
/* harmony export */   "__wbg_newwithbyteoffsetandlength_3f554978d8793b14": () => (/* binding */ __wbg_newwithbyteoffsetandlength_3f554978d8793b14),
/* harmony export */   "__wbg_newwithbyteoffsetandlength_ce1e75f0ce5f7974": () => (/* binding */ __wbg_newwithbyteoffsetandlength_ce1e75f0ce5f7974),
/* harmony export */   "__wbg_newwithlength_e538258cb2a6bad0": () => (/* binding */ __wbg_newwithlength_e538258cb2a6bad0),
/* harmony export */   "__wbg_rawraycolliderintersection_new": () => (/* binding */ __wbg_rawraycolliderintersection_new),
/* harmony export */   "__wbg_set_9a9604c6888f6468": () => (/* binding */ __wbg_set_9a9604c6888f6468),
/* harmony export */   "__wbg_set_f25e869e4565d2a2": () => (/* binding */ __wbg_set_f25e869e4565d2a2),
/* harmony export */   "__wbindgen_boolean_get": () => (/* binding */ __wbindgen_boolean_get),
/* harmony export */   "__wbindgen_is_function": () => (/* binding */ __wbindgen_is_function),
/* harmony export */   "__wbindgen_memory": () => (/* binding */ __wbindgen_memory),
/* harmony export */   "__wbindgen_number_get": () => (/* binding */ __wbindgen_number_get),
/* harmony export */   "__wbindgen_number_new": () => (/* binding */ __wbindgen_number_new),
/* harmony export */   "__wbindgen_object_drop_ref": () => (/* binding */ __wbindgen_object_drop_ref),
/* harmony export */   "__wbindgen_throw": () => (/* binding */ __wbindgen_throw),
/* harmony export */   "version": () => (/* binding */ version)
/* harmony export */ });
/* harmony import */ var _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rapier_wasm2d_bg.wasm */ "./node_modules/@dimforge/rapier2d/rapier_wasm2d_bg.wasm");
/* module decorator */ module = __webpack_require__.hmd(module);


const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachegetFloat64Memory0 = null;
function getFloat64Memory0() {
    if (cachegetFloat64Memory0 === null || cachegetFloat64Memory0.buffer !== _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {
        cachegetFloat64Memory0 = new Float64Array(_rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);
    }
    return cachegetFloat64Memory0;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(_rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);
    }
    return cachegetInt32Memory0;
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(_rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
/**
* @returns {string}
*/
function version() {
    try {
        const retptr = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.version(retptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_free(r0, r1);
    }
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
}

let stack_pointer = 32;

function addBorrowedObject(obj) {
    if (stack_pointer == 1) throw new Error('out of js stack');
    heap[--stack_pointer] = obj;
    return stack_pointer;
}

let cachegetFloat32Memory0 = null;
function getFloat32Memory0() {
    if (cachegetFloat32Memory0 === null || cachegetFloat32Memory0.buffer !== _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {
        cachegetFloat32Memory0 = new Float32Array(_rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);
    }
    return cachegetFloat32Memory0;
}

function getArrayF32FromWasm0(ptr, len) {
    return getFloat32Memory0().subarray(ptr / 4, ptr / 4 + len);
}

let cachegetUint32Memory0 = null;
function getUint32Memory0() {
    if (cachegetUint32Memory0 === null || cachegetUint32Memory0.buffer !== _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {
        cachegetUint32Memory0 = new Uint32Array(_rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);
    }
    return cachegetUint32Memory0;
}

function getArrayU32FromWasm0(ptr, len) {
    return getUint32Memory0().subarray(ptr / 4, ptr / 4 + len);
}

let WASM_VECTOR_LEN = 0;

function passArrayF32ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 4);
    getFloat32Memory0().set(arg, ptr / 4);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function passArray32ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 4);
    getUint32Memory0().set(arg, ptr / 4);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_exn_store(addHeapObject(e));
    }
}
/**
*/
const RawJointType = Object.freeze({ Revolute:0,"0":"Revolute",Fixed:1,"1":"Fixed",Prismatic:2,"2":"Prismatic",Generic:3,"3":"Generic", });
/**
*/
const RawMotorModel = Object.freeze({ AccelerationBased:0,"0":"AccelerationBased",ForceBased:1,"1":"ForceBased", });
/**
*/
const RawJointAxis = Object.freeze({ X:0,"0":"X",Y:1,"1":"Y",AngX:2,"2":"AngX", });
/**
*/
const RawRigidBodyType = Object.freeze({ Dynamic:0,"0":"Dynamic",Fixed:1,"1":"Fixed",KinematicPositionBased:2,"2":"KinematicPositionBased",KinematicVelocityBased:3,"3":"KinematicVelocityBased", });
/**
*/
const RawFeatureType = Object.freeze({ Vertex:0,"0":"Vertex",Face:1,"1":"Face",Unknown:2,"2":"Unknown", });
/**
*/
const RawShapeType = Object.freeze({ Ball:0,"0":"Ball",Cuboid:1,"1":"Cuboid",Capsule:2,"2":"Capsule",Segment:3,"3":"Segment",Polyline:4,"4":"Polyline",Triangle:5,"5":"Triangle",TriMesh:6,"6":"TriMesh",HeightField:7,"7":"HeightField",Compound:8,"8":"Compound",ConvexPolygon:9,"9":"ConvexPolygon",RoundCuboid:10,"10":"RoundCuboid",RoundTriangle:11,"11":"RoundTriangle",RoundConvexPolygon:12,"12":"RoundConvexPolygon", });
/**
*/
class RawBroadPhase {

    static __wrap(ptr) {
        const obj = Object.create(RawBroadPhase.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawbroadphase_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawbroadphase_new();
        return RawBroadPhase.__wrap(ret);
    }
}
/**
*/
class RawCCDSolver {

    static __wrap(ptr) {
        const obj = Object.create(RawCCDSolver.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawccdsolver_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawccdsolver_new();
        return RawCCDSolver.__wrap(ret);
    }
}
/**
*/
class RawColliderSet {

    static __wrap(ptr) {
        const obj = Object.create(RawColliderSet.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawcolliderset_free(ptr);
    }
    /**
    * The world-space translation of this collider.
    * @param {number} handle
    * @returns {RawVector}
    */
    coTranslation(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coTranslation(this.ptr, handle);
        return RawVector.__wrap(ret);
    }
    /**
    * The world-space orientation of this collider.
    * @param {number} handle
    * @returns {RawRotation}
    */
    coRotation(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coRotation(this.ptr, handle);
        return RawRotation.__wrap(ret);
    }
    /**
    * Sets the translation of this collider.
    *
    * # Parameters
    * - `x`: the world-space position of the collider along the `x` axis.
    * - `y`: the world-space position of the collider along the `y` axis.
    * - `wakeUp`: forces the collider to wake-up so it is properly affected by forces if it
    * wasn't moving before modifying its position.
    * @param {number} handle
    * @param {number} x
    * @param {number} y
    */
    coSetTranslation(handle, x, y) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coSetTranslation(this.ptr, handle, x, y);
    }
    /**
    * @param {number} handle
    * @param {number} x
    * @param {number} y
    */
    coSetTranslationWrtParent(handle, x, y) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coSetTranslationWrtParent(this.ptr, handle, x, y);
    }
    /**
    * Sets the rotation angle of this collider.
    *
    * # Parameters
    * - `angle`: the rotation angle, in radians.
    * - `wakeUp`: forces the collider to wake-up so it is properly affected by forces if it
    * wasn't moving before modifying its position.
    * @param {number} handle
    * @param {number} angle
    */
    coSetRotation(handle, angle) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coSetRotation(this.ptr, handle, angle);
    }
    /**
    * @param {number} handle
    * @param {number} angle
    */
    coSetRotationWrtParent(handle, angle) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coSetRotationWrtParent(this.ptr, handle, angle);
    }
    /**
    * Is this collider a sensor?
    * @param {number} handle
    * @returns {boolean}
    */
    coIsSensor(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coIsSensor(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * The type of the shape of this collider.
    * @param {number} handle
    * @returns {number}
    */
    coShapeType(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coShapeType(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * The half-extents of this collider if it is has a cuboid shape.
    * @param {number} handle
    * @returns {RawVector | undefined}
    */
    coHalfExtents(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coHalfExtents(this.ptr, handle);
        return ret === 0 ? undefined : RawVector.__wrap(ret);
    }
    /**
    * The radius of this collider if it is a ball, capsule, cylinder, or cone shape.
    * @param {number} handle
    * @returns {number | undefined}
    */
    coRadius(handle) {
        try {
            const retptr = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coRadius(retptr, this.ptr, handle);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getFloat32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1;
        } finally {
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * The radius of this collider if it is a capsule, cylinder, or cone shape.
    * @param {number} handle
    * @returns {number | undefined}
    */
    coHalfHeight(handle) {
        try {
            const retptr = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coHalfHeight(retptr, this.ptr, handle);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getFloat32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1;
        } finally {
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * The radius of the round edges of this collider.
    * @param {number} handle
    * @returns {number | undefined}
    */
    coRoundRadius(handle) {
        try {
            const retptr = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coRoundRadius(retptr, this.ptr, handle);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getFloat32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1;
        } finally {
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * The vertices of this triangle mesh, polyline, convex polyhedron, segment, triangle or convex polyhedron, if it is one.
    * @param {number} handle
    * @returns {Float32Array | undefined}
    */
    coVertices(handle) {
        try {
            const retptr = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coVertices(retptr, this.ptr, handle);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v0;
            if (r0 !== 0) {
                v0 = getArrayF32FromWasm0(r0, r1).slice();
                _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_free(r0, r1 * 4);
            }
            return v0;
        } finally {
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * The indices of this triangle mesh, polyline, or convex polyhedron, if it is one.
    * @param {number} handle
    * @returns {Uint32Array | undefined}
    */
    coIndices(handle) {
        try {
            const retptr = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coIndices(retptr, this.ptr, handle);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v0;
            if (r0 !== 0) {
                v0 = getArrayU32FromWasm0(r0, r1).slice();
                _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_free(r0, r1 * 4);
            }
            return v0;
        } finally {
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * The height of this heightfield if it is one.
    * @param {number} handle
    * @returns {Float32Array | undefined}
    */
    coHeightfieldHeights(handle) {
        try {
            const retptr = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coHeightfieldHeights(retptr, this.ptr, handle);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v0;
            if (r0 !== 0) {
                v0 = getArrayF32FromWasm0(r0, r1).slice();
                _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_free(r0, r1 * 4);
            }
            return v0;
        } finally {
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * The scaling factor applied of this heightfield if it is one.
    * @param {number} handle
    * @returns {RawVector | undefined}
    */
    coHeightfieldScale(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coHeightfieldScale(this.ptr, handle);
        return ret === 0 ? undefined : RawVector.__wrap(ret);
    }
    /**
    * The unique integer identifier of the collider this collider is attached to.
    * @param {number} handle
    * @returns {number | undefined}
    */
    coParent(handle) {
        try {
            const retptr = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coParent(retptr, this.ptr, handle);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r2 = getFloat64Memory0()[retptr / 8 + 1];
            return r0 === 0 ? undefined : r2;
        } finally {
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * The friction coefficient of this collider.
    * @param {number} handle
    * @returns {number}
    */
    coFriction(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coFriction(this.ptr, handle);
        return ret;
    }
    /**
    * The restitution coefficient of this collider.
    * @param {number} handle
    * @returns {number}
    */
    coRestitution(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coRestitution(this.ptr, handle);
        return ret;
    }
    /**
    * The density of this collider.
    * @param {number} handle
    * @returns {number | undefined}
    */
    coDensity(handle) {
        try {
            const retptr = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coDensity(retptr, this.ptr, handle);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getFloat32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1;
        } finally {
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * The collision groups of this collider.
    * @param {number} handle
    * @returns {number}
    */
    coCollisionGroups(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coCollisionGroups(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * The solver groups of this collider.
    * @param {number} handle
    * @returns {number}
    */
    coSolverGroups(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coSolverGroups(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * The physics hooks enabled for this collider.
    * @param {number} handle
    * @returns {number}
    */
    coActiveHooks(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coActiveHooks(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * The collision types enabled for this collider.
    * @param {number} handle
    * @returns {number}
    */
    coActiveCollisionTypes(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coActiveCollisionTypes(this.ptr, handle);
        return ret;
    }
    /**
    * The events enabled for this collider.
    * @param {number} handle
    * @returns {number}
    */
    coActiveEvents(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coActiveEvents(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * @param {number} handle
    * @param {RawVector} point
    * @returns {boolean}
    */
    coContainsPoint(handle, point) {
        _assertClass(point, RawVector);
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coContainsPoint(this.ptr, handle, point.ptr);
        return ret !== 0;
    }
    /**
    * @param {number} handle
    * @param {RawVector} colliderVel
    * @param {RawShape} shape2
    * @param {RawVector} shape2Pos
    * @param {RawRotation} shape2Rot
    * @param {RawVector} shape2Vel
    * @param {number} maxToi
    * @returns {RawShapeTOI | undefined}
    */
    coCastShape(handle, colliderVel, shape2, shape2Pos, shape2Rot, shape2Vel, maxToi) {
        _assertClass(colliderVel, RawVector);
        _assertClass(shape2, RawShape);
        _assertClass(shape2Pos, RawVector);
        _assertClass(shape2Rot, RawRotation);
        _assertClass(shape2Vel, RawVector);
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coCastShape(this.ptr, handle, colliderVel.ptr, shape2.ptr, shape2Pos.ptr, shape2Rot.ptr, shape2Vel.ptr, maxToi);
        return ret === 0 ? undefined : RawShapeTOI.__wrap(ret);
    }
    /**
    * @param {number} handle
    * @param {RawVector} collider1Vel
    * @param {number} collider2handle
    * @param {RawVector} collider2Vel
    * @param {number} max_toi
    * @returns {RawShapeColliderTOI | undefined}
    */
    coCastCollider(handle, collider1Vel, collider2handle, collider2Vel, max_toi) {
        _assertClass(collider1Vel, RawVector);
        _assertClass(collider2Vel, RawVector);
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coCastCollider(this.ptr, handle, collider1Vel.ptr, collider2handle, collider2Vel.ptr, max_toi);
        return ret === 0 ? undefined : RawShapeColliderTOI.__wrap(ret);
    }
    /**
    * @param {number} handle
    * @param {RawShape} shape2
    * @param {RawVector} shapePos2
    * @param {RawRotation} shapeRot2
    * @returns {boolean}
    */
    coIntersectsShape(handle, shape2, shapePos2, shapeRot2) {
        _assertClass(shape2, RawShape);
        _assertClass(shapePos2, RawVector);
        _assertClass(shapeRot2, RawRotation);
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coIntersectsShape(this.ptr, handle, shape2.ptr, shapePos2.ptr, shapeRot2.ptr);
        return ret !== 0;
    }
    /**
    * @param {number} handle
    * @param {RawShape} shape2
    * @param {RawVector} shapePos2
    * @param {RawRotation} shapeRot2
    * @param {number} prediction
    * @returns {RawShapeContact | undefined}
    */
    coContactShape(handle, shape2, shapePos2, shapeRot2, prediction) {
        _assertClass(shape2, RawShape);
        _assertClass(shapePos2, RawVector);
        _assertClass(shapeRot2, RawRotation);
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coContactShape(this.ptr, handle, shape2.ptr, shapePos2.ptr, shapeRot2.ptr, prediction);
        return ret === 0 ? undefined : RawShapeContact.__wrap(ret);
    }
    /**
    * @param {number} handle
    * @param {number} collider2handle
    * @param {number} prediction
    * @returns {RawShapeContact | undefined}
    */
    coContactCollider(handle, collider2handle, prediction) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coContactCollider(this.ptr, handle, collider2handle, prediction);
        return ret === 0 ? undefined : RawShapeContact.__wrap(ret);
    }
    /**
    * @param {number} handle
    * @param {RawVector} point
    * @param {boolean} solid
    * @returns {RawPointProjection}
    */
    coProjectPoint(handle, point, solid) {
        _assertClass(point, RawVector);
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coProjectPoint(this.ptr, handle, point.ptr, solid);
        return RawPointProjection.__wrap(ret);
    }
    /**
    * @param {number} handle
    * @param {RawVector} rayOrig
    * @param {RawVector} rayDir
    * @param {number} maxToi
    * @returns {boolean}
    */
    coIntersectsRay(handle, rayOrig, rayDir, maxToi) {
        _assertClass(rayOrig, RawVector);
        _assertClass(rayDir, RawVector);
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coIntersectsRay(this.ptr, handle, rayOrig.ptr, rayDir.ptr, maxToi);
        return ret !== 0;
    }
    /**
    * @param {number} handle
    * @param {RawVector} rayOrig
    * @param {RawVector} rayDir
    * @param {number} maxToi
    * @param {boolean} solid
    * @returns {number}
    */
    coCastRay(handle, rayOrig, rayDir, maxToi, solid) {
        _assertClass(rayOrig, RawVector);
        _assertClass(rayDir, RawVector);
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coCastRay(this.ptr, handle, rayOrig.ptr, rayDir.ptr, maxToi, solid);
        return ret;
    }
    /**
    * @param {number} handle
    * @param {RawVector} rayOrig
    * @param {RawVector} rayDir
    * @param {number} maxToi
    * @param {boolean} solid
    * @returns {RawRayIntersection | undefined}
    */
    coCastRayAndGetNormal(handle, rayOrig, rayDir, maxToi, solid) {
        _assertClass(rayOrig, RawVector);
        _assertClass(rayDir, RawVector);
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coCastRayAndGetNormal(this.ptr, handle, rayOrig.ptr, rayDir.ptr, maxToi, solid);
        return ret === 0 ? undefined : RawRayIntersection.__wrap(ret);
    }
    /**
    * @param {number} handle
    * @param {boolean} is_sensor
    */
    coSetSensor(handle, is_sensor) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coSetSensor(this.ptr, handle, is_sensor);
    }
    /**
    * @param {number} handle
    * @param {number} restitution
    */
    coSetRestitution(handle, restitution) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coSetRestitution(this.ptr, handle, restitution);
    }
    /**
    * @param {number} handle
    * @param {number} friction
    */
    coSetFriction(handle, friction) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coSetFriction(this.ptr, handle, friction);
    }
    /**
    * @param {number} handle
    * @returns {number}
    */
    coFrictionCombineRule(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coFrictionCombineRule(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * @param {number} handle
    * @param {number} rule
    */
    coSetFrictionCombineRule(handle, rule) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coSetFrictionCombineRule(this.ptr, handle, rule);
    }
    /**
    * @param {number} handle
    * @returns {number}
    */
    coRestitutionCombineRule(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coRestitutionCombineRule(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * @param {number} handle
    * @param {number} rule
    */
    coSetRestitutionCombineRule(handle, rule) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coSetRestitutionCombineRule(this.ptr, handle, rule);
    }
    /**
    * @param {number} handle
    * @param {number} groups
    */
    coSetCollisionGroups(handle, groups) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coSetCollisionGroups(this.ptr, handle, groups);
    }
    /**
    * @param {number} handle
    * @param {number} groups
    */
    coSetSolverGroups(handle, groups) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coSetSolverGroups(this.ptr, handle, groups);
    }
    /**
    * @param {number} handle
    * @param {number} hooks
    */
    coSetActiveHooks(handle, hooks) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coSetActiveHooks(this.ptr, handle, hooks);
    }
    /**
    * @param {number} handle
    * @param {number} events
    */
    coSetActiveEvents(handle, events) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coSetActiveEvents(this.ptr, handle, events);
    }
    /**
    * @param {number} handle
    * @param {number} types
    */
    coSetActiveCollisionTypes(handle, types) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coSetActiveCollisionTypes(this.ptr, handle, types);
    }
    /**
    * @param {number} handle
    * @param {RawShape} shape
    */
    coSetShape(handle, shape) {
        _assertClass(shape, RawShape);
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_coSetShape(this.ptr, handle, shape.ptr);
    }
    /**
    */
    constructor() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_new();
        return RawColliderSet.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} handle
    * @returns {boolean}
    */
    contains(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_contains(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * @param {RawShape} shape
    * @param {RawVector} translation
    * @param {RawRotation} rotation
    * @param {boolean} useMassProps
    * @param {number} mass
    * @param {RawVector} centerOfMass
    * @param {number} principalAngularInertia
    * @param {number} density
    * @param {number} friction
    * @param {number} restitution
    * @param {number} frictionCombineRule
    * @param {number} restitutionCombineRule
    * @param {boolean} isSensor
    * @param {number} collisionGroups
    * @param {number} solverGroups
    * @param {number} activeCollisionTypes
    * @param {number} activeHooks
    * @param {number} activeEvents
    * @param {boolean} hasParent
    * @param {number} parent
    * @param {RawRigidBodySet} bodies
    * @returns {number | undefined}
    */
    createCollider(shape, translation, rotation, useMassProps, mass, centerOfMass, principalAngularInertia, density, friction, restitution, frictionCombineRule, restitutionCombineRule, isSensor, collisionGroups, solverGroups, activeCollisionTypes, activeHooks, activeEvents, hasParent, parent, bodies) {
        try {
            const retptr = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(shape, RawShape);
            _assertClass(translation, RawVector);
            _assertClass(rotation, RawRotation);
            _assertClass(centerOfMass, RawVector);
            _assertClass(bodies, RawRigidBodySet);
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_createCollider(retptr, this.ptr, shape.ptr, translation.ptr, rotation.ptr, useMassProps, mass, centerOfMass.ptr, principalAngularInertia, density, friction, restitution, frictionCombineRule, restitutionCombineRule, isSensor, collisionGroups, solverGroups, activeCollisionTypes, activeHooks, activeEvents, hasParent, parent, bodies.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r2 = getFloat64Memory0()[retptr / 8 + 1];
            return r0 === 0 ? undefined : r2;
        } finally {
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * Removes a collider from this set and wake-up the rigid-body it is attached to.
    * @param {number} handle
    * @param {RawIslandManager} islands
    * @param {RawRigidBodySet} bodies
    * @param {boolean} wakeUp
    */
    remove(handle, islands, bodies, wakeUp) {
        _assertClass(islands, RawIslandManager);
        _assertClass(bodies, RawRigidBodySet);
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_remove(this.ptr, handle, islands.ptr, bodies.ptr, wakeUp);
    }
    /**
    * Checks if a collider with the given integer handle exists.
    * @param {number} handle
    * @returns {boolean}
    */
    isHandleValid(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_contains(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * Applies the given JavaScript function to the integer handle of each collider managed by this collider set.
    *
    * # Parameters
    * - `f(handle)`: the function to apply to the integer handle of each collider managed by this collider set. Called as `f(handle)`.
    * @param {Function} f
    */
    forEachColliderHandle(f) {
        try {
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcolliderset_forEachColliderHandle(this.ptr, addBorrowedObject(f));
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
}
/**
*/
class RawContactManifold {

    static __wrap(ptr) {
        const obj = Object.create(RawContactManifold.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawcontactmanifold_free(ptr);
    }
    /**
    * @returns {RawVector}
    */
    normal() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_normal(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {RawVector}
    */
    local_n1() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_local_n1(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {RawVector}
    */
    local_n2() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_local_n2(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    subshape1() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_subshape1(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    subshape2() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_subshape2(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    num_contacts() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_num_contacts(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} i
    * @returns {RawVector | undefined}
    */
    contact_local_p1(i) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_contact_local_p1(this.ptr, i);
        return ret === 0 ? undefined : RawVector.__wrap(ret);
    }
    /**
    * @param {number} i
    * @returns {RawVector | undefined}
    */
    contact_local_p2(i) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_contact_local_p2(this.ptr, i);
        return ret === 0 ? undefined : RawVector.__wrap(ret);
    }
    /**
    * @param {number} i
    * @returns {number}
    */
    contact_dist(i) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_contact_dist(this.ptr, i);
        return ret;
    }
    /**
    * @param {number} i
    * @returns {number}
    */
    contact_fid1(i) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_contact_fid1(this.ptr, i);
        return ret >>> 0;
    }
    /**
    * @param {number} i
    * @returns {number}
    */
    contact_fid2(i) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_contact_fid2(this.ptr, i);
        return ret >>> 0;
    }
    /**
    * @param {number} i
    * @returns {number}
    */
    contact_impulse(i) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_contact_impulse(this.ptr, i);
        return ret;
    }
    /**
    * @param {number} i
    * @returns {number}
    */
    contact_tangent_impulse(i) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_contact_tangent_impulse(this.ptr, i);
        return ret;
    }
    /**
    * @returns {number}
    */
    num_solver_contacts() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_num_solver_contacts(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} i
    * @returns {RawVector | undefined}
    */
    solver_contact_point(i) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_solver_contact_point(this.ptr, i);
        return ret === 0 ? undefined : RawVector.__wrap(ret);
    }
    /**
    * @param {number} i
    * @returns {number}
    */
    solver_contact_dist(i) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_solver_contact_dist(this.ptr, i);
        return ret;
    }
    /**
    * @param {number} i
    * @returns {number}
    */
    solver_contact_friction(i) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_solver_contact_friction(this.ptr, i);
        return ret;
    }
    /**
    * @param {number} i
    * @returns {number}
    */
    solver_contact_restitution(i) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_solver_contact_restitution(this.ptr, i);
        return ret;
    }
    /**
    * @param {number} i
    * @returns {RawVector}
    */
    solver_contact_tangent_velocity(i) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactmanifold_solver_contact_tangent_velocity(this.ptr, i);
        return RawVector.__wrap(ret);
    }
}
/**
*/
class RawContactPair {

    static __wrap(ptr) {
        const obj = Object.create(RawContactPair.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawcontactpair_free(ptr);
    }
    /**
    * @returns {number}
    */
    collider1() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactpair_collider1(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    collider2() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactpair_collider2(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    numContactManifolds() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactpair_numContactManifolds(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} i
    * @returns {RawContactManifold | undefined}
    */
    contactManifold(i) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawcontactpair_contactManifold(this.ptr, i);
        return ret === 0 ? undefined : RawContactManifold.__wrap(ret);
    }
}
/**
*/
class RawDebugRenderPipeline {

    static __wrap(ptr) {
        const obj = Object.create(RawDebugRenderPipeline.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawdebugrenderpipeline_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawdebugrenderpipeline_new();
        return RawDebugRenderPipeline.__wrap(ret);
    }
    /**
    * @returns {Float32Array}
    */
    vertices() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawdebugrenderpipeline_vertices(this.ptr);
        return takeObject(ret);
    }
    /**
    * @returns {Float32Array}
    */
    colors() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawdebugrenderpipeline_colors(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {RawRigidBodySet} bodies
    * @param {RawColliderSet} colliders
    * @param {RawImpulseJointSet} impulse_joints
    * @param {RawMultibodyJointSet} multibody_joints
    * @param {RawNarrowPhase} narrow_phase
    */
    render(bodies, colliders, impulse_joints, multibody_joints, narrow_phase) {
        _assertClass(bodies, RawRigidBodySet);
        _assertClass(colliders, RawColliderSet);
        _assertClass(impulse_joints, RawImpulseJointSet);
        _assertClass(multibody_joints, RawMultibodyJointSet);
        _assertClass(narrow_phase, RawNarrowPhase);
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawdebugrenderpipeline_render(this.ptr, bodies.ptr, colliders.ptr, impulse_joints.ptr, multibody_joints.ptr, narrow_phase.ptr);
    }
}
/**
*/
class RawDeserializedWorld {

    static __wrap(ptr) {
        const obj = Object.create(RawDeserializedWorld.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawdeserializedworld_free(ptr);
    }
    /**
    * @returns {RawVector | undefined}
    */
    takeGravity() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawdeserializedworld_takeGravity(this.ptr);
        return ret === 0 ? undefined : RawVector.__wrap(ret);
    }
    /**
    * @returns {RawIntegrationParameters | undefined}
    */
    takeIntegrationParameters() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawdeserializedworld_takeIntegrationParameters(this.ptr);
        return ret === 0 ? undefined : RawIntegrationParameters.__wrap(ret);
    }
    /**
    * @returns {RawIslandManager | undefined}
    */
    takeIslandManager() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawdeserializedworld_takeIslandManager(this.ptr);
        return ret === 0 ? undefined : RawIslandManager.__wrap(ret);
    }
    /**
    * @returns {RawBroadPhase | undefined}
    */
    takeBroadPhase() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawdeserializedworld_takeBroadPhase(this.ptr);
        return ret === 0 ? undefined : RawBroadPhase.__wrap(ret);
    }
    /**
    * @returns {RawNarrowPhase | undefined}
    */
    takeNarrowPhase() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawdeserializedworld_takeNarrowPhase(this.ptr);
        return ret === 0 ? undefined : RawNarrowPhase.__wrap(ret);
    }
    /**
    * @returns {RawRigidBodySet | undefined}
    */
    takeBodies() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawdeserializedworld_takeBodies(this.ptr);
        return ret === 0 ? undefined : RawRigidBodySet.__wrap(ret);
    }
    /**
    * @returns {RawColliderSet | undefined}
    */
    takeColliders() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawdeserializedworld_takeColliders(this.ptr);
        return ret === 0 ? undefined : RawColliderSet.__wrap(ret);
    }
    /**
    * @returns {RawImpulseJointSet | undefined}
    */
    takeImpulseJoints() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawdeserializedworld_takeImpulseJoints(this.ptr);
        return ret === 0 ? undefined : RawImpulseJointSet.__wrap(ret);
    }
    /**
    * @returns {RawMultibodyJointSet | undefined}
    */
    takeMultibodyJoints() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawdeserializedworld_takeMultibodyJoints(this.ptr);
        return ret === 0 ? undefined : RawMultibodyJointSet.__wrap(ret);
    }
}
/**
* A structure responsible for collecting events generated
* by the physics engine.
*/
class RawEventQueue {

    static __wrap(ptr) {
        const obj = Object.create(RawEventQueue.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_raweventqueue_free(ptr);
    }
    /**
    * Creates a new event collector.
    *
    * # Parameters
    * - `autoDrain`: setting this to `true` is strongly recommended. If true, the collector will
    * be automatically drained before each `world.step(collector)`. If false, the collector will
    * keep all events in memory unless it is manually drained/cleared; this may lead to unbounded use of
    * RAM if no drain is performed.
    * @param {boolean} autoDrain
    */
    constructor(autoDrain) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.raweventqueue_new(autoDrain);
        return RawEventQueue.__wrap(ret);
    }
    /**
    * Applies the given javascript closure on each collision event of this collector, then clear
    * the internal collision event buffer.
    *
    * # Parameters
    * - `f(handle1, handle2, started)`:  JavaScript closure applied to each collision event. The
    * closure should take three arguments: two integers representing the handles of the colliders
    * involved in the collision, and a boolean indicating if the collision started (true) or stopped
    * (false).
    * @param {Function} f
    */
    drainCollisionEvents(f) {
        try {
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.raweventqueue_drainCollisionEvents(this.ptr, addBorrowedObject(f));
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * Removes all events contained by this collector.
    */
    clear() {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.raweventqueue_clear(this.ptr);
    }
}
/**
*/
class RawGenericJoint {

    static __wrap(ptr) {
        const obj = Object.create(RawGenericJoint.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawgenericjoint_free(ptr);
    }
    /**
    * Creates a new joint descriptor that builds a Prismatic joint.
    *
    * A prismatic joint removes all the degrees of freedom between the
    * affected bodies, except for the translation along one axis.
    *
    * Returns `None` if any of the provided axes cannot be normalized.
    * @param {RawVector} anchor1
    * @param {RawVector} anchor2
    * @param {RawVector} axis
    * @param {boolean} limitsEnabled
    * @param {number} limitsMin
    * @param {number} limitsMax
    * @returns {RawGenericJoint | undefined}
    */
    static prismatic(anchor1, anchor2, axis, limitsEnabled, limitsMin, limitsMax) {
        _assertClass(anchor1, RawVector);
        _assertClass(anchor2, RawVector);
        _assertClass(axis, RawVector);
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawgenericjoint_prismatic(anchor1.ptr, anchor2.ptr, axis.ptr, limitsEnabled, limitsMin, limitsMax);
        return ret === 0 ? undefined : RawGenericJoint.__wrap(ret);
    }
    /**
    * Creates a new joint descriptor that builds a Fixed joint.
    *
    * A fixed joint removes all the degrees of freedom between the affected bodies.
    * @param {RawVector} anchor1
    * @param {RawRotation} axes1
    * @param {RawVector} anchor2
    * @param {RawRotation} axes2
    * @returns {RawGenericJoint}
    */
    static fixed(anchor1, axes1, anchor2, axes2) {
        _assertClass(anchor1, RawVector);
        _assertClass(axes1, RawRotation);
        _assertClass(anchor2, RawVector);
        _assertClass(axes2, RawRotation);
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawgenericjoint_fixed(anchor1.ptr, axes1.ptr, anchor2.ptr, axes2.ptr);
        return RawGenericJoint.__wrap(ret);
    }
    /**
    * Create a new joint descriptor that builds Revolute joints.
    *
    * A revolute joint removes all degrees of freedom between the affected
    * bodies except for the rotation.
    * @param {RawVector} anchor1
    * @param {RawVector} anchor2
    * @returns {RawGenericJoint | undefined}
    */
    static revolute(anchor1, anchor2) {
        _assertClass(anchor1, RawVector);
        _assertClass(anchor2, RawVector);
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawgenericjoint_revolute(anchor1.ptr, anchor2.ptr);
        return ret === 0 ? undefined : RawGenericJoint.__wrap(ret);
    }
}
/**
*/
class RawImpulseJointSet {

    static __wrap(ptr) {
        const obj = Object.create(RawImpulseJointSet.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawimpulsejointset_free(ptr);
    }
    /**
    * The type of this joint.
    * @param {number} handle
    * @returns {number}
    */
    jointType(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawimpulsejointset_jointType(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * The unique integer identifier of the first rigid-body this joint it attached to.
    * @param {number} handle
    * @returns {number}
    */
    jointBodyHandle1(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawimpulsejointset_jointBodyHandle1(this.ptr, handle);
        return ret;
    }
    /**
    * The unique integer identifier of the second rigid-body this joint is attached to.
    * @param {number} handle
    * @returns {number}
    */
    jointBodyHandle2(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawimpulsejointset_jointBodyHandle2(this.ptr, handle);
        return ret;
    }
    /**
    * The angular part of the joint’s local frame relative to the first rigid-body it is attached to.
    * @param {number} handle
    * @returns {RawRotation}
    */
    jointFrameX1(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawimpulsejointset_jointFrameX1(this.ptr, handle);
        return RawRotation.__wrap(ret);
    }
    /**
    * The angular part of the joint’s local frame relative to the second rigid-body it is attached to.
    * @param {number} handle
    * @returns {RawRotation}
    */
    jointFrameX2(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawimpulsejointset_jointFrameX2(this.ptr, handle);
        return RawRotation.__wrap(ret);
    }
    /**
    * The position of the first anchor of this joint.
    *
    * The first anchor gives the position of the points application point on the
    * local frame of the first rigid-body it is attached to.
    * @param {number} handle
    * @returns {RawVector}
    */
    jointAnchor1(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawimpulsejointset_jointAnchor1(this.ptr, handle);
        return RawVector.__wrap(ret);
    }
    /**
    * The position of the second anchor of this joint.
    *
    * The second anchor gives the position of the points application point on the
    * local frame of the second rigid-body it is attached to.
    * @param {number} handle
    * @returns {RawVector}
    */
    jointAnchor2(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawimpulsejointset_jointAnchor2(this.ptr, handle);
        return RawVector.__wrap(ret);
    }
    /**
    * Are the limits for this joint enabled?
    * @param {number} handle
    * @param {number} axis
    * @returns {boolean}
    */
    jointLimitsEnabled(handle, axis) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawimpulsejointset_jointLimitsEnabled(this.ptr, handle, axis);
        return ret !== 0;
    }
    /**
    * Return the lower limit along the given joint axis.
    * @param {number} handle
    * @param {number} axis
    * @returns {number}
    */
    jointLimitsMin(handle, axis) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawimpulsejointset_jointLimitsMin(this.ptr, handle, axis);
        return ret;
    }
    /**
    * If this is a prismatic joint, returns its upper limit.
    * @param {number} handle
    * @param {number} axis
    * @returns {number}
    */
    jointLimitsMax(handle, axis) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawimpulsejointset_jointLimitsMax(this.ptr, handle, axis);
        return ret;
    }
    /**
    * @param {number} handle
    * @param {number} axis
    * @param {number} model
    */
    jointConfigureMotorModel(handle, axis, model) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawimpulsejointset_jointConfigureMotorModel(this.ptr, handle, axis, model);
    }
    /**
    * @param {number} handle
    * @param {number} axis
    * @param {number} targetVel
    * @param {number} factor
    */
    jointConfigureMotorVelocity(handle, axis, targetVel, factor) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawimpulsejointset_jointConfigureMotorVelocity(this.ptr, handle, axis, targetVel, factor);
    }
    /**
    * @param {number} handle
    * @param {number} axis
    * @param {number} targetPos
    * @param {number} stiffness
    * @param {number} damping
    */
    jointConfigureMotorPosition(handle, axis, targetPos, stiffness, damping) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawimpulsejointset_jointConfigureMotorPosition(this.ptr, handle, axis, targetPos, stiffness, damping);
    }
    /**
    * @param {number} handle
    * @param {number} axis
    * @param {number} targetPos
    * @param {number} targetVel
    * @param {number} stiffness
    * @param {number} damping
    */
    jointConfigureMotor(handle, axis, targetPos, targetVel, stiffness, damping) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawimpulsejointset_jointConfigureMotor(this.ptr, handle, axis, targetPos, targetVel, stiffness, damping);
    }
    /**
    */
    constructor() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawimpulsejointset_new();
        return RawImpulseJointSet.__wrap(ret);
    }
    /**
    * @param {RawGenericJoint} params
    * @param {number} parent1
    * @param {number} parent2
    * @param {boolean} wake_up
    * @returns {number}
    */
    createJoint(params, parent1, parent2, wake_up) {
        _assertClass(params, RawGenericJoint);
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawimpulsejointset_createJoint(this.ptr, params.ptr, parent1, parent2, wake_up);
        return ret;
    }
    /**
    * @param {number} handle
    * @param {boolean} wakeUp
    */
    remove(handle, wakeUp) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawimpulsejointset_remove(this.ptr, handle, wakeUp);
    }
    /**
    * @returns {number}
    */
    len() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawimpulsejointset_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} handle
    * @returns {boolean}
    */
    contains(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawimpulsejointset_contains(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * Applies the given JavaScript function to the integer handle of each joint managed by this physics world.
    *
    * # Parameters
    * - `f(handle)`: the function to apply to the integer handle of each joint managed by this set. Called as `f(collider)`.
    * @param {Function} f
    */
    forEachJointHandle(f) {
        try {
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawimpulsejointset_forEachJointHandle(this.ptr, addBorrowedObject(f));
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * Applies the given JavaScript function to the integer handle of each joint attached to the given rigid-body.
    *
    * # Parameters
    * - `f(handle)`: the function to apply to the integer handle of each joint attached to the rigid-body. Called as `f(collider)`.
    * @param {number} body
    * @param {Function} f
    */
    forEachJointAttachedToRigidBody(body, f) {
        try {
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawimpulsejointset_forEachJointAttachedToRigidBody(this.ptr, body, addBorrowedObject(f));
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
}
/**
*/
class RawIntegrationParameters {

    static __wrap(ptr) {
        const obj = Object.create(RawIntegrationParameters.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawintegrationparameters_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_new();
        return RawIntegrationParameters.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    get dt() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_dt(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get erp() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_erp(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get allowedLinearError() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_allowedLinearError(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get predictionDistance() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_predictionDistance(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get maxVelocityIterations() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_maxVelocityIterations(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    get maxVelocityFrictionIterations() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_maxVelocityFrictionIterations(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    get maxStabilizationIterations() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_maxStabilizationIterations(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    get minIslandSize() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_minIslandSize(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    get maxCcdSubsteps() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_maxCcdSubsteps(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} value
    */
    set dt(value) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_set_dt(this.ptr, value);
    }
    /**
    * @param {number} value
    */
    set erp(value) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_set_erp(this.ptr, value);
    }
    /**
    * @param {number} value
    */
    set allowedLinearError(value) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_set_allowedLinearError(this.ptr, value);
    }
    /**
    * @param {number} value
    */
    set predictionDistance(value) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_set_predictionDistance(this.ptr, value);
    }
    /**
    * @param {number} value
    */
    set maxVelocityIterations(value) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_set_maxVelocityIterations(this.ptr, value);
    }
    /**
    * @param {number} value
    */
    set maxVelocityFrictionIterations(value) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_set_maxVelocityFrictionIterations(this.ptr, value);
    }
    /**
    * @param {number} value
    */
    set maxStabilizationIterations(value) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_set_maxStabilizationIterations(this.ptr, value);
    }
    /**
    * @param {number} value
    */
    set minIslandSize(value) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_set_minIslandSize(this.ptr, value);
    }
    /**
    * @param {number} value
    */
    set maxCcdSubsteps(value) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_set_maxCcdSubsteps(this.ptr, value);
    }
}
/**
*/
class RawIslandManager {

    static __wrap(ptr) {
        const obj = Object.create(RawIslandManager.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawislandmanager_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawislandmanager_new();
        return RawIslandManager.__wrap(ret);
    }
    /**
    * Applies the given JavaScript function to the integer handle of each active rigid-body
    * managed by this island manager.
    *
    * After a short time of inactivity, a rigid-body is automatically deactivated ("asleep") by
    * the physics engine in order to save computational power. A sleeping rigid-body never moves
    * unless it is moved manually by the user.
    *
    * # Parameters
    * - `f(handle)`: the function to apply to the integer handle of each active rigid-body managed by this
    *   set. Called as `f(collider)`.
    * @param {Function} f
    */
    forEachActiveRigidBodyHandle(f) {
        try {
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawislandmanager_forEachActiveRigidBodyHandle(this.ptr, addBorrowedObject(f));
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
}
/**
*/
class RawMultibodyJointSet {

    static __wrap(ptr) {
        const obj = Object.create(RawMultibodyJointSet.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawmultibodyjointset_free(ptr);
    }
    /**
    * The type of this joint.
    * @param {number} handle
    * @returns {number}
    */
    jointType(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawmultibodyjointset_jointType(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * The angular part of the joint’s local frame relative to the first rigid-body it is attached to.
    * @param {number} handle
    * @returns {RawRotation}
    */
    jointFrameX1(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawmultibodyjointset_jointFrameX1(this.ptr, handle);
        return RawRotation.__wrap(ret);
    }
    /**
    * The angular part of the joint’s local frame relative to the second rigid-body it is attached to.
    * @param {number} handle
    * @returns {RawRotation}
    */
    jointFrameX2(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawmultibodyjointset_jointFrameX2(this.ptr, handle);
        return RawRotation.__wrap(ret);
    }
    /**
    * The position of the first anchor of this joint.
    *
    * The first anchor gives the position of the points application point on the
    * local frame of the first rigid-body it is attached to.
    * @param {number} handle
    * @returns {RawVector}
    */
    jointAnchor1(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawmultibodyjointset_jointAnchor1(this.ptr, handle);
        return RawVector.__wrap(ret);
    }
    /**
    * The position of the second anchor of this joint.
    *
    * The second anchor gives the position of the points application point on the
    * local frame of the second rigid-body it is attached to.
    * @param {number} handle
    * @returns {RawVector}
    */
    jointAnchor2(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawmultibodyjointset_jointAnchor2(this.ptr, handle);
        return RawVector.__wrap(ret);
    }
    /**
    * Are the limits for this joint enabled?
    * @param {number} handle
    * @param {number} axis
    * @returns {boolean}
    */
    jointLimitsEnabled(handle, axis) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawmultibodyjointset_jointLimitsEnabled(this.ptr, handle, axis);
        return ret !== 0;
    }
    /**
    * Return the lower limit along the given joint axis.
    * @param {number} handle
    * @param {number} axis
    * @returns {number}
    */
    jointLimitsMin(handle, axis) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawmultibodyjointset_jointLimitsMin(this.ptr, handle, axis);
        return ret;
    }
    /**
    * If this is a prismatic joint, returns its upper limit.
    * @param {number} handle
    * @param {number} axis
    * @returns {number}
    */
    jointLimitsMax(handle, axis) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawmultibodyjointset_jointLimitsMax(this.ptr, handle, axis);
        return ret;
    }
    /**
    */
    constructor() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawmultibodyjointset_new();
        return RawMultibodyJointSet.__wrap(ret);
    }
    /**
    * @param {RawGenericJoint} params
    * @param {number} parent1
    * @param {number} parent2
    * @param {boolean} wakeUp
    * @returns {number}
    */
    createJoint(params, parent1, parent2, wakeUp) {
        _assertClass(params, RawGenericJoint);
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawmultibodyjointset_createJoint(this.ptr, params.ptr, parent1, parent2, wakeUp);
        return ret;
    }
    /**
    * @param {number} handle
    * @param {boolean} wakeUp
    */
    remove(handle, wakeUp) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawmultibodyjointset_remove(this.ptr, handle, wakeUp);
    }
    /**
    * @param {number} handle
    * @returns {boolean}
    */
    contains(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawmultibodyjointset_contains(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * Applies the given JavaScript function to the integer handle of each joint managed by this physics world.
    *
    * # Parameters
    * - `f(handle)`: the function to apply to the integer handle of each joint managed by this set. Called as `f(collider)`.
    * @param {Function} f
    */
    forEachJointHandle(f) {
        try {
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawmultibodyjointset_forEachJointHandle(this.ptr, addBorrowedObject(f));
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * Applies the given JavaScript function to the integer handle of each joint attached to the given rigid-body.
    *
    * # Parameters
    * - `f(handle)`: the function to apply to the integer handle of each joint attached to the rigid-body. Called as `f(collider)`.
    * @param {number} body
    * @param {Function} f
    */
    forEachJointAttachedToRigidBody(body, f) {
        try {
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.ptr, body, addBorrowedObject(f));
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
}
/**
*/
class RawNarrowPhase {

    static __wrap(ptr) {
        const obj = Object.create(RawNarrowPhase.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawnarrowphase_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawnarrowphase_new();
        return RawNarrowPhase.__wrap(ret);
    }
    /**
    * @param {number} handle1
    * @param {Function} f
    */
    contacts_with(handle1, f) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawnarrowphase_contacts_with(this.ptr, handle1, addHeapObject(f));
    }
    /**
    * @param {number} handle1
    * @param {number} handle2
    * @returns {RawContactPair | undefined}
    */
    contact_pair(handle1, handle2) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawnarrowphase_contact_pair(this.ptr, handle1, handle2);
        return ret === 0 ? undefined : RawContactPair.__wrap(ret);
    }
    /**
    * @param {number} handle1
    * @param {Function} f
    */
    intersections_with(handle1, f) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawnarrowphase_intersections_with(this.ptr, handle1, addHeapObject(f));
    }
    /**
    * @param {number} handle1
    * @param {number} handle2
    * @returns {boolean}
    */
    intersection_pair(handle1, handle2) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawnarrowphase_intersection_pair(this.ptr, handle1, handle2);
        return ret !== 0;
    }
}
/**
*/
class RawPhysicsPipeline {

    static __wrap(ptr) {
        const obj = Object.create(RawPhysicsPipeline.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawphysicspipeline_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawphysicspipeline_new();
        return RawPhysicsPipeline.__wrap(ret);
    }
    /**
    * @param {RawVector} gravity
    * @param {RawIntegrationParameters} integrationParameters
    * @param {RawIslandManager} islands
    * @param {RawBroadPhase} broadPhase
    * @param {RawNarrowPhase} narrowPhase
    * @param {RawRigidBodySet} bodies
    * @param {RawColliderSet} colliders
    * @param {RawImpulseJointSet} joints
    * @param {RawMultibodyJointSet} articulations
    * @param {RawCCDSolver} ccd_solver
    */
    step(gravity, integrationParameters, islands, broadPhase, narrowPhase, bodies, colliders, joints, articulations, ccd_solver) {
        _assertClass(gravity, RawVector);
        _assertClass(integrationParameters, RawIntegrationParameters);
        _assertClass(islands, RawIslandManager);
        _assertClass(broadPhase, RawBroadPhase);
        _assertClass(narrowPhase, RawNarrowPhase);
        _assertClass(bodies, RawRigidBodySet);
        _assertClass(colliders, RawColliderSet);
        _assertClass(joints, RawImpulseJointSet);
        _assertClass(articulations, RawMultibodyJointSet);
        _assertClass(ccd_solver, RawCCDSolver);
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawphysicspipeline_step(this.ptr, gravity.ptr, integrationParameters.ptr, islands.ptr, broadPhase.ptr, narrowPhase.ptr, bodies.ptr, colliders.ptr, joints.ptr, articulations.ptr, ccd_solver.ptr);
    }
    /**
    * @param {RawVector} gravity
    * @param {RawIntegrationParameters} integrationParameters
    * @param {RawIslandManager} islands
    * @param {RawBroadPhase} broadPhase
    * @param {RawNarrowPhase} narrowPhase
    * @param {RawRigidBodySet} bodies
    * @param {RawColliderSet} colliders
    * @param {RawImpulseJointSet} joints
    * @param {RawMultibodyJointSet} articulations
    * @param {RawCCDSolver} ccd_solver
    * @param {RawEventQueue} eventQueue
    * @param {object} hookObject
    * @param {Function} hookFilterContactPair
    * @param {Function} hookFilterIntersectionPair
    */
    stepWithEvents(gravity, integrationParameters, islands, broadPhase, narrowPhase, bodies, colliders, joints, articulations, ccd_solver, eventQueue, hookObject, hookFilterContactPair, hookFilterIntersectionPair) {
        _assertClass(gravity, RawVector);
        _assertClass(integrationParameters, RawIntegrationParameters);
        _assertClass(islands, RawIslandManager);
        _assertClass(broadPhase, RawBroadPhase);
        _assertClass(narrowPhase, RawNarrowPhase);
        _assertClass(bodies, RawRigidBodySet);
        _assertClass(colliders, RawColliderSet);
        _assertClass(joints, RawImpulseJointSet);
        _assertClass(articulations, RawMultibodyJointSet);
        _assertClass(ccd_solver, RawCCDSolver);
        _assertClass(eventQueue, RawEventQueue);
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawphysicspipeline_stepWithEvents(this.ptr, gravity.ptr, integrationParameters.ptr, islands.ptr, broadPhase.ptr, narrowPhase.ptr, bodies.ptr, colliders.ptr, joints.ptr, articulations.ptr, ccd_solver.ptr, eventQueue.ptr, addHeapObject(hookObject), addHeapObject(hookFilterContactPair), addHeapObject(hookFilterIntersectionPair));
    }
}
/**
*/
class RawPointColliderProjection {

    static __wrap(ptr) {
        const obj = Object.create(RawPointColliderProjection.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawpointcolliderprojection_free(ptr);
    }
    /**
    * @returns {number}
    */
    colliderHandle() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawpointcolliderprojection_colliderHandle(this.ptr);
        return ret;
    }
    /**
    * @returns {RawVector}
    */
    point() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawpointcolliderprojection_point(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {boolean}
    */
    isInside() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawpointcolliderprojection_isInside(this.ptr);
        return ret !== 0;
    }
    /**
    * @returns {number}
    */
    featureType() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawpointcolliderprojection_featureType(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number | undefined}
    */
    featureId() {
        try {
            const retptr = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawpointcolliderprojection_featureId(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1 >>> 0;
        } finally {
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
class RawPointProjection {

    static __wrap(ptr) {
        const obj = Object.create(RawPointProjection.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawpointprojection_free(ptr);
    }
    /**
    * @returns {RawVector}
    */
    point() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawpointprojection_point(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {boolean}
    */
    isInside() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawpointprojection_isInside(this.ptr);
        return ret !== 0;
    }
}
/**
*/
class RawQueryPipeline {

    static __wrap(ptr) {
        const obj = Object.create(RawQueryPipeline.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawquerypipeline_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawquerypipeline_new();
        return RawQueryPipeline.__wrap(ret);
    }
    /**
    * @param {RawIslandManager} islands
    * @param {RawRigidBodySet} bodies
    * @param {RawColliderSet} colliders
    */
    update(islands, bodies, colliders) {
        _assertClass(islands, RawIslandManager);
        _assertClass(bodies, RawRigidBodySet);
        _assertClass(colliders, RawColliderSet);
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawquerypipeline_update(this.ptr, islands.ptr, bodies.ptr, colliders.ptr);
    }
    /**
    * @param {RawColliderSet} colliders
    * @param {RawVector} rayOrig
    * @param {RawVector} rayDir
    * @param {number} maxToi
    * @param {boolean} solid
    * @param {number} groups
    * @param {Function} filter
    * @returns {RawRayColliderToi | undefined}
    */
    castRay(colliders, rayOrig, rayDir, maxToi, solid, groups, filter) {
        try {
            _assertClass(colliders, RawColliderSet);
            _assertClass(rayOrig, RawVector);
            _assertClass(rayDir, RawVector);
            const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawquerypipeline_castRay(this.ptr, colliders.ptr, rayOrig.ptr, rayDir.ptr, maxToi, solid, groups, addBorrowedObject(filter));
            return ret === 0 ? undefined : RawRayColliderToi.__wrap(ret);
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {RawColliderSet} colliders
    * @param {RawVector} rayOrig
    * @param {RawVector} rayDir
    * @param {number} maxToi
    * @param {boolean} solid
    * @param {number} groups
    * @param {Function} filter
    * @returns {RawRayColliderIntersection | undefined}
    */
    castRayAndGetNormal(colliders, rayOrig, rayDir, maxToi, solid, groups, filter) {
        try {
            _assertClass(colliders, RawColliderSet);
            _assertClass(rayOrig, RawVector);
            _assertClass(rayDir, RawVector);
            const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawquerypipeline_castRayAndGetNormal(this.ptr, colliders.ptr, rayOrig.ptr, rayDir.ptr, maxToi, solid, groups, addBorrowedObject(filter));
            return ret === 0 ? undefined : RawRayColliderIntersection.__wrap(ret);
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {RawColliderSet} colliders
    * @param {RawVector} rayOrig
    * @param {RawVector} rayDir
    * @param {number} maxToi
    * @param {boolean} solid
    * @param {number} groups
    * @param {Function} callback
    * @param {Function} filter
    */
    intersectionsWithRay(colliders, rayOrig, rayDir, maxToi, solid, groups, callback, filter) {
        try {
            _assertClass(colliders, RawColliderSet);
            _assertClass(rayOrig, RawVector);
            _assertClass(rayDir, RawVector);
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawquerypipeline_intersectionsWithRay(this.ptr, colliders.ptr, rayOrig.ptr, rayDir.ptr, maxToi, solid, groups, addBorrowedObject(callback), addBorrowedObject(filter));
        } finally {
            heap[stack_pointer++] = undefined;
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {RawColliderSet} colliders
    * @param {RawVector} shapePos
    * @param {RawRotation} shapeRot
    * @param {RawShape} shape
    * @param {number} groups
    * @param {Function} filter
    * @returns {number | undefined}
    */
    intersectionWithShape(colliders, shapePos, shapeRot, shape, groups, filter) {
        try {
            const retptr = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(colliders, RawColliderSet);
            _assertClass(shapePos, RawVector);
            _assertClass(shapeRot, RawRotation);
            _assertClass(shape, RawShape);
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawquerypipeline_intersectionWithShape(retptr, this.ptr, colliders.ptr, shapePos.ptr, shapeRot.ptr, shape.ptr, groups, addBorrowedObject(filter));
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r2 = getFloat64Memory0()[retptr / 8 + 1];
            return r0 === 0 ? undefined : r2;
        } finally {
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {RawColliderSet} colliders
    * @param {RawVector} point
    * @param {boolean} solid
    * @param {number} groups
    * @param {Function} filter
    * @returns {RawPointColliderProjection | undefined}
    */
    projectPoint(colliders, point, solid, groups, filter) {
        try {
            _assertClass(colliders, RawColliderSet);
            _assertClass(point, RawVector);
            const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawquerypipeline_projectPoint(this.ptr, colliders.ptr, point.ptr, solid, groups, addBorrowedObject(filter));
            return ret === 0 ? undefined : RawPointColliderProjection.__wrap(ret);
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {RawColliderSet} colliders
    * @param {RawVector} point
    * @param {number} groups
    * @returns {RawPointColliderProjection | undefined}
    */
    projectPointAndGetFeature(colliders, point, groups) {
        _assertClass(colliders, RawColliderSet);
        _assertClass(point, RawVector);
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawquerypipeline_projectPointAndGetFeature(this.ptr, colliders.ptr, point.ptr, groups);
        return ret === 0 ? undefined : RawPointColliderProjection.__wrap(ret);
    }
    /**
    * @param {RawColliderSet} colliders
    * @param {RawVector} point
    * @param {number} groups
    * @param {Function} callback
    * @param {Function} filter
    */
    intersectionsWithPoint(colliders, point, groups, callback, filter) {
        try {
            _assertClass(colliders, RawColliderSet);
            _assertClass(point, RawVector);
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawquerypipeline_intersectionsWithPoint(this.ptr, colliders.ptr, point.ptr, groups, addBorrowedObject(callback), addBorrowedObject(filter));
        } finally {
            heap[stack_pointer++] = undefined;
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {RawColliderSet} colliders
    * @param {RawVector} shapePos
    * @param {RawRotation} shapeRot
    * @param {RawVector} shapeVel
    * @param {RawShape} shape
    * @param {number} maxToi
    * @param {number} groups
    * @param {Function} filter
    * @returns {RawShapeColliderTOI | undefined}
    */
    castShape(colliders, shapePos, shapeRot, shapeVel, shape, maxToi, groups, filter) {
        try {
            _assertClass(colliders, RawColliderSet);
            _assertClass(shapePos, RawVector);
            _assertClass(shapeRot, RawRotation);
            _assertClass(shapeVel, RawVector);
            _assertClass(shape, RawShape);
            const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawquerypipeline_castShape(this.ptr, colliders.ptr, shapePos.ptr, shapeRot.ptr, shapeVel.ptr, shape.ptr, maxToi, groups, addBorrowedObject(filter));
            return ret === 0 ? undefined : RawShapeColliderTOI.__wrap(ret);
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {RawColliderSet} colliders
    * @param {RawVector} shapePos
    * @param {RawRotation} shapeRot
    * @param {RawShape} shape
    * @param {number} groups
    * @param {Function} callback
    * @param {Function} filter
    */
    intersectionsWithShape(colliders, shapePos, shapeRot, shape, groups, callback, filter) {
        try {
            _assertClass(colliders, RawColliderSet);
            _assertClass(shapePos, RawVector);
            _assertClass(shapeRot, RawRotation);
            _assertClass(shape, RawShape);
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawquerypipeline_intersectionsWithShape(this.ptr, colliders.ptr, shapePos.ptr, shapeRot.ptr, shape.ptr, groups, addBorrowedObject(callback), addBorrowedObject(filter));
        } finally {
            heap[stack_pointer++] = undefined;
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {RawVector} aabbCenter
    * @param {RawVector} aabbHalfExtents
    * @param {Function} callback
    */
    collidersWithAabbIntersectingAabb(aabbCenter, aabbHalfExtents, callback) {
        try {
            _assertClass(aabbCenter, RawVector);
            _assertClass(aabbHalfExtents, RawVector);
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawquerypipeline_collidersWithAabbIntersectingAabb(this.ptr, aabbCenter.ptr, aabbHalfExtents.ptr, addBorrowedObject(callback));
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
}
/**
*/
class RawRayColliderIntersection {

    static __wrap(ptr) {
        const obj = Object.create(RawRayColliderIntersection.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawraycolliderintersection_free(ptr);
    }
    /**
    * @returns {number}
    */
    colliderHandle() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawpointcolliderprojection_colliderHandle(this.ptr);
        return ret;
    }
    /**
    * @returns {RawVector}
    */
    normal() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawraycolliderintersection_normal(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    toi() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawraycolliderintersection_toi(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    featureType() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawpointcolliderprojection_featureType(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number | undefined}
    */
    featureId() {
        try {
            const retptr = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawpointcolliderprojection_featureId(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1 >>> 0;
        } finally {
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
class RawRayColliderToi {

    static __wrap(ptr) {
        const obj = Object.create(RawRayColliderToi.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawraycollidertoi_free(ptr);
    }
    /**
    * @returns {number}
    */
    colliderHandle() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawpointcolliderprojection_colliderHandle(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    toi() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawraycolliderintersection_toi(this.ptr);
        return ret;
    }
}
/**
*/
class RawRayIntersection {

    static __wrap(ptr) {
        const obj = Object.create(RawRayIntersection.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawrayintersection_free(ptr);
    }
    /**
    * @returns {RawVector}
    */
    normal() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrayintersection_normal(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    toi() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_dt(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    featureType() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrayintersection_featureType(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number | undefined}
    */
    featureId() {
        try {
            const retptr = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrayintersection_featureId(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1 >>> 0;
        } finally {
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
class RawRigidBodySet {

    static __wrap(ptr) {
        const obj = Object.create(RawRigidBodySet.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawrigidbodyset_free(ptr);
    }
    /**
    * The world-space translation of this rigid-body.
    * @param {number} handle
    * @returns {RawVector}
    */
    rbTranslation(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbTranslation(this.ptr, handle);
        return RawVector.__wrap(ret);
    }
    /**
    * The world-space orientation of this rigid-body.
    * @param {number} handle
    * @returns {RawRotation}
    */
    rbRotation(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbRotation(this.ptr, handle);
        return RawRotation.__wrap(ret);
    }
    /**
    * Put the given rigid-body to sleep.
    * @param {number} handle
    */
    rbSleep(handle) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbSleep(this.ptr, handle);
    }
    /**
    * Is this rigid-body sleeping?
    * @param {number} handle
    * @returns {boolean}
    */
    rbIsSleeping(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbIsSleeping(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * Is the velocity of this rigid-body not zero?
    * @param {number} handle
    * @returns {boolean}
    */
    rbIsMoving(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbIsMoving(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * The world-space predicted translation of this rigid-body.
    *
    * If this rigid-body is kinematic this value is set by the `setNextKinematicTranslation`
    * method and is used for estimating the kinematic body velocity at the next timestep.
    * For non-kinematic bodies, this value is currently unspecified.
    * @param {number} handle
    * @returns {RawVector}
    */
    rbNextTranslation(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbNextTranslation(this.ptr, handle);
        return RawVector.__wrap(ret);
    }
    /**
    * The world-space predicted orientation of this rigid-body.
    *
    * If this rigid-body is kinematic this value is set by the `setNextKinematicRotation`
    * method and is used for estimating the kinematic body velocity at the next timestep.
    * For non-kinematic bodies, this value is currently unspecified.
    * @param {number} handle
    * @returns {RawRotation}
    */
    rbNextRotation(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbNextRotation(this.ptr, handle);
        return RawRotation.__wrap(ret);
    }
    /**
    * Sets the translation of this rigid-body.
    *
    * # Parameters
    * - `x`: the world-space position of the rigid-body along the `x` axis.
    * - `y`: the world-space position of the rigid-body along the `y` axis.
    * - `wakeUp`: forces the rigid-body to wake-up so it is properly affected by forces if it
    * wasn't moving before modifying its position.
    * @param {number} handle
    * @param {number} x
    * @param {number} y
    * @param {boolean} wakeUp
    */
    rbSetTranslation(handle, x, y, wakeUp) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbSetTranslation(this.ptr, handle, x, y, wakeUp);
    }
    /**
    * Sets the rotation angle of this rigid-body.
    *
    * # Parameters
    * - `angle`: the rotation angle, in radians.
    * - `wakeUp`: forces the rigid-body to wake-up so it is properly affected by forces if it
    * wasn't moving before modifying its position.
    * @param {number} handle
    * @param {number} angle
    * @param {boolean} wakeUp
    */
    rbSetRotation(handle, angle, wakeUp) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbSetRotation(this.ptr, handle, angle, wakeUp);
    }
    /**
    * Sets the linear velocity of this rigid-body.
    * @param {number} handle
    * @param {RawVector} linvel
    * @param {boolean} wakeUp
    */
    rbSetLinvel(handle, linvel, wakeUp) {
        _assertClass(linvel, RawVector);
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbSetLinvel(this.ptr, handle, linvel.ptr, wakeUp);
    }
    /**
    * Sets the angular velocity of this rigid-body.
    * @param {number} handle
    * @param {number} angvel
    * @param {boolean} wakeUp
    */
    rbSetAngvel(handle, angvel, wakeUp) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbSetAngvel(this.ptr, handle, angvel, wakeUp);
    }
    /**
    * If this rigid body is kinematic, sets its future translation after the next timestep integration.
    *
    * This should be used instead of `rigidBody.setTranslation` to make the dynamic object
    * interacting with this kinematic body behave as expected. Internally, Rapier will compute
    * an artificial velocity for this rigid-body from its current position and its next kinematic
    * position. This velocity will be used to compute forces on dynamic bodies interacting with
    * this body.
    *
    * # Parameters
    * - `x`: the world-space position of the rigid-body along the `x` axis.
    * - `y`: the world-space position of the rigid-body along the `y` axis.
    * @param {number} handle
    * @param {number} x
    * @param {number} y
    */
    rbSetNextKinematicTranslation(handle, x, y) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbSetNextKinematicTranslation(this.ptr, handle, x, y);
    }
    /**
    * If this rigid body is kinematic, sets its future rotation after the next timestep integration.
    *
    * This should be used instead of `rigidBody.setRotation` to make the dynamic object
    * interacting with this kinematic body behave as expected. Internally, Rapier will compute
    * an artificial velocity for this rigid-body from its current position and its next kinematic
    * position. This velocity will be used to compute forces on dynamic bodies interacting with
    * this body.
    *
    * # Parameters
    * - `angle`: the rotation angle, in radians.
    * @param {number} handle
    * @param {number} angle
    */
    rbSetNextKinematicRotation(handle, angle) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbSetNextKinematicRotation(this.ptr, handle, angle);
    }
    /**
    * The linear velocity of this rigid-body.
    * @param {number} handle
    * @returns {RawVector}
    */
    rbLinvel(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbLinvel(this.ptr, handle);
        return RawVector.__wrap(ret);
    }
    /**
    * The angular velocity of this rigid-body.
    * @param {number} handle
    * @returns {number}
    */
    rbAngvel(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbAngvel(this.ptr, handle);
        return ret;
    }
    /**
    * @param {number} handle
    * @param {boolean} locked
    * @param {boolean} wake_up
    */
    rbLockTranslations(handle, locked, wake_up) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbLockTranslations(this.ptr, handle, locked, wake_up);
    }
    /**
    * @param {number} handle
    * @param {boolean} allow_x
    * @param {boolean} allow_y
    * @param {boolean} wake_up
    */
    rbRestrictTranslations(handle, allow_x, allow_y, wake_up) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbRestrictTranslations(this.ptr, handle, allow_x, allow_y, wake_up);
    }
    /**
    * @param {number} handle
    * @param {boolean} locked
    * @param {boolean} wake_up
    */
    rbLockRotations(handle, locked, wake_up) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbLockRotations(this.ptr, handle, locked, wake_up);
    }
    /**
    * @param {number} handle
    * @returns {number}
    */
    rbDominanceGroup(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbDominanceGroup(this.ptr, handle);
        return ret;
    }
    /**
    * @param {number} handle
    * @param {number} group
    */
    rbSetDominanceGroup(handle, group) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbSetDominanceGroup(this.ptr, handle, group);
    }
    /**
    * @param {number} handle
    * @param {boolean} enabled
    */
    rbEnableCcd(handle, enabled) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbEnableCcd(this.ptr, handle, enabled);
    }
    /**
    * The mass of this rigid-body.
    * @param {number} handle
    * @returns {number}
    */
    rbMass(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbMass(this.ptr, handle);
        return ret;
    }
    /**
    * Wakes this rigid-body up.
    *
    * A dynamic rigid-body that does not move during several consecutive frames will
    * be put to sleep by the physics engine, i.e., it will stop being simulated in order
    * to avoid useless computations.
    * This methods forces a sleeping rigid-body to wake-up. This is useful, e.g., before modifying
    * the position of a dynamic body so that it is properly simulated afterwards.
    * @param {number} handle
    */
    rbWakeUp(handle) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbWakeUp(this.ptr, handle);
    }
    /**
    * Is Continuous Collision Detection enabled for this rigid-body?
    * @param {number} handle
    * @returns {boolean}
    */
    rbIsCcdEnabled(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbIsCcdEnabled(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * The number of colliders attached to this rigid-body.
    * @param {number} handle
    * @returns {number}
    */
    rbNumColliders(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbNumColliders(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * Retrieves the `i-th` collider attached to this rigid-body.
    *
    * # Parameters
    * - `at`: The index of the collider to retrieve. Must be a number in `[0, this.numColliders()[`.
    *         This index is **not** the same as the unique identifier of the collider.
    * @param {number} handle
    * @param {number} at
    * @returns {number}
    */
    rbCollider(handle, at) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbCollider(this.ptr, handle, at);
        return ret;
    }
    /**
    * The status of this rigid-body: fixed, dynamic, or kinematic.
    * @param {number} handle
    * @returns {number}
    */
    rbBodyType(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbBodyType(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * Set a new status for this rigid-body: fixed, dynamic, or kinematic.
    * @param {number} handle
    * @param {number} status
    */
    rbSetBodyType(handle, status) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbSetBodyType(this.ptr, handle, status);
    }
    /**
    * Is this rigid-body fixed?
    * @param {number} handle
    * @returns {boolean}
    */
    rbIsFixed(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbIsFixed(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * Is this rigid-body kinematic?
    * @param {number} handle
    * @returns {boolean}
    */
    rbIsKinematic(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbIsKinematic(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * Is this rigid-body dynamic?
    * @param {number} handle
    * @returns {boolean}
    */
    rbIsDynamic(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbIsDynamic(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * The linear damping coefficient of this rigid-body.
    * @param {number} handle
    * @returns {number}
    */
    rbLinearDamping(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbLinearDamping(this.ptr, handle);
        return ret;
    }
    /**
    * The angular damping coefficient of this rigid-body.
    * @param {number} handle
    * @returns {number}
    */
    rbAngularDamping(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbAngularDamping(this.ptr, handle);
        return ret;
    }
    /**
    * @param {number} handle
    * @param {number} factor
    */
    rbSetLinearDamping(handle, factor) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbSetLinearDamping(this.ptr, handle, factor);
    }
    /**
    * @param {number} handle
    * @param {number} factor
    */
    rbSetAngularDamping(handle, factor) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbSetAngularDamping(this.ptr, handle, factor);
    }
    /**
    * @param {number} handle
    * @returns {number}
    */
    rbGravityScale(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbGravityScale(this.ptr, handle);
        return ret;
    }
    /**
    * @param {number} handle
    * @param {number} factor
    * @param {boolean} wakeUp
    */
    rbSetGravityScale(handle, factor, wakeUp) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbSetGravityScale(this.ptr, handle, factor, wakeUp);
    }
    /**
    * Resets to zero all user-added forces added to this rigid-body.
    * @param {number} handle
    * @param {boolean} wakeUp
    */
    rbResetForces(handle, wakeUp) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbResetForces(this.ptr, handle, wakeUp);
    }
    /**
    * Resets to zero all user-added torques added to this rigid-body.
    * @param {number} handle
    * @param {boolean} wakeUp
    */
    rbResetTorques(handle, wakeUp) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbResetTorques(this.ptr, handle, wakeUp);
    }
    /**
    * Adds a force at the center-of-mass of this rigid-body.
    *
    * # Parameters
    * - `force`: the world-space force to apply on the rigid-body.
    * - `wakeUp`: should the rigid-body be automatically woken-up?
    * @param {number} handle
    * @param {RawVector} force
    * @param {boolean} wakeUp
    */
    rbAddForce(handle, force, wakeUp) {
        _assertClass(force, RawVector);
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbAddForce(this.ptr, handle, force.ptr, wakeUp);
    }
    /**
    * Applies an impulse at the center-of-mass of this rigid-body.
    *
    * # Parameters
    * - `impulse`: the world-space impulse to apply on the rigid-body.
    * - `wakeUp`: should the rigid-body be automatically woken-up?
    * @param {number} handle
    * @param {RawVector} impulse
    * @param {boolean} wakeUp
    */
    rbApplyImpulse(handle, impulse, wakeUp) {
        _assertClass(impulse, RawVector);
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbApplyImpulse(this.ptr, handle, impulse.ptr, wakeUp);
    }
    /**
    * Adds a torque at the center-of-mass of this rigid-body.
    *
    * # Parameters
    * - `torque`: the torque to apply on the rigid-body.
    * - `wakeUp`: should the rigid-body be automatically woken-up?
    * @param {number} handle
    * @param {number} torque
    * @param {boolean} wakeUp
    */
    rbAddTorque(handle, torque, wakeUp) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbAddTorque(this.ptr, handle, torque, wakeUp);
    }
    /**
    * Applies an impulsive torque at the center-of-mass of this rigid-body.
    *
    * # Parameters
    * - `torque impulse`: the torque impulse to apply on the rigid-body.
    * - `wakeUp`: should the rigid-body be automatically woken-up?
    * @param {number} handle
    * @param {number} torque_impulse
    * @param {boolean} wakeUp
    */
    rbApplyTorqueImpulse(handle, torque_impulse, wakeUp) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbApplyTorqueImpulse(this.ptr, handle, torque_impulse, wakeUp);
    }
    /**
    * Adds a force at the given world-space point of this rigid-body.
    *
    * # Parameters
    * - `force`: the world-space force to apply on the rigid-body.
    * - `point`: the world-space point where the impulse is to be applied on the rigid-body.
    * - `wakeUp`: should the rigid-body be automatically woken-up?
    * @param {number} handle
    * @param {RawVector} force
    * @param {RawVector} point
    * @param {boolean} wakeUp
    */
    rbAddForceAtPoint(handle, force, point, wakeUp) {
        _assertClass(force, RawVector);
        _assertClass(point, RawVector);
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbAddForceAtPoint(this.ptr, handle, force.ptr, point.ptr, wakeUp);
    }
    /**
    * Applies an impulse at the given world-space point of this rigid-body.
    *
    * # Parameters
    * - `impulse`: the world-space impulse to apply on the rigid-body.
    * - `point`: the world-space point where the impulse is to be applied on the rigid-body.
    * - `wakeUp`: should the rigid-body be automatically woken-up?
    * @param {number} handle
    * @param {RawVector} impulse
    * @param {RawVector} point
    * @param {boolean} wakeUp
    */
    rbApplyImpulseAtPoint(handle, impulse, point, wakeUp) {
        _assertClass(impulse, RawVector);
        _assertClass(point, RawVector);
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbApplyImpulseAtPoint(this.ptr, handle, impulse.ptr, point.ptr, wakeUp);
    }
    /**
    * An arbitrary user-defined 32-bit integer
    * @param {number} handle
    * @returns {number}
    */
    rbUserData(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbUserData(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * Sets the user-defined 32-bit integer of this rigid-body.
    *
    * # Parameters
    * - `data`: an arbitrary user-defined 32-bit integer.
    * @param {number} handle
    * @param {number} data
    */
    rbSetUserData(handle, data) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_rbSetUserData(this.ptr, handle, data);
    }
    /**
    */
    constructor() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_new();
        return RawRigidBodySet.__wrap(ret);
    }
    /**
    * @param {RawVector} translation
    * @param {RawRotation} rotation
    * @param {number} gravityScale
    * @param {number} mass
    * @param {RawVector} centerOfMass
    * @param {RawVector} linvel
    * @param {number} angvel
    * @param {number} principalAngularInertia
    * @param {boolean} translationEnabledX
    * @param {boolean} translationEnabledY
    * @param {boolean} rotationsEnabled
    * @param {number} linearDamping
    * @param {number} angularDamping
    * @param {number} rb_type
    * @param {boolean} canSleep
    * @param {boolean} sleeping
    * @param {boolean} ccdEnabled
    * @param {number} dominanceGroup
    * @returns {number}
    */
    createRigidBody(translation, rotation, gravityScale, mass, centerOfMass, linvel, angvel, principalAngularInertia, translationEnabledX, translationEnabledY, rotationsEnabled, linearDamping, angularDamping, rb_type, canSleep, sleeping, ccdEnabled, dominanceGroup) {
        _assertClass(translation, RawVector);
        _assertClass(rotation, RawRotation);
        _assertClass(centerOfMass, RawVector);
        _assertClass(linvel, RawVector);
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_createRigidBody(this.ptr, translation.ptr, rotation.ptr, gravityScale, mass, centerOfMass.ptr, linvel.ptr, angvel, principalAngularInertia, translationEnabledX, translationEnabledY, rotationsEnabled, linearDamping, angularDamping, rb_type, canSleep, sleeping, ccdEnabled, dominanceGroup);
        return ret;
    }
    /**
    * @param {number} handle
    * @param {RawIslandManager} islands
    * @param {RawColliderSet} colliders
    * @param {RawImpulseJointSet} joints
    * @param {RawMultibodyJointSet} articulations
    */
    remove(handle, islands, colliders, joints, articulations) {
        _assertClass(islands, RawIslandManager);
        _assertClass(colliders, RawColliderSet);
        _assertClass(joints, RawImpulseJointSet);
        _assertClass(articulations, RawMultibodyJointSet);
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_remove(this.ptr, handle, islands.ptr, colliders.ptr, joints.ptr, articulations.ptr);
    }
    /**
    * The number of rigid-bodies on this set.
    * @returns {number}
    */
    len() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * Checks if a rigid-body with the given integer handle exists.
    * @param {number} handle
    * @returns {boolean}
    */
    contains(handle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_contains(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * Applies the given JavaScript function to the integer handle of each rigid-body managed by this set.
    *
    * # Parameters
    * - `f(handle)`: the function to apply to the integer handle of each rigid-body managed by this set. Called as `f(collider)`.
    * @param {Function} f
    */
    forEachRigidBodyHandle(f) {
        try {
            _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrigidbodyset_forEachRigidBodyHandle(this.ptr, addBorrowedObject(f));
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
}
/**
* A rotation quaternion.
*/
class RawRotation {

    static __wrap(ptr) {
        const obj = Object.create(RawRotation.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawrotation_free(ptr);
    }
    /**
    * The identity rotation.
    * @returns {RawRotation}
    */
    static identity() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrotation_identity();
        return RawRotation.__wrap(ret);
    }
    /**
    * The rotation with thegiven angle.
    * @param {number} angle
    * @returns {RawRotation}
    */
    static fromAngle(angle) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrotation_fromAngle(angle);
        return RawRotation.__wrap(ret);
    }
    /**
    * The imaginary part of this complex number.
    * @returns {number}
    */
    get im() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrotation_im(this.ptr);
        return ret;
    }
    /**
    * The real part of this complex number.
    * @returns {number}
    */
    get re() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_dt(this.ptr);
        return ret;
    }
    /**
    * The rotation angle in radians.
    * @returns {number}
    */
    get angle() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrotation_angle(this.ptr);
        return ret;
    }
}
/**
*/
class RawSerializationPipeline {

    static __wrap(ptr) {
        const obj = Object.create(RawSerializationPipeline.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawserializationpipeline_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawserializationpipeline_new();
        return RawSerializationPipeline.__wrap(ret);
    }
    /**
    * @param {RawVector} gravity
    * @param {RawIntegrationParameters} integrationParameters
    * @param {RawIslandManager} islands
    * @param {RawBroadPhase} broadPhase
    * @param {RawNarrowPhase} narrowPhase
    * @param {RawRigidBodySet} bodies
    * @param {RawColliderSet} colliders
    * @param {RawImpulseJointSet} impulse_joints
    * @param {RawMultibodyJointSet} multibody_joints
    * @returns {Uint8Array | undefined}
    */
    serializeAll(gravity, integrationParameters, islands, broadPhase, narrowPhase, bodies, colliders, impulse_joints, multibody_joints) {
        _assertClass(gravity, RawVector);
        _assertClass(integrationParameters, RawIntegrationParameters);
        _assertClass(islands, RawIslandManager);
        _assertClass(broadPhase, RawBroadPhase);
        _assertClass(narrowPhase, RawNarrowPhase);
        _assertClass(bodies, RawRigidBodySet);
        _assertClass(colliders, RawColliderSet);
        _assertClass(impulse_joints, RawImpulseJointSet);
        _assertClass(multibody_joints, RawMultibodyJointSet);
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawserializationpipeline_serializeAll(this.ptr, gravity.ptr, integrationParameters.ptr, islands.ptr, broadPhase.ptr, narrowPhase.ptr, bodies.ptr, colliders.ptr, impulse_joints.ptr, multibody_joints.ptr);
        return takeObject(ret);
    }
    /**
    * @param {Uint8Array} data
    * @returns {RawDeserializedWorld | undefined}
    */
    deserializeAll(data) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawserializationpipeline_deserializeAll(this.ptr, addHeapObject(data));
        return ret === 0 ? undefined : RawDeserializedWorld.__wrap(ret);
    }
}
/**
*/
class RawShape {

    static __wrap(ptr) {
        const obj = Object.create(RawShape.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawshape_free(ptr);
    }
    /**
    * @param {number} hx
    * @param {number} hy
    * @returns {RawShape}
    */
    static cuboid(hx, hy) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_cuboid(hx, hy);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {number} hx
    * @param {number} hy
    * @param {number} borderRadius
    * @returns {RawShape}
    */
    static roundCuboid(hx, hy, borderRadius) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_roundCuboid(hx, hy, borderRadius);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {number} radius
    * @returns {RawShape}
    */
    static ball(radius) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_ball(radius);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {number} halfHeight
    * @param {number} radius
    * @returns {RawShape}
    */
    static capsule(halfHeight, radius) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_capsule(halfHeight, radius);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {Float32Array} vertices
    * @param {Uint32Array} indices
    * @returns {RawShape}
    */
    static polyline(vertices, indices) {
        const ptr0 = passArrayF32ToWasm0(vertices, _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArray32ToWasm0(indices, _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_polyline(ptr0, len0, ptr1, len1);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {Float32Array} vertices
    * @param {Uint32Array} indices
    * @returns {RawShape}
    */
    static trimesh(vertices, indices) {
        const ptr0 = passArrayF32ToWasm0(vertices, _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArray32ToWasm0(indices, _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_trimesh(ptr0, len0, ptr1, len1);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {Float32Array} heights
    * @param {RawVector} scale
    * @returns {RawShape}
    */
    static heightfield(heights, scale) {
        const ptr0 = passArrayF32ToWasm0(heights, _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        _assertClass(scale, RawVector);
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_heightfield(ptr0, len0, scale.ptr);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {RawVector} p1
    * @param {RawVector} p2
    * @returns {RawShape}
    */
    static segment(p1, p2) {
        _assertClass(p1, RawVector);
        _assertClass(p2, RawVector);
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_segment(p1.ptr, p2.ptr);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {RawVector} p1
    * @param {RawVector} p2
    * @param {RawVector} p3
    * @returns {RawShape}
    */
    static triangle(p1, p2, p3) {
        _assertClass(p1, RawVector);
        _assertClass(p2, RawVector);
        _assertClass(p3, RawVector);
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_triangle(p1.ptr, p2.ptr, p3.ptr);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {RawVector} p1
    * @param {RawVector} p2
    * @param {RawVector} p3
    * @param {number} borderRadius
    * @returns {RawShape}
    */
    static roundTriangle(p1, p2, p3, borderRadius) {
        _assertClass(p1, RawVector);
        _assertClass(p2, RawVector);
        _assertClass(p3, RawVector);
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_roundTriangle(p1.ptr, p2.ptr, p3.ptr, borderRadius);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {Float32Array} points
    * @returns {RawShape | undefined}
    */
    static convexHull(points) {
        const ptr0 = passArrayF32ToWasm0(points, _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_convexHull(ptr0, len0);
        return ret === 0 ? undefined : RawShape.__wrap(ret);
    }
    /**
    * @param {Float32Array} points
    * @param {number} borderRadius
    * @returns {RawShape | undefined}
    */
    static roundConvexHull(points, borderRadius) {
        const ptr0 = passArrayF32ToWasm0(points, _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_roundConvexHull(ptr0, len0, borderRadius);
        return ret === 0 ? undefined : RawShape.__wrap(ret);
    }
    /**
    * @param {Float32Array} vertices
    * @returns {RawShape | undefined}
    */
    static convexPolyline(vertices) {
        const ptr0 = passArrayF32ToWasm0(vertices, _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_convexPolyline(ptr0, len0);
        return ret === 0 ? undefined : RawShape.__wrap(ret);
    }
    /**
    * @param {Float32Array} vertices
    * @param {number} borderRadius
    * @returns {RawShape | undefined}
    */
    static roundConvexPolyline(vertices, borderRadius) {
        const ptr0 = passArrayF32ToWasm0(vertices, _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_roundConvexPolyline(ptr0, len0, borderRadius);
        return ret === 0 ? undefined : RawShape.__wrap(ret);
    }
    /**
    * @param {RawVector} shapePos1
    * @param {RawRotation} shapeRot1
    * @param {RawVector} shapeVel1
    * @param {RawShape} shape2
    * @param {RawVector} shapePos2
    * @param {RawRotation} shapeRot2
    * @param {RawVector} shapeVel2
    * @param {number} maxToi
    * @returns {RawShapeTOI | undefined}
    */
    castShape(shapePos1, shapeRot1, shapeVel1, shape2, shapePos2, shapeRot2, shapeVel2, maxToi) {
        _assertClass(shapePos1, RawVector);
        _assertClass(shapeRot1, RawRotation);
        _assertClass(shapeVel1, RawVector);
        _assertClass(shape2, RawShape);
        _assertClass(shapePos2, RawVector);
        _assertClass(shapeRot2, RawRotation);
        _assertClass(shapeVel2, RawVector);
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_castShape(this.ptr, shapePos1.ptr, shapeRot1.ptr, shapeVel1.ptr, shape2.ptr, shapePos2.ptr, shapeRot2.ptr, shapeVel2.ptr, maxToi);
        return ret === 0 ? undefined : RawShapeTOI.__wrap(ret);
    }
    /**
    * @param {RawVector} shapePos1
    * @param {RawRotation} shapeRot1
    * @param {RawShape} shape2
    * @param {RawVector} shapePos2
    * @param {RawRotation} shapeRot2
    * @returns {boolean}
    */
    intersectsShape(shapePos1, shapeRot1, shape2, shapePos2, shapeRot2) {
        _assertClass(shapePos1, RawVector);
        _assertClass(shapeRot1, RawRotation);
        _assertClass(shape2, RawShape);
        _assertClass(shapePos2, RawVector);
        _assertClass(shapeRot2, RawRotation);
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_intersectsShape(this.ptr, shapePos1.ptr, shapeRot1.ptr, shape2.ptr, shapePos2.ptr, shapeRot2.ptr);
        return ret !== 0;
    }
    /**
    * @param {RawVector} shapePos1
    * @param {RawRotation} shapeRot1
    * @param {RawShape} shape2
    * @param {RawVector} shapePos2
    * @param {RawRotation} shapeRot2
    * @param {number} prediction
    * @returns {RawShapeContact | undefined}
    */
    contactShape(shapePos1, shapeRot1, shape2, shapePos2, shapeRot2, prediction) {
        _assertClass(shapePos1, RawVector);
        _assertClass(shapeRot1, RawRotation);
        _assertClass(shape2, RawShape);
        _assertClass(shapePos2, RawVector);
        _assertClass(shapeRot2, RawRotation);
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_contactShape(this.ptr, shapePos1.ptr, shapeRot1.ptr, shape2.ptr, shapePos2.ptr, shapeRot2.ptr, prediction);
        return ret === 0 ? undefined : RawShapeContact.__wrap(ret);
    }
    /**
    * @param {RawVector} shapePos
    * @param {RawRotation} shapeRot
    * @param {RawVector} point
    * @returns {boolean}
    */
    containsPoint(shapePos, shapeRot, point) {
        _assertClass(shapePos, RawVector);
        _assertClass(shapeRot, RawRotation);
        _assertClass(point, RawVector);
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_containsPoint(this.ptr, shapePos.ptr, shapeRot.ptr, point.ptr);
        return ret !== 0;
    }
    /**
    * @param {RawVector} shapePos
    * @param {RawRotation} shapeRot
    * @param {RawVector} point
    * @param {boolean} solid
    * @returns {RawPointProjection}
    */
    projectPoint(shapePos, shapeRot, point, solid) {
        _assertClass(shapePos, RawVector);
        _assertClass(shapeRot, RawRotation);
        _assertClass(point, RawVector);
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_projectPoint(this.ptr, shapePos.ptr, shapeRot.ptr, point.ptr, solid);
        return RawPointProjection.__wrap(ret);
    }
    /**
    * @param {RawVector} shapePos
    * @param {RawRotation} shapeRot
    * @param {RawVector} rayOrig
    * @param {RawVector} rayDir
    * @param {number} maxToi
    * @returns {boolean}
    */
    intersectsRay(shapePos, shapeRot, rayOrig, rayDir, maxToi) {
        _assertClass(shapePos, RawVector);
        _assertClass(shapeRot, RawRotation);
        _assertClass(rayOrig, RawVector);
        _assertClass(rayDir, RawVector);
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_intersectsRay(this.ptr, shapePos.ptr, shapeRot.ptr, rayOrig.ptr, rayDir.ptr, maxToi);
        return ret !== 0;
    }
    /**
    * @param {RawVector} shapePos
    * @param {RawRotation} shapeRot
    * @param {RawVector} rayOrig
    * @param {RawVector} rayDir
    * @param {number} maxToi
    * @param {boolean} solid
    * @returns {number}
    */
    castRay(shapePos, shapeRot, rayOrig, rayDir, maxToi, solid) {
        _assertClass(shapePos, RawVector);
        _assertClass(shapeRot, RawRotation);
        _assertClass(rayOrig, RawVector);
        _assertClass(rayDir, RawVector);
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_castRay(this.ptr, shapePos.ptr, shapeRot.ptr, rayOrig.ptr, rayDir.ptr, maxToi, solid);
        return ret;
    }
    /**
    * @param {RawVector} shapePos
    * @param {RawRotation} shapeRot
    * @param {RawVector} rayOrig
    * @param {RawVector} rayDir
    * @param {number} maxToi
    * @param {boolean} solid
    * @returns {RawRayIntersection | undefined}
    */
    castRayAndGetNormal(shapePos, shapeRot, rayOrig, rayDir, maxToi, solid) {
        _assertClass(shapePos, RawVector);
        _assertClass(shapeRot, RawRotation);
        _assertClass(rayOrig, RawVector);
        _assertClass(rayDir, RawVector);
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshape_castRayAndGetNormal(this.ptr, shapePos.ptr, shapeRot.ptr, rayOrig.ptr, rayDir.ptr, maxToi, solid);
        return ret === 0 ? undefined : RawRayIntersection.__wrap(ret);
    }
}
/**
*/
class RawShapeColliderTOI {

    static __wrap(ptr) {
        const obj = Object.create(RawShapeColliderTOI.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawshapecollidertoi_free(ptr);
    }
    /**
    * @returns {number}
    */
    colliderHandle() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawpointcolliderprojection_colliderHandle(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    toi() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawraycolliderintersection_toi(this.ptr);
        return ret;
    }
    /**
    * @returns {RawVector}
    */
    witness1() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawraycolliderintersection_normal(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {RawVector}
    */
    witness2() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshapecollidertoi_witness2(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {RawVector}
    */
    normal1() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshapecollidertoi_normal1(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {RawVector}
    */
    normal2() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshapecollidertoi_normal2(this.ptr);
        return RawVector.__wrap(ret);
    }
}
/**
*/
class RawShapeContact {

    static __wrap(ptr) {
        const obj = Object.create(RawShapeContact.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawshapecontact_free(ptr);
    }
    /**
    * @returns {number}
    */
    distance() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_predictionDistance(this.ptr);
        return ret;
    }
    /**
    * @returns {RawVector}
    */
    point1() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawpointprojection_point(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {RawVector}
    */
    point2() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshapecontact_point2(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {RawVector}
    */
    normal1() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshapecontact_normal1(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {RawVector}
    */
    normal2() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshapecontact_normal2(this.ptr);
        return RawVector.__wrap(ret);
    }
}
/**
*/
class RawShapeTOI {

    static __wrap(ptr) {
        const obj = Object.create(RawShapeTOI.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawshapetoi_free(ptr);
    }
    /**
    * @returns {number}
    */
    toi() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_dt(this.ptr);
        return ret;
    }
    /**
    * @returns {RawVector}
    */
    witness1() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrayintersection_normal(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {RawVector}
    */
    witness2() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshapetoi_witness2(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {RawVector}
    */
    normal1() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshapetoi_normal1(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {RawVector}
    */
    normal2() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawshapetoi_normal2(this.ptr);
        return RawVector.__wrap(ret);
    }
}
/**
* A vector.
*/
class RawVector {

    static __wrap(ptr) {
        const obj = Object.create(RawVector.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_rawvector_free(ptr);
    }
    /**
    * Creates a new vector filled with zeros.
    * @returns {RawVector}
    */
    static zero() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawvector_zero();
        return RawVector.__wrap(ret);
    }
    /**
    * Creates a new 2D vector from its two components.
    *
    * # Parameters
    * - `x`: the `x` component of this 2D vector.
    * - `y`: the `y` component of this 2D vector.
    * @param {number} x
    * @param {number} y
    */
    constructor(x, y) {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawvector_new(x, y);
        return RawVector.__wrap(ret);
    }
    /**
    * The `x` component of this vector.
    * @returns {number}
    */
    get x() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_dt(this.ptr);
        return ret;
    }
    /**
    * Sets the `x` component of this vector.
    * @param {number} x
    */
    set x(x) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawintegrationparameters_set_dt(this.ptr, x);
    }
    /**
    * The `y` component of this vector.
    * @returns {number}
    */
    get y() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawrotation_im(this.ptr);
        return ret;
    }
    /**
    * Sets the `y` component of this vector.
    * @param {number} y
    */
    set y(y) {
        _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawvector_set_y(this.ptr, y);
    }
    /**
    * Create a new 2D vector from this vector with its components rearranged as `{x, y}`.
    * @returns {RawVector}
    */
    xy() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawvector_xy(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * Create a new 2D vector from this vector with its components rearranged as `{y, x}`.
    * @returns {RawVector}
    */
    yx() {
        const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rawvector_yx(this.ptr);
        return RawVector.__wrap(ret);
    }
}

function __wbindgen_object_drop_ref(arg0) {
    takeObject(arg0);
};

function __wbindgen_number_new(arg0) {
    const ret = arg0;
    return addHeapObject(ret);
};

function __wbindgen_number_get(arg0, arg1) {
    const obj = getObject(arg1);
    const ret = typeof(obj) === 'number' ? obj : undefined;
    getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;
    getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
};

function __wbindgen_boolean_get(arg0) {
    const v = getObject(arg0);
    const ret = typeof(v) === 'boolean' ? (v ? 1 : 0) : 2;
    return ret;
};

function __wbg_rawraycolliderintersection_new(arg0) {
    const ret = RawRayColliderIntersection.__wrap(arg0);
    return addHeapObject(ret);
};

function __wbindgen_is_function(arg0) {
    const ret = typeof(getObject(arg0)) === 'function';
    return ret;
};

function __wbg_call_3ed288a247f13ea5() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
}, arguments) };

function __wbg_call_a19d3173f3e1d3c5() { return handleError(function (arg0, arg1, arg2, arg3) {
    const ret = getObject(arg0).call(getObject(arg1), getObject(arg2), getObject(arg3));
    return addHeapObject(ret);
}, arguments) };

function __wbg_call_6ed7121cfb42cfed() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    const ret = getObject(arg0).call(getObject(arg1), getObject(arg2), getObject(arg3), getObject(arg4));
    return addHeapObject(ret);
}, arguments) };

function __wbg_bind_c09a1641c1580c07(arg0, arg1, arg2, arg3) {
    const ret = getObject(arg0).bind(getObject(arg1), getObject(arg2), getObject(arg3));
    return addHeapObject(ret);
};

function __wbg_buffer_7af23f65f6c64548(arg0) {
    const ret = getObject(arg0).buffer;
    return addHeapObject(ret);
};

function __wbg_newwithbyteoffsetandlength_ce1e75f0ce5f7974(arg0, arg1, arg2) {
    const ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
};

function __wbg_new_cc9018bd6f283b6f(arg0) {
    const ret = new Uint8Array(getObject(arg0));
    return addHeapObject(ret);
};

function __wbg_set_f25e869e4565d2a2(arg0, arg1, arg2) {
    getObject(arg0).set(getObject(arg1), arg2 >>> 0);
};

function __wbg_length_0acb1cf9bbaf8519(arg0) {
    const ret = getObject(arg0).length;
    return ret;
};

function __wbg_newwithbyteoffsetandlength_3f554978d8793b14(arg0, arg1, arg2) {
    const ret = new Float32Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
};

function __wbg_set_9a9604c6888f6468(arg0, arg1, arg2) {
    getObject(arg0).set(getObject(arg1), arg2 >>> 0);
};

function __wbg_length_371cc1c92aa8feae(arg0) {
    const ret = getObject(arg0).length;
    return ret;
};

function __wbg_newwithlength_e538258cb2a6bad0(arg0) {
    const ret = new Float32Array(arg0 >>> 0);
    return addHeapObject(ret);
};

function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

function __wbindgen_memory() {
    const ret = _rapier_wasm2d_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory;
    return addHeapObject(ret);
};



/***/ }),

/***/ "./node_modules/phaser/dist/phaser-arcade-physics.min.js":
/*!***************************************************************!*\
  !*** ./node_modules/phaser/dist/phaser-arcade-physics.min.js ***!
  \***************************************************************/
/***/ ((module) => {


/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game(config) {
        var _this = _super.call(this, config) || this;
        Game.currentInstance = _this;
        return _this;
    }
    Game.prototype.onBlur = function () {
        _super.prototype.onBlur.call(this);
    };
    Game.prototype.onFocus = function () {
        _super.prototype.onFocus.call(this);
    };
    return Game;
}(Phaser.Game));
exports.Game = Game;


/***/ }),

/***/ "./src/GameConstants.ts":
/*!******************************!*\
  !*** ./src/GameConstants.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var GameConstants = /** @class */ (function () {
    function GameConstants() {
    }
    GameConstants.VERSION = "0.0";
    GameConstants.DEVELOPMENT = false;
    GameConstants.VERBOSE = false;
    GameConstants.GAME_WIDTH = 768;
    GameConstants.GAME_HEIGHT = 1024;
    GameConstants.SAVED_GAME_DATA_KEY = "physics-game";
    return GameConstants;
}());
exports.GameConstants = GameConstants;


/***/ }),

/***/ "./src/GameManager.ts":
/*!****************************!*\
  !*** ./src/GameManager.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var GameConstants_1 = __webpack_require__(/*! ./GameConstants */ "./src/GameConstants.ts");
var GameVars_1 = __webpack_require__(/*! ./GameVars */ "./src/GameVars.ts");
var GameManager = /** @class */ (function () {
    function GameManager() {
    }
    GameManager.init = function () {
        if (GameVars_1.GameVars.currentScene.sys.game.device.os.desktop) {
            GameVars_1.GameVars.scaleY = 1;
        }
        else {
            GameVars_1.GameVars.currentScene.game.scale.displaySize = GameVars_1.GameVars.currentScene.game.scale.parentSize;
            GameVars_1.GameVars.currentScene.game.scale.refresh();
            var aspectRatio = window.innerHeight / window.innerWidth;
            GameVars_1.GameVars.scaleY = (GameConstants_1.GameConstants.GAME_HEIGHT / GameConstants_1.GameConstants.GAME_WIDTH) / aspectRatio;
        }
        GameManager.readGameData();
    };
    GameManager.readGameData = function () {
        GameManager.getGameStorageData(GameConstants_1.GameConstants.SAVED_GAME_DATA_KEY, function (gameData) {
            if (gameData) {
                GameVars_1.GameVars.gameData = JSON.parse(gameData);
            }
            else {
                GameVars_1.GameVars.gameData = {
                    muted: false
                };
            }
            GameManager.startGame();
        });
    };
    GameManager.setCurrentScene = function (scene) {
        GameVars_1.GameVars.currentScene = scene;
    };
    GameManager.onGameAssetsLoaded = function () {
        GameManager.enterBoardScene();
    };
    GameManager.enterBoardScene = function () {
        GameVars_1.GameVars.currentScene.scene.start("BoardScene");
    };
    GameManager.writeGameData = function () {
        GameManager.setGameStorageData(GameConstants_1.GameConstants.SAVED_GAME_DATA_KEY, GameVars_1.GameVars.gameData, function () {
            GameManager.log("game data successfully saved");
        });
    };
    GameManager.log = function (text, error) {
        if (!GameConstants_1.GameConstants.VERBOSE) {
            return;
        }
        if (error) {
            console.error(text + ":", error);
        }
        else {
            console.log(text);
        }
    };
    GameManager.startGame = function () {
        GameVars_1.GameVars.currentScene.scene.start("PreloadScene");
    };
    GameManager.getGameStorageData = function (key, successCb) {
        var gameDataStr = localStorage.getItem(key);
        successCb(gameDataStr);
    };
    GameManager.setGameStorageData = function (key, value, successCb) {
        localStorage.setItem(key, JSON.stringify(value));
        successCb();
    };
    return GameManager;
}());
exports.GameManager = GameManager;


/***/ }),

/***/ "./src/GameVars.ts":
/*!*************************!*\
  !*** ./src/GameVars.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var GameVars = /** @class */ (function () {
    function GameVars() {
    }
    GameVars.formatNumber = function (value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    return GameVars;
}());
exports.GameVars = GameVars;


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser-arcade-physics.min.js");
Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! @dimforge/rapier2d */ "./node_modules/@dimforge/rapier2d/rapier.js")); });
var Game_1 = __webpack_require__(/*! ./Game */ "./src/Game.ts");
var GameConstants_1 = __webpack_require__(/*! ./GameConstants */ "./src/GameConstants.ts");
var BootScene_1 = __webpack_require__(/*! ./scenes/BootScene */ "./src/scenes/BootScene.ts");
var PreloadScene_1 = __webpack_require__(/*! ./scenes/PreloadScene */ "./src/scenes/PreloadScene.ts");
var BoardScene_1 = __webpack_require__(/*! ./scenes/board-scene/BoardScene */ "./src/scenes/board-scene/BoardScene.ts");
var GameVars_1 = __webpack_require__(/*! ./GameVars */ "./src/GameVars.ts");
var GameManager_1 = __webpack_require__(/*! ./GameManager */ "./src/GameManager.ts");
var game;
window.onload = function () {
    var gameConfig = {
        version: GameConstants_1.GameConstants.VERSION,
        type: Phaser.AUTO,
        backgroundColor: "CCCCCC",
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            parent: "content",
            width: GameConstants_1.GameConstants.GAME_WIDTH,
            height: GameConstants_1.GameConstants.GAME_HEIGHT
        },
        scene: [
            BootScene_1.BootScene,
            PreloadScene_1.PreloadScene,
            BoardScene_1.BoardScene
        ]
    };
    // If compilation error here, compare Phaser definitions file of working copy (phaser.d.ts, line 48040 on 27-05-2019)
    // Also make sure to delete all *.ts files in node_modules/trailz folder
    game = new Game_1.Game(gameConfig);
    window.focus();
    resize();
    window.addEventListener("resize", resize, false);
    window.addEventListener("orientationchange", checkOriention, false);
};
function resize() {
    var canvas = document.querySelector("canvas");
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var windowRatio = windowWidth / windowHeight;
    var gameWidth = game.config.width;
    var gameHeight = game.config.height;
    var gameRatio = gameWidth / gameHeight;
    if (windowRatio < gameRatio) {
        canvas.style.width = windowWidth + "px";
        canvas.style.height = (windowWidth / gameRatio) + "px";
    }
    else {
        canvas.style.width = (windowHeight * gameRatio) + "px";
        canvas.style.height = windowHeight + "px";
    }
}
function checkOriention() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    if (h < w) {
        if (!GameVars_1.GameVars.initialised) {
            setTimeout(function () {
                GameManager_1.GameManager.init();
            }, 300);
        }
        document.getElementById("orientation").style.display = "none";
        document.getElementById("content").style.display = "block";
    }
    else {
        document.getElementById("orientation").style.display = "block";
        document.getElementById("content").style.display = "none";
    }
}


/***/ }),

/***/ "./src/scenes/BootScene.ts":
/*!*********************************!*\
  !*** ./src/scenes/BootScene.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var GameManager_1 = __webpack_require__(/*! ../GameManager */ "./src/GameManager.ts");
var Game_1 = __webpack_require__(/*! ../Game */ "./src/Game.ts");
var GameConstants_1 = __webpack_require__(/*! ../GameConstants */ "./src/GameConstants.ts");
var GameVars_1 = __webpack_require__(/*! ../GameVars */ "./src/GameVars.ts");
var BootScene = /** @class */ (function (_super) {
    __extends(BootScene, _super);
    function BootScene() {
        return _super.call(this, "BootScene") || this;
    }
    BootScene.onOrientationChange = function () {
        BootScene.currentInstance.time.addEvent({ delay: 100, callback: function () {
                GameVars_1.GameVars.scaleY = (GameConstants_1.GameConstants.GAME_HEIGHT / GameConstants_1.GameConstants.GAME_WIDTH) / (window.innerHeight / window.innerWidth);
                Game_1.Game.currentInstance.scale.refresh();
            }, callbackScope: BootScene.currentInstance });
    };
    BootScene.prototype.preload = function () {
        //
    };
    BootScene.prototype.create = function () {
        BootScene.currentInstance = this;
        GameManager_1.GameManager.setCurrentScene(this);
        this.scene.setVisible(false);
        if (GameVars_1.GameVars.currentScene.sys.game.device.os.desktop) {
            GameManager_1.GameManager.init();
        }
        else {
            if (window.innerWidth > window.innerHeight) {
                document.getElementById("orientation").style.display = "block";
                document.getElementById("content").style.display = "none";
            }
            else {
                GameManager_1.GameManager.init();
            }
        }
    };
    return BootScene;
}(Phaser.Scene));
exports.BootScene = BootScene;


/***/ }),

/***/ "./src/scenes/PreloadScene.ts":
/*!************************************!*\
  !*** ./src/scenes/PreloadScene.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var GameManager_1 = __webpack_require__(/*! ../GameManager */ "./src/GameManager.ts");
var GameConstants_1 = __webpack_require__(/*! ../GameConstants */ "./src/GameConstants.ts");
var GameVars_1 = __webpack_require__(/*! ../GameVars */ "./src/GameVars.ts");
var PreloadScene = /** @class */ (function (_super) {
    __extends(PreloadScene, _super);
    function PreloadScene() {
        var _this = _super.call(this, "PreloadScene") || this;
        PreloadScene.currentInstance = _this;
        return _this;
    }
    PreloadScene.prototype.preload = function () {
        this.composeScene();
        this.loadAssets();
    };
    PreloadScene.prototype.create = function () {
        GameManager_1.GameManager.onGameAssetsLoaded();
    };
    PreloadScene.prototype.composeScene = function () {
        var bck = this.add.graphics();
        bck.fillStyle(0xffffff);
        bck.fillRect(0, 0, GameConstants_1.GameConstants.GAME_WIDTH, GameConstants_1.GameConstants.GAME_HEIGHT);
        this.scaledItemsContainer = this.add.container(GameConstants_1.GameConstants.GAME_WIDTH / 2, 560);
        this.scaledItemsContainer.scaleY = GameVars_1.GameVars.scaleY;
        var barWidth = 550;
        var barWHeight = 20;
        var borderWidth = 3;
        var preloadBarCapsuleBorder = new Phaser.GameObjects.Graphics(this);
        preloadBarCapsuleBorder.fillStyle(0x015e80);
        preloadBarCapsuleBorder.fillRect(0, 0, barWidth + borderWidth * 2, barWHeight + borderWidth * 2);
        preloadBarCapsuleBorder.x = -barWidth / 2 - borderWidth;
        preloadBarCapsuleBorder.y = -borderWidth;
        this.scaledItemsContainer.add(preloadBarCapsuleBorder);
        var preloadBarCapsule = new Phaser.GameObjects.Graphics(this);
        preloadBarCapsule.fillStyle(0xc6d6dd);
        preloadBarCapsule.fillRect(0, 0, barWidth, barWHeight);
        preloadBarCapsule.x = -barWidth / 2;
        this.scaledItemsContainer.add(preloadBarCapsule);
        this.progressBar = new Phaser.GameObjects.Graphics(this);
        this.progressBar.fillStyle(0xff7b56);
        this.progressBar.fillRect(0, 0, barWidth, barWHeight);
        this.progressBar.x = -barWidth / 2;
        this.progressBar.scaleX = 0;
        this.scaledItemsContainer.add(this.progressBar);
    };
    PreloadScene.prototype.loadAssets = function () {
        this.load.atlas("texture_atlas_1", "assets/texture_atlas_1.png", "assets/texture_atlas_1.json");
        this.load.on("progress", this.updateLoadedPercentage, this);
    };
    PreloadScene.prototype.updateLoadedPercentage = function (percentageLoaded) {
        if (this.progressBar.scaleX < percentageLoaded) {
            this.progressBar.scaleX = percentageLoaded;
        }
    };
    return PreloadScene;
}(Phaser.Scene));
exports.PreloadScene = PreloadScene;


/***/ }),

/***/ "./src/scenes/board-scene/BoardContainer.ts":
/*!**************************************************!*\
  !*** ./src/scenes/board-scene/BoardContainer.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var BoardContainer = /** @class */ (function (_super) {
    __extends(BoardContainer, _super);
    function BoardContainer(scene) {
        var _this = _super.call(this, scene) || this;
        Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! @dimforge/rapier2d */ "./node_modules/@dimforge/rapier2d/rapier.js")); }).then(function (RAPIER) {
            console.log("HOLA");
            // Use the RAPIER module here.
            var gravity = { x: 0.0, y: -9.81 };
            var world = new RAPIER.World(gravity);
            // Create the ground
            var groundColliderDesc = RAPIER.ColliderDesc.cuboid(10.0, 0.1);
            world.createCollider(groundColliderDesc);
            // Create a dynamic rigid-body.
            var rigidBodyDesc = RAPIER.RigidBodyDesc.dynamic()
                .setTranslation(0.0, 1.0);
            var rigidBody = world.createRigidBody(rigidBodyDesc);
            // Create a cuboid collider attached to the dynamic rigidBody.
            var colliderDesc = RAPIER.ColliderDesc.cuboid(0.5, 0.5);
            var collider = world.createCollider(colliderDesc, rigidBody);
            // Game loop. Replace by your own game loop system.
            var gameLoop = function () {
                // Ste the simulation forward.  
                world.step();
                // Get and print the rigid-body's position.
                var position = rigidBody.translation();
                console.log("Rigid-body position: ", position.x, position.y);
                setTimeout(gameLoop, 16);
            };
            gameLoop();
        });
        return _this;
    }
    return BoardContainer;
}(Phaser.GameObjects.Container));
exports.BoardContainer = BoardContainer;


/***/ }),

/***/ "./src/scenes/board-scene/BoardManager.ts":
/*!************************************************!*\
  !*** ./src/scenes/board-scene/BoardManager.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var BoardManager = /** @class */ (function () {
    function BoardManager() {
    }
    BoardManager.init = function () {
        //
    };
    BoardManager.undo = function () {
        //
    };
    return BoardManager;
}());
exports.BoardManager = BoardManager;


/***/ }),

/***/ "./src/scenes/board-scene/BoardScene.ts":
/*!**********************************************!*\
  !*** ./src/scenes/board-scene/BoardScene.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var GameConstants_1 = __webpack_require__(/*! ../../GameConstants */ "./src/GameConstants.ts");
var GameManager_1 = __webpack_require__(/*! ../../GameManager */ "./src/GameManager.ts");
var HUD_1 = __webpack_require__(/*! ./HUD */ "./src/scenes/board-scene/HUD.ts");
var GUI_1 = __webpack_require__(/*! ./GUI */ "./src/scenes/board-scene/GUI.ts");
var BoardManager_1 = __webpack_require__(/*! ./BoardManager */ "./src/scenes/board-scene/BoardManager.ts");
var BoardContainer_1 = __webpack_require__(/*! ./BoardContainer */ "./src/scenes/board-scene/BoardContainer.ts");
var BoardScene = /** @class */ (function (_super) {
    __extends(BoardScene, _super);
    function BoardScene() {
        var _this = _super.call(this, "BoardScene") || this;
        BoardScene.currentInstance = _this;
        return _this;
    }
    BoardScene.prototype.create = function () {
        GameManager_1.GameManager.setCurrentScene(this);
        BoardManager_1.BoardManager.init();
        var tmpBackground = this.add.graphics();
        tmpBackground.fillStyle(0x222222);
        tmpBackground.fillRect(0, 0, GameConstants_1.GameConstants.GAME_WIDTH, GameConstants_1.GameConstants.GAME_HEIGHT);
        this.boardContainer = new BoardContainer_1.BoardContainer(this);
        this.add.existing(this.boardContainer);
        this.hud = new HUD_1.HUD(this);
        this.add.existing(this.hud);
        this.gui = new GUI_1.GUI(this);
        this.add.existing(this.gui);
        this.cameras.main.fadeIn(300, 255, 255, 255);
    };
    return BoardScene;
}(Phaser.Scene));
exports.BoardScene = BoardScene;


/***/ }),

/***/ "./src/scenes/board-scene/GUI.ts":
/*!***************************************!*\
  !*** ./src/scenes/board-scene/GUI.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var GUI = /** @class */ (function (_super) {
    __extends(GUI, _super);
    function GUI(scene) {
        return _super.call(this, scene) || this;
    }
    return GUI;
}(Phaser.GameObjects.Container));
exports.GUI = GUI;


/***/ }),

/***/ "./src/scenes/board-scene/HUD.ts":
/*!***************************************!*\
  !*** ./src/scenes/board-scene/HUD.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var HUD = /** @class */ (function (_super) {
    __extends(HUD, _super);
    function HUD(scene) {
        return _super.call(this, scene) || this;
    }
    return HUD;
}(Phaser.GameObjects.Container));
exports.HUD = HUD;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/dist/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=physics.debug.js.map