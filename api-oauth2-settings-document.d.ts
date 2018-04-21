/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   api-oauth2-settings-document.html
 */

/// <reference path="../polymer/types/polymer-element.d.ts" />
/// <reference path="../polymer/types/lib/elements/dom-if.d.ts" />
/// <reference path="../markdown-styles/markdown-styles.d.ts" />
/// <reference path="../iron-flex-layout/iron-flex-layout.d.ts" />
/// <reference path="../amf-helper-mixin/amf-helper-mixin.d.ts" />

declare namespace ApiElements {

  /**
   * `api-oauth2-settings-document`
   *
   * Documentation view for AMF OAuth2 security settings
   *
   * ## Styling
   *
   * `<api-oauth2-settings-document>` provides the following custom properties and mixins for styling:
   *
   * Custom property | Description | Default
   * ----------------|-------------|----------
   * `--api-oauth2-settings-document` | Mixin applied to this elment | `{}`
   */
  class ApiOauth2SettingsDocument extends
    ApiElements.AmfHelperMixin(
    Polymer.Element) {
    settings: object|null|undefined;

    /**
     * Computed value from current `method`. True if the model contains
     * custom properties (annotations in RAML).
     */
    readonly hasCustomProperties: boolean|null|undefined;
    readonly accessTokenUri: string|null|undefined;
    readonly hasAccessTokenUri: boolean|null|undefined;
    readonly authorizationUri: string|null|undefined;
    readonly hasAuthorizationUri: boolean|null|undefined;
    readonly authorizationGrants: any[]|null|undefined;
    readonly hasAuthorizationGrants: boolean|null|undefined;
    readonly scopes: any[]|null|undefined;
    readonly hasScopes: any[]|null|undefined;
    _computeAccessTokenUri(settings: any): any;
    _computeAuthorizationUri(settings: any): any;
    _computeAuthorizationGrants(settings: any): any;
    _computeScopes(settings: any): any;
  }
}

interface HTMLElementTagNameMap {
  "api-oauth2-settings-document": ApiElements.ApiOauth2SettingsDocument;
}
