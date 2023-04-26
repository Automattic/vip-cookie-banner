# WP Privacy Toolset

This WordPress plugin is designed to implement the cookie banner and "do not sell" dialog from the wp-calypso project. It is designed to be used on a block theme.

## Use

1.  Add the plugin and activate
2.  Place the "Privacy Tools Consent Banner" block in a template part used on all pages—i.e. your footer. 
3.  Add the do-not-sell link to the same component as a normal link with the anchor `#do-not-sell-preferences`

## Todo

- [x] Store geolocation data in cookie
- [ ] Setup defaults for GTM storage preferences
- [x] Store chosen cookie banner preferences
- [x] Store chosen "do not sell" preferences
- [ ] Apply updates to GTM on load based on stored preferences
- [ ] Allow wp-admin editing of GTM code
- [ ] Cleanup initial plugin file
- [ ] Cleanup typescript from cloned code from wp-calypso
- [ ] Use package imports where possible for code from wp-calypso
- [ ] Setup CI flow to build plugin to a release or built branch
- [ ] Add basic WP plugin requirements for a public plugin (readme.txt, etc.)

## Development

1.  `cd block`
2.  `yarn`
3.  `yarn start`
