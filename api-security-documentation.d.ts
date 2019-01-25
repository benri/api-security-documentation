/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   api-security-documentation.html
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

/// <reference path="../polymer/types/polymer-element.d.ts" />
/// <reference path="../polymer/types/lib/elements/dom-if.d.ts" />
/// <reference path="../raml-aware/raml-aware.d.ts" />
/// <reference path="../markdown-styles/markdown-styles.d.ts" />
/// <reference path="../marked-element/marked-element.d.ts" />
/// <reference path="../iron-flex-layout/iron-flex-layout.d.ts" />
/// <reference path="../api-annotation-document/api-annotation-document.d.ts" />
/// <reference path="../api-parameters-document/api-parameters-document.d.ts" />
/// <reference path="../api-headers-document/api-headers-document.d.ts" />
/// <reference path="../api-responses-document/api-responses-document.d.ts" />
/// <reference path="../amf-helper-mixin/amf-helper-mixin.d.ts" />
/// <reference path="api-oauth2-settings-document.d.ts" />
/// <reference path="api-oauth1-settings-document.d.ts" />

declare namespace ApiElements {

  /**
   * `api-security-documentation`
   *
   * Documentation view for AMF security description
   *
   * ## Styling
   *
   * `<api-security-documentation>` provides the following custom properties and mixins for styling:
   *
   * Custom property | Description | Default
   * ----------------|-------------|----------
   * `--api-security-documentation` | Mixin applied to this elment | `{}`
   * `--arc-font-headline` | Theme mixin, Applied to H1 element | `{}`
   * `--api-security-documentation-title` | Mixin applied to the H1 element | `{}`
   * `--api-security-documentation-title-narrow` | Mixin applied to the H1 element in narrow layout | `{}`
   * `--arc-font-title` | Theme mixin, applied to h2 element | `{}`
   * `--api-security-documentation-main-section-title` | Mixin applied to main sections title element | `{}`
   * `--api-security-documentation-main-section-title-narrow` | Mixin applied to main sections title element in narrow layout | `{}`
   */
  class ApiSecurityDocumentation extends
    ApiElements.AmfHelperMixin(
    Object) {

    /**
     * `raml-aware` scope property to use.
     */
    aware: string|null|undefined;

    /**
     * A security definition to render.
     * This should be AMF's type of `http://raml.org/vocabularies/security#SecurityScheme`.
     */
    security: object|null;

    /**
     * Computed value, scheme of the security
     */
    readonly _scheme: object|null|undefined;

    /**
     * Security scheme type name.
     * The value is updated automatically when `security` property change.
     */
    type: string|null|undefined;

    /**
     * Security scheme description.
     * The value is updated automatically when `security` property change.
     */
    description: string|null|undefined;

    /**
     * Computed value, true when `description` has value.
     */
    readonly _hasDescription: boolean|null|undefined;

    /**
     * AMF headers model.
     * List of headers to apply to this scheme.
     * This value is updated automatically when `security` property change.
     */
    headers: Array<object|null>|null;

    /**
     * Computed value, true when `headers` property is set.
     */
    readonly _hasHeaders: boolean|null|undefined;

    /**
     * AMF query parameters model.
     * List of query parameters to apply to this scheme.
     * This value is updated automatically when `security` property change.
     */
    queryParameters: Array<object|null>|null;

    /**
     * Computed value, true when `queryParameters` has value.
     */
    readonly _hasQueryParameters: boolean|null|undefined;

    /**
     * AMF responses model.
     * List of responses applied to this security scheme.
     * This value is updated automatically when `security` property change.
     */
    responses: Array<object|null>|null;

    /**
     * Computed value, true when responses has any value.
     */
    readonly _hasResponses: object|null;

    /**
     * AMF settings model for a security scheme.
     * This value is updated automatically when `security` property change.
     */
    settings: object|null;

    /**
     * Computed value, true when `settings` proeprty is set.
     */
    readonly _hasSettings: boolean|null|undefined;

    /**
     * Computed value, true when `settings` proeprty is set and represent
     * OAuth2 security settings.
     */
    readonly _hasOA2Settings: boolean|null|undefined;

    /**
     * Computed value, true when `settings` proeprty is set and represent
     * OAuth1 security settings.
     */
    readonly _hasOA1Settings: boolean|null|undefined;

    /**
     * Computed value from current `method`. True if the model contains
     * custom properties (annotations in RAML).
     */
    readonly hasCustomProperties: boolean|null|undefined;

    /**
     * Set to render a mobile friendly view.
     */
    narrow: boolean|null|undefined;

    /**
     * Computes value for security type.
     *
     * @param shape Scheme model.
     */
    _computeType(shape: object|null): String|null|undefined;

    /**
     * Computes value of security scheme's scheme model.
     *
     * @param security AMF security description.
     * @returns Security's scheme model.
     */
    _computeScheme(security: any[]|object|null): object|null;

    /**
     * Computes values for prroperties like `type`, `description`, `headers`,
     * `queryParameters`, `responses` and `settings` when `scheme` property
     * change.
     *
     * @param scheme Scheme model to process.
     */
    _schemeChanged(scheme: object|null): void;

    /**
     * Computes scheme's settings model.
     *
     * @param shape Scheme model.
     * @returns Settings model
     */
    _computeSettings(shape: object|null): object|null|undefined;

    /**
     * Computes value for `_hasOA2Settings`
     *
     * @param hasSettings Value of `_hasSettings` proeprty
     * @param settings Computed settings object
     */
    _computeHasOA2Settings(hasSettings: Boolean|null, settings: object|null|undefined): Boolean|null;

    /**
     * Computes value for `_hasOA1Settings`
     *
     * @param hasSettings Value of `_hasSettings` proeprty
     * @param settings Computed settings object
     */
    _computeHasOA1Settings(hasSettings: Boolean|null, settings: object|null|undefined): Boolean|null;
  }
}

interface HTMLElementTagNameMap {
  "api-security-documentation": ApiElements.ApiSecurityDocumentation;
}
