/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   src/ApiSecurityDocumentation.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

import {LitElement, html, css} from 'lit-element';

import {AmfHelperMixin} from '@api-components/amf-helper-mixin/amf-helper-mixin.js';

export {ApiSecurityDocumentation};

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
    AmfHelperMixin(
    Object) {
    readonly styles: any;

    /**
     * A security definition to render.
     * This should be AMF's type of `http://raml.org/vocabularies/security#SecurityScheme`.
     */
    security: object|null;

    /**
     * Computed value, scheme of the security
     */
    _scheme: object|null|undefined;

    /**
     * `raml-aware` scope property to use.
     */
    aware: string|null|undefined;

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
     * AMF headers model.
     * List of headers to apply to this scheme.
     * This value is updated automatically when `security` property change.
     */
    headers: Array<object|null>|null;

    /**
     * AMF query parameters model.
     * List of query parameters to apply to this scheme.
     * This value is updated automatically when `security` property change.
     */
    queryParameters: Array<object|null>|null;

    /**
     * AMF responses model.
     * List of responses applied to this security scheme.
     * This value is updated automatically when `security` property change.
     */
    responses: Array<object|null>|null;

    /**
     * AMF settings model for a security scheme.
     * This value is updated automatically when `security` property change.
     */
    settings: object|null;

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
    render(): any;

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
     * @param settings Computed settings object
     * @returns True if this settings represents OAuth 2 settings
     */
    _computeHasOA2Settings(settings: object|null|undefined): Boolean|null;

    /**
     * @param settings Computed settings object
     */
    _computeHasOA1Settings(settings: object|null|undefined): Boolean|null;
    _apiChangedHandler(e: any): void;
  }
}
